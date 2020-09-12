import {DI}                                from '@airport/di'
import {POLL_FACTOR_POSITION_REVISION_DUO} from '../../tokens'
import {
	BasePollRevisionFactorPositionDuo,
	IBasePollRevisionFactorPositionDuo
}                                          from '../../generated/generated'

export interface IPollFactorPositionRevisionDuo
extends IBasePollRevisionFactorPositionDuo {
}

export class PollRevisionFactorPositionDuo
	extends BasePollRevisionFactorPositionDuo
	implements IPollFactorPositionRevisionDuo {
}

DI.set(POLL_FACTOR_POSITION_REVISION_DUO, PollRevisionFactorPositionDuo)
