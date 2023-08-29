import ***REMOVED*** SkillGroup, SkillGroupItem, SkillGroupItemHistoryRequest, SkillsGroupsItemsList, SkillsGroupsList, SkillsGroupsServiceCreateRequest, SkillsGroupsServiceEntityPaginationReq, SkillsGroupsServiceFilterReq, SkillsGroupsServiceItemCreateRequest, SkillsGroupsServiceItemUpdateRequest, SkillsGroupsServicePaginationReq, SkillsGroupsServicePaginationResponse, SkillsGroupsServiceSearchAllReq, SkillsGroupsServiceUpdateRequest ***REMOVED*** from "./skills_groups_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each skill group
 *
 * @generated from service Genesis.SkillsGroupsService
 */
export declare const SkillsGroupsService: ***REMOVED***
    readonly typeName: "Genesis.SkillsGroupsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.SkillsGroupsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof SkillsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.SkillsGroupsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof SkillsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.SkillsGroupsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof SkillsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.SkillsGroupsService.SendForVerification
         */
        readonly sendForVerification: ***REMOVED***
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Verify
         *
         * @generated from rpc Genesis.SkillsGroupsService.Verify
         */
        readonly verify: ***REMOVED***
            readonly name: "Verify";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve
         *
         * @generated from rpc Genesis.SkillsGroupsService.Approve
         */
        readonly approve: ***REMOVED***
            readonly name: "Approve";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send For Revision
         *
         * @generated from rpc Genesis.SkillsGroupsService.SendForRevision
         */
        readonly sendForRevision: ***REMOVED***
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update revision
         *
         * @generated from rpc Genesis.SkillsGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof SkillsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.SkillsGroupsService.Halt
         */
        readonly halt: ***REMOVED***
            readonly name: "Halt";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Discard
         *
         * @generated from rpc Genesis.SkillsGroupsService.Discard
         */
        readonly discard: ***REMOVED***
            readonly name: "Discard";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Restore
         *
         * @generated from rpc Genesis.SkillsGroupsService.Restore
         */
        readonly restore: ***REMOVED***
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Complete
         *
         * @generated from rpc Genesis.SkillsGroupsService.Complete
         */
        readonly complete: ***REMOVED***
            readonly name: "Complete";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Repeat
         *
         * @generated from rpc Genesis.SkillsGroupsService.Repeat
         */
        readonly repeat: ***REMOVED***
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reopen
         *
         * @generated from rpc Genesis.SkillsGroupsService.Reopen
         */
        readonly reopen: ***REMOVED***
            readonly name: "Reopen";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
         *
         * @generated from rpc Genesis.SkillsGroupsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Clone skill group from an existing skill group (denoted by the identifier)
         *
         * @generated from rpc Genesis.SkillsGroupsService.Clone
         */
        readonly clone: ***REMOVED***
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add a param to a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.AddSkillGroupItem
         */
        readonly addSkillGroupItem: ***REMOVED***
            readonly name: "AddSkillGroupItem";
            readonly I: typeof SkillsGroupsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ModifySkillGroupItem
         */
        readonly modifySkillGroupItem: ***REMOVED***
            readonly name: "ModifySkillGroupItem";
            readonly I: typeof SkillsGroupsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ApproveSkillGroupItem
         */
        readonly approveSkillGroupItem: ***REMOVED***
            readonly name: "ApproveSkillGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete a param in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.DeleteSkillGroupItem
         */
        readonly deleteSkillGroupItem: ***REMOVED***
            readonly name: "DeleteSkillGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder params in a skill group
         *
         * @generated from rpc Genesis.SkillsGroupsService.ReorderSkillGroupItems
         */
        readonly reorderSkillGroupItems: ***REMOVED***
            readonly name: "ReorderSkillGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Skill Group Item by ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewSkillGroupItemByID
         */
        readonly viewSkillGroupItemByID: ***REMOVED***
            readonly name: "ViewSkillGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroupItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved skill group params for given skill group ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewApprovedSkillGroupItems
         */
        readonly viewApprovedSkillGroupItems: ***REMOVED***
            readonly name: "ViewApprovedSkillGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved skill group params for given skill group ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewUnapprovedSkillGroupItems
         */
        readonly viewUnapprovedSkillGroupItems: ***REMOVED***
            readonly name: "ViewUnapprovedSkillGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the skill group item
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewSkillGroupItemHistory
         */
        readonly viewSkillGroupItemHistory: ***REMOVED***
            readonly name: "ViewSkillGroupItemHistory";
            readonly I: typeof SkillGroupItemHistoryRequest;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroup;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof SkillsGroupsServicePaginationReq;
            readonly O: typeof SkillsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof SkillsGroupsServiceEntityPaginationReq;
            readonly O: typeof SkillsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the latest skill group for a role (denoted by the given identifier)
         *
         * @generated from rpc Genesis.SkillsGroupsService.ViewForRoleID
         */
        readonly viewForRoleID: ***REMOVED***
            readonly name: "ViewForRoleID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroup;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.SkillsGroupsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof SkillsGroupsServiceSearchAllReq;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.SkillsGroupsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof SkillsGroupsServiceFilterReq;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.SkillsGroupsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=skills_groups_connect.d.ts.map