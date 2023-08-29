import ***REMOVED*** GoodsReceipt, GoodsReceiptItem, GoodsReceiptItemHistoryRequest, GoodsReceiptItemProspectiveInfoRequest, GoodsReceiptsItemsList, GoodsReceiptsList, GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest, GoodsReceiptsServiceAutofillRequest, GoodsReceiptsServiceCreateRequest, GoodsReceiptsServiceEntityPaginationReq, GoodsReceiptsServiceFilterReq, GoodsReceiptsServiceItemCreateRequest, GoodsReceiptsServiceItemUpdateRequest, GoodsReceiptsServicePaginationReq, GoodsReceiptsServicePaginationResponse, GoodsReceiptsServiceSearchAllReq, GoodsReceiptsServiceUpdateRequest ***REMOVED*** from "./goods_receipts_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each goods receipt
 *
 * @generated from service Genesis.GoodsReceiptsService
 */
export declare const GoodsReceiptsService: ***REMOVED***
    readonly typeName: "Genesis.GoodsReceiptsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof GoodsReceiptsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof GoodsReceiptsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.GoodsReceiptsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof GoodsReceiptsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.GoodsReceiptsService.SendForVerification
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
         * @generated from rpc Genesis.GoodsReceiptsService.Verify
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
         * @generated from rpc Genesis.GoodsReceiptsService.Approve
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
         * @generated from rpc Genesis.GoodsReceiptsService.SendForRevision
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
         * @generated from rpc Genesis.GoodsReceiptsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof GoodsReceiptsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Halt
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
         * @generated from rpc Genesis.GoodsReceiptsService.Discard
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
         * @generated from rpc Genesis.GoodsReceiptsService.Restore
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
         * @generated from rpc Genesis.GoodsReceiptsService.Complete
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
         * @generated from rpc Genesis.GoodsReceiptsService.Repeat
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
         * @generated from rpc Genesis.GoodsReceiptsService.Reopen
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
         * @generated from rpc Genesis.GoodsReceiptsService.CommentAdd
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
         * @generated from rpc Genesis.GoodsReceiptsService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof GoodsReceiptsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Goods Receipt can be marked as completed
         *
         * @generated from rpc Genesis.GoodsReceiptsService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.AddGoodsReceiptItem
         */
        readonly addGoodsReceiptItem: ***REMOVED***
            readonly name: "AddGoodsReceiptItem";
            readonly I: typeof GoodsReceiptsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ModifyGoodsReceiptItem
         */
        readonly modifyGoodsReceiptItem: ***REMOVED***
            readonly name: "ModifyGoodsReceiptItem";
            readonly I: typeof GoodsReceiptsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ApproveGoodsReceiptItem
         */
        readonly approveGoodsReceiptItem: ***REMOVED***
            readonly name: "ApproveGoodsReceiptItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.DeleteGoodsReceiptItem
         */
        readonly deleteGoodsReceiptItem: ***REMOVED***
            readonly name: "DeleteGoodsReceiptItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ReorderGoodsReceiptItems
         */
        readonly reorderGoodsReceiptItems: ***REMOVED***
            readonly name: "ReorderGoodsReceiptItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Goods Receipt Item by ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewGoodsReceiptItemByID
         */
        readonly viewGoodsReceiptItemByID: ***REMOVED***
            readonly name: "ViewGoodsReceiptItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsReceiptItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved goods receipt items for given goods receipt ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewApprovedGoodsReceiptItems
         */
        readonly viewApprovedGoodsReceiptItems: ***REMOVED***
            readonly name: "ViewApprovedGoodsReceiptItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved goods receipt items for given goods receipt ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewUnapprovedGoodsReceiptItems
         */
        readonly viewUnapprovedGoodsReceiptItems: ***REMOVED***
            readonly name: "ViewUnapprovedGoodsReceiptItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the goods receipt item
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewGoodsReceiptItemHistory
         */
        readonly viewGoodsReceiptItemHistory: ***REMOVED***
            readonly name: "ViewGoodsReceiptItemHistory";
            readonly I: typeof GoodsReceiptItemHistoryRequest;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsReceipt;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof GoodsReceiptsServicePaginationReq;
            readonly O: typeof GoodsReceiptsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof GoodsReceiptsServiceEntityPaginationReq;
            readonly O: typeof GoodsReceiptsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given goods receipt
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective goods receipt item info for the given family ID and goods receipt ID
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewProspectiveGoodsReceiptItem
         */
        readonly viewProspectiveGoodsReceiptItem: ***REMOVED***
            readonly name: "ViewProspectiveGoodsReceiptItem";
            readonly I: typeof GoodsReceiptItemProspectiveInfoRequest;
            readonly O: typeof GoodsReceiptsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the associated vendor invoice ID that is denoted by the identifier in the response for the goods receipt that is denoted by the identifier in the request
         *
         * @generated from rpc Genesis.GoodsReceiptsService.ViewAssociatedVendorInvoiceID
         */
        readonly viewAssociatedVendorInvoiceID: ***REMOVED***
            readonly name: "ViewAssociatedVendorInvoiceID";
            readonly I: typeof Identifier;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Goods Receipt has been billed
         *
         * @generated from rpc Genesis.GoodsReceiptsService.IsBilled
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
         * @generated from rpc Genesis.GoodsReceiptsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: ***REMOVED***
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.GoodsReceiptsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof GoodsReceiptsServiceSearchAllReq;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.GoodsReceiptsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof GoodsReceiptsServiceFilterReq;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.GoodsReceiptsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=goods_receipts_connect.d.ts.map