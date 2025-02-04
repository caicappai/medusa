var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Auth {
    constructor(client, config) {
        /**
         * This method is used to retrieve a registration JWT token for a user, customer, or custom actor type. It sends a request to the
         * [Retrieve Registration Token API route](https://docs.medusajs.com/api/store#auth_postactor_typeauth_provider_register).
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `emailpass` or `google`.
         * @param payload - The data to pass in the request's body for authentication. When using the `emailpass` provider,
         * you pass the email and password.
         * @returns The JWT token used for registration later.
         *
         * @example
         * sdk.auth.register(
         *   "customer",
         *   "emailpass",
         *   {
         *     email: "customer@gmail.com",
         *     password: "supersecret"
         *   }
         * ).then((token) => {
         *   console.log(token)
         * })
         */
        this.register = (actor, method, payload) => __awaiter(this, void 0, void 0, function* () {
            const { token } = yield this.client.fetch(`/auth/${actor}/${method}/register`, {
                method: "POST",
                body: payload,
            });
            this.client.setToken(token);
            return token;
        });
        /**
         * This method retrieves the JWT authenticated token for an admin user, customer, or custom
         * actor type. It sends a request to the [Authenticate API Route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_provider).
         *
         * If the `auth.type` of the SDK is set to `session`, this method will also send a request to the
         * [Set Authentication Session API route](https://docs.medusajs.com/api/admin#auth_postsession).
         *
         * Subsequent requests using the SDK will automatically have the necessary authentication headers / session
         * set.
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `emailpass` or `google`.
         * @param payload - The data to pass in the request's body for authentication. When using the `emailpass` provider,
         * you pass the email and password.
         * @returns The authentication JWT token
         *
         * @example
         * sdk.auth.login(
         *   "customer",
         *   "emailpass",
         *   {
         *     email: "customer@gmail.com",
         *     password: "supersecret"
         *   }
         * ).then((token) => {
         *   console.log(token)
         * })
         */
        this.login = (actor, method, payload) => __awaiter(this, void 0, void 0, function* () {
            // There will either be token or location returned from the backend.
            const { token, location } = yield this.client.fetch(`/auth/${actor}/${method}`, {
                method: "POST",
                body: payload,
            });
            // In the case of an oauth login, we return the redirect location to the caller.
            // They can decide if they do an immediate redirect or put it in an <a> tag.
            if (location) {
                return { location };
            }
            yield this.setToken_(token);
            return token;
        });
        /**
         * This method is used to validate an Oauth callback from a third-party service, such as Google, for an admin user, customer, or custom actor types.
         * It sends a request to the [Validate Authentication Callback](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providercallback).
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `google`.
         * @param query - The query parameters from the Oauth callback, which should be passed to the API route.
         * @returns The authentication JWT token
         *
         * @example
         * sdk.auth.callback(
         *   "customer",
         *   "google",
         *   {
         *     code: "123",
         *   }
         * ).then((token) => {
         *   console.log(token)
         * })
         *
         *
         * @privateRemarks
         * The callback expects all query parameters from the Oauth callback to be passed to
         * the backend, and the provider is in charge of parsing and validating them
         */
        this.callback = (actor, method, query) => __awaiter(this, void 0, void 0, function* () {
            const { token } = yield this.client.fetch(`/auth/${actor}/${method}/callback`, {
                method: "GET",
                query,
            });
            yield this.setToken_(token);
            return token;
        });
        /**
         * This method refreshes a JWT authentication token, which is useful after validating the Oauth callback
         * with {@link callback}. It sends a request to the [Refresh Authentication Token API route](https://docs.medusajs.com/api/admin#auth_postadminauthtokenrefresh).
         *
         * @returns The refreshed JWT authentication token.
         *
         * @example
         * sdk.auth.refresh()
         * .then((token) => {
         *   console.log(token)
         * })
         */
        this.refresh = () => __awaiter(this, void 0, void 0, function* () {
            const { token } = yield this.client.fetch("/auth/token/refresh", {
                method: "POST",
            });
            // Putting the token in session after refreshing is only useful when the new token has updated info (eg. actor_id).
            // Ideally we don't use the full JWT in session as key, but just store a pseudorandom key that keeps the rest of the auth context as value.
            yield this.setToken_(token);
            return token;
        });
        /**
         * This method deletes the authentication session of the currently logged-in user to log them out.
         * It sends a request to the [Delete Authentication Session API route](https://docs.medusajs.com/api/admin#auth_deletesession).
         *
         * @example
         * sdk.auth.logout()
         * .then(() => {
         *   // user is logged out
         * })
         */
        this.logout = () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session") {
                yield this.client.fetch("/auth/session", {
                    method: "DELETE",
                });
            }
            this.client.clearToken();
        });
        /**
         * This method requests a reset password token for an admin user, customer, or custom actor type.
         * It sends a request to the [Generate Reset Password Token API route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providerresetpassword).
         *
         * To reset the password later using the token delivered to the user, use the {@link updateProvider} method.
         *
         * Related guide: [How to allow customers to reset their passwords in a storefront](https://docs.medusajs.com/resources/storefront-development/customers/reset-password).
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param provider - The authentication provider to use. For example, `emailpass`.
         * @param body - The data required to identify the user.
         *
         * @example
         * sdk.auth.resetPassword(
         *   "customer",
         *   "emailpass",
         *   {
         *     identifier: "customer@gmail.com"
         *   }
         * )
         * .then(() => {
         *   // user receives token
         * })
         */
        this.resetPassword = (actor, provider, body) => __awaiter(this, void 0, void 0, function* () {
            yield this.client.fetch(`/auth/${actor}/${provider}/reset-password`, {
                method: "POST",
                body,
                headers: { accept: "text/plain" }, // 201 Created response
            });
        });
        /**
         * This method is used to update user-related data authentication data.
         *
         * More specifically, use this method when updating the password of an admin user, customer, or
         * custom actor type after requesting to reset their password with {@link resetPassword}.
         *
         * This method sends a request to [this API route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providerupdate).
         *
         * Related guide: [How to allow customers to reset their passwords in a storefront](https://docs.medusajs.com/resources/storefront-development/customers/reset-password).
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param provider - The authentication provider to use. For example, `emailpass`.
         * @param body - The data necessary to update the user's authentication data. When resetting the user's password,
         * send the `password` property.
         *
         * @example
         * sdk.auth.updateProvider(
         *   "customer",
         *   "emailpass",
         *   {
         *     password: "supersecret"
         *   },
         *   token
         * )
         * .then(() => {
         *   // password updated
         * })
         */
        this.updateProvider = (actor, provider, body, token) => __awaiter(this, void 0, void 0, function* () {
            yield this.client.fetch(`/auth/${actor}/${provider}/update?token=${token}`, {
                method: "POST",
                body,
            });
        });
        /**
         * @ignore
         */
        this.setToken_ = (token) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            // By default we just set the token in the configured storage, if configured to use sessions we convert it into session storage instead.
            if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session") {
                yield this.client.fetch("/auth/session", {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}` },
                });
            }
            else {
                this.client.setToken(token);
            }
        });
        this.client = client;
        this.config = config;
    }
}
//# sourceMappingURL=index.js.map