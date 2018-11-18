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


// Prevent default
function pD(
    ev // Event
) {
    ev.preventDefault()
}

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
