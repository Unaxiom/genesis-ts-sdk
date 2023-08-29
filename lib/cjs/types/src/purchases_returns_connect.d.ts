import { PurchaseReturn, PurchaseReturnItem, PurchaseReturnItemHistoryRequest, PurchaseReturnItemProspectiveInfoRequest, PurchasesReturnsItemsList, PurchasesReturnsList, PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest, PurchasesReturnsServiceCreateRequest, PurchasesReturnsServiceEntityPaginationReq, PurchasesReturnsServiceFilterReq, PurchasesReturnsServiceItemCreateRequest, PurchasesReturnsServiceItemUpdateRequest, PurchasesReturnsServicePaginationReq, PurchasesReturnsServicePaginationResponse, PurchasesReturnsServiceSearchAllReq, PurchasesReturnsServiceUpdateRequest } from "./purchases_returns_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase return
 *
 * @generated from service Genesis.PurchasesReturnsService
 */
export declare const PurchasesReturnsService: {
    readonly typeName: "Genesis.PurchasesReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PurchasesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PurchasesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.PurchasesReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.PurchasesReturnsService.SendForVerification
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
         * @generated from rpc Genesis.PurchasesReturnsService.Verify
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
         * @generated from rpc Genesis.PurchasesReturnsService.Approve
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
         * @generated from rpc Genesis.PurchasesReturnsService.SendForRevision
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
         * @generated from rpc Genesis.PurchasesReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Halt
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
         * @generated from rpc Genesis.PurchasesReturnsService.Discard
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
         * @generated from rpc Genesis.PurchasesReturnsService.Restore
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
         * @generated from rpc Genesis.PurchasesReturnsService.Complete
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
         * @generated from rpc Genesis.PurchasesReturnsService.Repeat
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
         * @generated from rpc Genesis.PurchasesReturnsService.Reopen
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
         * @generated from rpc Genesis.PurchasesReturnsService.CommentAdd
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
         * @generated from rpc Genesis.PurchasesReturnsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Purchase Return can be marked as completed
         *
         * @generated from rpc Genesis.PurchasesReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.AddPurchaseReturnItem
         */
        readonly addPurchaseReturnItem: {
            readonly name: "AddPurchaseReturnItem";
            readonly I: typeof PurchasesReturnsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ModifyPurchaseReturnItem
         */
        readonly modifyPurchaseReturnItem: {
            readonly name: "ModifyPurchaseReturnItem";
            readonly I: typeof PurchasesReturnsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ApprovePurchaseReturnItem
         */
        readonly approvePurchaseReturnItem: {
            readonly name: "ApprovePurchaseReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.DeletePurchaseReturnItem
         */
        readonly deletePurchaseReturnItem: {
            readonly name: "DeletePurchaseReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ReorderPurchaseReturnItems
         */
        readonly reorderPurchaseReturnItems: {
            readonly name: "ReorderPurchaseReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Return Item by ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemByID
         */
        readonly viewPurchaseReturnItemByID: {
            readonly name: "ViewPurchaseReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Return Item by Inventory Hash
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemByInventoryHash
         */
        readonly viewPurchaseReturnItemByInventoryHash: {
            readonly name: "ViewPurchaseReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PurchaseReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase return items for given purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewApprovedPurchaseReturnItems
         */
        readonly viewApprovedPurchaseReturnItems: {
            readonly name: "ViewApprovedPurchaseReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase return items for given purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewUnapprovedPurchaseReturnItems
         */
        readonly viewUnapprovedPurchaseReturnItems: {
            readonly name: "ViewUnapprovedPurchaseReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the purchase return item
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewPurchaseReturnItemHistory
         */
        readonly viewPurchaseReturnItemHistory: {
            readonly name: "ViewPurchaseReturnItemHistory";
            readonly I: typeof PurchaseReturnItemHistoryRequest;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesReturnsServicePaginationReq;
            readonly O: typeof PurchasesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof PurchasesReturnsServiceEntityPaginationReq;
            readonly O: typeof PurchasesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given purchase return
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective purchase return item info for the given family ID and purchase return ID
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewProspectivePurchaseReturnItem
         */
        readonly viewProspectivePurchaseReturnItem: {
            readonly name: "ViewProspectivePurchaseReturnItem";
            readonly I: typeof PurchaseReturnItemProspectiveInfoRequest;
            readonly O: typeof PurchasesReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Purchase Return has been billed
         *
         * @generated from rpc Genesis.PurchasesReturnsService.IsBilled
         */
        readonly isBilled: {
            readonly name: "IsBilled";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Genesis.PurchasesReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.PurchasesReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PurchasesReturnsServiceSearchAllReq;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.PurchasesReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PurchasesReturnsServiceFilterReq;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.PurchasesReturnsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=purchases_returns_connect.d.ts.map