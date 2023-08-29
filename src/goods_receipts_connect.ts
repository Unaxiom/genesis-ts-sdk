// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file goods_receipts.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import ***REMOVED*** GoodsReceipt, GoodsReceiptItem, GoodsReceiptItemHistoryRequest, GoodsReceiptItemProspectiveInfoRequest, GoodsReceiptsItemsList, GoodsReceiptsList, GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest, GoodsReceiptsServiceAutofillRequest, GoodsReceiptsServiceCreateRequest, GoodsReceiptsServiceEntityPaginationReq, GoodsReceiptsServiceFilterReq, GoodsReceiptsServiceItemCreateRequest, GoodsReceiptsServiceItemUpdateRequest, GoodsReceiptsServicePaginationReq, GoodsReceiptsServicePaginationResponse, GoodsReceiptsServiceSearchAllReq, GoodsReceiptsServiceUpdateRequest ***REMOVED*** from "./goods_receipts_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";

/**
 *
 * Describes the common methods applicable on each goods receipt
 *
 * @generated from service Genesis.GoodsReceiptsService
 */
export const GoodsReceiptsService = ***REMOVED***
  typeName: "Genesis.GoodsReceiptsService",
  methods: ***REMOVED***
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.GoodsReceiptsService.Create
     */
    create: ***REMOVED***
      name: "Create",
      I: GoodsReceiptsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.GoodsReceiptsService.Draft
     */
    draft: ***REMOVED***
      name: "Draft",
      I: GoodsReceiptsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update draft
     *
     * @generated from rpc Genesis.GoodsReceiptsService.DraftUpdate
     */
    draftUpdate: ***REMOVED***
      name: "DraftUpdate",
      I: GoodsReceiptsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.GoodsReceiptsService.SendForVerification
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
     * @generated from rpc Genesis.GoodsReceiptsService.Verify
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
     * @generated from rpc Genesis.GoodsReceiptsService.Approve
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
     * @generated from rpc Genesis.GoodsReceiptsService.SendForRevision
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
     * @generated from rpc Genesis.GoodsReceiptsService.RevisionUpdate
     */
    revisionUpdate: ***REMOVED***
      name: "RevisionUpdate",
      I: GoodsReceiptsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Halt
     *
     * @generated from rpc Genesis.GoodsReceiptsService.Halt
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
     * @generated from rpc Genesis.GoodsReceiptsService.Discard
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
     * @generated from rpc Genesis.GoodsReceiptsService.Restore
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
     * @generated from rpc Genesis.GoodsReceiptsService.Complete
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
     * @generated from rpc Genesis.GoodsReceiptsService.Repeat
     */
    repeat: ***REMOVED***
      name: "Repeat",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Reopen
     *
     * @generated from rpc Genesis.GoodsReceiptsService.Reopen
     */
    reopen: ***REMOVED***
      name: "Reopen",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add comment
     *
     * @generated from rpc Genesis.GoodsReceiptsService.CommentAdd
     */
    commentAdd: ***REMOVED***
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send Email
     *
     * @generated from rpc Genesis.GoodsReceiptsService.SendEmail
     */
    sendEmail: ***REMOVED***
      name: "SendEmail",
      I: IdentifierWithEmailAttributes,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Autofill the goods receipt
     *
     * @generated from rpc Genesis.GoodsReceiptsService.Autofill
     */
    autofill: ***REMOVED***
      name: "Autofill",
      I: GoodsReceiptsServiceAutofillRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Checks if the Goods Receipt can be marked as completed
     *
     * @generated from rpc Genesis.GoodsReceiptsService.IsCompletable
     */
    isCompletable: ***REMOVED***
      name: "IsCompletable",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add an item to a goods receipt
     *
     * @generated from rpc Genesis.GoodsReceiptsService.AddGoodsReceiptItem
     */
    addGoodsReceiptItem: ***REMOVED***
      name: "AddGoodsReceiptItem",
      I: GoodsReceiptsServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Modify an item in a goods receipt
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ModifyGoodsReceiptItem
     */
    modifyGoodsReceiptItem: ***REMOVED***
      name: "ModifyGoodsReceiptItem",
      I: GoodsReceiptsServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Approve an item in a goods receipt
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ApproveGoodsReceiptItem
     */
    approveGoodsReceiptItem: ***REMOVED***
      name: "ApproveGoodsReceiptItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Delete an item in a goods receipt
     *
     * @generated from rpc Genesis.GoodsReceiptsService.DeleteGoodsReceiptItem
     */
    deleteGoodsReceiptItem: ***REMOVED***
      name: "DeleteGoodsReceiptItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Reorder items in a goods receipt
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ReorderGoodsReceiptItems
     */
    reorderGoodsReceiptItems: ***REMOVED***
      name: "ReorderGoodsReceiptItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View Goods Receipt Item by ID
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewGoodsReceiptItemByID
     */
    viewGoodsReceiptItemByID: ***REMOVED***
      name: "ViewGoodsReceiptItemByID",
      I: Identifier,
      O: GoodsReceiptItem,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View approved goods receipt items for given goods receipt ID
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewApprovedGoodsReceiptItems
     */
    viewApprovedGoodsReceiptItems: ***REMOVED***
      name: "ViewApprovedGoodsReceiptItems",
      I: IdentifierWithSearchKey,
      O: GoodsReceiptsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View unapproved goods receipt items for given goods receipt ID
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewUnapprovedGoodsReceiptItems
     */
    viewUnapprovedGoodsReceiptItems: ***REMOVED***
      name: "ViewUnapprovedGoodsReceiptItems",
      I: IdentifierWithSearchKey,
      O: GoodsReceiptsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the history of the goods receipt item
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewGoodsReceiptItemHistory
     */
    viewGoodsReceiptItemHistory: ***REMOVED***
      name: "ViewGoodsReceiptItemHistory",
      I: GoodsReceiptItemHistoryRequest,
      O: GoodsReceiptsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View by ID
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewByID
     */
    viewByID: ***REMOVED***
      name: "ViewByID",
      I: Identifier,
      O: GoodsReceipt,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewAll
     */
    viewAll: ***REMOVED***
      name: "ViewAll",
      I: ActiveStatus,
      O: GoodsReceiptsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: ***REMOVED***
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: GoodsReceiptsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewWithPagination
     */
    viewWithPagination: ***REMOVED***
      name: "ViewWithPagination",
      I: GoodsReceiptsServicePaginationReq,
      O: GoodsReceiptsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: ***REMOVED***
      name: "ViewWithPaginationForEntityUUID",
      I: GoodsReceiptsServiceEntityPaginationReq,
      O: GoodsReceiptsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View prospective families for the given goods receipt
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewProspectiveFamilies
     */
    viewProspectiveFamilies: ***REMOVED***
      name: "ViewProspectiveFamilies",
      I: IdentifierWithSearchKey,
      O: FamiliesList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View prospective goods receipt item info for the given family ID and goods receipt ID
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewProspectiveGoodsReceiptItem
     */
    viewProspectiveGoodsReceiptItem: ***REMOVED***
      name: "ViewProspectiveGoodsReceiptItem",
      I: GoodsReceiptItemProspectiveInfoRequest,
      O: GoodsReceiptsServiceItemCreateRequest,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the associated vendor invoice ID that is denoted by the identifier in the response for the goods receipt that is denoted by the identifier in the request
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewAssociatedVendorInvoiceID
     */
    viewAssociatedVendorInvoiceID: ***REMOVED***
      name: "ViewAssociatedVendorInvoiceID",
      I: Identifier,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Checks if the Goods Receipt has been billed
     *
     * @generated from rpc Genesis.GoodsReceiptsService.IsBilled
     */
    isBilled: ***REMOVED***
      name: "IsBilled",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View already added quantities
     *
     * @generated from rpc Genesis.GoodsReceiptsService.ViewAddedFamilyQuantityForSource
     */
    viewAddedFamilyQuantityForSource: ***REMOVED***
      name: "ViewAddedFamilyQuantityForSource",
      I: GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest,
      O: DualQuantitiesResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.GoodsReceiptsService.SearchAll
     */
    searchAll: ***REMOVED***
      name: "SearchAll",
      I: GoodsReceiptsServiceSearchAllReq,
      O: GoodsReceiptsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.GoodsReceiptsService.Filter
     */
    filter: ***REMOVED***
      name: "Filter",
      I: GoodsReceiptsServiceFilterReq,
      O: GoodsReceiptsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Count in status
     *
     * @generated from rpc Genesis.GoodsReceiptsService.CountInStatus
     */
    countInStatus: ***REMOVED***
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
***REMOVED***
  ***REMOVED***
***REMOVED*** as const;
