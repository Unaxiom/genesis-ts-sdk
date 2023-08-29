import { SalesEnquiriesItemsList, SalesEnquiriesList, SalesEnquiriesServiceCreateRequest, SalesEnquiriesServiceEntityPaginationReq, SalesEnquiriesServiceFilterReq, SalesEnquiriesServiceItemCreateRequest, SalesEnquiriesServiceItemUpdateRequest, SalesEnquiriesServicePaginationReq, SalesEnquiriesServicePaginationResponse, SalesEnquiriesServiceSearchAllReq, SalesEnquiriesServiceUpdateRequest, SalesEnquiry, SalesEnquiryItem, SalesEnquiryItemHistoryRequest } from "./sales_enquiries_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifiersList, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each sales enquiry
 *
 * @generated from service Genesis.SalesEnquiriesService
 */
export declare const SalesEnquiriesService: {
    readonly typeName: "Genesis.SalesEnquiriesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.SalesEnquiriesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalesEnquiriesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.SalesEnquiriesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalesEnquiriesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.SalesEnquiriesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalesEnquiriesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.SalesEnquiriesService.SendForVerification
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
         * @generated from rpc Genesis.SalesEnquiriesService.Verify
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
         * @generated from rpc Genesis.SalesEnquiriesService.Approve
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
         * @generated from rpc Genesis.SalesEnquiriesService.SendForRevision
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
         * @generated from rpc Genesis.SalesEnquiriesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesEnquiriesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.SalesEnquiriesService.Halt
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
         * @generated from rpc Genesis.SalesEnquiriesService.Discard
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
         * @generated from rpc Genesis.SalesEnquiriesService.Restore
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
         * @generated from rpc Genesis.SalesEnquiriesService.Complete
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
         * @generated from rpc Genesis.SalesEnquiriesService.Repeat
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
         * @generated from rpc Genesis.SalesEnquiriesService.Reopen
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
         * @generated from rpc Genesis.SalesEnquiriesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Genesis.SalesEnquiriesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.AddSalesEnquiryItem
         */
        readonly addSalesEnquiryItem: {
            readonly name: "AddSalesEnquiryItem";
            readonly I: typeof SalesEnquiriesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ModifySalesEnquiryItem
         */
        readonly modifySalesEnquiryItem: {
            readonly name: "ModifySalesEnquiryItem";
            readonly I: typeof SalesEnquiriesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ApproveSalesEnquiryItem
         */
        readonly approveSalesEnquiryItem: {
            readonly name: "ApproveSalesEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.DeleteSalesEnquiryItem
         */
        readonly deleteSalesEnquiryItem: {
            readonly name: "DeleteSalesEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ReorderSalesEnquiryItems
         */
        readonly reorderSalesEnquiryItems: {
            readonly name: "ReorderSalesEnquiryItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Sales Enquiry Item by ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewSalesEnquiryItemByID
         */
        readonly viewSalesEnquiryItemByID: {
            readonly name: "ViewSalesEnquiryItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiryItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales enquiry items for given sales enquiry ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewApprovedSalesEnquiryItems
         */
        readonly viewApprovedSalesEnquiryItems: {
            readonly name: "ViewApprovedSalesEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales enquiry items for given sales enquiry ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewUnapprovedSalesEnquiryItems
         */
        readonly viewUnapprovedSalesEnquiryItems: {
            readonly name: "ViewUnapprovedSalesEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the sales enquiry item
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewSalesEnquiryItemHistory
         */
        readonly viewSalesEnquiryItemHistory: {
            readonly name: "ViewSalesEnquiryItemHistory";
            readonly I: typeof SalesEnquiryItemHistoryRequest;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesEnquiriesServicePaginationReq;
            readonly O: typeof SalesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof SalesEnquiriesServiceEntityPaginationReq;
            readonly O: typeof SalesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all sales orders IDs that are associated with the given sales enquiry ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewAssociatedSalesOrdersIDs
         */
        readonly viewAssociatedSalesOrdersIDs: {
            readonly name: "ViewAssociatedSalesOrdersIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.SalesEnquiriesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalesEnquiriesServiceSearchAllReq;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.SalesEnquiriesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalesEnquiriesServiceFilterReq;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.SalesEnquiriesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_enquiries_connect.d.ts.map