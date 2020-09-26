import { Skin_BackgroundColor, Skin_Id, Skin_TextColor } from '../../types/factor/Skin';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
export declare class Skin extends ImmutableActorRow {
    id: Skin_Id;
    backgroundColor: Skin_BackgroundColor;
    textColor: Skin_TextColor;
    parent: Skin;
    children: Skin[];
}
//# sourceMappingURL=Skin.d.ts.map