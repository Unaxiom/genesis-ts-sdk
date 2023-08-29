import { GoodsReceipt, GoodsReceiptItem, GoodsReceiptItemHistoryRequest, GoodsReceiptItemProspectiveInfoRequest, GoodsReceiptsItemsList, GoodsReceiptsList, GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest, GoodsReceiptsServiceAutofillRequest, GoodsReceiptsServiceCreateRequest, GoodsReceiptsServiceEntityPaginationReq, GoodsReceiptsServiceFilterReq, GoodsReceiptsServiceItemCreateRequest, GoodsReceiptsServiceItemUpdateRequest, GoodsReceiptsServicePaginationReq, GoodsReceiptsServicePaginationResponse, GoodsReceiptsServiceSearchAllReq, GoodsReceiptsServiceUpdateRequest } from "./goods_receipts_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each goods receipt
 *
 * @generated from service Genesis.GoodsReceiptsService
 */
export declare const GoodsReceiptsService: {
    readonly typeName: "Genesis.GoodsReceiptsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof GoodsReceiptsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof GoodsReceiptsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.GoodsReceiptsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof GoodsReceiptsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.GoodsReceiptsService.SendForVerification
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
         * @generated from rpc Genesis.GoodsReceiptsService.Verify
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
         * @generated from rpc Genesis.GoodsReceiptsService.Approve
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
         * @generated from rpc Genesis.GoodsReceiptsService.SendForRevision
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
         * @generated from rpc Genesis.GoodsReceiptsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof GoodsReceiptsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Halt
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
         * @generated from rpc Genesis.GoodsReceiptsService.Discard
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
         * @generated from rpc Genesis.GoodsReceiptsService.Restore
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
         * @generated from rpc Genesis.GoodsReceiptsService.Complete
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
         * @generated from rpc Genesis.GoodsReceiptsService.Repeat
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
         * @generated from rpc Genesis.GoodsReceiptsService.Reopen
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
         * @generated from rpc Genesis.GoodsReceiptsService.CommentAdd
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
         * @generated from rpc Genesis.GoodsReceiptsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof GoodsReceiptsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Receipt can be marked as completed
         *
         * @generated from rpc Genesis.GoodsReceiptsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.AddGoodsReceiptItem
         */
        readonly addGoodsReceiptItem: {
            readonly name: "AddGoodsReceiptItem";
            readonly I: typeof GoodsReceiptsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ModifyGoodsReceiptItem
         */
        readonly modifyGoodsReceiptItem: {
            readonly name: "ModifyGoodsReceiptItem";
            readonly I: typeof GoodsReceiptsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ApproveGoodsReceiptItem
         */
        readonly approveGoodsReceiptItem: {
            readonly name: "ApproveGoodsReceiptItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.DeleteGoodsReceiptItem
         */
        readonly deleteGoodsReceiptItem: {
            readonly name: "DeleteGoodsReceiptItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ReorderGoodsReceiptItems
         */
        readonly reorderGoodsReceiptItems: {
            readonly name: "ReorderGoodsReceiptItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Goods Receipt Item by ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewGoodsReceiptItemByID
         */
        readonly viewGoodsReceiptItemByID: {
            readonly name: "ViewGoodsReceiptItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsReceiptItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved goods receipt items for given goods receipt ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewApprovedGoodsReceiptItems
         */
        readonly viewApprovedGoodsReceiptItems: {
            readonly name: "ViewApprovedGoodsReceiptItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved goods receipt items for given goods receipt ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewUnapprovedGoodsReceiptItems
         */
        readonly viewUnapprovedGoodsReceiptItems: {
            readonly name: "ViewUnapprovedGoodsReceiptItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the goods receipt item
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewGoodsReceiptItemHistory
         */
        readonly viewGoodsReceiptItemHistory: {
            readonly name: "ViewGoodsReceiptItemHistory";
            readonly I: typeof GoodsReceiptItemHistoryRequest;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsReceipt;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof GoodsReceiptsServicePaginationReq;
            readonly O: typeof GoodsReceiptsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof GoodsReceiptsServiceEntityPaginationReq;
            readonly O: typeof GoodsReceiptsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective goods receipt item info for the given family ID and goods receipt ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewProspectiveGoodsReceiptItem
         */
        readonly viewProspectiveGoodsReceiptItem: {
            readonly name: "ViewProspectiveGoodsReceiptItem";
            readonly I: typeof GoodsReceiptItemProspectiveInfoRequest;
            readonly O: typeof GoodsReceiptsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the associated vendor invoice ID that is denoted by the identifier in the response for the goods receipt that is denoted by the identifier in the request
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewAssociatedVendorInvoiceID
         */
        readonly viewAssociatedVendorInvoiceID: {
            readonly name: "ViewAssociatedVendorInvoiceID";
            readonly I: typeof Identifier;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Receipt has been billed
         *
         * @generated from rpc Genesis.GoodsReceiptsService.IsBilled
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
         * @generated from rpc Genesis.GoodsReceiptsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.GoodsReceiptsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof GoodsReceiptsServiceSearchAllReq;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof GoodsReceiptsServiceFilterReq;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.GoodsReceiptsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=goods_receipts_connect.d.ts.map