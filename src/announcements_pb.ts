// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file announcements.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";

/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.ANNOUNCEMENT_SORT_KEY
 */
export enum ANNOUNCEMENT_SORT_KEY {
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_CREATED_AT = 1;
   */
  ANNOUNCEMENT_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_MODIFIED_AT = 2;
   */
  ANNOUNCEMENT_SORT_KEY_MODIFIED_AT = 2,

  /**
   * Fetch ordered results by the approved on timestamp
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVED_ON = 3;
   */
  ANNOUNCEMENT_SORT_KEY_APPROVED_ON = 3,

  /**
   * Fetch ordered results by the approved by field
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVED_BY = 4;
   */
  ANNOUNCEMENT_SORT_KEY_APPROVED_BY = 4,

  /**
   * Fetch ordered results by the approver's role ID
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
   */
  ANNOUNCEMENT_SORT_KEY_APPROVER_ROLE_ID = 5,

  /**
   * Fetch ordered results by the approver's completed on timestamp
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_COMPLETED_ON = 6;
   */
  ANNOUNCEMENT_SORT_KEY_COMPLETED_ON = 6,

  /**
   * Fetch ordered results by the title
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_TITLE = 10;
   */
  ANNOUNCEMENT_SORT_KEY_TITLE = 10,

  /**
   * Fetch ordered results by the description
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_DESCRIPTION = 11;
   */
  ANNOUNCEMENT_SORT_KEY_DESCRIPTION = 11,

  /**
   * Fetch ordered results by the start on timestamp
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_START_ON = 12;
   */
  ANNOUNCEMENT_SORT_KEY_START_ON = 12,

  /**
   * Fetch ordered results by the end on timestamp
   *
   * @generated from enum value: ANNOUNCEMENT_SORT_KEY_END_ON = 13;
   */
  ANNOUNCEMENT_SORT_KEY_END_ON = 13,
}
// Retrieve enum metadata with: proto3.getEnumType(ANNOUNCEMENT_SORT_KEY)
proto3.util.setEnumType(ANNOUNCEMENT_SORT_KEY, "Genesis.ANNOUNCEMENT_SORT_KEY", [
  { no: 0, name: "ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED" },
  { no: 1, name: "ANNOUNCEMENT_SORT_KEY_CREATED_AT" },
  { no: 2, name: "ANNOUNCEMENT_SORT_KEY_MODIFIED_AT" },
  { no: 3, name: "ANNOUNCEMENT_SORT_KEY_APPROVED_ON" },
  { no: 4, name: "ANNOUNCEMENT_SORT_KEY_APPROVED_BY" },
  { no: 5, name: "ANNOUNCEMENT_SORT_KEY_APPROVER_ROLE_ID" },
  { no: 6, name: "ANNOUNCEMENT_SORT_KEY_COMPLETED_ON" },
  { no: 10, name: "ANNOUNCEMENT_SORT_KEY_TITLE" },
  { no: 11, name: "ANNOUNCEMENT_SORT_KEY_DESCRIPTION" },
  { no: 12, name: "ANNOUNCEMENT_SORT_KEY_START_ON" },
  { no: 13, name: "ANNOUNCEMENT_SORT_KEY_END_ON" },
]);

/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.AnnouncementsServiceCreateRequest
 */
export class AnnouncementsServiceCreateRequest extends Message<AnnouncementsServiceCreateRequest> {
  /**
   * Stores a globally unique entity UUID. This will be set at the organization level
   *
   * @generated from field: string entity_uuid = 1;
   */
  entityUuid = "";

  /**
   * Stores any comment that the user might add during this operation
   *
   * @generated from field: string user_comment = 2;
   */
  userComment = "";

  /**
   * The associated vault folder ID
   *
   * @generated from field: int64 vault_folder_id = 9;
   */
  vaultFolderId = protoInt64.zero;

  /**
   * The title of the announcement
   *
   * @generated from field: string title = 10;
   */
  title = "";

