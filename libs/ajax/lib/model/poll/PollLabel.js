"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../../tokens");
const ModelSerializer_1 = require("../core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class PollLabelSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.PLL_LBL);
    }
    async serializeRecord(model, out, tempRecordIds) {
        const labelZ = await di_1.DI.get(tokens_1.AJAX_Z_LABEL);
        await labelZ.serialize(model.label, out, tempRecordIds);
    }
    deserialize(mode, bin) {
        return undefined;
    }
}
exports.PollLabelSerializer = PollLabelSerializer;
di_1.DI.set(tokens_1.AJAX_Z_POLL_LABEL, PollLabelSerializer);
//# sourceMappingURL=PollLabel.js.map