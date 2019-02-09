import {getRGB} from "../../helpers/general";

export function dtoToForm(
    poll
) {
    const themeDto = poll.theme
    const theme = {
        id: themeDto.id,
        text: themeDto.name
    }

    return {
        dimensions: {
        first: getDimForm(getPollDimDirDtos(poll, 'y')),
            second: getDimForm(getPollDimDirDtos(poll, 'z')),
            third: getDimForm(getPollDimDirDtos(poll, 'x'))
        },
        labels: poll.pollsLabels.map(pollLabel => ({
            id: pollLabel.label.id,
            text: pollLabel.label.name
        })),
        locations: poll.locations,
        name: poll.name,
        theme,
        timeframe: {
            endDate: poll.endDate,
            startDate: poll.startDate
        }
    }
}

function getPollDimDirDtos(
    poll,
    axis
) {
    return poll.pollsDimensionsDirections.filter(pollDimensionDirection =>
        axis === pollDimensionDirection.axis
    )
}

function getDimForm(
    pollDimensionDirections
) {
    const  color = pollDimensionDirections[0].color
    let bottomDirection, topDirection

    pollDimensionDirections.forEach(pollDimensionDirection => {
        const direction = pollDimensionDirection.dimensionDirection.direction
        if(pollDimensionDirection.dir === 1) {
            topDirection = direction
        } else {
            bottomDirection = direction
        }
    })
    return {
        bottomDirection,
        color: {
            picker: {
                ...getRGB(pollDimensionDirections[0].color),
                name: ''
            }
        },
        topDirection
    }
}