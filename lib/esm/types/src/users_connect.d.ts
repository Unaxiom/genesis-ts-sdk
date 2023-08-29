import ***REMOVED*** User, UsersList, UsersServiceCreateRequest, UsersServiceEntityPaginationReq, UsersServiceFilterReq, UsersServicePaginationReq, UsersServicePaginationResponse, UsersServiceRegisterMobileDeviceRequest, UsersServiceSearchAllReq, UsersServiceUpdateRequest ***REMOVED*** from "./users_pb.js";
import ***REMOVED*** ActiveStatus, Base64String, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierUUID, IdentifierWithUserComment, IdentifierZeroable, ImageResponse, MonthAndDayFilter, SimpleSearchReq, UpdateOwnPasswordReq, UpdatePasswordReq, UploadPictureReq ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each user
 *
 * @generated from service Genesis.UsersService
 */
export declare const UsersService: ***REMOVED***
    readonly typeName: "Genesis.UsersService";
    readonly methods: ***REMOVED***
        /**
         * Register user's mobile device for push notifications. Returns the ID of the user device record
         *
         * @generated from rpc Genesis.UsersService.RegisterMobileDevice
         */
        readonly registerMobileDevice: ***REMOVED***
            readonly name: "RegisterMobileDevice";
            readonly I: typeof UsersServiceRegisterMobileDeviceRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.UsersService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof UsersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.UsersService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof UsersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.UsersService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof UsersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.UsersService.SendForVerification
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
         * @generated from rpc Genesis.UsersService.Verify
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
         * @generated from rpc Genesis.UsersService.Approve
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
         * @generated from rpc Genesis.UsersService.SendForRevision
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
         * @generated from rpc Genesis.UsersService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof UsersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.UsersService.Halt
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
         * @generated from rpc Genesis.UsersService.Discard
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
         * @generated from rpc Genesis.UsersService.Restore
         */
        readonly restore: ***REMOVED***
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (Identifier);
         *
         * @generated from rpc Genesis.UsersService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update user's password by another user (such as an administrator)
         *
         * @generated from rpc Genesis.UsersService.UpdatePassword
         */
        readonly updatePassword: ***REMOVED***
            readonly name: "UpdatePassword";
            readonly I: typeof UpdatePasswordReq;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update user's own password
         *
         * @generated from rpc Genesis.UsersService.UpdateOwnPassword
         */
        readonly updateOwnPassword: ***REMOVED***
            readonly name: "UpdateOwnPassword";
            readonly I: typeof UpdateOwnPasswordReq;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update the user's profile picture
         *
         * @generated from rpc Genesis.UsersService.UpdateProfilePicture
         */
        readonly updateProfilePicture: ***REMOVED***
            readonly name: "UpdateProfilePicture";
            readonly I: typeof UploadPictureReq;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update the user's signature
         *
         * @generated from rpc Genesis.UsersService.UpdateSignature
         */
        readonly updateSignature: ***REMOVED***
            readonly name: "UpdateSignature";
            readonly I: typeof UploadPictureReq;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Enable MFA for user
         *
         * @generated from rpc Genesis.UsersService.MFAEnable
         */
        readonly mFAEnable: ***REMOVED***
            readonly name: "MFAEnable";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Reset MFA for user
         *
         * @generated from rpc Genesis.UsersService.MFAReset
         */
        readonly mFAReset: ***REMOVED***
            readonly name: "MFAReset";
            readonly I: typeof Identifier;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID (returns the entire information about the user, including the logs)
         *
         * @generated from rpc Genesis.UsersService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof IdentifierZeroable;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by UUID (logs aren't returned)
         *
         * @generated from rpc Genesis.UsersService.ViewByUUID
         */
        readonly viewByUUID: ***REMOVED***
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by username (logs aren't returned)
         *
         * @generated from rpc Genesis.UsersService.ViewByUsername
         */
        readonly viewByUsername: ***REMOVED***
            readonly name: "ViewByUsername";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by user's code (logs aren't returned)
         *
         * @generated from rpc Genesis.UsersService.ViewByCode
         */
        readonly viewByCode: ***REMOVED***
            readonly name: "ViewByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.UsersService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.UsersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.UsersService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof UsersServicePaginationReq;
            readonly O: typeof UsersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.UsersService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof UsersServiceEntityPaginationReq;
            readonly O: typeof UsersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View self user (the profile of the logged in user)
         *
         * @generated from rpc Genesis.UsersService.ViewSelf
         */
        readonly viewSelf: ***REMOVED***
            readonly name: "ViewSelf";
            readonly I: typeof Empty;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all users with birthdays on the given date
         *
         * @generated from rpc Genesis.UsersService.ViewBirthdaysOn
         */
        readonly viewBirthdaysOn: ***REMOVED***
            readonly name: "ViewBirthdaysOn";
            readonly I: typeof MonthAndDayFilter;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View user's signature
         *
         * @generated from rpc Genesis.UsersService.ViewSignature
         */
        readonly viewSignature: ***REMOVED***
            readonly name: "ViewSignature";
            readonly I: typeof Identifier;
            readonly O: typeof Base64String;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View user's profile picture
         *
         * @generated from rpc Genesis.UsersService.ViewProfilePicture
         */
        readonly viewProfilePicture: ***REMOVED***
            readonly name: "ViewProfilePicture";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View user's VCard
         *
         * @generated from rpc Genesis.UsersService.ViewVCard
         */
        readonly viewVCard: ***REMOVED***
            readonly name: "ViewVCard";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View user's QR Code
         *
         * @generated from rpc Genesis.UsersService.ViewQRCode
         */
        readonly viewQRCode: ***REMOVED***
            readonly name: "ViewQRCode";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.UsersService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof UsersServiceSearchAllReq;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.UsersService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof UsersServiceFilterReq;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.UsersService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=users_connect.d.ts.map