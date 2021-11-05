import {
	APP_CONTAINER,
	SITUATION_MANAGER
}                 from '@votecube/vc-logic'
import * as forms from '../form/forms'

export async function savePollForm(
	interFormNavigation
) {
	if (interFormNavigation) {
		return
	}

	const pollManager = await APP_CONTAINER.get(SITUATION_MANAGER)
	await pollManager.mergeForm()

	forms.uncacheForm(forms.DEFINE_SITUATION_TOP)
	forms.uncacheForm(forms.CREATE_FACTOR)
}
