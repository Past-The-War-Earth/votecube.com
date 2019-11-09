import {IUser} from '../core/User'
import {Id}    from '../old/model'

export type LabelId = Id

export const LABELS = 'LABELS'

export interface ILabel
	// extends ITemporalModel
{

	description: string
	id: LabelId
	name: string
	user: IUser

}
