import { Mode } from './Mode';
export const MODE_CREATE = 0x00;
export const MODE_REFERENCE = 0x01;
export const MODE_RECORD = 0x02;
export class ModelSerializer {
    constructor(entityType) {
        this.entityType = entityType;
        this.lastTempId = 0;
    }
    async serialize(model, out, tempRecordIds) {
        if (!model) {
            out.nil();
            return;
        }
        const id = model.id;
        if (id) {
            out.byte(Mode.REFERENCE);
            out.num(id);
        }
        else {
            const tempId = --this.lastTempId;
            out.byte(Mode.RECORD);
            tempRecordIds.push({
                tempId: --this.lastTempId,
                type: this.entityType,
            });
            this.serializeRecord(model, out, tempRecordIds);
        }
    }
    async serializeArray(models, out, tempRecordIds) {
        out.num(models.length);
        for (const model of models) {
            await this.serialize(model, out, tempRecordIds);
        }
    }
}
//# sourceMappingURL=ModelSerializer.js.map