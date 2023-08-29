import ***REMOVED*** SalesEnquiriesItemsList, SalesEnquiriesList, SalesEnquiriesServiceCreateRequest, SalesEnquiriesServiceEntityPaginationReq, SalesEnquiriesServiceFilterReq, SalesEnquiriesServiceItemCreateRequest, SalesEnquiriesServiceItemUpdateRequest, SalesEnquiriesServicePaginationReq, SalesEnquiriesServicePaginationResponse, SalesEnquiriesServiceSearchAllReq, SalesEnquiriesServiceUpdateRequest, SalesEnquiry, SalesEnquiryItem, SalesEnquiryItemHistoryRequest ***REMOVED*** from "./sales_enquiries_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifiersList, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each sales enquiry
 *
 * @generated from service Genesis.SalesEnquiriesService
 */
export declare const SalesEnquiriesService: ***REMOVED***
    readonly typeName: "Genesis.SalesEnquiriesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.SalesEnquiriesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof SalesEnquiriesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.SalesEnquiriesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof SalesEnquiriesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.SalesEnquiriesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof SalesEnquiriesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.SalesEnquiriesService.SendForVerification
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
         * @generated from rpc Genesis.SalesEnquiriesService.Verify
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
         * @generated from rpc Genesis.SalesEnquiriesService.Approve
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
         * @generated from rpc Genesis.SalesEnquiriesService.SendForRevision
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
         * @generated from rpc Genesis.SalesEnquiriesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesEnquiriesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.SalesEnquiriesService.Halt
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
         * @generated from rpc Genesis.SalesEnquiriesService.Discard
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
         * @generated from rpc Genesis.SalesEnquiriesService.Restore
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
         * @generated from rpc Genesis.SalesEnquiriesService.Complete
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
         * @generated from rpc Genesis.SalesEnquiriesService.Repeat
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
         * @generated from rpc Genesis.SalesEnquiriesService.Reopen
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
         * @generated from rpc Genesis.SalesEnquiriesService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send Email
         *
         * @generated from rpc Genesis.SalesEnquiriesService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.AddSalesEnquiryItem
         */
        readonly addSalesEnquiryItem: ***REMOVED***
            readonly name: "AddSalesEnquiryItem";
            readonly I: typeof SalesEnquiriesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ModifySalesEnquiryItem
         */
        readonly modifySalesEnquiryItem: ***REMOVED***
            readonly name: "ModifySalesEnquiryItem";
            readonly I: typeof SalesEnquiriesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ApproveSalesEnquiryItem
         */
        readonly approveSalesEnquiryItem: ***REMOVED***
            readonly name: "ApproveSalesEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.DeleteSalesEnquiryItem
         */
        readonly deleteSalesEnquiryItem: ***REMOVED***
            readonly name: "DeleteSalesEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a sales enquiry
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ReorderSalesEnquiryItems
         */
        readonly reorderSalesEnquiryItems: ***REMOVED***
            readonly name: "ReorderSalesEnquiryItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Sales Enquiry Item by ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewSalesEnquiryItemByID
         */
        readonly viewSalesEnquiryItemByID: ***REMOVED***
            readonly name: "ViewSalesEnquiryItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiryItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved sales enquiry items for given sales enquiry ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewApprovedSalesEnquiryItems
         */
        readonly viewApprovedSalesEnquiryItems: ***REMOVED***
            readonly name: "ViewApprovedSalesEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved sales enquiry items for given sales enquiry ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewUnapprovedSalesEnquiryItems
         */
        readonly viewUnapprovedSalesEnquiryItems: ***REMOVED***
            readonly name: "ViewUnapprovedSalesEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the sales enquiry item
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewSalesEnquiryItemHistory
         */
        readonly viewSalesEnquiryItemHistory: ***REMOVED***
            readonly name: "ViewSalesEnquiryItemHistory";
            readonly I: typeof SalesEnquiryItemHistoryRequest;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesEnquiriesServicePaginationReq;
            readonly O: typeof SalesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof SalesEnquiriesServiceEntityPaginationReq;
            readonly O: typeof SalesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all sales orders IDs that are associated with the given sales enquiry ID
         *
         * @generated from rpc Genesis.SalesEnquiriesService.ViewAssociatedSalesOrdersIDs
         */
        readonly viewAssociatedSalesOrdersIDs: ***REMOVED***
            readonly name: "ViewAssociatedSalesOrdersIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.SalesEnquiriesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof SalesEnquiriesServiceSearchAllReq;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.SalesEnquiriesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof SalesEnquiriesServiceFilterReq;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.SalesEnquiriesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=sales_enquiries_connect.d.ts.map