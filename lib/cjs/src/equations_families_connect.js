"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file equations_families.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.EquationsFamiliesService = void 0;
const equations_families_pb_js_1 = require("./equations_families_pb.js");
const base_pb_js_1 = require("./base_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
const families_pb_js_1 = require("./families_pb.js");
/**
 *
 * Describes the common methods applicable on each equation family
 *
 * @generated from service Genesis.EquationsFamiliesService
 */
exports.EquationsFamiliesService = ***REMOVED***
    typeName: "Genesis.EquationsFamiliesService",
    methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Create
         */
        create: ***REMOVED***
            name: "Create",
            I: equations_families_pb_js_1.EquationsFamiliesServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Draft
         */
        draft: ***REMOVED***
            name: "Draft",
            I: equations_families_pb_js_1.EquationsFamiliesServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsFamiliesService.DraftUpdate
         */
        draftUpdate: ***REMOVED***
            name: "DraftUpdate",
            I: equations_families_pb_js_1.EquationsFamiliesServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsFamiliesService.SendForVerification
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
         * @generated from rpc Genesis.EquationsFamiliesService.Verify
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
         * @generated from rpc Genesis.EquationsFamiliesService.Approve
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
         * @generated from rpc Genesis.EquationsFamiliesService.SendForRevision
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
         * @generated from rpc Genesis.EquationsFamiliesService.RevisionUpdate
         */
        revisionUpdate: ***REMOVED***
            name: "RevisionUpdate",
            I: equations_families_pb_js_1.EquationsFamiliesServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Halt
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
         * @generated from rpc Genesis.EquationsFamiliesService.Discard
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
         * @generated from rpc Genesis.EquationsFamiliesService.Restore
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
         * @generated from rpc Genesis.EquationsFamiliesService.Complete
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
         * @generated from rpc Genesis.EquationsFamiliesService.Repeat
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
         * @generated from rpc Genesis.EquationsFamiliesService.Reopen
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
         * @generated from rpc Genesis.EquationsFamiliesService.CommentAdd
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
         * @generated from rpc Genesis.EquationsFamiliesService.Clone
         */
        clone: ***REMOVED***
            name: "Clone",
            I: base_pb_js_1.CloneRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Add an item to a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.AddEquationFamilyItem
         */
        addEquationFamilyItem: ***REMOVED***
            name: "AddEquationFamilyItem",
            I: equations_families_pb_js_1.EquationsFamiliesServiceItemCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Modify an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ModifyEquationFamilyItem
         */
        modifyEquationFamilyItem: ***REMOVED***
            name: "ModifyEquationFamilyItem",
            I: equations_families_pb_js_1.EquationsFamiliesServiceItemUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Approve an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ApproveEquationFamilyItem
         */
        approveEquationFamilyItem: ***REMOVED***
            name: "ApproveEquationFamilyItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Delete an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.DeleteEquationFamilyItem
         */
        deleteEquationFamilyItem: ***REMOVED***
            name: "DeleteEquationFamilyItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Reorder items in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ReorderEquationFamilyItems
         */
        reorderEquationFamilyItems: ***REMOVED***
            name: "ReorderEquationFamilyItems",
            I: base_pb_js_1.ReorderItemsRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View Equation Family Item by ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewEquationFamilyItemByID
         */
        viewEquationFamilyItemByID: ***REMOVED***
            name: "ViewEquationFamilyItemByID",
            I: base_pb_js_1.Identifier,
            O: equations_families_pb_js_1.EquationFamilyItem,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View approved equation family items for given equation family ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewApprovedEquationFamilyItems
         */
        viewApprovedEquationFamilyItems: ***REMOVED***
            name: "ViewApprovedEquationFamilyItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: equations_families_pb_js_1.EquationsFamiliesItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View unapproved equation family items for given equation family ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewUnapprovedEquationFamilyItems
         */
        viewUnapprovedEquationFamilyItems: ***REMOVED***
            name: "ViewUnapprovedEquationFamilyItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: equations_families_pb_js_1.EquationsFamiliesItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the history of the equation family item
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewEquationFamilyItemHistory
         */
        viewEquationFamilyItemHistory: ***REMOVED***
            name: "ViewEquationFamilyItemHistory",
            I: equations_families_pb_js_1.EquationFamilyItemHistoryRequest,
            O: equations_families_pb_js_1.EquationsFamiliesItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewByID
         */
        viewByID: ***REMOVED***
            name: "ViewByID",
            I: base_pb_js_1.Identifier,
            O: equations_families_pb_js_1.EquationFamily,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewAll
         */
        viewAll: ***REMOVED***
            name: "ViewAll",
            I: base_pb_js_1.ActiveStatus,
            O: equations_families_pb_js_1.EquationsFamiliesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewAllForEntityUUID
         */
        viewAllForEntityUUID: ***REMOVED***
            name: "ViewAllForEntityUUID",
            I: base_pb_js_1.IdentifierUUID,
            O: equations_families_pb_js_1.EquationsFamiliesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewWithPagination
         */
        viewWithPagination: ***REMOVED***
            name: "ViewWithPagination",
            I: equations_families_pb_js_1.EquationsFamiliesServicePaginationReq,
            O: equations_families_pb_js_1.EquationsFamiliesServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewWithPaginationForEntityUUID
         */
        viewWithPaginationForEntityUUID: ***REMOVED***
            name: "ViewWithPaginationForEntityUUID",
            I: equations_families_pb_js_1.EquationsFamiliesServiceEntityPaginationReq,
            O: equations_families_pb_js_1.EquationsFamiliesServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewForFamilyID
         */
        viewForFamilyID: ***REMOVED***
            name: "ViewForFamilyID",
            I: base_pb_js_1.Identifier,
            O: equations_families_pb_js_1.EquationFamily,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all selectable families for a family ID represented by Identifier (without cyclical dependencies) and the given search key
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewSelectableFamilies
         */
        viewSelectableFamilies: ***REMOVED***
            name: "ViewSelectableFamilies",
            I: base_pb_js_1.IdentifierWithSearch,
            O: families_pb_js_1.FamiliesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsFamiliesService.SearchAll
         */
        searchAll: ***REMOVED***
            name: "SearchAll",
            I: equations_families_pb_js_1.EquationsFamiliesServiceSearchAllReq,
            O: equations_families_pb_js_1.EquationsFamiliesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Filter
         */
        filter: ***REMOVED***
            name: "Filter",
            I: equations_families_pb_js_1.EquationsFamiliesServiceFilterReq,
            O: equations_families_pb_js_1.EquationsFamiliesList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsFamiliesService.CountInStatus
         */
        countInStatus: ***REMOVED***
            name: "CountInStatus",
            I: base_pb_js_1.CountInSLCStatusRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
***REMOVED***
***REMOVED***;