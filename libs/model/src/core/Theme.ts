import {DocStatus}                  from './common'
import {ICoreAgeSuitabilityTracked} from './DocumentValue'

export type ThemeId = number
export type ThemeName = string

export interface ICoreTheme<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreThemeFromForm {

	id: ThemeId
	name: ThemeName

}

export interface ICoreThemeFromForm {

	id: ThemeId
	name: ThemeName

}
