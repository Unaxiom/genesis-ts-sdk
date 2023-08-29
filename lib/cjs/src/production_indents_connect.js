"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file production_indents.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.ProductionIndentsService = void 0;
const production_indents_pb_js_1 = require("./production_indents_pb.js");
const base_pb_js_1 = require("./base_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
const families_pb_js_1 = require("./families_pb.js");
/**
 *
 * Describes the common methods applicable on each production indent
 *
 * @generated from service Genesis.ProductionIndentsService
 */
exports.ProductionIndentsService = ***REMOVED***
    typeName: "Genesis.ProductionIndentsService",
    methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ProductionIndentsService.Create
         */
        create: ***REMOVED***
            name: "Create",
            I: production_indents_pb_js_1.ProductionIndentsServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ProductionIndentsService.Draft
         */
        draft: ***REMOVED***
            name: "Draft",
            I: production_indents_pb_js_1.ProductionIndentsServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ProductionIndentsService.DraftUpdate
         */
        draftUpdate: ***REMOVED***
            name: "DraftUpdate",
            I: production_indents_pb_js_1.ProductionIndentsServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ProductionIndentsService.SendForVerification
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
         * @generated from rpc Genesis.ProductionIndentsService.Verify
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
         * @generated from rpc Genesis.ProductionIndentsService.Approve
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
         * @generated from rpc Genesis.ProductionIndentsService.SendForRevision
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
         * @generated from rpc Genesis.ProductionIndentsService.RevisionUpdate
         */
        revisionUpdate: ***REMOVED***
            name: "RevisionUpdate",
            I: production_indents_pb_js_1.ProductionIndentsServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Halt
         *
         * @generated from rpc Genesis.ProductionIndentsService.Halt
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
         * @generated from rpc Genesis.ProductionIndentsService.Discard
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
         * @generated from rpc Genesis.ProductionIndentsService.Restore
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
         * @generated from rpc Genesis.ProductionIndentsService.Complete
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
         * @generated from rpc Genesis.ProductionIndentsService.Repeat
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
         * @generated from rpc Genesis.ProductionIndentsService.Reopen
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
         * @generated from rpc Genesis.ProductionIndentsService.CommentAdd
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
         * @generated from rpc Genesis.ProductionIndentsService.SendEmail
         */
        sendEmail: ***REMOVED***
            name: "SendEmail",
            I: base_pb_js_1.IdentifierWithEmailAttributes,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Autofill the production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.Autofill
         */
        autofill: ***REMOVED***
            name: "Autofill",
            I: production_indents_pb_js_1.ProductionIndentsServiceAutofillRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Checks if the Production Indent can be marked as completed
         *
         * @generated from rpc Genesis.ProductionIndentsService.IsCompletable
         */
        isCompletable: ***REMOVED***
            name: "IsCompletable",
            I: base_pb_js_1.Identifier,
            O: base_pb_js_1.BooleanResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Add an item to a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.AddProductionIndentItem
         */
        addProductionIndentItem: ***REMOVED***
            name: "AddProductionIndentItem",
            I: production_indents_pb_js_1.ProductionIndentsServiceItemCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Modify an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ModifyProductionIndentItem
         */
        modifyProductionIndentItem: ***REMOVED***
            name: "ModifyProductionIndentItem",
            I: production_indents_pb_js_1.ProductionIndentsServiceItemUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Approve an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ApproveProductionIndentItem
         */
        approveProductionIndentItem: ***REMOVED***
            name: "ApproveProductionIndentItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Delete an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.DeleteProductionIndentItem
         */
        deleteProductionIndentItem: ***REMOVED***
            name: "DeleteProductionIndentItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Reorder items in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ReorderProductionIndentItems
         */
        reorderProductionIndentItems: ***REMOVED***
            name: "ReorderProductionIndentItems",
            I: base_pb_js_1.ReorderItemsRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View Production Indent Item by ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProductionIndentItemByID
         */
        viewProductionIndentItemByID: ***REMOVED***
            name: "ViewProductionIndentItemByID",
            I: base_pb_js_1.Identifier,
            O: production_indents_pb_js_1.ProductionIndentItem,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View approved production indent items for given production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewApprovedProductionIndentItems
         */
        viewApprovedProductionIndentItems: ***REMOVED***
            name: "ViewApprovedProductionIndentItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: production_indents_pb_js_1.ProductionIndentsItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View unapproved production indent items for given production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewUnapprovedProductionIndentItems
         */
        viewUnapprovedProductionIndentItems: ***REMOVED***
            name: "ViewUnapprovedProductionIndentItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: production_indents_pb_js_1.ProductionIndentsItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the history of the production indent item
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProductionIndentItemHistory
         */
        viewProductionIndentItemHistory: ***REMOVED***
            name: "ViewProductionIndentItemHistory",
            I: production_indents_pb_js_1.ProductionIndentItemHistoryRequest,
            O: production_indents_pb_js_1.ProductionIndentsItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewByID
         */
        viewByID: ***REMOVED***
            name: "ViewByID",
            I: base_pb_js_1.Identifier,
            O: production_indents_pb_js_1.ProductionIndent,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAll
         */
        viewAll: ***REMOVED***
            name: "ViewAll",
            I: base_pb_js_1.ActiveStatus,
            O: production_indents_pb_js_1.ProductionIndentsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAllForEntityUUID
         */
        viewAllForEntityUUID: ***REMOVED***
            name: "ViewAllForEntityUUID",
            I: base_pb_js_1.IdentifierUUID,
            O: production_indents_pb_js_1.ProductionIndentsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewWithPagination
         */
        viewWithPagination: ***REMOVED***
            name: "ViewWithPagination",
            I: production_indents_pb_js_1.ProductionIndentsServicePaginationReq,
            O: production_indents_pb_js_1.ProductionIndentsServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewWithPaginationForEntityUUID
         */
        viewWithPaginationForEntityUUID: ***REMOVED***
            name: "ViewWithPaginationForEntityUUID",
            I: production_indents_pb_js_1.ProductionIndentsServiceEntityPaginationReq,
            O: production_indents_pb_js_1.ProductionIndentsServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View prospective families for the given production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProspectiveFamilies
         */
        viewProspectiveFamilies: ***REMOVED***
            name: "ViewProspectiveFamilies",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: families_pb_js_1.FamiliesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View prospective production indent item info for the given family ID and production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProspectiveProductionIndentItem
         */
        viewProspectiveProductionIndentItem: ***REMOVED***
            name: "ViewProspectiveProductionIndentItem",
            I: production_indents_pb_js_1.ProductionIndentItemProspectiveInfoRequest,
            O: production_indents_pb_js_1.ProductionIndentsServiceItemCreateRequest,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAddedQuantityForFamily
         */
        viewAddedQuantityForFamily: ***REMOVED***
            name: "ViewAddedQuantityForFamily",
            I: production_indents_pb_js_1.ProductionIndentItemProspectiveInfoRequest,
            O: base_pb_js_1.QuantityResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ProductionIndentsService.SearchAll
         */
        searchAll: ***REMOVED***
            name: "SearchAll",
            I: production_indents_pb_js_1.ProductionIndentsServiceSearchAllReq,
            O: production_indents_pb_js_1.ProductionIndentsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ProductionIndentsService.Filter
         */
        filter: ***REMOVED***
            name: "Filter",
            I: production_indents_pb_js_1.ProductionIndentsServiceFilterReq,
            O: production_indents_pb_js_1.ProductionIndentsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ProductionIndentsService.CountInStatus
         */
        countInStatus: ***REMOVED***
            name: "CountInStatus",
            I: base_pb_js_1.CountInSLCStatusRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
***REMOVED***
***REMOVED***;