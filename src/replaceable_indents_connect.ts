// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file replaceable_indents.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import ***REMOVED*** ReplaceableIndent, ReplaceableIndentItem, ReplaceableIndentItemHistoryRequest, ReplaceableIndentItemProspectiveInfoRequest, ReplaceableIndentsItemsList, ReplaceableIndentsList, ReplaceableIndentsServiceAutofillRequest, ReplaceableIndentsServiceCreateRequest, ReplaceableIndentsServiceEntityPaginationReq, ReplaceableIndentsServiceFilterReq, ReplaceableIndentsServiceItemCreateRequest, ReplaceableIndentsServiceItemUpdateRequest, ReplaceableIndentsServicePaginationReq, ReplaceableIndentsServicePaginationResponse, ReplaceableIndentsServiceSearchAllReq, ReplaceableIndentsServiceUpdateRequest ***REMOVED*** from "./replaceable_indents_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";

/**
 *
 * Describes the common methods applicable on each replaceable indent
 *
 * @generated from service Genesis.ReplaceableIndentsService
 */
export const ReplaceableIndentsService = ***REMOVED***
  typeName: "Genesis.ReplaceableIndentsService",
  methods: ***REMOVED***
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.Create
     */
    create: ***REMOVED***
      name: "Create",
      I: ReplaceableIndentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.Draft
     */
    draft: ***REMOVED***
      name: "Draft",
      I: ReplaceableIndentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update draft
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.DraftUpdate
     */
    draftUpdate: ***REMOVED***
      name: "DraftUpdate",
      I: ReplaceableIndentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.SendForVerification
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
     * @generated from rpc Genesis.ReplaceableIndentsService.Verify
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
     * @generated from rpc Genesis.ReplaceableIndentsService.Approve
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
     * @generated from rpc Genesis.ReplaceableIndentsService.SendForRevision
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
     * @generated from rpc Genesis.ReplaceableIndentsService.RevisionUpdate
     */
    revisionUpdate: ***REMOVED***
      name: "RevisionUpdate",
      I: ReplaceableIndentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Halt
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.Halt
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
     * @generated from rpc Genesis.ReplaceableIndentsService.Discard
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
     * @generated from rpc Genesis.ReplaceableIndentsService.Restore
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
     * @generated from rpc Genesis.ReplaceableIndentsService.Complete
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
     * @generated from rpc Genesis.ReplaceableIndentsService.Repeat
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
     * @generated from rpc Genesis.ReplaceableIndentsService.Reopen
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
     * @generated from rpc Genesis.ReplaceableIndentsService.CommentAdd
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
     * @generated from rpc Genesis.ReplaceableIndentsService.SendEmail
     */
    sendEmail: ***REMOVED***
      name: "SendEmail",
      I: IdentifierWithEmailAttributes,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Autofill the replaceable indent
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.Autofill
     */
    autofill: ***REMOVED***
      name: "Autofill",
      I: ReplaceableIndentsServiceAutofillRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Checks if the Replaceable Indent can be marked as completed
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.IsCompletable
     */
    isCompletable: ***REMOVED***
      name: "IsCompletable",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add an item to a replaceable indent
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.AddReplaceableIndentItem
     */
    addReplaceableIndentItem: ***REMOVED***
      name: "AddReplaceableIndentItem",
      I: ReplaceableIndentsServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Modify an item in a replaceable indent
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ModifyReplaceableIndentItem
     */
    modifyReplaceableIndentItem: ***REMOVED***
      name: "ModifyReplaceableIndentItem",
      I: ReplaceableIndentsServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Approve an item in a replaceable indent
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ApproveReplaceableIndentItem
     */
    approveReplaceableIndentItem: ***REMOVED***
      name: "ApproveReplaceableIndentItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Delete an item in a replaceable indent
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.DeleteReplaceableIndentItem
     */
    deleteReplaceableIndentItem: ***REMOVED***
      name: "DeleteReplaceableIndentItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Reorder items in a replaceable indent
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ReorderReplaceableIndentItems
     */
    reorderReplaceableIndentItems: ***REMOVED***
      name: "ReorderReplaceableIndentItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View Replaceable Indent Item by ID
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewReplaceableIndentItemByID
     */
    viewReplaceableIndentItemByID: ***REMOVED***
      name: "ViewReplaceableIndentItemByID",
      I: Identifier,
      O: ReplaceableIndentItem,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View approved replaceable indent items for given replaceable indent ID
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewApprovedReplaceableIndentItems
     */
    viewApprovedReplaceableIndentItems: ***REMOVED***
      name: "ViewApprovedReplaceableIndentItems",
      I: IdentifierWithSearchKey,
      O: ReplaceableIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View unapproved replaceable indent items for given replaceable indent ID
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewUnapprovedReplaceableIndentItems
     */
    viewUnapprovedReplaceableIndentItems: ***REMOVED***
      name: "ViewUnapprovedReplaceableIndentItems",
      I: IdentifierWithSearchKey,
      O: ReplaceableIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the history of the replaceable indent item
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewReplaceableIndentItemHistory
     */
    viewReplaceableIndentItemHistory: ***REMOVED***
      name: "ViewReplaceableIndentItemHistory",
      I: ReplaceableIndentItemHistoryRequest,
      O: ReplaceableIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View by ID
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewByID
     */
    viewByID: ***REMOVED***
      name: "ViewByID",
      I: Identifier,
      O: ReplaceableIndent,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewAll
     */
    viewAll: ***REMOVED***
      name: "ViewAll",
      I: ActiveStatus,
      O: ReplaceableIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: ***REMOVED***
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: ReplaceableIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewWithPagination
     */
    viewWithPagination: ***REMOVED***
      name: "ViewWithPagination",
      I: ReplaceableIndentsServicePaginationReq,
      O: ReplaceableIndentsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: ***REMOVED***
      name: "ViewWithPaginationForEntityUUID",
      I: ReplaceableIndentsServiceEntityPaginationReq,
      O: ReplaceableIndentsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View prospective families for the given replaceable indent
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewProspectiveFamilies
     */
    viewProspectiveFamilies: ***REMOVED***
      name: "ViewProspectiveFamilies",
      I: IdentifierWithSearchKey,
      O: FamiliesList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View prospective replaceable indent item info for the given family ID and replaceable indent ID
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewProspectiveReplaceableIndentItem
     */
    viewProspectiveReplaceableIndentItem: ***REMOVED***
      name: "ViewProspectiveReplaceableIndentItem",
      I: ReplaceableIndentItemProspectiveInfoRequest,
      O: ReplaceableIndentsServiceItemCreateRequest,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the added quantity for the family with the given request payload
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.ViewAddedQuantityForFamily
     */
    viewAddedQuantityForFamily: ***REMOVED***
      name: "ViewAddedQuantityForFamily",
      I: ReplaceableIndentItemProspectiveInfoRequest,
      O: QuantityResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.SearchAll
     */
    searchAll: ***REMOVED***
      name: "SearchAll",
      I: ReplaceableIndentsServiceSearchAllReq,
      O: ReplaceableIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.Filter
     */
    filter: ***REMOVED***
      name: "Filter",
      I: ReplaceableIndentsServiceFilterReq,
      O: ReplaceableIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Count in status
     *
     * @generated from rpc Genesis.ReplaceableIndentsService.CountInStatus
     */
    countInStatus: ***REMOVED***
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
***REMOVED***
  ***REMOVED***
***REMOVED*** as const;

