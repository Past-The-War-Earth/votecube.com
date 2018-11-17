var el = document.createElement('div');

var d = document;

var vp = gcl('.viewport');

// Event Listeners
var eLs = {
    mp: {},
    ad(ev, ln) {
        eCA(this.mp, ev).push(ln)
    }
};

var evLn = {
    mp: {},
    ad(ev, ln) {
        eCA(this.mp, ev).push(ln)
    },
    rm(ev) {
        ar = mp[ev]
        delete mp[ev]

        return ar
    }
}

// Ensure Child Map
function eCM(
    mp, // map
    k // key
) {
    if (mp[k]) {
        return mp[k]
    }
    return mp[k] = {}
}

// Ensure Child Array
function eCA(
    mp, // key
    k // map
) {
    if (mp[k]) {
        return mp[k]
    }
    return mp[k] = []
}

// Get by Class Name
function gCN(
    cl // class name
) {
    return d.getElementsByClassName(cl)
}

// Add event listener
function aEL(
    tg, // target
    ev, // event
    cb // callback
) {
    tg.addEventListener(ev, cb)


    return function (ev2, cb2) {
        tg.addEventListener(ev2, cb2)
    }
}

// Remove Event Listener
function rEL(
    tg, // target
    ev // event
) {
    tg.removeEventListener(ev)
    return function (ev2) {
        tg.removeEventListener(ev2)
    }
}

// dispatch event
function dE(
    tg, // target
    ev // event
) {
    tg.dispatchEvent(ev)
    return function (ev2) {
        tg.dispatchEvent(ev2)
    }
}

var mouse = {
        start: {}
    },
    touch = d.ontouchmove !== undefined,
    viewport = {
        x: -10,
        y: 20,
        el: $('.cube')[0],
        move: function (coords) {
            if (coords) {
                if (typeof coords.x === "number") this.x = coords.x;
                if (typeof coords.y === "number") this.y = coords.y;
            }

            this.el.style["transform"] = "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg)";
        },
        reset: function () {
            this.move({x: 0, y: 0});
        }
    };

viewport.duration = function () {
    var d = touch ? 50 : 500;
    viewport.el.style["transitionDuration"] = d + "ms";
    return d;
}();

var adD = aEL(document, 'keydown', function (ev) {
    switch (ev.keyCode) {
        case 37: // left
            viewport.move({y: viewport.y - 90});
            break;

        case 38: // up
            ev.preventDefault();
            viewport.move({x: viewport.x + 90});
            break;

        case 39: // right
            viewport.move({y: viewport.y + 90});
            break;

        case 40: // down
            ev.preventDefault();
            viewport.move({x: viewport.x - 90});
            break;

        case 27: //esc
            viewport.reset();
            break;

        default:
            break;
    }
    ;
})
('mousedown', oMdTs)
('touchstart', oMdTs);

// is tag
function iT(
    tN // tag name
) {
    if(!tN) {
        return iT;
    }
    return iT
}

/**
 * On mousedown or touchstart
 */
function oMdTs(ev) {
    delete mouse.last;
    // clicks on links, images, or videos
    if ($(ev.target).is('a, iframe')) {
        return true;
    }

    ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null;
    mouse.start.x = ev.pageX;
    mouse.start.y = ev.pageY;
    $(document).bind('mousemove touchmove', function (event) {
        // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
        if (!touch || !(event.originalEvent && event.originalEvent.touches.length > 1)) {
            event.preventDefault();
            // Get touch co-ords
            event.originalEvent.touches ? event = event.originalEvent.touches[0] : null;
            $('.viewport').trigger('move-viewport', {x: event.pageX, y: event.pageY});
        }
    });

    $(document).bind('mouseup touchend', function () {
        $(document).unbind('mousemove touchmove');
    });

}

/**
 * On mouseove or touchmove
 */
function onMmTm(event) {
    // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
    if (!touch || !(event.originalEvent && event.originalEvent.touches.length > 1)) {
        event.preventDefault();
        // Get touch co-ords
        event.originalEvent.touches ? event = event.originalEvent.touches[0] : null;
        $('.viewport').trigger('move-viewport', {x: event.pageX, y: event.pageY});
    }
}

ade(vp, 'move-viewport', function (evt, movedMouse) {

    // Reduce movement on touch screens
    var movementScaleFactor = touch ? 4 : 1;

    if (!mouse.last) {
        mouse.last = mouse.start;
    } else {
        if (forward(mouse.start.x, mouse.last.x) != forward(mouse.last.x, movedMouse.x)) {
            mouse.start.x = mouse.last.x;
        }
        if (forward(mouse.start.y, mouse.last.y) != forward(mouse.last.y, movedMouse.y)) {
            mouse.start.y = mouse.last.y;
        }
    }

    viewport.move({
        x: viewport.x + parseInt((mouse.start.y - movedMouse.y) / movementScaleFactor),
        y: viewport.y - parseInt((mouse.start.x - movedMouse.x) / movementScaleFactor)
    });

    mouse.last.x = movedMouse.x;
    mouse.last.y = movedMouse.y;

    function forward(v1, v2) {
        return v1 >= v2 ? true : false;
    }
});

/* Just for fun */
// if(!touch) {
//     $('.cube > div').eq(2).html('<object width="360" height="360"><param name="movie" value="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amp;hl=en_GB&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/MY5PkidV1cM?fs=1&amp;hl=en_GB&amp;rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="360" height="360"></embed></object>');
// }