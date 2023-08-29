// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file asset_indents.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import ***REMOVED*** AssetIndent, AssetIndentItem, AssetIndentItemHistoryRequest, AssetIndentItemProspectiveInfoRequest, AssetIndentsItemsList, AssetIndentsList, AssetIndentsServiceCreateRequest, AssetIndentsServiceEntityPaginationReq, AssetIndentsServiceFilterReq, AssetIndentsServiceItemCreateRequest, AssetIndentsServiceItemUpdateRequest, AssetIndentsServicePaginationReq, AssetIndentsServicePaginationResponse, AssetIndentsServiceSearchAllReq, AssetIndentsServiceUpdateRequest ***REMOVED*** from "./asset_indents_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";

/**
 *
 * Describes the common methods applicable on each asset indent
 *
 * @generated from service Genesis.AssetIndentsService
 */
export const AssetIndentsService = ***REMOVED***
  typeName: "Genesis.AssetIndentsService",
  methods: ***REMOVED***
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.AssetIndentsService.Create
     */
    create: ***REMOVED***
      name: "Create",
      I: AssetIndentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.AssetIndentsService.Draft
     */
    draft: ***REMOVED***
      name: "Draft",
      I: AssetIndentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update draft
     *
     * @generated from rpc Genesis.AssetIndentsService.DraftUpdate
     */
    draftUpdate: ***REMOVED***
      name: "DraftUpdate",
      I: AssetIndentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.AssetIndentsService.SendForVerification
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
     * @generated from rpc Genesis.AssetIndentsService.Verify
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
     * @generated from rpc Genesis.AssetIndentsService.Approve
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
     * @generated from rpc Genesis.AssetIndentsService.SendForRevision
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
     * @generated from rpc Genesis.AssetIndentsService.RevisionUpdate
     */
    revisionUpdate: ***REMOVED***
      name: "RevisionUpdate",
      I: AssetIndentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Halt
     *
     * @generated from rpc Genesis.AssetIndentsService.Halt
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
     * @generated from rpc Genesis.AssetIndentsService.Discard
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
     * @generated from rpc Genesis.AssetIndentsService.Restore
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
     * @generated from rpc Genesis.AssetIndentsService.Complete
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
     * @generated from rpc Genesis.AssetIndentsService.Repeat
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
     * @generated from rpc Genesis.AssetIndentsService.Reopen
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
     * @generated from rpc Genesis.AssetIndentsService.CommentAdd
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
     * @generated from rpc Genesis.AssetIndentsService.SendEmail
     */
    sendEmail: ***REMOVED***
      name: "SendEmail",
      I: IdentifierWithEmailAttributes,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Checks if the Asset Indent can be marked as completed
     *
     * @generated from rpc Genesis.AssetIndentsService.IsCompletable
     */
    isCompletable: ***REMOVED***
      name: "IsCompletable",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add an item to a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.AddAssetIndentItem
     */
    addAssetIndentItem: ***REMOVED***
      name: "AddAssetIndentItem",
      I: AssetIndentsServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Modify an item in a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.ModifyAssetIndentItem
     */
    modifyAssetIndentItem: ***REMOVED***
      name: "ModifyAssetIndentItem",
      I: AssetIndentsServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Approve an item in a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.ApproveAssetIndentItem
     */
    approveAssetIndentItem: ***REMOVED***
      name: "ApproveAssetIndentItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Delete an item in a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.DeleteAssetIndentItem
     */
    deleteAssetIndentItem: ***REMOVED***
      name: "DeleteAssetIndentItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Reorder items in a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.ReorderAssetIndentItems
     */
    reorderAssetIndentItems: ***REMOVED***
      name: "ReorderAssetIndentItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View Asset Indent Item by ID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAssetIndentItemByID
     */
    viewAssetIndentItemByID: ***REMOVED***
      name: "ViewAssetIndentItemByID",
      I: Identifier,
      O: AssetIndentItem,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View approved asset indent items for given asset indent ID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewApprovedAssetIndentItems
     */
    viewApprovedAssetIndentItems: ***REMOVED***
      name: "ViewApprovedAssetIndentItems",
      I: IdentifierWithSearchKey,
      O: AssetIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View unapproved asset indent items for given asset indent ID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewUnapprovedAssetIndentItems
     */
    viewUnapprovedAssetIndentItems: ***REMOVED***
      name: "ViewUnapprovedAssetIndentItems",
      I: IdentifierWithSearchKey,
      O: AssetIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the history of the asset indent item
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAssetIndentItemHistory
     */
    viewAssetIndentItemHistory: ***REMOVED***
      name: "ViewAssetIndentItemHistory",
      I: AssetIndentItemHistoryRequest,
      O: AssetIndentsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View by ID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewByID
     */
    viewByID: ***REMOVED***
      name: "ViewByID",
      I: Identifier,
      O: AssetIndent,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAll
     */
    viewAll: ***REMOVED***
      name: "ViewAll",
      I: ActiveStatus,
      O: AssetIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: ***REMOVED***
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: AssetIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewWithPagination
     */
    viewWithPagination: ***REMOVED***
      name: "ViewWithPagination",
      I: AssetIndentsServicePaginationReq,
      O: AssetIndentsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: ***REMOVED***
      name: "ViewWithPaginationForEntityUUID",
      I: AssetIndentsServiceEntityPaginationReq,
      O: AssetIndentsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View prospective families for the given asset indent
     *
     * View prospective asset indent item info for the given family ID and asset indent ID
     * rpc ViewProspectiveAssetIndentItem(AssetIndentItemProspectiveInfoRequest) returns (AssetIndentsServiceItemCreateRequest);
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewProspectiveFamilies
     */
    viewProspectiveFamilies: ***REMOVED***
      name: "ViewProspectiveFamilies",
      I: IdentifierWithSearchKey,
      O: FamiliesList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the added quantity for the family with the given request payload
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAddedQuantityForFamily
     */
    viewAddedQuantityForFamily: ***REMOVED***
      name: "ViewAddedQuantityForFamily",
      I: AssetIndentItemProspectiveInfoRequest,
      O: QuantityResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.AssetIndentsService.SearchAll
     */
    searchAll: ***REMOVED***
      name: "SearchAll",
      I: AssetIndentsServiceSearchAllReq,
      O: AssetIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.AssetIndentsService.Filter
     */
    filter: ***REMOVED***
      name: "Filter",
      I: AssetIndentsServiceFilterReq,
      O: AssetIndentsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Count in status
     *
     * @generated from rpc Genesis.AssetIndentsService.CountInStatus
     */
    countInStatus: ***REMOVED***
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
***REMOVED***
  ***REMOVED***
***REMOVED*** as const;
