var D = document

// View Port
var VP = gQ('#viewport')

// Global (per Element) Event Listener map
var LM = {
    tM: new Map(), // Target element Map
    // Add add event handler to element
    ad(
        tg, // element
    ) {
        return eCO(this.tM, tg,
            // Per element Event listener map
            {
                lM: new Map(), // Listener Map
                // And a listener fo a particular event
                ad(
                    eN, // event name
                    ln // listener
                ) {
                    // add to array
                    eCA(this.lM, eN).push(ln)
                    tg.addEventListener(eN, ln)

                    return (eN2, ln2) => {
                        return this.ad(eN2, ln2)
                    }
                },
                rm(
                    eN // event name
                ) {
                    ar = this.lM.get(eN).forEach((ln) => {
                        tg.removeEventListener(eN, ln)
                    })
                    delete this.lM.delete(eN)

                    return (eN2) => {
                        return this.rm(eN2)
                    }
                }
            })
    }
}

// Ensure Child Object
function eCO(
    mp, // map
    k, // key
    o // object
) {
    if (mp.has(k)) {
        return mp.get(k)
    }
    mp.set(k, o)

    return o
}

// Ensure Child Array
function eCA(
    mp, // key
    k // map
) {
    let a = mp.get(k)
    if (a) {
        return a
    }
    a = []
    mp.set(k, a)

    return a
}

// Get by query selector
function gQ(
    sl // selector
) {
    return D.querySelector(sl)
}

// dispatch event
function dE(
    tg, // target
    eN, // Event Name,
    eO // Event Object
) {
    tg.dispatchEvent(new CustomEvent(eN, { detail: eO }))
    return (
        eO2 // event object
    ) => {
        return dE(tg, eN, eO2)
    }
}

var mouse = {
        start: {}
    },
    touch = D.ontouchmove !== undefined,
    viewport = {
        x: -10,
        y: 20,
        el: gQ('#cube'),
        move: function (coords) {
            if (coords) {
                coords
                if (typeof coords.x === "number") this.x = coords.x
                if (typeof coords.y === "number") this.y = coords.y
            }

            this.el.style["transform"] = "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg)"
        },
        reset: function () {
            this.move({x: 0, y: 0})
        }
    }

viewport.duration = function () {
    var d = touch ? 50 : 500
    VP.style.transitionDuration = d + "ms"
    return d
}()

// document listener map
var dLM = LM.ad(D)

// Prevent default
function pD(
    ev // Event
) {
    ev.preventDefault()
}

dLM.ad('keydown', function (ev) {
    switch (ev.keyCode) {
        case 37: // left
            viewport.move({y: viewport.y - 30})
            break

        case 38: // up
            // prevent default
            pD(ev)
            viewport.move({x: viewport.x + 30})
            break

        case 39: // right
            viewport.move({y: viewport.y + 30})
            break

        case 40: // down
            // prevent default
            pD(ev)
            viewport.move({x: viewport.x - 30})
            break

        case 27: //esc
            viewport.reset()
            break

        default:
            break
    }

})
('mousedown', oMdTs)
('touchstart', oMdTs)
('mouseup', rmMmTm)
('touchend', rmMmTm)

// is tag
function iT(
    t, // target
    tN, // tag name
    aM  // aggregate match
) {
    if (!tN) {
        return aM
    }
    if (!aM) {
        aM = t.tagName === tN
    }
    return function (tN) {
        return iT(t, tN, aM)
    }
}

/**
 * On mousedown or touchstart
 */
function oMdTs(
    ev // Event
) {

    delete mouse.last

    // clicks on links, images, or videos
    if (iT(ev.target, 'A')('IFRAME')()) {
        return true
    }

    // ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
    let p = ev.touches ? ev.touches[0] : ev
    mouse.start.x = p.screenX
    mouse.start.y = p.screenY
    dLM.ad('mousemove', oMmTm)('touchmove', oMmTm)
}


/**
 * On mousemove or touchmove
 */
function oMmTm(
    ev // event
) {
    let t = ev.touches

    // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
    if (!touch || !(t && t.length > 1)) {
        ev.preventDefault()
        let p = t ? t[0] : ev
        // Get touch co-ords
        // ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
        // dispatch 'move-viewport' event
        dE(VP, 'move-viewport', {x: p.screenX, y: p.screenY})
    }
}

/**
 * Remove mousemove or touchmove
 */
function rmMmTm() {
    dLM.rm('mousemove')('touchmove')
}

LM.ad(VP).ad('move-viewport', function (
    ev // event
) {
    let movedMouse = ev.detail;

    // Reduce movement on touch screens
    var movementScaleFactor = touch ? 4 : 1

    if (!mouse.last) {
        mouse.last = mouse.start
    } else {
        if (forward(mouse.start.x, mouse.last.x) != forward(mouse.last.x, movedMouse.x)) {
            mouse.start.x = mouse.last.x
        }
        if (forward(mouse.start.y, mouse.last.y) != forward(mouse.last.y, movedMouse.y)) {
            mouse.start.y = mouse.last.y
        }
    }

    viewport.move({
        x: viewport.x + parseInt((mouse.start.y - movedMouse.y) / movementScaleFactor),
        y: viewport.y - parseInt((mouse.start.x - movedMouse.x) / movementScaleFactor)
    })

    mouse.last.x = movedMouse.x
    mouse.last.y = movedMouse.y

    function forward(v1, v2) {
        return v1 >= v2 ? true : false
    }
})

/* Just for fun */
// if(!touch) {
//     $('.cube > div').eq(2).html('<object width="360" height="360"><param name="movie" value="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amphl=en_GB&amprel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amphl=en_GB&amprel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="360" height="360"></embed></object>')
// }