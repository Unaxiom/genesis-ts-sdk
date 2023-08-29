import ***REMOVED*** EquationReplaceable, EquationReplaceableItem, EquationReplaceableItemHistoryRequest, EquationsReplaceablesItemsList, EquationsReplaceablesList, EquationsReplaceablesServiceCreateRequest, EquationsReplaceablesServiceEntityPaginationReq, EquationsReplaceablesServiceFilterReq, EquationsReplaceablesServiceItemCreateRequest, EquationsReplaceablesServiceItemUpdateRequest, EquationsReplaceablesServicePaginationReq, EquationsReplaceablesServicePaginationResponse, EquationsReplaceablesServiceSearchAllReq, EquationsReplaceablesServiceUpdateRequest ***REMOVED*** from "./equations_replaceables_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each equation replaceable
 *
 * @generated from service Genesis.EquationsReplaceablesService
 */
export declare const EquationsReplaceablesService: ***REMOVED***
    readonly typeName: "Genesis.EquationsReplaceablesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof EquationsReplaceablesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof EquationsReplaceablesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsReplaceablesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.SendForVerification
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Verify
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Approve
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
         * @generated from rpc Genesis.EquationsReplaceablesService.SendForRevision
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
         * @generated from rpc Genesis.EquationsReplaceablesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsReplaceablesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.Halt
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Discard
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Restore
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Complete
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Repeat
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Reopen
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
         * @generated from rpc Genesis.EquationsReplaceablesService.CommentAdd
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
         * @generated from rpc Genesis.EquationsReplaceablesService.Clone
         */
        readonly clone: ***REMOVED***
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.AddEquationReplaceableItem
         */
        readonly addEquationReplaceableItem: ***REMOVED***
            readonly name: "AddEquationReplaceableItem";
            readonly I: typeof EquationsReplaceablesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ModifyEquationReplaceableItem
         */
        readonly modifyEquationReplaceableItem: ***REMOVED***
            readonly name: "ModifyEquationReplaceableItem";
            readonly I: typeof EquationsReplaceablesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ApproveEquationReplaceableItem
         */
        readonly approveEquationReplaceableItem: ***REMOVED***
            readonly name: "ApproveEquationReplaceableItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.DeleteEquationReplaceableItem
         */
        readonly deleteEquationReplaceableItem: ***REMOVED***
            readonly name: "DeleteEquationReplaceableItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a equation replaceable
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ReorderEquationReplaceableItems
         */
        readonly reorderEquationReplaceableItems: ***REMOVED***
            readonly name: "ReorderEquationReplaceableItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Equation Replaceable Item by ID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewEquationReplaceableItemByID
         */
        readonly viewEquationReplaceableItemByID: ***REMOVED***
            readonly name: "ViewEquationReplaceableItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceableItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved equation replaceable items for given equation replaceable ID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewApprovedEquationReplaceableItems
         */
        readonly viewApprovedEquationReplaceableItems: ***REMOVED***
            readonly name: "ViewApprovedEquationReplaceableItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved equation replaceable items for given equation replaceable ID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewUnapprovedEquationReplaceableItems
         */
        readonly viewUnapprovedEquationReplaceableItems: ***REMOVED***
            readonly name: "ViewUnapprovedEquationReplaceableItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the equation replaceable item
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewEquationReplaceableItemHistory
         */
        readonly viewEquationReplaceableItemHistory: ***REMOVED***
            readonly name: "ViewEquationReplaceableItemHistory";
            readonly I: typeof EquationReplaceableItemHistoryRequest;
            readonly O: typeof EquationsReplaceablesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceable;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsReplaceablesServicePaginationReq;
            readonly O: typeof EquationsReplaceablesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof EquationsReplaceablesServiceEntityPaginationReq;
            readonly O: typeof EquationsReplaceablesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.ViewForFamilyID
         */
        readonly viewForFamilyID: ***REMOVED***
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationReplaceable;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof EquationsReplaceablesServiceSearchAllReq;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof EquationsReplaceablesServiceFilterReq;
            readonly O: typeof EquationsReplaceablesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsReplaceablesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=equations_replaceables_connect.d.ts.map