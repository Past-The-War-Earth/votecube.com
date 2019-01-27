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