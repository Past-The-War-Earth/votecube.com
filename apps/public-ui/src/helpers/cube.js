import {getDimensionColor} from "./dimension";

export function getPollDimensionDirections(
    poll,
    axis
) {
    if (!poll) {
        return null
    }

    return poll.pollsDimensionsDirections.filter(
        pollsDimensionDirection =>
            pollsDimensionDirection.axis === axis
    ).map((pollDimensionDirection) => {
        return pollDimensionDirection.dimensionDirection
    })
}

export function getDimensionDirections(
    poll,
    axis
) {
    if (!poll) {
        return null
    }

    return getPollDimensionDirections(poll, axis).map((pollDimensionDirection) => {
        return pollDimensionDirection.dimensionDirection
    })
}


export function getDimension(
    poll,
    axis
) {
    if (!poll) {
        return null
    }

    return getDimensionDirections(poll, axis)[0].dimension
}

export function getColor(
    poll,
    axis
) {
    if (!poll) {
        return `fff`
    }

    const dimension = getDimension(poll, axis)

    return getDimensionColor(dimension)
}

export function getPollDimDir(
    poll,
    axis
) {
    if (!poll) {
        return null
    }

    return poll.pollsDimensionsDirections.filter(
        pollDimDir =>
            pollDimDir.axis === axis
    )[0]
}

export function getSideText(
    poll,
    axis,
    dir
) {
    if (!poll) {
        return ``
    }

    const pollDimensionDirections = getPollDimensionDirections(poll, axis)

    const dimensionDirection = pollDimensionDirections.filter(
        pollDimensionDirection =>
            pollDimensionDirection.dir === dir
    )[0].dimensionDirection

    return `${dimensionDirection.dimension.name}: ${dimensionDirection.direction.name}`
}
