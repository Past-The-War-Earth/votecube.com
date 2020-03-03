import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../row/qsystemgeneratedrow';
import { CountryEOptionalId, CountryESelect, QCountryQRelation } from '../../location/qcountry';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from './qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingSettingESelect extends SystemGeneratedRowESelect, RatingSettingEOptionalId {
    key?: string | IQStringField;
    value?: string | IQStringField;
    country?: CountryESelect;
    rating?: RatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingSettingEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface RatingSettingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingSettingEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    key?: string | IQStringField;
    value?: string | IQStringField;
    country?: CountryEOptionalId;
    rating?: RatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingSettingECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingSettingEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    RATING_SETTING_KEY?: string | IQStringField;
    RATING_SETTING_VALUE?: string | IQStringField;
    COUNTRY_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingSettingECreateProperties extends Partial<RatingSettingEId>, RatingSettingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingSettingECreateColumns extends RatingSettingEId, RatingSettingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRatingSetting extends QSystemGeneratedRow {
    id: IQNumberField;
    key: IQStringField;
    value: IQStringField;
    country: QCountryQRelation;
    rating: QRatingQRelation;
}
export interface QRatingSettingQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QRatingSettingQRelation extends QSystemGeneratedRowQRelation<QRatingSetting>, QRatingSettingQId {
}
