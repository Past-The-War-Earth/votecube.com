export function getDate(
    date
) {
    if (!date) {
        return 'N/A'
    }

    return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
}

export function getLocations(
    locationFormGroupFields
) {
    let continents = locationFormGroupFields.continents.value

    return continents
}

export function getArrayValueTexts(
    arrayValue
) {
    return arrayValue
        .map(value => value.text)
        .reduce((accumulator, text) => accumulator + (accumulator
            ? ', ' + text
            : text), '')
}

export function getColor(
    color
) {
    if (!color) {
        return `fff`
    }

    const rgb = color.rgbHexValue

    const red = rgb >> 16

    const green = (rgb >> 8) % 256

    const blue = rgb % 256

    return `${ensure2Digits(red.toString(16))}${ensure2Digits(green.toString(16))}${ensure2Digits(blue.toString(16))}`
}

function ensure2Digits(
    colorString
) {
    return colorString.length === 1 ? '0' + colorString : colorString
}