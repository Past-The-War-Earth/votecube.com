var Px = []
var Py = []
var DIVISIONS = 24

for (var i = 0; i < DIVISIONS; i++) {
    Px[i] = Py[i] = i * 15
}

// 5   1   2        5   1   2        5   1   2       5   1   2
var MATRIX_VALUE_TEMPLATE =
    [[[0, 0, 100], [20, 0, 80], [40, 0, 60], [50, 0, 50]],
        [[0, 20, 80], [10, 10, 80], [30, 10, 60], [45, 45, 10]],
        [[0, 40, 60], [5, 35, 60], [15, 35, 50], [33, 33, 33]],
        [[0, 50, 50], [0, 50, 50], [20, 40, 40], [30, 40, 30]],
        [[0, 60, 40], [0, 66, 33], [10, 60, 30], [20, 60, 20]],
        [[0, 80, 20], [0, 85, 15], [0, 90, 10], [0, 100, 0]],
        [[0, 100, 0], [0, 100, 0], [0, 100, 0], [0, 100, 0]]]

// same for every 4 MATRIX_TEMPLATE_DIRECTED POSITIONS
var MATRIX_MOVE_X_Y = [
    // right side up
    // 4 sequential positions for each entry, repeating (16 total)
    [-1, 1], // left top right
    [-1, -1], // right top left
    [1, 1],  // left bottom left
    [1, -1]   // right bottom left
    // next 16 - upside down, repeats in movement
]
var MATRIX_TEMPLATE_DIRECTED_POSITIONS = [
    // right side up
    // left top right, x-index start, y-index start
    [4, 0, 1, 24, 0],
    [3, 0, 4, 24, 6],
    [2, 0, 3, 24, 12],
    [1, 0, 2, 24, 18],
    // right top left
    [1, 0, 4, 18, 3],
    [4, 0, 3, 18, 9],
    [3, 0, 2, 18, 15],
    [2, 0, 1, 18, 21],

    // next 8 - top and bottom are flipped (5 instead of 0)


    // next 16 - upside down, 1'st and 3'rd are swapped, second is flipped (5 to 0 and back),
    // initial offset 180 abs(-12), 180 (+12%24)

]

// right side up
// 4 sequential positions for each entry, repeating (16 total)
var temp_matrix_move_x_y = [];
for (let i = 0; i < 4; i++) {
    for (let i = 0; i < 4; i++) {
        temp_matrix_move_x_y.push(MATRIX_MOVE_X_Y[i]);
    }
}

// next 16 - upside down, repeats in movement
for (let i = 0; i < 16; i++) {
    temp_matrix_move_x_y.push(temp_matrix_move_x_y[i])
}
MATRIX_MOVE_X_Y = temp_matrix_move_x_y

// next 8 - top and bottom are flipped (5 instead of 0)
for (let i = 0; i < 8; i++) {
    let template = MATRIX_TEMPLATE_DIRECTED_POSITIONS[i]
    MATRIX_TEMPLATE_DIRECTED_POSITIONS.push([template[0], 5, template[2], template[3], template[4]])
}

// next 16 - upside down, 1'st and 3'rd are swapped, second is flipped (5 to 0 and back),
// initial offset -180 abs(-12), 180 (12)
for (let i = 0; i < 16; i++) {
    let template = MATRIX_TEMPLATE_DIRECTED_POSITIONS[i]
    let upDown = template[1] == 0 ? 5 : 0
    MATRIX_TEMPLATE_DIRECTED_POSITIONS.push([template[2], upDown, template[0], Math.abs(template[3] - 12), template[4] + 12])
}

var VALUE_MATRIX = []
for (let i = 0; i < 24; i++) {
    let xSubMatrix = []
    VALUE_MATRIX.push(xSubMatrix)
    for (let j = 0; j < 24; j++) {
        xSubMatrix.push([])
    }
}

populateValueMatrix();

