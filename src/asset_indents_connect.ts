// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file asset_indents.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AssetIndent, AssetIndentItem, AssetIndentItemHistoryRequest, AssetIndentItemProspectiveInfoRequest, AssetIndentsItemsList, AssetIndentsList, AssetIndentsServiceCreateRequest, AssetIndentsServiceEntityPaginationReq, AssetIndentsServiceFilterReq, AssetIndentsServiceItemCreateRequest, AssetIndentsServiceItemUpdateRequest, AssetIndentsServicePaginationReq, AssetIndentsServicePaginationResponse, AssetIndentsServiceSearchAllReq, AssetIndentsServiceUpdateRequest } from "./asset_indents_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";

/**
 *
 * Describes the common methods applicable on each asset indent
 *
 * @generated from service Genesis.AssetIndentsService
 */
export const AssetIndentsService = {
  typeName: "Genesis.AssetIndentsService",
  methods: {
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.AssetIndentsService.Create
     */
    create: {
      name: "Create",
      I: AssetIndentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.AssetIndentsService.Draft
     */
    draft: {
      name: "Draft",
      I: AssetIndentsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Update draft
     *
     * @generated from rpc Genesis.AssetIndentsService.DraftUpdate
     */
    draftUpdate: {
      name: "DraftUpdate",
      I: AssetIndentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.AssetIndentsService.SendForVerification
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
     * @generated from rpc Genesis.AssetIndentsService.Verify
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
     * @generated from rpc Genesis.AssetIndentsService.Approve
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
     * @generated from rpc Genesis.AssetIndentsService.SendForRevision
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
     * @generated from rpc Genesis.AssetIndentsService.RevisionUpdate
     */
    revisionUpdate: {
      name: "RevisionUpdate",
      I: AssetIndentsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Halt
     *
     * @generated from rpc Genesis.AssetIndentsService.Halt
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
     * @generated from rpc Genesis.AssetIndentsService.Discard
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
     * @generated from rpc Genesis.AssetIndentsService.Restore
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
     * @generated from rpc Genesis.AssetIndentsService.Complete
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
     * @generated from rpc Genesis.AssetIndentsService.Repeat
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
     * @generated from rpc Genesis.AssetIndentsService.Reopen
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
     * @generated from rpc Genesis.AssetIndentsService.CommentAdd
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
     * @generated from rpc Genesis.AssetIndentsService.SendEmail
     */
    sendEmail: {
      name: "SendEmail",
      I: IdentifierWithEmailAttributes,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Checks if the Asset Indent can be marked as completed
     *
     * @generated from rpc Genesis.AssetIndentsService.IsCompletable
     */
    isCompletable: {
      name: "IsCompletable",
      I: Identifier,
      O: BooleanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Add an item to a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.AddAssetIndentItem
     */
    addAssetIndentItem: {
      name: "AddAssetIndentItem",
      I: AssetIndentsServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Modify an item in a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.ModifyAssetIndentItem
     */
    modifyAssetIndentItem: {
      name: "ModifyAssetIndentItem",
      I: AssetIndentsServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Approve an item in a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.ApproveAssetIndentItem
     */
    approveAssetIndentItem: {
      name: "ApproveAssetIndentItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an item in a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.DeleteAssetIndentItem
     */
    deleteAssetIndentItem: {
      name: "DeleteAssetIndentItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Reorder items in a asset indent
     *
     * @generated from rpc Genesis.AssetIndentsService.ReorderAssetIndentItems
     */
    reorderAssetIndentItems: {
      name: "ReorderAssetIndentItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View Asset Indent Item by ID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAssetIndentItemByID
     */
    viewAssetIndentItemByID: {
      name: "ViewAssetIndentItemByID",
      I: Identifier,
      O: AssetIndentItem,
      kind: MethodKind.Unary,
    },
    /**
     * View approved asset indent items for given asset indent ID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewApprovedAssetIndentItems
     */
    viewApprovedAssetIndentItems: {
      name: "ViewApprovedAssetIndentItems",
      I: IdentifierWithSearchKey,
      O: AssetIndentsItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View unapproved asset indent items for given asset indent ID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewUnapprovedAssetIndentItems
     */
    viewUnapprovedAssetIndentItems: {
      name: "ViewUnapprovedAssetIndentItems",
      I: IdentifierWithSearchKey,
      O: AssetIndentsItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View the history of the asset indent item
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAssetIndentItemHistory
     */
    viewAssetIndentItemHistory: {
      name: "ViewAssetIndentItemHistory",
      I: AssetIndentItemHistoryRequest,
      O: AssetIndentsItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View by ID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewByID
     */
    viewByID: {
      name: "ViewByID",
      I: Identifier,
      O: AssetIndent,
      kind: MethodKind.Unary,
    },
    /**
     * View all
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveStatus,
      O: AssetIndentsList,
      kind: MethodKind.Unary,
    },
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: {
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: AssetIndentsList,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: AssetIndentsServicePaginationReq,
      O: AssetIndentsServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: {
      name: "ViewWithPaginationForEntityUUID",
      I: AssetIndentsServiceEntityPaginationReq,
      O: AssetIndentsServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View prospective families for the given asset indent
     *
     * View prospective asset indent item info for the given family ID and asset indent ID
     * rpc ViewProspectiveAssetIndentItem(AssetIndentItemProspectiveInfoRequest) returns (AssetIndentsServiceItemCreateRequest);
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewProspectiveFamilies
     */
    viewProspectiveFamilies: {
      name: "ViewProspectiveFamilies",
      I: IdentifierWithSearchKey,
      O: FamiliesList,
      kind: MethodKind.Unary,
    },
    /**
     * View the added quantity for the family with the given request payload
     *
     * @generated from rpc Genesis.AssetIndentsService.ViewAddedQuantityForFamily
     */
    viewAddedQuantityForFamily: {
      name: "ViewAddedQuantityForFamily",
      I: AssetIndentItemProspectiveInfoRequest,
      O: QuantityResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.AssetIndentsService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: AssetIndentsServiceSearchAllReq,
      O: AssetIndentsList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.AssetIndentsService.Filter
     */
    filter: {
      name: "Filter",
      I: AssetIndentsServiceFilterReq,
      O: AssetIndentsList,
      kind: MethodKind.Unary,
    },
    /**
     * Count in status
     *
     * @generated from rpc Genesis.AssetIndentsService.CountInStatus
     */
    countInStatus: {
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

