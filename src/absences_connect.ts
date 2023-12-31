// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file absences.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Absence, AbsencesList, AbsencesServiceCreateRequest, AbsencesServiceEntityPaginationReq, AbsencesServiceFilterReq, AbsencesServicePaginationReq, AbsencesServicePaginationResponse, AbsencesServiceSearchAllReq, AbsencesServiceUpdateRequest } from "./absences_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithUserComment } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 *
 * Describes the common methods applicable on each absence
 *
 * @generated from service Genesis.AbsencesService
 */
export const AbsencesService = {
  typeName: "Genesis.AbsencesService",
  methods: {
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.AbsencesService.Create
     */
    create: {
      name: "Create",
      I: AbsencesServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.AbsencesService.Draft
     */
    draft: {
      name: "Draft",
      I: AbsencesServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Update draft
     *
     * @generated from rpc Genesis.AbsencesService.DraftUpdate
     */
    draftUpdate: {
      name: "DraftUpdate",
      I: AbsencesServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.AbsencesService.SendForVerification
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
     * @generated from rpc Genesis.AbsencesService.Verify
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
     * @generated from rpc Genesis.AbsencesService.Approve
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
     * @generated from rpc Genesis.AbsencesService.SendForRevision
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
     * @generated from rpc Genesis.AbsencesService.RevisionUpdate
     */
    revisionUpdate: {
      name: "RevisionUpdate",
      I: AbsencesServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Halt
     *
     * @generated from rpc Genesis.AbsencesService.Halt
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
     * @generated from rpc Genesis.AbsencesService.Discard
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
     * @generated from rpc Genesis.AbsencesService.Restore
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
     * @generated from rpc Genesis.AbsencesService.Complete
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
     * @generated from rpc Genesis.AbsencesService.Repeat
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
     * @generated from rpc Genesis.AbsencesService.CommentAdd
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
     * @generated from rpc Genesis.AbsencesService.ViewByID
     */
    viewByID: {
      name: "ViewByID",
      I: Identifier,
      O: Absence,
      kind: MethodKind.Unary,
    },
    /**
     * View all
     *
     * @generated from rpc Genesis.AbsencesService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveStatus,
      O: AbsencesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.AbsencesService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: {
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: AbsencesList,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.AbsencesService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: AbsencesServicePaginationReq,
      O: AbsencesServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.AbsencesService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: {
      name: "ViewWithPaginationForEntityUUID",
      I: AbsencesServiceEntityPaginationReq,
      O: AbsencesServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.AbsencesService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: AbsencesServiceSearchAllReq,
      O: AbsencesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.AbsencesService.Filter
     */
    filter: {
      name: "Filter",
      I: AbsencesServiceFilterReq,
      O: AbsencesList,
      kind: MethodKind.Unary,
    },
    /**
     * Count in status
     *
     * @generated from rpc Genesis.AbsencesService.CountInStatus
     */
    countInStatus: {
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

