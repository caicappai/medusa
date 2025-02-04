"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteQueryObjectToString = remoteQueryObjectToString;
/**
 * Transform a remote query object to a string array containing the chain of fields and relations
 *
 * @param fields
 * @param parent
 *
 * @example
 *
 * const remoteQueryObject = {
 *   fields: [
 *     "id",
 *     "title",
 *   ],
 *   images: {
 *     fields: ["id", "created_at", "updated_at", "deleted_at", "url", "metadata"],
 *   },
 * }
 *
 * const fields = remoteQueryObjectToString(remoteQueryObject)
 *
 * console.log(fields)
 * // ["id", "title", "images.id", "images.created_at", "images.updated_at", "images.deleted_at", "images.url", "images.metadata"]
 */
function remoteQueryObjectToString(fields, parent) {
    return Object.keys(fields).reduce((acc, key) => {
        if (key === "fields") {
            if (parent) {
                fields[key].map((fieldKey) => acc.push(`${parent}.${fieldKey}`));
            }
            else {
                fields[key].map((fieldKey) => acc.push(fieldKey));
            }
            return acc;
        }
        if (typeof fields[key] === "object") {
            acc = acc.concat(remoteQueryObjectToString(fields[key], parent ? `${parent}.${key}` : key));
            return acc;
        }
        return acc;
    }, []);
}
//# sourceMappingURL=remote-query-object-to-string.js.map