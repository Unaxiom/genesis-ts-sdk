// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file visitations.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import ***REMOVED*** Visitation, VisitationsList, VisitationsServiceCreateRequest, VisitationsServiceEntityPaginationReq, VisitationsServiceFilterReq, VisitationsServiceImageEntryRequest, VisitationsServiceImageExitRequest, VisitationsServicePaginationReq, VisitationsServicePaginationResponse, VisitationsServiceSearchAllReq, VisitationsServiceUpdateRequest ***REMOVED*** from "./visitations_pb.js";
import ***REMOVED*** ActiveStatus, CountInSLCStatusRequest, CountResponse, GPSCoordinatesResponse, Identifier, IdentifierUUID, IdentifierWithUserComment, ImageResponse ***REMOVED*** from "./base_pb.js";
import ***REMOVED*** MethodKind ***REMOVED*** from "@bufbuild/protobuf";

/**
 *
 * Describes the common methods applicable on each visitation
 *
 * @generated from service Genesis.VisitationsService
 */
export const VisitationsService = ***REMOVED***
  typeName: "Genesis.VisitationsService",
  methods: ***REMOVED***
    /**
     * Create and send for verification
     *
     * @generated from rpc Genesis.VisitationsService.Create
     */
    create: ***REMOVED***
      name: "Create",
      I: VisitationsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Create and save as draft
     *
     * @generated from rpc Genesis.VisitationsService.Draft
     */
    draft: ***REMOVED***
      name: "Draft",
      I: VisitationsServiceCreateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update draft
     *
     * @generated from rpc Genesis.VisitationsService.DraftUpdate
     */
    draftUpdate: ***REMOVED***
      name: "DraftUpdate",
      I: VisitationsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send for verification
     *
     * @generated from rpc Genesis.VisitationsService.SendForVerification
     */
    sendForVerification: ***REMOVED***
      name: "SendForVerification",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Verify
     *
     * @generated from rpc Genesis.VisitationsService.Verify
     */
    verify: ***REMOVED***
      name: "Verify",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Approve
     *
     * @generated from rpc Genesis.VisitationsService.Approve
     */
    approve: ***REMOVED***
      name: "Approve",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Send For Revision
     *
     * @generated from rpc Genesis.VisitationsService.SendForRevision
     */
    sendForRevision: ***REMOVED***
      name: "SendForRevision",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Update revision
     *
     * @generated from rpc Genesis.VisitationsService.RevisionUpdate
     */
    revisionUpdate: ***REMOVED***
      name: "RevisionUpdate",
      I: VisitationsServiceUpdateRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Halt
     *
     * @generated from rpc Genesis.VisitationsService.Halt
     */
    halt: ***REMOVED***
      name: "Halt",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Discard
     *
     * @generated from rpc Genesis.VisitationsService.Discard
     */
    discard: ***REMOVED***
      name: "Discard",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Restore
     *
     * @generated from rpc Genesis.VisitationsService.Restore
     */
    restore: ***REMOVED***
      name: "Restore",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Complete
     *
     * @generated from rpc Genesis.VisitationsService.Complete
     */
    complete: ***REMOVED***
      name: "Complete",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Repeat
     *
     * @generated from rpc Genesis.VisitationsService.Repeat
     */
    repeat: ***REMOVED***
      name: "Repeat",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Add comment
     *
     * Send Email
     * rpc SendEmail (Identifier) returns (Identifier);
     *
     * @generated from rpc Genesis.VisitationsService.CommentAdd
     */
    commentAdd: ***REMOVED***
      name: "CommentAdd",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Store entry time
     *
     * @generated from rpc Genesis.VisitationsService.RecordImageEntry
     */
    recordImageEntry: ***REMOVED***
      name: "RecordImageEntry",
      I: VisitationsServiceImageEntryRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Store exit time
     *
     * @generated from rpc Genesis.VisitationsService.RecordImageExit
     */
    recordImageExit: ***REMOVED***
      name: "RecordImageExit",
      I: VisitationsServiceImageExitRequest,
      O: Identifier,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View by ID
     *
     * @generated from rpc Genesis.VisitationsService.ViewByID
     */
    viewByID: ***REMOVED***
      name: "ViewByID",
      I: Identifier,
      O: Visitation,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all
     *
     * @generated from rpc Genesis.VisitationsService.ViewAll
     */
    viewAll: ***REMOVED***
      name: "ViewAll",
      I: ActiveStatus,
      O: VisitationsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all with the given entity UUID
     *
     * @generated from rpc Genesis.VisitationsService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: ***REMOVED***
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: VisitationsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination
     *
     * @generated from rpc Genesis.VisitationsService.ViewWithPagination
     */
    viewWithPagination: ***REMOVED***
      name: "ViewWithPagination",
      I: VisitationsServicePaginationReq,
      O: VisitationsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.VisitationsService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: ***REMOVED***
      name: "ViewWithPaginationForEntityUUID",
      I: VisitationsServiceEntityPaginationReq,
      O: VisitationsServicePaginationResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View entry image for visitation ID
     *
     * @generated from rpc Genesis.VisitationsService.ViewEntryImage
     */
    viewEntryImage: ***REMOVED***
      name: "ViewEntryImage",
      I: Identifier,
      O: ImageResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View exit image for visitation ID
     *
     * @generated from rpc Genesis.VisitationsService.ViewExitImage
     */
    viewExitImage: ***REMOVED***
      name: "ViewExitImage",
      I: Identifier,
      O: ImageResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View entry GPS coordinates for visitation ID
     *
     * @generated from rpc Genesis.VisitationsService.ViewEntryGPSCoordinates
     */
    viewEntryGPSCoordinates: ***REMOVED***
      name: "ViewEntryGPSCoordinates",
      I: Identifier,
      O: GPSCoordinatesResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View exit GPS coordinates for visitation ID
     *
     * @generated from rpc Genesis.VisitationsService.ViewExitGPSCoordinates
     */
    viewExitGPSCoordinates: ***REMOVED***
      name: "ViewExitGPSCoordinates",
      I: Identifier,
      O: GPSCoordinatesResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View QR Code
     *
     * @generated from rpc Genesis.VisitationsService.ViewQRCode
     */
    viewQRCode: ***REMOVED***
      name: "ViewQRCode",
      I: Identifier,
      O: ImageResponse,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given search key
     *
     * @generated from rpc Genesis.VisitationsService.SearchAll
     */
    searchAll: ***REMOVED***
      name: "SearchAll",
      I: VisitationsServiceSearchAllReq,
      O: VisitationsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc Genesis.VisitationsService.Filter
     */
    filter: ***REMOVED***
      name: "Filter",
      I: VisitationsServiceFilterReq,
      O: VisitationsList,
      kind: MethodKind.Unary,
***REMOVED***
    /**
     * Count in status
     *
     * @generated from rpc Genesis.VisitationsService.CountInStatus
     */
    countInStatus: ***REMOVED***
      name: "CountInStatus",
      I: CountInSLCStatusRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
***REMOVED***
  ***REMOVED***
***REMOVED*** as const;

