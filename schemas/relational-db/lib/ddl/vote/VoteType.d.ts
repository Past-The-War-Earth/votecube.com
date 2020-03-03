import { VoteType_Description, VoteType_Id, VoteType_Name } from '../../types/vote/VoteType';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
/**
 * Reserved for future use - let people on the the target group vote too (
 * since they can see the poll) but track it differently.
 *
 * The only currently supported vote type is "Eligible",
 * meaning made in the specified Run by a
 * user that belongs to that Location
 */
export declare class VoteType extends SystemGeneratedRow {
    id: VoteType_Id;
    name: VoteType_Name;
    description: VoteType_Description;
}
