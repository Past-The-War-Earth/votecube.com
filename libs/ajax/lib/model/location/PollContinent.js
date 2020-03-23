"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../../tokens");
const ModelSerializer_1 = require("../core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class PollContinentSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.PLL_CNTNNT);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.num(model.continent.id);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
exports.PollContinentSerializer = PollContinentSerializer;
di_1.DI.set(tokens_1.AJAX_Z_POLL_CONTINENT, PollContinentSerializer);
//# sourceMappingURL=PollContinent.js.map