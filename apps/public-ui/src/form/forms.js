import * as routes from '../routes'

export const CREATE_POLL_TOP  = routes.POLL_FORM
export const CREATE_FACTOR = routes.FACTOR_INFO_MAIN


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
	navigateToRouteOnNotFound,
	navigateParamsOnNotFound = routes.DEFAULT_ROUTE_PARAMS
) {
	const parentForm = getForm(parentFormName)
	if (!parentForm) {
		routes.navigateToPage(navigateToRouteOnNotFound, navigateParamsOnNotFound)
		return null
	}

	let form = parentForm
	// TODO: see if nested child form resolution is needed
	// childFormName.split('.').forEach(childNameFragment => {
	form = form.fields[childFormName]
	// })

	ensureForm(form, page)

	return form
}

export function ensureTopForm(
	topFormName,
	page,
	navigateToRouteOnNotFound,
	navigateParamsOnNotFound = routes.DEFAULT_ROUTE_PARAMS
) {
	const topForm = getForm(topFormName)
	if (!topForm) {
		routes.navigateToPage(navigateToRouteOnNotFound, navigateParamsOnNotFound)
		return null
	}
	ensureForm(topForm, page)

	return topForm
}

export function ensureForm(
	form,
	page
) {
	form.addComponent(page)
	page.set({form, isValid: form.valid, isOriginal: form.isOriginal()})
}

export function uncacheForm(
	formName
) {
	delete forms[formName]
}

export function clearForm(
	page
) {
	const {form} = page.get()
	if (form) {
		form.clearComponents()
	}
}

export function navigateOnValid(
	page,
	navigateToRouteOnValid,
	paramMap
) {
	const {form} = page.get()

	form.touch()

	if (!form.valid) {
		return
	}

	routes.navigateToPage(navigateToRouteOnValid, paramMap)
}

export function log(
	page
) {
	const {form} = page.get()

	console.log(form.value)
}

export var OPTIONS = {
	handleKeydown: (
		page,
		multi
	) => {
		let {activeOptionIndex, filter, options, showOptions} = page.get()
		if (!showOptions) {
			return
		}
		showOptions = true
		switch (event.key) {
			case 'ArrowDown':
				if (activeOptionIndex + 1 < options.length) {
					activeOptionIndex++
				}
				break;
			case 'ArrowUp':
				if (activeOptionIndex) {
					activeOptionIndex--
				}
				break;
			case 'Escape':
				activeOptionIndex = 0
				showOptions       = false
				break;
			case 'Enter':
				const selectedOption = options[activeOptionIndex];
				activeOptionIndex    = 0
				page.get().field.select(selectedOption)
				if (multi) {
					filter = ''
				} else {
					filter = selectedOption.text
				}
				showOptions = false
				event.preventDefault()
				break;
		}
		if (!showOptions) {
			page.hideOptions()
		}
		page.set({activeOptionIndex, filter})
	},
	showFiltered: (
		page,
		element,
		// focus
	) => {
		if (!page.get().showOptions) {
			const {field} = page.get()
			if (field.filteredOptions.length) {
				// if(focus) {
				field.focus()
				// }
				page.set({
					showOptions: true,
					dropdownTopPx: element.offsetHeight + 6
				})
				event.stopPropagation()
			}
		}
		// if(focus) {
		page.refs.filter.focus()
		// }
	}
}