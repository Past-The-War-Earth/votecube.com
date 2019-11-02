export type Id = number;
export type Key = string;

export type ActorRecordId = number;
export type RepositoryActorId = number;
export type RepositoryId = number;

export interface IModel {

	actorRecordId?: ActorRecordId
	id?: Id
	repositoryActorId?: RepositoryActorId
	repositoryId?: RepositoryId

}
