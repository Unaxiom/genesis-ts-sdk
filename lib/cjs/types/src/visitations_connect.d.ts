import { Visitation, VisitationsList, VisitationsServiceCreateRequest, VisitationsServiceEntityPaginationReq, VisitationsServiceFilterReq, VisitationsServiceImageEntryRequest, VisitationsServiceImageExitRequest, VisitationsServicePaginationReq, VisitationsServicePaginationResponse, VisitationsServiceSearchAllReq, VisitationsServiceUpdateRequest } from "./visitations_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, GPSCoordinatesResponse, Identifier, IdentifierUUID, IdentifierWithUserComment, ImageResponse } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each visitation
 *
 * @generated from service Genesis.VisitationsService
 */
export declare const VisitationsService: {
    readonly typeName: "Genesis.VisitationsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Genesis.VisitationsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof VisitationsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Genesis.VisitationsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof VisitationsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Genesis.VisitationsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof VisitationsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Genesis.VisitationsService.SendForVerification
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
         * @generated from rpc Genesis.VisitationsService.Verify
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
         * @generated from rpc Genesis.VisitationsService.Approve
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
         * @generated from rpc Genesis.VisitationsService.SendForRevision
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
         * @generated from rpc Genesis.VisitationsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof VisitationsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Genesis.VisitationsService.Halt
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
         * @generated from rpc Genesis.VisitationsService.Discard
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
         * @generated from rpc Genesis.VisitationsService.Restore
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
         * @generated from rpc Genesis.VisitationsService.Complete
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
         * @generated from rpc Genesis.VisitationsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (Identifier);
         *
         * @generated from rpc Genesis.VisitationsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Store entry time
         *
         * @generated from rpc Genesis.VisitationsService.RecordImageEntry
         */
        readonly recordImageEntry: {
            readonly name: "RecordImageEntry";
            readonly I: typeof VisitationsServiceImageEntryRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Store exit time
         *
         * @generated from rpc Genesis.VisitationsService.RecordImageExit
         */
        readonly recordImageExit: {
            readonly name: "RecordImageExit";
            readonly I: typeof VisitationsServiceImageExitRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Visitation;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Genesis.VisitationsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof VisitationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Genesis.VisitationsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VisitationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Genesis.VisitationsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof VisitationsServicePaginationReq;
            readonly O: typeof VisitationsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination with the given entity UUID
         *
         * @generated from rpc Genesis.VisitationsService.ViewWithPaginationForEntityUUID
         */
        readonly viewWithPaginationForEntityUUID: {
            readonly name: "ViewWithPaginationForEntityUUID";
            readonly I: typeof VisitationsServiceEntityPaginationReq;
            readonly O: typeof VisitationsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entry image for visitation ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewEntryImage
         */
        readonly viewEntryImage: {
            readonly name: "ViewEntryImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View exit image for visitation ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewExitImage
         */
        readonly viewExitImage: {
            readonly name: "ViewExitImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entry GPS coordinates for visitation ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewEntryGPSCoordinates
         */
        readonly viewEntryGPSCoordinates: {
            readonly name: "ViewEntryGPSCoordinates";
            readonly I: typeof Identifier;
            readonly O: typeof GPSCoordinatesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View exit GPS coordinates for visitation ID
         *
         * @generated from rpc Genesis.VisitationsService.ViewExitGPSCoordinates
         */
        readonly viewExitGPSCoordinates: {
            readonly name: "ViewExitGPSCoordinates";
            readonly I: typeof Identifier;
            readonly O: typeof GPSCoordinatesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View QR Code
         *
         * @generated from rpc Genesis.VisitationsService.ViewQRCode
         */
        readonly viewQRCode: {
            readonly name: "ViewQRCode";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Genesis.VisitationsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof VisitationsServiceSearchAllReq;
            readonly O: typeof VisitationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Genesis.VisitationsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof VisitationsServiceFilterReq;
            readonly O: typeof VisitationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Genesis.VisitationsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=visitations_connect.d.ts.map