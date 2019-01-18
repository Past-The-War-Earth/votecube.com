export function setupForms(
    viewCallback,
    page
) {
    import('@votecube/forms').then((
        forms
    ) => {
        page.store.set({forms})
        viewCallback(forms.CONSTS, forms.Validators, forms.Field, forms.FieldGroup, forms.FieldArray)
    })
}