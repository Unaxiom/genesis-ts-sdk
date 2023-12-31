"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file purchases_returns.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesReturnsService = void 0;
const purchases_returns_pb_js_1 = require("./purchases_returns_pb.js");
const base_pb_js_1 = require("./base_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
const families_pb_js_1 = require("./families_pb.js");
/**
 *
 * Describes the common methods applicable on each purchase return
 *
 * @generated from service Genesis.PurchasesReturnsService
 */
exports.PurchasesReturnsService = {
    typeName: "Genesis.PurchasesReturnsService",
    methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Create
         */
        create: {
            name: "Create",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Draft
         */
        draft: {
            name: "Draft",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update draft
         *
         * @generated from rpc Genesis.PurchasesReturnsService.DraftUpdate
         */
        draftUpdate: {
            name: "DraftUpdate",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.PurchasesReturnsService.SendForVerification
         */
        sendForVerification: {
            name: "SendForVerification",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Verify
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Verify
         */
        verify: {
            name: "Verify",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Approve
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Approve
         */
        approve: {
            name: "Approve",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Send For Revision
         *
         * @generated from rpc Genesis.PurchasesReturnsService.SendForRevision
         */
        sendForRevision: {
            name: "SendForRevision",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update revision
         *
         * @generated from rpc Genesis.PurchasesReturnsService.RevisionUpdate
         */
        revisionUpdate: {
            name: "RevisionUpdate",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Halt
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Halt
         */
        halt: {
            name: "Halt",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Discard
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Discard
         */
        discard: {
            name: "Discard",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Restore
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Restore
         */
        restore: {
            name: "Restore",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Complete
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Complete
         */
        complete: {
            name: "Complete",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Repeat
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Repeat
         */
        repeat: {
            name: "Repeat",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Reopen
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Reopen
         */
        reopen: {
            name: "Reopen",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Add comment
         *
         * @generated from rpc Genesis.PurchasesReturnsService.CommentAdd
         */
        commentAdd: {
            name: "CommentAdd",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Send Email
         *
         * @generated from rpc Genesis.PurchasesReturnsService.SendEmail
         */
        sendEmail: {
            name: "SendEmail",
            I: base_pb_js_1.IdentifierWithEmailAttributes,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Checks if the Purchase Return can be marked as completed
         *
         * @generated from rpc Genesis.PurchasesReturnsService.IsCompletable
         */
        isCompletable: {
            name: "IsCompletable",
            I: base_pb_js_1.Identifier,
            O: base_pb_js_1.BooleanResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Add an item to a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.AddPurchaseReturnItem
         */
        addPurchaseReturnItem: {
            name: "AddPurchaseReturnItem",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceItemCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Modify an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ModifyPurchaseReturnItem
         */
        modifyPurchaseReturnItem: {
            name: "ModifyPurchaseReturnItem",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceItemUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Approve an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ApprovePurchaseReturnItem
         */
        approvePurchaseReturnItem: {
            name: "ApprovePurchaseReturnItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Delete an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.DeletePurchaseReturnItem
         */
        deletePurchaseReturnItem: {
            name: "DeletePurchaseReturnItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Reorder items in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ReorderPurchaseReturnItems
         */
        reorderPurchaseReturnItems: {
            name: "ReorderPurchaseReturnItems",
            I: base_pb_js_1.ReorderItemsRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View Purchase Return Item by ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemByID
         */
        viewPurchaseReturnItemByID: {
            name: "ViewPurchaseReturnItemByID",
            I: base_pb_js_1.Identifier,
            O: purchases_returns_pb_js_1.PurchaseReturnItem,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View Purchase Return Item by Inventory Hash
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemByInventoryHash
         */
        viewPurchaseReturnItemByInventoryHash: {
            name: "ViewPurchaseReturnItemByInventoryHash",
            I: base_pb_js_1.SimpleSearchReq,
            O: purchases_returns_pb_js_1.PurchaseReturnItem,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View approved purchase return items for given purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewApprovedPurchaseReturnItems
         */
        viewApprovedPurchaseReturnItems: {
            name: "ViewApprovedPurchaseReturnItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: purchases_returns_pb_js_1.PurchasesReturnsItemsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View unapproved purchase return items for given purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewUnapprovedPurchaseReturnItems
         */
        viewUnapprovedPurchaseReturnItems: {
            name: "ViewUnapprovedPurchaseReturnItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: purchases_returns_pb_js_1.PurchasesReturnsItemsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View the history of the purchase return item
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemHistory
         */
        viewPurchaseReturnItemHistory: {
            name: "ViewPurchaseReturnItemHistory",
            I: purchases_returns_pb_js_1.PurchaseReturnItemHistoryRequest,
            O: purchases_returns_pb_js_1.PurchasesReturnsItemsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View by ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewByID
         */
        viewByID: {
            name: "ViewByID",
            I: base_pb_js_1.Identifier,
            O: purchases_returns_pb_js_1.PurchaseReturn,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAll
         */
        viewAll: {
            name: "ViewAll",
            I: base_pb_js_1.ActiveStatus,
            O: purchases_returns_pb_js_1.PurchasesReturnsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAllForEntityUUID
         */
        viewAllForEntityUUID: {
            name: "ViewAllForEntityUUID",
            I: base_pb_js_1.IdentifierUUID,
            O: purchases_returns_pb_js_1.PurchasesReturnsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewWithPagination
         */
        viewWithPagination: {
            name: "ViewWithPagination",
            I: purchases_returns_pb_js_1.PurchasesReturnsServicePaginationReq,
            O: purchases_returns_pb_js_1.PurchasesReturnsServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewWithPaginationForEntityUUID
         */
        viewWithPaginationForEntityUUID: {
            name: "ViewWithPaginationForEntityUUID",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceEntityPaginationReq,
            O: purchases_returns_pb_js_1.PurchasesReturnsServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View prospective families for the given purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewProspectiveFamilies
         */
        viewProspectiveFamilies: {
            name: "ViewProspectiveFamilies",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: families_pb_js_1.FamiliesList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View prospective purchase return item info for the given family ID and purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewProspectivePurchaseReturnItem
         */
        viewProspectivePurchaseReturnItem: {
            name: "ViewProspectivePurchaseReturnItem",
            I: purchases_returns_pb_js_1.PurchaseReturnItemProspectiveInfoRequest,
            O: purchases_returns_pb_js_1.PurchasesReturnsServiceItemCreateRequest,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Checks if the Purchase Return has been billed
         *
         * @generated from rpc Genesis.PurchasesReturnsService.IsBilled
         */
        isBilled: {
            name: "IsBilled",
            I: base_pb_js_1.Identifier,
            O: base_pb_js_1.BooleanResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View already added quantities
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAddedFamilyQuantityForSource
         */
        viewAddedFamilyQuantityForSource: {
            name: "ViewAddedFamilyQuantityForSource",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest,
            O: base_pb_js_1.DualQuantitiesResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.PurchasesReturnsService.SearchAll
         */
        searchAll: {
            name: "SearchAll",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceSearchAllReq,
            O: purchases_returns_pb_js_1.PurchasesReturnsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Filter
         */
        filter: {
            name: "Filter",
            I: purchases_returns_pb_js_1.PurchasesReturnsServiceFilterReq,
            O: purchases_returns_pb_js_1.PurchasesReturnsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Count in status
         *
         * @generated from rpc Genesis.PurchasesReturnsService.CountInStatus
         */
        countInStatus: {
            name: "CountInStatus",
            I: base_pb_js_1.CountInSLCStatusRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
