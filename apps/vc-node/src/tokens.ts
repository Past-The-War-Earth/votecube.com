import {system}                 from '@airport/di'
import {IAuth}                  from './Auth'

const publicLogic = system('votecube-ui')
	.lib('vc-logic')

export const AUTH                    = publicLogic.token<IAuth>()
