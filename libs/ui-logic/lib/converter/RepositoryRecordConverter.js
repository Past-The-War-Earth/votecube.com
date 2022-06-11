var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
let RepositoryRecordConverter = class RepositoryRecordConverter {
    dbToUi(dbAirEntity) {
        if (!dbAirEntity) {
            return {
                ageSuitability: 0,
            };
        }
        return {
            // actorId: dbAirEntity.actor.id,
            // actorRecordId: dbAirEntity.actorRecordId,
            ageSuitability: dbAirEntity.ageSuitability,
            // repositoryId: dbAirEntity.repository.id,
        };
    }
    uiToDb(uiRepositoryRecord, dbAirEntity, ageSuitability = null) {
        // if (!uiRepositoryRecord) {
        //     return
        // }
        if (ageSuitability || ageSuitability === 0) {
            dbAirEntity.ageSuitability = ageSuitability;
        }
        /*
        if (!dbAirEntity.actor) {
            dbAirEntity.actor = {
                id: null
            }
        }
        if (!dbAirEntity.repository) {
            dbAirEntity.repository = {
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