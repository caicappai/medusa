"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_email_1 = require("../is-email");
describe("validateEmail", () => {
    it("successfully validates an email", () => {
        expect((0, is_email_1.validateEmail)("test@email.com")).toBe("test@email.com");
        expect((0, is_email_1.validateEmail)("test.test@email.com")).toBe("test.test@email.com");
        expect((0, is_email_1.validateEmail)("test.test123@email.com")).toBe("test.test123@email.com");
    });
    it("throws on an invalidates email", () => {
        expect.assertions(1);
        try {
            (0, is_email_1.validateEmail)("not-an-email");
        }
        catch (e) {
            expect(e.message).toBe("The email is not valid");
        }
    });
});
//# sourceMappingURL=is-email.spec.js.map