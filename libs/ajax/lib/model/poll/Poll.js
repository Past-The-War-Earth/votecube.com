"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const model_1 = require("@votecube/model");
const tokens_1 = require("../../tokens");
const ModelSerializer_1 = require("../core/ModelSerializer");
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
class PollSerializer extends ModelSerializer_1.ModelSerializer {
    constructor() {
        super(model_1.EntityType.PLL);
    }
    async init() {
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.date(model.endDate);
        out.str(model.name);
        const [pollContinentZ, pollCountryZ, pollCountyZ, pollFactorPositionZ, pollLabelZ, pollStateZ, pollTownZ] = await di_1.DI.get(tokens_1.AJAX_Z_POLL_CONTINENT, tokens_1.AJAX_Z_POLL_COUNTRY, tokens_1.AJAX_Z_POLL_COUNTY, tokens_1.AJAX_Z_POLL_FACTOR_POSITION, tokens_1.AJAX_Z_POLL_LABEL, tokens_1.AJAX_Z_POLL_STATE, tokens_1.AJAX_Z_POLL_TOWN);
        await pollContinentZ.serializeArray(model.pollsContinents, out, tempRecordIds);
        await pollCountryZ.serializeArray(model.pollsCountries, out, tempRecordIds);
        await pollStateZ.serializeArray(model.pollsStates, out, tempRecordIds);
        // await this.pollCountyZ.serializeArray(model.pollsCounties, out, tempRecordIds)
        await pollTownZ.serializeArray(model.pollsTowns, out, tempRecordIds);
        await pollFactorPositionZ.serializeArray(model.pollsFactorPositions, out, tempRecordIds);
        await pollLabelZ.serializeArray(model.pollsLabels, out, tempRecordIds);
        out.date(model.startDate);
        out.num(model.theme.id);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
exports.PollSerializer = PollSerializer;
di_1.DI.set(tokens_1.AJAX_Z_POLL, PollSerializer);
//# sourceMappingURL=Poll.js.map