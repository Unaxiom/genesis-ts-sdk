import ***REMOVED*** QuotationResponse, QuotationResponseItem, QuotationResponseItemHistoryRequest, QuotationsResponsesItemsList, QuotationsResponsesList, QuotationsResponsesServiceCreateRequest, QuotationsResponsesServiceEntityPaginationReq, QuotationsResponsesServiceFilterReq, QuotationsResponsesServiceItemCreateRequest, QuotationsResponsesServiceItemsFilterReq, QuotationsResponsesServiceItemUpdateRequest, QuotationsResponsesServicePaginationReq, QuotationsResponsesServicePaginationResponse, QuotationsResponsesServiceSearchAllReq, QuotationsResponsesServiceUpdateRequest ***REMOVED*** from "./quotations_responses_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each quotation response
 *
 * @generated from service Genesis.QuotationsResponsesService
 */
export declare const QuotationsResponsesService: ***REMOVED***
    readonly typeName: "Genesis.QuotationsResponsesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.QuotationsResponsesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof QuotationsResponsesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.QuotationsResponsesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof QuotationsResponsesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.QuotationsResponsesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof QuotationsResponsesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.QuotationsResponsesService.SendForVerification
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
         * @generated from rpc Genesis.QuotationsResponsesService.Verify
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
         * @generated from rpc Genesis.QuotationsResponsesService.Approve
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
         * @generated from rpc Genesis.QuotationsResponsesService.SendForRevision
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
         * @generated from rpc Genesis.QuotationsResponsesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof QuotationsResponsesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.QuotationsResponsesService.Halt
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
         * @generated from rpc Genesis.QuotationsResponsesService.Discard
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
         * @generated from rpc Genesis.QuotationsResponsesService.Restore
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
         * @generated from rpc Genesis.QuotationsResponsesService.Complete
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
         * @generated from rpc Genesis.QuotationsResponsesService.Repeat
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
         * @generated from rpc Genesis.QuotationsResponsesService.Reopen
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
         * @generated from rpc Genesis.QuotationsResponsesService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.AddQuotationResponseItem
         */
        readonly addQuotationResponseItem: ***REMOVED***
            readonly name: "AddQuotationResponseItem";
            readonly I: typeof QuotationsResponsesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ModifyQuotationResponseItem
         */
        readonly modifyQuotationResponseItem: ***REMOVED***
            readonly name: "ModifyQuotationResponseItem";
            readonly I: typeof QuotationsResponsesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ApproveQuotationResponseItem
         */
        readonly approveQuotationResponseItem: ***REMOVED***
            readonly name: "ApproveQuotationResponseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.DeleteQuotationResponseItem
         */
        readonly deleteQuotationResponseItem: ***REMOVED***
            readonly name: "DeleteQuotationResponseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ReorderQuotationResponseItems
         */
        readonly reorderQuotationResponseItems: ***REMOVED***
            readonly name: "ReorderQuotationResponseItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View quotation response Item by ID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewQuotationResponseItemByID
         */
        readonly viewQuotationResponseItemByID: ***REMOVED***
            readonly name: "ViewQuotationResponseItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationResponseItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved quotation response items for given quotation response ID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewApprovedQuotationResponseItems
         */
        readonly viewApprovedQuotationResponseItems: ***REMOVED***
            readonly name: "ViewApprovedQuotationResponseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved quotation response items for given quotation response ID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewUnapprovedQuotationResponseItems
         */
        readonly viewUnapprovedQuotationResponseItems: ***REMOVED***
            readonly name: "ViewUnapprovedQuotationResponseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the quotation response item
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewQuotationResponseItemHistory
         */
        readonly viewQuotationResponseItemHistory: ***REMOVED***
            readonly name: "ViewQuotationResponseItemHistory";
            readonly I: typeof QuotationResponseItemHistoryRequest;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all the quotation response items that match the given filter criteria
         *
         * @generated from rpc Genesis.QuotationsResponsesService.FilterItems
         */
        readonly filterItems: ***REMOVED***
            readonly name: "FilterItems";
            readonly I: typeof QuotationsResponsesServiceItemsFilterReq;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof QuotationsResponsesServicePaginationReq;
            readonly O: typeof QuotationsResponsesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof QuotationsResponsesServiceEntityPaginationReq;
            readonly O: typeof QuotationsResponsesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.QuotationsResponsesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof QuotationsResponsesServiceSearchAllReq;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.QuotationsResponsesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof QuotationsResponsesServiceFilterReq;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.QuotationsResponsesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=quotations_responses_connect.d.ts.map