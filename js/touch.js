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
    // right side up
    [-1, 1], // right top left
    [-1, -1], // left top right
    [1, 1],  // left bottom left
    [1, -1]   // right bottom left
    // upside down, repeats in movement
]
var MATRIX_MOVE_RIGHT = 1;
var MATRIX_TEMPLATE_DIRECTED_POSITIONS = [
    // right side up
    // left top right, x-index offset, y-index offset
    [5, 1, 2, 0, 0],
    [2, 1, 3, 0, -6],
    [3, 1, 4, 0, -12],
    [4, 1, 5, 0, -18],
    // right top left
    [2, 1, 5, 0, 0],
    [5, 1, 4, 0, 6],
    [4, 1, 3, 0, 12],
    [3, 1, 2, 0, 18],

    // top and bottom are flipped

    // left bottom right
    // [5, 6, 2, 0, 0],
    // [2, 6, 3, 0, -6],
    // [3, 6, 4, 0, -12],
    // [4, 6, 5, 0, -18],
    // right bottom left
    // [2, 6, 5, 0, 0],
    // [5, 6, 4, 0, 6],
    // [4, 6, 3, 0, 12],
    // [3, 6, 2, 0, 18],

    // upside down, 1'st and 3'rd are swapped, second is flipped,
    // initial offset -180, 180

]

// upside down, repeats in movement
for (let i = 0; i < 4; i++) {
    MATRIX_MOVE_X_Y.push(MATRIX_MOVE_X_Y[i])
}

// same for every 4 MATRIX_TEMPLATE_DIRECTED POSITIONS
var temp_matrix_move_x_y = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++)
        temp_matrix_move_x_y.push(MATRIX_MOVE_X_Y[i])
}
MATRIX_MOVE_X_Y = temp_matrix_move_x_y

// top and bottom are flipped
for (let i = 0; i < 8; i++) {
    let template = MATRIX_TEMPLATE_DIRECTED_POSITIONS[i]
    MATRIX_TEMPLATE_DIRECTED_POSITIONS.push([template[0], 6, template[2], template[3], template[4]])
}

// // upside down, 1'st and 3'rd are swapped, second is flipped,
//     // initial offset -180, 180
for (let i = 0; i < 16; i++) {
    let template = MATRIX_TEMPLATE_DIRECTED_POSITIONS[i]
    let upDown = template[1] == 1 ? 6 : 1
    MATRIX_TEMPLATE_DIRECTED_POSITIONS.push([template[2], upDown, template[0], template[3] - 180, template[4] + 180])
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
            if (moveX)
                this.x = moveCoordinates(Px, this.xi += xBy)[0]
            if (moveY)
                this.y = moveCoordinates(Py, this.yi += yBy)[0]

            this.el.style["transform"] = "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg)"
        },
        reset() {
            this.xi = 0
            this.yi = 0
            this.move(0, 0, 0, 0)
        }
    }

function move(xMove, yMove) {
    if(yMove == 24) {
        return;
    }
    setTimeout(function () {
        if(xMove == 24) {
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
setTimeout(function () {
    move(0, 0)
});

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