import ***REMOVED*** PurchaseReturn, PurchaseReturnItem, PurchaseReturnItemHistoryRequest, PurchaseReturnItemProspectiveInfoRequest, PurchasesReturnsItemsList, PurchasesReturnsList, PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest, PurchasesReturnsServiceCreateRequest, PurchasesReturnsServiceEntityPaginationReq, PurchasesReturnsServiceFilterReq, PurchasesReturnsServiceItemCreateRequest, PurchasesReturnsServiceItemUpdateRequest, PurchasesReturnsServicePaginationReq, PurchasesReturnsServicePaginationResponse, PurchasesReturnsServiceSearchAllReq, PurchasesReturnsServiceUpdateRequest ***REMOVED*** from "./purchases_returns_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase return
 *
 * @generated from service Genesis.PurchasesReturnsService
 */
export declare const PurchasesReturnsService: ***REMOVED***
    readonly typeName: "Genesis.PurchasesReturnsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof PurchasesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof PurchasesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.PurchasesReturnsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.PurchasesReturnsService.SendForVerification
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
         * @generated from rpc Genesis.PurchasesReturnsService.Verify
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
         * @generated from rpc Genesis.PurchasesReturnsService.Approve
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
         * @generated from rpc Genesis.PurchasesReturnsService.SendForRevision
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
         * @generated from rpc Genesis.PurchasesReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Halt
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
         * @generated from rpc Genesis.PurchasesReturnsService.Discard
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
         * @generated from rpc Genesis.PurchasesReturnsService.Restore
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
         * @generated from rpc Genesis.PurchasesReturnsService.Complete
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
         * @generated from rpc Genesis.PurchasesReturnsService.Repeat
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
         * @generated from rpc Genesis.PurchasesReturnsService.Reopen
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
         * @generated from rpc Genesis.PurchasesReturnsService.CommentAdd
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
         * @generated from rpc Genesis.PurchasesReturnsService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Purchase Return can be marked as completed
         *
         * @generated from rpc Genesis.PurchasesReturnsService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.AddPurchaseReturnItem
         */
        readonly addPurchaseReturnItem: ***REMOVED***
            readonly name: "AddPurchaseReturnItem";
            readonly I: typeof PurchasesReturnsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ModifyPurchaseReturnItem
         */
        readonly modifyPurchaseReturnItem: ***REMOVED***
            readonly name: "ModifyPurchaseReturnItem";
            readonly I: typeof PurchasesReturnsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ApprovePurchaseReturnItem
         */
        readonly approvePurchaseReturnItem: ***REMOVED***
            readonly name: "ApprovePurchaseReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.DeletePurchaseReturnItem
         */
        readonly deletePurchaseReturnItem: ***REMOVED***
            readonly name: "DeletePurchaseReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ReorderPurchaseReturnItems
         */
        readonly reorderPurchaseReturnItems: ***REMOVED***
            readonly name: "ReorderPurchaseReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Purchase Return Item by ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemByID
         */
        readonly viewPurchaseReturnItemByID: ***REMOVED***
            readonly name: "ViewPurchaseReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturnItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Purchase Return Item by Inventory Hash
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemByInventoryHash
         */
        readonly viewPurchaseReturnItemByInventoryHash: ***REMOVED***
            readonly name: "ViewPurchaseReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PurchaseReturnItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved purchase return items for given purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewApprovedPurchaseReturnItems
         */
        readonly viewApprovedPurchaseReturnItems: ***REMOVED***
            readonly name: "ViewApprovedPurchaseReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved purchase return items for given purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewUnapprovedPurchaseReturnItems
         */
        readonly viewUnapprovedPurchaseReturnItems: ***REMOVED***
            readonly name: "ViewUnapprovedPurchaseReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the purchase return item
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemHistory
         */
        readonly viewPurchaseReturnItemHistory: ***REMOVED***
            readonly name: "ViewPurchaseReturnItemHistory";
            readonly I: typeof PurchaseReturnItemHistoryRequest;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesReturnsServicePaginationReq;
            readonly O: typeof PurchasesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof PurchasesReturnsServiceEntityPaginationReq;
            readonly O: typeof PurchasesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective purchase return item info for the given family ID and purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewProspectivePurchaseReturnItem
         */
        readonly viewProspectivePurchaseReturnItem: ***REMOVED***
            readonly name: "ViewProspectivePurchaseReturnItem";
            readonly I: typeof PurchaseReturnItemProspectiveInfoRequest;
            readonly O: typeof PurchasesReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Purchase Return has been billed
         *
         * @generated from rpc Genesis.PurchasesReturnsService.IsBilled
         */
        readonly isBilled: ***REMOVED***
            readonly name: "IsBilled";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View already added quantities
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: ***REMOVED***
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.PurchasesReturnsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof PurchasesReturnsServiceSearchAllReq;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof PurchasesReturnsServiceFilterReq;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.PurchasesReturnsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=purchases_returns_connect.d.ts.map