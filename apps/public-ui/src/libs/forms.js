import {APP_CONTAINER} from '../container'

export async function loadForms(
	store
) {
	const forms = await import('@votecube/forms')

	store.set({forms})

	return await APP_CONTAINER.get(forms.FORM_FACTORY)
}
