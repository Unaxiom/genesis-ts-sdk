import { Team, TeamMember, TeamMemberHistoryRequest, TeamsList, TeamsMembersList, TeamsServiceCreateRequest, TeamsServiceEntityPaginationReq, TeamsServiceFilterReq, TeamsServiceMemberCreateRequest, TeamsServiceMemberUpdateRequest, TeamsServicePaginationReq, TeamsServicePaginationResponse, TeamsServiceSearchAllReq, TeamsServiceUpdateRequest } from "./teams_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each team
 *
 * @generated from service Genesis.TeamsService
 */
export declare const TeamsService: {
    readonly typeName: "Genesis.TeamsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.TeamsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TeamsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.TeamsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof TeamsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.TeamsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof TeamsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.TeamsService.SendForVerification
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
         * @generated from rpc Genesis.TeamsService.Verify
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
         * @generated from rpc Genesis.TeamsService.Approve
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
         * @generated from rpc Genesis.TeamsService.SendForRevision
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
         * @generated from rpc Genesis.TeamsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof TeamsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.TeamsService.Halt
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
         * @generated from rpc Genesis.TeamsService.Discard
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
         * @generated from rpc Genesis.TeamsService.Restore
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
         * @generated from rpc Genesis.TeamsService.Complete
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
         * @generated from rpc Genesis.TeamsService.Repeat
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
         * @generated from rpc Genesis.TeamsService.Reopen
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
         * @generated from rpc Genesis.TeamsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone team from an existing team (denoted by the identifier)
         *
         * @generated from rpc Genesis.TeamsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a member to a team
         *
         * @generated from rpc Genesis.TeamsService.AddTeamMember
         */
        readonly addTeamMember: {
            readonly name: "AddTeamMember";
            readonly I: typeof TeamsServiceMemberCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a member in a team
         *
         * @generated from rpc Genesis.TeamsService.ModifyTeamMember
         */
        readonly modifyTeamMember: {
            readonly name: "ModifyTeamMember";
            readonly I: typeof TeamsServiceMemberUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a member in a team
         *
         * @generated from rpc Genesis.TeamsService.ApproveTeamMember
         */
        readonly approveTeamMember: {
            readonly name: "ApproveTeamMember";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a member in a team
         *
         * @generated from rpc Genesis.TeamsService.DeleteTeamMember
         */
        readonly deleteTeamMember: {
            readonly name: "DeleteTeamMember";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder members in a team
         *
         * @generated from rpc Genesis.TeamsService.ReorderTeamMembers
         */
        readonly reorderTeamMembers: {
            readonly name: "ReorderTeamMembers";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Team Member by ID
         *
         * @generated from rpc Genesis.TeamsService.ViewTeamMemberByID
         */
        readonly viewTeamMemberByID: {
            readonly name: "ViewTeamMemberByID";
            readonly I: typeof Identifier;
            readonly O: typeof TeamMember;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved team members for given team ID
         *
         * @generated from rpc Genesis.TeamsService.ViewApprovedTeamMembers
         */
        readonly viewApprovedTeamMembers: {
            readonly name: "ViewApprovedTeamMembers";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved team members for given team ID
         *
         * @generated from rpc Genesis.TeamsService.ViewUnapprovedTeamMembers
         */
        readonly viewUnapprovedTeamMembers: {
            readonly name: "ViewUnapprovedTeamMembers";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the team member
         *
         * @generated from rpc Genesis.TeamsService.ViewTeamMemberHistory
         */
        readonly viewTeamMemberHistory: {
            readonly name: "ViewTeamMemberHistory";
            readonly I: typeof TeamMemberHistoryRequest;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the teams that the member is part of (and not the team lead)
         *
         * @generated from rpc Genesis.TeamsService.ViewTeamsForMember
         */
        readonly viewTeamsForMember: {
            readonly name: "ViewTeamsForMember";
            readonly I: typeof Identifier;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.TeamsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Team;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.TeamsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.TeamsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.TeamsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof TeamsServicePaginationReq;
            readonly O: typeof TeamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.TeamsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof TeamsServiceEntityPaginationReq;
            readonly O: typeof TeamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.TeamsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof TeamsServiceSearchAllReq;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.TeamsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof TeamsServiceFilterReq;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.TeamsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=teams_connect.d.ts.map