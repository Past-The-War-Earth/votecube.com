"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../tokens");
const ModelSerializer_1 = require("./core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class FactorSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.DIM);
    }
    async serializeRecord(model, out, tempRecordIds) {
        // out.num(model.color.id)
        // out.str(model.description)
        out.str(model.name);
        await this.serialize(model.parent, out, tempRecordIds);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
exports.FactorSerializer = FactorSerializer;
di_1.DI.set(tokens_1.AJAX_Z_FACTOR, FactorSerializer);
//# sourceMappingURL=Factor.js.map