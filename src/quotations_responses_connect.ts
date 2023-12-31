// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file quotations_responses.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QuotationResponse, QuotationResponseItem, QuotationResponseItemHistoryRequest, QuotationsResponsesItemsList, QuotationsResponsesList, QuotationsResponsesServiceCreateRequest, QuotationsResponsesServiceEntityPaginationReq, QuotationsResponsesServiceFilterReq, QuotationsResponsesServiceItemCreateRequest, QuotationsResponsesServiceItemsFilterReq, QuotationsResponsesServiceItemUpdateRequest, QuotationsResponsesServicePaginationReq, QuotationsResponsesServicePaginationResponse, QuotationsResponsesServiceSearchAllReq, QuotationsResponsesServiceUpdateRequest } from "./quotations_responses_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 *
 * Describes the common methods applicable on each quotation response
 *
 * @generated from service Genesis.QuotationsResponsesService
 */
export const QuotationsResponsesService = {
  typeName: "Genesis.QuotationsResponsesService",
  methods: {
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.QuotationsResponsesService.Create
     */
    create: {
      name: "Create",
      I: QuotationsResponsesServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.QuotationsResponsesService.Draft
     */
    draft: {
      name: "Draft",
      I: QuotationsResponsesServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Update draft
     *
     * @generated from rpc Genesis.QuotationsResponsesService.DraftUpdate
     */
    draftUpdate: {
      name: "DraftUpdate",
      I: QuotationsResponsesServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.QuotationsResponsesService.SendForVerification
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
     * @generated from rpc Genesis.QuotationsResponsesService.Verify
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
     * @generated from rpc Genesis.QuotationsResponsesService.Approve
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
     * @generated from rpc Genesis.QuotationsResponsesService.SendForRevision
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
     * @generated from rpc Genesis.QuotationsResponsesService.RevisionUpdate
     */
    revisionUpdate: {
      name: "RevisionUpdate",
      I: QuotationsResponsesServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Halt
     *
     * @generated from rpc Genesis.QuotationsResponsesService.Halt
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
     * @generated from rpc Genesis.QuotationsResponsesService.Discard
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
     * @generated from rpc Genesis.QuotationsResponsesService.Restore
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
     * @generated from rpc Genesis.QuotationsResponsesService.Complete
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
     * @generated from rpc Genesis.QuotationsResponsesService.Repeat
     */
    repeat: {
      name: "Repeat",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Reopen
     *
     * @generated from rpc Genesis.QuotationsResponsesService.Reopen
     */
    reopen: {
      name: "Reopen",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Add comment
     *
     * @generated from rpc Genesis.QuotationsResponsesService.CommentAdd
     */
    commentAdd: {
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Add an item to a quotation response
     *
     * @generated from rpc Genesis.QuotationsResponsesService.AddQuotationResponseItem
     */
    addQuotationResponseItem: {
      name: "AddQuotationResponseItem",
      I: QuotationsResponsesServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Modify an item in a quotation response
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ModifyQuotationResponseItem
     */
    modifyQuotationResponseItem: {
      name: "ModifyQuotationResponseItem",
      I: QuotationsResponsesServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Approve an item in a quotation response
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ApproveQuotationResponseItem
     */
    approveQuotationResponseItem: {
      name: "ApproveQuotationResponseItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an item in a quotation response
     *
     * @generated from rpc Genesis.QuotationsResponsesService.DeleteQuotationResponseItem
     */
    deleteQuotationResponseItem: {
      name: "DeleteQuotationResponseItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Reorder items in a quotation response
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ReorderQuotationResponseItems
     */
    reorderQuotationResponseItems: {
      name: "ReorderQuotationResponseItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View quotation response Item by ID
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewQuotationResponseItemByID
     */
    viewQuotationResponseItemByID: {
      name: "ViewQuotationResponseItemByID",
      I: Identifier,
      O: QuotationResponseItem,
      kind: MethodKind.Unary,
    },
    /**
     * View approved quotation response items for given quotation response ID
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewApprovedQuotationResponseItems
     */
    viewApprovedQuotationResponseItems: {
      name: "ViewApprovedQuotationResponseItems",
      I: IdentifierWithSearchKey,
      O: QuotationsResponsesItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View unapproved quotation response items for given quotation response ID
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewUnapprovedQuotationResponseItems
     */
    viewUnapprovedQuotationResponseItems: {
      name: "ViewUnapprovedQuotationResponseItems",
      I: IdentifierWithSearchKey,
      O: QuotationsResponsesItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View the history of the quotation response item
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewQuotationResponseItemHistory
     */
    viewQuotationResponseItemHistory: {
      name: "ViewQuotationResponseItemHistory",
      I: QuotationResponseItemHistoryRequest,
      O: QuotationsResponsesItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View all the quotation response items that match the given filter criteria
     *
     * @generated from rpc Genesis.QuotationsResponsesService.FilterItems
     */
    filterItems: {
      name: "FilterItems",
      I: QuotationsResponsesServiceItemsFilterReq,
      O: QuotationsResponsesItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View by ID
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewByID
     */
    viewByID: {
      name: "ViewByID",
      I: Identifier,
      O: QuotationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveStatus,
      O: QuotationsResponsesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: {
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: QuotationsResponsesList,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: QuotationsResponsesServicePaginationReq,
      O: QuotationsResponsesServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.QuotationsResponsesService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: {
      name: "ViewWithPaginationForEntityUUID",
      I: QuotationsResponsesServiceEntityPaginationReq,
      O: QuotationsResponsesServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.QuotationsResponsesService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: QuotationsResponsesServiceSearchAllReq,
      O: QuotationsResponsesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.QuotationsResponsesService.Filter
     */
    filter: {
      name: "Filter",
      I: QuotationsResponsesServiceFilterReq,
      O: QuotationsResponsesList,
      kind: MethodKind.Unary,
    },
    /**
     * Count in status
     *
     * @generated from rpc Genesis.QuotationsResponsesService.CountInStatus
     */
    countInStatus: {
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

