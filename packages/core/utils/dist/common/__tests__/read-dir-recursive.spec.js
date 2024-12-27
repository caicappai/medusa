"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const path_1 = require("path");
const read_dir_recursive_1 = require("../read-dir-recursive");
jest.mock("fs/promises");
jest.mock("path");
describe("readDirRecursive", () => {
    it("should recursively read directories and return all entries", async () => {
        const mockReaddir = promises_1.readdir;
        const mockJoin = path_1.join;
        // dir structure
        const dirStructure = {
            "/root": [
                { name: "file1.txt", isDirectory: () => false },
                { name: "subdir", isDirectory: () => true },
            ],
            "/root/subdir": [
                { name: "file2.txt", isDirectory: () => false },
                { name: "nested", isDirectory: () => true },
            ],
            "/root/subdir/nested": [{ name: "file3.txt", isDirectory: () => false }],
        };
        mockReaddir.mockImplementation((dir) => {
            return dirStructure[dir] ?? [];
        });
        mockJoin.mockImplementation((...paths) => paths.join("/"));
        const result = await (0, read_dir_recursive_1.readDirRecursive)("/root");
        const paths = result.map((r) => r.path);
        expect(paths).toEqual([
            "/root",
            "/root",
            "/root/subdir",
            "/root/subdir",
            "/root/subdir/nested",
        ]);
        expect(result).toEqual([
            { name: "file1.txt", isDirectory: expect.any(Function) },
            { name: "subdir", isDirectory: expect.any(Function) },
            {
                name: "file2.txt",
                isDirectory: expect.any(Function),
            },
            {
                name: "nested",
                isDirectory: expect.any(Function),
            },
            {
                name: "file3.txt",
                isDirectory: expect.any(Function),
            },
        ]);
        expect(mockReaddir).toHaveBeenCalledWith("/root", { withFileTypes: true });
        expect(mockReaddir).toHaveBeenCalledWith("/root/subdir", {
            withFileTypes: true,
        });
        expect(mockReaddir).toHaveBeenCalledWith("/root/subdir/nested", {
            withFileTypes: true,
        });
    });
});
//# sourceMappingURL=read-dir-recursive.spec.js.map