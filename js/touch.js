// var Px = [0, 5, 15, 30, 40, 45, 50, 60, 75, 85, 90, 95, 105, 120, 130, 135, 140, 150, 165, 175, 180, 185, 195, 210, 220, 225, 230, 240, 255, 265, 270, 275, 285, 300, 310, 315, 320, 330, 345, 355]
// var Py = [0, 5, 15, 30, 40, 45, 50, 60, 75, 85, 90, 95, 105, 120, 130, 135, 140, 150, 165, 175, 180, 185, 195, 210, 220, 225, 230, 240, 255, 265, 270, 275, 285, 300, 310, 315, 320, 330, 345, 355]

var Px = []
var Py = []
var MATRIX = []
var DIVISIONS = 24

for(var i = 0; i < DIVISIONS; i++) {
    Px[i] = Py[i] = i * 15
    var xMatrix = []
    for(var j = 0; j < DIVISIONS; j++) {
        // xMatrix.push([0, 0, 0, 0, 0, 0])
    }
    MATRIX.push(xMatrix)
}
// 3-D
// 10, 10, 80       30, 10, 60      45, 45, 10
// 5,  35, 60       15, 35, 50      33, 33, 33
//                  20, 40, 30      30, 40, 30
//                  10, 60, 30      20, 60, 20
//                                  10, 90,  0      15, 85,  0

// 2-D
// 20, 80
// 40, 60
// 50, 50
/*
Need to be able to find 2 numbers to move by by:
    Starting rotation:
        x
        y
    Direction of movement
        x
        y
    So that'startCoords a 4 dimensional array
var M = [ // starting x rotations
    [ // x = 0
        [ // y = 0
            [ // mouse(x) = 0
                0, 0, 0
            ]
        ]
    ],
    [ // x = ]
]
 */

function S(a, b, c, d, e, f) {
    MATRIX[viewport.xi][viewport.yi] = [a, b, c, d, e, f]
}

function printMatrix() {
    for(var i = 0; i < DIVISIONS; i++) {
        var xMatrix = MATRIX[i]
        for(var j = 0; j < DIVISIONS; j++) {
            var yMatrix = xMatrix[j]
            var str = ''
            for(var k = 0; k < 6; k++) {
                str = str + yMatrix[k] + '\t'
            }
            console.log(str)
        }
        console.log()
        MATRIX.push(xMatrix)
    }
    console.log()
    console.log()
    console.log()
}

var mouse = {
        start: {}
    },
    touch = D.ontouchmove !== undefined,
    viewport = {
        x: -30,
        xi: -2,
        y: -45,
        yi: -3,
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