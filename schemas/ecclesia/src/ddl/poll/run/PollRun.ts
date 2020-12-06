import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {
	PollRun_EndDate,
	PollRun_Id,
	PollRun_StartDate
}                          from '../../../types/poll/run/PollRun'
import {ImmutableActorRow} from '../../infrastructure/row/ImmutableActorRow'
import {PollRevision}      from '../revision/PollRevision'
import {PollRunContinent}  from './location/PollRunContinent'
import {PollRunCountry}    from './location/PollRunCountry'
import {PollRunCounty}     from './location/PollRunCounty'
import {PollRunState}      from './location/PollRunState'
import {PollRunTown}       from './location/PollRunTown'

@Entity()
@Table({name: 'POLL_RUNS'})
export class PollRun
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_RUN_ID'})
	id: PollRun_Id

	@Column({name: 'END_DATE', nullable: false})
	endDate: PollRun_EndDate

	@Column({name: 'START_DATE', nullable: false})
	startDate: PollRun_StartDate

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@OneToMany({mappedBy: 'createdAtRun'})
	createdAtRevisions: PollRevision[]

	@OneToMany({mappedBy: 'run'})
	pollContinents: PollRunContinent[]

	@OneToMany({mappedBy: 'run'})
	pollCountries: PollRunCountry[]

	@OneToMany({mappedBy: 'run'})
	pollStates: PollRunState[]

	@OneToMany({mappedBy: 'run'})
	pollCounties: PollRunCounty[]

	@OneToMany({mappedBy: 'run'})
	pollTowns: PollRunTown[]

}
