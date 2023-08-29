import { StockIssuance, StockIssuanceItem, StockIssuanceItemHistoryRequest, StockIssuanceItemProspectiveInfoRequest, StockIssuancesItemsList, StockIssuancesList, StockIssuancesServiceAlreadyAddedQuantityForSourceRequest, StockIssuancesServiceAutofillRequest, StockIssuancesServiceCreateRequest, StockIssuancesServiceEntityPaginationReq, StockIssuancesServiceFilterReq, StockIssuancesServiceItemCreateRequest, StockIssuancesServiceItemUpdateRequest, StockIssuancesServicePaginationReq, StockIssuancesServicePaginationResponse, StockIssuancesServiceSearchAllReq, StockIssuancesServiceUpdateRequest } from "./stock_issuances_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each stock issuance
 *
 * @generated from service Genesis.StockIssuancesService
 */
export declare const StockIssuancesService: {
    readonly typeName: "Genesis.StockIssuancesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.StockIssuancesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof StockIssuancesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.StockIssuancesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof StockIssuancesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.StockIssuancesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof StockIssuancesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.StockIssuancesService.SendForVerification
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
         * @generated from rpc Genesis.StockIssuancesService.Verify
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
         * @generated from rpc Genesis.StockIssuancesService.Approve
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
         * @generated from rpc Genesis.StockIssuancesService.SendForRevision
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
         * @generated from rpc Genesis.StockIssuancesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof StockIssuancesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.StockIssuancesService.Halt
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
         * @generated from rpc Genesis.StockIssuancesService.Discard
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
         * @generated from rpc Genesis.StockIssuancesService.Restore
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
         * @generated from rpc Genesis.StockIssuancesService.Complete
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
         * @generated from rpc Genesis.StockIssuancesService.Repeat
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
         * @generated from rpc Genesis.StockIssuancesService.Reopen
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
         * @generated from rpc Genesis.StockIssuancesService.CommentAdd
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
         * @generated from rpc Genesis.StockIssuancesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof StockIssuancesServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Stock Issuance can be marked as completed
         *
         * @generated from rpc Genesis.StockIssuancesService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.AddStockIssuanceItem
         */
        readonly addStockIssuanceItem: {
            readonly name: "AddStockIssuanceItem";
            readonly I: typeof StockIssuancesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.ModifyStockIssuanceItem
         */
        readonly modifyStockIssuanceItem: {
            readonly name: "ModifyStockIssuanceItem";
            readonly I: typeof StockIssuancesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.ApproveStockIssuanceItem
         */
        readonly approveStockIssuanceItem: {
            readonly name: "ApproveStockIssuanceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.DeleteStockIssuanceItem
         */
        readonly deleteStockIssuanceItem: {
            readonly name: "DeleteStockIssuanceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.ReorderStockIssuanceItems
         */
        readonly reorderStockIssuanceItems: {
            readonly name: "ReorderStockIssuanceItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Issuance Item by ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewStockIssuanceItemByID
         */
        readonly viewStockIssuanceItemByID: {
            readonly name: "ViewStockIssuanceItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockIssuanceItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock issuance items for given stock issuance ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewApprovedStockIssuanceItems
         */
        readonly viewApprovedStockIssuanceItems: {
            readonly name: "ViewApprovedStockIssuanceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock issuance items for given stock issuance ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewUnapprovedStockIssuanceItems
         */
        readonly viewUnapprovedStockIssuanceItems: {
            readonly name: "ViewUnapprovedStockIssuanceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the stock issuance item
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewStockIssuanceItemHistory
         */
        readonly viewStockIssuanceItemHistory: {
            readonly name: "ViewStockIssuanceItemHistory";
            readonly I: typeof StockIssuanceItemHistoryRequest;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockIssuance;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof StockIssuancesServicePaginationReq;
            readonly O: typeof StockIssuancesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof StockIssuancesServiceEntityPaginationReq;
            readonly O: typeof StockIssuancesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective stock issuance item info for the given family ID and stock issuance ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewProspectiveStockIssuanceItem
         */
        readonly viewProspectiveStockIssuanceItem: {
            readonly name: "ViewProspectiveStockIssuanceItem";
            readonly I: typeof StockIssuanceItemProspectiveInfoRequest;
            readonly O: typeof StockIssuancesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.StockIssuancesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof StockIssuancesServiceSearchAllReq;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.StockIssuancesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof StockIssuancesServiceFilterReq;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.StockIssuancesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=stock_issuances_connect.d.ts.map