"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file purchases_enquiries.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesEnquiriesService = void 0;
const purchases_enquiries_pb_js_1 = require("./purchases_enquiries_pb.js");
const base_pb_js_1 = require("./base_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 *
 * Describes the common methods applicable on each purchase enquiry
 *
 * @generated from service Genesis.PurchasesEnquiriesService
 */
exports.PurchasesEnquiriesService = {
    typeName: "Genesis.PurchasesEnquiriesService",
    methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Create
         */
        create: {
            name: "Create",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Draft
         */
        draft: {
            name: "Draft",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update draft
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.DraftUpdate
         */
        draftUpdate: {
            name: "DraftUpdate",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.SendForVerification
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Verify
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Approve
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.SendForRevision
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.RevisionUpdate
         */
        revisionUpdate: {
            name: "RevisionUpdate",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Halt
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Halt
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Discard
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Restore
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Complete
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Repeat
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Reopen
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.CommentAdd
         */
        commentAdd: {
            name: "CommentAdd",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Add an item to a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.AddPurchaseEnquiryItem
         */
        addPurchaseEnquiryItem: {
            name: "AddPurchaseEnquiryItem",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceItemCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Modify an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ModifyPurchaseEnquiryItem
         */
        modifyPurchaseEnquiryItem: {
            name: "ModifyPurchaseEnquiryItem",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceItemUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Approve an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ApprovePurchaseEnquiryItem
         */
        approvePurchaseEnquiryItem: {
            name: "ApprovePurchaseEnquiryItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Delete an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.DeletePurchaseEnquiryItem
         */
        deletePurchaseEnquiryItem: {
            name: "DeletePurchaseEnquiryItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Reorder items in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ReorderPurchaseEnquiryItems
         */
        reorderPurchaseEnquiryItems: {
            name: "ReorderPurchaseEnquiryItems",
            I: base_pb_js_1.ReorderItemsRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View purchase enquiry Item by ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewPurchaseEnquiryItemByID
         */
        viewPurchaseEnquiryItemByID: {
            name: "ViewPurchaseEnquiryItemByID",
            I: base_pb_js_1.Identifier,
            O: purchases_enquiries_pb_js_1.PurchaseEnquiryItem,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View approved purchase enquiry items for given purchase enquiry ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewApprovedPurchaseEnquiryItems
         */
        viewApprovedPurchaseEnquiryItems: {
            name: "ViewApprovedPurchaseEnquiryItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesItemsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View unapproved purchase enquiry items for given purchase enquiry ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewUnapprovedPurchaseEnquiryItems
         */
        viewUnapprovedPurchaseEnquiryItems: {
            name: "ViewUnapprovedPurchaseEnquiryItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesItemsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View the history of the purchase enquiry item
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewPurchaseEnquiryItemHistory
         */
        viewPurchaseEnquiryItemHistory: {
            name: "ViewPurchaseEnquiryItemHistory",
            I: purchases_enquiries_pb_js_1.PurchaseEnquiryItemHistoryRequest,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesItemsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View by ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewByID
         */
        viewByID: {
            name: "ViewByID",
            I: base_pb_js_1.Identifier,
            O: purchases_enquiries_pb_js_1.PurchaseEnquiry,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewAll
         */
        viewAll: {
            name: "ViewAll",
            I: base_pb_js_1.ActiveStatus,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewAllForEntityUUID
         */
        viewAllForEntityUUID: {
            name: "ViewAllForEntityUUID",
            I: base_pb_js_1.IdentifierUUID,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewWithPagination
         */
        viewWithPagination: {
            name: "ViewWithPagination",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServicePaginationReq,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewWithPaginationForEntityUUID
         */
        viewWithPaginationForEntityUUID: {
            name: "ViewWithPaginationForEntityUUID",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceEntityPaginationReq,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.SearchAll
         */
        searchAll: {
            name: "SearchAll",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceSearchAllReq,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Filter
         */
        filter: {
            name: "Filter",
            I: purchases_enquiries_pb_js_1.PurchasesEnquiriesServiceFilterReq,
            O: purchases_enquiries_pb_js_1.PurchasesEnquiriesList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Count in status
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.CountInStatus
         */
        countInStatus: {
            name: "CountInStatus",
            I: base_pb_js_1.CountInSLCStatusRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
