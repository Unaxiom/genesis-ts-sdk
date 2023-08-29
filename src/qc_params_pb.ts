// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file qc_params.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3, protoInt64 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";

/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.QC_PARAM_SORT_KEY
 */
export enum QC_PARAM_SORT_KEY ***REMOVED***
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  QC_PARAM_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_CREATED_AT = 1;
   */
  QC_PARAM_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_MODIFIED_AT = 2;
   */
  QC_PARAM_SORT_KEY_MODIFIED_AT = 2,

  /**
   * Fetch ordered results by the approved on timestamp
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_APPROVED_ON = 3;
   */
  QC_PARAM_SORT_KEY_APPROVED_ON = 3,

  /**
   * Fetch ordered results by the approved by field
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_APPROVED_BY = 4;
   */
  QC_PARAM_SORT_KEY_APPROVED_BY = 4,

  /**
   * Fetch ordered results by the approver's role ID
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5;
   */
  QC_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5,

  /**
   * Fetch ordered results by the approver's completed on timestamp
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_COMPLETED_ON = 6;
   */
  QC_PARAM_SORT_KEY_COMPLETED_ON = 6,

  /**
   * Fetch ordered results by the name
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_NAME = 10;
   */
  QC_PARAM_SORT_KEY_NAME = 10,

  /**
   * Fetch ordered results by the code
   *
   * @generated from enum value: QC_PARAM_SORT_KEY_CODE = 11;
   */
  QC_PARAM_SORT_KEY_CODE = 11,
***REMOVED***
// Retrieve enum metadata with: proto3.getEnumType(QC_PARAM_SORT_KEY)
proto3.util.setEnumType(QC_PARAM_SORT_KEY, "Genesis.QC_PARAM_SORT_KEY", [
  ***REMOVED*** no: 0, name: "QC_PARAM_SORT_KEY_ID_UNSPECIFIED" ***REMOVED***,
  ***REMOVED*** no: 1, name: "QC_PARAM_SORT_KEY_CREATED_AT" ***REMOVED***,
  ***REMOVED*** no: 2, name: "QC_PARAM_SORT_KEY_MODIFIED_AT" ***REMOVED***,
  ***REMOVED*** no: 3, name: "QC_PARAM_SORT_KEY_APPROVED_ON" ***REMOVED***,
  ***REMOVED*** no: 4, name: "QC_PARAM_SORT_KEY_APPROVED_BY" ***REMOVED***,
  ***REMOVED*** no: 5, name: "QC_PARAM_SORT_KEY_APPROVER_ROLE_ID" ***REMOVED***,
  ***REMOVED*** no: 6, name: "QC_PARAM_SORT_KEY_COMPLETED_ON" ***REMOVED***,
  ***REMOVED*** no: 10, name: "QC_PARAM_SORT_KEY_NAME" ***REMOVED***,
  ***REMOVED*** no: 11, name: "QC_PARAM_SORT_KEY_CODE" ***REMOVED***,
]);

/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.QCParamsServiceCreateRequest
 */
