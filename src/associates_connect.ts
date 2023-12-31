// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file associates.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Associate, AssociatePaginationResp, AssociatesList, AssociatesServiceCreateRequest, AssociatesServiceEntityPaginationReq, AssociatesServicePaginationReq, AssociatesServiceSearchAllReq, AssociatesServiceUpdateRequest } from "./associates_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, BooleanResponse, BytesResponse, Empty, Identifier, IdentifierUUID, IdentifierWithUserComment } from "./base_pb.js";

/**
 *
 * Describes the methods applicable on each associate
 *
 * @generated from service Genesis.AssociatesService
 */
export const AssociatesService = {
  typeName: "Genesis.AssociatesService",
  methods: {
    /**
     * Create a associate
     *
     * @generated from rpc Genesis.AssociatesService.Create
     */
    create: {
      name: "Create",
      I: AssociatesServiceCreateRequest,
      O: Associate,
      kind: MethodKind.Unary,
    },
    /**
     * Update a associate
     *
     * @generated from rpc Genesis.AssociatesService.Update
     */
    update: {
      name: "Update",
      I: AssociatesServiceUpdateRequest,
      O: Associate,
      kind: MethodKind.Unary,
    },
    /**
     * Discard the associate
     *
     * @generated from rpc Genesis.AssociatesService.Discard
     */
    discard: {
      name: "Discard",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Restore the associate
     *
     * @generated from rpc Genesis.AssociatesService.Restore
     */
    restore: {
      name: "Restore",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View by ID
     *
     * @generated from rpc Genesis.AssociatesService.ViewByID
     */
    viewByID: {
      name: "ViewByID",
      I: Identifier,
      O: Associate,
      kind: MethodKind.Unary,
    },
    /**
     * Download Associate by ID as a vCard
     *
     * @generated from rpc Genesis.AssociatesService.DownloadVCard
     */
    downloadVCard: {
      name: "DownloadVCard",
      I: Identifier,
      O: BytesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all associates
     *
     * @generated from rpc Genesis.AssociatesService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveStatus,
      O: AssociatesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all associates with the given entity UUID
     *
     * @generated from rpc Genesis.AssociatesService.ViewAllForEntityUUID
     */
    viewAllForEntityUUID: {
      name: "ViewAllForEntityUUID",
      I: IdentifierUUID,
      O: AssociatesList,
      kind: MethodKind.Unary,
    },
    /**
     * View associates with pagination
     *
     * @generated from rpc Genesis.AssociatesService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: AssociatesServicePaginationReq,
      O: AssociatePaginationResp,
      kind: MethodKind.Unary,
    },
    /**
     * View associates with pagination with the given entity UUID
     *
     * @generated from rpc Genesis.AssociatesService.ViewWithPaginationForEntityUUID
     */
    viewWithPaginationForEntityUUID: {
      name: "ViewWithPaginationForEntityUUID",
      I: AssociatesServiceEntityPaginationReq,
      O: AssociatePaginationResp,
      kind: MethodKind.Unary,
    },
    /**
     * Check if the user has permission to modify an associate
     *
     * @generated from rpc Genesis.AssociatesService.CheckModifyPermission
     */
    checkModifyPermission: {
      name: "CheckModifyPermission",
      I: Empty,
      O: BooleanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Check if the user has permission to add an associate
     *
     * @generated from rpc Genesis.AssociatesService.CheckAddPermission
     */
    checkAddPermission: {
      name: "CheckAddPermission",
      I: Empty,
      O: BooleanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all associates that match the given search key
     *
     * @generated from rpc Genesis.AssociatesService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: AssociatesServiceSearchAllReq,
      O: AssociatesList,
      kind: MethodKind.Unary,
    },
  }
} as const;

