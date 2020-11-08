import {system}                 from '@airport/di'
import {IAuth}                  from './Auth'

const vcLogic = system('votecube-ui')
	.lib('vc-logic')

export const AUTH                    = vcLogic.token<IAuth>()