export class QCParamsServiceCreateRequest extends Message<QCParamsServiceCreateRequest> ***REMOVED***
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
   * The name of the qc param
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The qc param code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the qc param
   *
   * @generated from field: string description = 12;
   */
  description = "";

  constructor(data?: PartialMessage<QCParamsServiceCreateRequest>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParamsServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceCreateRequest ***REMOVED***
    return new QCParamsServiceCreateRequest().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceCreateRequest ***REMOVED***
    return new QCParamsServiceCreateRequest().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceCreateRequest ***REMOVED***
    return new QCParamsServiceCreateRequest().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParamsServiceCreateRequest | PlainMessage<QCParamsServiceCreateRequest> | undefined, b: QCParamsServiceCreateRequest | PlainMessage<QCParamsServiceCreateRequest> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParamsServiceCreateRequest, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.QCParamsServiceUpdateRequest
 */
export class QCParamsServiceUpdateRequest extends Message<QCParamsServiceUpdateRequest> ***REMOVED***
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
   * The name of the qc param
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The qc param code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the qc param
   *
   * @generated from field: string description = 12;
   */
  description = "";

  constructor(data?: PartialMessage<QCParamsServiceUpdateRequest>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParamsServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceUpdateRequest ***REMOVED***
    return new QCParamsServiceUpdateRequest().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceUpdateRequest ***REMOVED***
    return new QCParamsServiceUpdateRequest().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceUpdateRequest ***REMOVED***
    return new QCParamsServiceUpdateRequest().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParamsServiceUpdateRequest | PlainMessage<QCParamsServiceUpdateRequest> | undefined, b: QCParamsServiceUpdateRequest | PlainMessage<QCParamsServiceUpdateRequest> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParamsServiceUpdateRequest, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.QCParam
 */
export class QCParam extends Message<QCParam> ***REMOVED***
  /**
   * Stores a globally unique entity UUID. This will be set at the organization level
   *
   * @generated from field: string entity_uuid = 1;
   */
  entityUuid = "";

  /**
   * Stores the metadata of this qc param
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
   * The status of this qc param
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  /**
   * Stores the logs of every operation performed on this qc param
   *
   * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
   */
  logs: LogbookLogConciseSLC[] = [];

  /**
   * The timestamp of when this qc param was marked as completed
   *
   * @generated from field: int64 completed_on = 6;
   */
  completedOn = protoInt64.zero;

  /**
   * The name of the qc param
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The qc param code
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The description of the qc param
   *
   * @generated from field: string description = 12;
   */
  description = "";

  constructor(data?: PartialMessage<QCParam>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParam";
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
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParam ***REMOVED***
    return new QCParam().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParam ***REMOVED***
    return new QCParam().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParam ***REMOVED***
    return new QCParam().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParam | PlainMessage<QCParam> | undefined, b: QCParam | PlainMessage<QCParam> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParam, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.QCParamsList
 */
export class QCParamsList extends Message<QCParamsList> ***REMOVED***
  /**
   * List of records
   *
   * @generated from field: repeated Genesis.QCParam list = 1;
   */
  list: QCParam[] = [];

  constructor(data?: PartialMessage<QCParamsList>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParamsList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "list", kind: "message", T: QCParam, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsList ***REMOVED***
    return new QCParamsList().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsList ***REMOVED***
    return new QCParamsList().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsList ***REMOVED***
    return new QCParamsList().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParamsList | PlainMessage<QCParamsList> | undefined, b: QCParamsList | PlainMessage<QCParamsList> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParamsList, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.QCParamsServicePaginationReq
 */
export class QCParamsServicePaginationReq extends Message<QCParamsServicePaginationReq> ***REMOVED***
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
   * @generated from field: Genesis.QC_PARAM_SORT_KEY sort_key = 5;
   */
  sortKey = QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The status of this qc param
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  constructor(data?: PartialMessage<QCParamsServicePaginationReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParamsServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(QC_PARAM_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServicePaginationReq ***REMOVED***
    return new QCParamsServicePaginationReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServicePaginationReq ***REMOVED***
    return new QCParamsServicePaginationReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServicePaginationReq ***REMOVED***
    return new QCParamsServicePaginationReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParamsServicePaginationReq | PlainMessage<QCParamsServicePaginationReq> | undefined, b: QCParamsServicePaginationReq | PlainMessage<QCParamsServicePaginationReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParamsServicePaginationReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.QCParamsServicePaginationResponse
 */
export class QCParamsServicePaginationResponse extends Message<QCParamsServicePaginationResponse> ***REMOVED***
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
   * @generated from field: repeated Genesis.QCParam payload = 4;
   */
  payload: QCParam[] = [];

  constructor(data?: PartialMessage<QCParamsServicePaginationResponse>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParamsServicePaginationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "payload", kind: "message", T: QCParam, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServicePaginationResponse ***REMOVED***
    return new QCParamsServicePaginationResponse().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServicePaginationResponse ***REMOVED***
    return new QCParamsServicePaginationResponse().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServicePaginationResponse ***REMOVED***
    return new QCParamsServicePaginationResponse().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParamsServicePaginationResponse | PlainMessage<QCParamsServicePaginationResponse> | undefined, b: QCParamsServicePaginationResponse | PlainMessage<QCParamsServicePaginationResponse> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParamsServicePaginationResponse, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.QCParamsServiceEntityPaginationReq
 */
export class QCParamsServiceEntityPaginationReq extends Message<QCParamsServiceEntityPaginationReq> ***REMOVED***
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
   * @generated from field: Genesis.QC_PARAM_SORT_KEY sort_key = 5;
   */
  sortKey = QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The entity UUID that is to be used to filter records
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<QCParamsServiceEntityPaginationReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParamsServiceEntityPaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(QC_PARAM_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceEntityPaginationReq ***REMOVED***
    return new QCParamsServiceEntityPaginationReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceEntityPaginationReq ***REMOVED***
    return new QCParamsServiceEntityPaginationReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceEntityPaginationReq ***REMOVED***
    return new QCParamsServiceEntityPaginationReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParamsServiceEntityPaginationReq | PlainMessage<QCParamsServiceEntityPaginationReq> | undefined, b: QCParamsServiceEntityPaginationReq | PlainMessage<QCParamsServiceEntityPaginationReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParamsServiceEntityPaginationReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.QCParamsServiceFilterReq
 */
export class QCParamsServiceFilterReq extends Message<QCParamsServiceFilterReq> ***REMOVED***
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
   * @generated from field: Genesis.QC_PARAM_SORT_KEY sort_key = 5;
   */
  sortKey = QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED;

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
   * The status of this qc param
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
   * The name of the qc param
   *
   * @generated from field: string name = 20;
   */
  name = "";

  /**
   * The qc param code
   *
   * @generated from field: string code = 21;
   */
  code = "";

  constructor(data?: PartialMessage<QCParamsServiceFilterReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParamsServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(QC_PARAM_SORT_KEY) ***REMOVED***,
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

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceFilterReq ***REMOVED***
    return new QCParamsServiceFilterReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceFilterReq ***REMOVED***
    return new QCParamsServiceFilterReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceFilterReq ***REMOVED***
    return new QCParamsServiceFilterReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParamsServiceFilterReq | PlainMessage<QCParamsServiceFilterReq> | undefined, b: QCParamsServiceFilterReq | PlainMessage<QCParamsServiceFilterReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParamsServiceFilterReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.QCParamsServiceSearchAllReq
 */
export class QCParamsServiceSearchAllReq extends Message<QCParamsServiceSearchAllReq> ***REMOVED***
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
   * @generated from field: Genesis.QC_PARAM_SORT_KEY sort_key = 5;
   */
  sortKey = QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED;

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

  constructor(data?: PartialMessage<QCParamsServiceSearchAllReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.QCParamsServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(QC_PARAM_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCParamsServiceSearchAllReq ***REMOVED***
    return new QCParamsServiceSearchAllReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCParamsServiceSearchAllReq ***REMOVED***
    return new QCParamsServiceSearchAllReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCParamsServiceSearchAllReq ***REMOVED***
    return new QCParamsServiceSearchAllReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: QCParamsServiceSearchAllReq | PlainMessage<QCParamsServiceSearchAllReq> | undefined, b: QCParamsServiceSearchAllReq | PlainMessage<QCParamsServiceSearchAllReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(QCParamsServiceSearchAllReq, a, b);
  ***REMOVED***
***REMOVED***
