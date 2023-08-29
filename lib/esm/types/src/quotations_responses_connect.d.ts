import { QuotationResponse, QuotationResponseItem, QuotationResponseItemHistoryRequest, QuotationsResponsesItemsList, QuotationsResponsesList, QuotationsResponsesServiceCreateRequest, QuotationsResponsesServiceEntityPaginationReq, QuotationsResponsesServiceFilterReq, QuotationsResponsesServiceItemCreateRequest, QuotationsResponsesServiceItemsFilterReq, QuotationsResponsesServiceItemUpdateRequest, QuotationsResponsesServicePaginationReq, QuotationsResponsesServicePaginationResponse, QuotationsResponsesServiceSearchAllReq, QuotationsResponsesServiceUpdateRequest } from "./quotations_responses_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each quotation response
 *
 * @generated from service Genesis.QuotationsResponsesService
 */
export declare const QuotationsResponsesService: {
    readonly typeName: "Genesis.QuotationsResponsesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.QuotationsResponsesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QuotationsResponsesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.QuotationsResponsesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QuotationsResponsesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.QuotationsResponsesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QuotationsResponsesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.QuotationsResponsesService.SendForVerification
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
         * @generated from rpc Genesis.QuotationsResponsesService.Verify
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
         * @generated from rpc Genesis.QuotationsResponsesService.Approve
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
         * @generated from rpc Genesis.QuotationsResponsesService.SendForRevision
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
         * @generated from rpc Genesis.QuotationsResponsesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QuotationsResponsesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.QuotationsResponsesService.Halt
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
         * @generated from rpc Genesis.QuotationsResponsesService.Discard
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
         * @generated from rpc Genesis.QuotationsResponsesService.Restore
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
         * @generated from rpc Genesis.QuotationsResponsesService.Complete
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
         * @generated from rpc Genesis.QuotationsResponsesService.Repeat
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
         * @generated from rpc Genesis.QuotationsResponsesService.Reopen
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
         * @generated from rpc Genesis.QuotationsResponsesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.AddQuotationResponseItem
         */
        readonly addQuotationResponseItem: {
            readonly name: "AddQuotationResponseItem";
            readonly I: typeof QuotationsResponsesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ModifyQuotationResponseItem
         */
        readonly modifyQuotationResponseItem: {
            readonly name: "ModifyQuotationResponseItem";
            readonly I: typeof QuotationsResponsesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ApproveQuotationResponseItem
         */
        readonly approveQuotationResponseItem: {
            readonly name: "ApproveQuotationResponseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.DeleteQuotationResponseItem
         */
        readonly deleteQuotationResponseItem: {
            readonly name: "DeleteQuotationResponseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a quotation response
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ReorderQuotationResponseItems
         */
        readonly reorderQuotationResponseItems: {
            readonly name: "ReorderQuotationResponseItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View quotation response Item by ID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewQuotationResponseItemByID
         */
        readonly viewQuotationResponseItemByID: {
            readonly name: "ViewQuotationResponseItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationResponseItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved quotation response items for given quotation response ID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewApprovedQuotationResponseItems
         */
        readonly viewApprovedQuotationResponseItems: {
            readonly name: "ViewApprovedQuotationResponseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved quotation response items for given quotation response ID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewUnapprovedQuotationResponseItems
         */
        readonly viewUnapprovedQuotationResponseItems: {
            readonly name: "ViewUnapprovedQuotationResponseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the quotation response item
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewQuotationResponseItemHistory
         */
        readonly viewQuotationResponseItemHistory: {
            readonly name: "ViewQuotationResponseItemHistory";
            readonly I: typeof QuotationResponseItemHistoryRequest;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the quotation response items that match the given filter criteria
         *
         * @generated from rpc Genesis.QuotationsResponsesService.FilterItems
         */
        readonly filterItems: {
            readonly name: "FilterItems";
            readonly I: typeof QuotationsResponsesServiceItemsFilterReq;
            readonly O: typeof QuotationsResponsesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QuotationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QuotationsResponsesServicePaginationReq;
            readonly O: typeof QuotationsResponsesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.QuotationsResponsesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof QuotationsResponsesServiceEntityPaginationReq;
            readonly O: typeof QuotationsResponsesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.QuotationsResponsesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QuotationsResponsesServiceSearchAllReq;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.QuotationsResponsesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QuotationsResponsesServiceFilterReq;
            readonly O: typeof QuotationsResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.QuotationsResponsesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=quotations_responses_connect.d.ts.map