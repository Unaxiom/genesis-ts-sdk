import { Expense, ExpenseItem, ExpenseItemHistoryRequest, ExpensesItemsList, ExpensesList, ExpensesServiceCreateRequest, ExpensesServiceEntityPaginationReq, ExpensesServiceFilterReq, ExpensesServiceItemCreateRequest, ExpensesServiceItemUpdateRequest, ExpensesServicePaginationReq, ExpensesServicePaginationResponse, ExpensesServiceSearchAllReq, ExpensesServiceUpdateRequest } from "./expenses_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each expense
 *
 * @generated from service Genesis.ExpensesService
 */
export declare const ExpensesService: {
    readonly typeName: "Genesis.ExpensesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ExpensesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ExpensesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ExpensesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ExpensesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ExpensesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ExpensesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ExpensesService.SendForVerification
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
         * @generated from rpc Genesis.ExpensesService.Verify
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
         * @generated from rpc Genesis.ExpensesService.Approve
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
         * @generated from rpc Genesis.ExpensesService.SendForRevision
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
         * @generated from rpc Genesis.ExpensesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ExpensesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.ExpensesService.Halt
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
         * @generated from rpc Genesis.ExpensesService.Discard
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
         * @generated from rpc Genesis.ExpensesService.Restore
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
         * @generated from rpc Genesis.ExpensesService.Complete
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
         * @generated from rpc Genesis.ExpensesService.Repeat
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
         * @generated from rpc Genesis.ExpensesService.Reopen
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
         * @generated from rpc Genesis.ExpensesService.CommentAdd
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
         * @generated from rpc Genesis.ExpensesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a expense
         *
         * @generated from rpc Genesis.ExpensesService.AddExpenseItem
         */
        readonly addExpenseItem: {
            readonly name: "AddExpenseItem";
            readonly I: typeof ExpensesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a expense
         *
         * @generated from rpc Genesis.ExpensesService.ModifyExpenseItem
         */
        readonly modifyExpenseItem: {
            readonly name: "ModifyExpenseItem";
            readonly I: typeof ExpensesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a expense
         *
         * @generated from rpc Genesis.ExpensesService.ApproveExpenseItem
         */
        readonly approveExpenseItem: {
            readonly name: "ApproveExpenseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a expense
         *
         * @generated from rpc Genesis.ExpensesService.DeleteExpenseItem
         */
        readonly deleteExpenseItem: {
            readonly name: "DeleteExpenseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a expense
         *
         * @generated from rpc Genesis.ExpensesService.ReorderExpenseItems
         */
        readonly reorderExpenseItems: {
            readonly name: "ReorderExpenseItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Expense Item by ID
         *
         * @generated from rpc Genesis.ExpensesService.ViewExpenseItemByID
         */
        readonly viewExpenseItemByID: {
            readonly name: "ViewExpenseItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ExpenseItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved expense items for given expense ID
         *
         * @generated from rpc Genesis.ExpensesService.ViewApprovedExpenseItems
         */
        readonly viewApprovedExpenseItems: {
            readonly name: "ViewApprovedExpenseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved expense items for given expense ID
         *
         * @generated from rpc Genesis.ExpensesService.ViewUnapprovedExpenseItems
         */
        readonly viewUnapprovedExpenseItems: {
            readonly name: "ViewUnapprovedExpenseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the expense item
         *
         * @generated from rpc Genesis.ExpensesService.ViewExpenseItemHistory
         */
        readonly viewExpenseItemHistory: {
            readonly name: "ViewExpenseItemHistory";
            readonly I: typeof ExpenseItemHistoryRequest;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ExpensesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Expense;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.ExpensesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ExpensesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ExpensesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ExpensesServicePaginationReq;
            readonly O: typeof ExpensesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ExpensesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ExpensesServiceEntityPaginationReq;
            readonly O: typeof ExpensesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ExpensesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ExpensesServiceSearchAllReq;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ExpensesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ExpensesServiceFilterReq;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ExpensesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=expenses_connect.d.ts.map