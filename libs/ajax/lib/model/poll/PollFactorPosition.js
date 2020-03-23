"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../../tokens");
const ModelSerializer_1 = require("../core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class PollFactorPositionSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.PLL_DIM_DIR);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.byte(this.getAxisByte(model.axis));
        out.num(model.color.id);
        const factorPositionZ = await di_1.DI.get(tokens_1.AJAX_Z_FACTOR_POSITION);
        await factorPositionZ.serializeRecord(model.factorPosition, out, tempRecordIds);
        out.byte(model.dir === 1 ? 1 : 0);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
    getAxisByte(axis) {
        switch (axis) {
            case 'x':
                return 0;
            case 'y':
                return 1;
            case 'z':
                return 2;
        }
    }
}
exports.PollFactorPositionSerializer = PollFactorPositionSerializer;
di_1.DI.set(tokens_1.AJAX_Z_POLL_FACTOR_POSITION, PollFactorPositionSerializer);
//# sourceMappingURL=PollFactorPosition.js.map