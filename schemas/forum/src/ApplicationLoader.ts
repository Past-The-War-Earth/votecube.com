import {
    API_REGISTRY,
} from '@airport/check-in'
import { container, DI } from '@airport/direction-indicator'
import { APPLICATION_INITIALIZER } from '@airport/terminal-map'
import {
    APPLICATION_LOADER,
    IApplicationLoader,
    JsonApplicationWithLastIds,
    LastIds
} from '@airport/apron'
import { DDL_OBJECT_RETRIEVER } from '@airport/takeoff'
import { domain } from '@votecube/dependency-injection'
import { APPLICATION } from './generated/application'
import { forum } from './tokens'

export class ApplicationLoader
    implements IApplicationLoader {

    private initializing = false

    async load(
        lastIds: LastIds
    ): Promise<void> {
        if (this.initializing) {
            return
        }
        this.initializing = true

        forum.autopilot = false

        const [apiRegistry, ddlObjectRetriever, applicationInitializer] = await container(this)
            .get(API_REGISTRY, DDL_OBJECT_RETRIEVER, APPLICATION_INITIALIZER)
        ddlObjectRetriever.lastIds = lastIds

        await applicationInitializer.initializeForAIRportApp(APPLICATION as any)

        apiRegistry.initialize(APPLICATION.versions[0].api)
    }

    getApplication(): JsonApplicationWithLastIds {
        return APPLICATION as any
    }
}
DI.set(APPLICATION_LOADER, ApplicationLoader)

export function loadApplicationInitializer() {
    console.log('Application Initializer loaded')
}