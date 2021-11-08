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
} from '@airport/air-control';
import {
	RepositoryEntityGraph,
	RepositoryEntityEId,
	RepositoryEntityEUpdateColumns,
	RepositoryEntityEUpdateProperties,
	RepositoryEntityESelect,
	QRepositoryEntityQId,
	QRepositoryEntityQRelation,
	QRepositoryEntity,
} from '@airport/holding-pattern';
import {
	SituationGraph,
	SituationEId,
	SituationEOptionalId,
	SituationEUpdateProperties,
	SituationESelect,
	QSituation,
	QSituationQId,
	QSituationQRelation,
} from './qsituation';
import {
	Situation,
} from '../../ddl/situation/Situation';
import {
	LabelGraph,
	LabelEId,
	LabelEOptionalId,
	LabelEUpdateProperties,
	LabelESelect,
	QLabel,
	QLabelQId,
	QLabelQRelation,
} from '../qlabel';
import {
	Label,
} from '../../ddl/Label';
import {
	SituationLabel,
} from '../../ddl/situation/SituationLabel';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationLabelESelect
    extends RepositoryEntityESelect, SituationLabelEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situation?: SituationESelect;
	label?: LabelESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationLabelEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationLabelEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationLabelEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	situation?: SituationEOptionalId;
	label?: LabelEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationLabelGraph
	extends SituationLabelEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	situation?: SituationGraph;
	label?: LabelGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationLabelEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	SITUATIONS_RID_1?: number | IQNumberField;
	SITUATIONS_AID_1?: number | IQNumberField;
	SITUATIONS_ARID_1?: number | IQNumberField;
	LABELS_RID_1?: number | IQNumberField;
	LABELS_AID_1?: number | IQNumberField;
	LABELS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationLabelECreateProperties
extends Partial<SituationLabelEId>, SituationLabelEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationLabelECreateColumns
extends SituationLabelEId, SituationLabelEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationLabel extends QRepositoryEntity<SituationLabel>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	situation: QSituationQRelation;
	label: QLabelQRelation;

}


// Entity Id Interface
export interface QSituationLabelQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationLabelQRelation
	extends QRepositoryEntityQRelation<SituationLabel, QSituationLabel>, QSituationLabelQId {
}

