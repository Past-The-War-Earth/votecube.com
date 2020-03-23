"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../../tokens");
const ModelSerializer_1 = require("../core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class PollTownSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.PLL_TWN);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.num(model.town.id);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
exports.PollTownSerializer = PollTownSerializer;
di_1.DI.set(tokens_1.AJAX_Z_POLL_TOWN, PollTownSerializer);
//# sourceMappingURL=PollTown.js.map