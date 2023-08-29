import { SkillGroup, SkillGroupItem, SkillGroupItemHistoryRequest, SkillsGroupsItemsList, SkillsGroupsList, SkillsGroupsServiceCreateRequest, SkillsGroupsServiceEntityPaginationReq, SkillsGroupsServiceFilterReq, SkillsGroupsServiceItemCreateRequest, SkillsGroupsServiceItemUpdateRequest, SkillsGroupsServicePaginationReq, SkillsGroupsServicePaginationResponse, SkillsGroupsServiceSearchAllReq, SkillsGroupsServiceUpdateRequest } from "./skills_groups_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each skill group
 *
 * @generated from service Genesis.SkillsGroupsService
 */
export declare const SkillsGroupsService: {
    readonly typeName: "Genesis.SkillsGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.SkillsGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SkillsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.SkillsGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SkillsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.SkillsGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SkillsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.SkillsGroupsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Genesis.SkillsGroupsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Genesis.SkillsGroupsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Genesis.SkillsGroupsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Genesis.SkillsGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SkillsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.SkillsGroupsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Genesis.SkillsGroupsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Genesis.SkillsGroupsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Genesis.SkillsGroupsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Genesis.SkillsGroupsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Genesis.SkillsGroupsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
         *
         * @generated from rpc Genesis.SkillsGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone skill group from an existing skill group (denoted by the identifier)
         *
         * @generated from rpc Genesis.SkillsGroupsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a param to a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.AddSkillGroupItem
         */
        readonly addSkillGroupItem: {
            readonly name: "AddSkillGroupItem";
            readonly I: typeof SkillsGroupsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ModifySkillGroupItem
         */
        readonly modifySkillGroupItem: {
            readonly name: "ModifySkillGroupItem";
            readonly I: typeof SkillsGroupsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ApproveSkillGroupItem
         */
        readonly approveSkillGroupItem: {
            readonly name: "ApproveSkillGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.DeleteSkillGroupItem
         */
        readonly deleteSkillGroupItem: {
            readonly name: "DeleteSkillGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder params in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ReorderSkillGroupItems
         */
        readonly reorderSkillGroupItems: {
            readonly name: "ReorderSkillGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Skill Group Item by ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewSkillGroupItemByID
         */
        readonly viewSkillGroupItemByID: {
            readonly name: "ViewSkillGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroupItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved skill group params for given skill group ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewApprovedSkillGroupItems
         */
        readonly viewApprovedSkillGroupItems: {
            readonly name: "ViewApprovedSkillGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved skill group params for given skill group ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewUnapprovedSkillGroupItems
         */
        readonly viewUnapprovedSkillGroupItems: {
            readonly name: "ViewUnapprovedSkillGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the skill group item
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewSkillGroupItemHistory
         */
        readonly viewSkillGroupItemHistory: {
            readonly name: "ViewSkillGroupItemHistory";
            readonly I: typeof SkillGroupItemHistoryRequest;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SkillsGroupsServicePaginationReq;
            readonly O: typeof SkillsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof SkillsGroupsServiceEntityPaginationReq;
            readonly O: typeof SkillsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest skill group for a role (denoted by the given identifier)
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewForRoleID
         */
        readonly viewForRoleID: {
            readonly name: "ViewForRoleID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.SkillsGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SkillsGroupsServiceSearchAllReq;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.SkillsGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SkillsGroupsServiceFilterReq;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.SkillsGroupsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=skills_groups_connect.d.ts.map