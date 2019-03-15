export function createPollForm(
	labelData,
	locationsData,
	uiText,
	DateField,
	Field,
	FieldGroup,
	MatchingField,
	OptionsField,
	Validators
) {
	const text = uiText.Poll

	const factors = new FieldGroup('Factors', {
		first: createFactorForm(
			uiText,
			Field,
			FieldGroup,
			MatchingField,
			Validators,
			[Validators.required()]
		),
		second: createFactorForm(
			uiText,
			Field,
			FieldGroup,
			MatchingField,
			Validators,
			[Validators.required()]
		),
		third: createFactorForm(
			uiText,
			Field,
			FieldGroup,
			MatchingField,
			Validators,
			[]
		)
	}, [Validators.required()], text)

	const labels = new OptionsField([], labelData, {
		multi: true
	})

	const locations = new FieldGroup('Locations', {
		continents: new OptionsField([
			Validators.required()
		], locationsData.continents, {
			multi: true
		}),
		countries: new OptionsField([], locationsData.countries, {
			multi: true
		}),
		states: new OptionsField([], locationsData.states, {
			multi: true
		}),
		cities: new OptionsField([], locationsData.cities, {
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
	}, {
		id: 2,
		text: 'Culture'
	}, {
		id: 3,
		text: 'Technology'
	}, {
		id: 4,
		text: 'Space'
	}, {
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
		factors,
		labels,
		locations,
		name: new Field([
			Validators.minLength(3),
			Validators.required()
		], {maxLength: 40}),
		theme,
		timeframe
	}, [Validators.required()], text)
}

function createFactorForm(
	uiText,
	Field,
	FieldGroup,
	MatchingField,
	Validators,
	formValidators
) {
	const name                = new MatchingField([
		Validators.required(),
		Validators.minLength(5)
	], {
		maxLength: 20
	})
	const topPositionName    = new MatchingField([
		Validators.required(),
		Validators.minLength(5)
	], {
		maxLength: 120
	})
	const bottomPositionName = new MatchingField([
		Validators.required(),
		Validators.minLength(5)
	], {
		maxLength: 120
	})
	const topPosition        = new FieldGroup('TopPosition', {
		name: topPositionName
	}, [Validators.required()], uiText.Position)
	const bottomPosition     = new FieldGroup('BottomPosition', {
		name: bottomPositionName
	}, [Validators.required()], uiText.Position)

	// FIXME: move to appropriate place once matching is implemented
	name.onChange((
		value
	) => {
		if (name.valid) {
			name.matches = ['a', 'b', 'c']
		} else {
			name.matches = null
		}
	})
	// FIXME: move to appropriate place once matching is implemented
	bottomPositionName.onChange((
		value
	) => {
		if (bottomPositionName.valid) {
			bottomPositionName.matches = ['a', 'b', 'c']
		} else {
			bottomPositionName.matches = null
		}
	})
	// FIXME: move to appropriate place once matching is implemented
	topPositionName.onChange((
		value
	) => {
		if (topPositionName.valid) {
			topPositionName.matches = ['a', 'b', 'c']
		} else {
			topPositionName.matches = null
		}
	})

	const color = new FieldGroup('PickColor', {
		picker: new Field([
			Validators.required()
		])
	}, [Validators.required()], uiText.Factor)

	return new FieldGroup('Info', {
		bottomPosition,
		color,
		name,
		topPosition
	}, formValidators, uiText.Factor)
}