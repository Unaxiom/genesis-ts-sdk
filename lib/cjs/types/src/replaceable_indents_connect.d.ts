import ***REMOVED*** ReplaceableIndent, ReplaceableIndentItem, ReplaceableIndentItemHistoryRequest, ReplaceableIndentItemProspectiveInfoRequest, ReplaceableIndentsItemsList, ReplaceableIndentsList, ReplaceableIndentsServiceAutofillRequest, ReplaceableIndentsServiceCreateRequest, ReplaceableIndentsServiceEntityPaginationReq, ReplaceableIndentsServiceFilterReq, ReplaceableIndentsServiceItemCreateRequest, ReplaceableIndentsServiceItemUpdateRequest, ReplaceableIndentsServicePaginationReq, ReplaceableIndentsServicePaginationResponse, ReplaceableIndentsServiceSearchAllReq, ReplaceableIndentsServiceUpdateRequest ***REMOVED*** from "./replaceable_indents_pb.js";
import ***REMOVED*** ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FamiliesList ***REMOVED*** from "./families_pb.js";
/**
 *
 * Describes the common methods applicable on each replaceable indent
 *
 * @generated from service Genesis.ReplaceableIndentsService
 */
export declare const ReplaceableIndentsService: ***REMOVED***
    readonly typeName: "Genesis.ReplaceableIndentsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof ReplaceableIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof ReplaceableIndentsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof ReplaceableIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.SendForVerification
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Verify
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Approve
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
         * @generated from rpc Genesis.ReplaceableIndentsService.SendForRevision
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
         * @generated from rpc Genesis.ReplaceableIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof ReplaceableIndentsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Halt
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Discard
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Restore
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Complete
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Repeat
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
         * @generated from rpc Genesis.ReplaceableIndentsService.Reopen
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
         * @generated from rpc Genesis.ReplaceableIndentsService.CommentAdd
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
         * @generated from rpc Genesis.ReplaceableIndentsService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Autofill the replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Autofill
         */
        readonly autofill: ***REMOVED***
            readonly name: "Autofill";
            readonly I: typeof ReplaceableIndentsServiceAutofillRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Checks if the Replaceable Indent can be marked as completed
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.IsCompletable
         */
        readonly isCompletable: ***REMOVED***
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.AddReplaceableIndentItem
         */
        readonly addReplaceableIndentItem: ***REMOVED***
            readonly name: "AddReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ModifyReplaceableIndentItem
         */
        readonly modifyReplaceableIndentItem: ***REMOVED***
            readonly name: "ModifyReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ApproveReplaceableIndentItem
         */
        readonly approveReplaceableIndentItem: ***REMOVED***
            readonly name: "ApproveReplaceableIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.DeleteReplaceableIndentItem
         */
        readonly deleteReplaceableIndentItem: ***REMOVED***
            readonly name: "DeleteReplaceableIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ReorderReplaceableIndentItems
         */
        readonly reorderReplaceableIndentItems: ***REMOVED***
            readonly name: "ReorderReplaceableIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Replaceable Indent Item by ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewReplaceableIndentItemByID
         */
        readonly viewReplaceableIndentItemByID: ***REMOVED***
            readonly name: "ViewReplaceableIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ReplaceableIndentItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved replaceable indent items for given replaceable indent ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewApprovedReplaceableIndentItems
         */
        readonly viewApprovedReplaceableIndentItems: ***REMOVED***
            readonly name: "ViewApprovedReplaceableIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved replaceable indent items for given replaceable indent ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewUnapprovedReplaceableIndentItems
         */
        readonly viewUnapprovedReplaceableIndentItems: ***REMOVED***
            readonly name: "ViewUnapprovedReplaceableIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the replaceable indent item
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewReplaceableIndentItemHistory
         */
        readonly viewReplaceableIndentItemHistory: ***REMOVED***
            readonly name: "ViewReplaceableIndentItemHistory";
            readonly I: typeof ReplaceableIndentItemHistoryRequest;
            readonly O: typeof ReplaceableIndentsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ReplaceableIndent;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof ReplaceableIndentsServicePaginationReq;
            readonly O: typeof ReplaceableIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ReplaceableIndentsServiceEntityPaginationReq;
            readonly O: typeof ReplaceableIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective families for the given replaceable indent
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: ***REMOVED***
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View prospective replaceable indent item info for the given family ID and replaceable indent ID
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewProspectiveReplaceableIndentItem
         */
        readonly viewProspectiveReplaceableIndentItem: ***REMOVED***
            readonly name: "ViewProspectiveReplaceableIndentItem";
            readonly I: typeof ReplaceableIndentItemProspectiveInfoRequest;
            readonly O: typeof ReplaceableIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: ***REMOVED***
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof ReplaceableIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof ReplaceableIndentsServiceSearchAllReq;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof ReplaceableIndentsServiceFilterReq;
            readonly O: typeof ReplaceableIndentsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ReplaceableIndentsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=replaceable_indents_connect.d.ts.map