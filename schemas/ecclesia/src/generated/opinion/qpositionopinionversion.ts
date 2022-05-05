import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IEntityDatabaseFacade,
	IEntityFind,
	IEntityFindOne,
	IEntitySearch,
	IEntitySearchOne,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	PollRevisionOpinionGraph,
	PollRevisionOpinionEId,
	PollRevisionOpinionEOptionalId,
	PollRevisionOpinionEUpdateProperties,
	PollRevisionOpinionESelect,
	QPollRevisionOpinion,
	QPollRevisionOpinionQId,
	QPollRevisionOpinionQRelation,
} from './qpollrevisionopinion';
import {
	PollRevisionOpinion,
} from '../../ddl/opinion/PollRevisionOpinion';
import {
	PollRevisionFactorPositionGraph,
	PollRevisionFactorPositionEId,
	PollRevisionFactorPositionEOptionalId,
	PollRevisionFactorPositionEUpdateProperties,
	PollRevisionFactorPositionESelect,
	QPollRevisionFactorPosition,
	QPollRevisionFactorPositionQId,
	QPollRevisionFactorPositionQRelation,
} from '../poll/revision/qpollrevisionfactorposition';
import {
	PollRevisionFactorPosition,
} from '../../ddl/poll/revision/PollRevisionFactorPosition';
import {
	PositionOpinionVersionTranslationGraph,
	PositionOpinionVersionTranslationEId,
	PositionOpinionVersionTranslationEOptionalId,
	PositionOpinionVersionTranslationEUpdateProperties,
	PositionOpinionVersionTranslationESelect,
	QPositionOpinionVersionTranslation,
	QPositionOpinionVersionTranslationQId,
	QPositionOpinionVersionTranslationQRelation,
} from './translation/qpositionopinionversiontranslation';
import {
	PositionOpinionVersionTranslation,
} from '../../ddl/opinion/translation/PositionOpinionVersionTranslation';
import {
	PositionOpinionVersion,
} from '../../ddl/opinion/PositionOpinionVersion';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionESelect
    extends IEntitySelectProperties, PositionOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevisionOpinion?: PollRevisionOpinionESelect;
	factorPosition?: PollRevisionFactorPositionESelect;
	parent?: PositionOpinionVersionESelect;
	children?: PositionOpinionVersionESelect;
	translations?: PositionOpinionVersionTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
	factorPosition?: PollRevisionFactorPositionEOptionalId;
	parent?: PositionOpinionVersionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionGraph
	extends PositionOpinionVersionEOptionalId, IEntityCascadeGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	pollRevisionOpinion?: PollRevisionOpinionGraph;
	factorPosition?: PollRevisionFactorPositionGraph;
	parent?: PositionOpinionVersionGraph;
	children?: PositionOpinionVersionGraph[];
	translations?: PositionOpinionVersionTranslationGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_REVISION_OPINION_ID?: number | IQNumberField;
	POLL_REVISION_FACTOR_POSITION_ID?: number | IQNumberField;
	PARENT_POSITION_OPINION_VERSION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionECreateProperties
extends Partial<PositionOpinionVersionEId>, PositionOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionECreateColumns
extends PositionOpinionVersionEId, PositionOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersion extends IQEntity<PositionOpinionVersion>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevisionOpinion: QPollRevisionOpinionQRelation;
	factorPosition: QPollRevisionFactorPositionQRelation;
	parent: QPositionOpinionVersionQRelation;
	children: IQOneToManyRelation<PositionOpinionVersion, QPositionOpinionVersion>;
	translations: IQOneToManyRelation<PositionOpinionVersionTranslation, QPositionOpinionVersionTranslation>;

}


// Entity Id Interface
export interface QPositionOpinionVersionQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionOpinionVersionQRelation
	extends IQRelation<PositionOpinionVersion, QPositionOpinionVersion>, QPositionOpinionVersionQId {
}

