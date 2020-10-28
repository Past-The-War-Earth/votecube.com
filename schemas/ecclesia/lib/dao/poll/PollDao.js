var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ANOTHER, Y } from '@airport/air-control';
import { Persist } from '@airport/check-in';
import { DI } from '@airport/di';
import { BasePollDao, } from '../../generated/generated';
import { POLL_DAO } from '../../tokens';
export class PollDao extends BasePollDao {
    constructor() {
        super(...arguments);
        this.createOne = this.create;
    }
    async createNew(poll, user) {
        await this.createOne(poll);
    }
}
__decorate([
    Persist({
        ageSuitability: Y,
        parent: {
            id: Y
        } || null,
        revisions: [{
                ageSuitability: Y,
                depth: 1,
                factorPositions: [{
                        axis: Y,
                        dir: Y,
                        factorNumber: Y,
                        blue: Y,
                        green: Y,
                        red: Y,
                        outcomeOrdinal: Y,
                        parent: null || {
                            id: Y
                        },
                        skin: {
                            id: Y
                        } || {
                            backgroundColor: Y,
                            textColor: Y,
                            parent: null || {
                                id: Y
                            }
                        },
                        factorPosition: {
                            factor: {
                                id: Y
                            } || {
                                ageSuitability: Y,
                                parentTranslation: {
                                    name: Y,
                                },
                                parent: null || {
                                    id: Y
                                }
                            },
                            position: {
                                id: Y
                            } || {
                                ageSuitability: Y,
                                parentTranslation: {
                                    name: Y,
                                },
                                parent: null || {
                                    id: Y
                                }
                            }
                        }
                    }, ANOTHER(2)],
                outcomeVersionA: {
                    id: Y
                } || {
                    ageSuitability: Y,
                    parentTranslation: {
                        name: Y
                    },
                    parent: null || {
                        id: Y
                    }
                },
                outcomeVersionB: {
                    id: Y
                } || {
                    ageSuitability: Y,
                    parentTranslation: {
                        name: Y
                    },
                    parent: null || {
                        id: Y
                    }
                },
                parentTranslation: {
                    id: Y,
                } || {
                    name: Y,
                    parent: null || {
                        id: Y
                    }
                },
                poll: {
                    id: Y
                }
            }],
        theme: {
            id: Y,
        },
        type: {
            id: Y,
        }
    })
], PollDao.prototype, "createOne", void 0);
DI.set(POLL_DAO, PollDao);
//# sourceMappingURL=PollDao.js.map