"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../../tokens");
const ModelSerializer_1 = require("../core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class TownSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.TWN);
    }
    async serializeRecord(model, out, tempRecordIds) {
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
exports.TownSerializer = TownSerializer;
di_1.DI.set(tokens_1.AJAX_Z_TOWN, TownSerializer);
//# sourceMappingURL=Town.js.map