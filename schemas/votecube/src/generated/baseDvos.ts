/* eslint-disable */
import {
	Agreement,
} from '../ddl/agreement/agreement';
import {
	AgreementVDescriptor,
} from './agreement/vagreement';
import {
	AgreementReason,
} from '../ddl/agreement/agreementreason';
import {
	AgreementReasonVDescriptor,
} from './agreement/vagreementreason';
import {
	Factor,
} from '../ddl/factor/factor';
import {
	FactorVDescriptor,
} from './factor/vfactor';
import {
	Idea,
} from '../ddl/idea/idea';
import {
	IdeaVDescriptor,
} from './idea/videa';
import {
	IdeaLabel,
} from '../ddl/idea/idealabel';
import {
	IdeaLabelVDescriptor,
} from './idea/videalabel';
import {
	IdeaRating,
} from '../ddl/idea/idearating';
import {
	IdeaRatingVDescriptor,
} from './idea/videarating';
import {
	IdeaReason,
} from '../ddl/reason/ideareason';
import {
	IdeaReasonVDescriptor,
} from './reason/videareason';
import {
	IdeaTopic,
} from '../ddl/idea/ideatopic';
import {
	IdeaTopicVDescriptor,
} from './idea/videatopic';
import {
	Label,
} from '../ddl/label';
import {
	LabelVDescriptor,
} from './vlabel';
import {
	Position,
} from '../ddl/factor/position';
import {
	PositionVDescriptor,
} from './factor/vposition';
import {
	Reason,
} from '../ddl/reason/reason';
import {
	ReasonVDescriptor,
} from './reason/vreason';
import {
	ReasonCubeDisplay,
} from '../ddl/reason/reasoncubedisplay';
import {
	ReasonCubeDisplayVDescriptor,
} from './reason/vreasoncubedisplay';
import {
	SituationIdea,
} from '../ddl/idea/situationidea';
import {
	SituationIdeaVDescriptor,
} from './idea/vsituationidea';
import {
	SituationIdeaReason,
} from '../ddl/reason/situationideareason';
import {
	SituationIdeaReasonVDescriptor,
} from './reason/vsituationideareason';
import {
	IDvo,
	Dvo,
} from '@airbridge/validate';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Dvo
export class SQDIDvo<Entity, EntityVDescriptor>
	extends Dvo<Entity, EntityVDescriptor> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseAgreementDvo
  extends IDvo<Agreement, AgreementVDescriptor<Agreement>> {
}

export class BaseAgreementDvo
  extends SQDIDvo<Agreement, AgreementVDescriptor<Agreement>>
	implements IBaseAgreementDvo {

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseAgreementReasonDvo
  extends IDvo<AgreementReason, AgreementReasonVDescriptor<AgreementReason>> {
}

export class BaseAgreementReasonDvo
  extends SQDIDvo<AgreementReason, AgreementReasonVDescriptor<AgreementReason>>
	implements IBaseAgreementReasonDvo {

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseFactorDvo
  extends IDvo<Factor, FactorVDescriptor<Factor>> {
}

export class BaseFactorDvo
  extends SQDIDvo<Factor, FactorVDescriptor<Factor>>
	implements IBaseFactorDvo {

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseIdeaDvo
  extends IDvo<Idea, IdeaVDescriptor<Idea>> {
}

export class BaseIdeaDvo
  extends SQDIDvo<Idea, IdeaVDescriptor<Idea>>
	implements IBaseIdeaDvo {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBaseIdeaLabelDvo
  extends IDvo<IdeaLabel, IdeaLabelVDescriptor<IdeaLabel>> {
}

export class BaseIdeaLabelDvo
  extends SQDIDvo<IdeaLabel, IdeaLabelVDescriptor<IdeaLabel>>
	implements IBaseIdeaLabelDvo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseIdeaRatingDvo
  extends IDvo<IdeaRating, IdeaRatingVDescriptor<IdeaRating>> {
}

export class BaseIdeaRatingDvo
  extends SQDIDvo<IdeaRating, IdeaRatingVDescriptor<IdeaRating>>
	implements IBaseIdeaRatingDvo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseIdeaReasonDvo
  extends IDvo<IdeaReason, IdeaReasonVDescriptor<IdeaReason>> {
}

export class BaseIdeaReasonDvo
  extends SQDIDvo<IdeaReason, IdeaReasonVDescriptor<IdeaReason>>
	implements IBaseIdeaReasonDvo {

	static diSet(): boolean {
		return duoDiSet(12)
	}
	
	constructor() {
		super(12)
	}
}


export interface IBaseIdeaTopicDvo
  extends IDvo<IdeaTopic, IdeaTopicVDescriptor<IdeaTopic>> {
}

export class BaseIdeaTopicDvo
  extends SQDIDvo<IdeaTopic, IdeaTopicVDescriptor<IdeaTopic>>
	implements IBaseIdeaTopicDvo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseLabelDvo
  extends IDvo<Label, LabelVDescriptor<Label>> {
}

export class BaseLabelDvo
  extends SQDIDvo<Label, LabelVDescriptor<Label>>
	implements IBaseLabelDvo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBasePositionDvo
  extends IDvo<Position, PositionVDescriptor<Position>> {
}

export class BasePositionDvo
  extends SQDIDvo<Position, PositionVDescriptor<Position>>
	implements IBasePositionDvo {

	static diSet(): boolean {
		return duoDiSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseReasonDvo
  extends IDvo<Reason, ReasonVDescriptor<Reason>> {
}

export class BaseReasonDvo
  extends SQDIDvo<Reason, ReasonVDescriptor<Reason>>
	implements IBaseReasonDvo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseReasonCubeDisplayDvo
  extends IDvo<ReasonCubeDisplay, ReasonCubeDisplayVDescriptor<ReasonCubeDisplay>> {
}

export class BaseReasonCubeDisplayDvo
  extends SQDIDvo<ReasonCubeDisplay, ReasonCubeDisplayVDescriptor<ReasonCubeDisplay>>
	implements IBaseReasonCubeDisplayDvo {

	static diSet(): boolean {
		return duoDiSet(11)
	}
	
	constructor() {
		super(11)
	}
}


export interface IBaseSituationIdeaDvo
  extends IDvo<SituationIdea, SituationIdeaVDescriptor<SituationIdea>> {
}

export class BaseSituationIdeaDvo
  extends SQDIDvo<SituationIdea, SituationIdeaVDescriptor<SituationIdea>>
	implements IBaseSituationIdeaDvo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseSituationIdeaReasonDvo
  extends IDvo<SituationIdeaReason, SituationIdeaReasonVDescriptor<SituationIdeaReason>> {
}

export class BaseSituationIdeaReasonDvo
  extends SQDIDvo<SituationIdeaReason, SituationIdeaReasonVDescriptor<SituationIdeaReason>>
	implements IBaseSituationIdeaReasonDvo {

	static diSet(): boolean {
		return duoDiSet(13)
	}
	
	constructor() {
		super(13)
	}
}
