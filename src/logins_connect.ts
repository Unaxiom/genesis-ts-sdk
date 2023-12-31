// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file logins.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AuthTokenValidityRequest, LogoutRequest, LogoutResponse, UserLoginRequest, UserLoginResponse } from "./logins_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { BooleanResponse } from "./base_pb.js";

/**
 *
 * Describes the methods applicable on the login service
 *
 * @generated from service Genesis.LoginService
 */
export const LoginService = {
  typeName: "Genesis.LoginService",
  methods: {
    /**
     * Login using credentials belonging to a user and evaluate using user's primary role
     *
     * @generated from rpc Genesis.LoginService.UserLoginPrimary
     */
    userLoginPrimary: {
      name: "UserLoginPrimary",
      I: UserLoginRequest,
      O: UserLoginResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Check if the auth token is still valid
     *
     * @generated from rpc Genesis.LoginService.IsAuthTokenValid
     */
    isAuthTokenValid: {
      name: "IsAuthTokenValid",
      I: AuthTokenValidityRequest,
      O: BooleanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Logout
     *
     * @generated from rpc Genesis.LoginService.Logout
     */
    logout: {
      name: "Logout",
      I: LogoutRequest,
      O: LogoutResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

