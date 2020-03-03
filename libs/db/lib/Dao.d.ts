export interface IDaoTest<Entity> {
    save(entity: Entity): any;
}
export declare abstract class Dao<Entity> implements IDaoTest<Entity> {
    abstract save(entity: Entity): any;
}
