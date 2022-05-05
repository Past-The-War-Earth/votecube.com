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
	ImmutableRowGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from '../infrastructure/row/qimmutablerow';
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
	PollRevisionOpinionVersionTranslationGraph,
	PollRevisionOpinionVersionTranslationEId,
	PollRevisionOpinionVersionTranslationEOptionalId,
	PollRevisionOpinionVersionTranslationEUpdateProperties,
	PollRevisionOpinionVersionTranslationESelect,
	QPollRevisionOpinionVersionTranslation,
	QPollRevisionOpinionVersionTranslationQId,
	QPollRevisionOpinionVersionTranslationQRelation,
} from './translation/qpollrevisionopinionversiontranslation';
import {
	PollRevisionOpinionVersionTranslation,
} from '../../ddl/opinion/translation/PollRevisionOpinionVersionTranslation';
import {
	PollRevisionOpinionVersion,
} from '../../ddl/opinion/PollRevisionOpinionVersion';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionVersionESelect
    extends ImmutableRowESelect, PollRevisionOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevisionOpinion?: PollRevisionOpinionESelect;
	parent?: PollRevisionOpinionVersionESelect;
	children?: PollRevisionOpinionVersionESelect;
	translations?: PollRevisionOpinionVersionTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionVersionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
	parent?: PollRevisionOpinionVersionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionVersionGraph
	extends PollRevisionOpinionVersionEOptionalId, ImmutableRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	pollRevisionOpinion?: PollRevisionOpinionGraph;
	parent?: PollRevisionOpinionVersionGraph;
	children?: PollRevisionOpinionVersionGraph[];
	translations?: PollRevisionOpinionVersionTranslationGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionVersionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_OPINION_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionECreateProperties
extends Partial<PollRevisionOpinionVersionEId>, PollRevisionOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionVersionECreateColumns
extends PollRevisionOpinionVersionEId, PollRevisionOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionVersion extends QImmutableRow<PollRevisionOpinionVersion>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevisionOpinion: QPollRevisionOpinionQRelation;
	parent: QPollRevisionOpinionVersionQRelation;
	children: IQOneToManyRelation<PollRevisionOpinionVersion, QPollRevisionOpinionVersion>;
	translations: IQOneToManyRelation<PollRevisionOpinionVersionTranslation, QPollRevisionOpinionVersionTranslation>;

}


// Entity Id Interface
export interface QPollRevisionOpinionVersionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionOpinionVersionQRelation
	extends QImmutableRowQRelation<PollRevisionOpinionVersion, QPollRevisionOpinionVersion>, QPollRevisionOpinionVersionQId {
}

