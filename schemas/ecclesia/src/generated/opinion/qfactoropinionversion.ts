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
	Factor,
} from '../../ddl/factor/Factor';
import {
	FactorOpinionVersionTranslationGraph,
	FactorOpinionVersionTranslationEId,
	FactorOpinionVersionTranslationEOptionalId,
	FactorOpinionVersionTranslationEUpdateProperties,
	FactorOpinionVersionTranslationESelect,
	QFactorOpinionVersionTranslation,
	QFactorOpinionVersionTranslationQId,
	QFactorOpinionVersionTranslationQRelation,
} from './translation/qfactoropinionversiontranslation';
import {
	FactorOpinionVersionTranslation,
} from '../../ddl/opinion/translation/FactorOpinionVersionTranslation';
import {
	FactorOpinionVersion,
} from '../../ddl/opinion/FactorOpinionVersion';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorOpinionVersionESelect
    extends IEntitySelectProperties, FactorOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevisionOpinion?: PollRevisionOpinionESelect;
	factor?: FactorESelect;
	parent?: FactorOpinionVersionESelect;
	children?: FactorOpinionVersionESelect;
	translations?: FactorOpinionVersionTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorOpinionVersionEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorOpinionVersionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
	factor?: FactorEOptionalId;
	parent?: FactorOpinionVersionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorOpinionVersionGraph
	extends FactorOpinionVersionEOptionalId, IEntityCascadeGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	pollRevisionOpinion?: PollRevisionOpinionGraph;
	factor?: FactorGraph;
	parent?: FactorOpinionVersionGraph;
	children?: FactorOpinionVersionGraph[];
	translations?: FactorOpinionVersionTranslationGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorOpinionVersionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_REVISION_OPINION_ID?: number | IQNumberField;
	FACTOR_ID?: number | IQNumberField;
	PARENT_FACTOR_OPINION_VERSION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorOpinionVersionECreateProperties
extends Partial<FactorOpinionVersionEId>, FactorOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorOpinionVersionECreateColumns
extends FactorOpinionVersionEId, FactorOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorOpinionVersion extends IQEntity<FactorOpinionVersion>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevisionOpinion: QPollRevisionOpinionQRelation;
	factor: QFactorQRelation;
	parent: QFactorOpinionVersionQRelation;
	children: IQOneToManyRelation<FactorOpinionVersion, QFactorOpinionVersion>;
	translations: IQOneToManyRelation<FactorOpinionVersionTranslation, QFactorOpinionVersionTranslation>;

}


// Entity Id Interface
export interface QFactorOpinionVersionQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorOpinionVersionQRelation
	extends IQRelation<FactorOpinionVersion, QFactorOpinionVersion>, QFactorOpinionVersionQId {
}