  /**
   * The description of the announcement
   *
   * @generated from field: string description = 11;
   */
  description = "";

  /**
   * The start timestamp
   *
   * @generated from field: int64 start_on = 12;
   */
  startOn = protoInt64.zero;

  /**
   * The end timestamp
   *
   * @generated from field: int64 end_on = 13;
   */
  endOn = protoInt64.zero;

  constructor(data?: PartialMessage<AnnouncementsServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.AnnouncementsServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "start_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "end_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceCreateRequest {
    return new AnnouncementsServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceCreateRequest {
    return new AnnouncementsServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceCreateRequest {
    return new AnnouncementsServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AnnouncementsServiceCreateRequest | PlainMessage<AnnouncementsServiceCreateRequest> | undefined, b: AnnouncementsServiceCreateRequest | PlainMessage<AnnouncementsServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(AnnouncementsServiceCreateRequest, a, b);
  }
}

/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.AnnouncementsServiceUpdateRequest
 */
export class AnnouncementsServiceUpdateRequest extends Message<AnnouncementsServiceUpdateRequest> {
  /**
   * Stores any comment that the user might add during this operation
   *
   * @generated from field: string user_comment = 1;
   */
  userComment = "";

  /**
   * The ID of the record that needs to be updated
   *
   * @generated from field: int64 id = 2;
   */
  id = protoInt64.zero;

  /**
   * Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
   *
   * @generated from field: bool notify_users = 3;
   */
  notifyUsers = false;

  /**
   * The associated vault folder ID
   *
   * @generated from field: int64 vault_folder_id = 9;
   */
  vaultFolderId = protoInt64.zero;

  /**
   * The title of the announcement
   *
   * @generated from field: string title = 10;
   */
  title = "";

  /**
   * The description of the announcement
   *
   * @generated from field: string description = 11;
   */
  description = "";

  /**
   * The start timestamp
   *
   * @generated from field: int64 start_on = 12;
   */
  startOn = protoInt64.zero;

  /**
   * The end timestamp
   *
   * @generated from field: int64 end_on = 13;
   */
  endOn = protoInt64.zero;

  constructor(data?: PartialMessage<AnnouncementsServiceUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.AnnouncementsServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "start_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "end_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceUpdateRequest {
    return new AnnouncementsServiceUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceUpdateRequest {
    return new AnnouncementsServiceUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceUpdateRequest {
    return new AnnouncementsServiceUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AnnouncementsServiceUpdateRequest | PlainMessage<AnnouncementsServiceUpdateRequest> | undefined, b: AnnouncementsServiceUpdateRequest | PlainMessage<AnnouncementsServiceUpdateRequest> | undefined): boolean {
    return proto3.util.equals(AnnouncementsServiceUpdateRequest, a, b);
  }
}

/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Announcement
 */
export class Announcement extends Message<Announcement> {
  /**
   * Stores a globally unique entity UUID. This will be set at the organization level
   *
   * @generated from field: string entity_uuid = 1;
   */
  entityUuid = "";

  /**
   * Stores the metadata of this announcement
   *
   * @generated from field: Genesis.EmployeeMetadata metadata = 2;
   */
  metadata?: EmployeeMetadata;

  /**
   * Stores the approval metadata
   *
   * @generated from field: Genesis.ApprovalMetadata approval_metadata = 3;
   */
  approvalMetadata?: ApprovalMetadata;

  /**
   * The status of this announcement
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  /**
   * Stores the logs of every operation performed on this announcement
   *
   * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
   */
  logs: LogbookLogConciseSLC[] = [];

  /**
   * The timestamp of when this announcement was marked as completed
   *
   * @generated from field: int64 completed_on = 6;
   */
  completedOn = protoInt64.zero;

  /**
   * The associated vault folder ID
   *
   * @generated from field: int64 vault_folder_id = 9;
   */
  vaultFolderId = protoInt64.zero;

  /**
   * The title of the announcement
   *
   * @generated from field: string title = 10;
   */
  title = "";

  /**
   * The description of the announcement
   *
   * @generated from field: string description = 11;
   */
  description = "";

  /**
   * The start timestamp
   *
   * @generated from field: int64 start_on = 12;
   */
  startOn = protoInt64.zero;

  /**
   * The end timestamp
   *
   * @generated from field: int64 end_on = 13;
   */
  endOn = protoInt64.zero;

  constructor(data?: PartialMessage<Announcement>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.Announcement";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: EmployeeMetadata },
    { no: 3, name: "approval_metadata", kind: "message", T: ApprovalMetadata },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
    { no: 5, name: "logs", kind: "message", T: LogbookLogConciseSLC, repeated: true },
    { no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "start_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "end_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Announcement {
    return new Announcement().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Announcement {
    return new Announcement().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Announcement {
    return new Announcement().fromJsonString(jsonString, options);
  }

  static equals(a: Announcement | PlainMessage<Announcement> | undefined, b: Announcement | PlainMessage<Announcement> | undefined): boolean {
    return proto3.util.equals(Announcement, a, b);
  }
}

/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.AnnouncementsList
 */
export class AnnouncementsList extends Message<AnnouncementsList> {
  /**
   * List of records
   *
   * @generated from field: repeated Genesis.Announcement list = 1;
   */
  list: Announcement[] = [];

  constructor(data?: PartialMessage<AnnouncementsList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.AnnouncementsList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: Announcement, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsList {
    return new AnnouncementsList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsList {
    return new AnnouncementsList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsList {
    return new AnnouncementsList().fromJsonString(jsonString, options);
  }

  static equals(a: AnnouncementsList | PlainMessage<AnnouncementsList> | undefined, b: AnnouncementsList | PlainMessage<AnnouncementsList> | undefined): boolean {
    return proto3.util.equals(AnnouncementsList, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.AnnouncementsServicePaginationReq
 */
export class AnnouncementsServicePaginationReq extends Message<AnnouncementsServicePaginationReq> {
  /**
   * If true, then returns only active records. If false, then returns only inactive records
   *
   * @generated from field: bool is_active = 1;
   */
  isActive = false;

  /**
   * The number of records that need to be sent in the response
   *
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * The number that need to be offset by before fetching the records
   *
   * @generated from field: int64 offset = 3;
   */
  offset = protoInt64.zero;

  /**
   * The sort order that is to be used to fetch the pagination response
   *
   * @generated from field: Genesis.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: Genesis.ANNOUNCEMENT_SORT_KEY sort_key = 5;
   */
  sortKey = ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The status of this announcement
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  constructor(data?: PartialMessage<AnnouncementsServicePaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.AnnouncementsServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(ANNOUNCEMENT_SORT_KEY) },
    { no: 6, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServicePaginationReq {
    return new AnnouncementsServicePaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationReq {
    return new AnnouncementsServicePaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationReq {
    return new AnnouncementsServicePaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: AnnouncementsServicePaginationReq | PlainMessage<AnnouncementsServicePaginationReq> | undefined, b: AnnouncementsServicePaginationReq | PlainMessage<AnnouncementsServicePaginationReq> | undefined): boolean {
    return proto3.util.equals(AnnouncementsServicePaginationReq, a, b);
  }
}

/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.AnnouncementsServicePaginationResponse
 */
export class AnnouncementsServicePaginationResponse extends Message<AnnouncementsServicePaginationResponse> {
  /**
   * The number of records in this payload
   *
   * @generated from field: int64 count = 1;
   */
  count = protoInt64.zero;

  /**
   * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
   *
   * @generated from field: int64 offset = 2;
   */
  offset = protoInt64.zero;

  /**
   * The total number of records that are available
   *
   * @generated from field: int64 total = 3;
   */
  total = protoInt64.zero;

  /**
   * The list of records
   *
   * @generated from field: repeated Genesis.Announcement payload = 4;
   */
  payload: Announcement[] = [];

  constructor(data?: PartialMessage<AnnouncementsServicePaginationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.AnnouncementsServicePaginationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "payload", kind: "message", T: Announcement, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServicePaginationResponse {
    return new AnnouncementsServicePaginationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationResponse {
    return new AnnouncementsServicePaginationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationResponse {
    return new AnnouncementsServicePaginationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AnnouncementsServicePaginationResponse | PlainMessage<AnnouncementsServicePaginationResponse> | undefined, b: AnnouncementsServicePaginationResponse | PlainMessage<AnnouncementsServicePaginationResponse> | undefined): boolean {
    return proto3.util.equals(AnnouncementsServicePaginationResponse, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.AnnouncementsServiceEntityPaginationReq
 */
export class AnnouncementsServiceEntityPaginationReq extends Message<AnnouncementsServiceEntityPaginationReq> {
  /**
   * If true, then returns only active records. If false, then returns only inactive records
   *
   * @generated from field: bool is_active = 1;
   */
  isActive = false;

  /**
   * The number of records that need to be sent in the response
   *
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * The number that need to be offset by before fetching the records
   *
   * @generated from field: int64 offset = 3;
   */
  offset = protoInt64.zero;

  /**
   * The sort order that is to be used to fetch the pagination response
   *
   * @generated from field: Genesis.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: Genesis.ANNOUNCEMENT_SORT_KEY sort_key = 5;
   */
  sortKey = ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The entity UUID that is to be used to filter records
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<AnnouncementsServiceEntityPaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.AnnouncementsServiceEntityPaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(ANNOUNCEMENT_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceEntityPaginationReq {
    return new AnnouncementsServiceEntityPaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceEntityPaginationReq {
    return new AnnouncementsServiceEntityPaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceEntityPaginationReq {
    return new AnnouncementsServiceEntityPaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: AnnouncementsServiceEntityPaginationReq | PlainMessage<AnnouncementsServiceEntityPaginationReq> | undefined, b: AnnouncementsServiceEntityPaginationReq | PlainMessage<AnnouncementsServiceEntityPaginationReq> | undefined): boolean {
    return proto3.util.equals(AnnouncementsServiceEntityPaginationReq, a, b);
  }
}

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.AnnouncementsServiceFilterReq
 */
export class AnnouncementsServiceFilterReq extends Message<AnnouncementsServiceFilterReq> {
  /**
   * If true, then returns only active records. If false, then returns only inactive records
   *
   * @generated from field: bool is_active = 1;
   */
  isActive = false;

  /**
   * The number of records that need to be sent in the response. Returns all records if it is set to -1
   *
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * The number that need to be offset by before fetching the records
   *
   * @generated from field: int64 offset = 3;
   */
  offset = protoInt64.zero;

  /**
   * The sort order that is to be used to fetch the pagination response
   *
   * @generated from field: Genesis.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: Genesis.ANNOUNCEMENT_SORT_KEY sort_key = 5;
   */
  sortKey = ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The minimum timestamp that needs to be considered to filter by creation
   *
   * @generated from field: int64 creation_timestamp_start = 6;
   */
  creationTimestampStart = protoInt64.zero;

  /**
   * The maximum timestamp that needs to be considered to filter by creation
   *
   * @generated from field: int64 creation_timestamp_end = 7;
   */
  creationTimestampEnd = protoInt64.zero;

  /**
   * The entity UUID that is to be used to filter records
   *
   * @generated from field: string entity_uuid = 8;
   */
  entityUuid = "";

  /**
   * The status of this announcement
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  /**
   * The start range of approved timestamp
   *
   * @generated from field: int64 approved_on_start = 11;
   */
  approvedOnStart = protoInt64.zero;

  /**
   * The end range of approved timestamp
   *
   * @generated from field: int64 approved_on_end = 12;
   */
  approvedOnEnd = protoInt64.zero;

  /**
   * The ID of the approver
   *
   * @generated from field: int64 approved_by_user_id = 13;
   */
  approvedByUserId = protoInt64.zero;

  /**
   * The role ID of the approver
   *
   * @generated from field: int64 approver_role_id = 14;
   */
  approverRoleId = protoInt64.zero;

  /**
   * The start range of completed timestamp
   *
   * @generated from field: int64 completed_on_start = 15;
   */
  completedOnStart = protoInt64.zero;

  /**
   * The end range of completed timestamp
   *
   * @generated from field: int64 completed_on_end = 16;
   */
  completedOnEnd = protoInt64.zero;

  /**
   * The title of the announcement
   *
   * @generated from field: string title = 20;
   */
  title = "";

  /**
   * The description of the announcement
   *
   * @generated from field: string description = 21;
   */
  description = "";

  /**
   * The start range of start timestamp
   *
   * @generated from field: int64 start_on_start = 22;
   */
  startOnStart = protoInt64.zero;

  /**
   * The end range of start timestamp
   *
   * @generated from field: int64 start_on_end = 23;
   */
  startOnEnd = protoInt64.zero;

  /**
   * The start range of end timestamp
   *
   * @generated from field: int64 end_on_start = 24;
   */
  endOnStart = protoInt64.zero;

  /**
   * The end range of end timestamp
   *
   * @generated from field: int64 end_on_end = 25;
   */
  endOnEnd = protoInt64.zero;

  constructor(data?: PartialMessage<AnnouncementsServiceFilterReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.AnnouncementsServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(ANNOUNCEMENT_SORT_KEY) },
    { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "approved_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "approved_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "approved_by_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "approver_role_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "completed_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "completed_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "start_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 23, name: "start_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 24, name: "end_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 25, name: "end_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceFilterReq {
    return new AnnouncementsServiceFilterReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceFilterReq {
    return new AnnouncementsServiceFilterReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceFilterReq {
    return new AnnouncementsServiceFilterReq().fromJsonString(jsonString, options);
  }

  static equals(a: AnnouncementsServiceFilterReq | PlainMessage<AnnouncementsServiceFilterReq> | undefined, b: AnnouncementsServiceFilterReq | PlainMessage<AnnouncementsServiceFilterReq> | undefined): boolean {
    return proto3.util.equals(AnnouncementsServiceFilterReq, a, b);
  }
}

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.AnnouncementsServiceSearchAllReq
 */
export class AnnouncementsServiceSearchAllReq extends Message<AnnouncementsServiceSearchAllReq> {
  /**
   * If true, then returns only active records. If false, then returns only inactive records
   *
   * @generated from field: bool is_active = 1;
   */
  isActive = false;

  /**
   * The number of records that need to be sent in the response. Returns all records if it is set to -1
   *
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * The number that need to be offset by before fetching the records
   *
   * @generated from field: int64 offset = 3;
   */
  offset = protoInt64.zero;

  /**
   * The sort order that is to be used to fetch the pagination response
   *
   * @generated from field: Genesis.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: Genesis.ANNOUNCEMENT_SORT_KEY sort_key = 5;
   */
  sortKey = ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The entity UUID that is to be used to filter records
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  /**
   * Limit the search space to the given status
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  /**
   * Describes the key with which the search operation needs to be performed
   *
   * @generated from field: string search_key = 11;
   */
  searchKey = "";

  constructor(data?: PartialMessage<AnnouncementsServiceSearchAllReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.AnnouncementsServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(ANNOUNCEMENT_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceSearchAllReq {
    return new AnnouncementsServiceSearchAllReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceSearchAllReq {
    return new AnnouncementsServiceSearchAllReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceSearchAllReq {
    return new AnnouncementsServiceSearchAllReq().fromJsonString(jsonString, options);
  }

  static equals(a: AnnouncementsServiceSearchAllReq | PlainMessage<AnnouncementsServiceSearchAllReq> | undefined, b: AnnouncementsServiceSearchAllReq | PlainMessage<AnnouncementsServiceSearchAllReq> | undefined): boolean {
    return proto3.util.equals(AnnouncementsServiceSearchAllReq, a, b);
  }
}

