"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file projects.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.ProjectsService = void 0;
const projects_pb_js_1 = require("./projects_pb.js");
const base_pb_js_1 = require("./base_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 *
 * Describes the common methods applicable on each project
 *
 * @generated from service Genesis.ProjectsService
 */
exports.ProjectsService = ***REMOVED***
    typeName: "Genesis.ProjectsService",
    methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ProjectsService.Create
         */
        create: ***REMOVED***
            name: "Create",
            I: projects_pb_js_1.ProjectsServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ProjectsService.Draft
         */
        draft: ***REMOVED***
            name: "Draft",
            I: projects_pb_js_1.ProjectsServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ProjectsService.DraftUpdate
         */
        draftUpdate: ***REMOVED***
            name: "DraftUpdate",
            I: projects_pb_js_1.ProjectsServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ProjectsService.SendForVerification
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
         * @generated from rpc Genesis.ProjectsService.Verify
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
         * @generated from rpc Genesis.ProjectsService.Approve
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
         * @generated from rpc Genesis.ProjectsService.SendForRevision
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
         * @generated from rpc Genesis.ProjectsService.RevisionUpdate
         */
        revisionUpdate: ***REMOVED***
            name: "RevisionUpdate",
            I: projects_pb_js_1.ProjectsServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Halt
         *
         * @generated from rpc Genesis.ProjectsService.Halt
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
         * @generated from rpc Genesis.ProjectsService.Discard
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
         * @generated from rpc Genesis.ProjectsService.Restore
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
         * @generated from rpc Genesis.ProjectsService.Complete
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
         * @generated from rpc Genesis.ProjectsService.Repeat
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
         * @generated from rpc Genesis.ProjectsService.Reopen
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
         * @generated from rpc Genesis.ProjectsService.CommentAdd
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
         * @generated from rpc Genesis.ProjectsService.SendEmail
         */
        sendEmail: ***REMOVED***
            name: "SendEmail",
            I: base_pb_js_1.IdentifierWithEmailAttributes,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ProjectsService.ViewByID
         */
        viewByID: ***REMOVED***
            name: "ViewByID",
            I: base_pb_js_1.Identifier,
            O: projects_pb_js_1.Project,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all
         *
         * @generated from rpc Genesis.ProjectsService.ViewAll
         */
        viewAll: ***REMOVED***
            name: "ViewAll",
            I: base_pb_js_1.ActiveStatus,
            O: projects_pb_js_1.ProjectsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ProjectsService.ViewAllForEntityUUID
         */
        viewAllForEntityUUID: ***REMOVED***
            name: "ViewAllForEntityUUID",
            I: base_pb_js_1.IdentifierUUID,
            O: projects_pb_js_1.ProjectsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ProjectsService.ViewWithPagination
         */
        viewWithPagination: ***REMOVED***
            name: "ViewWithPagination",
            I: projects_pb_js_1.ProjectsServicePaginationReq,
            O: projects_pb_js_1.ProjectsServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ProjectsService.ViewWithPaginationForEntityUUID
         */
        viewWithPaginationForEntityUUID: ***REMOVED***
            name: "ViewWithPaginationForEntityUUID",
            I: projects_pb_js_1.ProjectsServiceEntityPaginationReq,
            O: projects_pb_js_1.ProjectsServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ProjectsService.SearchAll
         */
        searchAll: ***REMOVED***
            name: "SearchAll",
            I: projects_pb_js_1.ProjectsServiceSearchAllReq,
            O: projects_pb_js_1.ProjectsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ProjectsService.Filter
         */
        filter: ***REMOVED***
            name: "Filter",
            I: projects_pb_js_1.ProjectsServiceFilterReq,
            O: projects_pb_js_1.ProjectsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ProjectsService.CountInStatus
         */
        countInStatus: ***REMOVED***
            name: "CountInStatus",
            I: base_pb_js_1.CountInSLCStatusRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
***REMOVED***
***REMOVED***;