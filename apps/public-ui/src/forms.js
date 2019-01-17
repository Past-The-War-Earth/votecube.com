export function setupForms(
    viewCallback
) {
    import('@votecube/forms').then((
        forms
    ) => {
        viewCallback(forms.CONSTS, forms.Field, forms.FieldGroup, forms.FieldArray)
    })
}