import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	IQAirEntityOneToManyRelation,
	IQAirEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/tarmaq-query';
import {
	AirEntityGraph,
	AirEntityEId,
	AirEntityEUpdateColumns,
	AirEntityEUpdateProperties,
	AirEntityESelect,
	QAirEntityQId,
	QAirEntityQRelation,
	QAirEntity,
} from '@airport/holding-pattern';
import {
	SituationIdeaGraph,
	SituationIdeaEId,
	SituationIdeaEOptionalId,
	SituationIdeaEUpdateProperties,
	SituationIdeaESelect,
	QSituationIdea,
	QSituationIdeaQId,
	QSituationIdeaQRelation,
} from './qsituationidea';
import {
	ISituationIdea,
} from './situationidea';
import {
	IdeaGraph,
	IdeaEId,
	IdeaEOptionalId,
	IdeaEUpdateProperties,
	IdeaESelect,
	QIdea,
	QIdeaQId,
	QIdeaQRelation,
} from './qidea';
import {
	IIdea,
} from './idea';
import {
	FactorGraph,
	FactorEId,
	FactorEOptionalId,
	FactorEUpdateProperties,
	FactorESelect,
	QFactor,
	QFactorQId,
	QFactorQRelation,
} from '../factor/qfactor';
import {
	IFactor,
} from '../factor/factor';
import {
	PositionGraph,
	PositionEId,
	PositionEOptionalId,
	PositionEUpdateProperties,
	PositionESelect,
	QPosition,
	QPositionQId,
	QPositionQRelation,
} from '../factor/qposition';
import {
	IPosition,
} from '../factor/position';
import {
	IReason,
} from './reason';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ReasonESelect
    extends AirEntityESelect, ReasonEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationIdea?: SituationIdeaESelect;
	idea?: IdeaESelect;
	factor?: FactorESelect;
	position?: PositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReasonEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ReasonEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReasonEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Non-Id Relations - _localIds only & no OneToMany's
	situationIdea?: SituationIdeaEOptionalId;
	idea?: IdeaEOptionalId;
	factor?: FactorEOptionalId;
	position?: PositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReasonGraph
	extends ReasonEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Relations
	situationIdea?: SituationIdeaGraph;
	idea?: IdeaGraph;
	factor?: FactorGraph;
	position?: PositionGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ReasonEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	POSITION_ORIENTATION?: number | IQNumberField;
	FACTOR_NUMBER?: number | IQNumberField;
	COLOR_BLUE?: number | IQNumberField;
	COLOR_GREEN?: number | IQNumberField;
	COLOR_RED?: number | IQNumberField;
	OUTCOME_ORDINAL?: string | IQStringField;
	SITUATION_IDEAS_RID_1?: number | IQNumberField;
	SITUATION_IDEAS_AID_1?: number | IQNumberField;
	SITUATION_IDEAS_ARID_1?: number | IQNumberField;
	IDEAS_RID_1?: number | IQNumberField;
	IDEAS_AID_1?: number | IQNumberField;
	IDEAS_ARID_1?: number | IQNumberField;
	FACTORS_RID_1?: number | IQNumberField;
	FACTORS_AID_1?: number | IQNumberField;
	FACTORS_ARID_1?: number | IQNumberField;
	POSITIONS_RID_1?: number | IQNumberField;
	POSITIONS_AID_1?: number | IQNumberField;
	POSITIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReasonECreateProperties
extends Partial<ReasonEId>, ReasonEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReasonECreateColumns
extends ReasonEId, ReasonEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QReason extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	dir: IQNumberField;
	factorNumber: IQNumberField;
	blue: IQNumberField;
	green: IQNumberField;
	red: IQNumberField;
	outcomeOrdinal: IQStringField;

	// Non-Id Relations
	situationIdea: QSituationIdeaQRelation;
	idea: QIdeaQRelation;
	factor: QFactorQRelation;
	position: QPositionQRelation;

}


// Entity Id Interface
export interface QReasonQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QReasonQRelation
	extends QAirEntityQRelation<IReason, QReason>, QReasonQId {
}

