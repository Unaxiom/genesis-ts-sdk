import ***REMOVED*** GoodsDispatch, GoodsDispatchesItemsList, GoodsDispatchesList, GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest, GoodsDispatchesServiceAutofillRequest, GoodsDispatchesServiceCreateRequest, GoodsDispatchesServiceEntityPaginationReq, GoodsDispatchesServiceFilterReq, GoodsDispatchesServiceItemCreateRequest, GoodsDispatchesServiceItemUpdateRequest, GoodsDispatchesServicePaginationReq, GoodsDispatchesServicePaginationResponse, GoodsDispatchesServiceSearchAllReq, GoodsDispatchesServiceUpdateRequest, GoodsDispatchItem, GoodsDispatchItemHistoryRequest, GoodsDispatchItemProspectiveInfoRequest ***REMOVED*** from "./goods_dispatches_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each goods dispatch
 *
 * @generated from service Genesis.GoodsDispatchesService
 */
export declare const GoodsDispatchesService: ***REMOVED***
    readonly typeName: "Genesis.GoodsDispatchesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof GoodsDispatchesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof GoodsDispatchesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.GoodsDispatchesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof GoodsDispatchesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.GoodsDispatchesService.SendForVerification
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
         * @generated from rpc Genesis.GoodsDispatchesService.Verify
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
         * @generated from rpc Genesis.GoodsDispatchesService.Approve
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
         * @generated from rpc Genesis.GoodsDispatchesService.SendForRevision
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
         * @generated from rpc Genesis.GoodsDispatchesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof GoodsDispatchesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Halt
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
         * @generated from rpc Genesis.GoodsDispatchesService.Discard
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
         * @generated from rpc Genesis.GoodsDispatchesService.Restore
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
         * @generated from rpc Genesis.GoodsDispatchesService.Complete
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
         * @generated from rpc Genesis.GoodsDispatchesService.Repeat
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
         * @generated from rpc Genesis.GoodsDispatchesService.Reopen
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
         * @generated from rpc Genesis.GoodsDispatchesService.CommentAdd
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
         * @generated from rpc Genesis.GoodsDispatchesService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof GoodsDispatchesServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Goods Dispatch can be marked as completed
         *
         * @generated from rpc Genesis.GoodsDispatchesService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.AddGoodsDispatchItem
         */
        readonly addGoodsDispatchItem: ***REMOVED***
            readonly name: "AddGoodsDispatchItem";
            readonly I: typeof GoodsDispatchesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ModifyGoodsDispatchItem
         */
        readonly modifyGoodsDispatchItem: ***REMOVED***
            readonly name: "ModifyGoodsDispatchItem";
            readonly I: typeof GoodsDispatchesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ApproveGoodsDispatchItem
         */
        readonly approveGoodsDispatchItem: ***REMOVED***
            readonly name: "ApproveGoodsDispatchItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.DeleteGoodsDispatchItem
         */
        readonly deleteGoodsDispatchItem: ***REMOVED***
            readonly name: "DeleteGoodsDispatchItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ReorderGoodsDispatchItems
         */
        readonly reorderGoodsDispatchItems: ***REMOVED***
            readonly name: "ReorderGoodsDispatchItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Goods Dispatch Item by ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemByID
         */
        readonly viewGoodsDispatchItemByID: ***REMOVED***
            readonly name: "ViewGoodsDispatchItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsDispatchItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Goods Dispatch Item by Inventory Hash
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemByInventoryHash
         */
        readonly viewGoodsDispatchItemByInventoryHash: ***REMOVED***
            readonly name: "ViewGoodsDispatchItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof GoodsDispatchItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved goods dispatch items for given goods dispatch ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewApprovedGoodsDispatchItems
         */
        readonly viewApprovedGoodsDispatchItems: ***REMOVED***
            readonly name: "ViewApprovedGoodsDispatchItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved goods dispatch items for given goods dispatch ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewUnapprovedGoodsDispatchItems
         */
        readonly viewUnapprovedGoodsDispatchItems: ***REMOVED***
            readonly name: "ViewUnapprovedGoodsDispatchItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the goods dispatch item
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewGoodsDispatchItemHistory
         */
        readonly viewGoodsDispatchItemHistory: ***REMOVED***
            readonly name: "ViewGoodsDispatchItemHistory";
            readonly I: typeof GoodsDispatchItemHistoryRequest;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsDispatch;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof GoodsDispatchesServicePaginationReq;
            readonly O: typeof GoodsDispatchesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof GoodsDispatchesServiceEntityPaginationReq;
            readonly O: typeof GoodsDispatchesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given goods dispatch
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective goods dispatch item info for the given family ID and goods dispatch ID
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewProspectiveGoodsDispatchItem
         */
        readonly viewProspectiveGoodsDispatchItem: ***REMOVED***
            readonly name: "ViewProspectiveGoodsDispatchItem";
            readonly I: typeof GoodsDispatchItemProspectiveInfoRequest;
            readonly O: typeof GoodsDispatchesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the associated sales invoice ID that is denoted by the identifier in the response for the goods dispatch that is denoted by the identifier in the request
         *
         * @generated from rpc Genesis.GoodsDispatchesService.ViewAssociatedSalesInvoiceID
         */
        readonly viewAssociatedSalesInvoiceID: ***REMOVED***
            readonly name: "ViewAssociatedSalesInvoiceID";
            readonly I: typeof Identifier;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Goods Dispatch has been billed
         *
         * @generated from rpc Genesis.GoodsDispatchesService.IsBilled
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
         * @generated from rpc Genesis.GoodsDispatchesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: ***REMOVED***
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.GoodsDispatchesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof GoodsDispatchesServiceSearchAllReq;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.GoodsDispatchesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof GoodsDispatchesServiceFilterReq;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.GoodsDispatchesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=goods_dispatches_connect.d.ts.map