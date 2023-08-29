import { Associate, AssociatePaginationResp, AssociatesList, AssociatesServiceCreateRequest, AssociatesServiceEntityPaginationReq, AssociatesServicePaginationReq, AssociatesServiceSearchAllReq, AssociatesServiceUpdateRequest } from "./associates_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, BooleanResponse, BytesResponse, Empty, Identifier, IdentifierUUID, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each associate
 *
 * @generated from service Genesis.AssociatesService
 */
export declare const AssociatesService: {
    readonly typeName: "Genesis.AssociatesService";
    readonly methods: {
        /**
         * Create a associate
         *
         * @generated from rpc Genesis.AssociatesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof AssociatesServiceCreateRequest;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a associate
         *
         * @generated from rpc Genesis.AssociatesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof AssociatesServiceUpdateRequest;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard the associate
         *
         * @generated from rpc Genesis.AssociatesService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the associate
         *
         * @generated from rpc Genesis.AssociatesService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.AssociatesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download Associate by ID as a vCard
         *
         * @generated from rpc Genesis.AssociatesService.DownloadVCard
         */
        readonly downloadVCard: {
            readonly name: "DownloadVCard";
            readonly I: typeof Identifier;
            readonly O: typeof BytesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all associates
         *
         * @generated from rpc Genesis.AssociatesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all associates with the given entity UUID
         *
         * @generated from rpc Genesis.AssociatesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View associates with pagination
         *
         * @generated from rpc Genesis.AssociatesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof AssociatesServicePaginationReq;
            readonly O: typeof AssociatePaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View associates with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.AssociatesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof AssociatesServiceEntityPaginationReq;
            readonly O: typeof AssociatePaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if the user has permission to modify an associate
         *
         * @generated from rpc Genesis.AssociatesService.CheckModifyPermission
         */
        readonly checkModifyPermission: {
            readonly name: "CheckModifyPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if the user has permission to add an associate
         *
         * @generated from rpc Genesis.AssociatesService.CheckAddPermission
         */
        readonly checkAddPermission: {
            readonly name: "CheckAddPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all associates that match the given search key
         *
         * @generated from rpc Genesis.AssociatesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof AssociatesServiceSearchAllReq;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=associates_connect.d.ts.map