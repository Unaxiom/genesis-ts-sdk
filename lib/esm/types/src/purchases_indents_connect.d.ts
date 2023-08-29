import { PurchaseIndent, PurchaseIndentItem, PurchaseIndentItemHistoryRequest, PurchaseIndentItemProspectiveInfoRequest, PurchasesIndentsItemsList, PurchasesIndentsList, PurchasesIndentsServiceAutofillRequest, PurchasesIndentsServiceCreateRequest, PurchasesIndentsServiceEntityPaginationReq, PurchasesIndentsServiceFilterReq, PurchasesIndentsServiceItemCreateRequest, PurchasesIndentsServiceItemUpdateRequest, PurchasesIndentsServiceMultipleItemsCreateRequest, PurchasesIndentsServicePaginationReq, PurchasesIndentsServicePaginationResponse, PurchasesIndentsServiceSearchAllReq, PurchasesIndentsServiceUpdateRequest } from "./purchases_indents_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifiersList, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase indent
 *
 * @generated from service Genesis.PurchasesIndentsService
 */
export declare const PurchasesIndentsService: {
    readonly typeName: "Genesis.PurchasesIndentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PurchasesIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PurchasesIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.PurchasesIndentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.PurchasesIndentsService.SendForVerification
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
         * @generated from rpc Genesis.PurchasesIndentsService.Verify
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
         * @generated from rpc Genesis.PurchasesIndentsService.Approve
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
         * @generated from rpc Genesis.PurchasesIndentsService.SendForRevision
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
         * @generated from rpc Genesis.PurchasesIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Halt
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
         * @generated from rpc Genesis.PurchasesIndentsService.Discard
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
         * @generated from rpc Genesis.PurchasesIndentsService.Restore
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
         * @generated from rpc Genesis.PurchasesIndentsService.Complete
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
         * @generated from rpc Genesis.PurchasesIndentsService.Repeat
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
         * @generated from rpc Genesis.PurchasesIndentsService.Reopen
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
         * @generated from rpc Genesis.PurchasesIndentsService.CommentAdd
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
         * @generated from rpc Genesis.PurchasesIndentsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof PurchasesIndentsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Purchase Indent can be marked as completed
         *
         * @generated from rpc Genesis.PurchasesIndentsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.AddMultiplePurchaseIndentItems
         */
        readonly addMultiplePurchaseIndentItems: {
            readonly name: "AddMultiplePurchaseIndentItems";
            readonly I: typeof PurchasesIndentsServiceMultipleItemsCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.AddPurchaseIndentItem
         */
        readonly addPurchaseIndentItem: {
            readonly name: "AddPurchaseIndentItem";
            readonly I: typeof PurchasesIndentsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ModifyPurchaseIndentItem
         */
        readonly modifyPurchaseIndentItem: {
            readonly name: "ModifyPurchaseIndentItem";
            readonly I: typeof PurchasesIndentsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ApprovePurchaseIndentItem
         */
        readonly approvePurchaseIndentItem: {
            readonly name: "ApprovePurchaseIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.DeletePurchaseIndentItem
         */
        readonly deletePurchaseIndentItem: {
            readonly name: "DeletePurchaseIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ReorderPurchaseIndentItems
         */
        readonly reorderPurchaseIndentItems: {
            readonly name: "ReorderPurchaseIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Indent Item by ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewPurchaseIndentItemByID
         */
        readonly viewPurchaseIndentItemByID: {
            readonly name: "ViewPurchaseIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseIndentItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase indent items for given purchase indent ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewApprovedPurchaseIndentItems
         */
        readonly viewApprovedPurchaseIndentItems: {
            readonly name: "ViewApprovedPurchaseIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase indent items for given purchase indent ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewUnapprovedPurchaseIndentItems
         */
        readonly viewUnapprovedPurchaseIndentItems: {
            readonly name: "ViewUnapprovedPurchaseIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the purchase indent item
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewPurchaseIndentItemHistory
         */
        readonly viewPurchaseIndentItemHistory: {
            readonly name: "ViewPurchaseIndentItemHistory";
            readonly I: typeof PurchaseIndentItemHistoryRequest;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesIndentsServicePaginationReq;
            readonly O: typeof PurchasesIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof PurchasesIndentsServiceEntityPaginationReq;
            readonly O: typeof PurchasesIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all purchase order IDs that are associated with the given purchase indent ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewAssociatedPurchaseOrderIDs
         */
        readonly viewAssociatedPurchaseOrderIDs: {
            readonly name: "ViewAssociatedPurchaseOrderIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective items for the given purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective purchase indent item info for the given family ID and purchase indent ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewProspectivePurchaseIndentItem
         */
        readonly viewProspectivePurchaseIndentItem: {
            readonly name: "ViewProspectivePurchaseIndentItem";
            readonly I: typeof PurchaseIndentItemProspectiveInfoRequest;
            readonly O: typeof PurchasesIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.PurchasesIndentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PurchasesIndentsServiceSearchAllReq;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PurchasesIndentsServiceFilterReq;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.PurchasesIndentsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=purchases_indents_connect.d.ts.map