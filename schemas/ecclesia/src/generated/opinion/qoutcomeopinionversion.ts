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
	OutcomeGraph,
	OutcomeEId,
	OutcomeEOptionalId,
	OutcomeEUpdateProperties,
	OutcomeESelect,
	QOutcome,
	QOutcomeQId,
	QOutcomeQRelation,
} from '../poll/revision/qoutcome';
import {
	Outcome,
} from '../../ddl/poll/revision/Outcome';
import {
	OutcomeOpinionVersionTranslationGraph,
	OutcomeOpinionVersionTranslationEId,
	OutcomeOpinionVersionTranslationEOptionalId,
	OutcomeOpinionVersionTranslationEUpdateProperties,
	OutcomeOpinionVersionTranslationESelect,
	QOutcomeOpinionVersionTranslation,
	QOutcomeOpinionVersionTranslationQId,
	QOutcomeOpinionVersionTranslationQRelation,
} from './translation/qoutcomeopinionversiontranslation';
import {
	OutcomeOpinionVersionTranslation,
} from '../../ddl/opinion/translation/OutcomeOpinionVersionTranslation';
import {
	OutcomeOpinionVersion,
} from '../../ddl/opinion/OutcomeOpinionVersion';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeOpinionVersionESelect
    extends IEntitySelectProperties, OutcomeOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevisionOpinion?: PollRevisionOpinionESelect;
	outcome?: OutcomeESelect;
	parent?: OutcomeOpinionVersionESelect;
	children?: OutcomeOpinionVersionESelect;
	translations?: OutcomeOpinionVersionTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeOpinionVersionEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
	outcome?: OutcomeEOptionalId;
	parent?: OutcomeOpinionVersionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeOpinionVersionGraph
	extends OutcomeOpinionVersionEOptionalId, IEntityCascadeGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	pollRevisionOpinion?: PollRevisionOpinionGraph;
	outcome?: OutcomeGraph;
	parent?: OutcomeOpinionVersionGraph;
	children?: OutcomeOpinionVersionGraph[];
	translations?: OutcomeOpinionVersionTranslationGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeOpinionVersionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_REVISION_OPINION_ID?: number | IQNumberField;
	OUTCOME_ID?: number | IQNumberField;
	PARENT_OUTCOME_OPINION_VERSION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionECreateProperties
extends Partial<OutcomeOpinionVersionEId>, OutcomeOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeOpinionVersionECreateColumns
extends OutcomeOpinionVersionEId, OutcomeOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeOpinionVersion extends IQEntity<OutcomeOpinionVersion>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevisionOpinion: QPollRevisionOpinionQRelation;
	outcome: QOutcomeQRelation;
	parent: QOutcomeOpinionVersionQRelation;
	children: IQOneToManyRelation<OutcomeOpinionVersion, QOutcomeOpinionVersion>;
	translations: IQOneToManyRelation<OutcomeOpinionVersionTranslation, QOutcomeOpinionVersionTranslation>;

}


// Entity Id Interface
export interface QOutcomeOpinionVersionQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeOpinionVersionQRelation
	extends IQRelation<OutcomeOpinionVersion, QOutcomeOpinionVersion>, QOutcomeOpinionVersionQId {
}

