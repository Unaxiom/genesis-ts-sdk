// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file overtimes.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Overtime, OvertimesList, OvertimesServiceCreateRequest, OvertimesServiceEntityPaginationReq, OvertimesServiceFilterReq, OvertimesServicePaginationReq, OvertimesServicePaginationResponse, OvertimesServiceSearchAllReq, OvertimesServiceUpdateRequest } from "./overtimes_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithUserComment } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 *
 * Describes the common methods applicable on each overtime
 *
 * @generated from service Genesis.OvertimesService
 */
export const OvertimesService = {
  typeName: "Genesis.OvertimesService",
  methods: {
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.OvertimesService.Create
     */
    create: {
      name: "Create",
      I: OvertimesServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.OvertimesService.Draft
     */
    draft: {
      name: "Draft",
      I: OvertimesServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Update draft
     *
     * @generated from rpc Genesis.OvertimesService.DraftUpdate
     */
    draftUpdate: {
      name: "DraftUpdate",
      I: OvertimesServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.OvertimesService.SendForVerification
     */
    sendForVerification: {
      name: "SendForVerification",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Verify
     *
     * @generated from rpc Genesis.OvertimesService.Verify
     */
    verify: {
      name: "Verify",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Approve
     *
     * @generated from rpc Genesis.OvertimesService.Approve
     */
    approve: {
      name: "Approve",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send For Revision
     *
     * @generated from rpc Genesis.OvertimesService.SendForRevision
     */
    sendForRevision: {
      name: "SendForRevision",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Update revision
     *
     * @generated from rpc Genesis.OvertimesService.RevisionUpdate
     */
    revisionUpdate: {
      name: "RevisionUpdate",
      I: OvertimesServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Halt
     *
     * @generated from rpc Genesis.OvertimesService.Halt
     */
    halt: {
      name: "Halt",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Discard
     *
     * @generated from rpc Genesis.OvertimesService.Discard
     */
    discard: {
      name: "Discard",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Restore
     *
     * @generated from rpc Genesis.OvertimesService.Restore
     */
    restore: {
      name: "Restore",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Complete
     *
     * @generated from rpc Genesis.OvertimesService.Complete
     */
    complete: {
      name: "Complete",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Repeat
     *
     * @generated from rpc Genesis.OvertimesService.Repeat
     */
    repeat: {
      name: "Repeat",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Add comment
     *
     * Send Email
     * rpc SendEmail (Identifier) returns (Identifier);
     *
     * @generated from rpc Genesis.OvertimesService.CommentAdd
     */
    commentAdd: {
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View by ID
     *
     * @generated from rpc Genesis.OvertimesService.ViewByID
     */
    viewByID: {
      name: "ViewByID",
      I: Identifier,
      O: Overtime,
      kind: MethodKind.Unary,
    },
    /**
     * View all
     *
     * @generated from rpc Genesis.OvertimesService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveStatus,
      O: OvertimesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.OvertimesService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: {
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: OvertimesList,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.OvertimesService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: OvertimesServicePaginationReq,
      O: OvertimesServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.OvertimesService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: {
      name: "ViewWithPaginationForEntityUUID",
      I: OvertimesServiceEntityPaginationReq,
      O: OvertimesServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.OvertimesService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: OvertimesServiceSearchAllReq,
      O: OvertimesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.OvertimesService.Filter
     */
    filter: {
      name: "Filter",
      I: OvertimesServiceFilterReq,
      O: OvertimesList,
      kind: MethodKind.Unary,
    },
    /**
     * Count in status
     *
     * @generated from rpc Genesis.OvertimesService.CountInStatus
     */
    countInStatus: {
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

