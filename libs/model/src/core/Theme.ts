import {DocStatus}                  from './common'
import {ICoreAgeSuitabilityTracked} from './DocumentValue'

export type Theme_Id = number
export type Theme_Name = string

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
