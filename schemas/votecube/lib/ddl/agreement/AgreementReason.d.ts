import { RepositoryEntity } from "@airport/holding-pattern";
import { Reason } from "../ddl";
import { Agreement } from "./Agreement";
export declare class AgreementReason extends RepositoryEntity {
    axis: string;
    share: number;
    agreement: Agreement;
    reason: Reason;
}
//# sourceMappingURL=AgreementReason.d.ts.map