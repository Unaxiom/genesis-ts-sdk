"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file skills_groups.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.SkillsGroupsService = void 0;
const skills_groups_pb_js_1 = require("./skills_groups_pb.js");
const base_pb_js_1 = require("./base_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 *
 * Describes the common methods applicable on each skill group
 *
 * @generated from service Genesis.SkillsGroupsService
 */
exports.SkillsGroupsService = ***REMOVED***
    typeName: "Genesis.SkillsGroupsService",
    methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.SkillsGroupsService.Create
         */
        create: ***REMOVED***
            name: "Create",
            I: skills_groups_pb_js_1.SkillsGroupsServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.SkillsGroupsService.Draft
         */
        draft: ***REMOVED***
            name: "Draft",
            I: skills_groups_pb_js_1.SkillsGroupsServiceCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Update draft
         *
         * @generated from rpc Genesis.SkillsGroupsService.DraftUpdate
         */
        draftUpdate: ***REMOVED***
            name: "DraftUpdate",
            I: skills_groups_pb_js_1.SkillsGroupsServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.SkillsGroupsService.SendForVerification
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
         * @generated from rpc Genesis.SkillsGroupsService.Verify
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
         * @generated from rpc Genesis.SkillsGroupsService.Approve
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
         * @generated from rpc Genesis.SkillsGroupsService.SendForRevision
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
         * @generated from rpc Genesis.SkillsGroupsService.RevisionUpdate
         */
        revisionUpdate: ***REMOVED***
            name: "RevisionUpdate",
            I: skills_groups_pb_js_1.SkillsGroupsServiceUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Halt
         *
         * @generated from rpc Genesis.SkillsGroupsService.Halt
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
         * @generated from rpc Genesis.SkillsGroupsService.Discard
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
         * @generated from rpc Genesis.SkillsGroupsService.Restore
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
         * @generated from rpc Genesis.SkillsGroupsService.Complete
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
         * @generated from rpc Genesis.SkillsGroupsService.Repeat
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
         * @generated from rpc Genesis.SkillsGroupsService.Reopen
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
         * @generated from rpc Genesis.SkillsGroupsService.CommentAdd
         */
        commentAdd: ***REMOVED***
            name: "CommentAdd",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Clone skill group from an existing skill group (denoted by the identifier)
         *
         * @generated from rpc Genesis.SkillsGroupsService.Clone
         */
        clone: ***REMOVED***
            name: "Clone",
            I: base_pb_js_1.CloneRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Add a param to a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.AddSkillGroupItem
         */
        addSkillGroupItem: ***REMOVED***
            name: "AddSkillGroupItem",
            I: skills_groups_pb_js_1.SkillsGroupsServiceItemCreateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Modify a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ModifySkillGroupItem
         */
        modifySkillGroupItem: ***REMOVED***
            name: "ModifySkillGroupItem",
            I: skills_groups_pb_js_1.SkillsGroupsServiceItemUpdateRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Approve a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ApproveSkillGroupItem
         */
        approveSkillGroupItem: ***REMOVED***
            name: "ApproveSkillGroupItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Delete a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.DeleteSkillGroupItem
         */
        deleteSkillGroupItem: ***REMOVED***
            name: "DeleteSkillGroupItem",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Reorder params in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ReorderSkillGroupItems
         */
        reorderSkillGroupItems: ***REMOVED***
            name: "ReorderSkillGroupItems",
            I: base_pb_js_1.ReorderItemsRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View Skill Group Item by ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewSkillGroupItemByID
         */
        viewSkillGroupItemByID: ***REMOVED***
            name: "ViewSkillGroupItemByID",
            I: base_pb_js_1.Identifier,
            O: skills_groups_pb_js_1.SkillGroupItem,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View approved skill group params for given skill group ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewApprovedSkillGroupItems
         */
        viewApprovedSkillGroupItems: ***REMOVED***
            name: "ViewApprovedSkillGroupItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: skills_groups_pb_js_1.SkillsGroupsItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View unapproved skill group params for given skill group ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewUnapprovedSkillGroupItems
         */
        viewUnapprovedSkillGroupItems: ***REMOVED***
            name: "ViewUnapprovedSkillGroupItems",
            I: base_pb_js_1.IdentifierWithSearchKey,
            O: skills_groups_pb_js_1.SkillsGroupsItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the history of the skill group item
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewSkillGroupItemHistory
         */
        viewSkillGroupItemHistory: ***REMOVED***
            name: "ViewSkillGroupItemHistory",
            I: skills_groups_pb_js_1.SkillGroupItemHistoryRequest,
            O: skills_groups_pb_js_1.SkillsGroupsItemsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View by ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewByID
         */
        viewByID: ***REMOVED***
            name: "ViewByID",
            I: base_pb_js_1.Identifier,
            O: skills_groups_pb_js_1.SkillGroup,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewAll
         */
        viewAll: ***REMOVED***
            name: "ViewAll",
            I: base_pb_js_1.ActiveStatus,
            O: skills_groups_pb_js_1.SkillsGroupsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewAllForEntityUUID
         */
        viewAllForEntityUUID: ***REMOVED***
            name: "ViewAllForEntityUUID",
            I: base_pb_js_1.IdentifierUUID,
            O: skills_groups_pb_js_1.SkillsGroupsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewWithPagination
         */
        viewWithPagination: ***REMOVED***
            name: "ViewWithPagination",
            I: skills_groups_pb_js_1.SkillsGroupsServicePaginationReq,
            O: skills_groups_pb_js_1.SkillsGroupsServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewWithPaginationForEntityUUID
         */
        viewWithPaginationForEntityUUID: ***REMOVED***
            name: "ViewWithPaginationForEntityUUID",
            I: skills_groups_pb_js_1.SkillsGroupsServiceEntityPaginationReq,
            O: skills_groups_pb_js_1.SkillsGroupsServicePaginationResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View the latest skill group for a role (denoted by the given identifier)
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewForRoleID
         */
        viewForRoleID: ***REMOVED***
            name: "ViewForRoleID",
            I: base_pb_js_1.Identifier,
            O: skills_groups_pb_js_1.SkillGroup,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.SkillsGroupsService.SearchAll
         */
        searchAll: ***REMOVED***
            name: "SearchAll",
            I: skills_groups_pb_js_1.SkillsGroupsServiceSearchAllReq,
            O: skills_groups_pb_js_1.SkillsGroupsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.SkillsGroupsService.Filter
         */
        filter: ***REMOVED***
            name: "Filter",
            I: skills_groups_pb_js_1.SkillsGroupsServiceFilterReq,
            O: skills_groups_pb_js_1.SkillsGroupsList,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
        /**
         * Count in status
         *
         * @generated from rpc Genesis.SkillsGroupsService.CountInStatus
         */
        countInStatus: ***REMOVED***
            name: "CountInStatus",
            I: base_pb_js_1.CountInSLCStatusRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
    ***REMOVED***
***REMOVED***
***REMOVED***;