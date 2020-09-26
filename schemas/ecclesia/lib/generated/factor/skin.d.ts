import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
export interface ISkin extends IImmutableActorRow {
    id: number;
    backgroundColor?: number;
    textColor?: number;
    parent?: ISkin;
    children?: ISkin[];
}
//# sourceMappingURL=skin.d.ts.map