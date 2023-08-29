"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file equations_sales_bundles.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.EquationsSalesBundlesService = void 0;
const equations_sales_bundles_pb_js_1 = require("./equations_sales_bundles_pb.js");
const base_pb_js_1 = require("./base_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 *
 * Describes the common methods applicable on each equation sales bundle
 *
 * @generated from service Genesis.EquationsSalesBundlesService
 */
exports.EquationsSalesBundlesService = ***REMOVED***
    typeName: "Genesis.EquationsSalesBundlesService",
    methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Create
         */
        create: ***REMOVED***
            name: "Create",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Draft
         */
        draft: ***REMOVED***
            name: "Draft",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.DraftUpdate
         */
        draftUpdate: ***REMOVED***
            name: "DraftUpdate",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.SendForVerification
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Verify
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Approve
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.SendForRevision
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.RevisionUpdate
         */
        revisionUpdate: ***REMOVED***
            name: "RevisionUpdate",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Halt
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Discard
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Restore
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Complete
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Repeat
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Reopen
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
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.CommentAdd
         */
        commentAdd: ***REMOVED***
            name: "CommentAdd",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Clone equation from an existing equation (denoted by the identifier)
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Clone
         */
        clone: ***REMOVED***
            name: "Clone",
            I: base_pb_js_1.CloneRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Add an item to a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.AddEquationSalesBundleItem
         */
        addEquationSalesBundleItem: ***REMOVED***
            name: "AddEquationSalesBundleItem",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceItemCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Modify an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ModifyEquationSalesBundleItem
         */
        modifyEquationSalesBundleItem: ***REMOVED***
            name: "ModifyEquationSalesBundleItem",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceItemUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Approve an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ApproveEquationSalesBundleItem
         */
        approveEquationSalesBundleItem: ***REMOVED***
            name: "ApproveEquationSalesBundleItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Delete an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.DeleteEquationSalesBundleItem
         */
        deleteEquationSalesBundleItem: ***REMOVED***
            name: "DeleteEquationSalesBundleItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Reorder items in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ReorderEquationSalesBundleItems
         */
        reorderEquationSalesBundleItems: ***REMOVED***
            name: "ReorderEquationSalesBundleItems",
            I: base_pb_js_1.ReorderItemsRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View Equation Sales Bundle Item by ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewEquationSalesBundleItemByID
         */
        viewEquationSalesBundleItemByID: ***REMOVED***
            name: "ViewEquationSalesBundleItemByID",
            I: base_pb_js_1.Identifier,
            O: equations_sales_bundles_pb_js_1.EquationSalesBundleItem,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View approved equation sales bundle items for given equation sales bundle ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewApprovedEquationSalesBundleItems
         */
        viewApprovedEquationSalesBundleItems: ***REMOVED***
            name: "ViewApprovedEquationSalesBundleItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View unapproved equation sales bundle items for given equation sales bundle ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewUnapprovedEquationSalesBundleItems
         */
        viewUnapprovedEquationSalesBundleItems: ***REMOVED***
            name: "ViewUnapprovedEquationSalesBundleItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the history of the equation sales bundle item
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewEquationSalesBundleItemHistory
         */
        viewEquationSalesBundleItemHistory: ***REMOVED***
            name: "ViewEquationSalesBundleItemHistory",
            I: equations_sales_bundles_pb_js_1.EquationSalesBundleItemHistoryRequest,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewByID
         */
        viewByID: ***REMOVED***
            name: "ViewByID",
            I: base_pb_js_1.Identifier,
            O: equations_sales_bundles_pb_js_1.EquationSalesBundle,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewAll
         */
        viewAll: ***REMOVED***
            name: "ViewAll",
            I: base_pb_js_1.ActiveStatus,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewAllForEntityUUID
         */
        viewAllForEntityUUID: ***REMOVED***
            name: "ViewAllForEntityUUID",
            I: base_pb_js_1.IdentifierUUID,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewWithPagination
         */
        viewWithPagination: ***REMOVED***
            name: "ViewWithPagination",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServicePaginationReq,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewWithPaginationForEntityUUID
         */
        viewWithPaginationForEntityUUID: ***REMOVED***
            name: "ViewWithPaginationForEntityUUID",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceEntityPaginationReq,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewForFamilyID
         */
        viewForFamilyID: ***REMOVED***
            name: "ViewForFamilyID",
            I: base_pb_js_1.Identifier,
            O: equations_sales_bundles_pb_js_1.EquationSalesBundle,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.SearchAll
         */
        searchAll: ***REMOVED***
            name: "SearchAll",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceSearchAllReq,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Filter
         */
        filter: ***REMOVED***
            name: "Filter",
            I: equations_sales_bundles_pb_js_1.EquationsSalesBundlesServiceFilterReq,
            O: equations_sales_bundles_pb_js_1.EquationsSalesBundlesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.CountInStatus
         */
        countInStatus: ***REMOVED***
            name: "CountInStatus",
            I: base_pb_js_1.CountInSLCStatusRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
***REMOVED***
***REMOVED***;