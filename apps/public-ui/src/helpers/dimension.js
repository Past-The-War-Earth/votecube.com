import {getColor} from "./general";

export function getDimensionColor(
    dimension
) {
    if (!dimension) {
        return `fff`
    }

    return getColor(dimension.color)
}
