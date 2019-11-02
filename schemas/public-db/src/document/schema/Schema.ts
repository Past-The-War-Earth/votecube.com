import {IVCFirestore} from './DocRef'
import {
	FactorsCollection,
	IFactorsCollection
}                     from './FactorsCollection'
import {
	IOutcomesCollection,
	OutcomesCollection
}                     from './OutcomesCollection'
import {
	IPollDraftsCollection,
	PollDraftsCollection
}                     from './PollDraftsCollection'
import {
	IPositionsCollection,
	PositionsCollection
}                     from './PositionsCollection'
import {
	IUsersCollection,
	UsersCollection
}                     from './UsersCollection'

export interface IVoteCubeSchema {

	db: IVCFirestore
	factors: IFactorsCollection
	outcomes: IOutcomesCollection
	pollDrafts: IPollDraftsCollection
	positions: IPositionsCollection
	users: IUsersCollection

}

export class Schema
	implements IVoteCubeSchema {

	constructor(
		public db: IVCFirestore
	) {
	}

	get factors(): IFactorsCollection {
		return new FactorsCollection(this)
	}

	get outcomes(): IOutcomesCollection {
		return new OutcomesCollection(this)
	}

	get pollDrafts(): IPollDraftsCollection {
		return new PollDraftsCollection(this)
	}

	get positions(): IPositionsCollection {
		return new PositionsCollection(this)
	}

	get users(): IUsersCollection {
		return new UsersCollection(this)
	}

}


