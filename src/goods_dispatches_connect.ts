// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file goods_dispatches.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GoodsDispatch, GoodsDispatchesItemsList, GoodsDispatchesList, GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest, GoodsDispatchesServiceAutofillRequest, GoodsDispatchesServiceCreateRequest, GoodsDispatchesServiceEntityPaginationReq, GoodsDispatchesServiceFilterReq, GoodsDispatchesServiceItemCreateRequest, GoodsDispatchesServiceItemUpdateRequest, GoodsDispatchesServicePaginationReq, GoodsDispatchesServicePaginationResponse, GoodsDispatchesServiceSearchAllReq, GoodsDispatchesServiceUpdateRequest, GoodsDispatchItem, GoodsDispatchItemHistoryRequest, GoodsDispatchItemProspectiveInfoRequest } from "./goods_dispatches_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";

/**
 *
 * Describes the common methods applicable on each goods dispatch
 *
 * @generated from service Genesis.GoodsDispatchesService
 */
export const GoodsDispatchesService = {
  typeName: "Genesis.GoodsDispatchesService",
  methods: {
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.GoodsDispatchesService.Create
     */
    create: {
      name: "Create",
      I: GoodsDispatchesServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.GoodsDispatchesService.Draft
     */
    draft: {
      name: "Draft",
      I: GoodsDispatchesServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Update draft
     *
     * @generated from rpc Genesis.GoodsDispatchesService.DraftUpdate
     */
    draftUpdate: {
      name: "DraftUpdate",
      I: GoodsDispatchesServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.GoodsDispatchesService.SendForVerification
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
     * @generated from rpc Genesis.GoodsDispatchesService.Verify
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
     * @generated from rpc Genesis.GoodsDispatchesService.Approve
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
     * @generated from rpc Genesis.GoodsDispatchesService.SendForRevision
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
     * @generated from rpc Genesis.GoodsDispatchesService.RevisionUpdate
     */
    revisionUpdate: {
      name: "RevisionUpdate",
      I: GoodsDispatchesServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Halt
     *
     * @generated from rpc Genesis.GoodsDispatchesService.Halt
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
     * @generated from rpc Genesis.GoodsDispatchesService.Discard
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
     * @generated from rpc Genesis.GoodsDispatchesService.Restore
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
     * @generated from rpc Genesis.GoodsDispatchesService.Complete
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
     * @generated from rpc Genesis.GoodsDispatchesService.Repeat
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
     * @generated from rpc Genesis.GoodsDispatchesService.Reopen
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
     * @generated from rpc Genesis.GoodsDispatchesService.CommentAdd
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
     * @generated from rpc Genesis.GoodsDispatchesService.SendEmail
     */
    sendEmail: {
      name: "SendEmail",
      I: IdentifierWithEmailAttributes,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Autofill the goods dispatch
     *
     * @generated from rpc Genesis.GoodsDispatchesService.Autofill
     */
    autofill: {
      name: "Autofill",
      I: GoodsDispatchesServiceAutofillRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Checks if the Goods Dispatch can be marked as completed
     *
     * @generated from rpc Genesis.GoodsDispatchesService.IsCompletable
     */
    isCompletable: {
      name: "IsCompletable",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Add an item to a goods dispatch
     *
     * @generated from rpc Genesis.GoodsDispatchesService.AddGoodsDispatchItem
     */
    addGoodsDispatchItem: {
      name: "AddGoodsDispatchItem",
      I: GoodsDispatchesServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Modify an item in a goods dispatch
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ModifyGoodsDispatchItem
     */
    modifyGoodsDispatchItem: {
      name: "ModifyGoodsDispatchItem",
      I: GoodsDispatchesServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Approve an item in a goods dispatch
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ApproveGoodsDispatchItem
     */
    approveGoodsDispatchItem: {
      name: "ApproveGoodsDispatchItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an item in a goods dispatch
     *
     * @generated from rpc Genesis.GoodsDispatchesService.DeleteGoodsDispatchItem
     */
    deleteGoodsDispatchItem: {
      name: "DeleteGoodsDispatchItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Reorder items in a goods dispatch
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ReorderGoodsDispatchItems
     */
    reorderGoodsDispatchItems: {
      name: "ReorderGoodsDispatchItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View Goods Dispatch Item by ID
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemByID
     */
    viewGoodsDispatchItemByID: {
      name: "ViewGoodsDispatchItemByID",
      I: Identifier,
      O: GoodsDispatchItem,
      kind: MethodKind.Unary,
    },
    /**
     * View Goods Dispatch Item by Inventory Hash
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemByInventoryHash
     */
    viewGoodsDispatchItemByInventoryHash: {
      name: "ViewGoodsDispatchItemByInventoryHash",
      I: SimpleSearchReq,
      O: GoodsDispatchItem,
      kind: MethodKind.Unary,
    },
    /**
     * View approved goods dispatch items for given goods dispatch ID
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewApprovedGoodsDispatchItems
     */
    viewApprovedGoodsDispatchItems: {
      name: "ViewApprovedGoodsDispatchItems",
      I: IdentifierWithSearchKey,
      O: GoodsDispatchesItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View unapproved goods dispatch items for given goods dispatch ID
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewUnapprovedGoodsDispatchItems
     */
    viewUnapprovedGoodsDispatchItems: {
      name: "ViewUnapprovedGoodsDispatchItems",
      I: IdentifierWithSearchKey,
      O: GoodsDispatchesItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View the history of the goods dispatch item
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemHistory
     */
    viewGoodsDispatchItemHistory: {
      name: "ViewGoodsDispatchItemHistory",
      I: GoodsDispatchItemHistoryRequest,
      O: GoodsDispatchesItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View by ID
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewByID
     */
    viewByID: {
      name: "ViewByID",
      I: Identifier,
      O: GoodsDispatch,
      kind: MethodKind.Unary,
    },
    /**
     * View all
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveStatus,
      O: GoodsDispatchesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: {
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: GoodsDispatchesList,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: GoodsDispatchesServicePaginationReq,
      O: GoodsDispatchesServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: {
      name: "ViewWithPaginationForEntityUUID",
      I: GoodsDispatchesServiceEntityPaginationReq,
      O: GoodsDispatchesServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View prospective families for the given goods dispatch
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewProspectiveFamilies
     */
    viewProspectiveFamilies: {
      name: "ViewProspectiveFamilies",
      I: IdentifierWithSearchKey,
      O: FamiliesList,
      kind: MethodKind.Unary,
    },
    /**
     * View prospective goods dispatch item info for the given family ID and goods dispatch ID
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewProspectiveGoodsDispatchItem
     */
    viewProspectiveGoodsDispatchItem: {
      name: "ViewProspectiveGoodsDispatchItem",
      I: GoodsDispatchItemProspectiveInfoRequest,
      O: GoodsDispatchesServiceItemCreateRequest,
      kind: MethodKind.Unary,
    },
    /**
     * View the associated sales invoice ID that is denoted by the identifier in the response for the goods dispatch that is denoted by the identifier in the request
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewAssociatedSalesInvoiceID
     */
    viewAssociatedSalesInvoiceID: {
      name: "ViewAssociatedSalesInvoiceID",
      I: Identifier,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Checks if the Goods Dispatch has been billed
     *
     * @generated from rpc Genesis.GoodsDispatchesService.IsBilled
     */
    isBilled: {
      name: "IsBilled",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View already added quantities
     *
     * @generated from rpc Genesis.GoodsDispatchesService.ViewAddedFamilyQuantityForSource
     */
    viewAddedFamilyQuantityForSource: {
      name: "ViewAddedFamilyQuantityForSource",
      I: GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest,
      O: DualQuantitiesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.GoodsDispatchesService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: GoodsDispatchesServiceSearchAllReq,
      O: GoodsDispatchesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.GoodsDispatchesService.Filter
     */
    filter: {
      name: "Filter",
      I: GoodsDispatchesServiceFilterReq,
      O: GoodsDispatchesList,
      kind: MethodKind.Unary,
    },
    /**
     * Count in status
     *
     * @generated from rpc Genesis.GoodsDispatchesService.CountInStatus
     */
    countInStatus: {
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

