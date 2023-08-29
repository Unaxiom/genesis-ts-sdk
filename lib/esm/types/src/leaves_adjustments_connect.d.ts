import ***REMOVED*** LeaveAdjustment, LeaveAdjustmentRecord, LeavesAdjustmentsList, LeavesAdjustmentsRecordsHistoryRequest, LeavesAdjustmentsRecordsList, LeavesAdjustmentsServiceCreateRequest, LeavesAdjustmentsServiceEntityPaginationReq, LeavesAdjustmentsServiceFilterReq, LeavesAdjustmentsServicePaginationReq, LeavesAdjustmentsServicePaginationResponse, LeavesAdjustmentsServiceRecordCreateRequest, LeavesAdjustmentsServiceRecordUpdateRequest, LeavesAdjustmentsServiceSearchAllReq, LeavesAdjustmentsServiceUpdateRequest ***REMOVED*** from "./leaves_adjustments_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each record
 *
 * @generated from service Genesis.LeavesAdjustmentsService
 */
export declare const LeavesAdjustmentsService: ***REMOVED***
    readonly typeName: "Genesis.LeavesAdjustmentsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof LeavesAdjustmentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof LeavesAdjustmentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof LeavesAdjustmentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.SendForVerification
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Verify
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Approve
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.SendForRevision
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof LeavesAdjustmentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.Halt
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Discard
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Restore
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Complete
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.Repeat
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
         * @generated from rpc Genesis.LeavesAdjustmentsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add a record to a record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.AddLeaveAdjustmentRecord
         */
        readonly addLeaveAdjustmentRecord: ***REMOVED***
            readonly name: "AddLeaveAdjustmentRecord";
            readonly I: typeof LeavesAdjustmentsServiceRecordCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify a record in a record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ModifyLeaveAdjustmentRecord
         */
        readonly modifyLeaveAdjustmentRecord: ***REMOVED***
            readonly name: "ModifyLeaveAdjustmentRecord";
            readonly I: typeof LeavesAdjustmentsServiceRecordUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve a record in a record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ApproveLeaveAdjustmentRecord
         */
        readonly approveLeaveAdjustmentRecord: ***REMOVED***
            readonly name: "ApproveLeaveAdjustmentRecord";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete a record in a record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.DeleteLeaveAdjustmentRecord
         */
        readonly deleteLeaveAdjustmentRecord: ***REMOVED***
            readonly name: "DeleteLeaveAdjustmentRecord";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder records
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ReorderLeaveAdjustmentRecords
         */
        readonly reorderLeaveAdjustmentRecords: ***REMOVED***
            readonly name: "ReorderLeaveAdjustmentRecords";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Leave Adjustment Record by ID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewLeaveAdjustmentRecordByID
         */
        readonly viewLeaveAdjustmentRecordByID: ***REMOVED***
            readonly name: "ViewLeaveAdjustmentRecordByID";
            readonly I: typeof Identifier;
            readonly O: typeof LeaveAdjustmentRecord;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved leave adjustment records for given record ID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewApprovedLeaveAdjustmentRecords
         */
        readonly viewApprovedLeaveAdjustmentRecords: ***REMOVED***
            readonly name: "ViewApprovedLeaveAdjustmentRecords";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved leave adjustment records for given record ID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewUnapprovedLeaveAdjustmentRecords
         */
        readonly viewUnapprovedLeaveAdjustmentRecords: ***REMOVED***
            readonly name: "ViewUnapprovedLeaveAdjustmentRecords";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the record
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewLeaveAdjustmentRecordsHistory
         */
        readonly viewLeaveAdjustmentRecordsHistory: ***REMOVED***
            readonly name: "ViewLeaveAdjustmentRecordsHistory";
            readonly I: typeof LeavesAdjustmentsRecordsHistoryRequest;
            readonly O: typeof LeavesAdjustmentsRecordsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof LeaveAdjustment;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof LeavesAdjustmentsServicePaginationReq;
            readonly O: typeof LeavesAdjustmentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof LeavesAdjustmentsServiceEntityPaginationReq;
            readonly O: typeof LeavesAdjustmentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof LeavesAdjustmentsServiceSearchAllReq;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof LeavesAdjustmentsServiceFilterReq;
            readonly O: typeof LeavesAdjustmentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.LeavesAdjustmentsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=leaves_adjustments_connect.d.ts.map