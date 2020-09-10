"use strict";
/*
export async function init() {
    await DI.get(AIR_DB)
    const dbManager = await DI.get(DATABASE_MANAGER)
    await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const elasticlunr = require("elasticlunr");
const tokens_1 = require("../tokens");
class DbUtils {
    get addedProps() {
        return [
            'createdAt',
            'fts',
            'key',
            'marks',
            'userId'
        ];
    }
    get excludedProps() {
        return [
            'fts',
            'marks'
        ];
    }
    get subPollProps() {
        return [
            ...this.addedProps,
            ...this.versionedProps,
            'pollId',
            'rootRevisionId'
        ];
    }
    get versionedProps() {
        return [
            'depth',
            'parent',
            'parentKey',
            'path'
        ];
    }
    async getElIndex( //
    ) {
        if (!this.theElIndex) {
            const elunr = await Promise.resolve().then(() => require('elasticlunr'));
            this.theElIndex = elunr(function () {
                this.addField('test');
                this.setRef('id');
            });
        }
        return this.theElIndex;
    }
    calculateWaterMarks(dbObject) {
        const marks = {
            change: {
                high: 0,
                low: Number.MIN_SAFE_INTEGER
            },
            same: {
                high: 0,
                low: Number.MAX_SAFE_INTEGER
            }
        };
        dbObject.marks = marks;
        for (const key in dbObject) {
            if (this.subPollProps.indexOf(key) > -1) {
                continue;
            }
            const childObject = dbObject[key];
            if (this.isDataObject(childObject)) {
                if (childObject.d === 0) {
                    // Nothing to do, this is a brand new object
                }
                else if (childObject.d > 0) {
                    marks.same.high = this.setHighSame(marks.same.high, childObject.d);
                    marks.same.low = this.setLowSame(marks.same.low, childObject.d);
                }
                else {
                    marks.change.high = this.setHighChange(marks.change.high, childObject.d);
                    marks.change.low = this.setLowChange(marks.change.low, childObject.d);
                }
            }
            else {
                this.calculateWaterMarks(childObject);
                marks.same.high = this.setHighSame(marks.same.high, childObject.marks.same.high);
                marks.same.low = this.setLowSame(marks.same.low, childObject.marks.same.low);
                marks.change.high = this.setHighChange(marks.change.high, childObject.marks.change.high);
                marks.change.low = this.setLowChange(marks.change.low, childObject.marks.change.low);
            }
        }
        if (marks.change.low === Number.MIN_SAFE_INTEGER) {
            marks.change.low = 0;
        }
        if (marks.same.low === Number.MAX_SAFE_INTEGER) {
            marks.same.low = 0;
        }
    }
    copy(object, skipKeys = ['marks']) {
        let theCopy;
        if (object instanceof Object) {
            if (object instanceof Array) {
                theCopy = object.map(arrayEntry => this.copy(arrayEntry, skipKeys));
            }
            else {
                theCopy = {};
                for (const propertyName in object) {
                    if (skipKeys.indexOf(propertyName) > -1) {
                        continue;
                    }
                    theCopy[propertyName] = this.copy(object[propertyName], skipKeys);
                }
            }
        }
        else {
            theCopy = object;
        }
        return theCopy;
    }
    async getFtsProps(object, excludeFtsProperties = DbUtils.EXCLUDE_FTS_PROPS) {
        const fts = {};
        await this.doGetFtsProps(object, excludeFtsProperties, fts);
        return fts;
    }
    async doGetFtsProps(object, excludeFtsProperties, fts) {
        if (object instanceof Object) {
            for (const propertyName in object) {
                if (excludeFtsProperties.indexOf(propertyName) === -1) {
                    await this.doGetFtsProps(object[propertyName], excludeFtsProperties, fts);
                }
            }
        }
        else {
            if (typeof object === 'string'
                && excludeFtsProperties.indexOf(object) === -1) {
                const elIndex = await this.getElIndex();
                const propTokens = elIndex.pipeline.run(elasticlunr.tokenizer(object));
                for (const token of propTokens) {
                    fts[token] = true;
                }
            }
        }
    }
    setHighChange(aggregate, data) {
        return data < aggregate ? data : aggregate;
    }
    setLowChange(aggregate, data) {
        if (data < 0) {
            return data > aggregate ? data : aggregate;
        }
        return aggregate;
    }
    setHighSame(aggregate, data) {
        return data > aggregate ? data : aggregate;
    }
    setLowSame(aggregate, data) {
        if (data > 0) {
            return data < aggregate ? data : aggregate;
        }
        return aggregate;
    }
    isDataObject(object) {
        return object.hasOwnProperty('v');
    }
}
exports.DbUtils = DbUtils;
DbUtils.EXCLUDE_FTS_PROPS = [
    'createdAt', 'fts', 'id', 'rootRevisionId', 'userId', 'x', 'y', 'z'
];
di_1.DI.set(tokens_1.DB_UTILS, DbUtils);
//# sourceMappingURL=DbUtils.js.map