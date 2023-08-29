import ***REMOVED*** AuthTokenValidityRequest, LogoutRequest, LogoutResponse, UserLoginRequest, UserLoginResponse ***REMOVED*** from "./logins_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** BooleanResponse ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the methods applicable on the login service
 *
 * @generated from service Genesis.LoginService
 */
export declare const LoginService: ***REMOVED***
    readonly typeName: "Genesis.LoginService";
    readonly methods: ***REMOVED***
        /**
         * Login using credentials belonging to a user and evaluate using user's primary role
         *
         * @generated from rpc Genesis.LoginService.UserLoginPrimary
         */
        readonly userLoginPrimary: ***REMOVED***
            readonly name: "UserLoginPrimary";
            readonly I: typeof UserLoginRequest;
            readonly O: typeof UserLoginResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Check if the auth token is still valid
         *
         * @generated from rpc Genesis.LoginService.IsAuthTokenValid
         */
        readonly isAuthTokenValid: ***REMOVED***
            readonly name: "IsAuthTokenValid";
            readonly I: typeof AuthTokenValidityRequest;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Logout
         *
         * @generated from rpc Genesis.LoginService.Logout
         */
        readonly logout: ***REMOVED***
            readonly name: "Logout";
            readonly I: typeof LogoutRequest;
            readonly O: typeof LogoutResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=logins_connect.d.ts.map