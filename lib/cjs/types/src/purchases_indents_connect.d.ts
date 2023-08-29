import ***REMOVED*** PurchaseIndent, PurchaseIndentItem, PurchaseIndentItemHistoryRequest, PurchaseIndentItemProspectiveInfoRequest, PurchasesIndentsItemsList, PurchasesIndentsList, PurchasesIndentsServiceAutofillRequest, PurchasesIndentsServiceCreateRequest, PurchasesIndentsServiceEntityPaginationReq, PurchasesIndentsServiceFilterReq, PurchasesIndentsServiceItemCreateRequest, PurchasesIndentsServiceItemUpdateRequest, PurchasesIndentsServiceMultipleItemsCreateRequest, PurchasesIndentsServicePaginationReq, PurchasesIndentsServicePaginationResponse, PurchasesIndentsServiceSearchAllReq, PurchasesIndentsServiceUpdateRequest ***REMOVED*** from "./purchases_indents_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifiersList, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase indent
 *
 * @generated from service Genesis.PurchasesIndentsService
 */
export declare const PurchasesIndentsService: ***REMOVED***
    readonly typeName: "Genesis.PurchasesIndentsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof PurchasesIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof PurchasesIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.PurchasesIndentsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.PurchasesIndentsService.SendForVerification
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
         * @generated from rpc Genesis.PurchasesIndentsService.Verify
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
         * @generated from rpc Genesis.PurchasesIndentsService.Approve
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
         * @generated from rpc Genesis.PurchasesIndentsService.SendForRevision
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
         * @generated from rpc Genesis.PurchasesIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Halt
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
         * @generated from rpc Genesis.PurchasesIndentsService.Discard
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
         * @generated from rpc Genesis.PurchasesIndentsService.Restore
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
         * @generated from rpc Genesis.PurchasesIndentsService.Complete
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
         * @generated from rpc Genesis.PurchasesIndentsService.Repeat
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
         * @generated from rpc Genesis.PurchasesIndentsService.Reopen
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
         * @generated from rpc Genesis.PurchasesIndentsService.CommentAdd
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
         * @generated from rpc Genesis.PurchasesIndentsService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof PurchasesIndentsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Purchase Indent can be marked as completed
         *
         * @generated from rpc Genesis.PurchasesIndentsService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add multiple items to a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.AddMultiplePurchaseIndentItems
         */
        readonly addMultiplePurchaseIndentItems: ***REMOVED***
            readonly name: "AddMultiplePurchaseIndentItems";
            readonly I: typeof PurchasesIndentsServiceMultipleItemsCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.AddPurchaseIndentItem
         */
        readonly addPurchaseIndentItem: ***REMOVED***
            readonly name: "AddPurchaseIndentItem";
            readonly I: typeof PurchasesIndentsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ModifyPurchaseIndentItem
         */
        readonly modifyPurchaseIndentItem: ***REMOVED***
            readonly name: "ModifyPurchaseIndentItem";
            readonly I: typeof PurchasesIndentsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ApprovePurchaseIndentItem
         */
        readonly approvePurchaseIndentItem: ***REMOVED***
            readonly name: "ApprovePurchaseIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.DeletePurchaseIndentItem
         */
        readonly deletePurchaseIndentItem: ***REMOVED***
            readonly name: "DeletePurchaseIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ReorderPurchaseIndentItems
         */
        readonly reorderPurchaseIndentItems: ***REMOVED***
            readonly name: "ReorderPurchaseIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Purchase Indent Item by ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewPurchaseIndentItemByID
         */
        readonly viewPurchaseIndentItemByID: ***REMOVED***
            readonly name: "ViewPurchaseIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseIndentItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved purchase indent items for given purchase indent ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewApprovedPurchaseIndentItems
         */
        readonly viewApprovedPurchaseIndentItems: ***REMOVED***
            readonly name: "ViewApprovedPurchaseIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved purchase indent items for given purchase indent ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewUnapprovedPurchaseIndentItems
         */
        readonly viewUnapprovedPurchaseIndentItems: ***REMOVED***
            readonly name: "ViewUnapprovedPurchaseIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the purchase indent item
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewPurchaseIndentItemHistory
         */
        readonly viewPurchaseIndentItemHistory: ***REMOVED***
            readonly name: "ViewPurchaseIndentItemHistory";
            readonly I: typeof PurchaseIndentItemHistoryRequest;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseIndent;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesIndentsServicePaginationReq;
            readonly O: typeof PurchasesIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof PurchasesIndentsServiceEntityPaginationReq;
            readonly O: typeof PurchasesIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all purchase order IDs that are associated with the given purchase indent ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewAssociatedPurchaseOrderIDs
         */
        readonly viewAssociatedPurchaseOrderIDs: ***REMOVED***
            readonly name: "ViewAssociatedPurchaseOrderIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective items for the given purchase indent
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective purchase indent item info for the given family ID and purchase indent ID
         *
         * @generated from rpc Genesis.PurchasesIndentsService.ViewProspectivePurchaseIndentItem
         */
        readonly viewProspectivePurchaseIndentItem: ***REMOVED***
            readonly name: "ViewProspectivePurchaseIndentItem";
            readonly I: typeof PurchaseIndentItemProspectiveInfoRequest;
            readonly O: typeof PurchasesIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.PurchasesIndentsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof PurchasesIndentsServiceSearchAllReq;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.PurchasesIndentsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof PurchasesIndentsServiceFilterReq;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.PurchasesIndentsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=purchases_indents_connect.d.ts.map