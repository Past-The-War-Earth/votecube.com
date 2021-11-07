import { container, DI } from '@airport/di';
import { SITUATION_FORM_LOGIC, SITUATION_FORM_MANAGER } from '../../../tokens';
export class SituationFormLogic {
    async getSituationForm(cachedSituation, trackOriginal, touch, text, formFactory) {
        const situationFormManager = await container(this).get(SITUATION_FORM_MANAGER);
        const form = await this.createSituationForm(
        // labels,
        // locations,
        text.UI, formFactory);
        form.setTrackOriginal(trackOriginal);
        form.validate();
        cachedSituation.form = form;
        // form.fields.locations.optionText = text.LOCATIONS
        if (cachedSituation.ui) {
            form.setValue(situationFormManager.toForm(cachedSituation.ui), true
            // !currentCachedSituation.ui.draft
            );
            form.validate();
            if (touch) {
                form.touch();
            }
        }
        return form;
    }
    async createSituationForm(
    // labelData,
    // locationsData,
    uiText, formFactory) {
        const text = uiText.Situation;
        const factors = formFactory.group('Factors', {
            1: this.createFactorForm(uiText, formFactory, [formFactory.validators.required()]),
            2: this.createFactorForm(uiText, formFactory, [formFactory.validators.required()]),
            3: this.createFactorForm(uiText, formFactory, [formFactory.validators.required()])
        }, [formFactory.validators.required()], text);
        const outcomes = formFactory.group('Outcomes', {
            A: formFactory.matching(this.findOutcomeMatches, [
                formFactory.validators.minLength(3),
                formFactory.validators.required()
            ], {
                maxLength: 50
            }),
            B: formFactory.matching(this.findOutcomeMatches, [
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
        const category = formFactory.options([
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
            category,
        }, [formFactory.validators.required()], text);
    }
    async findOutcomeMatches(outcomeText) {
        return [];
    }
    async findFactorMatches(factorText) {
        return [];
    }
    async findPositionMatches(factorText) {
        return [];
    }
    createFactorForm(uiText, form, formValidators) {
        const name = form.matching(this.findFactorMatches, [
            form.validators.required(),
            form.validators.minLength(5)
        ], {
            maxLength: 20
        });
        const positionAName = form.matching(this.findPositionMatches, [
            form.validators.required(),
            form.validators.minLength(5)
        ], {
            maxLength: 120
        });
        const positionBName = form.matching(this.findPositionMatches, [
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
        }, [form.validators.required()], uiText.Situation);
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
DI.set(SITUATION_FORM_LOGIC, SituationFormLogic);
//# sourceMappingURL=SituationFormLogic.js.map