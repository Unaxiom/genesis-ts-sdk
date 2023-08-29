import ***REMOVED*** Holiday, HolidayShiftGroup, HolidaysList, HolidaysServiceCreateRequest, HolidaysServiceEntityPaginationReq, HolidaysServiceFilterReq, HolidaysServicePaginationReq, HolidaysServicePaginationResponse, HolidaysServiceSearchAllReq, HolidaysServiceShiftGroupCreateRequest, HolidaysServiceShiftGroupUpdateRequest, HolidaysServiceUpdateRequest, HolidaysServiceViewHolidaysOnTimestampRequest, HolidaysShiftsGroupsHistoryRequest, HolidaysShiftsGroupsList ***REMOVED*** from "./holidays_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each shift group
 *
 * @generated from service Genesis.HolidaysService
 */
export declare const HolidaysService: ***REMOVED***
    readonly typeName: "Genesis.HolidaysService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.HolidaysService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof HolidaysServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.HolidaysService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof HolidaysServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.HolidaysService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof HolidaysServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.HolidaysService.SendForVerification
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
         * @generated from rpc Genesis.HolidaysService.Verify
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
         * @generated from rpc Genesis.HolidaysService.Approve
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
         * @generated from rpc Genesis.HolidaysService.SendForRevision
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
         * @generated from rpc Genesis.HolidaysService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof HolidaysServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.HolidaysService.Halt
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
         * @generated from rpc Genesis.HolidaysService.Discard
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
         * @generated from rpc Genesis.HolidaysService.Restore
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
         * @generated from rpc Genesis.HolidaysService.Complete
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
         * @generated from rpc Genesis.HolidaysService.Repeat
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
         * @generated from rpc Genesis.HolidaysService.CommentAdd
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
         * @generated from rpc Genesis.HolidaysService.AddHolidayShiftGroup
         */
        readonly addHolidayShiftGroup: ***REMOVED***
            readonly name: "AddHolidayShiftGroup";
            readonly I: typeof HolidaysServiceShiftGroupCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify a shift in a shift group
         *
         * @generated from rpc Genesis.HolidaysService.ModifyHolidayShiftGroup
         */
        readonly modifyHolidayShiftGroup: ***REMOVED***
            readonly name: "ModifyHolidayShiftGroup";
            readonly I: typeof HolidaysServiceShiftGroupUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve a shift in a shift group
         *
         * @generated from rpc Genesis.HolidaysService.ApproveHolidayShiftGroup
         */
        readonly approveHolidayShiftGroup: ***REMOVED***
            readonly name: "ApproveHolidayShiftGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete a shift in a shift group
         *
         * @generated from rpc Genesis.HolidaysService.DeleteHolidayShiftGroup
         */
        readonly deleteHolidayShiftGroup: ***REMOVED***
            readonly name: "DeleteHolidayShiftGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder shifts in a shift group
         *
         * @generated from rpc Genesis.HolidaysService.ReorderHolidayShiftsGroups
         */
        readonly reorderHolidayShiftsGroups: ***REMOVED***
            readonly name: "ReorderHolidayShiftsGroups";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Holiday Shift Group by ID
         *
         * @generated from rpc Genesis.HolidaysService.ViewHolidayShiftGroupByID
         */
        readonly viewHolidayShiftGroupByID: ***REMOVED***
            readonly name: "ViewHolidayShiftGroupByID";
            readonly I: typeof Identifier;
            readonly O: typeof HolidayShiftGroup;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved holiday shift groups for given shift group ID
         *
         * @generated from rpc Genesis.HolidaysService.ViewApprovedHolidayShiftsGroups
         */
        readonly viewApprovedHolidayShiftsGroups: ***REMOVED***
            readonly name: "ViewApprovedHolidayShiftsGroups";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved holiday shift groups for given shift group ID
         *
         * @generated from rpc Genesis.HolidaysService.ViewUnapprovedHolidayShiftsGroups
         */
        readonly viewUnapprovedHolidayShiftsGroups: ***REMOVED***
            readonly name: "ViewUnapprovedHolidayShiftsGroups";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the shift group shift
         *
         * @generated from rpc Genesis.HolidaysService.ViewHolidayShiftsGroupsHistory
         */
        readonly viewHolidayShiftsGroupsHistory: ***REMOVED***
            readonly name: "ViewHolidayShiftsGroupsHistory";
            readonly I: typeof HolidaysShiftsGroupsHistoryRequest;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.HolidaysService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Holiday;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.HolidaysService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.HolidaysService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.HolidaysService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof HolidaysServicePaginationReq;
            readonly O: typeof HolidaysServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.HolidaysService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof HolidaysServiceEntityPaginationReq;
            readonly O: typeof HolidaysServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all the holidays on the given timestamp
         *
         * @generated from rpc Genesis.HolidaysService.ViewHolidaysOn
         */
        readonly viewHolidaysOn: ***REMOVED***
            readonly name: "ViewHolidaysOn";
            readonly I: typeof HolidaysServiceViewHolidaysOnTimestampRequest;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.HolidaysService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof HolidaysServiceSearchAllReq;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.HolidaysService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof HolidaysServiceFilterReq;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.HolidaysService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=holidays_connect.d.ts.map