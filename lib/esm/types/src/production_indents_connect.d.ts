import ***REMOVED*** ProductionIndent, ProductionIndentItem, ProductionIndentItemHistoryRequest, ProductionIndentItemProspectiveInfoRequest, ProductionIndentsItemsList, ProductionIndentsList, ProductionIndentsServiceAutofillRequest, ProductionIndentsServiceCreateRequest, ProductionIndentsServiceEntityPaginationReq, ProductionIndentsServiceFilterReq, ProductionIndentsServiceItemCreateRequest, ProductionIndentsServiceItemUpdateRequest, ProductionIndentsServicePaginationReq, ProductionIndentsServicePaginationResponse, ProductionIndentsServiceSearchAllReq, ProductionIndentsServiceUpdateRequest ***REMOVED*** from "./production_indents_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each production indent
 *
 * @generated from service Genesis.ProductionIndentsService
 */
export declare const ProductionIndentsService: ***REMOVED***
    readonly typeName: "Genesis.ProductionIndentsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ProductionIndentsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof ProductionIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ProductionIndentsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof ProductionIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ProductionIndentsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof ProductionIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ProductionIndentsService.SendForVerification
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
         * @generated from rpc Genesis.ProductionIndentsService.Verify
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
         * @generated from rpc Genesis.ProductionIndentsService.Approve
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
         * @generated from rpc Genesis.ProductionIndentsService.SendForRevision
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
         * @generated from rpc Genesis.ProductionIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof ProductionIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.ProductionIndentsService.Halt
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
         * @generated from rpc Genesis.ProductionIndentsService.Discard
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
         * @generated from rpc Genesis.ProductionIndentsService.Restore
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
         * @generated from rpc Genesis.ProductionIndentsService.Complete
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
         * @generated from rpc Genesis.ProductionIndentsService.Repeat
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
         * @generated from rpc Genesis.ProductionIndentsService.Reopen
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
         * @generated from rpc Genesis.ProductionIndentsService.CommentAdd
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
         * @generated from rpc Genesis.ProductionIndentsService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof ProductionIndentsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Production Indent can be marked as completed
         *
         * @generated from rpc Genesis.ProductionIndentsService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.AddProductionIndentItem
         */
        readonly addProductionIndentItem: ***REMOVED***
            readonly name: "AddProductionIndentItem";
            readonly I: typeof ProductionIndentsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ModifyProductionIndentItem
         */
        readonly modifyProductionIndentItem: ***REMOVED***
            readonly name: "ModifyProductionIndentItem";
            readonly I: typeof ProductionIndentsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ApproveProductionIndentItem
         */
        readonly approveProductionIndentItem: ***REMOVED***
            readonly name: "ApproveProductionIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.DeleteProductionIndentItem
         */
        readonly deleteProductionIndentItem: ***REMOVED***
            readonly name: "DeleteProductionIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ReorderProductionIndentItems
         */
        readonly reorderProductionIndentItems: ***REMOVED***
            readonly name: "ReorderProductionIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Production Indent Item by ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProductionIndentItemByID
         */
        readonly viewProductionIndentItemByID: ***REMOVED***
            readonly name: "ViewProductionIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionIndentItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved production indent items for given production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewApprovedProductionIndentItems
         */
        readonly viewApprovedProductionIndentItems: ***REMOVED***
            readonly name: "ViewApprovedProductionIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved production indent items for given production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewUnapprovedProductionIndentItems
         */
        readonly viewUnapprovedProductionIndentItems: ***REMOVED***
            readonly name: "ViewUnapprovedProductionIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the production indent item
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProductionIndentItemHistory
         */
        readonly viewProductionIndentItemHistory: ***REMOVED***
            readonly name: "ViewProductionIndentItemHistory";
            readonly I: typeof ProductionIndentItemHistoryRequest;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionIndent;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof ProductionIndentsServicePaginationReq;
            readonly O: typeof ProductionIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ProductionIndentsServiceEntityPaginationReq;
            readonly O: typeof ProductionIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective production indent item info for the given family ID and production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProspectiveProductionIndentItem
         */
        readonly viewProspectiveProductionIndentItem: ***REMOVED***
            readonly name: "ViewProspectiveProductionIndentItem";
            readonly I: typeof ProductionIndentItemProspectiveInfoRequest;
            readonly O: typeof ProductionIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: ***REMOVED***
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof ProductionIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ProductionIndentsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof ProductionIndentsServiceSearchAllReq;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ProductionIndentsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof ProductionIndentsServiceFilterReq;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ProductionIndentsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=production_indents_connect.d.ts.map