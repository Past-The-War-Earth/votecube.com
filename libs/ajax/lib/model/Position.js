"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../tokens");
const ModelSerializer_1 = require("./core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class PositionSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.DIR);
    }
    async serializeRecord(model, out, tempRecordIds) {
        // out.nil() // emoji
        // out.nil() // design pattern
        out.str(model.name);
        await this.serialize(model.parent, out, tempRecordIds);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
exports.PositionSerializer = PositionSerializer;
di_1.DI.set(tokens_1.AJAX_Z_POSITION, PositionSerializer);
//# sourceMappingURL=Position.js.map