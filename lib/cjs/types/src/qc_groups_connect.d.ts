import ***REMOVED*** QCGroup, QCGroupItem, QCGroupItemHistoryRequest, QCGroupsItemsList, QCGroupsList, QCGroupsServiceCreateRequest, QCGroupsServiceEntityPaginationReq, QCGroupsServiceFilterReq, QCGroupsServiceItemCreateRequest, QCGroupsServiceItemUpdateRequest, QCGroupsServicePaginationReq, QCGroupsServicePaginationResponse, QCGroupsServiceSearchAllReq, QCGroupsServiceUpdateRequest ***REMOVED*** from "./qc_groups_pb.js";
import ***REMOVED*** ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each qc group
 *
 * @generated from service Genesis.QCGroupsService
 */
export declare const QCGroupsService: ***REMOVED***
    readonly typeName: "Genesis.QCGroupsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.QCGroupsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof QCGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.QCGroupsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof QCGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.QCGroupsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof QCGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.QCGroupsService.SendForVerification
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
         * @generated from rpc Genesis.QCGroupsService.Verify
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
         * @generated from rpc Genesis.QCGroupsService.Approve
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
         * @generated from rpc Genesis.QCGroupsService.SendForRevision
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
         * @generated from rpc Genesis.QCGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof QCGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.QCGroupsService.Halt
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
         * @generated from rpc Genesis.QCGroupsService.Discard
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
         * @generated from rpc Genesis.QCGroupsService.Restore
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
         * @generated from rpc Genesis.QCGroupsService.Complete
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
         * @generated from rpc Genesis.QCGroupsService.Repeat
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
         * @generated from rpc Genesis.QCGroupsService.Reopen
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
         * @generated from rpc Genesis.QCGroupsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Clone qc group from an existing qc group (denoted by the identifier)
         *
         * @generated from rpc Genesis.QCGroupsService.Clone
         */
        readonly clone: ***REMOVED***
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add a param to a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.AddQCGroupItem
         */
        readonly addQCGroupItem: ***REMOVED***
            readonly name: "AddQCGroupItem";
            readonly I: typeof QCGroupsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify a param in a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.ModifyQCGroupItem
         */
        readonly modifyQCGroupItem: ***REMOVED***
            readonly name: "ModifyQCGroupItem";
            readonly I: typeof QCGroupsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve a param in a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.ApproveQCGroupItem
         */
        readonly approveQCGroupItem: ***REMOVED***
            readonly name: "ApproveQCGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete a param in a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.DeleteQCGroupItem
         */
        readonly deleteQCGroupItem: ***REMOVED***
            readonly name: "DeleteQCGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder params in a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.ReorderQCGroupItems
         */
        readonly reorderQCGroupItems: ***REMOVED***
            readonly name: "ReorderQCGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View QC Group Item by ID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewQCGroupItemByID
         */
        readonly viewQCGroupItemByID: ***REMOVED***
            readonly name: "ViewQCGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCGroupItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved qc group params for given qc group ID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewApprovedQCGroupItems
         */
        readonly viewApprovedQCGroupItems: ***REMOVED***
            readonly name: "ViewApprovedQCGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved qc group params for given qc group ID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewUnapprovedQCGroupItems
         */
        readonly viewUnapprovedQCGroupItems: ***REMOVED***
            readonly name: "ViewUnapprovedQCGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the qc group item
         *
         * @generated from rpc Genesis.QCGroupsService.ViewQCGroupItemHistory
         */
        readonly viewQCGroupItemHistory: ***REMOVED***
            readonly name: "ViewQCGroupItemHistory";
            readonly I: typeof QCGroupItemHistoryRequest;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCGroup;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.QCGroupsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.QCGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof QCGroupsServicePaginationReq;
            readonly O: typeof QCGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof QCGroupsServiceEntityPaginationReq;
            readonly O: typeof QCGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.QCGroupsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof QCGroupsServiceSearchAllReq;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.QCGroupsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof QCGroupsServiceFilterReq;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.QCGroupsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=qc_groups_connect.d.ts.map