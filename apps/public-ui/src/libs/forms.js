export async function loadForms(
	page
) {
	const forms = await import('@votecube/forms')

	page.store.set({forms})

	return forms
}
