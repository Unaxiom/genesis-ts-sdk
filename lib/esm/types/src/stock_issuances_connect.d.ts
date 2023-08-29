import ***REMOVED*** StockIssuance, StockIssuanceItem, StockIssuanceItemHistoryRequest, StockIssuanceItemProspectiveInfoRequest, StockIssuancesItemsList, StockIssuancesList, StockIssuancesServiceAlreadyAddedQuantityForSourceRequest, StockIssuancesServiceAutofillRequest, StockIssuancesServiceCreateRequest, StockIssuancesServiceEntityPaginationReq, StockIssuancesServiceFilterReq, StockIssuancesServiceItemCreateRequest, StockIssuancesServiceItemUpdateRequest, StockIssuancesServicePaginationReq, StockIssuancesServicePaginationResponse, StockIssuancesServiceSearchAllReq, StockIssuancesServiceUpdateRequest ***REMOVED*** from "./stock_issuances_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each stock issuance
 *
 * @generated from service Genesis.StockIssuancesService
 */
export declare const StockIssuancesService: ***REMOVED***
    readonly typeName: "Genesis.StockIssuancesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.StockIssuancesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof StockIssuancesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.StockIssuancesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof StockIssuancesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.StockIssuancesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof StockIssuancesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.StockIssuancesService.SendForVerification
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
         * @generated from rpc Genesis.StockIssuancesService.Verify
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
         * @generated from rpc Genesis.StockIssuancesService.Approve
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
         * @generated from rpc Genesis.StockIssuancesService.SendForRevision
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
         * @generated from rpc Genesis.StockIssuancesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof StockIssuancesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.StockIssuancesService.Halt
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
         * @generated from rpc Genesis.StockIssuancesService.Discard
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
         * @generated from rpc Genesis.StockIssuancesService.Restore
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
         * @generated from rpc Genesis.StockIssuancesService.Complete
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
         * @generated from rpc Genesis.StockIssuancesService.Repeat
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
         * @generated from rpc Genesis.StockIssuancesService.Reopen
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
         * @generated from rpc Genesis.StockIssuancesService.CommentAdd
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
         * @generated from rpc Genesis.StockIssuancesService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof StockIssuancesServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Stock Issuance can be marked as completed
         *
         * @generated from rpc Genesis.StockIssuancesService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.AddStockIssuanceItem
         */
        readonly addStockIssuanceItem: ***REMOVED***
            readonly name: "AddStockIssuanceItem";
            readonly I: typeof StockIssuancesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.ModifyStockIssuanceItem
         */
        readonly modifyStockIssuanceItem: ***REMOVED***
            readonly name: "ModifyStockIssuanceItem";
            readonly I: typeof StockIssuancesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.ApproveStockIssuanceItem
         */
        readonly approveStockIssuanceItem: ***REMOVED***
            readonly name: "ApproveStockIssuanceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.DeleteStockIssuanceItem
         */
        readonly deleteStockIssuanceItem: ***REMOVED***
            readonly name: "DeleteStockIssuanceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.ReorderStockIssuanceItems
         */
        readonly reorderStockIssuanceItems: ***REMOVED***
            readonly name: "ReorderStockIssuanceItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Stock Issuance Item by ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewStockIssuanceItemByID
         */
        readonly viewStockIssuanceItemByID: ***REMOVED***
            readonly name: "ViewStockIssuanceItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockIssuanceItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved stock issuance items for given stock issuance ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewApprovedStockIssuanceItems
         */
        readonly viewApprovedStockIssuanceItems: ***REMOVED***
            readonly name: "ViewApprovedStockIssuanceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved stock issuance items for given stock issuance ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewUnapprovedStockIssuanceItems
         */
        readonly viewUnapprovedStockIssuanceItems: ***REMOVED***
            readonly name: "ViewUnapprovedStockIssuanceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the stock issuance item
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewStockIssuanceItemHistory
         */
        readonly viewStockIssuanceItemHistory: ***REMOVED***
            readonly name: "ViewStockIssuanceItemHistory";
            readonly I: typeof StockIssuanceItemHistoryRequest;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockIssuance;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof StockIssuancesServicePaginationReq;
            readonly O: typeof StockIssuancesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof StockIssuancesServiceEntityPaginationReq;
            readonly O: typeof StockIssuancesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given stock issuance
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective stock issuance item info for the given family ID and stock issuance ID
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewProspectiveStockIssuanceItem
         */
        readonly viewProspectiveStockIssuanceItem: ***REMOVED***
            readonly name: "ViewProspectiveStockIssuanceItem";
            readonly I: typeof StockIssuanceItemProspectiveInfoRequest;
            readonly O: typeof StockIssuancesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View already added quantities
         *
         * @generated from rpc Genesis.StockIssuancesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: ***REMOVED***
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.StockIssuancesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof StockIssuancesServiceSearchAllReq;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.StockIssuancesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof StockIssuancesServiceFilterReq;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.StockIssuancesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=stock_issuances_connect.d.ts.map