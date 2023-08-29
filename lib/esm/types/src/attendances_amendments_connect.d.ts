import ***REMOVED*** AttendanceAmendment, AttendancesAmendmentsList, AttendancesAmendmentsServiceCreateRequest, AttendancesAmendmentsServiceEntityPaginationReq, AttendancesAmendmentsServiceFilterReq, AttendancesAmendmentsServicePaginationReq, AttendancesAmendmentsServicePaginationResponse, AttendancesAmendmentsServiceSearchAllReq, AttendancesAmendmentsServiceUpdateRequest ***REMOVED*** from "./attendances_amendments_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithUserComment ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each attendance amendment
 *
 * @generated from service Genesis.AttendancesAmendmentsService
 */
export declare const AttendancesAmendmentsService: ***REMOVED***
    readonly typeName: "Genesis.AttendancesAmendmentsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof AttendancesAmendmentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof AttendancesAmendmentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof AttendancesAmendmentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.SendForVerification
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.Verify
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.Approve
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.SendForRevision
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof AttendancesAmendmentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.Halt
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.Discard
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.Restore
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.Complete
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.Repeat
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
         * @generated from rpc Genesis.AttendancesAmendmentsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof AttendanceAmendment;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AttendancesAmendmentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AttendancesAmendmentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof AttendancesAmendmentsServicePaginationReq;
            readonly O: typeof AttendancesAmendmentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof AttendancesAmendmentsServiceEntityPaginationReq;
            readonly O: typeof AttendancesAmendmentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof AttendancesAmendmentsServiceSearchAllReq;
            readonly O: typeof AttendancesAmendmentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof AttendancesAmendmentsServiceFilterReq;
            readonly O: typeof AttendancesAmendmentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Check if there are any conflicts for the amendment to be approved. Returns true if there are conflicts and the amendment cannot be approved
         *
         * @generated from rpc Genesis.AttendancesAmendmentsService.CheckConflicts
         */
        readonly checkConflicts: ***REMOVED***
            readonly name: "CheckConflicts";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=attendances_amendments_connect.d.ts.map