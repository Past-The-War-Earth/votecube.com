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
} from '../ddl/idea/reason';
import {
	ReasonVDescriptor,
} from './idea/vreason';
import {
	SituationIdea,
} from '../ddl/idea/situationidea';
import {
	SituationIdeaVDescriptor,
} from './idea/vsituationidea';
import {
	IDvo,
	Dvo,
} from '@airport/airbridge-validate';
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
  extends IDvo<Agreement, AgreementVDescriptor> {
}

export class BaseAgreementDvo
  extends SQDIDvo<Agreement, AgreementVDescriptor>
	implements IBaseAgreementDvo {

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseAgreementReasonDvo
  extends IDvo<AgreementReason, AgreementReasonVDescriptor> {
}

export class BaseAgreementReasonDvo
  extends SQDIDvo<AgreementReason, AgreementReasonVDescriptor>
	implements IBaseAgreementReasonDvo {

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseFactorDvo
  extends IDvo<Factor, FactorVDescriptor> {
}

export class BaseFactorDvo
  extends SQDIDvo<Factor, FactorVDescriptor>
	implements IBaseFactorDvo {

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseIdeaDvo
  extends IDvo<Idea, IdeaVDescriptor> {
}

export class BaseIdeaDvo
  extends SQDIDvo<Idea, IdeaVDescriptor>
	implements IBaseIdeaDvo {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBaseIdeaLabelDvo
  extends IDvo<IdeaLabel, IdeaLabelVDescriptor> {
}

export class BaseIdeaLabelDvo
  extends SQDIDvo<IdeaLabel, IdeaLabelVDescriptor>
	implements IBaseIdeaLabelDvo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseIdeaRatingDvo
  extends IDvo<IdeaRating, IdeaRatingVDescriptor> {
}

export class BaseIdeaRatingDvo
  extends SQDIDvo<IdeaRating, IdeaRatingVDescriptor>
	implements IBaseIdeaRatingDvo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseIdeaTopicDvo
  extends IDvo<IdeaTopic, IdeaTopicVDescriptor> {
}

export class BaseIdeaTopicDvo
  extends SQDIDvo<IdeaTopic, IdeaTopicVDescriptor>
	implements IBaseIdeaTopicDvo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseLabelDvo
  extends IDvo<Label, LabelVDescriptor> {
}

export class BaseLabelDvo
  extends SQDIDvo<Label, LabelVDescriptor>
	implements IBaseLabelDvo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBasePositionDvo
  extends IDvo<Position, PositionVDescriptor> {
}

export class BasePositionDvo
  extends SQDIDvo<Position, PositionVDescriptor>
	implements IBasePositionDvo {

	static diSet(): boolean {
		return duoDiSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseReasonDvo
  extends IDvo<Reason, ReasonVDescriptor> {
}

export class BaseReasonDvo
  extends SQDIDvo<Reason, ReasonVDescriptor>
	implements IBaseReasonDvo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationIdeaDvo
  extends IDvo<SituationIdea, SituationIdeaVDescriptor> {
}

export class BaseSituationIdeaDvo
  extends SQDIDvo<SituationIdea, SituationIdeaVDescriptor>
	implements IBaseSituationIdeaDvo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}
