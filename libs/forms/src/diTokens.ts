import {system}      from '@airport/di'
import {IFormFactory} from './FormFactory'

export const forms = system('votecube-ui').lib('forms')

export const FORM_FACTORY = forms.token<IFormFactory>()
