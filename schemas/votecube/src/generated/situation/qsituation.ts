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
	OutcomeGraph,
	OutcomeEId,
	OutcomeEOptionalId,
	OutcomeEUpdateProperties,
	OutcomeESelect,
	QOutcome,
	QOutcomeQId,
	QOutcomeQRelation,
} from './qoutcome';
import {
	Outcome,
} from '../../ddl/situation/Outcome';
import {
	SituationLabelGraph,
	SituationLabelEId,
	SituationLabelEOptionalId,
	SituationLabelEUpdateProperties,
	SituationLabelESelect,
	QSituationLabel,
	QSituationLabelQId,
	QSituationLabelQRelation,
} from './qsituationlabel';
import {
	SituationLabel,
} from '../../ddl/situation/SituationLabel';
import {
	SituationFactorPositionGraph,
	SituationFactorPositionEId,
	SituationFactorPositionEOptionalId,
	SituationFactorPositionEUpdateProperties,
	SituationFactorPositionESelect,
	QSituationFactorPosition,
	QSituationFactorPositionQId,
	QSituationFactorPositionQRelation,
} from './qsituationfactorposition';
import {
	SituationFactorPosition,
} from '../../ddl/situation/SituationFactorPosition';
import {
	SolutionGraph,
	SolutionEId,
	SolutionEOptionalId,
	SolutionEUpdateProperties,
	SolutionESelect,
	QSolution,
	QSolutionQId,
	QSolutionQRelation,
} from '../solution/qsolution';
import {
	Solution,
} from '../../ddl/solution/Solution';
import {
	Situation,
} from '../../ddl/situation/Situation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationESelect
    extends RepositoryEntityESelect, SituationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parent?: SituationESelect;
	outcomeA?: OutcomeESelect;
	outcomeB?: OutcomeESelect;
	children?: SituationESelect;
	situationLabels?: SituationLabelESelect;
	situationFactorPositions?: SituationFactorPositionESelect;
	solutions?: SolutionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	parent?: SituationEOptionalId;
	outcomeA?: OutcomeEOptionalId;
	outcomeB?: OutcomeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationGraph
	extends SituationEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;

	// Relations
	parent?: SituationGraph;
	outcomeA?: OutcomeGraph;
	outcomeB?: OutcomeGraph;
	children?: SituationGraph[];
	situationLabels?: SituationLabelGraph[];
	situationFactorPositions?: SituationFactorPositionGraph[];
	solutions?: SolutionGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	NAME?: string | IQStringField;
	SITUATIONS_RID_1?: number | IQNumberField;
	SITUATIONS_AID_1?: number | IQNumberField;
	SITUATIONS_ARID_1?: number | IQNumberField;
	OUTCOMES_RID_1?: number | IQNumberField;
	OUTCOMES_AID_1?: number | IQNumberField;
	OUTCOMES_ARID_1?: number | IQNumberField;
	OUTCOMES_RID_2?: number | IQNumberField;
	OUTCOMES_AID_2?: number | IQNumberField;
	OUTCOMES_ARID_2?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationECreateProperties
extends Partial<SituationEId>, SituationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationECreateColumns
extends SituationEId, SituationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituation extends QRepositoryEntity<Situation>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	parent: QSituationQRelation;
	outcomeA: QOutcomeQRelation;
	outcomeB: QOutcomeQRelation;
	children: IQOneToManyRelation<Situation, QSituation>;
	situationLabels: IQOneToManyRelation<SituationLabel, QSituationLabel>;
	situationFactorPositions: IQOneToManyRelation<SituationFactorPosition, QSituationFactorPosition>;
	solutions: IQOneToManyRelation<Solution, QSolution>;

}


// Entity Id Interface
export interface QSituationQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationQRelation
	extends QRepositoryEntityQRelation<Situation, QSituation>, QSituationQId {
}

