import { container, DI } from '@airport/di';
import { POLL_FORM_LOGIC, POLL_FORM_MANAGER } from '../../../tokens';
export class PollFormLogic {
    async getPollForm(currentRevision, trackOriginal, touch, text, formFactory) {
        const pollFormManager = await container(this).get(POLL_FORM_MANAGER);
        const form = await this.createPollForm(
        // labels,
        // locations,
        text.UI, formFactory);
        form.setTrackOriginal(trackOriginal);
        form.validate();
        currentRevision.form = form;
        // form.fields.locations.optionText = text.LOCATIONS
        if (currentRevision.ui) {
            form.setValue(pollFormManager.toForm(currentRevision.ui), true
            // !currentRevision.ui.draft
            );
            form.validate();
            if (touch) {
                form.touch();
            }
        }
        return form;
    }
    async createPollForm(
    // labelData,
    // locationsData,
    uiText, formFactory) {
        const text = uiText.Poll;
        const factors = formFactory.group('Factors', {
            1: this.createFactorForm(uiText, formFactory, [formFactory.validators.required()]),
            2: this.createFactorForm(uiText, formFactory, [formFactory.validators.required()]),
            3: this.createFactorForm(uiText, formFactory, [formFactory.validators.required()])
        }, [formFactory.validators.required()], text);
        const outcomes = formFactory.group('Outcomes', {
            A: formFactory.field([
                formFactory.validators.minLength(3),
                formFactory.validators.required()
            ], {
                maxLength: 50
            }),
            B: formFactory.field([
                formFactory.validators.minLength(3),
                formFactory.validators.required()
            ], {
                maxLength: 50
            })
        }, [], text);
        /*
            const labels = form.options([], labelData, {
                multi: true
            })
         */
        /*
            const locations = form.group('Locations', {
                continents: form.options([
                    form.validators.required()
                ], locationsData.continents, {
                    multi: true
                }),
                countries: form.options([], locationsData.countries, {
                    multi: true
                }),
                states: form.options([], locationsData.states, {
                    multi: true
                }),
                cities: form.options([], locationsData.cities, {
                    multi: true
                }),
            }, [form.validators.required()], text)

            const startDate = form.date([
                form.validators.required(),
                form.validators.minTomorrow()
            ])
        */
        const theme = formFactory.options([
            formFactory.validators.required()
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
            }]);
        /*
            const timeframe = form.group('Timeframe', {
                startDate,
                endDate: form.dateField([
                    form.validators.required(),
                    form.validators.minTomorrow(),
                    form.validators.greaterThanOrEquals(startDate)
                ]),
            }, [form.validators.required()], text)
        */
        return formFactory.group('MainInfo', {
            // ageSuitability: form.field([], {}),
            factors,
            // labels,
            // locations,
            name: formFactory.field([
                formFactory.validators.minLength(3),
                formFactory.validators.required()
            ], {
                maxLength: 40
            }),
            outcomes,
            theme,
            // timeframe
        }, [formFactory.validators.required()], text);
    }
    createFactorForm(uiText, form, formValidators) {
        const name = form.matching([
            form.validators.required(),
            form.validators.minLength(5)
        ], {
            maxLength: 20
        });
        const positionAName = form.matching([
            form.validators.required(),
            form.validators.minLength(5)
        ], {
            maxLength: 120
        });
        const positionBName = form.matching([
            form.validators.required(),
            form.validators.minLength(5)
        ], {
            maxLength: 120
        });
        /*
        const topPositionName    = form.matching([
            Validators.required(),
            Validators.minLength(5)
        ], {
            maxLength: 120
        })
        const bottomPositionName = form.matching([
            Validators.required(),
            Validators.minLength(5)
        ], {
            maxLength: 120
        })
         */
        const positions = form.group('Positions', {
            A: positionAName,
            B: positionBName
        }, [form.validators.required()], uiText.Poll);
        // FIXME: move to appropriate place once matching is implemented
        /*	name.onChange((
                value
            ) => {
                if (name.valid) {
                    name.matches = ['a', 'b', 'c']
                } else {
                    name.matches = null
                }
            })*/
        // FIXME: move to appropriate place once matching is implemented
        /*
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
            })*/
        /*
            const color = form.group('PickColor', {
                picker: form.field([
                    form.validators.required()
                ])
            }, [form.validators.required()], uiText.Factor)
        */
        const color = form.color([
            form.validators.required()
        ]);
        color.setValue({
            blue: 128,
            green: 128,
            red: 128
        });
        return form.group('Info', {
            color,
            name,
            positions,
        }, formValidators, uiText.Factor);
    }
}
DI.set(POLL_FORM_LOGIC, PollFormLogic);
//# sourceMappingURL=PollFormLogic.js.map