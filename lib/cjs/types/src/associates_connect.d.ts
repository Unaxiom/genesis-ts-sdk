import ***REMOVED*** Associate, AssociatePaginationResp, AssociatesList, AssociatesServiceCreateRequest, AssociatesServiceEntityPaginationReq, AssociatesServicePaginationReq, AssociatesServiceSearchAllReq, AssociatesServiceUpdateRequest ***REMOVED*** from "./associates_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ActiveStatus, BooleanResponse, BytesResponse, Empty, Identifier, IdentifierUUID, IdentifierWithUserComment ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each associate
 *
 * @generated from service Genesis.AssociatesService
 */
export declare const AssociatesService: ***REMOVED***
    readonly typeName: "Genesis.AssociatesService";
    readonly methods: ***REMOVED***
        /**
         * Create a associate
         *
         * @generated from rpc Genesis.AssociatesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof AssociatesServiceCreateRequest;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update a associate
         *
         * @generated from rpc Genesis.AssociatesService.Update
         */
        readonly update: ***REMOVED***
            readonly name: "Update";
            readonly I: typeof AssociatesServiceUpdateRequest;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Discard the associate
         *
         * @generated from rpc Genesis.AssociatesService.Discard
         */
        readonly discard: ***REMOVED***
            readonly name: "Discard";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Restore the associate
         *
         * @generated from rpc Genesis.AssociatesService.Restore
         */
        readonly restore: ***REMOVED***
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.AssociatesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Download Associate by ID as a vCard
         *
         * @generated from rpc Genesis.AssociatesService.DownloadVCard
         */
        readonly downloadVCard: ***REMOVED***
            readonly name: "DownloadVCard";
            readonly I: typeof Identifier;
            readonly O: typeof BytesResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all associates
         *
         * @generated from rpc Genesis.AssociatesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all associates with the given entity UUID
         *
         * @generated from rpc Genesis.AssociatesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View associates with pagination
         *
         * @generated from rpc Genesis.AssociatesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof AssociatesServicePaginationReq;
            readonly O: typeof AssociatePaginationResp;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View associates with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.AssociatesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof AssociatesServiceEntityPaginationReq;
            readonly O: typeof AssociatePaginationResp;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Check if the user has permission to modify an associate
         *
         * @generated from rpc Genesis.AssociatesService.CheckModifyPermission
         */
        readonly checkModifyPermission: ***REMOVED***
            readonly name: "CheckModifyPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Check if the user has permission to add an associate
         *
         * @generated from rpc Genesis.AssociatesService.CheckAddPermission
         */
        readonly checkAddPermission: ***REMOVED***
            readonly name: "CheckAddPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all associates that match the given search key
         *
         * @generated from rpc Genesis.AssociatesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof AssociatesServiceSearchAllReq;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=associates_connect.d.ts.map