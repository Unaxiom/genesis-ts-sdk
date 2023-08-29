import { StockReturn, StockReturnItem, StockReturnItemHistoryRequest, StockReturnItemProspectiveInfoRequest, StockReturnsItemsList, StockReturnsList, StockReturnsServiceAlreadyAddedQuantityForSourceRequest, StockReturnsServiceCreateRequest, StockReturnsServiceEntityPaginationReq, StockReturnsServiceFilterReq, StockReturnsServiceItemCreateRequest, StockReturnsServiceItemUpdateRequest, StockReturnsServicePaginationReq, StockReturnsServicePaginationResponse, StockReturnsServiceSearchAllReq, StockReturnsServiceUpdateRequest } from "./stock_returns_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest, SimpleSearchReq } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each stock return
 *
 * @generated from service Genesis.StockReturnsService
 */
export declare const StockReturnsService: {
    readonly typeName: "Genesis.StockReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.StockReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof StockReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.StockReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof StockReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.StockReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof StockReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.StockReturnsService.SendForVerification
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
         * @generated from rpc Genesis.StockReturnsService.Verify
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
         * @generated from rpc Genesis.StockReturnsService.Approve
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
         * @generated from rpc Genesis.StockReturnsService.SendForRevision
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
         * @generated from rpc Genesis.StockReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof StockReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.StockReturnsService.Halt
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
         * @generated from rpc Genesis.StockReturnsService.Discard
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
         * @generated from rpc Genesis.StockReturnsService.Restore
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
         * @generated from rpc Genesis.StockReturnsService.Complete
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
         * @generated from rpc Genesis.StockReturnsService.Repeat
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
         * @generated from rpc Genesis.StockReturnsService.Reopen
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
         * @generated from rpc Genesis.StockReturnsService.CommentAdd
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
         * @generated from rpc Genesis.StockReturnsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Stock Return can be marked as completed
         *
         * @generated from rpc Genesis.StockReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.AddStockReturnItem
         */
        readonly addStockReturnItem: {
            readonly name: "AddStockReturnItem";
            readonly I: typeof StockReturnsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.ModifyStockReturnItem
         */
        readonly modifyStockReturnItem: {
            readonly name: "ModifyStockReturnItem";
            readonly I: typeof StockReturnsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.ApproveStockReturnItem
         */
        readonly approveStockReturnItem: {
            readonly name: "ApproveStockReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.DeleteStockReturnItem
         */
        readonly deleteStockReturnItem: {
            readonly name: "DeleteStockReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.ReorderStockReturnItems
         */
        readonly reorderStockReturnItems: {
            readonly name: "ReorderStockReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Return Item by ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemByID
         */
        readonly viewStockReturnItemByID: {
            readonly name: "ViewStockReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Return Item by Inventory Hash
         *
         * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemByInventoryHash
         */
        readonly viewStockReturnItemByInventoryHash: {
            readonly name: "ViewStockReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof StockReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock return items for given stock return ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewApprovedStockReturnItems
         */
        readonly viewApprovedStockReturnItems: {
            readonly name: "ViewApprovedStockReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock return items for given stock return ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewUnapprovedStockReturnItems
         */
        readonly viewUnapprovedStockReturnItems: {
            readonly name: "ViewUnapprovedStockReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the stock return item
         *
         * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemHistory
         */
        readonly viewStockReturnItemHistory: {
            readonly name: "ViewStockReturnItemHistory";
            readonly I: typeof StockReturnItemHistoryRequest;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.StockReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.StockReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof StockReturnsServicePaginationReq;
            readonly O: typeof StockReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof StockReturnsServiceEntityPaginationReq;
            readonly O: typeof StockReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given stock return
         *
         * @generated from rpc Genesis.StockReturnsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective stock return item info for the given family ID and stock return ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewProspectiveStockReturnItem
         */
        readonly viewProspectiveStockReturnItem: {
            readonly name: "ViewProspectiveStockReturnItem";
            readonly I: typeof StockReturnItemProspectiveInfoRequest;
            readonly O: typeof StockReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Genesis.StockReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof StockReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.StockReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof StockReturnsServiceSearchAllReq;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.StockReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof StockReturnsServiceFilterReq;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.StockReturnsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=stock_returns_connect.d.ts.map