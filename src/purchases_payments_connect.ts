// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file purchases_payments.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import ***REMOVED*** PurchasePayment, PurchasesPaymentsList, PurchasesPaymentsServiceCreateRequest, PurchasesPaymentsServiceEntityPaginationReq, PurchasesPaymentsServiceFilterReq, PurchasesPaymentsServicePaginationReq, PurchasesPaymentsServicePaginationResponse, PurchasesPaymentsServiceSearchAllReq, PurchasesPaymentsServiceUpdateRequest ***REMOVED*** from "./purchases_payments_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithUserComment ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";

/**
 *
 * Describes the common methods applicable on each purchase payment
 *
 * @generated from service Genesis.PurchasesPaymentsService
 */
export const PurchasesPaymentsService = ***REMOVED***
  typeName: "Genesis.PurchasesPaymentsService",
  methods: ***REMOVED***
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Create
     */
    create: ***REMOVED***
      name: "Create",
      I: PurchasesPaymentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Draft
     */
    draft: ***REMOVED***
      name: "Draft",
      I: PurchasesPaymentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update draft
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.DraftUpdate
     */
    draftUpdate: ***REMOVED***
      name: "DraftUpdate",
      I: PurchasesPaymentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.SendForVerification
     */
    sendForVerification: ***REMOVED***
      name: "SendForVerification",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Verify
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Verify
     */
    verify: ***REMOVED***
      name: "Verify",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Approve
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Approve
     */
    approve: ***REMOVED***
      name: "Approve",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send For Revision
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.SendForRevision
     */
    sendForRevision: ***REMOVED***
      name: "SendForRevision",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update revision
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.RevisionUpdate
     */
    revisionUpdate: ***REMOVED***
      name: "RevisionUpdate",
      I: PurchasesPaymentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Halt
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Halt
     */
    halt: ***REMOVED***
      name: "Halt",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Discard
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Discard
     */
    discard: ***REMOVED***
      name: "Discard",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Restore
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Restore
     */
    restore: ***REMOVED***
      name: "Restore",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Complete
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Complete
     */
    complete: ***REMOVED***
      name: "Complete",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Repeat
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Repeat
     */
    repeat: ***REMOVED***
      name: "Repeat",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add comment
     *
     * Send Email
     * rpc SendEmail (Identifier) returns (Identifier);
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.CommentAdd
     */
    commentAdd: ***REMOVED***
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View by ID
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.ViewByID
     */
    viewByID: ***REMOVED***
      name: "ViewByID",
      I: Identifier,
      O: PurchasePayment,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.ViewAll
     */
    viewAll: ***REMOVED***
      name: "ViewAll",
      I: ActiveStatus,
      O: PurchasesPaymentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: ***REMOVED***
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: PurchasesPaymentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.ViewWithPagination
     */
    viewWithPagination: ***REMOVED***
      name: "ViewWithPagination",
      I: PurchasesPaymentsServicePaginationReq,
      O: PurchasesPaymentsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: ***REMOVED***
      name: "ViewWithPaginationForEntityUUID",
      I: PurchasesPaymentsServiceEntityPaginationReq,
      O: PurchasesPaymentsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.SearchAll
     */
    searchAll: ***REMOVED***
      name: "SearchAll",
      I: PurchasesPaymentsServiceSearchAllReq,
      O: PurchasesPaymentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.Filter
     */
    filter: ***REMOVED***
      name: "Filter",
      I: PurchasesPaymentsServiceFilterReq,
      O: PurchasesPaymentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Count in status
     *
     * @generated from rpc Genesis.PurchasesPaymentsService.CountInStatus
     */
    countInStatus: ***REMOVED***
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
***REMOVED***
  ***REMOVED***
***REMOVED*** as const;
