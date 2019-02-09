export function formToDto(
    formValue
) {
    const dimensions = formValue.dimensions
    const formThemeValue = formValue.theme

    return {
        endDate: formValue.endDate,
        id: formValue.id ? formValue.id : 0,
        locations: {
            continents: formValue.continents,
        },
        name: formValue.name,
        startDate: formValue.startDate,
        theme: {
            id: formThemeValue.id,
            name: formThemeValue.text
        },
        pollsLabels: formValue.labels.map(label => ({
            label: {
                id: label.id,
                name: label.text
            },
            poll: {
            }
        })),
        pollsDimensionsDirections: [
            ...get2PollDimDirs('y', dimensions.first),
            ...get2PollDimDirs('z', dimensions.second),
            ...get2PollDimDirs('x', dimensions.third)
        ]
    }
}

function get2PollDimDirs(
    axis,
    dimensionFormValue
) {
    const {color, dimension} = getDimDto(dimensionFormValue)

    let topDir = dimensionFormValue.topDirection
    let bottomDir = dimensionFormValue.bottomDirection

    return [
        getPollDimDirDto(axis, dimension, 1, topDir.name, color),
        getPollDimDirDto(axis, dimension, -1, bottomDir.name, color)
    ]
}

function getPollDimDirDto(
    axis,
    dimension,
    dir,
    name,
    color
) {
    return {
        axis,
        color,
        dimensionDirection: {
            dimension,
            direction: {
                name
            }
        },
        dir,
    }

}

function getDimDto(
    formDimension
) {
    let picker = formDimension.color.picker

    const red = parseInt(picker.red)
    const green = parseInt(picker.green)
    const blue = parseInt(picker.blue)

    return {
        color: {
            id: red * 256 * 256 + green * 256 + blue,
            red,
            green,
            blue
        },
        dimension: {
            name: formDimension.name
        }
    }
}
