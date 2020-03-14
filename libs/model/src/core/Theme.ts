import {
	Theme_Id,
	Theme_Name
}                                   from '@votecube/relational-db'
import {DocStatus}                  from './common'
import {ICoreAgeSuitabilityTracked} from './DocumentValue'

export interface ICoreTheme<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreThemeFromForm {

	id: Theme_Id
	name: Theme_Name

}

export interface ICoreThemeFromForm {

	id: Theme_Id
	name: Theme_Name

}
