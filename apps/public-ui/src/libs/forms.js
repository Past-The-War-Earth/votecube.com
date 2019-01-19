export function loadForms(
    page
) {
    return import('@votecube/forms').then((
        forms
    ) => {
        page.store.set({forms})

        return forms
    })
}