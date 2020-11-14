import {
	DB_FACADE,
	EntityIdData
}                         from '@airport/air-control'
import {DI}               from '@airport/di'
import {
	DatabaseFacade,
	ITransaction
}                         from '@airport/tower'
import {IVotecubeContext} from './VotecubeContext'

export class VotecubeOperationManager
	extends DatabaseFacade {
	protected async performCreate<E, EntityCascadeGraph>(
		entity: E,
		createdEntityMap: { [entityId: string]: any }[][],
		transaction: ITransaction,
		ctx: IVotecubeContext<E, EntityCascadeGraph>,
		idData?: EntityIdData,
	): Promise<number> {
		(entity as any).userAccount = ctx.userAccount;
		(entity as any).createdBy = ctx.startedAt
		return await this.performCreate(entity, createdEntityMap,
			transaction, ctx, idData)
	}

	protected async performBulkCreate<E, EntityCascadeGraph>(
		entities: E[],
		createdEntityMap: { [entityId: string]: any }[][],
		transaction: ITransaction,
		ctx: IVotecubeContext<E, EntityCascadeGraph>,
		ensureGeneratedValues: boolean = true // For internal use only
	): Promise<number> {
		entities.forEach(entity => {
			(entity as any).userAccount = ctx.userAccount;
			(entity as any).createdBy = ctx.startedAt
		})
		return await super.performBulkCreate(entities, createdEntityMap,
			transaction, ctx, ensureGeneratedValues)
	}

	protected async performUpdate<E, EntityCascadeGraph>(
		entity: E,
		updatedEntityMap: { [entityId: string]: any } [][],
		transaction: ITransaction,
		ctx: IVotecubeContext<E, EntityCascadeGraph>,
		originalValue?: E,
	): Promise<number> {
		(entity as any).userAccount = ctx.userAccount;
		(entity as any).updatedBy = ctx.startedAt
		return await super.performUpdate(entity, updatedEntityMap,
			transaction, ctx, originalValue)
	}

}

DI.set(DB_FACADE, VotecubeOperationManager)