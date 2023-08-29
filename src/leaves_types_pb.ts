// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file leaves_types.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3, protoInt64 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";

/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.LEAVE_TYPE_SORT_KEY
 */
export enum LEAVE_TYPE_SORT_KEY ***REMOVED***
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_CREATED_AT = 1;
   */
  LEAVE_TYPE_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_MODIFIED_AT = 2;
   */
  LEAVE_TYPE_SORT_KEY_MODIFIED_AT = 2,

  /**
   * Fetch ordered results by the approved on timestamp
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_APPROVED_ON = 3;
   */
  LEAVE_TYPE_SORT_KEY_APPROVED_ON = 3,

  /**
   * Fetch ordered results by the approved by field
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_APPROVED_BY = 4;
   */
  LEAVE_TYPE_SORT_KEY_APPROVED_BY = 4,

  /**
   * Fetch ordered results by the approver's role ID
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_APPROVER_ROLE_ID = 5;
   */
  LEAVE_TYPE_SORT_KEY_APPROVER_ROLE_ID = 5,

  /**
   * Fetch ordered results by the approver's completed on timestamp
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_COMPLETED_ON = 6;
   */
  LEAVE_TYPE_SORT_KEY_COMPLETED_ON = 6,

  /**
   * Fetch ordered results by the name
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_NAME = 10;
   */
  LEAVE_TYPE_SORT_KEY_NAME = 10,

  /**
   * Fetch ordered results by the code
   *
   * @generated from enum value: LEAVE_TYPE_SORT_KEY_CODE = 11;
   */
  LEAVE_TYPE_SORT_KEY_CODE = 11,
***REMOVED***
// Retrieve enum metadata with: proto3.getEnumType(LEAVE_TYPE_SORT_KEY)
proto3.util.setEnumType(LEAVE_TYPE_SORT_KEY, "Genesis.LEAVE_TYPE_SORT_KEY", [
  ***REMOVED*** no: 0, name: "LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED" ***REMOVED***,
  ***REMOVED*** no: 1, name: "LEAVE_TYPE_SORT_KEY_CREATED_AT" ***REMOVED***,
  ***REMOVED*** no: 2, name: "LEAVE_TYPE_SORT_KEY_MODIFIED_AT" ***REMOVED***,
  ***REMOVED*** no: 3, name: "LEAVE_TYPE_SORT_KEY_APPROVED_ON" ***REMOVED***,
  ***REMOVED*** no: 4, name: "LEAVE_TYPE_SORT_KEY_APPROVED_BY" ***REMOVED***,
  ***REMOVED*** no: 5, name: "LEAVE_TYPE_SORT_KEY_APPROVER_ROLE_ID" ***REMOVED***,
  ***REMOVED*** no: 6, name: "LEAVE_TYPE_SORT_KEY_COMPLETED_ON" ***REMOVED***,
  ***REMOVED*** no: 10, name: "LEAVE_TYPE_SORT_KEY_NAME" ***REMOVED***,
  ***REMOVED*** no: 11, name: "LEAVE_TYPE_SORT_KEY_CODE" ***REMOVED***,
]);

/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.LeavesTypesServiceCreateRequest
 */
