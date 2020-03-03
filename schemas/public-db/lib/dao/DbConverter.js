import { DI } from '@airport/di';
import { DB_CONVERTER } from '../tokens';
export class DbConverter {
    fromDb(dbObject, directProperties, excludedProperties) {
        const uiObject = {};
        if (dbObject.v || dbObject.v === 0) {
            return dbObject.v;
        }
        else {
            for (const propertyName in dbObject) {
                if (excludedProperties.indexOf(propertyName) > -1) {
                    continue;
                }
                else if (directProperties.indexOf(propertyName) > -1) {
                    uiObject[propertyName] = dbObject[propertyName];
                }
                else {
                    uiObject[propertyName] = this.fromDb(dbObject[propertyName], directProperties, excludedProperties);
                }
            }
        }
        return uiObject;
    }
    toDb(uiObject, deltas, originalDbObject, directProperties, create = !originalDbObject) {
        const dbObject = {};
        if (uiObject instanceof Object) {
            for (const propertyName in uiObject) {
                const value = uiObject[propertyName];
                if (directProperties.indexOf(propertyName) > -1) {
                    dbObject[propertyName] = value;
                }
                else {
                    dbObject[propertyName] = this.toDb(value, deltas[propertyName], create ? null : originalDbObject[propertyName], directProperties, create);
                }
            }
        }
        else {
            this.toDbObject(uiObject, deltas, originalDbObject, dbObject, create);
        }
        return dbObject;
    }
    toVersionedDb(uiObject, deltas, originalDbObject, directProperties) {
        const dbObject = this.toDb(uiObject, deltas, originalDbObject, directProperties);
        if (originalDbObject) {
            dbObject.depth = originalDbObject.depth + 1;
            dbObject.path = Object.assign({}, originalDbObject.path, { length: originalDbObject.path.length + 1 });
            dbObject.path[originalDbObject.depth] = {
                createdAt: originalDbObject.createdAt,
                key: originalDbObject.key,
                userKey: originalDbObject.userKey
            };
            dbObject.parent = {
                createdAt: originalDbObject.createdAt,
                depth: originalDbObject.depth,
                key: originalDbObject.key,
                userKey: originalDbObject.userKey
            };
        }
        else {
            dbObject.parent = null;
            dbObject.path = {
                length: 0
            };
            dbObject.depth = 1;
        }
        return dbObject;
    }
    toDbObject(uiValue, uiDelta, originalDbObject, dbObject, create) {
        let d;
        if (create) {
            d = 0;
        }
        else if (uiDelta) {
            if (originalDbObject.d < 0) {
                d = -1;
            }
            else {
                d = -(originalDbObject.d + 1);
            }
        }
        else {
            if (originalDbObject.d < 0) {
                d = 1;
            }
            else {
                d = originalDbObject.d + 1;
            }
        }
        dbObject.v = uiValue;
        dbObject.d = d;
    }
}
DI.set(DB_CONVERTER, DbConverter);
//# sourceMappingURL=DbConverter.js.map