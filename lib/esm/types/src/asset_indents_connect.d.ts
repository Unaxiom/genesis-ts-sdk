import ***REMOVED*** AssetIndent, AssetIndentItem, AssetIndentItemHistoryRequest, AssetIndentItemProspectiveInfoRequest, AssetIndentsItemsList, AssetIndentsList, AssetIndentsServiceCreateRequest, AssetIndentsServiceEntityPaginationReq, AssetIndentsServiceFilterReq, AssetIndentsServiceItemCreateRequest, AssetIndentsServiceItemUpdateRequest, AssetIndentsServicePaginationReq, AssetIndentsServicePaginationResponse, AssetIndentsServiceSearchAllReq, AssetIndentsServiceUpdateRequest ***REMOVED*** from "./asset_indents_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each asset indent
 *
 * @generated from service Genesis.AssetIndentsService
 */
export declare const AssetIndentsService: ***REMOVED***
    readonly typeName: "Genesis.AssetIndentsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.AssetIndentsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof AssetIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.AssetIndentsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof AssetIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.AssetIndentsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof AssetIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.AssetIndentsService.SendForVerification
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
         * @generated from rpc Genesis.AssetIndentsService.Verify
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
         * @generated from rpc Genesis.AssetIndentsService.Approve
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
         * @generated from rpc Genesis.AssetIndentsService.SendForRevision
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
         * @generated from rpc Genesis.AssetIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof AssetIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.AssetIndentsService.Halt
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
         * @generated from rpc Genesis.AssetIndentsService.Discard
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
         * @generated from rpc Genesis.AssetIndentsService.Restore
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
         * @generated from rpc Genesis.AssetIndentsService.Complete
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
         * @generated from rpc Genesis.AssetIndentsService.Repeat
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
         * @generated from rpc Genesis.AssetIndentsService.Reopen
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
         * @generated from rpc Genesis.AssetIndentsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send Email
         *
         * @generated from rpc Genesis.AssetIndentsService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Asset Indent can be marked as completed
         *
         * @generated from rpc Genesis.AssetIndentsService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.AddAssetIndentItem
         */
        readonly addAssetIndentItem: ***REMOVED***
            readonly name: "AddAssetIndentItem";
            readonly I: typeof AssetIndentsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.ModifyAssetIndentItem
         */
        readonly modifyAssetIndentItem: ***REMOVED***
            readonly name: "ModifyAssetIndentItem";
            readonly I: typeof AssetIndentsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.ApproveAssetIndentItem
         */
        readonly approveAssetIndentItem: ***REMOVED***
            readonly name: "ApproveAssetIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.DeleteAssetIndentItem
         */
        readonly deleteAssetIndentItem: ***REMOVED***
            readonly name: "DeleteAssetIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a asset indent
         *
         * @generated from rpc Genesis.AssetIndentsService.ReorderAssetIndentItems
         */
        readonly reorderAssetIndentItems: ***REMOVED***
            readonly name: "ReorderAssetIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Asset Indent Item by ID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAssetIndentItemByID
         */
        readonly viewAssetIndentItemByID: ***REMOVED***
            readonly name: "ViewAssetIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof AssetIndentItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved asset indent items for given asset indent ID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewApprovedAssetIndentItems
         */
        readonly viewApprovedAssetIndentItems: ***REMOVED***
            readonly name: "ViewApprovedAssetIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved asset indent items for given asset indent ID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewUnapprovedAssetIndentItems
         */
        readonly viewUnapprovedAssetIndentItems: ***REMOVED***
            readonly name: "ViewUnapprovedAssetIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the asset indent item
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAssetIndentItemHistory
         */
        readonly viewAssetIndentItemHistory: ***REMOVED***
            readonly name: "ViewAssetIndentItemHistory";
            readonly I: typeof AssetIndentItemHistoryRequest;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof AssetIndent;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof AssetIndentsServicePaginationReq;
            readonly O: typeof AssetIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof AssetIndentsServiceEntityPaginationReq;
            readonly O: typeof AssetIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given asset indent
         *
         * View prospective asset indent item info for the given family ID and asset indent ID
         * rpc ViewProspectiveAssetIndentItem(AssetIndentItemProspectiveInfoRequest) returns (AssetIndentsServiceItemCreateRequest);
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Genesis.AssetIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: ***REMOVED***
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof AssetIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.AssetIndentsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof AssetIndentsServiceSearchAllReq;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.AssetIndentsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof AssetIndentsServiceFilterReq;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.AssetIndentsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=asset_indents_connect.d.ts.map