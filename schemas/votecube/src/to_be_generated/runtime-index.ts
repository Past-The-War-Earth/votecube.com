import { loadIframe } from '@airport/web-tower'
import { votecube } from './common-tokens'

export * from '../dao/dao'
export * from '../ddl/ddl'
export * from '../generated/generated'
export * from './ApplicationLoader'
export * from './runtime-tokens'

loadIframe(votecube.getFullName())
