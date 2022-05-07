import { app } from '@votecube/dependency-injection';
import { FormFactory } from './FormFactory';
export const forms = app('forms');
export const FORM_FACTORY = forms.token({
    class: FormFactory,
    interface: 'IFormFactory',
    token: 'FORM_FACTORY'
});
//# sourceMappingURL=tokens.js.map