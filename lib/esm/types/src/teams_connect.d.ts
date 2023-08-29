import ***REMOVED*** Team, TeamMember, TeamMemberHistoryRequest, TeamsList, TeamsMembersList, TeamsServiceCreateRequest, TeamsServiceEntityPaginationReq, TeamsServiceFilterReq, TeamsServiceMemberCreateRequest, TeamsServiceMemberUpdateRequest, TeamsServicePaginationReq, TeamsServicePaginationResponse, TeamsServiceSearchAllReq, TeamsServiceUpdateRequest ***REMOVED*** from "./teams_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each team
 *
 * @generated from service Genesis.TeamsService
 */
export declare const TeamsService: ***REMOVED***
    readonly typeName: "Genesis.TeamsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.TeamsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof TeamsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.TeamsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof TeamsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.TeamsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof TeamsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.TeamsService.SendForVerification
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
         * @generated from rpc Genesis.TeamsService.Verify
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
         * @generated from rpc Genesis.TeamsService.Approve
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
         * @generated from rpc Genesis.TeamsService.SendForRevision
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
         * @generated from rpc Genesis.TeamsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof TeamsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.TeamsService.Halt
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
         * @generated from rpc Genesis.TeamsService.Discard
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
         * @generated from rpc Genesis.TeamsService.Restore
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
         * @generated from rpc Genesis.TeamsService.Complete
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
         * @generated from rpc Genesis.TeamsService.Repeat
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
         * @generated from rpc Genesis.TeamsService.Reopen
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
         * @generated from rpc Genesis.TeamsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Clone team from an existing team (denoted by the identifier)
         *
         * @generated from rpc Genesis.TeamsService.Clone
         */
        readonly clone: ***REMOVED***
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add a member to a team
         *
         * @generated from rpc Genesis.TeamsService.AddTeamMember
         */
        readonly addTeamMember: ***REMOVED***
            readonly name: "AddTeamMember";
            readonly I: typeof TeamsServiceMemberCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify a member in a team
         *
         * @generated from rpc Genesis.TeamsService.ModifyTeamMember
         */
        readonly modifyTeamMember: ***REMOVED***
            readonly name: "ModifyTeamMember";
            readonly I: typeof TeamsServiceMemberUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve a member in a team
         *
         * @generated from rpc Genesis.TeamsService.ApproveTeamMember
         */
        readonly approveTeamMember: ***REMOVED***
            readonly name: "ApproveTeamMember";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete a member in a team
         *
         * @generated from rpc Genesis.TeamsService.DeleteTeamMember
         */
        readonly deleteTeamMember: ***REMOVED***
            readonly name: "DeleteTeamMember";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder members in a team
         *
         * @generated from rpc Genesis.TeamsService.ReorderTeamMembers
         */
        readonly reorderTeamMembers: ***REMOVED***
            readonly name: "ReorderTeamMembers";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Team Member by ID
         *
         * @generated from rpc Genesis.TeamsService.ViewTeamMemberByID
         */
        readonly viewTeamMemberByID: ***REMOVED***
            readonly name: "ViewTeamMemberByID";
            readonly I: typeof Identifier;
            readonly O: typeof TeamMember;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved team members for given team ID
         *
         * @generated from rpc Genesis.TeamsService.ViewApprovedTeamMembers
         */
        readonly viewApprovedTeamMembers: ***REMOVED***
            readonly name: "ViewApprovedTeamMembers";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved team members for given team ID
         *
         * @generated from rpc Genesis.TeamsService.ViewUnapprovedTeamMembers
         */
        readonly viewUnapprovedTeamMembers: ***REMOVED***
            readonly name: "ViewUnapprovedTeamMembers";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the team member
         *
         * @generated from rpc Genesis.TeamsService.ViewTeamMemberHistory
         */
        readonly viewTeamMemberHistory: ***REMOVED***
            readonly name: "ViewTeamMemberHistory";
            readonly I: typeof TeamMemberHistoryRequest;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all the teams that the member is part of (and not the team lead)
         *
         * @generated from rpc Genesis.TeamsService.ViewTeamsForMember
         */
        readonly viewTeamsForMember: ***REMOVED***
            readonly name: "ViewTeamsForMember";
            readonly I: typeof Identifier;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.TeamsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Team;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.TeamsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.TeamsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.TeamsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof TeamsServicePaginationReq;
            readonly O: typeof TeamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.TeamsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof TeamsServiceEntityPaginationReq;
            readonly O: typeof TeamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.TeamsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof TeamsServiceSearchAllReq;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.TeamsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof TeamsServiceFilterReq;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.TeamsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=teams_connect.d.ts.map