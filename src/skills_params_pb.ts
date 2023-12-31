// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file skills_params.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";

/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SKILL_PARAM_SORT_KEY
 */
export enum SKILL_PARAM_SORT_KEY {
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_CREATED_AT = 1;
   */
  SKILL_PARAM_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_MODIFIED_AT = 2;
   */
  SKILL_PARAM_SORT_KEY_MODIFIED_AT = 2,

  /**
   * Fetch ordered results by the approved on timestamp
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVED_ON = 3;
   */
  SKILL_PARAM_SORT_KEY_APPROVED_ON = 3,

  /**
   * Fetch ordered results by the approved by field
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVED_BY = 4;
   */
  SKILL_PARAM_SORT_KEY_APPROVED_BY = 4,

  /**
   * Fetch ordered results by the approver's role ID
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5;
   */
  SKILL_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5,

  /**
   * Fetch ordered results by the approver's completed on timestamp
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_COMPLETED_ON = 6;
   */
  SKILL_PARAM_SORT_KEY_COMPLETED_ON = 6,

  /**
   * Fetch ordered results by the name
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_NAME = 10;
   */
  SKILL_PARAM_SORT_KEY_NAME = 10,

  /**
   * Fetch ordered results by the code
   *
   * @generated from enum value: SKILL_PARAM_SORT_KEY_CODE = 11;
   */
  SKILL_PARAM_SORT_KEY_CODE = 11,
}
// Retrieve enum metadata with: proto3.getEnumType(SKILL_PARAM_SORT_KEY)
proto3.util.setEnumType(SKILL_PARAM_SORT_KEY, "Genesis.SKILL_PARAM_SORT_KEY", [
  { no: 0, name: "SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED" },
  { no: 1, name: "SKILL_PARAM_SORT_KEY_CREATED_AT" },
  { no: 2, name: "SKILL_PARAM_SORT_KEY_MODIFIED_AT" },
  { no: 3, name: "SKILL_PARAM_SORT_KEY_APPROVED_ON" },
  { no: 4, name: "SKILL_PARAM_SORT_KEY_APPROVED_BY" },
  { no: 5, name: "SKILL_PARAM_SORT_KEY_APPROVER_ROLE_ID" },
  { no: 6, name: "SKILL_PARAM_SORT_KEY_COMPLETED_ON" },
  { no: 10, name: "SKILL_PARAM_SORT_KEY_NAME" },
  { no: 11, name: "SKILL_PARAM_SORT_KEY_CODE" },
]);

/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.SkillsParamsServiceCreateRequest
 */
export class SkillsParamsServiceCreateRequest extends Message<SkillsParamsServiceCreateRequest> {
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
   * The name of the skill param
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The skill param code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the skill param
   *
   * @generated from field: string description = 12;
   */
  description = "";

  /**
   * The list of dynamic forms
   *
   * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
   */
  formData: FormFieldDatumCreateRequest[] = [];

