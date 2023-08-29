// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file clients.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3, protoInt64 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";

/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.CLIENT_SORT_KEY
 */
export enum CLIENT_SORT_KEY ***REMOVED***
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: CLIENT_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  CLIENT_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: CLIENT_SORT_KEY_CREATED_AT = 1;
   */
  CLIENT_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: CLIENT_SORT_KEY_MODIFIED_AT = 2;
   */
  CLIENT_SORT_KEY_MODIFIED_AT = 2,

  /**
   * Fetch ordered results by the approved on timestamp
   *
   * @generated from enum value: CLIENT_SORT_KEY_APPROVED_ON = 3;
   */
  CLIENT_SORT_KEY_APPROVED_ON = 3,

  /**
   * Fetch ordered results by the approved by field
   *
   * @generated from enum value: CLIENT_SORT_KEY_APPROVED_BY = 4;
   */
  CLIENT_SORT_KEY_APPROVED_BY = 4,

  /**
   * Fetch ordered results by the approver's role ID
   *
   * @generated from enum value: CLIENT_SORT_KEY_APPROVER_ROLE_ID = 5;
   */
  CLIENT_SORT_KEY_APPROVER_ROLE_ID = 5,

  /**
   * Fetch ordered results by the name
   *
   * @generated from enum value: CLIENT_SORT_KEY_NAME = 10;
   */
  CLIENT_SORT_KEY_NAME = 10,

  /**
   * Fetch ordered results by the code
   *
   * @generated from enum value: CLIENT_SORT_KEY_CODE = 11;
   */
  CLIENT_SORT_KEY_CODE = 11,

  /**
   * Fetch ordered results by the email address
   *
   * @generated from enum value: CLIENT_SORT_KEY_EMAIL = 12;
   */
  CLIENT_SORT_KEY_EMAIL = 12,

  /**
   * Fetch ordered results by the phone number
   *
   * @generated from enum value: CLIENT_SORT_KEY_PHONE = 13;
   */
  CLIENT_SORT_KEY_PHONE = 13,
***REMOVED***
// Retrieve enum metadata with: proto3.getEnumType(CLIENT_SORT_KEY)
proto3.util.setEnumType(CLIENT_SORT_KEY, "Genesis.CLIENT_SORT_KEY", [
  ***REMOVED*** no: 0, name: "CLIENT_SORT_KEY_ID_UNSPECIFIED" ***REMOVED***,
  ***REMOVED*** no: 1, name: "CLIENT_SORT_KEY_CREATED_AT" ***REMOVED***,
  ***REMOVED*** no: 2, name: "CLIENT_SORT_KEY_MODIFIED_AT" ***REMOVED***,
  ***REMOVED*** no: 3, name: "CLIENT_SORT_KEY_APPROVED_ON" ***REMOVED***,
  ***REMOVED*** no: 4, name: "CLIENT_SORT_KEY_APPROVED_BY" ***REMOVED***,
  ***REMOVED*** no: 5, name: "CLIENT_SORT_KEY_APPROVER_ROLE_ID" ***REMOVED***,
  ***REMOVED*** no: 10, name: "CLIENT_SORT_KEY_NAME" ***REMOVED***,
  ***REMOVED*** no: 11, name: "CLIENT_SORT_KEY_CODE" ***REMOVED***,
  ***REMOVED*** no: 12, name: "CLIENT_SORT_KEY_EMAIL" ***REMOVED***,
  ***REMOVED*** no: 13, name: "CLIENT_SORT_KEY_PHONE" ***REMOVED***,
]);

/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.ClientsServiceCreateRequest
 */
