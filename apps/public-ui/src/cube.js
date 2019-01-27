export function getDimension(
    poll,
    pollDimensionIndex
) {
    if (!poll) {
        return null
    }

    return poll.pollDimensions.filter(
        pollDimension =>
            pollDimension.index === pollDimensionIndex
    )[0].dimension
}

export function getColor(
    poll,
    pollDimensionIndex
) {
    if (!poll) {
        return `fff`
    }

    const dimension = getDimension(poll, pollDimensionIndex)

    return getDimensionColor(dimension)
}

export function getDimensionColor(
    dimension
) {
    if (!dimension) {
        return `fff`
    }

    const rgb = dimension.color.rgbHexValue

    const red = rgb >> 16

    const green = (rgb >> 8) % 256

    const blue = rgb % 256

    const color = `${ensure2Digits(red.toString(16))}${ensure2Digits(green.toString(16))}${ensure2Digits(blue.toString(16))}`

    return color
}

export function getDisplayValue(
    poll,
    pollDimensionIndex
) {
    if (!poll) {
        return null
    }

    return poll.displayValues.filter(
        displayValue =>
            displayValue.index === pollDimensionIndex
    )[0]
}

export function getSideText(
    poll,
    pollDimensionIndex,
    positive
) {
    if (!poll) {
        return ``
    }

    const dimension = getDimension(poll, pollDimensionIndex)

    const direction = dimension.dimensionDirections.filter(
        dimensionDirection =>
        dimensionDirection.positive === positive
    )[0].direction

    return `${dimension.description.shortValue}: ${direction.description.markdownValue}`
}

export function toggleDisplayValue(
    poll,
    dimensionIndex,
) {
    poll.displayValues.forEach(displayValue => {
        if(displayValue.index === dimensionIndex) {
            if(displayValue.value === 100) {
                displayValue.positive = !displayValue.positive
            } else {
                displayValue.value = 100
                displayValue.positive = true
            }
        } else {
            displayValue.value = 0
        }
    })
}

function ensure2Digits(
    colorString
) {
    return colorString.length === 1 ? '0' + colorString : colorString
}