  constructor(data?: PartialMessage<SkillsParamsServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillsParamsServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "form_data", kind: "message", T: FormFieldDatumCreateRequest, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceCreateRequest {
    return new SkillsParamsServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceCreateRequest {
    return new SkillsParamsServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceCreateRequest {
    return new SkillsParamsServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SkillsParamsServiceCreateRequest | PlainMessage<SkillsParamsServiceCreateRequest> | undefined, b: SkillsParamsServiceCreateRequest | PlainMessage<SkillsParamsServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(SkillsParamsServiceCreateRequest, a, b);
  }
}

/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.SkillsParamsServiceUpdateRequest
 */
export class SkillsParamsServiceUpdateRequest extends Message<SkillsParamsServiceUpdateRequest> {
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
   * The name of the skill param
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The skill param code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the skill param
   *
   * @generated from field: string description = 12;
   */
  description = "";

  /**
   * The list of dynamic forms
   *
   * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
   */
  formData: FormFieldDatumCreateRequest[] = [];

  constructor(data?: PartialMessage<SkillsParamsServiceUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillsParamsServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "form_data", kind: "message", T: FormFieldDatumCreateRequest, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceUpdateRequest {
    return new SkillsParamsServiceUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceUpdateRequest {
    return new SkillsParamsServiceUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceUpdateRequest {
    return new SkillsParamsServiceUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SkillsParamsServiceUpdateRequest | PlainMessage<SkillsParamsServiceUpdateRequest> | undefined, b: SkillsParamsServiceUpdateRequest | PlainMessage<SkillsParamsServiceUpdateRequest> | undefined): boolean {
    return proto3.util.equals(SkillsParamsServiceUpdateRequest, a, b);
  }
}

/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.SkillParam
 */
export class SkillParam extends Message<SkillParam> {
  /**
   * Stores a globally unique entity UUID. This will be set at the organization level
   *
   * @generated from field: string entity_uuid = 1;
   */
  entityUuid = "";

  /**
   * Stores the metadata of this skill param
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
   * The status of this skill param
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  /**
   * Stores the logs of every operation performed on this skill param
   *
   * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
   */
  logs: LogbookLogConciseSLC[] = [];

  /**
   * The timestamp of when this skill param was marked as completed
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
   * The name of the skill param
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The skill param code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the skill param
   *
   * @generated from field: string description = 12;
   */
  description = "";

  /**
   * The list of dynamic forms
   *
   * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
   */
  formData: FormFieldDatum[] = [];

  constructor(data?: PartialMessage<SkillParam>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillParam";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: EmployeeMetadata },
    { no: 3, name: "approval_metadata", kind: "message", T: ApprovalMetadata },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
    { no: 5, name: "logs", kind: "message", T: LogbookLogConciseSLC, repeated: true },
    { no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "form_data", kind: "message", T: FormFieldDatum, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillParam {
    return new SkillParam().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillParam {
    return new SkillParam().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillParam {
    return new SkillParam().fromJsonString(jsonString, options);
  }

  static equals(a: SkillParam | PlainMessage<SkillParam> | undefined, b: SkillParam | PlainMessage<SkillParam> | undefined): boolean {
    return proto3.util.equals(SkillParam, a, b);
  }
}

/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.SkillsParamsList
 */
export class SkillsParamsList extends Message<SkillsParamsList> {
  /**
   * List of records
   *
   * @generated from field: repeated Genesis.SkillParam list = 1;
   */
  list: SkillParam[] = [];

  constructor(data?: PartialMessage<SkillsParamsList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillsParamsList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: SkillParam, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsList {
    return new SkillsParamsList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsList {
    return new SkillsParamsList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsList {
    return new SkillsParamsList().fromJsonString(jsonString, options);
  }

  static equals(a: SkillsParamsList | PlainMessage<SkillsParamsList> | undefined, b: SkillsParamsList | PlainMessage<SkillsParamsList> | undefined): boolean {
    return proto3.util.equals(SkillsParamsList, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.SkillsParamsServicePaginationReq
 */
export class SkillsParamsServicePaginationReq extends Message<SkillsParamsServicePaginationReq> {
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
   * @generated from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;
   */
  sortKey = SKILL_PARAM_SORT_KEY.SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The status of this skill param
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  constructor(data?: PartialMessage<SkillsParamsServicePaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillsParamsServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SKILL_PARAM_SORT_KEY) },
    { no: 6, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServicePaginationReq {
    return new SkillsParamsServicePaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationReq {
    return new SkillsParamsServicePaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationReq {
    return new SkillsParamsServicePaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: SkillsParamsServicePaginationReq | PlainMessage<SkillsParamsServicePaginationReq> | undefined, b: SkillsParamsServicePaginationReq | PlainMessage<SkillsParamsServicePaginationReq> | undefined): boolean {
    return proto3.util.equals(SkillsParamsServicePaginationReq, a, b);
  }
}

/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.SkillsParamsServicePaginationResponse
 */
export class SkillsParamsServicePaginationResponse extends Message<SkillsParamsServicePaginationResponse> {
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
   * @generated from field: repeated Genesis.SkillParam payload = 4;
   */
  payload: SkillParam[] = [];

  constructor(data?: PartialMessage<SkillsParamsServicePaginationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillsParamsServicePaginationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "payload", kind: "message", T: SkillParam, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServicePaginationResponse {
    return new SkillsParamsServicePaginationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationResponse {
    return new SkillsParamsServicePaginationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationResponse {
    return new SkillsParamsServicePaginationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SkillsParamsServicePaginationResponse | PlainMessage<SkillsParamsServicePaginationResponse> | undefined, b: SkillsParamsServicePaginationResponse | PlainMessage<SkillsParamsServicePaginationResponse> | undefined): boolean {
    return proto3.util.equals(SkillsParamsServicePaginationResponse, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.SkillsParamsServiceEntityPaginationReq
 */
export class SkillsParamsServiceEntityPaginationReq extends Message<SkillsParamsServiceEntityPaginationReq> {
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
   * @generated from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;
   */
  sortKey = SKILL_PARAM_SORT_KEY.SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The entity UUID that is to be used to filter records
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<SkillsParamsServiceEntityPaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillsParamsServiceEntityPaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SKILL_PARAM_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceEntityPaginationReq {
    return new SkillsParamsServiceEntityPaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceEntityPaginationReq {
    return new SkillsParamsServiceEntityPaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceEntityPaginationReq {
    return new SkillsParamsServiceEntityPaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: SkillsParamsServiceEntityPaginationReq | PlainMessage<SkillsParamsServiceEntityPaginationReq> | undefined, b: SkillsParamsServiceEntityPaginationReq | PlainMessage<SkillsParamsServiceEntityPaginationReq> | undefined): boolean {
    return proto3.util.equals(SkillsParamsServiceEntityPaginationReq, a, b);
  }
}

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.SkillsParamsServiceFilterReq
 */
export class SkillsParamsServiceFilterReq extends Message<SkillsParamsServiceFilterReq> {
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
   * @generated from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;
   */
  sortKey = SKILL_PARAM_SORT_KEY.SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED;

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
   * The status of this skill param
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
   * The name of the skill param
   *
   * @generated from field: string name = 20;
   */
  name = "";

  /**
   * The skill param code
   *
   * @generated from field: string code = 21;
   */
  code = "";

  constructor(data?: PartialMessage<SkillsParamsServiceFilterReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillsParamsServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SKILL_PARAM_SORT_KEY) },
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
    { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceFilterReq {
    return new SkillsParamsServiceFilterReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceFilterReq {
    return new SkillsParamsServiceFilterReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceFilterReq {
    return new SkillsParamsServiceFilterReq().fromJsonString(jsonString, options);
  }

  static equals(a: SkillsParamsServiceFilterReq | PlainMessage<SkillsParamsServiceFilterReq> | undefined, b: SkillsParamsServiceFilterReq | PlainMessage<SkillsParamsServiceFilterReq> | undefined): boolean {
    return proto3.util.equals(SkillsParamsServiceFilterReq, a, b);
  }
}

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.SkillsParamsServiceSearchAllReq
 */
export class SkillsParamsServiceSearchAllReq extends Message<SkillsParamsServiceSearchAllReq> {
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
   * @generated from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;
   */
  sortKey = SKILL_PARAM_SORT_KEY.SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED;

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

  constructor(data?: PartialMessage<SkillsParamsServiceSearchAllReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SkillsParamsServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SKILL_PARAM_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceSearchAllReq {
    return new SkillsParamsServiceSearchAllReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceSearchAllReq {
    return new SkillsParamsServiceSearchAllReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceSearchAllReq {
    return new SkillsParamsServiceSearchAllReq().fromJsonString(jsonString, options);
  }

  static equals(a: SkillsParamsServiceSearchAllReq | PlainMessage<SkillsParamsServiceSearchAllReq> | undefined, b: SkillsParamsServiceSearchAllReq | PlainMessage<SkillsParamsServiceSearchAllReq> | undefined): boolean {
    return proto3.util.equals(SkillsParamsServiceSearchAllReq, a, b);
  }
}

