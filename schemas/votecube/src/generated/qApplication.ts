import {
    airApi,
    QApplication
} from '@airport/aviation-communication'
import {
    DbApplication,
    ApplicationEntity_LocalId,
}                      from '@airport/ground-control';
import { QAgreement } from './agreement/qagreement';
import { QAgreementReason } from './agreement/qagreementreason';
import { QFactor } from './factor/qfactor';
import { QIdea } from './idea/qidea';
import { QIdeaLabel } from './idea/qidealabel';
import { QIdeaRating } from './idea/qidearating';
import { QIdeaReason } from './reason/qideareason';
import { QIdeaTopic } from './idea/qideatopic';
import { QLabel } from './qlabel';
import { QPosition } from './factor/qposition';
import { QReason } from './reason/qreason';
import { QReasonCubeDisplay } from './reason/qreasoncubedisplay';
import { QSituationIdea } from './idea/qsituationidea';
import { QSituationIdeaReason } from './reason/qsituationideareason';
import {
  Agreement,
  AgreementReason,
  Factor,
  Idea,
  IdeaLabel,
  IdeaRating,
  IdeaReason,
  IdeaTopic,
  Label,
  Position,
  Reason,
  ReasonCubeDisplay,
  SituationIdea,
  SituationIdeaReason
} from '../ddl/ddl';

export interface LocalQApplication extends QApplication {

    db: DbApplication;

  Agreement: QAgreement;
	AgreementReason: QAgreementReason;
	Factor: QFactor;
	Idea: QIdea;
	IdeaLabel: QIdeaLabel;
	IdeaRating: QIdeaRating;
	IdeaReason: QIdeaReason;
	IdeaTopic: QIdeaTopic;
	Label: QLabel;
	Position: QPosition;
	Reason: QReason;
	ReasonCubeDisplay: QReasonCubeDisplay;
	SituationIdea: QSituationIdea;
	SituationIdeaReason: QSituationIdeaReason;

}

const __constructors__ = {
	Agreement: Agreement,
	AgreementReason: AgreementReason,
	Factor: Factor,
	Idea: Idea,
	IdeaLabel: IdeaLabel,
	IdeaRating: IdeaRating,
	IdeaReason: IdeaReason,
	IdeaTopic: IdeaTopic,
	Label: Label,
	Position: Position,
	Reason: Reason,
	ReasonCubeDisplay: ReasonCubeDisplay,
	SituationIdea: SituationIdea,
	SituationIdeaReason: SituationIdeaReason
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'localhost:8000',
  name: '@votecube/votecube'
};
export const Q: LocalQApplication = Q_APPLICATION

export function diSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.ddS(Q.__dbApplication__, dbEntityId)
}

airApi.setQApplication(Q_APPLICATION)
