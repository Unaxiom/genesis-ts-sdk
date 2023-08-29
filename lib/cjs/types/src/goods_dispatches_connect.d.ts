import { GoodsDispatch, GoodsDispatchesItemsList, GoodsDispatchesList, GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest, GoodsDispatchesServiceAutofillRequest, GoodsDispatchesServiceCreateRequest, GoodsDispatchesServiceEntityPaginationReq, GoodsDispatchesServiceFilterReq, GoodsDispatchesServiceItemCreateRequest, GoodsDispatchesServiceItemUpdateRequest, GoodsDispatchesServicePaginationReq, GoodsDispatchesServicePaginationResponse, GoodsDispatchesServiceSearchAllReq, GoodsDispatchesServiceUpdateRequest, GoodsDispatchItem, GoodsDispatchItemHistoryRequest, GoodsDispatchItemProspectiveInfoRequest } from "./goods_dispatches_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each goods dispatch
 *
 * @generated from service Genesis.GoodsDispatchesService
 */
export declare const GoodsDispatchesService: {
    readonly typeName: "Genesis.GoodsDispatchesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof GoodsDispatchesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof GoodsDispatchesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.GoodsDispatchesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof GoodsDispatchesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.GoodsDispatchesService.SendForVerification
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
         * @generated from rpc Genesis.GoodsDispatchesService.Verify
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
         * @generated from rpc Genesis.GoodsDispatchesService.Approve
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
         * @generated from rpc Genesis.GoodsDispatchesService.SendForRevision
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
         * @generated from rpc Genesis.GoodsDispatchesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof GoodsDispatchesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Halt
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
         * @generated from rpc Genesis.GoodsDispatchesService.Discard
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
         * @generated from rpc Genesis.GoodsDispatchesService.Restore
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
         * @generated from rpc Genesis.GoodsDispatchesService.Complete
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
         * @generated from rpc Genesis.GoodsDispatchesService.Repeat
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
         * @generated from rpc Genesis.GoodsDispatchesService.Reopen
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
         * @generated from rpc Genesis.GoodsDispatchesService.CommentAdd
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
         * @generated from rpc Genesis.GoodsDispatchesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof GoodsDispatchesServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Dispatch can be marked as completed
         *
         * @generated from rpc Genesis.GoodsDispatchesService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.AddGoodsDispatchItem
         */
        readonly addGoodsDispatchItem: {
            readonly name: "AddGoodsDispatchItem";
            readonly I: typeof GoodsDispatchesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ModifyGoodsDispatchItem
         */
        readonly modifyGoodsDispatchItem: {
            readonly name: "ModifyGoodsDispatchItem";
            readonly I: typeof GoodsDispatchesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ApproveGoodsDispatchItem
         */
        readonly approveGoodsDispatchItem: {
            readonly name: "ApproveGoodsDispatchItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.DeleteGoodsDispatchItem
         */
        readonly deleteGoodsDispatchItem: {
            readonly name: "DeleteGoodsDispatchItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ReorderGoodsDispatchItems
         */
        readonly reorderGoodsDispatchItems: {
            readonly name: "ReorderGoodsDispatchItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Goods Dispatch Item by ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemByID
         */
        readonly viewGoodsDispatchItemByID: {
            readonly name: "ViewGoodsDispatchItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsDispatchItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Goods Dispatch Item by Inventory Hash
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemByInventoryHash
         */
        readonly viewGoodsDispatchItemByInventoryHash: {
            readonly name: "ViewGoodsDispatchItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof GoodsDispatchItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved goods dispatch items for given goods dispatch ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewApprovedGoodsDispatchItems
         */
        readonly viewApprovedGoodsDispatchItems: {
            readonly name: "ViewApprovedGoodsDispatchItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved goods dispatch items for given goods dispatch ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewUnapprovedGoodsDispatchItems
         */
        readonly viewUnapprovedGoodsDispatchItems: {
            readonly name: "ViewUnapprovedGoodsDispatchItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the goods dispatch item
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemHistory
         */
        readonly viewGoodsDispatchItemHistory: {
            readonly name: "ViewGoodsDispatchItemHistory";
            readonly I: typeof GoodsDispatchItemHistoryRequest;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsDispatch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof GoodsDispatchesServicePaginationReq;
            readonly O: typeof GoodsDispatchesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof GoodsDispatchesServiceEntityPaginationReq;
            readonly O: typeof GoodsDispatchesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective goods dispatch item info for the given family ID and goods dispatch ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewProspectiveGoodsDispatchItem
         */
        readonly viewProspectiveGoodsDispatchItem: {
            readonly name: "ViewProspectiveGoodsDispatchItem";
            readonly I: typeof GoodsDispatchItemProspectiveInfoRequest;
            readonly O: typeof GoodsDispatchesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the associated sales invoice ID that is denoted by the identifier in the response for the goods dispatch that is denoted by the identifier in the request
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewAssociatedSalesInvoiceID
         */
        readonly viewAssociatedSalesInvoiceID: {
            readonly name: "ViewAssociatedSalesInvoiceID";
            readonly I: typeof Identifier;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Dispatch has been billed
         *
         * @generated from rpc Genesis.GoodsDispatchesService.IsBilled
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
         * @generated from rpc Genesis.GoodsDispatchesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.GoodsDispatchesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof GoodsDispatchesServiceSearchAllReq;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof GoodsDispatchesServiceFilterReq;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.GoodsDispatchesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=goods_dispatches_connect.d.ts.map