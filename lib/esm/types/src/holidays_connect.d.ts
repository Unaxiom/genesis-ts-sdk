import { Holiday, HolidayShiftGroup, HolidaysList, HolidaysServiceCreateRequest, HolidaysServiceEntityPaginationReq, HolidaysServiceFilterReq, HolidaysServicePaginationReq, HolidaysServicePaginationResponse, HolidaysServiceSearchAllReq, HolidaysServiceShiftGroupCreateRequest, HolidaysServiceShiftGroupUpdateRequest, HolidaysServiceUpdateRequest, HolidaysServiceViewHolidaysOnTimestampRequest, HolidaysShiftsGroupsHistoryRequest, HolidaysShiftsGroupsList } from "./holidays_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each shift group
 *
 * @generated from service Genesis.HolidaysService
 */
export declare const HolidaysService: {
    readonly typeName: "Genesis.HolidaysService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.HolidaysService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof HolidaysServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.HolidaysService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof HolidaysServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.HolidaysService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof HolidaysServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.HolidaysService.SendForVerification
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
         * @generated from rpc Genesis.HolidaysService.Verify
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
         * @generated from rpc Genesis.HolidaysService.Approve
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
         * @generated from rpc Genesis.HolidaysService.SendForRevision
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
         * @generated from rpc Genesis.HolidaysService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof HolidaysServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.HolidaysService.Halt
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
         * @generated from rpc Genesis.HolidaysService.Discard
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
         * @generated from rpc Genesis.HolidaysService.Restore
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
         * @generated from rpc Genesis.HolidaysService.Complete
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
         * @generated from rpc Genesis.HolidaysService.Repeat
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
         * @generated from rpc Genesis.HolidaysService.CommentAdd
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
         * @generated from rpc Genesis.HolidaysService.AddHolidayShiftGroup
         */
        readonly addHolidayShiftGroup: {
            readonly name: "AddHolidayShiftGroup";
            readonly I: typeof HolidaysServiceShiftGroupCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a shift in a shift group
         *
         * @generated from rpc Genesis.HolidaysService.ModifyHolidayShiftGroup
         */
        readonly modifyHolidayShiftGroup: {
            readonly name: "ModifyHolidayShiftGroup";
            readonly I: typeof HolidaysServiceShiftGroupUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a shift in a shift group
         *
         * @generated from rpc Genesis.HolidaysService.ApproveHolidayShiftGroup
         */
        readonly approveHolidayShiftGroup: {
            readonly name: "ApproveHolidayShiftGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a shift in a shift group
         *
         * @generated from rpc Genesis.HolidaysService.DeleteHolidayShiftGroup
         */
        readonly deleteHolidayShiftGroup: {
            readonly name: "DeleteHolidayShiftGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder shifts in a shift group
         *
         * @generated from rpc Genesis.HolidaysService.ReorderHolidayShiftsGroups
         */
        readonly reorderHolidayShiftsGroups: {
            readonly name: "ReorderHolidayShiftsGroups";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Holiday Shift Group by ID
         *
         * @generated from rpc Genesis.HolidaysService.ViewHolidayShiftGroupByID
         */
        readonly viewHolidayShiftGroupByID: {
            readonly name: "ViewHolidayShiftGroupByID";
            readonly I: typeof Identifier;
            readonly O: typeof HolidayShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved holiday shift groups for given shift group ID
         *
         * @generated from rpc Genesis.HolidaysService.ViewApprovedHolidayShiftsGroups
         */
        readonly viewApprovedHolidayShiftsGroups: {
            readonly name: "ViewApprovedHolidayShiftsGroups";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved holiday shift groups for given shift group ID
         *
         * @generated from rpc Genesis.HolidaysService.ViewUnapprovedHolidayShiftsGroups
         */
        readonly viewUnapprovedHolidayShiftsGroups: {
            readonly name: "ViewUnapprovedHolidayShiftsGroups";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the shift group shift
         *
         * @generated from rpc Genesis.HolidaysService.ViewHolidayShiftsGroupsHistory
         */
        readonly viewHolidayShiftsGroupsHistory: {
            readonly name: "ViewHolidayShiftsGroupsHistory";
            readonly I: typeof HolidaysShiftsGroupsHistoryRequest;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.HolidaysService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Holiday;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.HolidaysService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.HolidaysService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.HolidaysService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof HolidaysServicePaginationReq;
            readonly O: typeof HolidaysServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.HolidaysService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof HolidaysServiceEntityPaginationReq;
            readonly O: typeof HolidaysServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the holidays on the given timestamp
         *
         * @generated from rpc Genesis.HolidaysService.ViewHolidaysOn
         */
        readonly viewHolidaysOn: {
            readonly name: "ViewHolidaysOn";
            readonly I: typeof HolidaysServiceViewHolidaysOnTimestampRequest;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.HolidaysService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof HolidaysServiceSearchAllReq;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.HolidaysService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof HolidaysServiceFilterReq;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.HolidaysService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=holidays_connect.d.ts.map