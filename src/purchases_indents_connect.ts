// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file purchases_indents.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import ***REMOVED*** PurchaseIndent, PurchaseIndentItem, PurchaseIndentItemHistoryRequest, PurchaseIndentItemProspectiveInfoRequest, PurchasesIndentsItemsList, PurchasesIndentsList, PurchasesIndentsServiceAutofillRequest, PurchasesIndentsServiceCreateRequest, PurchasesIndentsServiceEntityPaginationReq, PurchasesIndentsServiceFilterReq, PurchasesIndentsServiceItemCreateRequest, PurchasesIndentsServiceItemUpdateRequest, PurchasesIndentsServiceMultipleItemsCreateRequest, PurchasesIndentsServicePaginationReq, PurchasesIndentsServicePaginationResponse, PurchasesIndentsServiceSearchAllReq, PurchasesIndentsServiceUpdateRequest ***REMOVED*** from "./purchases_indents_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifiersList, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";

/**
 *
 * Describes the common methods applicable on each purchase indent
 *
 * @generated from service Genesis.PurchasesIndentsService
 */
export const PurchasesIndentsService = ***REMOVED***
  typeName: "Genesis.PurchasesIndentsService",
  methods: ***REMOVED***
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.PurchasesIndentsService.Create
     */
    create: ***REMOVED***
      name: "Create",
      I: PurchasesIndentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.PurchasesIndentsService.Draft
     */
    draft: ***REMOVED***
      name: "Draft",
      I: PurchasesIndentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update draft
     *
     * @generated from rpc Genesis.PurchasesIndentsService.DraftUpdate
     */
    draftUpdate: ***REMOVED***
      name: "DraftUpdate",
      I: PurchasesIndentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.PurchasesIndentsService.SendForVerification
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
     * @generated from rpc Genesis.PurchasesIndentsService.Verify
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
     * @generated from rpc Genesis.PurchasesIndentsService.Approve
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
     * @generated from rpc Genesis.PurchasesIndentsService.SendForRevision
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
     * @generated from rpc Genesis.PurchasesIndentsService.RevisionUpdate
     */
    revisionUpdate: ***REMOVED***
      name: "RevisionUpdate",
      I: PurchasesIndentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Halt
     *
     * @generated from rpc Genesis.PurchasesIndentsService.Halt
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
     * @generated from rpc Genesis.PurchasesIndentsService.Discard
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
     * @generated from rpc Genesis.PurchasesIndentsService.Restore
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
     * @generated from rpc Genesis.PurchasesIndentsService.Complete
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
     * @generated from rpc Genesis.PurchasesIndentsService.Repeat
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
     * @generated from rpc Genesis.PurchasesIndentsService.Reopen
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
     * @generated from rpc Genesis.PurchasesIndentsService.CommentAdd
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
     * @generated from rpc Genesis.PurchasesIndentsService.SendEmail
     */
    sendEmail: ***REMOVED***
      name: "SendEmail",
      I: IdentifierWithEmailAttributes,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Autofill the purchase indent
     *
     * @generated from rpc Genesis.PurchasesIndentsService.Autofill
     */
    autofill: ***REMOVED***
      name: "Autofill",
      I: PurchasesIndentsServiceAutofillRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Checks if the Purchase Indent can be marked as completed
     *
     * @generated from rpc Genesis.PurchasesIndentsService.IsCompletable
     */
    isCompletable: ***REMOVED***
      name: "IsCompletable",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add multiple items to a purchase indent
     *
     * @generated from rpc Genesis.PurchasesIndentsService.AddMultiplePurchaseIndentItems
     */
    addMultiplePurchaseIndentItems: ***REMOVED***
      name: "AddMultiplePurchaseIndentItems",
      I: PurchasesIndentsServiceMultipleItemsCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add an item to a purchase indent
     *
     * @generated from rpc Genesis.PurchasesIndentsService.AddPurchaseIndentItem
     */
    addPurchaseIndentItem: ***REMOVED***
      name: "AddPurchaseIndentItem",
      I: PurchasesIndentsServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Modify an item in a purchase indent
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ModifyPurchaseIndentItem
     */
    modifyPurchaseIndentItem: ***REMOVED***
      name: "ModifyPurchaseIndentItem",
      I: PurchasesIndentsServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Approve an item in a purchase indent
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ApprovePurchaseIndentItem
     */
    approvePurchaseIndentItem: ***REMOVED***
      name: "ApprovePurchaseIndentItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Delete an item in a purchase indent
     *
     * @generated from rpc Genesis.PurchasesIndentsService.DeletePurchaseIndentItem
     */
    deletePurchaseIndentItem: ***REMOVED***
      name: "DeletePurchaseIndentItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Reorder items in a purchase indent
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ReorderPurchaseIndentItems
     */
    reorderPurchaseIndentItems: ***REMOVED***
      name: "ReorderPurchaseIndentItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View Purchase Indent Item by ID
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewPurchaseIndentItemByID
     */
    viewPurchaseIndentItemByID: ***REMOVED***
      name: "ViewPurchaseIndentItemByID",
      I: Identifier,
      O: PurchaseIndentItem,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View approved purchase indent items for given purchase indent ID
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewApprovedPurchaseIndentItems
     */
    viewApprovedPurchaseIndentItems: ***REMOVED***
      name: "ViewApprovedPurchaseIndentItems",
      I: IdentifierWithSearchKey,
      O: PurchasesIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View unapproved purchase indent items for given purchase indent ID
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewUnapprovedPurchaseIndentItems
     */
    viewUnapprovedPurchaseIndentItems: ***REMOVED***
      name: "ViewUnapprovedPurchaseIndentItems",
      I: IdentifierWithSearchKey,
      O: PurchasesIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the history of the purchase indent item
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewPurchaseIndentItemHistory
     */
    viewPurchaseIndentItemHistory: ***REMOVED***
      name: "ViewPurchaseIndentItemHistory",
      I: PurchaseIndentItemHistoryRequest,
      O: PurchasesIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View by ID
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewByID
     */
    viewByID: ***REMOVED***
      name: "ViewByID",
      I: Identifier,
      O: PurchaseIndent,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewAll
     */
    viewAll: ***REMOVED***
      name: "ViewAll",
      I: ActiveStatus,
      O: PurchasesIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: ***REMOVED***
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: PurchasesIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewWithPagination
     */
    viewWithPagination: ***REMOVED***
      name: "ViewWithPagination",
      I: PurchasesIndentsServicePaginationReq,
      O: PurchasesIndentsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: ***REMOVED***
      name: "ViewWithPaginationForEntityUUID",
      I: PurchasesIndentsServiceEntityPaginationReq,
      O: PurchasesIndentsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all purchase order IDs that are associated with the given purchase indent ID
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewAssociatedPurchaseOrderIDs
     */
    viewAssociatedPurchaseOrderIDs: ***REMOVED***
      name: "ViewAssociatedPurchaseOrderIDs",
      I: Identifier,
      O: IdentifiersList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View prospective items for the given purchase indent
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewProspectiveFamilies
     */
    viewProspectiveFamilies: ***REMOVED***
      name: "ViewProspectiveFamilies",
      I: IdentifierWithSearchKey,
      O: FamiliesList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View prospective purchase indent item info for the given family ID and purchase indent ID
     *
     * @generated from rpc Genesis.PurchasesIndentsService.ViewProspectivePurchaseIndentItem
     */
    viewProspectivePurchaseIndentItem: ***REMOVED***
      name: "ViewProspectivePurchaseIndentItem",
      I: PurchaseIndentItemProspectiveInfoRequest,
      O: PurchasesIndentsServiceItemCreateRequest,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.PurchasesIndentsService.SearchAll
     */
    searchAll: ***REMOVED***
      name: "SearchAll",
      I: PurchasesIndentsServiceSearchAllReq,
      O: PurchasesIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.PurchasesIndentsService.Filter
     */
    filter: ***REMOVED***
      name: "Filter",
      I: PurchasesIndentsServiceFilterReq,
      O: PurchasesIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Count in status
     *
     * @generated from rpc Genesis.PurchasesIndentsService.CountInStatus
     */
    countInStatus: ***REMOVED***
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
***REMOVED***
  ***REMOVED***
***REMOVED*** as const;
