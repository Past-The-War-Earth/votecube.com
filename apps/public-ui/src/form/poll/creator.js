export function createPollForm(
    locationsData,
    uiText,
    DateField,
    Field,
    FieldGroup,
    MatchingField,
    OptionsField,
    Validators
) {
    const text = uiText.Poll;

    const dimensions = new FieldGroup('Dimensions', {
        first: createDimensionForm(
            uiText,
            Field,
            FieldGroup,
            MatchingField,
            Validators,
            [Validators.required()]
        ),
        second: createDimensionForm(
            uiText,
            Field,
            FieldGroup,
            MatchingField,
            Validators,
            [Validators.required()]
        ),
        third: createDimensionForm(
            uiText,
            Field,
            FieldGroup,
            MatchingField,
            Validators,
            []
        )
    }, [Validators.required()], text)

    const labels = new OptionsField([], [{
        id: 1,
        text: 'Trump',
        theme: {
            id: 1
        }
    },{
        id: 2,
        text: 'Integration',
        theme: {
            id: 1
        }
    }], {
        multi: true
    })

    const locations = new FieldGroup('Locations', {
        continents: new OptionsField([
            Validators.required()
        ], locationsData.continents, {
            multi: true
        }),
        countries: new OptionsField([
        ], locationsData.countries, {
            multi: true
        }),
        states: new OptionsField([
        ], locationsData.states, {
            multi: true
        }),
        cities: new OptionsField([
        ], locationsData.cities, {
            multi: true
        }),
    }, [Validators.required()], text)

    const startDate = new DateField([
        Validators.required(),
        Validators.minTomorrow()
    ])

    const theme = new OptionsField([
        Validators.required()
    ], [{
        id: 1,
        text: 'Politics'
    },{
        id: 2,
        text: 'Culture'
    },{
        id: 3,
        text: 'Technology'
    },{
        id: 4,
        text: 'Space'
    },{
        id: 5,
        text: 'Security'
    }])

    const timeframe = new FieldGroup('Timeframe', {
        startDate,
        endDate: new DateField([
            Validators.required(),
            Validators.minTomorrow(),
            Validators.greaterThanOrEquals(startDate)
        ]),
    }, [Validators.required()], text)

    return new FieldGroup('MainInfo', {
        dimensions,
        labels,
        locations,
        name: new Field([
            Validators.minLength(3),
            Validators.required()
        ], { maxLength: 40}),
        theme,
        timeframe
    }, [Validators.required()], text)
}

function createDimensionForm(
    uiText,
    Field,
    FieldGroup,
    MatchingField,
    Validators,
    formValidators
) {
    const name = new MatchingField([
        Validators.required(),
        Validators.minLength(5)
    ], {
        maxLength: 20
    })
    const topDirectionName = new MatchingField([
        Validators.required(),
        Validators.minLength(5)
    ], {
        maxLength: 120
    })
    const bottomDirectionName = new MatchingField([
        Validators.required(),
        Validators.minLength(5)
    ], {
        maxLength: 120
    })
    const topDirection = new FieldGroup('TopDirection', {
        name: topDirectionName
    }, [Validators.required()], uiText.Direction)
    const bottomDirection = new FieldGroup('BottomDirection', {
        name: bottomDirectionName
    }, [Validators.required()], uiText.Direction)

    // FIXME: move to appropriate place once matching is implemented
    name.onChange((
        value
    ) => {
        if(name.valid) {
            name.matches = ['a', 'b', 'c']
        } else {
            name.matches = null
        }
    })
    // FIXME: move to appropriate place once matching is implemented
    bottomDirectionName.onChange((
        value
    ) => {
        if(bottomDirectionName.valid) {
            bottomDirectionName.matches = ['a', 'b', 'c']
        } else {
            bottomDirectionName.matches = null
        }
    })
    // FIXME: move to appropriate place once matching is implemented
    topDirectionName.onChange((
        value
    ) => {
        if(topDirectionName.valid) {
            topDirectionName.matches = ['a', 'b', 'c']
        } else {
            topDirectionName.matches = null
        }
    })

    const color = new FieldGroup('PickColor', {
        picker: new Field([
            Validators.required()
        ])
    }, [Validators.required()], uiText.Dimension)

    return new FieldGroup('Info', {
        bottomDirection,
        color,
        name,
        topDirection
    }, formValidators, uiText.Dimension)
}