import ***REMOVED*** EquationSalesBundle, EquationSalesBundleItem, EquationSalesBundleItemHistoryRequest, EquationsSalesBundlesItemsList, EquationsSalesBundlesList, EquationsSalesBundlesServiceCreateRequest, EquationsSalesBundlesServiceEntityPaginationReq, EquationsSalesBundlesServiceFilterReq, EquationsSalesBundlesServiceItemCreateRequest, EquationsSalesBundlesServiceItemUpdateRequest, EquationsSalesBundlesServicePaginationReq, EquationsSalesBundlesServicePaginationResponse, EquationsSalesBundlesServiceSearchAllReq, EquationsSalesBundlesServiceUpdateRequest ***REMOVED*** from "./equations_sales_bundles_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each equation sales bundle
 *
 * @generated from service Genesis.EquationsSalesBundlesService
 */
export declare const EquationsSalesBundlesService: ***REMOVED***
    readonly typeName: "Genesis.EquationsSalesBundlesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof EquationsSalesBundlesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof EquationsSalesBundlesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsSalesBundlesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.SendForVerification
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Verify
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Approve
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.SendForRevision
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsSalesBundlesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Halt
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Discard
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Restore
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Complete
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Repeat
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Reopen
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.CommentAdd
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
         * @generated from rpc Genesis.EquationsSalesBundlesService.Clone
         */
        readonly clone: ***REMOVED***
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.AddEquationSalesBundleItem
         */
        readonly addEquationSalesBundleItem: ***REMOVED***
            readonly name: "AddEquationSalesBundleItem";
            readonly I: typeof EquationsSalesBundlesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ModifyEquationSalesBundleItem
         */
        readonly modifyEquationSalesBundleItem: ***REMOVED***
            readonly name: "ModifyEquationSalesBundleItem";
            readonly I: typeof EquationsSalesBundlesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ApproveEquationSalesBundleItem
         */
        readonly approveEquationSalesBundleItem: ***REMOVED***
            readonly name: "ApproveEquationSalesBundleItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.DeleteEquationSalesBundleItem
         */
        readonly deleteEquationSalesBundleItem: ***REMOVED***
            readonly name: "DeleteEquationSalesBundleItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a equation sales bundle
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ReorderEquationSalesBundleItems
         */
        readonly reorderEquationSalesBundleItems: ***REMOVED***
            readonly name: "ReorderEquationSalesBundleItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Equation Sales Bundle Item by ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewEquationSalesBundleItemByID
         */
        readonly viewEquationSalesBundleItemByID: ***REMOVED***
            readonly name: "ViewEquationSalesBundleItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundleItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved equation sales bundle items for given equation sales bundle ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewApprovedEquationSalesBundleItems
         */
        readonly viewApprovedEquationSalesBundleItems: ***REMOVED***
            readonly name: "ViewApprovedEquationSalesBundleItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved equation sales bundle items for given equation sales bundle ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewUnapprovedEquationSalesBundleItems
         */
        readonly viewUnapprovedEquationSalesBundleItems: ***REMOVED***
            readonly name: "ViewUnapprovedEquationSalesBundleItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the equation sales bundle item
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewEquationSalesBundleItemHistory
         */
        readonly viewEquationSalesBundleItemHistory: ***REMOVED***
            readonly name: "ViewEquationSalesBundleItemHistory";
            readonly I: typeof EquationSalesBundleItemHistoryRequest;
            readonly O: typeof EquationsSalesBundlesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsSalesBundlesServicePaginationReq;
            readonly O: typeof EquationsSalesBundlesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof EquationsSalesBundlesServiceEntityPaginationReq;
            readonly O: typeof EquationsSalesBundlesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.ViewForFamilyID
         */
        readonly viewForFamilyID: ***REMOVED***
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationSalesBundle;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof EquationsSalesBundlesServiceSearchAllReq;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof EquationsSalesBundlesServiceFilterReq;
            readonly O: typeof EquationsSalesBundlesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsSalesBundlesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=equations_sales_bundles_connect.d.ts.map