import ***REMOVED*** Expense, ExpenseItem, ExpenseItemHistoryRequest, ExpensesItemsList, ExpensesList, ExpensesServiceCreateRequest, ExpensesServiceEntityPaginationReq, ExpensesServiceFilterReq, ExpensesServiceItemCreateRequest, ExpensesServiceItemUpdateRequest, ExpensesServicePaginationReq, ExpensesServicePaginationResponse, ExpensesServiceSearchAllReq, ExpensesServiceUpdateRequest ***REMOVED*** from "./expenses_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each expense
 *
 * @generated from service Genesis.ExpensesService
 */
export declare const ExpensesService: ***REMOVED***
    readonly typeName: "Genesis.ExpensesService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.ExpensesService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof ExpensesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.ExpensesService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof ExpensesServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.ExpensesService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof ExpensesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.ExpensesService.SendForVerification
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
         * @generated from rpc Genesis.ExpensesService.Verify
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
         * @generated from rpc Genesis.ExpensesService.Approve
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
         * @generated from rpc Genesis.ExpensesService.SendForRevision
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
         * @generated from rpc Genesis.ExpensesService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof ExpensesServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.ExpensesService.Halt
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
         * @generated from rpc Genesis.ExpensesService.Discard
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
         * @generated from rpc Genesis.ExpensesService.Restore
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
         * @generated from rpc Genesis.ExpensesService.Complete
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
         * @generated from rpc Genesis.ExpensesService.Repeat
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
         * @generated from rpc Genesis.ExpensesService.Reopen
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
         * @generated from rpc Genesis.ExpensesService.CommentAdd
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
         * @generated from rpc Genesis.ExpensesService.SendEmail
         */
        readonly sendEmail: ***REMOVED***
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add an item to a expense
         *
         * @generated from rpc Genesis.ExpensesService.AddExpenseItem
         */
        readonly addExpenseItem: ***REMOVED***
            readonly name: "AddExpenseItem";
            readonly I: typeof ExpensesServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Modify an item in a expense
         *
         * @generated from rpc Genesis.ExpensesService.ModifyExpenseItem
         */
        readonly modifyExpenseItem: ***REMOVED***
            readonly name: "ModifyExpenseItem";
            readonly I: typeof ExpensesServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Approve an item in a expense
         *
         * @generated from rpc Genesis.ExpensesService.ApproveExpenseItem
         */
        readonly approveExpenseItem: ***REMOVED***
            readonly name: "ApproveExpenseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Delete an item in a expense
         *
         * @generated from rpc Genesis.ExpensesService.DeleteExpenseItem
         */
        readonly deleteExpenseItem: ***REMOVED***
            readonly name: "DeleteExpenseItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reorder items in a expense
         *
         * @generated from rpc Genesis.ExpensesService.ReorderExpenseItems
         */
        readonly reorderExpenseItems: ***REMOVED***
            readonly name: "ReorderExpenseItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View Expense Item by ID
         *
         * @generated from rpc Genesis.ExpensesService.ViewExpenseItemByID
         */
        readonly viewExpenseItemByID: ***REMOVED***
            readonly name: "ViewExpenseItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ExpenseItem;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View approved expense items for given expense ID
         *
         * @generated from rpc Genesis.ExpensesService.ViewApprovedExpenseItems
         */
        readonly viewApprovedExpenseItems: ***REMOVED***
            readonly name: "ViewApprovedExpenseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View unapproved expense items for given expense ID
         *
         * @generated from rpc Genesis.ExpensesService.ViewUnapprovedExpenseItems
         */
        readonly viewUnapprovedExpenseItems: ***REMOVED***
            readonly name: "ViewUnapprovedExpenseItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View the history of the expense item
         *
         * @generated from rpc Genesis.ExpensesService.ViewExpenseItemHistory
         */
        readonly viewExpenseItemHistory: ***REMOVED***
            readonly name: "ViewExpenseItemHistory";
            readonly I: typeof ExpenseItemHistoryRequest;
            readonly O: typeof ExpensesItemsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.ExpensesService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Expense;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.ExpensesService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.ExpensesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.ExpensesService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof ExpensesServicePaginationReq;
            readonly O: typeof ExpensesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.ExpensesService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof ExpensesServiceEntityPaginationReq;
            readonly O: typeof ExpensesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.ExpensesService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof ExpensesServiceSearchAllReq;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.ExpensesService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof ExpensesServiceFilterReq;
            readonly O: typeof ExpensesList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.ExpensesService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=expenses_connect.d.ts.map