import { system } from '@airport/di'
import { IAuth } from './Auth'
import { IRoutes } from './Routes'
import { IRepositoryRecordConverter } from './converter/RepositoryRecordConverter'

const publicLogic = system('votecube-ui')
	.lib('ui-logic')

export const AUTH = publicLogic.token<IAuth>('AUTH')
export const ROUTES = publicLogic.token<IRoutes>('ROUTES')
export const REPOSITORY_RECORD_CONVERTER = publicLogic
	.token<IRepositoryRecordConverter>('REPOSITORY_RECORD_CONVERTER')
