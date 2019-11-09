import {DI}              from '@airport/di'
import {
	POLL_FORM_LOGIC,
	POLL_MAIN_LOGIC
} from '../../../diTokens'

export interface IPollFormLogic {

}

export class PollFormLogic
	implements IPollFormLogic {



}
DI.set(POLL_FORM_LOGIC, PollFormLogic)
