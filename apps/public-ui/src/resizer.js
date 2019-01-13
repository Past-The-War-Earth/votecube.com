export function startResizeInterval(
    page,
    viewCallback
) {
    resize(page, viewCallback)

    const checkSizeIntervalId = setInterval(() => {
        if (page.get().resized) {
            resize(page, viewCallback)
        }
    }, 1000)

    page.set({checkSizeIntervalId})
}

export function stopResizeInterval(
    page
) {
    clearInterval(page.get().checkSizeIntervalId)
}

export function scheduleToResize(
    page
) {
    page.set({
        resized: true
    })
}

function resize(
    page,
    viewCallback
) {
    const windowWidth = window.innerWidth
    const portalHeight = window.innerHeight - 44

    let verticalLayout = true
    if(portalHeight < windowWidth) {
        verticalLayout = false
    }
    page.set({portalHeight, resized: false, verticalLayout, windowWidth})

    viewCallback(portalHeight, windowWidth, verticalLayout)
}
