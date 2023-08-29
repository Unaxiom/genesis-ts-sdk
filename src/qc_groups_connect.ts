// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file qc_groups.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import ***REMOVED*** QCGroup, QCGroupItem, QCGroupItemHistoryRequest, QCGroupsItemsList, QCGroupsList, QCGroupsServiceCreateRequest, QCGroupsServiceEntityPaginationReq, QCGroupsServiceFilterReq, QCGroupsServiceItemCreateRequest, QCGroupsServiceItemUpdateRequest, QCGroupsServicePaginationReq, QCGroupsServicePaginationResponse, QCGroupsServiceSearchAllReq, QCGroupsServiceUpdateRequest ***REMOVED*** from "./qc_groups_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";

/**
 *
 * Describes the common methods applicable on each qc group
 *
 * @generated from service Genesis.QCGroupsService
 */
export const QCGroupsService = ***REMOVED***
  typeName: "Genesis.QCGroupsService",
  methods: ***REMOVED***
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.QCGroupsService.Create
     */
    create: ***REMOVED***
      name: "Create",
      I: QCGroupsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.QCGroupsService.Draft
     */
    draft: ***REMOVED***
      name: "Draft",
      I: QCGroupsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update draft
     *
     * @generated from rpc Genesis.QCGroupsService.DraftUpdate
     */
    draftUpdate: ***REMOVED***
      name: "DraftUpdate",
      I: QCGroupsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.QCGroupsService.SendForVerification
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
     * @generated from rpc Genesis.QCGroupsService.Verify
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
     * @generated from rpc Genesis.QCGroupsService.Approve
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
     * @generated from rpc Genesis.QCGroupsService.SendForRevision
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
     * @generated from rpc Genesis.QCGroupsService.RevisionUpdate
     */
    revisionUpdate: ***REMOVED***
      name: "RevisionUpdate",
      I: QCGroupsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Halt
     *
     * @generated from rpc Genesis.QCGroupsService.Halt
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
     * @generated from rpc Genesis.QCGroupsService.Discard
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
     * @generated from rpc Genesis.QCGroupsService.Restore
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
     * @generated from rpc Genesis.QCGroupsService.Complete
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
     * @generated from rpc Genesis.QCGroupsService.Repeat
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
     * @generated from rpc Genesis.QCGroupsService.Reopen
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
     * Send Email
     * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
     *
     * @generated from rpc Genesis.QCGroupsService.CommentAdd
     */
    commentAdd: ***REMOVED***
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Clone qc group from an existing qc group (denoted by the identifier)
     *
     * @generated from rpc Genesis.QCGroupsService.Clone
     */
    clone: ***REMOVED***
      name: "Clone",
      I: CloneRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add a param to a qc group
     *
     * @generated from rpc Genesis.QCGroupsService.AddQCGroupItem
     */
    addQCGroupItem: ***REMOVED***
      name: "AddQCGroupItem",
      I: QCGroupsServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Modify a param in a qc group
     *
     * @generated from rpc Genesis.QCGroupsService.ModifyQCGroupItem
     */
    modifyQCGroupItem: ***REMOVED***
      name: "ModifyQCGroupItem",
      I: QCGroupsServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Approve a param in a qc group
     *
     * @generated from rpc Genesis.QCGroupsService.ApproveQCGroupItem
     */
    approveQCGroupItem: ***REMOVED***
      name: "ApproveQCGroupItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Delete a param in a qc group
     *
     * @generated from rpc Genesis.QCGroupsService.DeleteQCGroupItem
     */
    deleteQCGroupItem: ***REMOVED***
      name: "DeleteQCGroupItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Reorder params in a qc group
     *
     * @generated from rpc Genesis.QCGroupsService.ReorderQCGroupItems
     */
    reorderQCGroupItems: ***REMOVED***
      name: "ReorderQCGroupItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View QC Group Item by ID
     *
     * @generated from rpc Genesis.QCGroupsService.ViewQCGroupItemByID
     */
    viewQCGroupItemByID: ***REMOVED***
      name: "ViewQCGroupItemByID",
      I: Identifier,
      O: QCGroupItem,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View approved qc group params for given qc group ID
     *
     * @generated from rpc Genesis.QCGroupsService.ViewApprovedQCGroupItems
     */
    viewApprovedQCGroupItems: ***REMOVED***
      name: "ViewApprovedQCGroupItems",
      I: IdentifierWithSearchKey,
      O: QCGroupsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View unapproved qc group params for given qc group ID
     *
     * @generated from rpc Genesis.QCGroupsService.ViewUnapprovedQCGroupItems
     */
    viewUnapprovedQCGroupItems: ***REMOVED***
      name: "ViewUnapprovedQCGroupItems",
      I: IdentifierWithSearchKey,
      O: QCGroupsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the history of the qc group item
     *
     * @generated from rpc Genesis.QCGroupsService.ViewQCGroupItemHistory
     */
    viewQCGroupItemHistory: ***REMOVED***
      name: "ViewQCGroupItemHistory",
      I: QCGroupItemHistoryRequest,
      O: QCGroupsItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View by ID
     *
     * @generated from rpc Genesis.QCGroupsService.ViewByID
     */
    viewByID: ***REMOVED***
      name: "ViewByID",
      I: Identifier,
      O: QCGroup,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all
     *
     * @generated from rpc Genesis.QCGroupsService.ViewAll
     */
    viewAll: ***REMOVED***
      name: "ViewAll",
      I: ActiveStatus,
      O: QCGroupsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.QCGroupsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: ***REMOVED***
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: QCGroupsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.QCGroupsService.ViewWithPagination
     */
    viewWithPagination: ***REMOVED***
      name: "ViewWithPagination",
      I: QCGroupsServicePaginationReq,
      O: QCGroupsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.QCGroupsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: ***REMOVED***
      name: "ViewWithPaginationForEntityUUID",
      I: QCGroupsServiceEntityPaginationReq,
      O: QCGroupsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.QCGroupsService.SearchAll
     */
    searchAll: ***REMOVED***
      name: "SearchAll",
      I: QCGroupsServiceSearchAllReq,
      O: QCGroupsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.QCGroupsService.Filter
     */
    filter: ***REMOVED***
      name: "Filter",
      I: QCGroupsServiceFilterReq,
      O: QCGroupsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Count in status
     *
     * @generated from rpc Genesis.QCGroupsService.CountInStatus
     */
    countInStatus: ***REMOVED***
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
***REMOVED***
  ***REMOVED***
***REMOVED*** as const;
