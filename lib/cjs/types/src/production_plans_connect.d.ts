import ***REMOVED*** ProductionPlan, ProductionPlanItem, ProductionPlanItemHistoryRequest, ProductionPlanItemProspectiveInfoRequest, ProductionPlansItemsList, ProductionPlansList, ProductionPlansServiceAutofillRequest, ProductionPlansServiceCreateRequest, ProductionPlansServiceEntityPaginationReq, ProductionPlansServiceFilterReq, ProductionPlansServiceItemCreateRequest, ProductionPlansServiceItemUpdateRequest, ProductionPlansServicePaginationReq, ProductionPlansServicePaginationResponse, ProductionPlansServiceSearchAllReq, ProductionPlansServiceUpdateRequest ***REMOVED*** from "./production_plans_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each production plan
 *
 * @generated from service Genesis.ProductionPlansService
 */
export declare const ProductionPlansService: ***REMOVED***
    readonly typeName: "Genesis.ProductionPlansService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ProductionPlansService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof ProductionPlansServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ProductionPlansService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof ProductionPlansServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ProductionPlansService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof ProductionPlansServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ProductionPlansService.SendForVerification
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
         * @generated from rpc Genesis.ProductionPlansService.Verify
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
         * @generated from rpc Genesis.ProductionPlansService.Approve
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
         * @generated from rpc Genesis.ProductionPlansService.SendForRevision
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
         * @generated from rpc Genesis.ProductionPlansService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof ProductionPlansServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.ProductionPlansService.Halt
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
         * @generated from rpc Genesis.ProductionPlansService.Discard
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
         * @generated from rpc Genesis.ProductionPlansService.Restore
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
         * @generated from rpc Genesis.ProductionPlansService.Complete
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
         * @generated from rpc Genesis.ProductionPlansService.Repeat
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
         * @generated from rpc Genesis.ProductionPlansService.Reopen
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
         * @generated from rpc Genesis.ProductionPlansService.CommentAdd
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
         * @generated from rpc Genesis.ProductionPlansService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof ProductionPlansServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Production Plan can be marked as completed
         *
         * @generated from rpc Genesis.ProductionPlansService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.AddProductionPlanItem
         */
        readonly addProductionPlanItem: ***REMOVED***
            readonly name: "AddProductionPlanItem";
            readonly I: typeof ProductionPlansServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.ModifyProductionPlanItem
         */
        readonly modifyProductionPlanItem: ***REMOVED***
            readonly name: "ModifyProductionPlanItem";
            readonly I: typeof ProductionPlansServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.ApproveProductionPlanItem
         */
        readonly approveProductionPlanItem: ***REMOVED***
            readonly name: "ApproveProductionPlanItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.DeleteProductionPlanItem
         */
        readonly deleteProductionPlanItem: ***REMOVED***
            readonly name: "DeleteProductionPlanItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.ReorderProductionPlanItems
         */
        readonly reorderProductionPlanItems: ***REMOVED***
            readonly name: "ReorderProductionPlanItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Production Plan Item by ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewProductionPlanItemByID
         */
        readonly viewProductionPlanItemByID: ***REMOVED***
            readonly name: "ViewProductionPlanItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionPlanItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved production plan items for given production plan ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewApprovedProductionPlanItems
         */
        readonly viewApprovedProductionPlanItems: ***REMOVED***
            readonly name: "ViewApprovedProductionPlanItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved production plan items for given production plan ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewUnapprovedProductionPlanItems
         */
        readonly viewUnapprovedProductionPlanItems: ***REMOVED***
            readonly name: "ViewUnapprovedProductionPlanItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the production plan item
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewProductionPlanItemHistory
         */
        readonly viewProductionPlanItemHistory: ***REMOVED***
            readonly name: "ViewProductionPlanItemHistory";
            readonly I: typeof ProductionPlanItemHistoryRequest;
            readonly O: typeof ProductionPlansItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProductionPlan;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof ProductionPlansServicePaginationReq;
            readonly O: typeof ProductionPlansServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ProductionPlansServiceEntityPaginationReq;
            readonly O: typeof ProductionPlansServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given production plan
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective production plan item info for the given family ID and production plan ID
         *
         * @generated from rpc Genesis.ProductionPlansService.ViewProspectiveProductionPlanItem
         */
        readonly viewProspectiveProductionPlanItem: ***REMOVED***
            readonly name: "ViewProspectiveProductionPlanItem";
            readonly I: typeof ProductionPlanItemProspectiveInfoRequest;
            readonly O: typeof ProductionPlansServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ProductionPlansService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof ProductionPlansServiceSearchAllReq;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ProductionPlansService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof ProductionPlansServiceFilterReq;
            readonly O: typeof ProductionPlansList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ProductionPlansService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=production_plans_connect.d.ts.map