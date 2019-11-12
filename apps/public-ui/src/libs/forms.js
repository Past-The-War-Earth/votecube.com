import {DI}           from '@airport/di'

export async function loadForms(
) {
	const forms = await import('@votecube/forms')

	return await DI.get(forms.FORM_FACTORY)
}
