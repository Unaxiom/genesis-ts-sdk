// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file stock_returns.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { StockReturn, StockReturnItem, StockReturnItemHistoryRequest, StockReturnItemProspectiveInfoRequest, StockReturnsItemsList, StockReturnsList, StockReturnsServiceAlreadyAddedQuantityForSourceRequest, StockReturnsServiceCreateRequest, StockReturnsServiceEntityPaginationReq, StockReturnsServiceFilterReq, StockReturnsServiceItemCreateRequest, StockReturnsServiceItemUpdateRequest, StockReturnsServicePaginationReq, StockReturnsServicePaginationResponse, StockReturnsServiceSearchAllReq, StockReturnsServiceUpdateRequest } from "./stock_returns_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest, SimpleSearchReq } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";

/**
 *
 * Describes the common methods applicable on each stock return
 *
 * @generated from service Genesis.StockReturnsService
 */
export const StockReturnsService = {
  typeName: "Genesis.StockReturnsService",
  methods: {
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.StockReturnsService.Create
     */
    create: {
      name: "Create",
      I: StockReturnsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.StockReturnsService.Draft
     */
    draft: {
      name: "Draft",
      I: StockReturnsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Update draft
     *
     * @generated from rpc Genesis.StockReturnsService.DraftUpdate
     */
    draftUpdate: {
      name: "DraftUpdate",
      I: StockReturnsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.StockReturnsService.SendForVerification
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
     * @generated from rpc Genesis.StockReturnsService.Verify
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
     * @generated from rpc Genesis.StockReturnsService.Approve
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
     * @generated from rpc Genesis.StockReturnsService.SendForRevision
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
     * @generated from rpc Genesis.StockReturnsService.RevisionUpdate
     */
    revisionUpdate: {
      name: "RevisionUpdate",
      I: StockReturnsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Halt
     *
     * @generated from rpc Genesis.StockReturnsService.Halt
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
     * @generated from rpc Genesis.StockReturnsService.Discard
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
     * @generated from rpc Genesis.StockReturnsService.Restore
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
     * @generated from rpc Genesis.StockReturnsService.Complete
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
     * @generated from rpc Genesis.StockReturnsService.Repeat
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
     * @generated from rpc Genesis.StockReturnsService.Reopen
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
     * @generated from rpc Genesis.StockReturnsService.CommentAdd
     */
    commentAdd: {
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send Email
     *
     * @generated from rpc Genesis.StockReturnsService.SendEmail
     */
    sendEmail: {
      name: "SendEmail",
      I: IdentifierWithEmailAttributes,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Checks if the Stock Return can be marked as completed
     *
     * @generated from rpc Genesis.StockReturnsService.IsCompletable
     */
    isCompletable: {
      name: "IsCompletable",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Add an item to a stock return
     *
     * @generated from rpc Genesis.StockReturnsService.AddStockReturnItem
     */
    addStockReturnItem: {
      name: "AddStockReturnItem",
      I: StockReturnsServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Modify an item in a stock return
     *
     * @generated from rpc Genesis.StockReturnsService.ModifyStockReturnItem
     */
    modifyStockReturnItem: {
      name: "ModifyStockReturnItem",
      I: StockReturnsServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Approve an item in a stock return
     *
     * @generated from rpc Genesis.StockReturnsService.ApproveStockReturnItem
     */
    approveStockReturnItem: {
      name: "ApproveStockReturnItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an item in a stock return
     *
     * @generated from rpc Genesis.StockReturnsService.DeleteStockReturnItem
     */
    deleteStockReturnItem: {
      name: "DeleteStockReturnItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Reorder items in a stock return
     *
     * @generated from rpc Genesis.StockReturnsService.ReorderStockReturnItems
     */
    reorderStockReturnItems: {
      name: "ReorderStockReturnItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View Stock Return Item by ID
     *
     * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemByID
     */
    viewStockReturnItemByID: {
      name: "ViewStockReturnItemByID",
      I: Identifier,
      O: StockReturnItem,
      kind: MethodKind.Unary,
    },
    /**
     * View Stock Return Item by Inventory Hash
     *
     * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemByInventoryHash
     */
    viewStockReturnItemByInventoryHash: {
      name: "ViewStockReturnItemByInventoryHash",
      I: SimpleSearchReq,
      O: StockReturnItem,
      kind: MethodKind.Unary,
    },
    /**
     * View approved stock return items for given stock return ID
     *
     * @generated from rpc Genesis.StockReturnsService.ViewApprovedStockReturnItems
     */
    viewApprovedStockReturnItems: {
      name: "ViewApprovedStockReturnItems",
      I: IdentifierWithSearchKey,
      O: StockReturnsItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View unapproved stock return items for given stock return ID
     *
     * @generated from rpc Genesis.StockReturnsService.ViewUnapprovedStockReturnItems
     */
    viewUnapprovedStockReturnItems: {
      name: "ViewUnapprovedStockReturnItems",
      I: IdentifierWithSearchKey,
      O: StockReturnsItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View the history of the stock return item
     *
     * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemHistory
     */
    viewStockReturnItemHistory: {
      name: "ViewStockReturnItemHistory",
      I: StockReturnItemHistoryRequest,
      O: StockReturnsItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View by ID
     *
     * @generated from rpc Genesis.StockReturnsService.ViewByID
     */
    viewByID: {
      name: "ViewByID",
      I: Identifier,
      O: StockReturn,
      kind: MethodKind.Unary,
    },
    /**
     * View all
     *
     * @generated from rpc Genesis.StockReturnsService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveStatus,
      O: StockReturnsList,
      kind: MethodKind.Unary,
    },
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.StockReturnsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: {
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: StockReturnsList,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.StockReturnsService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: StockReturnsServicePaginationReq,
      O: StockReturnsServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.StockReturnsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: {
      name: "ViewWithPaginationForEntityUUID",
      I: StockReturnsServiceEntityPaginationReq,
      O: StockReturnsServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View prospective families for the given stock return
     *
     * @generated from rpc Genesis.StockReturnsService.ViewProspectiveFamilies
     */
    viewProspectiveFamilies: {
      name: "ViewProspectiveFamilies",
      I: IdentifierWithSearchKey,
      O: FamiliesList,
      kind: MethodKind.Unary,
    },
    /**
     * View prospective stock return item info for the given family ID and stock return ID
     *
     * @generated from rpc Genesis.StockReturnsService.ViewProspectiveStockReturnItem
     */
    viewProspectiveStockReturnItem: {
      name: "ViewProspectiveStockReturnItem",
      I: StockReturnItemProspectiveInfoRequest,
      O: StockReturnsServiceItemCreateRequest,
      kind: MethodKind.Unary,
    },
    /**
     * View already added quantities
     *
     * @generated from rpc Genesis.StockReturnsService.ViewAddedFamilyQuantityForSource
     */
    viewAddedFamilyQuantityForSource: {
      name: "ViewAddedFamilyQuantityForSource",
      I: StockReturnsServiceAlreadyAddedQuantityForSourceRequest,
      O: QuantityResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.StockReturnsService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: StockReturnsServiceSearchAllReq,
      O: StockReturnsList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.StockReturnsService.Filter
     */
    filter: {
      name: "Filter",
      I: StockReturnsServiceFilterReq,
      O: StockReturnsList,
      kind: MethodKind.Unary,
    },
    /**
     * Count in status
     *
     * @generated from rpc Genesis.StockReturnsService.CountInStatus
     */
    countInStatus: {
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

