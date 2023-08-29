import { EquationFamily, EquationFamilyItem, EquationFamilyItemHistoryRequest, EquationsFamiliesItemsList, EquationsFamiliesList, EquationsFamiliesServiceCreateRequest, EquationsFamiliesServiceEntityPaginationReq, EquationsFamiliesServiceFilterReq, EquationsFamiliesServiceItemCreateRequest, EquationsFamiliesServiceItemUpdateRequest, EquationsFamiliesServicePaginationReq, EquationsFamiliesServicePaginationResponse, EquationsFamiliesServiceSearchAllReq, EquationsFamiliesServiceUpdateRequest } from "./equations_families_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearch, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each equation family
 *
 * @generated from service Genesis.EquationsFamiliesService
 */
export declare const EquationsFamiliesService: {
    readonly typeName: "Genesis.EquationsFamiliesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EquationsFamiliesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof EquationsFamiliesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.EquationsFamiliesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsFamiliesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.EquationsFamiliesService.SendForVerification
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
         * @generated from rpc Genesis.EquationsFamiliesService.Verify
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
         * @generated from rpc Genesis.EquationsFamiliesService.Approve
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
         * @generated from rpc Genesis.EquationsFamiliesService.SendForRevision
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
         * @generated from rpc Genesis.EquationsFamiliesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsFamiliesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Halt
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
         * @generated from rpc Genesis.EquationsFamiliesService.Discard
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
         * @generated from rpc Genesis.EquationsFamiliesService.Restore
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
         * @generated from rpc Genesis.EquationsFamiliesService.Complete
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
         * @generated from rpc Genesis.EquationsFamiliesService.Repeat
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
         * @generated from rpc Genesis.EquationsFamiliesService.Reopen
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
         * @generated from rpc Genesis.EquationsFamiliesService.CommentAdd
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
         * @generated from rpc Genesis.EquationsFamiliesService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.AddEquationFamilyItem
         */
        readonly addEquationFamilyItem: {
            readonly name: "AddEquationFamilyItem";
            readonly I: typeof EquationsFamiliesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ModifyEquationFamilyItem
         */
        readonly modifyEquationFamilyItem: {
            readonly name: "ModifyEquationFamilyItem";
            readonly I: typeof EquationsFamiliesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ApproveEquationFamilyItem
         */
        readonly approveEquationFamilyItem: {
            readonly name: "ApproveEquationFamilyItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.DeleteEquationFamilyItem
         */
        readonly deleteEquationFamilyItem: {
            readonly name: "DeleteEquationFamilyItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a equation family
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ReorderEquationFamilyItems
         */
        readonly reorderEquationFamilyItems: {
            readonly name: "ReorderEquationFamilyItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Equation Family Item by ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewEquationFamilyItemByID
         */
        readonly viewEquationFamilyItemByID: {
            readonly name: "ViewEquationFamilyItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamilyItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation family items for given equation family ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewApprovedEquationFamilyItems
         */
        readonly viewApprovedEquationFamilyItems: {
            readonly name: "ViewApprovedEquationFamilyItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation family items for given equation family ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewUnapprovedEquationFamilyItems
         */
        readonly viewUnapprovedEquationFamilyItems: {
            readonly name: "ViewUnapprovedEquationFamilyItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the equation family item
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewEquationFamilyItemHistory
         */
        readonly viewEquationFamilyItemHistory: {
            readonly name: "ViewEquationFamilyItemHistory";
            readonly I: typeof EquationFamilyItemHistoryRequest;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsFamiliesServicePaginationReq;
            readonly O: typeof EquationsFamiliesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof EquationsFamiliesServiceEntityPaginationReq;
            readonly O: typeof EquationsFamiliesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewForFamilyID
         */
        readonly viewForFamilyID: {
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all selectable families for a family ID represented by Identifier (without cyclical dependencies) and the given search key
         *
         * @generated from rpc Genesis.EquationsFamiliesService.ViewSelectableFamilies
         */
        readonly viewSelectableFamilies: {
            readonly name: "ViewSelectableFamilies";
            readonly I: typeof IdentifierWithSearch;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.EquationsFamiliesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EquationsFamiliesServiceSearchAllReq;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.EquationsFamiliesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EquationsFamiliesServiceFilterReq;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.EquationsFamiliesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_families_connect.d.ts.map