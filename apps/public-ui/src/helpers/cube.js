import {getColor as getGeneralColor} from "./general";

export function getPollDimensionDirections(
    poll,
    axis
) {
    return poll.pollsDimensionsDirections.filter(
        pollsDimensionDirection =>
            pollsDimensionDirection.axis === axis
    )
}

/*
export function getDimensionDirections(
    poll,
    axis
) {
    return getPollDimensionDirections(poll, axis).map((pollDimensionDirection) => {
        return pollDimensionDirection.dimensionDirection
    })
}*/

/*
export function getDimension(
    poll,
    axis
) {
    return getDimensionDirections(poll, axis)[0].dimension
}*/

export function getColor(
    delta,
    poll,
    axis
) {
    return getGeneralColor(getPollDimensionDirections(poll, axis)[0].color)
}

export function getSideText(
    delta,
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
