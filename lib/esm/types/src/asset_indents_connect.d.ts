import { AssetIndent, AssetIndentItem, AssetIndentItemHistoryRequest, AssetIndentItemProspectiveInfoRequest, AssetIndentsItemsList, AssetIndentsList, AssetIndentsServiceCreateRequest, AssetIndentsServiceEntityPaginationReq, AssetIndentsServiceFilterReq, AssetIndentsServiceItemCreateRequest, AssetIndentsServiceItemUpdateRequest, AssetIndentsServicePaginationReq, AssetIndentsServicePaginationResponse, AssetIndentsServiceSearchAllReq, AssetIndentsServiceUpdateRequest } from "./asset_indents_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each asset indent
 *
 * @generated from service Genesis.AssetIndentsService
 */
export declare const AssetIndentsService: {
    readonly typeName: "Genesis.AssetIndentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.AssetIndentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof AssetIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.AssetIndentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof AssetIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.AssetIndentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof AssetIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.AssetIndentsService.SendForVerification
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
         * @generated from rpc Genesis.AssetIndentsService.Verify
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
         * @generated from rpc Genesis.AssetIndentsService.Approve
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
         * @generated from rpc Genesis.AssetIndentsService.SendForRevision
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
         * @generated from rpc Genesis.AssetIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof AssetIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.AssetIndentsService.Halt
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
         * @generated from rpc Genesis.AssetIndentsService.Discard
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
         * @generated from rpc Genesis.AssetIndentsService.Restore
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
         * @generated from rpc Genesis.AssetIndentsService.Complete
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
         * @generated from rpc Genesis.AssetIndentsService.Repeat
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
         * @generated from rpc Genesis.AssetIndentsService.Reopen
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
         * @generated from rpc Genesis.AssetIndentsService.CommentAdd
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
         * @generated from rpc Genesis.AssetIndentsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Asset Indent can be marked as completed
         *
         * @generated from rpc Genesis.AssetIndentsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.AddAssetIndentItem
         */
        readonly addAssetIndentItem: {
            readonly name: "AddAssetIndentItem";
            readonly I: typeof AssetIndentsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.ModifyAssetIndentItem
         */
        readonly modifyAssetIndentItem: {
            readonly name: "ModifyAssetIndentItem";
            readonly I: typeof AssetIndentsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.ApproveAssetIndentItem
         */
        readonly approveAssetIndentItem: {
            readonly name: "ApproveAssetIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.DeleteAssetIndentItem
         */
        readonly deleteAssetIndentItem: {
            readonly name: "DeleteAssetIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.ReorderAssetIndentItems
         */
        readonly reorderAssetIndentItems: {
            readonly name: "ReorderAssetIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Asset Indent Item by ID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAssetIndentItemByID
         */
        readonly viewAssetIndentItemByID: {
            readonly name: "ViewAssetIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof AssetIndentItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved asset indent items for given asset indent ID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewApprovedAssetIndentItems
         */
        readonly viewApprovedAssetIndentItems: {
            readonly name: "ViewApprovedAssetIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved asset indent items for given asset indent ID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewUnapprovedAssetIndentItems
         */
        readonly viewUnapprovedAssetIndentItems: {
            readonly name: "ViewUnapprovedAssetIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the asset indent item
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAssetIndentItemHistory
         */
        readonly viewAssetIndentItemHistory: {
            readonly name: "ViewAssetIndentItemHistory";
            readonly I: typeof AssetIndentItemHistoryRequest;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof AssetIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof AssetIndentsServicePaginationReq;
            readonly O: typeof AssetIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof AssetIndentsServiceEntityPaginationReq;
            readonly O: typeof AssetIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given asset indent
         *
         * View prospective asset indent item info for the given family ID and asset indent ID
         * rpc ViewProspectiveAssetIndentItem(AssetIndentItemProspectiveInfoRequest) returns (AssetIndentsServiceItemCreateRequest);
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: {
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof AssetIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.AssetIndentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof AssetIndentsServiceSearchAllReq;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.AssetIndentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof AssetIndentsServiceFilterReq;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.AssetIndentsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=asset_indents_connect.d.ts.map