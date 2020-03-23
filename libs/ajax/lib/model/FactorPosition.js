"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../tokens");
const ModelSerializer_1 = require("./core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class FactorPositionSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.DIM_DIR);
    }
    async serializeRecord(model, out, tempRecordIds) {
        const [factorZ, positionZ] = await di_1.DI.get(tokens_1.AJAX_Z_FACTOR, tokens_1.AJAX_Z_POSITION);
        await factorZ.serialize(model.factor, out, tempRecordIds);
        await positionZ.serialize(model.position, out, tempRecordIds);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
exports.FactorPositionSerializer = FactorPositionSerializer;
di_1.DI.set(tokens_1.AJAX_Z_FACTOR_POSITION, FactorPositionSerializer);
//# sourceMappingURL=FactorPosition.js.map