import ***REMOVED*** PurchaseEnquiry, PurchaseEnquiryItem, PurchaseEnquiryItemHistoryRequest, PurchasesEnquiriesItemsList, PurchasesEnquiriesList, PurchasesEnquiriesServiceCreateRequest, PurchasesEnquiriesServiceEntityPaginationReq, PurchasesEnquiriesServiceFilterReq, PurchasesEnquiriesServiceItemCreateRequest, PurchasesEnquiriesServiceItemUpdateRequest, PurchasesEnquiriesServicePaginationReq, PurchasesEnquiriesServicePaginationResponse, PurchasesEnquiriesServiceSearchAllReq, PurchasesEnquiriesServiceUpdateRequest ***REMOVED*** from "./purchases_enquiries_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each purchase enquiry
 *
 * @generated from service Genesis.PurchasesEnquiriesService
 */
export declare const PurchasesEnquiriesService: ***REMOVED***
    readonly typeName: "Genesis.PurchasesEnquiriesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof PurchasesEnquiriesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof PurchasesEnquiriesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesEnquiriesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.SendForVerification
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Verify
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Approve
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.SendForRevision
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesEnquiriesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Halt
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Discard
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Restore
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Complete
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Repeat
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Reopen
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.AddPurchaseEnquiryItem
         */
        readonly addPurchaseEnquiryItem: ***REMOVED***
            readonly name: "AddPurchaseEnquiryItem";
            readonly I: typeof PurchasesEnquiriesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ModifyPurchaseEnquiryItem
         */
        readonly modifyPurchaseEnquiryItem: ***REMOVED***
            readonly name: "ModifyPurchaseEnquiryItem";
            readonly I: typeof PurchasesEnquiriesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ApprovePurchaseEnquiryItem
         */
        readonly approvePurchaseEnquiryItem: ***REMOVED***
            readonly name: "ApprovePurchaseEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.DeletePurchaseEnquiryItem
         */
        readonly deletePurchaseEnquiryItem: ***REMOVED***
            readonly name: "DeletePurchaseEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ReorderPurchaseEnquiryItems
         */
        readonly reorderPurchaseEnquiryItems: ***REMOVED***
            readonly name: "ReorderPurchaseEnquiryItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View purchase enquiry Item by ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewPurchaseEnquiryItemByID
         */
        readonly viewPurchaseEnquiryItemByID: ***REMOVED***
            readonly name: "ViewPurchaseEnquiryItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseEnquiryItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved purchase enquiry items for given purchase enquiry ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewApprovedPurchaseEnquiryItems
         */
        readonly viewApprovedPurchaseEnquiryItems: ***REMOVED***
            readonly name: "ViewApprovedPurchaseEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved purchase enquiry items for given purchase enquiry ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewUnapprovedPurchaseEnquiryItems
         */
        readonly viewUnapprovedPurchaseEnquiryItems: ***REMOVED***
            readonly name: "ViewUnapprovedPurchaseEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the purchase enquiry item
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewPurchaseEnquiryItemHistory
         */
        readonly viewPurchaseEnquiryItemHistory: ***REMOVED***
            readonly name: "ViewPurchaseEnquiryItemHistory";
            readonly I: typeof PurchaseEnquiryItemHistoryRequest;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseEnquiry;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesEnquiriesServicePaginationReq;
            readonly O: typeof PurchasesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof PurchasesEnquiriesServiceEntityPaginationReq;
            readonly O: typeof PurchasesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof PurchasesEnquiriesServiceSearchAllReq;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof PurchasesEnquiriesServiceFilterReq;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=purchases_enquiries_connect.d.ts.map