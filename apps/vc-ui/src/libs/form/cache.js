import {
	APP_CONTAINER,
	POLL_MANAGER
}                 from '@votecube/vc-logic'
import * as forms from './forms'

export async function savePollForm(
	interFormNavigation
) {
	if (interFormNavigation) {
		return
	}

	const pollManager = await APP_CONTAINER.get(POLL_MANAGER)
	await pollManager.mergeForm()

	forms.uncacheForm(forms.CREATE_POLL_TOP)
	forms.uncacheForm(forms.CREATE_FACTOR)
}
