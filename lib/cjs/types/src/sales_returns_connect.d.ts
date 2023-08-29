import ***REMOVED*** SalesReturn, SalesReturnItem, SalesReturnItemHistoryRequest, SalesReturnItemProspectiveInfoRequest, SalesReturnsItemsList, SalesReturnsList, SalesReturnsServiceAlreadyAddedQuantityForSourceRequest, SalesReturnsServiceCreateRequest, SalesReturnsServiceEntityPaginationReq, SalesReturnsServiceFilterReq, SalesReturnsServiceItemCreateRequest, SalesReturnsServiceItemUpdateRequest, SalesReturnsServicePaginationReq, SalesReturnsServicePaginationResponse, SalesReturnsServiceSearchAllReq, SalesReturnsServiceUpdateRequest ***REMOVED*** from "./sales_returns_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each sales return
 *
 * @generated from service Genesis.SalesReturnsService
 */
export declare const SalesReturnsService: ***REMOVED***
    readonly typeName: "Genesis.SalesReturnsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.SalesReturnsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof SalesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.SalesReturnsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof SalesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.SalesReturnsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof SalesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.SalesReturnsService.SendForVerification
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
         * @generated from rpc Genesis.SalesReturnsService.Verify
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
         * @generated from rpc Genesis.SalesReturnsService.Approve
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
         * @generated from rpc Genesis.SalesReturnsService.SendForRevision
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
         * @generated from rpc Genesis.SalesReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.SalesReturnsService.Halt
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
         * @generated from rpc Genesis.SalesReturnsService.Discard
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
         * @generated from rpc Genesis.SalesReturnsService.Restore
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
         * @generated from rpc Genesis.SalesReturnsService.Complete
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
         * @generated from rpc Genesis.SalesReturnsService.Repeat
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
         * @generated from rpc Genesis.SalesReturnsService.Reopen
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
         * @generated from rpc Genesis.SalesReturnsService.CommentAdd
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
         * @generated from rpc Genesis.SalesReturnsService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Sales Return can be marked as completed
         *
         * @generated from rpc Genesis.SalesReturnsService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.AddSalesReturnItem
         */
        readonly addSalesReturnItem: ***REMOVED***
            readonly name: "AddSalesReturnItem";
            readonly I: typeof SalesReturnsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.ModifySalesReturnItem
         */
        readonly modifySalesReturnItem: ***REMOVED***
            readonly name: "ModifySalesReturnItem";
            readonly I: typeof SalesReturnsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.ApproveSalesReturnItem
         */
        readonly approveSalesReturnItem: ***REMOVED***
            readonly name: "ApproveSalesReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.DeleteSalesReturnItem
         */
        readonly deleteSalesReturnItem: ***REMOVED***
            readonly name: "DeleteSalesReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.ReorderSalesReturnItems
         */
        readonly reorderSalesReturnItems: ***REMOVED***
            readonly name: "ReorderSalesReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Sales Return Item by ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewSalesReturnItemByID
         */
        readonly viewSalesReturnItemByID: ***REMOVED***
            readonly name: "ViewSalesReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesReturnItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Sales Return Item by Inventory Hash
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewSalesReturnItemByInventoryHash
         */
        readonly viewSalesReturnItemByInventoryHash: ***REMOVED***
            readonly name: "ViewSalesReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SalesReturnItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved sales return items for given sales return ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewApprovedSalesReturnItems
         */
        readonly viewApprovedSalesReturnItems: ***REMOVED***
            readonly name: "ViewApprovedSalesReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved sales return items for given sales return ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewUnapprovedSalesReturnItems
         */
        readonly viewUnapprovedSalesReturnItems: ***REMOVED***
            readonly name: "ViewUnapprovedSalesReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the sales return item
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewSalesReturnItemHistory
         */
        readonly viewSalesReturnItemHistory: ***REMOVED***
            readonly name: "ViewSalesReturnItemHistory";
            readonly I: typeof SalesReturnItemHistoryRequest;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesReturn;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesReturnsServicePaginationReq;
            readonly O: typeof SalesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof SalesReturnsServiceEntityPaginationReq;
            readonly O: typeof SalesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective sales return item info for the given family ID and sales return ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewProspectiveSalesReturnItem
         */
        readonly viewProspectiveSalesReturnItem: ***REMOVED***
            readonly name: "ViewProspectiveSalesReturnItem";
            readonly I: typeof SalesReturnItemProspectiveInfoRequest;
            readonly O: typeof SalesReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Sales Return has been billed
         *
         * @generated from rpc Genesis.SalesReturnsService.IsBilled
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
         * @generated from rpc Genesis.SalesReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: ***REMOVED***
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.SalesReturnsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof SalesReturnsServiceSearchAllReq;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.SalesReturnsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof SalesReturnsServiceFilterReq;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.SalesReturnsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=sales_returns_connect.d.ts.map