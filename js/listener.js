var D = document

// View Port
var VP = gQ('#viewport')

// document listener map
var dLM = LM.ad(D)


dLM.ad('keydown', function (ev) {
    switch (ev.keyCode) {
        case 37: // left
            viewport.move(0, 0, 1, -1)
            break

        case 38: // up
            // prevent default
            pD(ev)
            viewport.move(1, 1)
            break

        case 39: // right
            viewport.move(0, 0, 1, 1)
            break

        case 40: // down
            // prevent default
            pD(ev)
            viewport.move(1, -1)
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

