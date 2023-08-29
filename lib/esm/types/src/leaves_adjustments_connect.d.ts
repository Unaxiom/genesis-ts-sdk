import { LeaveAdjustment, LeaveAdjustmentRecord, LeavesAdjustmentsList, LeavesAdjustmentsRecordsHistoryRequest, LeavesAdjustmentsRecordsList, LeavesAdjustmentsServiceCreateRequest, LeavesAdjustmentsServiceEntityPaginationReq, LeavesAdjustmentsServiceFilterReq, LeavesAdjustmentsServicePaginationReq, LeavesAdjustmentsServicePaginationResponse, LeavesAdjustmentsServiceRecordCreateRequest, LeavesAdjustmentsServiceRecordUpdateRequest, LeavesAdjustmentsServiceSearchAllReq, LeavesAdjustmentsServiceUpdateRequest } from "./leaves_adjustments_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each record
 *
 * @generated from service Genesis.LeavesAdjustmentsService
 */
export declare const LeavesAdjustmentsService: {
    readonly typeName: "Genesis.LeavesAdjustmentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof LeavesAdjustmentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof LeavesAdjustmentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof LeavesAdjustmentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.SendForVerification
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Verify
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Approve
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.SendForRevision
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof LeavesAdjustmentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.Halt
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Discard
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Restore
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Complete
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Repeat
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a record to a record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.AddLeaveAdjustmentRecord
         */
        readonly addLeaveAdjustmentRecord: {
            readonly name: "AddLeaveAdjustmentRecord";
            readonly I: typeof LeavesAdjustmentsServiceRecordCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a record in a record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ModifyLeaveAdjustmentRecord
         */
        readonly modifyLeaveAdjustmentRecord: {
            readonly name: "ModifyLeaveAdjustmentRecord";
            readonly I: typeof LeavesAdjustmentsServiceRecordUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a record in a record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ApproveLeaveAdjustmentRecord
         */
        readonly approveLeaveAdjustmentRecord: {
            readonly name: "ApproveLeaveAdjustmentRecord";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a record in a record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.DeleteLeaveAdjustmentRecord
         */
        readonly deleteLeaveAdjustmentRecord: {
            readonly name: "DeleteLeaveAdjustmentRecord";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder records
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ReorderLeaveAdjustmentRecords
         */
        readonly reorderLeaveAdjustmentRecords: {
            readonly name: "ReorderLeaveAdjustmentRecords";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Leave Adjustment Record by ID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewLeaveAdjustmentRecordByID
         */
        readonly viewLeaveAdjustmentRecordByID: {
            readonly name: "ViewLeaveAdjustmentRecordByID";
            readonly I: typeof Identifier;
            readonly O: typeof LeaveAdjustmentRecord;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved leave adjustment records for given record ID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewApprovedLeaveAdjustmentRecords
         */
        readonly viewApprovedLeaveAdjustmentRecords: {
            readonly name: "ViewApprovedLeaveAdjustmentRecords";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved leave adjustment records for given record ID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewUnapprovedLeaveAdjustmentRecords
         */
        readonly viewUnapprovedLeaveAdjustmentRecords: {
            readonly name: "ViewUnapprovedLeaveAdjustmentRecords";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewLeaveAdjustmentRecordsHistory
         */
        readonly viewLeaveAdjustmentRecordsHistory: {
            readonly name: "ViewLeaveAdjustmentRecordsHistory";
            readonly I: typeof LeavesAdjustmentsRecordsHistoryRequest;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof LeaveAdjustment;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof LeavesAdjustmentsServicePaginationReq;
            readonly O: typeof LeavesAdjustmentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof LeavesAdjustmentsServiceEntityPaginationReq;
            readonly O: typeof LeavesAdjustmentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof LeavesAdjustmentsServiceSearchAllReq;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof LeavesAdjustmentsServiceFilterReq;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=leaves_adjustments_connect.d.ts.map