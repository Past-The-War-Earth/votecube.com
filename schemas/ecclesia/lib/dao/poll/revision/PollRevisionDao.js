var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ANOTHER, Y } from '@airport/air-control';
import { Persist } from '@airport/check-in';
import { DI } from '@airport/di';
import { BasePollRevisionDao, Q } from '../../../generated/generated';
import { POLL_REVISION_DAO } from '../../../tokens';
export class PollRevisionDao extends BasePollRevisionDao {
    constructor() {
        super(...arguments);
        this.createOne = this.create;
    }
    async createNew(poll, ctx) {
        await this.createOne(poll, ctx);
    }
    async getListingsForLevel(parentId) {
        let pr, 
        // p: QPoll, not needed, just getting the id
        o1, ot1, o2, ot2, 
        // pr2: QPollRevision, not needed, just getting the id
        prt, prfp, fp, f, ft;
        return await this.db.find.tree({
            select: {
                id: Y,
                depth: Y,
                poll: {
                    id: Y
                },
                outcomeVersionA: {
                    id: Y,
                    parentTranslation: {
                        name: Y
                    }
                },
                outcomeVersionB: {
                    id: Y,
                    parentTranslation: {
                        name: Y
                    }
                },
                parent: {
                    id: Y
                },
                parentTranslation: {
                    name: Y
                },
                factorPositions: {
                    factorPosition: {
                        factor: {
                            id: Y,
                            parentTranslation: {
                                name: Y
                            }
                        }
                    }
                }
            },
            from: [
                pr = Q.PollRevision,
                // p = pr.poll.innerJoin(),
                o1 = pr.outcomeVersionA.innerJoin(),
                ot1 = o1.parentTranslation.innerJoin(),
                o2 = pr.outcomeVersionB.innerJoin(),
                ot2 = o2.parentTranslation.innerJoin(),
                prt = pr.parentTranslation.innerJoin(),
                prfp = pr.factorPositions.innerJoin(),
                fp = prfp.factorPosition.innerJoin(),
                f = fp.factor.innerJoin(),
                ft = f.parentTranslation.innerJoin()
            ],
            where: pr.parent.id.equals(parentId)
        });
    }
}
__decorate([
    Persist({
        ageSuitability: Y,
        depth: Y,
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
    })
], PollRevisionDao.prototype, "createOne", void 0);
DI.set(POLL_REVISION_DAO, PollRevisionDao);
//# sourceMappingURL=PollRevisionDao.js.map