"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remote_query_1 = require("../remote-query");
describe("Remote query", () => {
    it("should properly handle fields and relations transformation", () => {
        let expand = {
            fields: ["name", "age"],
            expands: {
                friend: {
                    fields: ["name"],
                    expands: {
                        ball: {
                            fields: ["*"],
                        },
                    },
                },
            },
        };
        let result = remote_query_1.RemoteQuery.getAllFieldsAndRelations(expand);
        expect(result).toEqual({
            select: ["name", "age", "friend.name"],
            relations: ["friend", "friend.ball"],
            args: {
                "": undefined,
                friend: undefined,
                "friend.ball": undefined,
            },
        });
        expand = {
            fields: [],
            expands: {
                friend: {
                    fields: ["name"],
                    expands: {
                        ball: {
                            fields: ["*"],
                        },
                    },
                },
            },
        };
        result = remote_query_1.RemoteQuery.getAllFieldsAndRelations(expand);
        expect(result).toEqual({
            select: ["friend.name"],
            relations: ["friend", "friend.ball"],
            args: {
                "": undefined,
                friend: undefined,
                "friend.ball": undefined,
            },
        });
        expand = {
            fields: [],
            expands: {
                friend: {
                    fields: ["*"],
                    expands: {
                        ball: {
                            fields: ["*"],
                        },
                    },
                },
            },
        };
        result = remote_query_1.RemoteQuery.getAllFieldsAndRelations(expand);
        expect(result).toEqual({
            select: [],
            relations: ["friend", "friend.ball"],
            args: {
                "": undefined,
                friend: undefined,
                "friend.ball": undefined,
            },
        });
        expand = {
            fields: [],
            expands: {
                friend: {
                    fields: [],
                    expands: {
                        ball: {
                            fields: ["*"],
                        },
                    },
                },
            },
        };
        result = remote_query_1.RemoteQuery.getAllFieldsAndRelations(expand);
        expect(result).toEqual({
            select: [],
            relations: ["friend", "friend.ball"],
            args: {
                "": undefined,
                friend: undefined,
                "friend.ball": undefined,
            },
        });
    });
});
//# sourceMappingURL=remote-query.spec.js.map