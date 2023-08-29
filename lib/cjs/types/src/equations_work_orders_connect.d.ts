import { EquationsWorkOrdersItemsList, EquationsWorkOrdersList, EquationsWorkOrdersServiceCreateRequest, EquationsWorkOrdersServiceEntityPaginationReq, EquationsWorkOrdersServiceFilterReq, EquationsWorkOrdersServiceItemCreateRequest, EquationsWorkOrdersServiceItemUpdateRequest, EquationsWorkOrdersServicePaginationReq, EquationsWorkOrdersServicePaginationResponse, EquationsWorkOrdersServiceSearchAllReq, EquationsWorkOrdersServiceUpdateRequest, EquationWorkOrder, EquationWorkOrderItem, EquationWorkOrderItemHistoryRequest } from "./equations_work_orders_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each equation work order
 *
 * @generated from service Genesis.EquationsWorkOrdersService
 */
export declare const EquationsWorkOrdersService: {
    readonly typeName: "Genesis.EquationsWorkOrdersService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EquationsWorkOrdersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof EquationsWorkOrdersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsWorkOrdersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.SendForVerification
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Verify
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Approve
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.SendForRevision
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsWorkOrdersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Halt
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Discard
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Restore
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Complete
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Repeat
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Reopen
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.CommentAdd
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.AddEquationWorkOrderItem
         */
        readonly addEquationWorkOrderItem: {
            readonly name: "AddEquationWorkOrderItem";
            readonly I: typeof EquationsWorkOrdersServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ModifyEquationWorkOrderItem
         */
        readonly modifyEquationWorkOrderItem: {
            readonly name: "ModifyEquationWorkOrderItem";
            readonly I: typeof EquationsWorkOrdersServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ApproveEquationWorkOrderItem
         */
        readonly approveEquationWorkOrderItem: {
            readonly name: "ApproveEquationWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.DeleteEquationWorkOrderItem
         */
        readonly deleteEquationWorkOrderItem: {
            readonly name: "DeleteEquationWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ReorderEquationWorkOrderItems
         */
        readonly reorderEquationWorkOrderItems: {
            readonly name: "ReorderEquationWorkOrderItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Equation Work Order Item by ID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewEquationWorkOrderItemByID
         */
        readonly viewEquationWorkOrderItemByID: {
            readonly name: "ViewEquationWorkOrderItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrderItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation work order items for given equation work order ID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewApprovedEquationWorkOrderItems
         */
        readonly viewApprovedEquationWorkOrderItems: {
            readonly name: "ViewApprovedEquationWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation work order items for given equation work order ID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewUnapprovedEquationWorkOrderItems
         */
        readonly viewUnapprovedEquationWorkOrderItems: {
            readonly name: "ViewUnapprovedEquationWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the equation work order item
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewEquationWorkOrderItemHistory
         */
        readonly viewEquationWorkOrderItemHistory: {
            readonly name: "ViewEquationWorkOrderItemHistory";
            readonly I: typeof EquationWorkOrderItemHistoryRequest;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsWorkOrdersServicePaginationReq;
            readonly O: typeof EquationsWorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof EquationsWorkOrdersServiceEntityPaginationReq;
            readonly O: typeof EquationsWorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for a work order (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewForWorkOrderID
         */
        readonly viewForWorkOrderID: {
            readonly name: "ViewForWorkOrderID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EquationsWorkOrdersServiceSearchAllReq;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EquationsWorkOrdersServiceFilterReq;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_work_orders_connect.d.ts.map