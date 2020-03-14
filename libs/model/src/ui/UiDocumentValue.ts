import {AgeSuitability} from '@votecube/relational-db'
import {IsDelta}        from '../core/core'
import {UiDocStatus}    from './common'

export interface IUiAgeSuitabilityTracked<Doc extends UiDocStatus> {

	ageSuitability: Doc extends IsDelta ? boolean : AgeSuitability

}
