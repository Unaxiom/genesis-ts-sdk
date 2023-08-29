import ***REMOVED*** WorkOrder, WorkOrderItem, WorkOrderItemHistoryRequest, WorkOrderItemProspectiveInfoRequest, WorkOrdersItemsList, WorkOrdersList, WorkOrdersServiceAutofillRequest, WorkOrdersServiceCreateRequest, WorkOrdersServiceEntityPaginationReq, WorkOrdersServiceFilterReq, WorkOrdersServiceItemCreateRequest, WorkOrdersServiceItemUpdateRequest, WorkOrdersServicePaginationReq, WorkOrdersServicePaginationResponse, WorkOrdersServiceSearchAllReq, WorkOrdersServiceUpdateRequest ***REMOVED*** from "./work_orders_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each work order
 *
 * @generated from service Genesis.WorkOrdersService
 */
export declare const WorkOrdersService: ***REMOVED***
    readonly typeName: "Genesis.WorkOrdersService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.WorkOrdersService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof WorkOrdersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.WorkOrdersService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof WorkOrdersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.WorkOrdersService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof WorkOrdersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.WorkOrdersService.SendForVerification
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
         * @generated from rpc Genesis.WorkOrdersService.Verify
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
         * @generated from rpc Genesis.WorkOrdersService.Approve
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
         * @generated from rpc Genesis.WorkOrdersService.SendForRevision
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
         * @generated from rpc Genesis.WorkOrdersService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof WorkOrdersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.WorkOrdersService.Halt
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
         * @generated from rpc Genesis.WorkOrdersService.Discard
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
         * @generated from rpc Genesis.WorkOrdersService.Restore
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
         * @generated from rpc Genesis.WorkOrdersService.Complete
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
         * @generated from rpc Genesis.WorkOrdersService.Repeat
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
         * @generated from rpc Genesis.WorkOrdersService.Reopen
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
         * @generated from rpc Genesis.WorkOrdersService.CommentAdd
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
         * @generated from rpc Genesis.WorkOrdersService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the work order
         *
         * @generated from rpc Genesis.WorkOrdersService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof WorkOrdersServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Work Order can be marked as completed
         *
         * @generated from rpc Genesis.WorkOrdersService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.AddWorkOrderItem
         */
        readonly addWorkOrderItem: ***REMOVED***
            readonly name: "AddWorkOrderItem";
            readonly I: typeof WorkOrdersServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ModifyWorkOrderItem
         */
        readonly modifyWorkOrderItem: ***REMOVED***
            readonly name: "ModifyWorkOrderItem";
            readonly I: typeof WorkOrdersServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ApproveWorkOrderItem
         */
        readonly approveWorkOrderItem: ***REMOVED***
            readonly name: "ApproveWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.DeleteWorkOrderItem
         */
        readonly deleteWorkOrderItem: ***REMOVED***
            readonly name: "DeleteWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ReorderWorkOrderItems
         */
        readonly reorderWorkOrderItems: ***REMOVED***
            readonly name: "ReorderWorkOrderItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Work Order Item by ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWorkOrderItemByID
         */
        readonly viewWorkOrderItemByID: ***REMOVED***
            readonly name: "ViewWorkOrderItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof WorkOrderItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved work order items for given work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewApprovedWorkOrderItems
         */
        readonly viewApprovedWorkOrderItems: ***REMOVED***
            readonly name: "ViewApprovedWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved work order items for given work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewUnapprovedWorkOrderItems
         */
        readonly viewUnapprovedWorkOrderItems: ***REMOVED***
            readonly name: "ViewUnapprovedWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the work order item
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWorkOrderItemHistory
         */
        readonly viewWorkOrderItemHistory: ***REMOVED***
            readonly name: "ViewWorkOrderItemHistory";
            readonly I: typeof WorkOrderItemHistoryRequest;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof WorkOrder;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof WorkOrdersServicePaginationReq;
            readonly O: typeof WorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof WorkOrdersServiceEntityPaginationReq;
            readonly O: typeof WorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective work order item info for the given family ID and work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewProspectiveWorkOrderItem
         */
        readonly viewProspectiveWorkOrderItem: ***REMOVED***
            readonly name: "ViewProspectiveWorkOrderItem";
            readonly I: typeof WorkOrderItemProspectiveInfoRequest;
            readonly O: typeof WorkOrdersServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.WorkOrdersService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof WorkOrdersServiceSearchAllReq;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.WorkOrdersService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof WorkOrdersServiceFilterReq;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.WorkOrdersService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=work_orders_connect.d.ts.map