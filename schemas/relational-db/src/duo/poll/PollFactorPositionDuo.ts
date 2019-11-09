import {DI}                       from '@airport/di'
import {POLL_FACTOR_POSITION_DUO} from '../../diTokens'
import {
	BasePollFactorPositionDuo,
	IBasePollFactorPositionDuo
}                                 from '../../generated/generated'

export interface IPollFactorPositionDuo
	extends IBasePollFactorPositionDuo {
}

export class PollFactorPositionDuo
	extends BasePollFactorPositionDuo
	implements IPollFactorPositionDuo {
}

DI.set(POLL_FACTOR_POSITION_DUO, PollFactorPositionDuo)
