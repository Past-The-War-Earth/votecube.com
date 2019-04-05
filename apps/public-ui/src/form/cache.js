import {DI}                       from '@airport/di'
import {POLL_DAO}                 from '@votecube/public-db'
import * as forms                 from './forms'
import * as pollFormFromConverter from './poll/fromConverter'

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
	poll.id      = pollId

	const [pollDao] = await DI.getP(POLL_DAO)

	await pollDao.stage(poll)
	// pollDao.addTemp(poll, pollId)

	// TODO: check if this was needed
	// voteDao.addTempForPoll(poll, pollId)

	forms.uncacheForm(forms.CREATE_POSITION)
	forms.uncacheForm(forms.CREATE_POLL_TOP)
	forms.uncacheForm(forms.CREATE_FACTOR)
}
