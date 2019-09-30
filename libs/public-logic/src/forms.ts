import {IFormsLibrary} from '@votecube/forms'

let forms: IFormsLibrary

export async function loadForms(): Promise<IFormsLibrary> {
	if (forms) {
		return forms
	}

	forms = await import('@votecube/forms')

	return forms
}
