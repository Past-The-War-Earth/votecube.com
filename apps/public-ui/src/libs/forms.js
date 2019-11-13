import {DI}           from '@airport/di'

export async function loadForms(
	store
) {
	const forms = await import('@votecube/forms')

	store.set({forms})

	return await DI.get(forms.FORM_FACTORY)
}
