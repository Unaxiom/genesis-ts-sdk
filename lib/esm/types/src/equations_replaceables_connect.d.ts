import { EquationReplaceable, EquationReplaceableItem, EquationReplaceableItemHistoryRequest, EquationsReplaceablesItemsList, EquationsReplaceablesList, EquationsReplaceablesServiceCreateRequest, EquationsReplaceablesServiceEntityPaginationReq, EquationsReplaceablesServiceFilterReq, EquationsReplaceablesServiceItemCreateRequest, EquationsReplaceablesServiceItemUpdateRequest, EquationsReplaceablesServicePaginationReq, EquationsReplaceablesServicePaginationResponse, EquationsReplaceablesServiceSearchAllReq, EquationsReplaceablesServiceUpdateRequest } from "./equations_replaceables_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each equation replaceable
 *
 * @generated from service Genesis.EquationsReplaceablesService
 */
export declare const EquationsReplaceablesService: {
    readonly typeName: "Genesis.EquationsReplaceablesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EquationsReplaceablesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof EquationsReplaceablesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsReplaceablesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.SendForVerification
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Verify
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Approve
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
         * @generated from rpc Genesis.EquationsReplaceablesService.SendForRevision
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
         * @generated from rpc Genesis.EquationsReplaceablesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsReplaceablesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.Halt
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Discard
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Restore
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Complete
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Repeat
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Reopen
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
         * @generated from rpc Genesis.EquationsReplaceablesService.CommentAdd
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.AddEquationReplaceableItem
         */
        readonly addEquationReplaceableItem: {
            readonly name: "AddEquationReplaceableItem";
            readonly I: typeof EquationsReplaceablesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ModifyEquationReplaceableItem
         */
        readonly modifyEquationReplaceableItem: {
            readonly name: "ModifyEquationReplaceableItem";
            readonly I: typeof EquationsReplaceablesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ApproveEquationReplaceableItem
         */
        readonly approveEquationReplaceableItem: {
            readonly name: "ApproveEquationReplaceableItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.DeleteEquationReplaceableItem
         */
        readonly deleteEquationReplaceableItem: {
            readonly name: "DeleteEquationReplaceableItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ReorderEquationReplaceableItems
         */
        readonly reorderEquationReplaceableItems: {
            readonly name: "ReorderEquationReplaceableItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Equation Replaceable Item by ID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewEquationReplaceableItemByID
         */
        readonly viewEquationReplaceableItemByID: {
            readonly name: "ViewEquationReplaceableItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceableItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation replaceable items for given equation replaceable ID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewApprovedEquationReplaceableItems
         */
        readonly viewApprovedEquationReplaceableItems: {
            readonly name: "ViewApprovedEquationReplaceableItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation replaceable items for given equation replaceable ID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewUnapprovedEquationReplaceableItems
         */
        readonly viewUnapprovedEquationReplaceableItems: {
            readonly name: "ViewUnapprovedEquationReplaceableItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the equation replaceable item
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewEquationReplaceableItemHistory
         */
        readonly viewEquationReplaceableItemHistory: {
            readonly name: "ViewEquationReplaceableItemHistory";
            readonly I: typeof EquationReplaceableItemHistoryRequest;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceable;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsReplaceablesServicePaginationReq;
            readonly O: typeof EquationsReplaceablesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof EquationsReplaceablesServiceEntityPaginationReq;
            readonly O: typeof EquationsReplaceablesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewForFamilyID
         */
        readonly viewForFamilyID: {
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceable;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EquationsReplaceablesServiceSearchAllReq;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EquationsReplaceablesServiceFilterReq;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_replaceables_connect.d.ts.map