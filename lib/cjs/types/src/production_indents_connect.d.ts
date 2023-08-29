import { ProductionIndent, ProductionIndentItem, ProductionIndentItemHistoryRequest, ProductionIndentItemProspectiveInfoRequest, ProductionIndentsItemsList, ProductionIndentsList, ProductionIndentsServiceAutofillRequest, ProductionIndentsServiceCreateRequest, ProductionIndentsServiceEntityPaginationReq, ProductionIndentsServiceFilterReq, ProductionIndentsServiceItemCreateRequest, ProductionIndentsServiceItemUpdateRequest, ProductionIndentsServicePaginationReq, ProductionIndentsServicePaginationResponse, ProductionIndentsServiceSearchAllReq, ProductionIndentsServiceUpdateRequest } from "./production_indents_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each production indent
 *
 * @generated from service Genesis.ProductionIndentsService
 */
export declare const ProductionIndentsService: {
    readonly typeName: "Genesis.ProductionIndentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ProductionIndentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProductionIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ProductionIndentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ProductionIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ProductionIndentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ProductionIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ProductionIndentsService.SendForVerification
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
         * @generated from rpc Genesis.ProductionIndentsService.Verify
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
         * @generated from rpc Genesis.ProductionIndentsService.Approve
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
         * @generated from rpc Genesis.ProductionIndentsService.SendForRevision
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
         * @generated from rpc Genesis.ProductionIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ProductionIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.ProductionIndentsService.Halt
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
         * @generated from rpc Genesis.ProductionIndentsService.Discard
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
         * @generated from rpc Genesis.ProductionIndentsService.Restore
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
         * @generated from rpc Genesis.ProductionIndentsService.Complete
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
         * @generated from rpc Genesis.ProductionIndentsService.Repeat
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
         * @generated from rpc Genesis.ProductionIndentsService.Reopen
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
         * @generated from rpc Genesis.ProductionIndentsService.CommentAdd
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
         * @generated from rpc Genesis.ProductionIndentsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof ProductionIndentsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Production Indent can be marked as completed
         *
         * @generated from rpc Genesis.ProductionIndentsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.AddProductionIndentItem
         */
        readonly addProductionIndentItem: {
            readonly name: "AddProductionIndentItem";
            readonly I: typeof ProductionIndentsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ModifyProductionIndentItem
         */
        readonly modifyProductionIndentItem: {
            readonly name: "ModifyProductionIndentItem";
            readonly I: typeof ProductionIndentsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ApproveProductionIndentItem
         */
        readonly approveProductionIndentItem: {
            readonly name: "ApproveProductionIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.DeleteProductionIndentItem
         */
        readonly deleteProductionIndentItem: {
            readonly name: "DeleteProductionIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ReorderProductionIndentItems
         */
        readonly reorderProductionIndentItems: {
            readonly name: "ReorderProductionIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Production Indent Item by ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProductionIndentItemByID
         */
        readonly viewProductionIndentItemByID: {
            readonly name: "ViewProductionIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionIndentItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved production indent items for given production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewApprovedProductionIndentItems
         */
        readonly viewApprovedProductionIndentItems: {
            readonly name: "ViewApprovedProductionIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved production indent items for given production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewUnapprovedProductionIndentItems
         */
        readonly viewUnapprovedProductionIndentItems: {
            readonly name: "ViewUnapprovedProductionIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the production indent item
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProductionIndentItemHistory
         */
        readonly viewProductionIndentItemHistory: {
            readonly name: "ViewProductionIndentItemHistory";
            readonly I: typeof ProductionIndentItemHistoryRequest;
            readonly O: typeof ProductionIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ProductionIndentsServicePaginationReq;
            readonly O: typeof ProductionIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ProductionIndentsServiceEntityPaginationReq;
            readonly O: typeof ProductionIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given production indent
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective production indent item info for the given family ID and production indent ID
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewProspectiveProductionIndentItem
         */
        readonly viewProspectiveProductionIndentItem: {
            readonly name: "ViewProspectiveProductionIndentItem";
            readonly I: typeof ProductionIndentItemProspectiveInfoRequest;
            readonly O: typeof ProductionIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Genesis.ProductionIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: {
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof ProductionIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ProductionIndentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ProductionIndentsServiceSearchAllReq;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ProductionIndentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ProductionIndentsServiceFilterReq;
            readonly O: typeof ProductionIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ProductionIndentsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=production_indents_connect.d.ts.map