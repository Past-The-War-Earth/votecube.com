export const SEQUENCES = {
    dimensions: 3,
    dimensionDescriptions: 3,
    dimensionDirections: 6,
    directions: 6,
    directionDescriptions: 6,
    colors: 3,
    polls: 1,
    pollDescriptions: 1
}

export const DB = {
    dimensions: [{
        color: {
            id: 1,
            rgbHexValue: 255 * 256 * 256
        },
        description: {
            id: 1,
            markdownValue: 'Trumps policy\'s effects on US Security',
            shortValue: 'Security'
        },
        dimensionDirections: [{
            direction: {
                id: 1,
                description: {
                    id: 1,
                    markdownValue: 'Trumps policies reduce military\'s over extension and let it focus on the real threats.'
                }
            },
            id: 1,
            dir: 1
        }, {
            direction: {
                id: 2,
                description: {
                    id: 2,
                    markdownValue: 'Trump\'s policies reduce the trust in our alliances and hurt the stability of the world.'
                }
            },
            id: 2,
            dir: -1
        }],
        id: 1
    }, {
        color: {
            id: 2,
            rgbHexValue: 255 * 256 * 256 + 255 * 256
        },
        description: {
            id: 2,
            markdownValue: 'Trumps policy\'s effects on US Economy',
            shortValue: 'Economy'
        },
        dimensionDirections: [{
            direction: {
                id: 3,
                description: {
                    id: 3,
                    markdownValue: 'Trump\'s policies give profound confidence to companies and are good for the economy.'
                }
            },
            id: 3,
            dir: 1
        }, {
            direction: {
                id: 4,
                description: {
                    id: 4,
                    markdownValue: 'Trump\'s policies have no real effect on the economy, it\'s purely cyclical.'
                }
            },
            id: 4,
            dir: -1
        }],
        id: 2
    }, {
        color: {
            id: 3,
            rgbHexValue: 255 * 256
        },
        description: {
            id: 3,
            markdownValue: 'Trumps policy\'s effects on Equality in US',
            shortValue: 'Equality'
        },
        dimensionDirections: [{
            direction: {
                id: 5,
                description: {
                    id: 5,
                    markdownValue: 'Trump\'s policies are better for equality because they are fighting the dominance of globalism and are bringing the jobs back.'
                }
            },
            id: 5,
            dir: 1,
        },{
            direction: {
                id: 6,
                description: {
                    id: 6,
                    markdownValue: 'Trump\'s policies are tailored with the interests of the wealthy in mind and hurt equality.'
                }
            },
            id: 6,
            dir: -1
        }],
        id: 3
    }],
    polls: [{
        description: {
            id: 1,
            markdownValue: 'Trump\'s policies'
        },
        displayValues: [{
            index: 0,
            value: 0,
            dir: 1
        },{
            index: 1,
            value: 100,
            dir: 1
        },{
            index: 2,
            value: 0,
            dir: 1
        }],
        id: 1,
        pollDimensions: [{
            dimension: {
                id: 1,
            },
            index: 0
        },{
            dimension: {
                id: 2,
            },
            index: 1
        },{
            dimension: {
                id: 3,
            },
            index: 2
        }]
    }]
}
