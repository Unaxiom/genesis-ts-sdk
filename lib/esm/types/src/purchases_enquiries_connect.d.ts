import { PurchaseEnquiry, PurchaseEnquiryItem, PurchaseEnquiryItemHistoryRequest, PurchasesEnquiriesItemsList, PurchasesEnquiriesList, PurchasesEnquiriesServiceCreateRequest, PurchasesEnquiriesServiceEntityPaginationReq, PurchasesEnquiriesServiceFilterReq, PurchasesEnquiriesServiceItemCreateRequest, PurchasesEnquiriesServiceItemUpdateRequest, PurchasesEnquiriesServicePaginationReq, PurchasesEnquiriesServicePaginationResponse, PurchasesEnquiriesServiceSearchAllReq, PurchasesEnquiriesServiceUpdateRequest } from "./purchases_enquiries_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each purchase enquiry
 *
 * @generated from service Genesis.PurchasesEnquiriesService
 */
export declare const PurchasesEnquiriesService: {
    readonly typeName: "Genesis.PurchasesEnquiriesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PurchasesEnquiriesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PurchasesEnquiriesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesEnquiriesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.SendForVerification
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Verify
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Approve
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.SendForRevision
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesEnquiriesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Halt
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Discard
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Restore
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Complete
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Repeat
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.Reopen
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
         * @generated from rpc Genesis.PurchasesEnquiriesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.AddPurchaseEnquiryItem
         */
        readonly addPurchaseEnquiryItem: {
            readonly name: "AddPurchaseEnquiryItem";
            readonly I: typeof PurchasesEnquiriesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ModifyPurchaseEnquiryItem
         */
        readonly modifyPurchaseEnquiryItem: {
            readonly name: "ModifyPurchaseEnquiryItem";
            readonly I: typeof PurchasesEnquiriesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ApprovePurchaseEnquiryItem
         */
        readonly approvePurchaseEnquiryItem: {
            readonly name: "ApprovePurchaseEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.DeletePurchaseEnquiryItem
         */
        readonly deletePurchaseEnquiryItem: {
            readonly name: "DeletePurchaseEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a purchase enquiry
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ReorderPurchaseEnquiryItems
         */
        readonly reorderPurchaseEnquiryItems: {
            readonly name: "ReorderPurchaseEnquiryItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View purchase enquiry Item by ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewPurchaseEnquiryItemByID
         */
        readonly viewPurchaseEnquiryItemByID: {
            readonly name: "ViewPurchaseEnquiryItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseEnquiryItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase enquiry items for given purchase enquiry ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewApprovedPurchaseEnquiryItems
         */
        readonly viewApprovedPurchaseEnquiryItems: {
            readonly name: "ViewApprovedPurchaseEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase enquiry items for given purchase enquiry ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewUnapprovedPurchaseEnquiryItems
         */
        readonly viewUnapprovedPurchaseEnquiryItems: {
            readonly name: "ViewUnapprovedPurchaseEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the purchase enquiry item
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewPurchaseEnquiryItemHistory
         */
        readonly viewPurchaseEnquiryItemHistory: {
            readonly name: "ViewPurchaseEnquiryItemHistory";
            readonly I: typeof PurchaseEnquiryItemHistoryRequest;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesEnquiriesServicePaginationReq;
            readonly O: typeof PurchasesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof PurchasesEnquiriesServiceEntityPaginationReq;
            readonly O: typeof PurchasesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PurchasesEnquiriesServiceSearchAllReq;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PurchasesEnquiriesServiceFilterReq;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.PurchasesEnquiriesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=purchases_enquiries_connect.d.ts.map