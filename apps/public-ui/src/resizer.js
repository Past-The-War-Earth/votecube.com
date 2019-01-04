export function startResizeInterval(
    page
) {
    resize(page)
    const checkSizeIntervalId = setInterval(() => {
        if (page.get().resized) {
            page.set({resized: false})
            resize(page)
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
    page
) {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const portalHeight = windowHeight - 44

    page.resize(portalHeight, windowWidth, portalHeight > windowWidth);
}