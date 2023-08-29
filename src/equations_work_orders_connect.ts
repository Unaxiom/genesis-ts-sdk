// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file equations_work_orders.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import ***REMOVED*** EquationsWorkOrdersItemsList, EquationsWorkOrdersList, EquationsWorkOrdersServiceCreateRequest, EquationsWorkOrdersServiceEntityPaginationReq, EquationsWorkOrdersServiceFilterReq, EquationsWorkOrdersServiceItemCreateRequest, EquationsWorkOrdersServiceItemUpdateRequest, EquationsWorkOrdersServicePaginationReq, EquationsWorkOrdersServicePaginationResponse, EquationsWorkOrdersServiceSearchAllReq, EquationsWorkOrdersServiceUpdateRequest, EquationWorkOrder, EquationWorkOrderItem, EquationWorkOrderItemHistoryRequest ***REMOVED*** from "./equations_work_orders_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";

/**
 *
 * Describes the common methods applicable on each equation work order
 *
 * @generated from service Genesis.EquationsWorkOrdersService
 */
export const EquationsWorkOrdersService = ***REMOVED***
  typeName: "Genesis.EquationsWorkOrdersService",
  methods: ***REMOVED***
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Create
     */
    create: ***REMOVED***
      name: "Create",
      I: EquationsWorkOrdersServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Draft
     */
    draft: ***REMOVED***
      name: "Draft",
      I: EquationsWorkOrdersServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update draft
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.DraftUpdate
     */
    draftUpdate: ***REMOVED***
      name: "DraftUpdate",
      I: EquationsWorkOrdersServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.SendForVerification
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Verify
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Approve
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.SendForRevision
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.RevisionUpdate
     */
    revisionUpdate: ***REMOVED***
      name: "RevisionUpdate",
      I: EquationsWorkOrdersServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Halt
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Halt
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Discard
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Restore
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Complete
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Repeat
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Reopen
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.CommentAdd
     */
    commentAdd: ***REMOVED***
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Clone equation from an existing equation (denoted by the identifier)
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Clone
     */
    clone: ***REMOVED***
      name: "Clone",
      I: CloneRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add an item to a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.AddEquationWorkOrderItem
     */
    addEquationWorkOrderItem: ***REMOVED***
      name: "AddEquationWorkOrderItem",
      I: EquationsWorkOrdersServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Modify an item in a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ModifyEquationWorkOrderItem
     */
    modifyEquationWorkOrderItem: ***REMOVED***
      name: "ModifyEquationWorkOrderItem",
      I: EquationsWorkOrdersServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Approve an item in a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ApproveEquationWorkOrderItem
     */
    approveEquationWorkOrderItem: ***REMOVED***
      name: "ApproveEquationWorkOrderItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Delete an item in a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.DeleteEquationWorkOrderItem
     */
    deleteEquationWorkOrderItem: ***REMOVED***
      name: "DeleteEquationWorkOrderItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Reorder items in a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ReorderEquationWorkOrderItems
     */
    reorderEquationWorkOrderItems: ***REMOVED***
      name: "ReorderEquationWorkOrderItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View Equation Work Order Item by ID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewEquationWorkOrderItemByID
     */
    viewEquationWorkOrderItemByID: ***REMOVED***
      name: "ViewEquationWorkOrderItemByID",
      I: Identifier,
      O: EquationWorkOrderItem,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View approved equation work order items for given equation work order ID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewApprovedEquationWorkOrderItems
     */
    viewApprovedEquationWorkOrderItems: ***REMOVED***
      name: "ViewApprovedEquationWorkOrderItems",
      I: IdentifierWithSearchKey,
      O: EquationsWorkOrdersItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View unapproved equation work order items for given equation work order ID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewUnapprovedEquationWorkOrderItems
     */
    viewUnapprovedEquationWorkOrderItems: ***REMOVED***
      name: "ViewUnapprovedEquationWorkOrderItems",
      I: IdentifierWithSearchKey,
      O: EquationsWorkOrdersItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the history of the equation work order item
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewEquationWorkOrderItemHistory
     */
    viewEquationWorkOrderItemHistory: ***REMOVED***
      name: "ViewEquationWorkOrderItemHistory",
      I: EquationWorkOrderItemHistoryRequest,
      O: EquationsWorkOrdersItemsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View by ID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewByID
     */
    viewByID: ***REMOVED***
      name: "ViewByID",
      I: Identifier,
      O: EquationWorkOrder,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewAll
     */
    viewAll: ***REMOVED***
      name: "ViewAll",
      I: ActiveStatus,
      O: EquationsWorkOrdersList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: ***REMOVED***
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: EquationsWorkOrdersList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewWithPagination
     */
    viewWithPagination: ***REMOVED***
      name: "ViewWithPagination",
      I: EquationsWorkOrdersServicePaginationReq,
      O: EquationsWorkOrdersServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: ***REMOVED***
      name: "ViewWithPaginationForEntityUUID",
      I: EquationsWorkOrdersServiceEntityPaginationReq,
      O: EquationsWorkOrdersServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View the latest equation for a work order (denoted by the given identifier)
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewForWorkOrderID
     */
    viewForWorkOrderID: ***REMOVED***
      name: "ViewForWorkOrderID",
      I: Identifier,
      O: EquationWorkOrder,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.SearchAll
     */
    searchAll: ***REMOVED***
      name: "SearchAll",
      I: EquationsWorkOrdersServiceSearchAllReq,
      O: EquationsWorkOrdersList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Filter
     */
    filter: ***REMOVED***
      name: "Filter",
      I: EquationsWorkOrdersServiceFilterReq,
      O: EquationsWorkOrdersList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Count in status
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.CountInStatus
     */
    countInStatus: ***REMOVED***
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
***REMOVED***
  ***REMOVED***
***REMOVED*** as const;
