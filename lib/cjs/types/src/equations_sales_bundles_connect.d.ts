import { EquationSalesBundle, EquationSalesBundleItem, EquationSalesBundleItemHistoryRequest, EquationsSalesBundlesItemsList, EquationsSalesBundlesList, EquationsSalesBundlesServiceCreateRequest, EquationsSalesBundlesServiceEntityPaginationReq, EquationsSalesBundlesServiceFilterReq, EquationsSalesBundlesServiceItemCreateRequest, EquationsSalesBundlesServiceItemUpdateRequest, EquationsSalesBundlesServicePaginationReq, EquationsSalesBundlesServicePaginationResponse, EquationsSalesBundlesServiceSearchAllReq, EquationsSalesBundlesServiceUpdateRequest } from "./equations_sales_bundles_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each equation sales bundle
 *
 * @generated from service Genesis.EquationsSalesBundlesService
 */
export declare const EquationsSalesBundlesService: {
    readonly typeName: "Genesis.EquationsSalesBundlesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EquationsSalesBundlesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof EquationsSalesBundlesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsSalesBundlesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.SendForVerification
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Verify
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Approve
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.SendForRevision
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsSalesBundlesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Halt
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Discard
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Restore
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Complete
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Repeat
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Reopen
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
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone equation from an existing equation (denoted by the identifier)
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.AddEquationSalesBundleItem
         */
        readonly addEquationSalesBundleItem: {
            readonly name: "AddEquationSalesBundleItem";
            readonly I: typeof EquationsSalesBundlesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ModifyEquationSalesBundleItem
         */
        readonly modifyEquationSalesBundleItem: {
            readonly name: "ModifyEquationSalesBundleItem";
            readonly I: typeof EquationsSalesBundlesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ApproveEquationSalesBundleItem
         */
        readonly approveEquationSalesBundleItem: {
            readonly name: "ApproveEquationSalesBundleItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.DeleteEquationSalesBundleItem
         */
        readonly deleteEquationSalesBundleItem: {
            readonly name: "DeleteEquationSalesBundleItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ReorderEquationSalesBundleItems
         */
        readonly reorderEquationSalesBundleItems: {
            readonly name: "ReorderEquationSalesBundleItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Equation Sales Bundle Item by ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewEquationSalesBundleItemByID
         */
        readonly viewEquationSalesBundleItemByID: {
            readonly name: "ViewEquationSalesBundleItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundleItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation sales bundle items for given equation sales bundle ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewApprovedEquationSalesBundleItems
         */
        readonly viewApprovedEquationSalesBundleItems: {
            readonly name: "ViewApprovedEquationSalesBundleItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation sales bundle items for given equation sales bundle ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewUnapprovedEquationSalesBundleItems
         */
        readonly viewUnapprovedEquationSalesBundleItems: {
            readonly name: "ViewUnapprovedEquationSalesBundleItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the equation sales bundle item
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewEquationSalesBundleItemHistory
         */
        readonly viewEquationSalesBundleItemHistory: {
            readonly name: "ViewEquationSalesBundleItemHistory";
            readonly I: typeof EquationSalesBundleItemHistoryRequest;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsSalesBundlesServicePaginationReq;
            readonly O: typeof EquationsSalesBundlesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof EquationsSalesBundlesServiceEntityPaginationReq;
            readonly O: typeof EquationsSalesBundlesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewForFamilyID
         */
        readonly viewForFamilyID: {
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EquationsSalesBundlesServiceSearchAllReq;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EquationsSalesBundlesServiceFilterReq;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_sales_bundles_connect.d.ts.map