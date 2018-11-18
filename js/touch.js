var Px = [0, 45, 90, 135, 180, 225, 270, 315]
var Py = [0, 45, 90, 135, 180, 225, 270, 315]

/*
Need to be able to find 2 numbers to move by by:
    Starting rotation:
        x
        y
    Direction of movement
        x
        y
    So that's a 4 dimensional array
var M = [ // starting x rotations
    [ // x = 0
        [ // y = 0
            [ // m(x) = 0
                0, 0, 0
            ]
        ]
    ],
    [ // x = ]
]
 */


var mouse = {
        start: {}
    },
    touch = D.ontouchmove !== undefined,
    viewport = {
        x: 0, // -35.2
        xi: 0,
        y: 0,
        yi: 0, // 45
        el: gQ('#cube'),
        move(
            moveX, xBy, moveY, yBy
        ) {
            if (moveX)
                this.x = moveCoordinates(Px, this.xi += xBy)
            else if (moveY)
                this.y = moveCoordinates(Py, this.yi += yBy)
            else
                return

            this.el.style["transform"] = "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg)"
        },
        reset() {
            this.move({x: 0, y: 0})
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
    if(currentIndex < 0) {
        multiplier = -1;
        currentIndex = -currentIndex;
    }
    let page = currentIndex / 8
    let index = currentIndex % 8

    if (index === 8) {
        page++
        index = 0
    }

    return (page * 360 + percentArray[index]) * multiplier;
}


/* Just for fun */
// if(!touch) {
//     $('.cube > div').eq(2).html('<object width="360" height="360"><param name="movie" value="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amphl=en_GB&amprel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amphl=en_GB&amprel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="360" height="360"></embed></object>')
// }