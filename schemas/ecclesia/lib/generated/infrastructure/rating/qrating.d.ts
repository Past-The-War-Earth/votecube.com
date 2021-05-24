import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../row/qsystemgeneratedrow';
import { RatingTypeGraph, RatingTypeEOptionalId, RatingTypeESelect, QRatingTypeQRelation } from './qratingtype';
import { RatingSettingGraph, RatingSettingESelect, QRatingSetting } from './qratingsetting';
import { RatingSetting } from '../../../ddl/infrastructure/rating/RatingSetting';
import { Rating } from '../../../ddl/infrastructure/rating/Rating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingESelect extends SystemGeneratedRowESelect, RatingEOptionalId {
    cssClass?: string | IQStringField;
    type?: RatingTypeESelect;
    settings?: RatingSettingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface RatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    cssClass?: string | IQStringField;
    type?: RatingTypeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingGraph extends RatingEOptionalId, SystemGeneratedRowGraph {
    cssClass?: string | IQStringField;
    type?: RatingTypeGraph;
    settings?: RatingSettingGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    RATING_CSS_CLASS?: string | IQStringField;
    RATING_TYPE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingECreateProperties extends Partial<RatingEId>, RatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingECreateColumns extends RatingEId, RatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRating extends QSystemGeneratedRow<Rating> {
    id: IQNumberField;
    cssClass: IQStringField;
    type: QRatingTypeQRelation;
    settings: IQOneToManyRelation<RatingSetting, QRatingSetting>;
}
export interface QRatingQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QRatingQRelation extends QSystemGeneratedRowQRelation<Rating, QRating>, QRatingQId {
}
//# sourceMappingURL=qrating.d.ts.map