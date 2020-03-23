"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mode_1 = require("./Mode");
exports.MODE_CREATE = 0x00;
exports.MODE_REFERENCE = 0x01;
exports.MODE_RECORD = 0x02;
class ModelSerializer {
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
            out.byte(Mode_1.Mode.REFERENCE);
            out.num(id);
        }
        else {
            const tempId = --this.lastTempId;
            out.byte(Mode_1.Mode.RECORD);
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
exports.ModelSerializer = ModelSerializer;
//# sourceMappingURL=ModelSerializer.js.map