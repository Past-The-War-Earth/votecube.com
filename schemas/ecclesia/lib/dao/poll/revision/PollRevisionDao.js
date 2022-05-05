import { Y } from '@airport/air-traffic-control';
import { DI } from '@airport/di';
import { BasePollRevisionDao, Q, } from '../../../generated/generated';
import { POLL_REVISION_DAO } from '../../../tokens';
export class PollRevisionDao extends BasePollRevisionDao {
    /*
@PollRevisionDao.Save({
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
createOrig
*/
    async create(pollRevision) {
        await this.db.save(pollRevision);
    }
    /*
    @PollRevisionDao.Find.Tree((
        parentId: number,
        Q: LocalQSchema,
        pr: QPollRevision,
        // p: QPoll, not needed, just getting the id
        o1: QOutcome,
        ot1: QOutcomeTranslation,
        o2: QOutcome,
        ot2: QOutcomeTranslation,
        // pr2: QPollRevision, not needed, just getting the id
        prt: QPollRevisionTranslation,
        prfp: QPollRevisionFactorPosition,
        fp: QFactorPosition,
        f: QFactor,
        ft: QFactorTranslation
    ) => ({
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
    }))
    findTreeOrig
    */
    async findTree(parentId) {
        let pr, 
        // p: QPoll, not needed, just getting the id
        o1, ot1, o2, ot2, 
        // pr2: QPollRevision, not needed, just getting the id
        prt, prfp, fp, f, ft;
        return this.db.find.tree({
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
DI.set(POLL_REVISION_DAO, PollRevisionDao);
//# sourceMappingURL=PollRevisionDao.js.map