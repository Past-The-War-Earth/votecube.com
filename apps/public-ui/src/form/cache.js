import {pollDao}                  from '../dao/poll'
import {voteDao}                  from '../dao/vote'
import * as forms                 from './forms'
import * as pollFormFromConverter from './poll/fromConverter'

export function getPollRouteParams(
	page
) {
	const routeParams = page.store.get().routeParams

	page.set({routeParams: routeParams})

	return routeParams
}

export function savePollForm(
	page
) {
	const {keepPollId} = page.get()
	if (keepPollId) {
		return
	}
	const form = forms.getForm(forms.CREATE_POLL_TOP)
	if (!form) {
		return
	}

	const poll   = pollFormFromConverter.formToDto(form.value)
	let {pollId} = page.get().routeParams

	pollDao.addTemp(poll, pollId)
	voteDao.addTempForPoll(poll, pollId)

	forms.uncacheForm(forms.CREATE_POSITION)
	forms.uncacheForm(forms.CREATE_POLL_TOP)
	forms.uncacheForm(forms.CREATE_FACTOR)
}