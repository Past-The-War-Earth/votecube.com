const heightWatches = []

setInterval(() => {
    for(const heightWatch of heightWatches) {
        const currentComponent = heightWatch.component
        const currentElement = heightWatch.element
        const lastDropdownTopPx = heightWatch.height

        const dropdownTopPx = currentElement.offsetHeight + 6
        if(lastDropdownTopPx != dropdownTopPx) {
            currentComponent.set({ dropdownTopPx })
        }
    }
}, 100)

export function addHeightWatch(
    component,
    parentElement
) {
    heightWatches.push({
        component,
        element: parentElement.getElementsByClassName('dropdownAnchor')[0]
    })
}

export function removeHeightWatch(
    component
) {
    heightWatches.some((heightWatch, index) => {
        if(heightWatch.component === component) {
            heightWatches.splice(index, 1)
            return true
        }
    })
}