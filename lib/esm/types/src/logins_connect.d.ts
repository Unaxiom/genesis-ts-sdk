import { AuthTokenValidityRequest, LogoutRequest, LogoutResponse, UserLoginRequest, UserLoginResponse } from "./logins_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { BooleanResponse } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on the login service
 *
 * @generated from service Genesis.LoginService
 */
export declare const LoginService: {
    readonly typeName: "Genesis.LoginService";
    readonly methods: {
        /**
         * Login using credentials belonging to a user and evaluate using user's primary role
         *
         * @generated from rpc Genesis.LoginService.UserLoginPrimary
         */
        readonly userLoginPrimary: {
            readonly name: "UserLoginPrimary";
            readonly I: typeof UserLoginRequest;
            readonly O: typeof UserLoginResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if the auth token is still valid
         *
         * @generated from rpc Genesis.LoginService.IsAuthTokenValid
         */
        readonly isAuthTokenValid: {
            readonly name: "IsAuthTokenValid";
            readonly I: typeof AuthTokenValidityRequest;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Logout
         *
         * @generated from rpc Genesis.LoginService.Logout
         */
        readonly logout: {
            readonly name: "Logout";
            readonly I: typeof LogoutRequest;
            readonly O: typeof LogoutResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=logins_connect.d.ts.map