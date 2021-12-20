import { domain } from '@votecube/dependency-injection'

export * from './api/api'
export * from './dao/dao'
export * from './ddl/ddl'
export * from './generated/generated'
export * from './ApplicationLoader'
export * from './server-tokens'
export * from './tokens'

import { IOC } from '@airport/di'
import { LOCAL_API_SERVER } from "@airport/security-check";

export async function load() {
    const localApiServer = await IOC.get(LOCAL_API_SERVER)
    localApiServer.domainName = domain.name
    console.log('TrumentBox App loaded')
}
