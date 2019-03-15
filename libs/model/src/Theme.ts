import {Id} from './core/Model'

export type ThemeId = Id

export const THEMES = 'THEMES'

export interface ITheme {

	createdAt: Date
	description: string
	id: ThemeId
	name: string

}
