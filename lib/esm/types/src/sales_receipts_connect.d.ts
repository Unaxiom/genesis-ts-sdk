import ***REMOVED*** SaleReceipt, SalesReceiptsList, SalesReceiptsServiceCreateRequest, SalesReceiptsServiceEntityPaginationReq, SalesReceiptsServiceFilterReq, SalesReceiptsServicePaginationReq, SalesReceiptsServicePaginationResponse, SalesReceiptsServiceSearchAllReq, SalesReceiptsServiceUpdateRequest ***REMOVED*** from "./sales_receipts_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithUserComment ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each sales receipt
 *
 * @generated from service Genesis.SalesReceiptsService
 */
export declare const SalesReceiptsService: ***REMOVED***
    readonly typeName: "Genesis.SalesReceiptsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.SalesReceiptsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof SalesReceiptsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.SalesReceiptsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof SalesReceiptsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.SalesReceiptsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof SalesReceiptsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.SalesReceiptsService.SendForVerification
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
         * @generated from rpc Genesis.SalesReceiptsService.Verify
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
         * @generated from rpc Genesis.SalesReceiptsService.Approve
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
         * @generated from rpc Genesis.SalesReceiptsService.SendForRevision
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
         * @generated from rpc Genesis.SalesReceiptsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesReceiptsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.SalesReceiptsService.Halt
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
         * @generated from rpc Genesis.SalesReceiptsService.Discard
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
         * @generated from rpc Genesis.SalesReceiptsService.Restore
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
         * @generated from rpc Genesis.SalesReceiptsService.Complete
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
         * @generated from rpc Genesis.SalesReceiptsService.Repeat
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
         * @generated from rpc Genesis.SalesReceiptsService.CommentAdd
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
         * @generated from rpc Genesis.SalesReceiptsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SaleReceipt;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.SalesReceiptsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesReceiptsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.SalesReceiptsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesReceiptsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.SalesReceiptsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesReceiptsServicePaginationReq;
            readonly O: typeof SalesReceiptsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.SalesReceiptsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof SalesReceiptsServiceEntityPaginationReq;
            readonly O: typeof SalesReceiptsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.SalesReceiptsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof SalesReceiptsServiceSearchAllReq;
            readonly O: typeof SalesReceiptsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.SalesReceiptsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof SalesReceiptsServiceFilterReq;
            readonly O: typeof SalesReceiptsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.SalesReceiptsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=sales_receipts_connect.d.ts.map