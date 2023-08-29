import ***REMOVED*** EquationsWorkOrdersItemsList, EquationsWorkOrdersList, EquationsWorkOrdersServiceCreateRequest, EquationsWorkOrdersServiceEntityPaginationReq, EquationsWorkOrdersServiceFilterReq, EquationsWorkOrdersServiceItemCreateRequest, EquationsWorkOrdersServiceItemUpdateRequest, EquationsWorkOrdersServicePaginationReq, EquationsWorkOrdersServicePaginationResponse, EquationsWorkOrdersServiceSearchAllReq, EquationsWorkOrdersServiceUpdateRequest, EquationWorkOrder, EquationWorkOrderItem, EquationWorkOrderItemHistoryRequest ***REMOVED*** from "./equations_work_orders_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each equation work order
 *
 * @generated from service Genesis.EquationsWorkOrdersService
 */
export declare const EquationsWorkOrdersService: ***REMOVED***
    readonly typeName: "Genesis.EquationsWorkOrdersService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof EquationsWorkOrdersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof EquationsWorkOrdersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsWorkOrdersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.SendForVerification
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Verify
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Approve
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.SendForRevision
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsWorkOrdersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Halt
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Discard
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Restore
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Complete
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Repeat
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
         * @generated from rpc Genesis.EquationsWorkOrdersService.Reopen
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
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Clone equation from an existing equation (denoted by the identifier)
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Clone
         */
        readonly clone: ***REMOVED***
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.AddEquationWorkOrderItem
         */
        readonly addEquationWorkOrderItem: ***REMOVED***
            readonly name: "AddEquationWorkOrderItem";
            readonly I: typeof EquationsWorkOrdersServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ModifyEquationWorkOrderItem
         */
        readonly modifyEquationWorkOrderItem: ***REMOVED***
            readonly name: "ModifyEquationWorkOrderItem";
            readonly I: typeof EquationsWorkOrdersServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ApproveEquationWorkOrderItem
         */
        readonly approveEquationWorkOrderItem: ***REMOVED***
            readonly name: "ApproveEquationWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.DeleteEquationWorkOrderItem
         */
        readonly deleteEquationWorkOrderItem: ***REMOVED***
            readonly name: "DeleteEquationWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a equation work order
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ReorderEquationWorkOrderItems
         */
        readonly reorderEquationWorkOrderItems: ***REMOVED***
            readonly name: "ReorderEquationWorkOrderItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Equation Work Order Item by ID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewEquationWorkOrderItemByID
         */
        readonly viewEquationWorkOrderItemByID: ***REMOVED***
            readonly name: "ViewEquationWorkOrderItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrderItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved equation work order items for given equation work order ID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewApprovedEquationWorkOrderItems
         */
        readonly viewApprovedEquationWorkOrderItems: ***REMOVED***
            readonly name: "ViewApprovedEquationWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved equation work order items for given equation work order ID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewUnapprovedEquationWorkOrderItems
         */
        readonly viewUnapprovedEquationWorkOrderItems: ***REMOVED***
            readonly name: "ViewUnapprovedEquationWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the equation work order item
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewEquationWorkOrderItemHistory
         */
        readonly viewEquationWorkOrderItemHistory: ***REMOVED***
            readonly name: "ViewEquationWorkOrderItemHistory";
            readonly I: typeof EquationWorkOrderItemHistoryRequest;
            readonly O: typeof EquationsWorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsWorkOrdersServicePaginationReq;
            readonly O: typeof EquationsWorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof EquationsWorkOrdersServiceEntityPaginationReq;
            readonly O: typeof EquationsWorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the latest equation for a work order (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.ViewForWorkOrderID
         */
        readonly viewForWorkOrderID: ***REMOVED***
            readonly name: "ViewForWorkOrderID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationWorkOrder;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof EquationsWorkOrdersServiceSearchAllReq;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof EquationsWorkOrdersServiceFilterReq;
            readonly O: typeof EquationsWorkOrdersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsWorkOrdersService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=equations_work_orders_connect.d.ts.map