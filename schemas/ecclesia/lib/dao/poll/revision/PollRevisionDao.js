"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const check_in_1 = require("@airport/check-in");
const di_1 = require("@airport/di");
const generated_1 = require("../../../generated/generated");
const tokens_1 = require("../../../tokens");
class PollRevisionDao extends generated_1.BasePollRevisionDao {
    constructor() {
        super(...arguments);
        this.createOne = this.create;
    }
    async createNew(poll, user) {
        await this.createOne(poll);
    }
    async getListingsForLevel(parentId) {
        let pr, 
        // p: QPoll, not needed, just getting the id
        o1, ot1, o2, ot2, 
        // pr2: QPollRevision, not needed, just getting the id
        prt, prfp, fp, f, ft;
        return await this.db.find.tree({
            select: {
                id: air_control_1.Y,
                depth: air_control_1.Y,
                poll: {
                    id: air_control_1.Y
                },
                outcomeVersionA: {
                    id: air_control_1.Y,
                    parentTranslation: {
                        name: air_control_1.Y
                    }
                },
                outcomeVersionB: {
                    id: air_control_1.Y,
                    parentTranslation: {
                        name: air_control_1.Y
                    }
                },
                parent: {
                    id: air_control_1.Y
                },
                parentTranslation: {
                    name: air_control_1.Y
                },
                factorPositions: {
                    factorPosition: {
                        factor: {
                            id: air_control_1.Y,
                            parentTranslation: {
                                name: air_control_1.Y
                            }
                        }
                    }
                }
            },
            from: [
                pr = generated_1.Q.PollRevision,
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
    check_in_1.Persist({
        ageSuitability: air_control_1.Y,
        depth: air_control_1.Y,
        factorPositions: [{
                axis: air_control_1.Y,
                dir: air_control_1.Y,
                factorNumber: air_control_1.Y,
                blue: air_control_1.Y,
                green: air_control_1.Y,
                red: air_control_1.Y,
                outcomeOrdinal: air_control_1.Y,
                parent: null || {
                    id: air_control_1.Y
                },
                skin: {
                    id: air_control_1.Y
                } || {
                    backgroundColor: air_control_1.Y,
                    textColor: air_control_1.Y,
                    parent: null || {
                        id: air_control_1.Y
                    }
                },
                factorPosition: {
                    factor: {
                        id: air_control_1.Y
                    } || {
                        ageSuitability: air_control_1.Y,
                        parentTranslation: {
                            name: air_control_1.Y,
                        },
                        parent: null || {
                            id: air_control_1.Y
                        }
                    },
                    position: {
                        id: air_control_1.Y
                    } || {
                        ageSuitability: air_control_1.Y,
                        parentTranslation: {
                            name: air_control_1.Y,
                        },
                        parent: null || {
                            id: air_control_1.Y
                        }
                    }
                }
            }, air_control_1.ANOTHER(2)],
        outcomeVersionA: {
            id: air_control_1.Y
        } || {
            ageSuitability: air_control_1.Y,
            parentTranslation: {
                name: air_control_1.Y
            },
            parent: null || {
                id: air_control_1.Y
            }
        },
        outcomeVersionB: {
            id: air_control_1.Y
        } || {
            ageSuitability: air_control_1.Y,
            parentTranslation: {
                name: air_control_1.Y
            },
            parent: null || {
                id: air_control_1.Y
            }
        },
        parentTranslation: {
            id: air_control_1.Y,
        } || {
            name: air_control_1.Y,
            parent: null || {
                id: air_control_1.Y
            }
        },
        poll: {
            id: air_control_1.Y
        }
    })
], PollRevisionDao.prototype, "createOne", void 0);
exports.PollRevisionDao = PollRevisionDao;
di_1.DI.set(tokens_1.POLL_REVISION_DAO, PollRevisionDao);
//# sourceMappingURL=PollRevisionDao.js.map