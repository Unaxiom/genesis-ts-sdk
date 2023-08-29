"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file work_orders.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.WorkOrdersService = void 0;
const work_orders_pb_js_1 = require("./work_orders_pb.js");
const base_pb_js_1 = require("./base_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
const families_pb_js_1 = require("./families_pb.js");
/**
 *
 * Describes the common methods applicable on each work order
 *
 * @generated from service Genesis.WorkOrdersService
 */
exports.WorkOrdersService = ***REMOVED***
    typeName: "Genesis.WorkOrdersService",
    methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.WorkOrdersService.Create
         */
        create: ***REMOVED***
            name: "Create",
            I: work_orders_pb_js_1.WorkOrdersServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.WorkOrdersService.Draft
         */
        draft: ***REMOVED***
            name: "Draft",
            I: work_orders_pb_js_1.WorkOrdersServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Update draft
         *
         * @generated from rpc Genesis.WorkOrdersService.DraftUpdate
         */
        draftUpdate: ***REMOVED***
            name: "DraftUpdate",
            I: work_orders_pb_js_1.WorkOrdersServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.WorkOrdersService.SendForVerification
         */
        sendForVerification: ***REMOVED***
            name: "SendForVerification",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Verify
         *
         * @generated from rpc Genesis.WorkOrdersService.Verify
         */
        verify: ***REMOVED***
            name: "Verify",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Approve
         *
         * @generated from rpc Genesis.WorkOrdersService.Approve
         */
        approve: ***REMOVED***
            name: "Approve",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Send For Revision
         *
         * @generated from rpc Genesis.WorkOrdersService.SendForRevision
         */
        sendForRevision: ***REMOVED***
            name: "SendForRevision",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Update revision
         *
         * @generated from rpc Genesis.WorkOrdersService.RevisionUpdate
         */
        revisionUpdate: ***REMOVED***
            name: "RevisionUpdate",
            I: work_orders_pb_js_1.WorkOrdersServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Halt
         *
         * @generated from rpc Genesis.WorkOrdersService.Halt
         */
        halt: ***REMOVED***
            name: "Halt",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Discard
         *
         * @generated from rpc Genesis.WorkOrdersService.Discard
         */
        discard: ***REMOVED***
            name: "Discard",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Restore
         *
         * @generated from rpc Genesis.WorkOrdersService.Restore
         */
        restore: ***REMOVED***
            name: "Restore",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Complete
         *
         * @generated from rpc Genesis.WorkOrdersService.Complete
         */
        complete: ***REMOVED***
            name: "Complete",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Repeat
         *
         * @generated from rpc Genesis.WorkOrdersService.Repeat
         */
        repeat: ***REMOVED***
            name: "Repeat",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Reopen
         *
         * @generated from rpc Genesis.WorkOrdersService.Reopen
         */
        reopen: ***REMOVED***
            name: "Reopen",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Add comment
         *
         * @generated from rpc Genesis.WorkOrdersService.CommentAdd
         */
        commentAdd: ***REMOVED***
            name: "CommentAdd",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Send Email
         *
         * @generated from rpc Genesis.WorkOrdersService.SendEmail
         */
        sendEmail: ***REMOVED***
            name: "SendEmail",
            I: base_pb_js_1.IdentifierWithEmailAttributes,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Autofill the work order
         *
         * @generated from rpc Genesis.WorkOrdersService.Autofill
         */
        autofill: ***REMOVED***
            name: "Autofill",
            I: work_orders_pb_js_1.WorkOrdersServiceAutofillRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Checks if the Work Order can be marked as completed
         *
         * @generated from rpc Genesis.WorkOrdersService.IsCompletable
         */
        isCompletable: ***REMOVED***
            name: "IsCompletable",
            I: base_pb_js_1.Identifier,
            O: base_pb_js_1.BooleanResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Add an item to a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.AddWorkOrderItem
         */
        addWorkOrderItem: ***REMOVED***
            name: "AddWorkOrderItem",
            I: work_orders_pb_js_1.WorkOrdersServiceItemCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Modify an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ModifyWorkOrderItem
         */
        modifyWorkOrderItem: ***REMOVED***
            name: "ModifyWorkOrderItem",
            I: work_orders_pb_js_1.WorkOrdersServiceItemUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Approve an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ApproveWorkOrderItem
         */
        approveWorkOrderItem: ***REMOVED***
            name: "ApproveWorkOrderItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Delete an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.DeleteWorkOrderItem
         */
        deleteWorkOrderItem: ***REMOVED***
            name: "DeleteWorkOrderItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Reorder items in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ReorderWorkOrderItems
         */
        reorderWorkOrderItems: ***REMOVED***
            name: "ReorderWorkOrderItems",
            I: base_pb_js_1.ReorderItemsRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View Work Order Item by ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWorkOrderItemByID
         */
        viewWorkOrderItemByID: ***REMOVED***
            name: "ViewWorkOrderItemByID",
            I: base_pb_js_1.Identifier,
            O: work_orders_pb_js_1.WorkOrderItem,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View approved work order items for given work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewApprovedWorkOrderItems
         */
        viewApprovedWorkOrderItems: ***REMOVED***
            name: "ViewApprovedWorkOrderItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: work_orders_pb_js_1.WorkOrdersItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View unapproved work order items for given work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewUnapprovedWorkOrderItems
         */
        viewUnapprovedWorkOrderItems: ***REMOVED***
            name: "ViewUnapprovedWorkOrderItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: work_orders_pb_js_1.WorkOrdersItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the history of the work order item
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWorkOrderItemHistory
         */
        viewWorkOrderItemHistory: ***REMOVED***
            name: "ViewWorkOrderItemHistory",
            I: work_orders_pb_js_1.WorkOrderItemHistoryRequest,
            O: work_orders_pb_js_1.WorkOrdersItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View by ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewByID
         */
        viewByID: ***REMOVED***
            name: "ViewByID",
            I: base_pb_js_1.Identifier,
            O: work_orders_pb_js_1.WorkOrder,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewAll
         */
        viewAll: ***REMOVED***
            name: "ViewAll",
            I: base_pb_js_1.ActiveStatus,
            O: work_orders_pb_js_1.WorkOrdersList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewAllForEntityUUID
         */
        viewAllForEntityUUID: ***REMOVED***
            name: "ViewAllForEntityUUID",
            I: base_pb_js_1.IdentifierUUID,
            O: work_orders_pb_js_1.WorkOrdersList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWithPagination
         */
        viewWithPagination: ***REMOVED***
            name: "ViewWithPagination",
            I: work_orders_pb_js_1.WorkOrdersServicePaginationReq,
            O: work_orders_pb_js_1.WorkOrdersServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWithPaginationForEntityUUID
         */
        viewWithPaginationForEntityUUID: ***REMOVED***
            name: "ViewWithPaginationForEntityUUID",
            I: work_orders_pb_js_1.WorkOrdersServiceEntityPaginationReq,
            O: work_orders_pb_js_1.WorkOrdersServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View prospective families for the given work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewProspectiveFamilies
         */
        viewProspectiveFamilies: ***REMOVED***
            name: "ViewProspectiveFamilies",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: families_pb_js_1.FamiliesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View prospective work order item info for the given family ID and work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewProspectiveWorkOrderItem
         */
        viewProspectiveWorkOrderItem: ***REMOVED***
            name: "ViewProspectiveWorkOrderItem",
            I: work_orders_pb_js_1.WorkOrderItemProspectiveInfoRequest,
            O: work_orders_pb_js_1.WorkOrdersServiceItemCreateRequest,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.WorkOrdersService.SearchAll
         */
        searchAll: ***REMOVED***
            name: "SearchAll",
            I: work_orders_pb_js_1.WorkOrdersServiceSearchAllReq,
            O: work_orders_pb_js_1.WorkOrdersList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.WorkOrdersService.Filter
         */
        filter: ***REMOVED***
            name: "Filter",
            I: work_orders_pb_js_1.WorkOrdersServiceFilterReq,
            O: work_orders_pb_js_1.WorkOrdersList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Count in status
         *
         * @generated from rpc Genesis.WorkOrdersService.CountInStatus
         */
        countInStatus: ***REMOVED***
            name: "CountInStatus",
            I: base_pb_js_1.CountInSLCStatusRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
***REMOVED***
***REMOVED***;