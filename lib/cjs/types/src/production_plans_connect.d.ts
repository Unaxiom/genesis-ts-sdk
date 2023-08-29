import { ProductionPlan, ProductionPlanItem, ProductionPlanItemHistoryRequest, ProductionPlanItemProspectiveInfoRequest, ProductionPlansItemsList, ProductionPlansList, ProductionPlansServiceAutofillRequest, ProductionPlansServiceCreateRequest, ProductionPlansServiceEntityPaginationReq, ProductionPlansServiceFilterReq, ProductionPlansServiceItemCreateRequest, ProductionPlansServiceItemUpdateRequest, ProductionPlansServicePaginationReq, ProductionPlansServicePaginationResponse, ProductionPlansServiceSearchAllReq, ProductionPlansServiceUpdateRequest } from "./production_plans_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each production plan
 *
 * @generated from service Genesis.ProductionPlansService
 */
export declare const ProductionPlansService: {
    readonly typeName: "Genesis.ProductionPlansService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ProductionPlansService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProductionPlansServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ProductionPlansService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ProductionPlansServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ProductionPlansService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ProductionPlansServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ProductionPlansService.SendForVerification
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
         * @generated from rpc Genesis.ProductionPlansService.Verify
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
         * @generated from rpc Genesis.ProductionPlansService.Approve
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
         * @generated from rpc Genesis.ProductionPlansService.SendForRevision
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
         * @generated from rpc Genesis.ProductionPlansService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ProductionPlansServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.ProductionPlansService.Halt
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
         * @generated from rpc Genesis.ProductionPlansService.Discard
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
         * @generated from rpc Genesis.ProductionPlansService.Restore
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
         * @generated from rpc Genesis.ProductionPlansService.Complete
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
         * @generated from rpc Genesis.ProductionPlansService.Repeat
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
         * @generated from rpc Genesis.ProductionPlansService.Reopen
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
         * @generated from rpc Genesis.ProductionPlansService.CommentAdd
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
         * @generated from rpc Genesis.ProductionPlansService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof ProductionPlansServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Production Plan can be marked as completed
         *
         * @generated from rpc Genesis.ProductionPlansService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.AddProductionPlanItem
         */
        readonly addProductionPlanItem: {
            readonly name: "AddProductionPlanItem";
            readonly I: typeof ProductionPlansServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.ModifyProductionPlanItem
         */
        readonly modifyProductionPlanItem: {
            readonly name: "ModifyProductionPlanItem";
            readonly I: typeof ProductionPlansServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.ApproveProductionPlanItem
         */
        readonly approveProductionPlanItem: {
            readonly name: "ApproveProductionPlanItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.DeleteProductionPlanItem
         */
        readonly deleteProductionPlanItem: {
            readonly name: "DeleteProductionPlanItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.ReorderProductionPlanItems
         */
        readonly reorderProductionPlanItems: {
            readonly name: "ReorderProductionPlanItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Production Plan Item by ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewProductionPlanItemByID
         */
        readonly viewProductionPlanItemByID: {
            readonly name: "ViewProductionPlanItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionPlanItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved production plan items for given production plan ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewApprovedProductionPlanItems
         */
        readonly viewApprovedProductionPlanItems: {
            readonly name: "ViewApprovedProductionPlanItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved production plan items for given production plan ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewUnapprovedProductionPlanItems
         */
        readonly viewUnapprovedProductionPlanItems: {
            readonly name: "ViewUnapprovedProductionPlanItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the production plan item
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewProductionPlanItemHistory
         */
        readonly viewProductionPlanItemHistory: {
            readonly name: "ViewProductionPlanItemHistory";
            readonly I: typeof ProductionPlanItemHistoryRequest;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionPlan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ProductionPlansServicePaginationReq;
            readonly O: typeof ProductionPlansServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ProductionPlansServiceEntityPaginationReq;
            readonly O: typeof ProductionPlansServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective production plan item info for the given family ID and production plan ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewProspectiveProductionPlanItem
         */
        readonly viewProspectiveProductionPlanItem: {
            readonly name: "ViewProspectiveProductionPlanItem";
            readonly I: typeof ProductionPlanItemProspectiveInfoRequest;
            readonly O: typeof ProductionPlansServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ProductionPlansService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ProductionPlansServiceSearchAllReq;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ProductionPlansService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ProductionPlansServiceFilterReq;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ProductionPlansService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=production_plans_connect.d.ts.map