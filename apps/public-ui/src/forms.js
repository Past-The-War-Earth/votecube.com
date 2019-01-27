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

    form.touch()

    if(!form.valid) {
        return
    }

    navigateToPage(navigateToRouteOnValid)
}

export var OPTIONS = {
    handleKeydown: (page) => {
        let {activeOptionIndex, filter, options, showOptions} = page.get()
        if(!showOptions) {
            return
        }
        showOptions = true
        switch(event.key) {
            case 'ArrowDown':
                if(activeOptionIndex + 1 < options.length) {
                    activeOptionIndex++
                }
                break;
            case 'ArrowUp':
                if(activeOptionIndex) {
                    activeOptionIndex--
                }
                break;
            case 'Escape':
                activeOptionIndex = 0
                showOptions = false
                break;
            case 'Enter':
                page.get().field.select(options[activeOptionIndex])
                activeOptionIndex = 0
                filter = ''
                showOptions = false
                event.preventDefault()
                break;
        }
        if(!showOptions) {
            page.hideOptions()
        }
        page.set({activeOptionIndex, filter})
    },
    showFiltered: (page, element) => {
        if(!page.get().showOptions) {
            const {field} = page.get()
            if(field.filteredOptions.length) {
                field.focus()
                page.set({
                    showOptions: true,
                    dropdownTopPx: element.offsetHeight + 6
                })
                event.stopPropagation()
            }
        }
        page.refs.filter.focus()
    }
}