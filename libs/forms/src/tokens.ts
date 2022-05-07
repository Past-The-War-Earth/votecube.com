import { app } from '@votecube/dependency-injection'
import { FormFactory } from './FormFactory'
import { IFormFactory } from './FormFactory'

export const forms = app('forms')

export const FORM_FACTORY = forms.token<IFormFactory>({
    class: FormFactory,
    interface: 'IFormFactory',
    token: 'FORM_FACTORY'
})
