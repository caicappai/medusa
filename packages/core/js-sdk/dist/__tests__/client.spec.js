"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const msw_1 = require("msw");
const node_1 = require("msw/node");
const client_1 = require("../client");
const baseUrl = "https://someurl.com";
// This is just a network-layer mocking, it doesn't start an actual server
const server = (0, node_1.setupServer)(msw_1.http.get(`${baseUrl}/test`, ({ request, params, cookies }) => {
    return msw_1.HttpResponse.json({
        test: "test",
    });
}), msw_1.http.get(`${baseUrl}/some/path/test`, ({ request, params, cookies }) => {
    return msw_1.HttpResponse.json({
        test: "test",
    });
}), msw_1.http.get(`${baseUrl}/throw`, ({ request, params, cookies }) => {
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get(`${baseUrl}/header`, ({ request }) => {
    if (request.headers.get("X-custom-header") === "test" &&
        request.headers.get("Content-Type") === "application/json") {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get(`${baseUrl}/replaced-header`, ({ request }) => {
    if (request.headers.get("Content-Type") === "application/xml") {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get(`${baseUrl}/apikey`, ({ request }) => {
    if (request.headers.get("authorization")?.startsWith("Basic")) {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get(`${baseUrl}/pubkey`, ({ request }) => {
    if (request.headers.get(client_1.PUBLISHABLE_KEY_HEADER) === "test-pub-key") {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.post(`${baseUrl}/create`, async ({ request, params, cookies }) => {
    return msw_1.HttpResponse.json(await request.json());
}), msw_1.http.delete(`${baseUrl}/delete/123`, async ({ request, params, cookies }) => {
    return msw_1.HttpResponse.json({ test: "test" });
}), msw_1.http.get(`${baseUrl}/jwt`, ({ request }) => {
    if (request.headers.get("authorization") === "Bearer token-123") {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get(`${baseUrl}/nostore`, ({ request }) => {
    if (!request.headers.get("authorization")) {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get(`https://test.com/baseUrl`, ({ request, params, cookies }) => {
    return msw_1.HttpResponse.json({
        test: "test",
    });
}), msw_1.http.all("*", ({ request, params, cookies }) => {
    return new msw_1.HttpResponse(null, {
        status: 404,
        statusText: "Not Found",
    });
}));
describe("Client", () => {
    let client;
    beforeAll(() => {
        client = new client_1.Client({
            baseUrl,
        });
        server.listen();
    });
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    describe("configuration", () => {
        it("should allow passing custom request headers while the defaults are preserved", async () => {
            const resp = await client.fetch("header", {
                headers: { "X-custom-header": "test" },
            });
            expect(resp).toEqual({ test: "test" });
        });
        it("should allow replacing a default header", async () => {
            const resp = await client.fetch("replaced-header", {
                headers: { "content-Type": "application/xml" },
            });
            expect(resp).toEqual({ test: "test" });
        });
        it("should allow passing global headers", async () => {
            const headClient = new client_1.Client({
                baseUrl,
                globalHeaders: {
                    "X-custom-header": "test",
                },
            });
            const resp = await headClient.fetch("header");
            expect(resp).toEqual({ test: "test" });
        });
        it("should allow setting an API key", async () => {
            const authClient = new client_1.Client({
                baseUrl,
                apiKey: "test-api-key",
            });
            const resp = await authClient.fetch("apikey");
            expect(resp).toEqual({ test: "test" });
        });
        it("should allow setting a publishable key", async () => {
            const pubClient = new client_1.Client({
                baseUrl,
                publishableKey: "test-pub-key",
            });
            const resp = await pubClient.fetch("pubkey");
            expect(resp).toEqual({ test: "test" });
        });
        it("should gracefully handle a root base URL", async () => {
            global.window = {
                location: {
                    origin: "https://test.com",
                },
            };
            const pubClient = new client_1.Client({
                baseUrl: "/",
            });
            const resp = await pubClient.fetch("baseUrl");
            expect(resp).toEqual({ test: "test" });
            global.window = undefined;
        });
        it("should handle baseUrl with path correctly", async () => {
            const pathClient = new client_1.Client({
                baseUrl: `${baseUrl}/some/path`,
            });
            const resp = await pathClient.fetch("test");
            expect(resp).toEqual({ test: "test" });
        });
        it("should handle baseUrl with trailing slash path correctly", async () => {
            const pathClient = new client_1.Client({
                baseUrl: `${baseUrl}/some/path/`,
            });
            const resp = await pathClient.fetch("test");
            expect(resp).toEqual({ test: "test" });
        });
        it("should handle baseUrl with just origin", async () => {
            const originClient = new client_1.Client({
                baseUrl,
            });
            const resp = await originClient.fetch("test");
            expect(resp).toEqual({ test: "test" });
        });
        it("should handle baseUrl with just origin and trailing slash", async () => {
            const originClient = new client_1.Client({
                baseUrl: `${baseUrl}/`,
            });
            const resp = await originClient.fetch("test");
            expect(resp).toEqual({ test: "test" });
        });
    });
    describe("GET requests", () => {
        it("should fire a simple GET request and get back a JSON response by default", async () => {
            const resp = await client.fetch("test");
            expect(resp).toEqual({ test: "test" });
        });
        it("should throw an exception if a non-2xx status is received", async () => {
            const err = await client.fetch("throw").catch((e) => e);
            expect(err.status).toEqual(500);
            expect(err.message).toEqual("Internal Server Error");
        });
    });
    describe("POST requests", () => {
        it("should fire a simple POST request and get back a JSON response", async () => {
            const resp = await client.fetch("create", {
                body: { test: "test" },
                method: "POST",
            });
            expect(resp).toEqual({ test: "test" });
        });
    });
    describe("DELETE requests", () => {
        it("should fire a simple DELETE request and get back a JSON response", async () => {
            const resp = await client.fetch("delete/123", {
                method: "DELETE",
            });
            expect(resp).toEqual({ test: "test" });
        });
    });
    describe("Authrized requests", () => {
        it("should not store the token by default", async () => {
            const token = "token-123"; // Eg. from a response after a successful authentication
            client.setToken(token);
            const resp = await client.fetch("nostore");
            expect(resp).toEqual({ test: "test" });
        });
        it("should set the token in local storage if in browser", async () => {
            // We are mimicking a browser environment here
            global.window = {
                localStorage: { setItem: jest.fn(), getItem: () => token },
            };
            const token = "token-123"; // Eg. from a response after a successful authentication
            client.setToken(token);
            const resp = await client.fetch("jwt");
            expect(resp).toEqual({ test: "test" });
            expect(global.window.localStorage.setItem).toHaveBeenCalledWith("medusa_auth_token", token);
            // Cleaning up after this specific test
            global.window = undefined;
        });
    });
});
//# sourceMappingURL=client.spec.js.map