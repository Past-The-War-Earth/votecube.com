"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../../tokens");
const FactorsCollection_1 = require("./FactorsCollection");
const OutcomesCollection_1 = require("./OutcomesCollection");
const PollDraftsCollection_1 = require("./PollDraftsCollection");
const PositionsCollection_1 = require("./PositionsCollection");
const UsersCollection_1 = require("./UsersCollection");
class Schema {
    constructor() {
        this.db = window.db;
    }
    get factors() {
        return new FactorsCollection_1.FactorsCollection(this);
    }
    get outcomes() {
        return new OutcomesCollection_1.OutcomesCollection(this);
    }
    get pollDrafts() {
        return new PollDraftsCollection_1.PollDraftsCollection(this);
    }
    get positions() {
        return new PositionsCollection_1.PositionsCollection(this);
    }
    get users() {
        return new UsersCollection_1.UsersCollection(this);
    }
}
exports.Schema = Schema;
di_1.DI.set(tokens_1.SCHEMA, Schema);
//# sourceMappingURL=Schema.js.map