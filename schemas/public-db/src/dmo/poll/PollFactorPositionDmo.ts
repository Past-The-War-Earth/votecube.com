import {DI}                       from '@airport/di'
import {POLL_FACTOR_POSITION_DMO} from '../../diTokens'
import {
	BasePollFactorPositionDmo,
	IBasePollFactorPositionDmo
}                                 from '../../generated/generated'

export interface IPollFactorPositionDmo
	extends IBasePollFactorPositionDmo {
}

export class PollFactorPositionDmo
	extends BasePollFactorPositionDmo
	implements IPollFactorPositionDmo {
}

DI.set(POLL_FACTOR_POSITION_DMO, PollFactorPositionDmo)
