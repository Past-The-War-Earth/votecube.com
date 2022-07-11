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
import { QIdeaTopic } from './idea/qideatopic';
import { QLabel } from './qlabel';
import { QPosition } from './factor/qposition';
import { QReason } from './idea/qreason';
import { QSituationIdea } from './idea/qsituationidea';
import {
  Agreement,
  AgreementReason,
  Factor,
  Idea,
  IdeaLabel,
  IdeaRating,
  IdeaTopic,
  Label,
  Position,
  Reason,
  SituationIdea
} from '../ddl/ddl';

export interface LocalQApplication extends QApplication {

    db: DbApplication;

  Agreement: QAgreement;
	AgreementReason: QAgreementReason;
	Factor: QFactor;
	Idea: QIdea;
	IdeaLabel: QIdeaLabel;
	IdeaRating: QIdeaRating;
	IdeaTopic: QIdeaTopic;
	Label: QLabel;
	Position: QPosition;
	Reason: QReason;
	SituationIdea: QSituationIdea;

}

const __constructors__ = {
	Agreement: Agreement,
	AgreementReason: AgreementReason,
	Factor: Factor,
	Idea: Idea,
	IdeaLabel: IdeaLabel,
	IdeaRating: IdeaRating,
	IdeaTopic: IdeaTopic,
	Label: Label,
	Position: Position,
	Reason: Reason,
	SituationIdea: SituationIdea
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
