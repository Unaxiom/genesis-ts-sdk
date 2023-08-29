import ***REMOVED*** QuotationRequest, QuotationRequestItem, QuotationRequestItemHistoryRequest, QuotationsRequestsItemsList, QuotationsRequestsList, QuotationsRequestsServiceAutofillRequest, QuotationsRequestsServiceCreateRequest, QuotationsRequestsServiceEntityPaginationReq, QuotationsRequestsServiceFilterReq, QuotationsRequestsServiceItemCreateRequest, QuotationsRequestsServiceItemUpdateRequest, QuotationsRequestsServicePaginationReq, QuotationsRequestsServicePaginationResponse, QuotationsRequestsServiceSearchAllReq, QuotationsRequestsServiceUpdateRequest ***REMOVED*** from "./quotations_requests_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each quotation request
 *
 * @generated from service Genesis.QuotationsRequestsService
 */
export declare const QuotationsRequestsService: ***REMOVED***
    readonly typeName: "Genesis.QuotationsRequestsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof QuotationsRequestsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof QuotationsRequestsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.QuotationsRequestsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof QuotationsRequestsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.QuotationsRequestsService.SendForVerification
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
         * @generated from rpc Genesis.QuotationsRequestsService.Verify
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
         * @generated from rpc Genesis.QuotationsRequestsService.Approve
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
         * @generated from rpc Genesis.QuotationsRequestsService.SendForRevision
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
         * @generated from rpc Genesis.QuotationsRequestsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof QuotationsRequestsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Halt
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
         * @generated from rpc Genesis.QuotationsRequestsService.Discard
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
         * @generated from rpc Genesis.QuotationsRequestsService.Restore
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
         * @generated from rpc Genesis.QuotationsRequestsService.Complete
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
         * @generated from rpc Genesis.QuotationsRequestsService.Repeat
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
         * @generated from rpc Genesis.QuotationsRequestsService.Reopen
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
         * @generated from rpc Genesis.QuotationsRequestsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the quotation request (from the associated purchase enquiry)
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof QuotationsRequestsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.AddQuotationRequestItem
         */
        readonly addQuotationRequestItem: ***REMOVED***
            readonly name: "AddQuotationRequestItem";
            readonly I: typeof QuotationsRequestsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ModifyQuotationRequestItem
         */
        readonly modifyQuotationRequestItem: ***REMOVED***
            readonly name: "ModifyQuotationRequestItem";
            readonly I: typeof QuotationsRequestsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ApproveQuotationRequestItem
         */
        readonly approveQuotationRequestItem: ***REMOVED***
            readonly name: "ApproveQuotationRequestItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.DeleteQuotationRequestItem
         */
        readonly deleteQuotationRequestItem: ***REMOVED***
            readonly name: "DeleteQuotationRequestItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ReorderQuotationRequestItems
         */
        readonly reorderQuotationRequestItems: ***REMOVED***
            readonly name: "ReorderQuotationRequestItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View quotation request Item by ID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewQuotationRequestItemByID
         */
        readonly viewQuotationRequestItemByID: ***REMOVED***
            readonly name: "ViewQuotationRequestItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationRequestItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved quotation request items for given quotation request ID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewApprovedQuotationRequestItems
         */
        readonly viewApprovedQuotationRequestItems: ***REMOVED***
            readonly name: "ViewApprovedQuotationRequestItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved quotation request items for given quotation request ID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewUnapprovedQuotationRequestItems
         */
        readonly viewUnapprovedQuotationRequestItems: ***REMOVED***
            readonly name: "ViewUnapprovedQuotationRequestItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the quotation request item
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewQuotationRequestItemHistory
         */
        readonly viewQuotationRequestItemHistory: ***REMOVED***
            readonly name: "ViewQuotationRequestItemHistory";
            readonly I: typeof QuotationRequestItemHistoryRequest;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof QuotationsRequestsServicePaginationReq;
            readonly O: typeof QuotationsRequestsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof QuotationsRequestsServiceEntityPaginationReq;
            readonly O: typeof QuotationsRequestsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.QuotationsRequestsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof QuotationsRequestsServiceSearchAllReq;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof QuotationsRequestsServiceFilterReq;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.QuotationsRequestsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=quotations_requests_connect.d.ts.map