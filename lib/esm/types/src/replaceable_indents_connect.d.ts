import { ReplaceableIndent, ReplaceableIndentItem, ReplaceableIndentItemHistoryRequest, ReplaceableIndentItemProspectiveInfoRequest, ReplaceableIndentsItemsList, ReplaceableIndentsList, ReplaceableIndentsServiceAutofillRequest, ReplaceableIndentsServiceCreateRequest, ReplaceableIndentsServiceEntityPaginationReq, ReplaceableIndentsServiceFilterReq, ReplaceableIndentsServiceItemCreateRequest, ReplaceableIndentsServiceItemUpdateRequest, ReplaceableIndentsServicePaginationReq, ReplaceableIndentsServicePaginationResponse, ReplaceableIndentsServiceSearchAllReq, ReplaceableIndentsServiceUpdateRequest } from "./replaceable_indents_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each replaceable indent
 *
 * @generated from service Genesis.ReplaceableIndentsService
 */
export declare const ReplaceableIndentsService: {
    readonly typeName: "Genesis.ReplaceableIndentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ReplaceableIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ReplaceableIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ReplaceableIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.SendForVerification
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Verify
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Approve
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
         * @generated from rpc Genesis.ReplaceableIndentsService.SendForRevision
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
         * @generated from rpc Genesis.ReplaceableIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ReplaceableIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Halt
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Discard
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Restore
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Complete
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Repeat
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Reopen
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
         * @generated from rpc Genesis.ReplaceableIndentsService.CommentAdd
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
         * @generated from rpc Genesis.ReplaceableIndentsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof ReplaceableIndentsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Replaceable Indent can be marked as completed
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.AddReplaceableIndentItem
         */
        readonly addReplaceableIndentItem: {
            readonly name: "AddReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ModifyReplaceableIndentItem
         */
        readonly modifyReplaceableIndentItem: {
            readonly name: "ModifyReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ApproveReplaceableIndentItem
         */
        readonly approveReplaceableIndentItem: {
            readonly name: "ApproveReplaceableIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.DeleteReplaceableIndentItem
         */
        readonly deleteReplaceableIndentItem: {
            readonly name: "DeleteReplaceableIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ReorderReplaceableIndentItems
         */
        readonly reorderReplaceableIndentItems: {
            readonly name: "ReorderReplaceableIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Replaceable Indent Item by ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewReplaceableIndentItemByID
         */
        readonly viewReplaceableIndentItemByID: {
            readonly name: "ViewReplaceableIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ReplaceableIndentItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved replaceable indent items for given replaceable indent ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewApprovedReplaceableIndentItems
         */
        readonly viewApprovedReplaceableIndentItems: {
            readonly name: "ViewApprovedReplaceableIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved replaceable indent items for given replaceable indent ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewUnapprovedReplaceableIndentItems
         */
        readonly viewUnapprovedReplaceableIndentItems: {
            readonly name: "ViewUnapprovedReplaceableIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the replaceable indent item
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewReplaceableIndentItemHistory
         */
        readonly viewReplaceableIndentItemHistory: {
            readonly name: "ViewReplaceableIndentItemHistory";
            readonly I: typeof ReplaceableIndentItemHistoryRequest;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ReplaceableIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ReplaceableIndentsServicePaginationReq;
            readonly O: typeof ReplaceableIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ReplaceableIndentsServiceEntityPaginationReq;
            readonly O: typeof ReplaceableIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective replaceable indent item info for the given family ID and replaceable indent ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewProspectiveReplaceableIndentItem
         */
        readonly viewProspectiveReplaceableIndentItem: {
            readonly name: "ViewProspectiveReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentItemProspectiveInfoRequest;
            readonly O: typeof ReplaceableIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: {
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof ReplaceableIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ReplaceableIndentsServiceSearchAllReq;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ReplaceableIndentsServiceFilterReq;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=replaceable_indents_connect.d.ts.map