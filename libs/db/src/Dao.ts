export interface IDao<Entity> {

	save(entity: Entity)

}

export abstract class Dao<Entity>
	implements IDao<Entity> {

	abstract save(entity: Entity)

}