export class ClientsServiceCreateRequest extends Message<ClientsServiceCreateRequest> ***REMOVED***
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
   * The name of the client
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The unique code by which the client is classified
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The primary email of the client
   *
   * @generated from field: string email = 12;
   */
  email = "";

  /**
   * The primary contact number of the client
   *
   * @generated from field: string phone = 13;
   */
  phone = "";

  /**
   * The list of dynamic forms
   *
   * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
   */
  formData: FormFieldDatumCreateRequest[] = [];

  constructor(data?: PartialMessage<ClientsServiceCreateRequest>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.ClientsServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 30, name: "form_data", kind: "message", T: FormFieldDatumCreateRequest, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceCreateRequest ***REMOVED***
    return new ClientsServiceCreateRequest().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceCreateRequest ***REMOVED***
    return new ClientsServiceCreateRequest().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceCreateRequest ***REMOVED***
    return new ClientsServiceCreateRequest().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: ClientsServiceCreateRequest | PlainMessage<ClientsServiceCreateRequest> | undefined, b: ClientsServiceCreateRequest | PlainMessage<ClientsServiceCreateRequest> | undefined): boolean ***REMOVED***
    return proto3.util.equals(ClientsServiceCreateRequest, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.ClientsServiceUpdateRequest
 */
export class ClientsServiceUpdateRequest extends Message<ClientsServiceUpdateRequest> ***REMOVED***
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
   * The name of the client
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The unique code by which the client is classified
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The primary email of the client
   *
   * @generated from field: string email = 12;
   */
  email = "";

  /**
   * The primary contact number of the client
   *
   * @generated from field: string phone = 13;
   */
  phone = "";

  /**
   * The list of dynamic forms
   *
   * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
   */
  formData: FormFieldDatumCreateRequest[] = [];

  constructor(data?: PartialMessage<ClientsServiceUpdateRequest>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.ClientsServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 30, name: "form_data", kind: "message", T: FormFieldDatumCreateRequest, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceUpdateRequest ***REMOVED***
    return new ClientsServiceUpdateRequest().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceUpdateRequest ***REMOVED***
    return new ClientsServiceUpdateRequest().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceUpdateRequest ***REMOVED***
    return new ClientsServiceUpdateRequest().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: ClientsServiceUpdateRequest | PlainMessage<ClientsServiceUpdateRequest> | undefined, b: ClientsServiceUpdateRequest | PlainMessage<ClientsServiceUpdateRequest> | undefined): boolean ***REMOVED***
    return proto3.util.equals(ClientsServiceUpdateRequest, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Client
 */
export class Client extends Message<Client> ***REMOVED***
  /**
   * Stores a globally unique entity UUID. This will be set at the organization level
   *
   * @generated from field: string entity_uuid = 1;
   */
  entityUuid = "";

  /**
   * Stores the metadata of this client
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
   * The status of this client
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  /**
   * Stores the logs of every operation performed on this client
   *
   * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
   */
  logs: LogbookLogConciseSLC[] = [];

  /**
   * The associated vault folder ID
   *
   * @generated from field: int64 vault_folder_id = 9;
   */
  vaultFolderId = protoInt64.zero;

  /**
   * The name of the client
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * The unique code by which the client is classified
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * The primary email of the client
   *
   * @generated from field: string email = 12;
   */
  email = "";

  /**
   * The primary contact number of the client
   *
   * @generated from field: string phone = 13;
   */
  phone = "";

  /**
   * The list of dynamic forms
   *
   * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
   */
  formData: FormFieldDatum[] = [];

  constructor(data?: PartialMessage<Client>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.Client";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "metadata", kind: "message", T: EmployeeMetadata ***REMOVED***,
    ***REMOVED*** no: 3, name: "approval_metadata", kind: "message", T: ApprovalMetadata ***REMOVED***,
    ***REMOVED*** no: 4, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 5, name: "logs", kind: "message", T: LogbookLogConciseSLC, repeated: true ***REMOVED***,
    ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 30, name: "form_data", kind: "message", T: FormFieldDatum, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Client ***REMOVED***
    return new Client().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Client ***REMOVED***
    return new Client().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Client ***REMOVED***
    return new Client().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: Client | PlainMessage<Client> | undefined, b: Client | PlainMessage<Client> | undefined): boolean ***REMOVED***
    return proto3.util.equals(Client, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.ClientsList
 */
export class ClientsList extends Message<ClientsList> ***REMOVED***
  /**
   * List of records
   *
   * @generated from field: repeated Genesis.Client list = 1;
   */
  list: Client[] = [];

  constructor(data?: PartialMessage<ClientsList>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.ClientsList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "list", kind: "message", T: Client, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsList ***REMOVED***
    return new ClientsList().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsList ***REMOVED***
    return new ClientsList().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsList ***REMOVED***
    return new ClientsList().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: ClientsList | PlainMessage<ClientsList> | undefined, b: ClientsList | PlainMessage<ClientsList> | undefined): boolean ***REMOVED***
    return proto3.util.equals(ClientsList, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.ClientsServicePaginationReq
 */
export class ClientsServicePaginationReq extends Message<ClientsServicePaginationReq> ***REMOVED***
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
   * @generated from field: Genesis.CLIENT_SORT_KEY sort_key = 5;
   */
  sortKey = CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The status of this client
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  constructor(data?: PartialMessage<ClientsServicePaginationReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.ClientsServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(CLIENT_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServicePaginationReq ***REMOVED***
    return new ClientsServicePaginationReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServicePaginationReq ***REMOVED***
    return new ClientsServicePaginationReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServicePaginationReq ***REMOVED***
    return new ClientsServicePaginationReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: ClientsServicePaginationReq | PlainMessage<ClientsServicePaginationReq> | undefined, b: ClientsServicePaginationReq | PlainMessage<ClientsServicePaginationReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(ClientsServicePaginationReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.ClientsServicePaginationResponse
 */
export class ClientsServicePaginationResponse extends Message<ClientsServicePaginationResponse> ***REMOVED***
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
   * @generated from field: repeated Genesis.Client payload = 4;
   */
  payload: Client[] = [];

  constructor(data?: PartialMessage<ClientsServicePaginationResponse>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.ClientsServicePaginationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "payload", kind: "message", T: Client, repeated: true ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServicePaginationResponse ***REMOVED***
    return new ClientsServicePaginationResponse().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServicePaginationResponse ***REMOVED***
    return new ClientsServicePaginationResponse().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServicePaginationResponse ***REMOVED***
    return new ClientsServicePaginationResponse().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: ClientsServicePaginationResponse | PlainMessage<ClientsServicePaginationResponse> | undefined, b: ClientsServicePaginationResponse | PlainMessage<ClientsServicePaginationResponse> | undefined): boolean ***REMOVED***
    return proto3.util.equals(ClientsServicePaginationResponse, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.ClientsServiceEntityPaginationReq
 */
export class ClientsServiceEntityPaginationReq extends Message<ClientsServiceEntityPaginationReq> ***REMOVED***
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
   * @generated from field: Genesis.CLIENT_SORT_KEY sort_key = 5;
   */
  sortKey = CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The entity UUID that is to be used to filter records
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<ClientsServiceEntityPaginationReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.ClientsServiceEntityPaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(CLIENT_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceEntityPaginationReq ***REMOVED***
    return new ClientsServiceEntityPaginationReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceEntityPaginationReq ***REMOVED***
    return new ClientsServiceEntityPaginationReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceEntityPaginationReq ***REMOVED***
    return new ClientsServiceEntityPaginationReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: ClientsServiceEntityPaginationReq | PlainMessage<ClientsServiceEntityPaginationReq> | undefined, b: ClientsServiceEntityPaginationReq | PlainMessage<ClientsServiceEntityPaginationReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(ClientsServiceEntityPaginationReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.ClientsServiceFilterReq
 */
export class ClientsServiceFilterReq extends Message<ClientsServiceFilterReq> ***REMOVED***
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
   * @generated from field: Genesis.CLIENT_SORT_KEY sort_key = 5;
   */
  sortKey = CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED;

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
   * The status of this client
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
   * The name of the client
   *
   * @generated from field: string name = 20;
   */
  name = "";

  /**
   * The unique code by which the client is classified
   *
   * @generated from field: string code = 21;
   */
  code = "";

  /**
   * The primary email of the client
   *
   * @generated from field: string email = 22;
   */
  email = "";

  /**
   * The primary contact number of the client
   *
   * @generated from field: string phone = 23;
   */
  phone = "";

  constructor(data?: PartialMessage<ClientsServiceFilterReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.ClientsServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(CLIENT_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 11, name: "approved_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "approved_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "approved_by_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 14, name: "approver_role_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 22, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 23, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceFilterReq ***REMOVED***
    return new ClientsServiceFilterReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceFilterReq ***REMOVED***
    return new ClientsServiceFilterReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceFilterReq ***REMOVED***
    return new ClientsServiceFilterReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: ClientsServiceFilterReq | PlainMessage<ClientsServiceFilterReq> | undefined, b: ClientsServiceFilterReq | PlainMessage<ClientsServiceFilterReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(ClientsServiceFilterReq, a, b);
  ***REMOVED***
***REMOVED***

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.ClientsServiceSearchAllReq
 */
export class ClientsServiceSearchAllReq extends Message<ClientsServiceSearchAllReq> ***REMOVED***
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
   * @generated from field: Genesis.CLIENT_SORT_KEY sort_key = 5;
   */
  sortKey = CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED;

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

  constructor(data?: PartialMessage<ClientsServiceSearchAllReq>) ***REMOVED***
    super();
    proto3.util.initPartial(data, this);
  ***REMOVED***

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.ClientsServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(CLIENT_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceSearchAllReq ***REMOVED***
    return new ClientsServiceSearchAllReq().fromBinary(bytes, options);
  ***REMOVED***

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceSearchAllReq ***REMOVED***
    return new ClientsServiceSearchAllReq().fromJson(jsonValue, options);
  ***REMOVED***

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceSearchAllReq ***REMOVED***
    return new ClientsServiceSearchAllReq().fromJsonString(jsonString, options);
  ***REMOVED***

  static equals(a: ClientsServiceSearchAllReq | PlainMessage<ClientsServiceSearchAllReq> | undefined, b: ClientsServiceSearchAllReq | PlainMessage<ClientsServiceSearchAllReq> | undefined): boolean ***REMOVED***
    return proto3.util.equals(ClientsServiceSearchAllReq, a, b);
  ***REMOVED***
***REMOVED***

