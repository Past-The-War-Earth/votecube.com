import { Y } from "@airport/tarmaq-query";
import { Injected } from "@airport/direction-indicator";
import { Idea, Reason, SituationIdea } from "../ddl/ddl";
import { BaseReasonDao } from "../generated/baseDaos";
import { Q, QIdea, QReason, QSituationIdea } from "../generated/generated";

@Injected()
export class ReasonDao
    extends BaseReasonDao {

    async findAllForIdea(
        idea: Idea
    ): Promise<Reason[]> {
        let r: QReason,
            i: QIdea
        return await this._find({
            SELECT: {
                '*': Y,
                factor: {},
                position: {}
            },
            FROM: [
                r = Q.Reason,
                i = r.idea.LEFT_JOIN()
            ],
            WHERE: i.equals(idea)
        })
    }

    async findAllForSituationIdea(
        situationIdea: SituationIdea
    ): Promise<Reason[]> {
        let r: QReason,
            si: QSituationIdea
        return await this._find({
            SELECT: {
                '*': Y,
                factor: {},
                position: {}
            },
            FROM: [
                r = Q.Reason,
                si = r.situationIdea.LEFT_JOIN()
            ],
            WHERE: si.equals(situationIdea)
        })
    }

}