import { QCGroup, QCGroupItem, QCGroupItemHistoryRequest, QCGroupsItemsList, QCGroupsList, QCGroupsServiceCreateRequest, QCGroupsServiceEntityPaginationReq, QCGroupsServiceFilterReq, QCGroupsServiceItemCreateRequest, QCGroupsServiceItemUpdateRequest, QCGroupsServicePaginationReq, QCGroupsServicePaginationResponse, QCGroupsServiceSearchAllReq, QCGroupsServiceUpdateRequest } from "./qc_groups_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each qc group
 *
 * @generated from service Genesis.QCGroupsService
 */
export declare const QCGroupsService: {
    readonly typeName: "Genesis.QCGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.QCGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QCGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.QCGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QCGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.QCGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QCGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.QCGroupsService.SendForVerification
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
         * @generated from rpc Genesis.QCGroupsService.Verify
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
         * @generated from rpc Genesis.QCGroupsService.Approve
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
         * @generated from rpc Genesis.QCGroupsService.SendForRevision
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
         * @generated from rpc Genesis.QCGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QCGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.QCGroupsService.Halt
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
         * @generated from rpc Genesis.QCGroupsService.Discard
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
         * @generated from rpc Genesis.QCGroupsService.Restore
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
         * @generated from rpc Genesis.QCGroupsService.Complete
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
         * @generated from rpc Genesis.QCGroupsService.Repeat
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
         * @generated from rpc Genesis.QCGroupsService.Reopen
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
         * @generated from rpc Genesis.QCGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone qc group from an existing qc group (denoted by the identifier)
         *
         * @generated from rpc Genesis.QCGroupsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a param to a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.AddQCGroupItem
         */
        readonly addQCGroupItem: {
            readonly name: "AddQCGroupItem";
            readonly I: typeof QCGroupsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a param in a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.ModifyQCGroupItem
         */
        readonly modifyQCGroupItem: {
            readonly name: "ModifyQCGroupItem";
            readonly I: typeof QCGroupsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a param in a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.ApproveQCGroupItem
         */
        readonly approveQCGroupItem: {
            readonly name: "ApproveQCGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a param in a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.DeleteQCGroupItem
         */
        readonly deleteQCGroupItem: {
            readonly name: "DeleteQCGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder params in a qc group
         *
         * @generated from rpc Genesis.QCGroupsService.ReorderQCGroupItems
         */
        readonly reorderQCGroupItems: {
            readonly name: "ReorderQCGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View QC Group Item by ID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewQCGroupItemByID
         */
        readonly viewQCGroupItemByID: {
            readonly name: "ViewQCGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCGroupItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved qc group params for given qc group ID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewApprovedQCGroupItems
         */
        readonly viewApprovedQCGroupItems: {
            readonly name: "ViewApprovedQCGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved qc group params for given qc group ID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewUnapprovedQCGroupItems
         */
        readonly viewUnapprovedQCGroupItems: {
            readonly name: "ViewUnapprovedQCGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the qc group item
         *
         * @generated from rpc Genesis.QCGroupsService.ViewQCGroupItemHistory
         */
        readonly viewQCGroupItemHistory: {
            readonly name: "ViewQCGroupItemHistory";
            readonly I: typeof QCGroupItemHistoryRequest;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.QCGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.QCGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QCGroupsServicePaginationReq;
            readonly O: typeof QCGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.QCGroupsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof QCGroupsServiceEntityPaginationReq;
            readonly O: typeof QCGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.QCGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QCGroupsServiceSearchAllReq;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.QCGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QCGroupsServiceFilterReq;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.QCGroupsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=qc_groups_connect.d.ts.map