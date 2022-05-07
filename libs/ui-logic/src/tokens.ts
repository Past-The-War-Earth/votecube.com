import { app } from '@votecube/dependency-injection'
import { Auth, IAuth } from './Auth'
import { IRoutes, Routes } from './Routes'
import { IRepositoryRecordConverter, RepositoryRecordConverter } from './converter/RepositoryRecordConverter'

const publicLogic = app('ui-logic')

export const AUTH = publicLogic.token<IAuth>({
	class: Auth,
	interface: 'IAuth',
	token: 'AUTH'
})
export const ROUTES = publicLogic.token<IRoutes>({
	class: Routes,
	interface: 'IRoutes',
	token: 'ROUTES'
})
export const REPOSITORY_RECORD_CONVERTER = publicLogic
	.token<IRepositoryRecordConverter>({
		class: RepositoryRecordConverter,
		interface: 'IRepositoryRecordConverter',
		token: 'REPOSITORY_RECORD_CONVERTER'
	})
