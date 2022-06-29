import { IRequestManager } from "@airport/arrivals-n-departures";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { IIdeaDao, ISituationIdeaDao } from "../dao/dao";
import { ReasonDao } from "../dao/ReasonDao";
import { SituationIdea } from "../ddl/ddl";

@Injected()
export class SituationIdeaApi {

    @Inject()
    agreementDao: AgreementDao

    @Inject()
    agreementReasonDao: AgreementReasonDao

    @Inject()
    ideaDao: IIdeaDao

    @Inject()
    reasonDao: ReasonDao

    @Inject()
    situationIdeaDao: ISituationIdeaDao

    @Inject()
    requestManager: IRequestManager

    @Api()
    async add(
        situationIdea: SituationIdea
    ): Promise<void> {

        await this.situationIdeaDao.save(situationIdea)
    }

}
