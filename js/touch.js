// var Px = [0, 5, 15, 30, 40, 45, 50, 60, 75, 85, 90, 95, 105, 120, 130, 135, 140, 150, 165, 175, 180, 185, 195, 210, 220, 225, 230, 240, 255, 265, 270, 275, 285, 300, 310, 315, 320, 330, 345, 355]
// var Py = [0, 5, 15, 30, 40, 45, 50, 60, 75, 85, 90, 95, 105, 120, 130, 135, 140, 150, 165, 175, 180, 185, 195, 210, 220, 225, 230, 240, 255, 265, 270, 275, 285, 300, 310, 315, 320, 330, 345, 355]

var Px = []
var Py = []
// var MATRIX = []
var DIVISIONS = 24

for (var i = 0; i < DIVISIONS; i++) {
    Px[i] = Py[i] = i * 15
    // var xMatrix = []
    // for (var j = 0; j < DIVISIONS; j++) {
    //     xMatrix.push([0, 0, 0, 0, 0, 0])
    // }
    // MATRIX.push(xMatrix)
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
    // 4 of each, repeating - right side up - top showing
    [-1, 1], // left top right
    [-1, -1], // right top left
    [1, 1],  // left bottom left
    [1, -1]   // right bottom left
    // next 16 - upside down, repeats in movement
]
var MATRIX_TEMPLATE_DIRECTED_POSITIONS = [
    // right side up
    // left top right, x-index offset, y-index offset
    [4, 0, 1, 18, 0],
    [3, 0, 4, 18, 6],
    [2, 0, 3, 18, 12],
    [1, 0, 2, 18, 18],
    // right top left
    [1, 0, 4, 18, 3],
    [4, 0, 3, 18, 9],
    [3, 0, 2, 18, 15],
    [2, 0, 1, 18, 21],

    // next 8 - top and bottom are flipped (5 instead of 0)


    // next 16 - upside down, 1'st and 3'rd are swapped, second is flipped (5 to 0 and back),
    // initial offset 180 abs(-12), 180 (12)

]

// 4 of each, repeating - right side up - top showing
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

var VALUE_MATRIX = [
    [],[],[],[],[],[],
    [],[],[],[],[],[],
    [],[],[],[],[],[],
    [],[],[],[],[],[]
]

populateValueMatrix();

function populateValueMatrix() {
    for(let i = 0; i < 32; i++) {
        let subMatrixPositions = MATRIX_TEMPLATE_DIRECTED_POSITIONS[i]
        let moveSubMatrix = MATRIX_MOVE_X_Y[i]
        let startY = getStartY(moveSubMatrix)
        let endY = getEndY(moveSubMatrix)
        let yPlus = isPositiveDirectionY(moveSubMatrix)
        for(let y = startY; yPlus ? y < endY : y >= endY; yPlus ? y++ : y--) {
            let startX = getStartX(moveSubMatrix)
            let endX = getEndX(moveSubMatrix)
            let xPlus = isPositiveDirectionX(moveSubMatrix)
            for(let x = startX; xPlus ? x < endX : x >= endX; xPlus ? x++ : x--) {
                console.log('.')
            }
        }
    }
}

function isPositiveDirectionX(
    moveSubMatrix
) {
    return moveSubMatrix[0] == 1 ? 1 : 0
}

function getStartX(
    moveSubMatrix
) {
    return moveSubMatrix[0] == 1 ? 0 : 3
}

function getEndX(
    moveSubMatrix
) {
    return moveSubMatrix[0] == 1 ? 4 : 0
}

function isPositiveDirectionY(
    moveSubMatrix
) {
    return moveSubMatrix[1] == 1 ? 1 : 0
}

function getStartY(
    moveSubMatrix
) {
    return moveSubMatrix[1] == 1 ? 0 : 6
}

function getEndY(
    moveSubMatrix
) {
    return moveSubMatrix[1] == 1 ? 7 : 0
}


// function S(a, b, c, d, e, f) {
//     MATRIX[viewport.xi][viewport.yi] = [a, b, c, d, e, f]
// }
//
// function printMatrix() {
//     for (var i = 0; i < DIVISIONS; i++) {
//         var xMatrix = MATRIX[i]
//         for (var j = 0; j < DIVISIONS; j++) {
//             var yMatrix = xMatrix[j]
//             var str = ''
//             for (var k = 0; k < 6; k++) {
//                 str = str + yMatrix[k] + '\t'
//             }
//             console.log(str)
//         }
//         console.log()
//         MATRIX.push(xMatrix)
//     }
//     console.log()
//     console.log()
//     console.log()
// }

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