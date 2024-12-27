"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDirRecursive = readDirRecursive;
const promises_1 = require("fs/promises");
const path_1 = require("path");
async function readDirRecursive(dir) {
    let allEntries = [];
    const readRecursive = async (dir) => {
        const entries = await (0, promises_1.readdir)(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = (0, path_1.join)(dir, entry.name);
            Object.defineProperty(entry, "path", {
                value: dir,
            });
            allEntries.push(entry);
            if (entry.isDirectory()) {
                await readRecursive(fullPath);
            }
        }
    };
    await readRecursive(dir);
    return allEntries;
}
//# sourceMappingURL=read-dir-recursive.js.map