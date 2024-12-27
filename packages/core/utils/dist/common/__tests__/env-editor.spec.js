"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const file_system_1 = require("../file-system");
const env_editor_1 = require("../env-editor");
const BASE_PATH = (0, path_1.join)(__dirname, "env-editor-tests");
const fs = new file_system_1.FileSystem(BASE_PATH);
describe("Env editor", () => {
    beforeEach(async () => {
        await fs.cleanup();
    });
    afterAll(async () => {
        await fs.cleanup();
    });
    test("add key-value pair to dot-env files", async () => {
        await fs.create(".env", "");
        await fs.create(".env.template", "");
        const editor = new env_editor_1.EnvEditor(BASE_PATH);
        await editor.load();
        editor.set("PORT", 3000);
        expect(editor.toJSON()).toEqual([
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env"),
                contents: ["", "PORT=3000"],
            },
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env.template"),
                contents: ["", "PORT=3000"],
            },
        ]);
    });
    test("modify non-existing files as well", async () => {
        const editor = new env_editor_1.EnvEditor(BASE_PATH);
        await editor.load();
        editor.set("PORT", 3000);
        expect(editor.toJSON()).toEqual([
            {
                exists: false,
                filePath: (0, path_1.join)(fs.basePath, ".env"),
                contents: ["PORT=3000"],
            },
            {
                exists: false,
                filePath: (0, path_1.join)(fs.basePath, ".env.template"),
                contents: ["PORT=3000"],
            },
        ]);
    });
    test("update existing key value pair", async () => {
        await fs.create(".env", "PORT=3333");
        await fs.create(".env.template", "PORT=4000");
        const editor = new env_editor_1.EnvEditor(BASE_PATH);
        await editor.load();
        editor.set("PORT", 3000);
        expect(editor.toJSON()).toEqual([
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env"),
                contents: ["PORT=3000"],
            },
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env.template"),
                contents: ["PORT=3000"],
            },
        ]);
    });
    test("update in one file and add in another file", async () => {
        await fs.create(".env", ["PORT=3333", "", "HOST=localhost"].join("\n"));
        await fs.create(".env.template", "");
        const editor = new env_editor_1.EnvEditor(BASE_PATH);
        await editor.load();
        editor.set("PORT", 3000);
        expect(editor.toJSON()).toEqual([
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env"),
                contents: ["PORT=3000", "", "HOST=localhost"],
            },
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env.template"),
                contents: ["", "PORT=3000"],
            },
        ]);
    });
    test("persist changes on disk", async () => {
        await fs.create(".env", ["PORT=3333", "", "HOST=localhost"].join("\n"));
        await fs.create(".env.template", "");
        const editor = new env_editor_1.EnvEditor(BASE_PATH);
        await editor.load();
        editor.set("PORT", 3000);
        await editor.save();
        const envFile = await fs.contents(".env");
        expect(envFile.split("\n")).toEqual(["PORT=3000", "", "HOST=localhost"]);
        const envTemplateFile = await fs.contents(".env.template");
        expect(envTemplateFile.split("\n")).toEqual(["", "PORT=3000"]);
    });
    test("multiple times persist changes on disk", async () => {
        await fs.create(".env", ["PORT=3333", "", "HOST=localhost"].join("\n"));
        await fs.create(".env.template", "");
        const editor = new env_editor_1.EnvEditor(BASE_PATH);
        await editor.load();
        editor.set("PORT", 3000);
        await editor.save();
        let envFile = await fs.contents(".env");
        expect(envFile.split("\n")).toEqual(["PORT=3000", "", "HOST=localhost"]);
        let envTemplateFile = await fs.contents(".env.template");
        expect(envTemplateFile.split("\n")).toEqual(["", "PORT=3000"]);
        editor.set("HOST", "127.0.0.1");
        await editor.save();
        envFile = await fs.contents(".env");
        expect(envFile.split("\n")).toEqual(["PORT=3000", "", "HOST=127.0.0.1"]);
        envTemplateFile = await fs.contents(".env.template");
        expect(envTemplateFile.split("\n")).toEqual([
            "",
            "PORT=3000",
            "HOST=127.0.0.1",
        ]);
    });
    test("add empty template value", async () => {
        await fs.create(".env", "");
        await fs.create(".env.template", "");
        const editor = new env_editor_1.EnvEditor(BASE_PATH);
        await editor.load();
        editor.set("PORT", 3000, { withEmptyTemplateValue: true });
        expect(editor.toJSON()).toEqual([
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env"),
                contents: ["", "PORT=3000"],
            },
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env.template"),
                contents: ["", "PORT="],
            },
        ]);
    });
    test("do not replace existing template value with empty value", async () => {
        await fs.create(".env", ["PORT=3333", "", "HOST=localhost"].join("\n"));
        await fs.create(".env.template", ["PORT=3333", "", "HOST=localhost"].join("\n"));
        const editor = new env_editor_1.EnvEditor(BASE_PATH);
        await editor.load();
        editor.set("PORT", 3000, { withEmptyTemplateValue: true });
        expect(editor.toJSON()).toEqual([
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env"),
                contents: ["PORT=3000", "", "HOST=localhost"],
            },
            {
                exists: true,
                filePath: (0, path_1.join)(fs.basePath, ".env.template"),
                contents: ["PORT=3333", "", "HOST=localhost"],
            },
        ]);
    });
});
//# sourceMappingURL=env-editor.spec.js.map