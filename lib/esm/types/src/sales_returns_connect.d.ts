import { SalesReturn, SalesReturnItem, SalesReturnItemHistoryRequest, SalesReturnItemProspectiveInfoRequest, SalesReturnsItemsList, SalesReturnsList, SalesReturnsServiceAlreadyAddedQuantityForSourceRequest, SalesReturnsServiceCreateRequest, SalesReturnsServiceEntityPaginationReq, SalesReturnsServiceFilterReq, SalesReturnsServiceItemCreateRequest, SalesReturnsServiceItemUpdateRequest, SalesReturnsServicePaginationReq, SalesReturnsServicePaginationResponse, SalesReturnsServiceSearchAllReq, SalesReturnsServiceUpdateRequest } from "./sales_returns_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each sales return
 *
 * @generated from service Genesis.SalesReturnsService
 */
export declare const SalesReturnsService: {
    readonly typeName: "Genesis.SalesReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.SalesReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.SalesReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.SalesReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.SalesReturnsService.SendForVerification
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
         * @generated from rpc Genesis.SalesReturnsService.Verify
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
         * @generated from rpc Genesis.SalesReturnsService.Approve
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
         * @generated from rpc Genesis.SalesReturnsService.SendForRevision
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
         * @generated from rpc Genesis.SalesReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.SalesReturnsService.Halt
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
         * @generated from rpc Genesis.SalesReturnsService.Discard
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
         * @generated from rpc Genesis.SalesReturnsService.Restore
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
         * @generated from rpc Genesis.SalesReturnsService.Complete
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
         * @generated from rpc Genesis.SalesReturnsService.Repeat
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
         * @generated from rpc Genesis.SalesReturnsService.Reopen
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
         * @generated from rpc Genesis.SalesReturnsService.CommentAdd
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
         * @generated from rpc Genesis.SalesReturnsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Sales Return can be marked as completed
         *
         * @generated from rpc Genesis.SalesReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.AddSalesReturnItem
         */
        readonly addSalesReturnItem: {
            readonly name: "AddSalesReturnItem";
            readonly I: typeof SalesReturnsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.ModifySalesReturnItem
         */
        readonly modifySalesReturnItem: {
            readonly name: "ModifySalesReturnItem";
            readonly I: typeof SalesReturnsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.ApproveSalesReturnItem
         */
        readonly approveSalesReturnItem: {
            readonly name: "ApproveSalesReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.DeleteSalesReturnItem
         */
        readonly deleteSalesReturnItem: {
            readonly name: "DeleteSalesReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.ReorderSalesReturnItems
         */
        readonly reorderSalesReturnItems: {
            readonly name: "ReorderSalesReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Sales Return Item by ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewSalesReturnItemByID
         */
        readonly viewSalesReturnItemByID: {
            readonly name: "ViewSalesReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Sales Return Item by Inventory Hash
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewSalesReturnItemByInventoryHash
         */
        readonly viewSalesReturnItemByInventoryHash: {
            readonly name: "ViewSalesReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SalesReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales return items for given sales return ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewApprovedSalesReturnItems
         */
        readonly viewApprovedSalesReturnItems: {
            readonly name: "ViewApprovedSalesReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales return items for given sales return ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewUnapprovedSalesReturnItems
         */
        readonly viewUnapprovedSalesReturnItems: {
            readonly name: "ViewUnapprovedSalesReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the sales return item
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewSalesReturnItemHistory
         */
        readonly viewSalesReturnItemHistory: {
            readonly name: "ViewSalesReturnItemHistory";
            readonly I: typeof SalesReturnItemHistoryRequest;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesReturnsServicePaginationReq;
            readonly O: typeof SalesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof SalesReturnsServiceEntityPaginationReq;
            readonly O: typeof SalesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given sales return
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective sales return item info for the given family ID and sales return ID
         *
         * @generated from rpc Genesis.SalesReturnsService.ViewProspectiveSalesReturnItem
         */
        readonly viewProspectiveSalesReturnItem: {
            readonly name: "ViewProspectiveSalesReturnItem";
            readonly I: typeof SalesReturnItemProspectiveInfoRequest;
            readonly O: typeof SalesReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Sales Return has been billed
         *
         * @generated from rpc Genesis.SalesReturnsService.IsBilled
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
         * @generated from rpc Genesis.SalesReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.SalesReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalesReturnsServiceSearchAllReq;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.SalesReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalesReturnsServiceFilterReq;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.SalesReturnsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_returns_connect.d.ts.map