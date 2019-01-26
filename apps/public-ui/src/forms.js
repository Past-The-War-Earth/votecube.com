import {navigateToPage} from './routes'

let forms = {}

export function setForm(
    name,
    newCurrentForm
) {
    forms[name] = newCurrentForm
}

export function getForm(
    name
) {
    return forms[name]
}

export function ensureChildForm(
    parentFormName,
    childFormName,
    page,
    navigateToRouteOnNotFound
) {
    const parentForm = getForm(parentFormName)
    if(!parentForm) {
        navigateToPage(navigateToRouteOnNotFound)

        return null
    }
    const form = parentForm.fields[childFormName]
    ensureForm(form, page)

    return form
}

export function ensureForm(
    form,
    page
) {
    form.addComponent(page)
    page.set({form, isValid: form.valid})
}

export function clearForm(
    page
) {
    const {form} = page.get()
    if(form) {
        form.removeComponent(page)
    }
}

export function navigateOnValid(
    page,
    navigateToRouteOnValid
) {
    const {form} = page.get()

    if(!form.valid) {
        return
    }

    navigateToPage(navigateToRouteOnValid)
}