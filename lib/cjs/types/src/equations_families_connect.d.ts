import ***REMOVED*** EquationFamily, EquationFamilyItem, EquationFamilyItemHistoryRequest, EquationsFamiliesItemsList, EquationsFamiliesList, EquationsFamiliesServiceCreateRequest, EquationsFamiliesServiceEntityPaginationReq, EquationsFamiliesServiceFilterReq, EquationsFamiliesServiceItemCreateRequest, EquationsFamiliesServiceItemUpdateRequest, EquationsFamiliesServicePaginationReq, EquationsFamiliesServicePaginationResponse, EquationsFamiliesServiceSearchAllReq, EquationsFamiliesServiceUpdateRequest ***REMOVED*** from "./equations_families_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearch, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each equation family
 *
 * @generated from service Genesis.EquationsFamiliesService
 */
export declare const EquationsFamiliesService: ***REMOVED***
    readonly typeName: "Genesis.EquationsFamiliesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof EquationsFamiliesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof EquationsFamiliesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsFamiliesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsFamiliesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsFamiliesService.SendForVerification
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
         * @generated from rpc Genesis.EquationsFamiliesService.Verify
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
         * @generated from rpc Genesis.EquationsFamiliesService.Approve
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
         * @generated from rpc Genesis.EquationsFamiliesService.SendForRevision
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
         * @generated from rpc Genesis.EquationsFamiliesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsFamiliesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Halt
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
         * @generated from rpc Genesis.EquationsFamiliesService.Discard
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
         * @generated from rpc Genesis.EquationsFamiliesService.Restore
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
         * @generated from rpc Genesis.EquationsFamiliesService.Complete
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
         * @generated from rpc Genesis.EquationsFamiliesService.Repeat
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
         * @generated from rpc Genesis.EquationsFamiliesService.Reopen
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
         * @generated from rpc Genesis.EquationsFamiliesService.CommentAdd
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
         * @generated from rpc Genesis.EquationsFamiliesService.Clone
         */
        readonly clone: ***REMOVED***
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.AddEquationFamilyItem
         */
        readonly addEquationFamilyItem: ***REMOVED***
            readonly name: "AddEquationFamilyItem";
            readonly I: typeof EquationsFamiliesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ModifyEquationFamilyItem
         */
        readonly modifyEquationFamilyItem: ***REMOVED***
            readonly name: "ModifyEquationFamilyItem";
            readonly I: typeof EquationsFamiliesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ApproveEquationFamilyItem
         */
        readonly approveEquationFamilyItem: ***REMOVED***
            readonly name: "ApproveEquationFamilyItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.DeleteEquationFamilyItem
         */
        readonly deleteEquationFamilyItem: ***REMOVED***
            readonly name: "DeleteEquationFamilyItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ReorderEquationFamilyItems
         */
        readonly reorderEquationFamilyItems: ***REMOVED***
            readonly name: "ReorderEquationFamilyItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Equation Family Item by ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewEquationFamilyItemByID
         */
        readonly viewEquationFamilyItemByID: ***REMOVED***
            readonly name: "ViewEquationFamilyItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamilyItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved equation family items for given equation family ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewApprovedEquationFamilyItems
         */
        readonly viewApprovedEquationFamilyItems: ***REMOVED***
            readonly name: "ViewApprovedEquationFamilyItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved equation family items for given equation family ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewUnapprovedEquationFamilyItems
         */
        readonly viewUnapprovedEquationFamilyItems: ***REMOVED***
            readonly name: "ViewUnapprovedEquationFamilyItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the equation family item
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewEquationFamilyItemHistory
         */
        readonly viewEquationFamilyItemHistory: ***REMOVED***
            readonly name: "ViewEquationFamilyItemHistory";
            readonly I: typeof EquationFamilyItemHistoryRequest;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsFamiliesServicePaginationReq;
            readonly O: typeof EquationsFamiliesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof EquationsFamiliesServiceEntityPaginationReq;
            readonly O: typeof EquationsFamiliesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewForFamilyID
         */
        readonly viewForFamilyID: ***REMOVED***
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all selectable families for a family ID represented by Identifier (without cyclical dependencies) and the given search key
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewSelectableFamilies
         */
        readonly viewSelectableFamilies: ***REMOVED***
            readonly name: "ViewSelectableFamilies";
            readonly I: typeof IdentifierWithSearch;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsFamiliesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof EquationsFamiliesServiceSearchAllReq;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof EquationsFamiliesServiceFilterReq;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsFamiliesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=equations_families_connect.d.ts.map