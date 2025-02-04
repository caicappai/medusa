import { AuthenticationInput, AuthenticationResponse, AuthIdentityDTO } from "./common";
export interface AuthIdentityProviderService {
    retrieve: (selector: {
        entity_id: string;
    }) => Promise<AuthIdentityDTO>;
    create: (data: {
        entity_id: string;
        provider_metadata?: Record<string, unknown>;
        user_metadata?: Record<string, unknown>;
    }) => Promise<AuthIdentityDTO>;
    update: (entity_id: string, data: {
        provider_metadata?: Record<string, unknown>;
        user_metadata?: Record<string, unknown>;
    }) => Promise<AuthIdentityDTO>;
}
/**
 * ## Overview
 *
 * Authentication provider interface for the auth module.
 *
 */
export interface IAuthProvider {
    authenticate(data: AuthenticationInput, authIdentityProviderService: AuthIdentityProviderService): Promise<AuthenticationResponse>;
    register(data: AuthenticationInput, authIdentityProviderService: AuthIdentityProviderService): Promise<AuthenticationResponse>;
    validateCallback(data: AuthenticationInput, authIdentityProviderService: AuthIdentityProviderService): Promise<AuthenticationResponse>;
    update: (data: Record<string, unknown>, authIdentityProviderService: AuthIdentityProviderService) => Promise<AuthenticationResponse>;
}
//# sourceMappingURL=provider.d.ts.map