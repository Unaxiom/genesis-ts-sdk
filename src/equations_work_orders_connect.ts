// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file equations_work_orders.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { EquationsWorkOrdersItemsList, EquationsWorkOrdersList, EquationsWorkOrdersServiceCreateRequest, EquationsWorkOrdersServiceEntityPaginationReq, EquationsWorkOrdersServiceFilterReq, EquationsWorkOrdersServiceItemCreateRequest, EquationsWorkOrdersServiceItemUpdateRequest, EquationsWorkOrdersServicePaginationReq, EquationsWorkOrdersServicePaginationResponse, EquationsWorkOrdersServiceSearchAllReq, EquationsWorkOrdersServiceUpdateRequest, EquationWorkOrder, EquationWorkOrderItem, EquationWorkOrderItemHistoryRequest } from "./equations_work_orders_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 *
 * Describes the common methods applicable on each equation work order
 *
 * @generated from service Genesis.EquationsWorkOrdersService
 */
export const EquationsWorkOrdersService = {
  typeName: "Genesis.EquationsWorkOrdersService",
  methods: {
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Create
     */
    create: {
      name: "Create",
      I: EquationsWorkOrdersServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Draft
     */
    draft: {
      name: "Draft",
      I: EquationsWorkOrdersServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Update draft
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.DraftUpdate
     */
    draftUpdate: {
      name: "DraftUpdate",
      I: EquationsWorkOrdersServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.SendForVerification
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Verify
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Approve
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.SendForRevision
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.RevisionUpdate
     */
    revisionUpdate: {
      name: "RevisionUpdate",
      I: EquationsWorkOrdersServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Halt
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Halt
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Discard
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Restore
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Complete
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Repeat
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
     * @generated from rpc Genesis.EquationsWorkOrdersService.Reopen
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
     * Send Email
     * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.CommentAdd
     */
    commentAdd: {
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Clone equation from an existing equation (denoted by the identifier)
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Clone
     */
    clone: {
      name: "Clone",
      I: CloneRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Add an item to a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.AddEquationWorkOrderItem
     */
    addEquationWorkOrderItem: {
      name: "AddEquationWorkOrderItem",
      I: EquationsWorkOrdersServiceItemCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Modify an item in a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ModifyEquationWorkOrderItem
     */
    modifyEquationWorkOrderItem: {
      name: "ModifyEquationWorkOrderItem",
      I: EquationsWorkOrdersServiceItemUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Approve an item in a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ApproveEquationWorkOrderItem
     */
    approveEquationWorkOrderItem: {
      name: "ApproveEquationWorkOrderItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an item in a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.DeleteEquationWorkOrderItem
     */
    deleteEquationWorkOrderItem: {
      name: "DeleteEquationWorkOrderItem",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Reorder items in a equation work order
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ReorderEquationWorkOrderItems
     */
    reorderEquationWorkOrderItems: {
      name: "ReorderEquationWorkOrderItems",
      I: ReorderItemsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View Equation Work Order Item by ID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewEquationWorkOrderItemByID
     */
    viewEquationWorkOrderItemByID: {
      name: "ViewEquationWorkOrderItemByID",
      I: Identifier,
      O: EquationWorkOrderItem,
      kind: MethodKind.Unary,
    },
    /**
     * View approved equation work order items for given equation work order ID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewApprovedEquationWorkOrderItems
     */
    viewApprovedEquationWorkOrderItems: {
      name: "ViewApprovedEquationWorkOrderItems",
      I: IdentifierWithSearchKey,
      O: EquationsWorkOrdersItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View unapproved equation work order items for given equation work order ID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewUnapprovedEquationWorkOrderItems
     */
    viewUnapprovedEquationWorkOrderItems: {
      name: "ViewUnapprovedEquationWorkOrderItems",
      I: IdentifierWithSearchKey,
      O: EquationsWorkOrdersItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View the history of the equation work order item
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewEquationWorkOrderItemHistory
     */
    viewEquationWorkOrderItemHistory: {
      name: "ViewEquationWorkOrderItemHistory",
      I: EquationWorkOrderItemHistoryRequest,
      O: EquationsWorkOrdersItemsList,
      kind: MethodKind.Unary,
    },
    /**
     * View by ID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewByID
     */
    viewByID: {
      name: "ViewByID",
      I: Identifier,
      O: EquationWorkOrder,
      kind: MethodKind.Unary,
    },
    /**
     * View all
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveStatus,
      O: EquationsWorkOrdersList,
      kind: MethodKind.Unary,
    },
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: {
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: EquationsWorkOrdersList,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: EquationsWorkOrdersServicePaginationReq,
      O: EquationsWorkOrdersServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: {
      name: "ViewWithPaginationForEntityUUID",
      I: EquationsWorkOrdersServiceEntityPaginationReq,
      O: EquationsWorkOrdersServicePaginationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View the latest equation for a work order (denoted by the given identifier)
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.ViewForWorkOrderID
     */
    viewForWorkOrderID: {
      name: "ViewForWorkOrderID",
      I: Identifier,
      O: EquationWorkOrder,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: EquationsWorkOrdersServiceSearchAllReq,
      O: EquationsWorkOrdersList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.Filter
     */
    filter: {
      name: "Filter",
      I: EquationsWorkOrdersServiceFilterReq,
      O: EquationsWorkOrdersList,
      kind: MethodKind.Unary,
    },
    /**
     * Count in status
     *
     * @generated from rpc Genesis.EquationsWorkOrdersService.CountInStatus
     */
    countInStatus: {
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

