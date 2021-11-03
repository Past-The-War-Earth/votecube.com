import { Id } from '@votecube/ecclesia';
import { Doc_Depth, IUiRepositoryRecord } from '../core/common';
import { IUiUserCreated } from './UiUser';
export interface IUiVersioned<K extends Id> extends IUiUserCreated<K> {
    depth: Doc_Depth;
    parent: IUiRepositoryRecord;
}
//# sourceMappingURL=UiPathFragment.d.ts.map