import { QuotationRequest, QuotationRequestItem, QuotationRequestItemHistoryRequest, QuotationsRequestsItemsList, QuotationsRequestsList, QuotationsRequestsServiceAutofillRequest, QuotationsRequestsServiceCreateRequest, QuotationsRequestsServiceEntityPaginationReq, QuotationsRequestsServiceFilterReq, QuotationsRequestsServiceItemCreateRequest, QuotationsRequestsServiceItemUpdateRequest, QuotationsRequestsServicePaginationReq, QuotationsRequestsServicePaginationResponse, QuotationsRequestsServiceSearchAllReq, QuotationsRequestsServiceUpdateRequest } from "./quotations_requests_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each quotation request
 *
 * @generated from service Genesis.QuotationsRequestsService
 */
export declare const QuotationsRequestsService: {
    readonly typeName: "Genesis.QuotationsRequestsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QuotationsRequestsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QuotationsRequestsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.QuotationsRequestsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QuotationsRequestsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.QuotationsRequestsService.SendForVerification
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
         * @generated from rpc Genesis.QuotationsRequestsService.Verify
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
         * @generated from rpc Genesis.QuotationsRequestsService.Approve
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
         * @generated from rpc Genesis.QuotationsRequestsService.SendForRevision
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
         * @generated from rpc Genesis.QuotationsRequestsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QuotationsRequestsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Halt
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
         * @generated from rpc Genesis.QuotationsRequestsService.Discard
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
         * @generated from rpc Genesis.QuotationsRequestsService.Restore
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
         * @generated from rpc Genesis.QuotationsRequestsService.Complete
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
         * @generated from rpc Genesis.QuotationsRequestsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Genesis.QuotationsRequestsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the quotation request (from the associated purchase enquiry)
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof QuotationsRequestsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.AddQuotationRequestItem
         */
        readonly addQuotationRequestItem: {
            readonly name: "AddQuotationRequestItem";
            readonly I: typeof QuotationsRequestsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ModifyQuotationRequestItem
         */
        readonly modifyQuotationRequestItem: {
            readonly name: "ModifyQuotationRequestItem";
            readonly I: typeof QuotationsRequestsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ApproveQuotationRequestItem
         */
        readonly approveQuotationRequestItem: {
            readonly name: "ApproveQuotationRequestItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.DeleteQuotationRequestItem
         */
        readonly deleteQuotationRequestItem: {
            readonly name: "DeleteQuotationRequestItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a quotation request
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ReorderQuotationRequestItems
         */
        readonly reorderQuotationRequestItems: {
            readonly name: "ReorderQuotationRequestItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View quotation request Item by ID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewQuotationRequestItemByID
         */
        readonly viewQuotationRequestItemByID: {
            readonly name: "ViewQuotationRequestItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationRequestItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved quotation request items for given quotation request ID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewApprovedQuotationRequestItems
         */
        readonly viewApprovedQuotationRequestItems: {
            readonly name: "ViewApprovedQuotationRequestItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved quotation request items for given quotation request ID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewUnapprovedQuotationRequestItems
         */
        readonly viewUnapprovedQuotationRequestItems: {
            readonly name: "ViewUnapprovedQuotationRequestItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the quotation request item
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewQuotationRequestItemHistory
         */
        readonly viewQuotationRequestItemHistory: {
            readonly name: "ViewQuotationRequestItemHistory";
            readonly I: typeof QuotationRequestItemHistoryRequest;
            readonly O: typeof QuotationsRequestsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QuotationsRequestsServicePaginationReq;
            readonly O: typeof QuotationsRequestsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.QuotationsRequestsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof QuotationsRequestsServiceEntityPaginationReq;
            readonly O: typeof QuotationsRequestsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.QuotationsRequestsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QuotationsRequestsServiceSearchAllReq;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.QuotationsRequestsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QuotationsRequestsServiceFilterReq;
            readonly O: typeof QuotationsRequestsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.QuotationsRequestsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=quotations_requests_connect.d.ts.map