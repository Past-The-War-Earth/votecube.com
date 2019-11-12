import {IUser} from '../core/User'
import {Id}    from '../old/model'

export type Label_Id = Id

export const LABELS = 'LABELS'

export interface ILabel
	// extends ITemporalModel
{

	description: string
	id: Label_Id
	name: string
	user: IUser

}
