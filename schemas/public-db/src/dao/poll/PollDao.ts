import {
	BasePollDao,
	IBasePollDao
} from '../../generated/generated'

export interface IPollDao
	extends IBasePollDao {

}

export class PollDao
	extends BasePollDao
	implements IPollDao {

}