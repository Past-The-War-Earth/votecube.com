var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
let RepositoryRecordConverter = class RepositoryRecordConverter {
    dbToUi(dbRepositoryEntity) {
        if (!dbRepositoryEntity) {
            return {
                ageSuitability: 0,
            };
        }
        return {
            // actorId: dbRepositoryEntity.actor.id,
            // actorRecordId: dbRepositoryEntity.actorRecordId,
            ageSuitability: dbRepositoryEntity.ageSuitability,
            // repositoryId: dbRepositoryEntity.repository.id,
        };
    }
    uiToDb(uiRepositoryRecord, dbRepositoryEntity, ageSuitability = null) {
        // if (!uiRepositoryRecord) {
        //     return
        // }
        if (ageSuitability || ageSuitability === 0) {
            dbRepositoryEntity.ageSuitability = ageSuitability;
        }
        /*
        if (!dbRepositoryEntity.actor) {
            dbRepositoryEntity.actor = {
                id: null
            }
        }
        if (!dbRepositoryEntity.repository) {
            dbRepositoryEntity.repository = {
                id: null
            }
        }
        */
    }
};
RepositoryRecordConverter = __decorate([
    Injected()
], RepositoryRecordConverter);
export { RepositoryRecordConverter };
//# sourceMappingURL=RepositoryRecordConverter.js.map