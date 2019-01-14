var viewCallback

export function setResizeCllBck(
    resizeCallback
) {
    viewCallback = resizeCallback
}

export function startResizeInterval(
    store
) {
    resize(store)

    const checkSizeIntervalId = setInterval(() => {
        if (store.get().resized) {
            resize(store)
        }
    }, 1000)

    store.set({checkSizeIntervalId})
}

/*
export function stopResizeInterval(
    store
) {
    clearInterval(store.get().checkSizeIntervalId)
}*/

export function scheduleToResize(
    store
) {
    store.set({
        resized: true
    })
}

function resize(
    store
) {
    const windowWidth = window.innerWidth
    const portalHeight = window.innerHeight - 44

    let verticalLayout = true
    if (portalHeight < windowWidth) {
        verticalLayout = false
    }
    store.set({portalHeight, resized: false, verticalLayout, windowWidth})

    if (viewCallback) {
        viewCallback(portalHeight, windowWidth, verticalLayout)
    }
}
