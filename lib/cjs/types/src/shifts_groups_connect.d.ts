import { ShiftGroup, ShiftGroupShift, ShiftsGroupsList, ShiftsGroupsServiceCreateRequest, ShiftsGroupsServiceEntityPaginationReq, ShiftsGroupsServiceFilterReq, ShiftsGroupsServicePaginationReq, ShiftsGroupsServicePaginationResponse, ShiftsGroupsServiceSearchAllReq, ShiftsGroupsServiceShiftGroupCreateRequest, ShiftsGroupsServiceShiftGroupUpdateRequest, ShiftsGroupsServiceUpdateRequest, ShiftsGroupsShiftsHistoryRequest, ShiftsGroupsShiftsList } from "./shifts_groups_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each shift group
 *
 * @generated from service Genesis.ShiftsGroupsService
 */
export declare const ShiftsGroupsService: {
    readonly typeName: "Genesis.ShiftsGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ShiftsGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ShiftsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ShiftsGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ShiftsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ShiftsGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ShiftsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ShiftsGroupsService.SendForVerification
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
         * @generated from rpc Genesis.ShiftsGroupsService.Verify
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
         * @generated from rpc Genesis.ShiftsGroupsService.Approve
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
         * @generated from rpc Genesis.ShiftsGroupsService.SendForRevision
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
         * @generated from rpc Genesis.ShiftsGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ShiftsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.ShiftsGroupsService.Halt
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
         * @generated from rpc Genesis.ShiftsGroupsService.Discard
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
         * @generated from rpc Genesis.ShiftsGroupsService.Restore
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
         * @generated from rpc Genesis.ShiftsGroupsService.Complete
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
         * @generated from rpc Genesis.ShiftsGroupsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (Identifier);
         *
         * @generated from rpc Genesis.ShiftsGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a shift to a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.AddShiftGroupShift
         */
        readonly addShiftGroupShift: {
            readonly name: "AddShiftGroupShift";
            readonly I: typeof ShiftsGroupsServiceShiftGroupCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a shift in a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ModifyShiftGroupShift
         */
        readonly modifyShiftGroupShift: {
            readonly name: "ModifyShiftGroupShift";
            readonly I: typeof ShiftsGroupsServiceShiftGroupUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a shift in a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ApproveShiftGroupShift
         */
        readonly approveShiftGroupShift: {
            readonly name: "ApproveShiftGroupShift";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a shift in a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.DeleteShiftGroupShift
         */
        readonly deleteShiftGroupShift: {
            readonly name: "DeleteShiftGroupShift";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder shifts in a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ReorderShiftGroupShifts
         */
        readonly reorderShiftGroupShifts: {
            readonly name: "ReorderShiftGroupShifts";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Shift Group Shift by ID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewShiftGroupShiftByID
         */
        readonly viewShiftGroupShiftByID: {
            readonly name: "ViewShiftGroupShiftByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroupShift;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved shift group shifts for given shift group ID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewApprovedShiftGroupShifts
         */
        readonly viewApprovedShiftGroupShifts: {
            readonly name: "ViewApprovedShiftGroupShifts";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved shift group shifts for given shift group ID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewUnapprovedShiftGroupShifts
         */
        readonly viewUnapprovedShiftGroupShifts: {
            readonly name: "ViewUnapprovedShiftGroupShifts";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the shift group shift
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewShiftGroupShiftsHistory
         */
        readonly viewShiftGroupShiftsHistory: {
            readonly name: "ViewShiftGroupShiftsHistory";
            readonly I: typeof ShiftsGroupsShiftsHistoryRequest;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ShiftsGroupsServicePaginationReq;
            readonly O: typeof ShiftsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ShiftsGroupsServiceEntityPaginationReq;
            readonly O: typeof ShiftsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ShiftsGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ShiftsGroupsServiceSearchAllReq;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ShiftsGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ShiftsGroupsServiceFilterReq;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ShiftsGroupsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=shifts_groups_connect.d.ts.map