import { Goal, GoalItem, GoalItemHistoryRequest, GoalsItemsList, GoalsList, GoalsServiceCreateRequest, GoalsServiceEntityPaginationReq, GoalsServiceFilterReq, GoalsServiceItemCreateRequest, GoalsServiceItemUpdateRequest, GoalsServicePaginationReq, GoalsServicePaginationResponse, GoalsServiceSearchAllReq, GoalsServiceUpdateRequest } from "./goals_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each goal
 *
 * @generated from service Genesis.GoalsService
 */
export declare const GoalsService: {
    readonly typeName: "Genesis.GoalsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.GoalsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof GoalsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.GoalsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof GoalsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.GoalsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof GoalsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.GoalsService.SendForVerification
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
         * @generated from rpc Genesis.GoalsService.Verify
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
         * @generated from rpc Genesis.GoalsService.Approve
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
         * @generated from rpc Genesis.GoalsService.SendForRevision
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
         * @generated from rpc Genesis.GoalsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof GoalsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.GoalsService.Halt
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
         * @generated from rpc Genesis.GoalsService.Discard
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
         * @generated from rpc Genesis.GoalsService.Restore
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
         * @generated from rpc Genesis.GoalsService.Complete
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
         * @generated from rpc Genesis.GoalsService.Repeat
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
         * @generated from rpc Genesis.GoalsService.Reopen
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
         * @generated from rpc Genesis.GoalsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone goal from an existing goal (denoted by the identifier)
         *
         * @generated from rpc Genesis.GoalsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a goal
         *
         * @generated from rpc Genesis.GoalsService.AddGoalItem
         */
        readonly addGoalItem: {
            readonly name: "AddGoalItem";
            readonly I: typeof GoalsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a goal
         *
         * @generated from rpc Genesis.GoalsService.ModifyGoalItem
         */
        readonly modifyGoalItem: {
            readonly name: "ModifyGoalItem";
            readonly I: typeof GoalsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a goal
         *
         * @generated from rpc Genesis.GoalsService.ApproveGoalItem
         */
        readonly approveGoalItem: {
            readonly name: "ApproveGoalItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a goal
         *
         * @generated from rpc Genesis.GoalsService.DeleteGoalItem
         */
        readonly deleteGoalItem: {
            readonly name: "DeleteGoalItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a goal
         *
         * @generated from rpc Genesis.GoalsService.ReorderGoalItems
         */
        readonly reorderGoalItems: {
            readonly name: "ReorderGoalItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View goal Item by ID
         *
         * @generated from rpc Genesis.GoalsService.ViewGoalItemByID
         */
        readonly viewGoalItemByID: {
            readonly name: "ViewGoalItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoalItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved goal items for given goal ID
         *
         * @generated from rpc Genesis.GoalsService.ViewApprovedGoalItems
         */
        readonly viewApprovedGoalItems: {
            readonly name: "ViewApprovedGoalItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoalsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved goal items for given goal ID
         *
         * @generated from rpc Genesis.GoalsService.ViewUnapprovedGoalItems
         */
        readonly viewUnapprovedGoalItems: {
            readonly name: "ViewUnapprovedGoalItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoalsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the goal item
         *
         * @generated from rpc Genesis.GoalsService.ViewGoalItemHistory
         */
        readonly viewGoalItemHistory: {
            readonly name: "ViewGoalItemHistory";
            readonly I: typeof GoalItemHistoryRequest;
            readonly O: typeof GoalsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.GoalsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Goal;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.GoalsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof GoalsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.GoalsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoalsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.GoalsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof GoalsServicePaginationReq;
            readonly O: typeof GoalsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.GoalsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof GoalsServiceEntityPaginationReq;
            readonly O: typeof GoalsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.GoalsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof GoalsServiceSearchAllReq;
            readonly O: typeof GoalsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.GoalsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof GoalsServiceFilterReq;
            readonly O: typeof GoalsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.GoalsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=goals_connect.d.ts.map