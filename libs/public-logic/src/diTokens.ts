import {diToken}        from '@airport/di'
import {IPollFormLogic} from './pages/poll/info/PollFormLogic'
import {IPollMainLogic} from './pages/poll/info/PollMainLogic'
import {IPollStore}     from './pages/poll/PollStore'
import {IPollLogic}     from './poll/PollLogic'

export const POLL_FORM_LOGIC = diToken<IPollFormLogic>()
export const POLL_MAIN_LOGIC = diToken<IPollMainLogic>()
export const POLL_STORE = diToken<IPollStore>()
export const POLL_LOGIC      = diToken<IPollLogic>()