function populateValueMatrix() {
    for (let i = 0; i < 32; i++) {
        let subMatrixPositions = MATRIX_TEMPLATE_DIRECTED_POSITIONS[i]
        let moveSubMatrix = MATRIX_MOVE_X_Y[i]

        let positionStartX = subMatrixPositions[3]
        let positionStartY = subMatrixPositions[4]
        let loopStartX = moveSubMatrix[1] == 1 ? 0 : 6
        let loopEndX = moveSubMatrix[1] == 1 ? 7 : 0
        let isPositiveDirectionX = moveSubMatrix[1] == 1 ? 1 : 0
        for (let x = loopStartX;
             isPositiveDirectionX ? x < loopEndX : x >= loopEndX;
             isPositiveDirectionX ? x++ : x--) {
            let loopStartY = moveSubMatrix[0] == 1 ? 0 : 3
            let loopEndY = moveSubMatrix[0] == 1 ? 4 : 0
            let isPositiveDirectionY = moveSubMatrix[0] == 1 ? 1 : 0
            let xValueTemplate = MATRIX_VALUE_TEMPLATE[x]
            for (let y = loopStartY;
                 isPositiveDirectionY ? y < loopEndY : y >= loopEndY;
                 isPositiveDirectionY ? y++ : y--) {
                let yValueTemplate = xValueTemplate[y]
                let values = [0, 0, 0, 0, 0, 0]
                values[subMatrixPositions[0]] = yValueTemplate[0]
                values[subMatrixPositions[1]] = yValueTemplate[1]
                values[subMatrixPositions[2]] = yValueTemplate[2]
                VALUE_MATRIX[(positionStartX + x) % 24][(positionStartY + y) % 24]
                    = values
            }
        }
    }
}

var mouse = {
        start: {}
    },
    touch = D.ontouchmove !== undefined,
    viewport = {
        x: 0,
        xi: 0,
        y: 0,
        yi: 0,
        el: gQ('#cube'),
        move(
            moveX, xBy, moveY, yBy
        ) {
            if (!moveX && !moveY)
                return
            if (moveX)
                this.x = moveCoordinates(Px, this.xi += xBy)[0]
            if (moveY)
                this.y = moveCoordinates(Py, this.yi += yBy)[0]
            // console.log('x: ' + this.x + '\t\ty: ' + this.y);
            // console.log('xi: ' + this.xi + '\t\tyi: ' + this.yi);
            let xiRemainder = getMod24AbsRemainder(this.xi)
            let yiRemainder = getMod24AbsRemainder(this.yi)

            // Hav a position, now need to map it to the right frame of matrix

            let boundaryX = xiRemainder % 6 == 0
            let boundaryY = yiRemainder % 6 == 0

            if (boundaryX && boundaryY) {
                console.log('axis-aligned full square');
            }

            setDisplayedSurfacePercentages(VALUE_MATRIX[xiRemainder][yiRemainder])
            console.log('xiRem: ' + xiRemainder + '\t\tyiRem: ' + yiRemainder);

            this.el.style["transform"] = "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg)"
        },
        reset() {
            this.xi = 0
            this.yi = 0
            this.move(0, 0, 0, 0)
        }
    }

function getMod24AbsRemainder(num) {
    let remainder = num % DIVISIONS
    if (remainder < 0) {
        remainder = 24 + remainder
    }
    // remainder = Math.round(remainder)
    // if (remainder == 24) {
    //     remainder = 0
    // }
    return remainder
}


function move(xMove, yMove) {
    if (yMove == 24) {
        return;
    }
    setTimeout(function () {
        if (xMove == 24) {
            moveY(0, ++yMove);
        } else {
            moveX(++xMove, yMove);
        }
    }, moveSpeed);
}

function moveX(x, y) {
    viewport.move(0, 0, 1, 1)
    move(x, y)
}

function moveY(x, y) {
    viewport.move(1, 1)
    move(x, y)
}

// setTimeout(function () {
//     move(0, 0)
// });

viewport.duration = function () {
    var d = touch ? 50 : 500
    VP.style.transitionDuration = d + "ms"
    return d
}()

var DISPLAYED_SURFACE_PERCENTAGES = [gQ('#n0'), gQ('#n1'), gQ('#n2'), gQ('#n3'), gQ('#n4'), gQ('#n5')]

function setDisplayedSurfacePercentages(values) {
    for(let i = 0; i < 6; i++) {
        DISPLAYED_SURFACE_PERCENTAGES[i].innerText = values[i]
    }
}
setDisplayedSurfacePercentages(VALUE_MATRIX[0][0])

function moveCoordinates(
    percentArray,
    currentIndex
) {
    let multiplier = 1;
    if (currentIndex < 0) {
        multiplier = -1;
        currentIndex = -currentIndex;
    }
    let page = Math.floor(currentIndex / DIVISIONS)
    let index = currentIndex % DIVISIONS

    if (index === DIVISIONS) {
        page++
        index = 0
    }

    let angle = percentArray[index];

    let rotation = (page * 360 + angle) * multiplier;

    return [rotation, angle, index, page, multiplier]
}


/* Just for fun */
// if(!touch) {
//     $('.cube > div').eq(2).html('<object width="360" height="360"><param name="movie" value="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amphl=en_GB&amprel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amphl=en_GB&amprel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="360" height="360"></embed></object>')
// }