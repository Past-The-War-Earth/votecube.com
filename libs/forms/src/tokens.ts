import { app } from '@votecube/dependency-injection'
import {IFormFactory} from './FormFactory'

export const forms = app('forms')

export const FORM_FACTORY = forms.token<IFormFactory>('FORM_FACTORY')
