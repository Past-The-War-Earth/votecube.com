import { RepositoryEntity } from "@airport/holding-pattern";
import { Reason } from "../ddl";
import { Agreement } from "./Agreement";
export declare class AgreementFactor extends RepositoryEntity {
    axis: string;
    share: number;
    agreement: Agreement;
    reason: Reason;
}
//# sourceMappingURL=AgreementFactor.d.ts.map