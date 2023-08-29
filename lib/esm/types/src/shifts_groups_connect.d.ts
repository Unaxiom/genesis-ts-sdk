import ***REMOVED*** ShiftGroup, ShiftGroupShift, ShiftsGroupsList, ShiftsGroupsServiceCreateRequest, ShiftsGroupsServiceEntityPaginationReq, ShiftsGroupsServiceFilterReq, ShiftsGroupsServicePaginationReq, ShiftsGroupsServicePaginationResponse, ShiftsGroupsServiceSearchAllReq, ShiftsGroupsServiceShiftGroupCreateRequest, ShiftsGroupsServiceShiftGroupUpdateRequest, ShiftsGroupsServiceUpdateRequest, ShiftsGroupsShiftsHistoryRequest, ShiftsGroupsShiftsList ***REMOVED*** from "./shifts_groups_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each shift group
 *
 * @generated from service Genesis.ShiftsGroupsService
 */
export declare const ShiftsGroupsService: ***REMOVED***
    readonly typeName: "Genesis.ShiftsGroupsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ShiftsGroupsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof ShiftsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ShiftsGroupsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof ShiftsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ShiftsGroupsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof ShiftsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ShiftsGroupsService.SendForVerification
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
         * @generated from rpc Genesis.ShiftsGroupsService.Verify
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
         * @generated from rpc Genesis.ShiftsGroupsService.Approve
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
         * @generated from rpc Genesis.ShiftsGroupsService.SendForRevision
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
         * @generated from rpc Genesis.ShiftsGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof ShiftsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.ShiftsGroupsService.Halt
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
         * @generated from rpc Genesis.ShiftsGroupsService.Discard
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
         * @generated from rpc Genesis.ShiftsGroupsService.Restore
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
         * @generated from rpc Genesis.ShiftsGroupsService.Complete
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
         * @generated from rpc Genesis.ShiftsGroupsService.Repeat
         */
        readonly repeat: ***REMOVED***
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (Identifier);
         *
         * @generated from rpc Genesis.ShiftsGroupsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add a shift to a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.AddShiftGroupShift
         */
        readonly addShiftGroupShift: ***REMOVED***
            readonly name: "AddShiftGroupShift";
            readonly I: typeof ShiftsGroupsServiceShiftGroupCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify a shift in a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ModifyShiftGroupShift
         */
        readonly modifyShiftGroupShift: ***REMOVED***
            readonly name: "ModifyShiftGroupShift";
            readonly I: typeof ShiftsGroupsServiceShiftGroupUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve a shift in a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ApproveShiftGroupShift
         */
        readonly approveShiftGroupShift: ***REMOVED***
            readonly name: "ApproveShiftGroupShift";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete a shift in a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.DeleteShiftGroupShift
         */
        readonly deleteShiftGroupShift: ***REMOVED***
            readonly name: "DeleteShiftGroupShift";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder shifts in a shift group
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ReorderShiftGroupShifts
         */
        readonly reorderShiftGroupShifts: ***REMOVED***
            readonly name: "ReorderShiftGroupShifts";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Shift Group Shift by ID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewShiftGroupShiftByID
         */
        readonly viewShiftGroupShiftByID: ***REMOVED***
            readonly name: "ViewShiftGroupShiftByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroupShift;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved shift group shifts for given shift group ID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewApprovedShiftGroupShifts
         */
        readonly viewApprovedShiftGroupShifts: ***REMOVED***
            readonly name: "ViewApprovedShiftGroupShifts";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved shift group shifts for given shift group ID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewUnapprovedShiftGroupShifts
         */
        readonly viewUnapprovedShiftGroupShifts: ***REMOVED***
            readonly name: "ViewUnapprovedShiftGroupShifts";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the shift group shift
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewShiftGroupShiftsHistory
         */
        readonly viewShiftGroupShiftsHistory: ***REMOVED***
            readonly name: "ViewShiftGroupShiftsHistory";
            readonly I: typeof ShiftsGroupsShiftsHistoryRequest;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof ShiftsGroupsServicePaginationReq;
            readonly O: typeof ShiftsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ShiftsGroupsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ShiftsGroupsServiceEntityPaginationReq;
            readonly O: typeof ShiftsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ShiftsGroupsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof ShiftsGroupsServiceSearchAllReq;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ShiftsGroupsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof ShiftsGroupsServiceFilterReq;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ShiftsGroupsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=shifts_groups_connect.d.ts.map