export class LeavesTypesServiceCreateRequest extends Message<LeavesTypesServiceCreateRequest> ***REMOVED***
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
   * The name of the leave type
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The leave type code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the leave type
   *
   * @generated from field: string description = 12;
   */
  description = "";

  /**
   * The percentage of the applicable payroll on use of this leave type (in cents)
   *
   * @generated from field: int64 payroll_percentage = 13;
   */
  payrollPercentage = protoInt64.zero;

  constructor(data?: PartialMessage<LeavesTypesServiceCreateRequest>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeavesTypesServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "payroll_percentage", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceCreateRequest ***REMOVED***
    return new LeavesTypesServiceCreateRequest().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceCreateRequest ***REMOVED***
    return new LeavesTypesServiceCreateRequest().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceCreateRequest ***REMOVED***
    return new LeavesTypesServiceCreateRequest().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeavesTypesServiceCreateRequest | PlainMessage<LeavesTypesServiceCreateRequest> | undefined, b: LeavesTypesServiceCreateRequest | PlainMessage<LeavesTypesServiceCreateRequest> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeavesTypesServiceCreateRequest, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.LeavesTypesServiceUpdateRequest
 */
export class LeavesTypesServiceUpdateRequest extends Message<LeavesTypesServiceUpdateRequest> ***REMOVED***
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
   * The name of the leave type
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The leave type code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the leave type
   *
   * @generated from field: string description = 12;
   */
  description = "";

  /**
   * The percentage of the applicable payroll on use of this leave type (in cents)
   *
   * @generated from field: int64 payroll_percentage = 13;
   */
  payrollPercentage = protoInt64.zero;

  constructor(data?: PartialMessage<LeavesTypesServiceUpdateRequest>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeavesTypesServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "payroll_percentage", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceUpdateRequest ***REMOVED***
    return new LeavesTypesServiceUpdateRequest().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceUpdateRequest ***REMOVED***
    return new LeavesTypesServiceUpdateRequest().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceUpdateRequest ***REMOVED***
    return new LeavesTypesServiceUpdateRequest().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeavesTypesServiceUpdateRequest | PlainMessage<LeavesTypesServiceUpdateRequest> | undefined, b: LeavesTypesServiceUpdateRequest | PlainMessage<LeavesTypesServiceUpdateRequest> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeavesTypesServiceUpdateRequest, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.LeaveType
 */
export class LeaveType extends Message<LeaveType> ***REMOVED***
  /**
   * Stores a globally unique entity UUID. This will be set at the organization level
   *
   * @generated from field: string entity_uuid = 1;
   */
  entityUuid = "";

  /**
   * Stores the metadata of this leave type
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
   * The status of this leave type
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  /**
   * Stores the logs of every operation performed on this leave type
   *
   * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
   */
  logs: LogbookLogConciseSLC[] = [];

  /**
   * The timestamp of when this leave type was marked as completed
   *
   * @generated from field: int64 completed_on = 6;
   */
  completedOn = protoInt64.zero;

  /**
   * The name of the leave type
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The leave type code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the leave type
   *
   * @generated from field: string description = 12;
   */
  description = "";

  /**
   * The percentage of the applicable payroll on use of this leave type (in cents)
   *
   * @generated from field: int64 payroll_percentage = 13;
   */
  payrollPercentage = protoInt64.zero;

  constructor(data?: PartialMessage<LeaveType>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeaveType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "metadata", kind: "message", T: EmployeeMetadata ***REMOVED***,
    ***REMOVED*** no: 3, name: "approval_metadata", kind: "message", T: ApprovalMetadata ***REMOVED***,
    ***REMOVED*** no: 4, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 5, name: "logs", kind: "message", T: LogbookLogConciseSLC, repeated: true ***REMOVED***,
    ***REMOVED*** no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "payroll_percentage", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveType ***REMOVED***
    return new LeaveType().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveType ***REMOVED***
    return new LeaveType().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveType ***REMOVED***
    return new LeaveType().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeaveType | PlainMessage<LeaveType> | undefined, b: LeaveType | PlainMessage<LeaveType> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeaveType, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.LeavesTypesList
 */
export class LeavesTypesList extends Message<LeavesTypesList> ***REMOVED***
  /**
   * List of records
   *
   * @generated from field: repeated Genesis.LeaveType list = 1;
   */
  list: LeaveType[] = [];

  constructor(data?: PartialMessage<LeavesTypesList>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeavesTypesList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "list", kind: "message", T: LeaveType, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesList ***REMOVED***
    return new LeavesTypesList().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesList ***REMOVED***
    return new LeavesTypesList().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesList ***REMOVED***
    return new LeavesTypesList().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeavesTypesList | PlainMessage<LeavesTypesList> | undefined, b: LeavesTypesList | PlainMessage<LeavesTypesList> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeavesTypesList, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.LeavesTypesServicePaginationReq
 */
export class LeavesTypesServicePaginationReq extends Message<LeavesTypesServicePaginationReq> ***REMOVED***
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
   * @generated from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;
   */
  sortKey = LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The status of this leave type
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  constructor(data?: PartialMessage<LeavesTypesServicePaginationReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeavesTypesServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(LEAVE_TYPE_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServicePaginationReq ***REMOVED***
    return new LeavesTypesServicePaginationReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationReq ***REMOVED***
    return new LeavesTypesServicePaginationReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationReq ***REMOVED***
    return new LeavesTypesServicePaginationReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeavesTypesServicePaginationReq | PlainMessage<LeavesTypesServicePaginationReq> | undefined, b: LeavesTypesServicePaginationReq | PlainMessage<LeavesTypesServicePaginationReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeavesTypesServicePaginationReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.LeavesTypesServicePaginationResponse
 */
export class LeavesTypesServicePaginationResponse extends Message<LeavesTypesServicePaginationResponse> ***REMOVED***
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
   * @generated from field: repeated Genesis.LeaveType payload = 4;
   */
  payload: LeaveType[] = [];

  constructor(data?: PartialMessage<LeavesTypesServicePaginationResponse>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeavesTypesServicePaginationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "payload", kind: "message", T: LeaveType, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServicePaginationResponse ***REMOVED***
    return new LeavesTypesServicePaginationResponse().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationResponse ***REMOVED***
    return new LeavesTypesServicePaginationResponse().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationResponse ***REMOVED***
    return new LeavesTypesServicePaginationResponse().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeavesTypesServicePaginationResponse | PlainMessage<LeavesTypesServicePaginationResponse> | undefined, b: LeavesTypesServicePaginationResponse | PlainMessage<LeavesTypesServicePaginationResponse> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeavesTypesServicePaginationResponse, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.LeavesTypesServiceEntityPaginationReq
 */
export class LeavesTypesServiceEntityPaginationReq extends Message<LeavesTypesServiceEntityPaginationReq> ***REMOVED***
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
   * @generated from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;
   */
  sortKey = LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The entity UUID that is to be used to filter records
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<LeavesTypesServiceEntityPaginationReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeavesTypesServiceEntityPaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(LEAVE_TYPE_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceEntityPaginationReq ***REMOVED***
    return new LeavesTypesServiceEntityPaginationReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceEntityPaginationReq ***REMOVED***
    return new LeavesTypesServiceEntityPaginationReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceEntityPaginationReq ***REMOVED***
    return new LeavesTypesServiceEntityPaginationReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeavesTypesServiceEntityPaginationReq | PlainMessage<LeavesTypesServiceEntityPaginationReq> | undefined, b: LeavesTypesServiceEntityPaginationReq | PlainMessage<LeavesTypesServiceEntityPaginationReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeavesTypesServiceEntityPaginationReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.LeavesTypesServiceFilterReq
 */
export class LeavesTypesServiceFilterReq extends Message<LeavesTypesServiceFilterReq> ***REMOVED***
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
   * @generated from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;
   */
  sortKey = LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED;

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
   * The status of this leave type
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
   * The name of the leave type
   *
   * @generated from field: string name = 20;
   */
  name = "";

  /**
   * The leave type code
   *
   * @generated from field: string code = 21;
   */
  code = "";

  constructor(data?: PartialMessage<LeavesTypesServiceFilterReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeavesTypesServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(LEAVE_TYPE_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 11, name: "approved_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "approved_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "approved_by_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 14, name: "approver_role_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 15, name: "completed_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 16, name: "completed_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceFilterReq ***REMOVED***
    return new LeavesTypesServiceFilterReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceFilterReq ***REMOVED***
    return new LeavesTypesServiceFilterReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceFilterReq ***REMOVED***
    return new LeavesTypesServiceFilterReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeavesTypesServiceFilterReq | PlainMessage<LeavesTypesServiceFilterReq> | undefined, b: LeavesTypesServiceFilterReq | PlainMessage<LeavesTypesServiceFilterReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeavesTypesServiceFilterReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.LeavesTypesServiceSearchAllReq
 */
export class LeavesTypesServiceSearchAllReq extends Message<LeavesTypesServiceSearchAllReq> ***REMOVED***
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
   * @generated from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;
   */
  sortKey = LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED;

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

  constructor(data?: PartialMessage<LeavesTypesServiceSearchAllReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.LeavesTypesServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(LEAVE_TYPE_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceSearchAllReq ***REMOVED***
    return new LeavesTypesServiceSearchAllReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceSearchAllReq ***REMOVED***
    return new LeavesTypesServiceSearchAllReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceSearchAllReq ***REMOVED***
    return new LeavesTypesServiceSearchAllReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: LeavesTypesServiceSearchAllReq | PlainMessage<LeavesTypesServiceSearchAllReq> | undefined, b: LeavesTypesServiceSearchAllReq | PlainMessage<LeavesTypesServiceSearchAllReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(LeavesTypesServiceSearchAllReq, a, b);
  ***REMOVED***
***REMOVED***
