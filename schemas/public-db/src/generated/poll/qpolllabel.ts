import {
	IQEntityInternal,
	IEntityIdProperties,
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
	IImmutableRepoRow,
	ImmutableRepoRowEId,
	ImmutableRepoRowEUpdateColumns,
	ImmutableRepoRowEUpdateProperties,
	ImmutableRepoRowESelect,
	QImmutableRepoRowQId,
	QImmutableRepoRowQRelation,
	QImmutableRepoRow,
} from '@airport/holding-pattern';
import {
	ILabel,
	LabelEId,
	LabelEOptionalId,
	LabelEUpdateProperties,
	LabelESelect,
	QLabel,
	QLabelQId,
	QLabelQRelation,
} from './qlabel';
import {
	IPoll,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from './qpoll';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollLabel extends IImmutableRepoRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	pollId?: number;

	// Non-Id Relations
	label?: ILabel;
	poll?: IPoll;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollLabelESelect
    extends ImmutableRepoRowESelect, PollLabelEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	label?: LabelESelect;
	poll?: PollESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollLabelEId
    extends ImmutableRepoRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollLabelEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollLabelEUpdateProperties
	extends ImmutableRepoRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	label?: LabelEOptionalId;
	poll?: PollEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollLabelEUpdateColumns
	extends ImmutableRepoRowEUpdateColumns {
	// Non-Id Columns
	IS_DRAFT?: boolean | IQBooleanField;
	CREATED_AT?: Date | IQDateField;
	POLL_LABEL_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	LABELS_RID?: number | IQNumberField;
	LABELS_AID?: number | IQNumberField;
	LABELS_ARID?: number | IQNumberField;
	POLLS_RID?: number | IQNumberField;
	POLLS_AID?: number | IQNumberField;
	POLLS_ARID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollLabelECreateProperties
extends Partial<PollLabelEId>, PollLabelEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollLabelECreateColumns
extends PollLabelEId, PollLabelEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollLabel extends QImmutableRepoRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	pollId: IQNumberField;

	// Non-Id Relations
	label: QLabelQRelation;
	poll: QPollQRelation;

}


// Entity Id Interface
export interface QPollLabelQId extends QImmutableRepoRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollLabelQRelation
	extends QImmutableRepoRowQRelation<QPollLabel>, QPollLabelQId {
}

