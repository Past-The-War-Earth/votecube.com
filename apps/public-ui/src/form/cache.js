import * as forms  from '../form/forms'
import {PollStore} from '../helpers/PollStore'

export function getPollRouteParams(
	page
) {
	const routeParams = page.store.get().routeParams

	page.set({routeParams: routeParams})

	return routeParams
}

export async function savePollForm(
	page
) {
	const {interFormNavigation} = page.get()
	// const {positionMap} = page.store.get()
	if (interFormNavigation) {
		return
	}

	// const form = forms.getForm(forms.CREATE_POLL_TOP)
	// if (!form) {
	// 	return
	// }

	// const changeFlags = form.changeFlags

	// const poll   = pollFormFromConverter.formToDto(form.value
	// 	, positionMap
	// )
	// let {pollId} = page.get().$routeParams
	// poll.id      = pollId

	// const pollDao = await DI.get(POLL_DAO)

	// await pollDao.stage(poll)
	// pollDao.addTemp(poll)
	PollStore.mergeForm()

	forms.uncacheForm(forms.CREATE_POLL_TOP)
	forms.uncacheForm(forms.CREATE_FACTOR)
}
