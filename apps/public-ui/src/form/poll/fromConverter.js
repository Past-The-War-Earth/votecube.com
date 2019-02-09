export function formToDto(
    formValue
) {
    const dimensions = formValue.dimensions
    const formThemeValue = formValue.theme
    const locations = formValue.locations

    return {
        endDate: formValue.timeframe.endDate,
        id: formValue.id ? formValue.id : 0,
        name: formValue.name,
        startDate: formValue.timeframe.startDate,
        pollsContinents: locations.continents.map((continent) => ({
            continent
        })),
        pollsCountries: locations.countries.map((country) => ({
            country
        })),
        pollsDimensionsDirections: [
            ...get2PollDimDirs('y', dimensions.first),
            ...get2PollDimDirs('z', dimensions.second),
            ...get2PollDimDirs('x', dimensions.third)
        ],
        pollsLabels: formValue.labels.map(label => ({
            label: {
                id: label.id,
                name: label.text
            },
            poll: {
            }
        })),
        pollsStates: locations.states.map((state) => ({
            state
        })),
        pollsTowns: locations.cities.map((town) => ({
            town
        })),
        theme: {
            id: formThemeValue.id,
            name: formThemeValue.text
        }
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
