import ***REMOVED*** StockReturn, StockReturnItem, StockReturnItemHistoryRequest, StockReturnItemProspectiveInfoRequest, StockReturnsItemsList, StockReturnsList, StockReturnsServiceAlreadyAddedQuantityForSourceRequest, StockReturnsServiceCreateRequest, StockReturnsServiceEntityPaginationReq, StockReturnsServiceFilterReq, StockReturnsServiceItemCreateRequest, StockReturnsServiceItemUpdateRequest, StockReturnsServicePaginationReq, StockReturnsServicePaginationResponse, StockReturnsServiceSearchAllReq, StockReturnsServiceUpdateRequest ***REMOVED*** from "./stock_returns_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest, SimpleSearchReq ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each stock return
 *
 * @generated from service Genesis.StockReturnsService
 */
export declare const StockReturnsService: ***REMOVED***
    readonly typeName: "Genesis.StockReturnsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.StockReturnsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof StockReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.StockReturnsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof StockReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.StockReturnsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof StockReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.StockReturnsService.SendForVerification
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
         * @generated from rpc Genesis.StockReturnsService.Verify
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
         * @generated from rpc Genesis.StockReturnsService.Approve
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
         * @generated from rpc Genesis.StockReturnsService.SendForRevision
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
         * @generated from rpc Genesis.StockReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof StockReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.StockReturnsService.Halt
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
         * @generated from rpc Genesis.StockReturnsService.Discard
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
         * @generated from rpc Genesis.StockReturnsService.Restore
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
         * @generated from rpc Genesis.StockReturnsService.Complete
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
         * @generated from rpc Genesis.StockReturnsService.Repeat
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
         * @generated from rpc Genesis.StockReturnsService.Reopen
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
         * @generated from rpc Genesis.StockReturnsService.CommentAdd
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
         * @generated from rpc Genesis.StockReturnsService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Stock Return can be marked as completed
         *
         * @generated from rpc Genesis.StockReturnsService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.AddStockReturnItem
         */
        readonly addStockReturnItem: ***REMOVED***
            readonly name: "AddStockReturnItem";
            readonly I: typeof StockReturnsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.ModifyStockReturnItem
         */
        readonly modifyStockReturnItem: ***REMOVED***
            readonly name: "ModifyStockReturnItem";
            readonly I: typeof StockReturnsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.ApproveStockReturnItem
         */
        readonly approveStockReturnItem: ***REMOVED***
            readonly name: "ApproveStockReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.DeleteStockReturnItem
         */
        readonly deleteStockReturnItem: ***REMOVED***
            readonly name: "DeleteStockReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a stock return
         *
         * @generated from rpc Genesis.StockReturnsService.ReorderStockReturnItems
         */
        readonly reorderStockReturnItems: ***REMOVED***
            readonly name: "ReorderStockReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Stock Return Item by ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemByID
         */
        readonly viewStockReturnItemByID: ***REMOVED***
            readonly name: "ViewStockReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockReturnItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Stock Return Item by Inventory Hash
         *
         * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemByInventoryHash
         */
        readonly viewStockReturnItemByInventoryHash: ***REMOVED***
            readonly name: "ViewStockReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof StockReturnItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved stock return items for given stock return ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewApprovedStockReturnItems
         */
        readonly viewApprovedStockReturnItems: ***REMOVED***
            readonly name: "ViewApprovedStockReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved stock return items for given stock return ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewUnapprovedStockReturnItems
         */
        readonly viewUnapprovedStockReturnItems: ***REMOVED***
            readonly name: "ViewUnapprovedStockReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the stock return item
         *
         * @generated from rpc Genesis.StockReturnsService.ViewStockReturnItemHistory
         */
        readonly viewStockReturnItemHistory: ***REMOVED***
            readonly name: "ViewStockReturnItemHistory";
            readonly I: typeof StockReturnItemHistoryRequest;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockReturn;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.StockReturnsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.StockReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof StockReturnsServicePaginationReq;
            readonly O: typeof StockReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof StockReturnsServiceEntityPaginationReq;
            readonly O: typeof StockReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given stock return
         *
         * @generated from rpc Genesis.StockReturnsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective stock return item info for the given family ID and stock return ID
         *
         * @generated from rpc Genesis.StockReturnsService.ViewProspectiveStockReturnItem
         */
        readonly viewProspectiveStockReturnItem: ***REMOVED***
            readonly name: "ViewProspectiveStockReturnItem";
            readonly I: typeof StockReturnItemProspectiveInfoRequest;
            readonly O: typeof StockReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View already added quantities
         *
         * @generated from rpc Genesis.StockReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: ***REMOVED***
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof StockReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.StockReturnsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof StockReturnsServiceSearchAllReq;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.StockReturnsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof StockReturnsServiceFilterReq;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.StockReturnsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=stock_returns_connect.d.ts.map