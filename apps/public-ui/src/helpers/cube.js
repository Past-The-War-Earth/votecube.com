import {getDimensionColor} from "./dimension";

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
    dir
) {
    if (!poll) {
        return ``
    }

    const dimension = getDimension(poll, pollDimensionIndex)

    const direction = dimension.dimensionDirections.filter(
        dimensionDirection =>
        dimensionDirection.dir === dir
    )[0].direction

    return `${dimension.description.shortValue}: ${direction.description.markdownValue}`
}
