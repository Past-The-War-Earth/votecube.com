import {getDimensionColor} from "./dimension";

export function getPollDimensionDirections(
    poll,
    axis
) {
    return poll.pollsDimensionsDirections.filter(
        pollsDimensionDirection =>
            pollsDimensionDirection.axis === axis
    )
}

export function getDimensionDirections(
    poll,
    axis
) {
    return getPollDimensionDirections(poll, axis).map((pollDimensionDirection) => {
        return pollDimensionDirection.dimensionDirection
    })
}


export function getDimension(
    poll,
    axis
) {
    return getDimensionDirections(poll, axis)[0].dimension
}

export function getColor(
    poll,
    axis
) {
    const dimension = getDimension(poll, axis)

    return getDimensionColor(dimension)
}

export function getSideText(
    poll,
    axis,
    dir
) {
    const pollDimensionDirections = getPollDimensionDirections(poll, axis)

    const dimensionDirection = pollDimensionDirections.filter(
        pollDimensionDirection =>
            pollDimensionDirection.dir === dir
    )[0].dimensionDirection

    return `${dimensionDirection.dimension.name}: ${dimensionDirection.direction.name}`
}
