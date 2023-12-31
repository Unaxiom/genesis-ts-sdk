import { WorkOrder, WorkOrderItem, WorkOrderItemHistoryRequest, WorkOrderItemProspectiveInfoRequest, WorkOrdersItemsList, WorkOrdersList, WorkOrdersServiceAutofillRequest, WorkOrdersServiceCreateRequest, WorkOrdersServiceEntityPaginationReq, WorkOrdersServiceFilterReq, WorkOrdersServiceItemCreateRequest, WorkOrdersServiceItemUpdateRequest, WorkOrdersServicePaginationReq, WorkOrdersServicePaginationResponse, WorkOrdersServiceSearchAllReq, WorkOrdersServiceUpdateRequest } from "./work_orders_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each work order
 *
 * @generated from service Genesis.WorkOrdersService
 */
export declare const WorkOrdersService: {
    readonly typeName: "Genesis.WorkOrdersService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.WorkOrdersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof WorkOrdersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.WorkOrdersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof WorkOrdersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.WorkOrdersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof WorkOrdersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.WorkOrdersService.SendForVerification
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
         * @generated from rpc Genesis.WorkOrdersService.Verify
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
         * @generated from rpc Genesis.WorkOrdersService.Approve
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
         * @generated from rpc Genesis.WorkOrdersService.SendForRevision
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
         * @generated from rpc Genesis.WorkOrdersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof WorkOrdersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.WorkOrdersService.Halt
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
         * @generated from rpc Genesis.WorkOrdersService.Discard
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
         * @generated from rpc Genesis.WorkOrdersService.Restore
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
         * @generated from rpc Genesis.WorkOrdersService.Complete
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
         * @generated from rpc Genesis.WorkOrdersService.Repeat
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
         * @generated from rpc Genesis.WorkOrdersService.Reopen
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
         * @generated from rpc Genesis.WorkOrdersService.CommentAdd
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
         * @generated from rpc Genesis.WorkOrdersService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the work order
         *
         * @generated from rpc Genesis.WorkOrdersService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof WorkOrdersServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Work Order can be marked as completed
         *
         * @generated from rpc Genesis.WorkOrdersService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.AddWorkOrderItem
         */
        readonly addWorkOrderItem: {
            readonly name: "AddWorkOrderItem";
            readonly I: typeof WorkOrdersServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ModifyWorkOrderItem
         */
        readonly modifyWorkOrderItem: {
            readonly name: "ModifyWorkOrderItem";
            readonly I: typeof WorkOrdersServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ApproveWorkOrderItem
         */
        readonly approveWorkOrderItem: {
            readonly name: "ApproveWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.DeleteWorkOrderItem
         */
        readonly deleteWorkOrderItem: {
            readonly name: "DeleteWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ReorderWorkOrderItems
         */
        readonly reorderWorkOrderItems: {
            readonly name: "ReorderWorkOrderItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Work Order Item by ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWorkOrderItemByID
         */
        readonly viewWorkOrderItemByID: {
            readonly name: "ViewWorkOrderItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof WorkOrderItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved work order items for given work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewApprovedWorkOrderItems
         */
        readonly viewApprovedWorkOrderItems: {
            readonly name: "ViewApprovedWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved work order items for given work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewUnapprovedWorkOrderItems
         */
        readonly viewUnapprovedWorkOrderItems: {
            readonly name: "ViewUnapprovedWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the work order item
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWorkOrderItemHistory
         */
        readonly viewWorkOrderItemHistory: {
            readonly name: "ViewWorkOrderItemHistory";
            readonly I: typeof WorkOrderItemHistoryRequest;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof WorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof WorkOrdersServicePaginationReq;
            readonly O: typeof WorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof WorkOrdersServiceEntityPaginationReq;
            readonly O: typeof WorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given work order
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective work order item info for the given family ID and work order ID
         *
         * @generated from rpc Genesis.WorkOrdersService.ViewProspectiveWorkOrderItem
         */
        readonly viewProspectiveWorkOrderItem: {
            readonly name: "ViewProspectiveWorkOrderItem";
            readonly I: typeof WorkOrderItemProspectiveInfoRequest;
            readonly O: typeof WorkOrdersServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.WorkOrdersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof WorkOrdersServiceSearchAllReq;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.WorkOrdersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof WorkOrdersServiceFilterReq;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.WorkOrdersService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=work_orders_connect.d.ts.map