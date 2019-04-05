export interface IDaoTest<Entity> {

	save(entity: Entity)

}

export abstract class Dao<Entity>
	implements IDaoTest<Entity> {

	abstract save(entity: Entity)

}
