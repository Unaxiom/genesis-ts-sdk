import ***REMOVED*** Visitation, VisitationsList, VisitationsServiceCreateRequest, VisitationsServiceEntityPaginationReq, VisitationsServiceFilterReq, VisitationsServiceImageEntryRequest, VisitationsServiceImageExitRequest, VisitationsServicePaginationReq, VisitationsServicePaginationResponse, VisitationsServiceSearchAllReq, VisitationsServiceUpdateRequest ***REMOVED*** from "./visitations_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, GPSCoordinatesResponse, Identifier, IdentifierUUID, IdentifierWithUserComment, ImageResponse ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each visitation
 *
 * @generated from service Genesis.VisitationsService
 */
export declare const VisitationsService: ***REMOVED***
    readonly typeName: "Genesis.VisitationsService";
    readonly methods: ***REMOVED***
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.VisitationsService.Create
         */
        readonly create: ***REMOVED***
            readonly name: "Create";
            readonly I: typeof VisitationsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.VisitationsService.Draft
         */
        readonly draft: ***REMOVED***
            readonly name: "Draft";
            readonly I: typeof VisitationsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Update draft
         *
         * @generated from rpc Genesis.VisitationsService.DraftUpdate
         */
        readonly draftUpdate: ***REMOVED***
            readonly name: "DraftUpdate";
            readonly I: typeof VisitationsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.VisitationsService.SendForVerification
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
         * @generated from rpc Genesis.VisitationsService.Verify
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
         * @generated from rpc Genesis.VisitationsService.Approve
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
         * @generated from rpc Genesis.VisitationsService.SendForRevision
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
         * @generated from rpc Genesis.VisitationsService.RevisionUpdate
         */
        readonly revisionUpdate: ***REMOVED***
            readonly name: "RevisionUpdate";
            readonly I: typeof VisitationsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Halt
         *
         * @generated from rpc Genesis.VisitationsService.Halt
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
         * @generated from rpc Genesis.VisitationsService.Discard
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
         * @generated from rpc Genesis.VisitationsService.Restore
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
         * @generated from rpc Genesis.VisitationsService.Complete
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
         * @generated from rpc Genesis.VisitationsService.Repeat
         */
        readonly repeat: ***REMOVED***
            readonly name: "Repeat";
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
         * @generated from rpc Genesis.VisitationsService.CommentAdd
         */
        readonly commentAdd: ***REMOVED***
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Store entry time
         *
         * @generated from rpc Genesis.VisitationsService.RecordImageEntry
         */
        readonly recordImageEntry: ***REMOVED***
            readonly name: "RecordImageEntry";
            readonly I: typeof VisitationsServiceImageEntryRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Store exit time
         *
         * @generated from rpc Genesis.VisitationsService.RecordImageExit
         */
        readonly recordImageExit: ***REMOVED***
            readonly name: "RecordImageExit";
            readonly I: typeof VisitationsServiceImageExitRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View by ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewByID
         */
        readonly viewByID: ***REMOVED***
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Visitation;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all
         *
         * @generated from rpc Genesis.VisitationsService.ViewAll
         */
        readonly viewAll: ***REMOVED***
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof VisitationsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.VisitationsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: ***REMOVED***
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VisitationsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.VisitationsService.ViewWithPagination
         */
        readonly viewWithPagination: ***REMOVED***
            readonly name: "ViewWithPagination";
            readonly I: typeof VisitationsServicePaginationReq;
            readonly O: typeof VisitationsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.VisitationsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: ***REMOVED***
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof VisitationsServiceEntityPaginationReq;
            readonly O: typeof VisitationsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View entry image for visitation ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewEntryImage
         */
        readonly viewEntryImage: ***REMOVED***
            readonly name: "ViewEntryImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View exit image for visitation ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewExitImage
         */
        readonly viewExitImage: ***REMOVED***
            readonly name: "ViewExitImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View entry GPS coordinates for visitation ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewEntryGPSCoordinates
         */
        readonly viewEntryGPSCoordinates: ***REMOVED***
            readonly name: "ViewEntryGPSCoordinates";
            readonly I: typeof Identifier;
            readonly O: typeof GPSCoordinatesResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View exit GPS coordinates for visitation ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewExitGPSCoordinates
         */
        readonly viewExitGPSCoordinates: ***REMOVED***
            readonly name: "ViewExitGPSCoordinates";
            readonly I: typeof Identifier;
            readonly O: typeof GPSCoordinatesResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View QR Code
         *
         * @generated from rpc Genesis.VisitationsService.ViewQRCode
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
         * @generated from rpc Genesis.VisitationsService.SearchAll
         */
        readonly searchAll: ***REMOVED***
            readonly name: "SearchAll";
            readonly I: typeof VisitationsServiceSearchAllReq;
            readonly O: typeof VisitationsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.VisitationsService.Filter
         */
        readonly filter: ***REMOVED***
            readonly name: "Filter";
            readonly I: typeof VisitationsServiceFilterReq;
            readonly O: typeof VisitationsList;
            readonly kind: MethodKind.Unary;
***REMOVED***;
        /**
         * Count in status
         *
         * @generated from rpc Genesis.VisitationsService.CountInStatus
         */
        readonly countInStatus: ***REMOVED***
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
***REMOVED***;
***REMOVED***;
***REMOVED***;
//# sourceMappingURL=visitations_connect.d.ts.map