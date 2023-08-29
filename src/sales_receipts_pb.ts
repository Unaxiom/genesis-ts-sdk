// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file sales_receipts.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";

/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SALE_RECEIPT_SORT_KEY
 */
export enum SALE_RECEIPT_SORT_KEY {
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_CREATED_AT = 1;
   */
  SALE_RECEIPT_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_MODIFIED_AT = 2;
   */
  SALE_RECEIPT_SORT_KEY_MODIFIED_AT = 2,

  /**
   * Fetch ordered results by the approved on timestamp
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_APPROVED_ON = 3;
   */
  SALE_RECEIPT_SORT_KEY_APPROVED_ON = 3,

  /**
   * Fetch ordered results by the approved by field
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_APPROVED_BY = 4;
   */
  SALE_RECEIPT_SORT_KEY_APPROVED_BY = 4,

  /**
   * Fetch ordered results by the approver's role ID
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_APPROVER_ROLE_ID = 5;
   */
  SALE_RECEIPT_SORT_KEY_APPROVER_ROLE_ID = 5,

  /**
   * Fetch ordered results by the approver's completed on timestamp
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_COMPLETED_ON = 6;
   */
  SALE_RECEIPT_SORT_KEY_COMPLETED_ON = 6,

  /**
   * Fetch ordered results by the reference ID
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_REFERENCE_ID = 10;
   */
  SALE_RECEIPT_SORT_KEY_REFERENCE_ID = 10,

  /**
   * Fetch ordered results by the final ref number
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_FINAL_REF_NUMBER = 11;
   */
  SALE_RECEIPT_SORT_KEY_FINAL_REF_NUMBER = 11,

  /**
   * Fetch ordered results by the payment timestamp
   *
   * @generated from enum value: SALE_RECEIPT_SORT_KEY_PAYMENT_TIMESTAMP = 12;
   */
  SALE_RECEIPT_SORT_KEY_PAYMENT_TIMESTAMP = 12,
}
// Retrieve enum metadata with: proto3.getEnumType(SALE_RECEIPT_SORT_KEY)
proto3.util.setEnumType(SALE_RECEIPT_SORT_KEY, "Genesis.SALE_RECEIPT_SORT_KEY", [
  { no: 0, name: "SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED" },
  { no: 1, name: "SALE_RECEIPT_SORT_KEY_CREATED_AT" },
  { no: 2, name: "SALE_RECEIPT_SORT_KEY_MODIFIED_AT" },
  { no: 3, name: "SALE_RECEIPT_SORT_KEY_APPROVED_ON" },
  { no: 4, name: "SALE_RECEIPT_SORT_KEY_APPROVED_BY" },
  { no: 5, name: "SALE_RECEIPT_SORT_KEY_APPROVER_ROLE_ID" },
  { no: 6, name: "SALE_RECEIPT_SORT_KEY_COMPLETED_ON" },
  { no: 10, name: "SALE_RECEIPT_SORT_KEY_REFERENCE_ID" },
  { no: 11, name: "SALE_RECEIPT_SORT_KEY_FINAL_REF_NUMBER" },
  { no: 12, name: "SALE_RECEIPT_SORT_KEY_PAYMENT_TIMESTAMP" },
]);

/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.SalesReceiptsServiceCreateRequest
 */
export class SalesReceiptsServiceCreateRequest extends Message<SalesReceiptsServiceCreateRequest> {
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
   * The reference ID of the sales receipt
   *
   * @generated from field: string reference_id = 10;
   */
  referenceId = "";

  /**
   * The reference on which the sales receipt has been created
   *
   * @generated from field: string ref_from = 12;
   */
  refFrom = "";

  /**
   * The ID of the associated reference
   *
   * @generated from field: int64 ref_id = 13;
   */
  refId = protoInt64.zero;

  /**
   * The ID of the associated bank account
   *
   * @generated from field: int64 bank_account_id = 15;
   */
  bankAccountId = protoInt64.zero;

  /**
   * The ID of the associated currency
   *
   * @generated from field: int64 currency_id = 16;
   */
  currencyId = protoInt64.zero;

  /**
   * The type of the transaction
   *
   * @generated from field: string transaction_type = 17;
   */
  transactionType = "";

  /**
   * The initial amount in cents, without any deductions
   *
   * @generated from field: int64 amount_base = 18;
   */
  amountBase = protoInt64.zero;

  /**
   * The final amount in cents, after all the deductions
   *
   * @generated from field: int64 amount_net = 19;
   */
  amountNet = protoInt64.zero;

  /**
   * The date & time of when the payment needs to be made
   *
   * @generated from field: int64 payment_timestamp = 20;
   */
  paymentTimestamp = protoInt64.zero;

  /**
   * The description of the sales receipt
   *
   * @generated from field: string description = 21;
   */
  description = "";

  constructor(data?: PartialMessage<SalesReceiptsServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SalesReceiptsServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "ref_from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "ref_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "bank_account_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "currency_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 17, name: "transaction_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "amount_base", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 19, name: "amount_net", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "payment_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 21, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceCreateRequest {
    return new SalesReceiptsServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceCreateRequest {
    return new SalesReceiptsServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceCreateRequest {
    return new SalesReceiptsServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SalesReceiptsServiceCreateRequest | PlainMessage<SalesReceiptsServiceCreateRequest> | undefined, b: SalesReceiptsServiceCreateRequest | PlainMessage<SalesReceiptsServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(SalesReceiptsServiceCreateRequest, a, b);
  }
}

/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.SalesReceiptsServiceUpdateRequest
 */
export class SalesReceiptsServiceUpdateRequest extends Message<SalesReceiptsServiceUpdateRequest> {
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
   * The reference ID of the sales receipt
   *
   * @generated from field: string reference_id = 10;
   */
  referenceId = "";

  /**
   * The ID of the associated bank account
   *
   * @generated from field: int64 bank_account_id = 15;
   */
  bankAccountId = protoInt64.zero;

  /**
   * The ID of the associated currency
   *
   * @generated from field: int64 currency_id = 16;
   */
  currencyId = protoInt64.zero;

  /**
   * The type of the transaction
   *
   * @generated from field: string transaction_type = 17;
   */
  transactionType = "";

  /**
   * The initial amount in cents, without any deductions
   *
   * @generated from field: int64 amount_base = 18;
   */
  amountBase = protoInt64.zero;

  /**
   * The final amount in cents, after all the deductions
   *
   * @generated from field: int64 amount_net = 19;
   */
  amountNet = protoInt64.zero;

  /**
   * The date & time of when the payment needs to be made
   *
   * @generated from field: int64 payment_timestamp = 20;
   */
  paymentTimestamp = protoInt64.zero;

  /**
   * The description of the sales receipt
   *
   * @generated from field: string description = 21;
   */
  description = "";

  constructor(data?: PartialMessage<SalesReceiptsServiceUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SalesReceiptsServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "bank_account_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "currency_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 17, name: "transaction_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "amount_base", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 19, name: "amount_net", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "payment_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 21, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceUpdateRequest {
    return new SalesReceiptsServiceUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceUpdateRequest {
    return new SalesReceiptsServiceUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceUpdateRequest {
    return new SalesReceiptsServiceUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SalesReceiptsServiceUpdateRequest | PlainMessage<SalesReceiptsServiceUpdateRequest> | undefined, b: SalesReceiptsServiceUpdateRequest | PlainMessage<SalesReceiptsServiceUpdateRequest> | undefined): boolean {
    return proto3.util.equals(SalesReceiptsServiceUpdateRequest, a, b);
  }
}

/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.SaleReceipt
 */
export class SaleReceipt extends Message<SaleReceipt> {
  /**
   * Stores a globally unique entity UUID. This will be set at the organization level
   *
   * @generated from field: string entity_uuid = 1;
   */
  entityUuid = "";

  /**
   * Stores the metadata of this sales receipt
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
   * The status of this sales receipt
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  /**
   * Stores the logs of every operation performed on this sales receipt
   *
   * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
   */
  logs: LogbookLogConciseSLC[] = [];

  /**
   * The timestamp of when this sales receipt was marked as completed
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
   * The reference ID of the sales receipt
   *
   * @generated from field: string reference_id = 10;
   */
  referenceId = "";

  /**
   * The unique reference number that has been automatically generated
   *
   * @generated from field: string final_ref_number = 11;
   */
  finalRefNumber = "";

  /**
   * The reference on which the sales receipt has been created
   *
   * @generated from field: string ref_from = 12;
   */
  refFrom = "";

  /**
   * The ID of the associated reference
   *
   * @generated from field: int64 ref_id = 13;
   */
  refId = protoInt64.zero;

  /**
   * The ID of the associated client
   *
   * @generated from field: int64 client_id = 14;
   */
  clientId = protoInt64.zero;

  /**
   * The ID of the associated bank account
   *
   * @generated from field: int64 bank_account_id = 15;
   */
  bankAccountId = protoInt64.zero;

  /**
   * The ID of the associated currency
   *
   * @generated from field: int64 currency_id = 16;
   */
  currencyId = protoInt64.zero;

  /**
   * The type of the transaction
   *
   * @generated from field: string transaction_type = 17;
   */
  transactionType = "";

  /**
   * The initial amount in cents, without any deductions
   *
   * @generated from field: int64 amount_base = 18;
   */
  amountBase = protoInt64.zero;

  /**
   * The final amount in cents, after all the deductions
   *
   * @generated from field: int64 amount_net = 19;
   */
  amountNet = protoInt64.zero;

  /**
   * The date & time of when the payment needs to be made
   *
   * @generated from field: int64 payment_timestamp = 20;
   */
  paymentTimestamp = protoInt64.zero;

  /**
   * The description of the sales receipt
   *
   * @generated from field: string description = 21;
   */
  description = "";

  constructor(data?: PartialMessage<SaleReceipt>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SaleReceipt";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: EmployeeMetadata },
    { no: 3, name: "approval_metadata", kind: "message", T: ApprovalMetadata },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
    { no: 5, name: "logs", kind: "message", T: LogbookLogConciseSLC, repeated: true },
    { no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "ref_from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "ref_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "bank_account_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "currency_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 17, name: "transaction_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "amount_base", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 19, name: "amount_net", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "payment_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 21, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SaleReceipt {
    return new SaleReceipt().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SaleReceipt {
    return new SaleReceipt().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SaleReceipt {
    return new SaleReceipt().fromJsonString(jsonString, options);
  }

  static equals(a: SaleReceipt | PlainMessage<SaleReceipt> | undefined, b: SaleReceipt | PlainMessage<SaleReceipt> | undefined): boolean {
    return proto3.util.equals(SaleReceipt, a, b);
  }
}

/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.SalesReceiptsList
 */
export class SalesReceiptsList extends Message<SalesReceiptsList> {
  /**
   * List of records
   *
   * @generated from field: repeated Genesis.SaleReceipt list = 1;
   */
  list: SaleReceipt[] = [];

  constructor(data?: PartialMessage<SalesReceiptsList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SalesReceiptsList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: SaleReceipt, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsList {
    return new SalesReceiptsList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsList {
    return new SalesReceiptsList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsList {
    return new SalesReceiptsList().fromJsonString(jsonString, options);
  }

  static equals(a: SalesReceiptsList | PlainMessage<SalesReceiptsList> | undefined, b: SalesReceiptsList | PlainMessage<SalesReceiptsList> | undefined): boolean {
    return proto3.util.equals(SalesReceiptsList, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.SalesReceiptsServicePaginationReq
 */
export class SalesReceiptsServicePaginationReq extends Message<SalesReceiptsServicePaginationReq> {
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
   * @generated from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;
   */
  sortKey = SALE_RECEIPT_SORT_KEY.SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The status of this sales receipt
   *
   * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
   */
  status = STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;

  constructor(data?: PartialMessage<SalesReceiptsServicePaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SalesReceiptsServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SALE_RECEIPT_SORT_KEY) },
    { no: 6, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServicePaginationReq {
    return new SalesReceiptsServicePaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationReq {
    return new SalesReceiptsServicePaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationReq {
    return new SalesReceiptsServicePaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: SalesReceiptsServicePaginationReq | PlainMessage<SalesReceiptsServicePaginationReq> | undefined, b: SalesReceiptsServicePaginationReq | PlainMessage<SalesReceiptsServicePaginationReq> | undefined): boolean {
    return proto3.util.equals(SalesReceiptsServicePaginationReq, a, b);
  }
}

/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.SalesReceiptsServicePaginationResponse
 */
export class SalesReceiptsServicePaginationResponse extends Message<SalesReceiptsServicePaginationResponse> {
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
   * @generated from field: repeated Genesis.SaleReceipt payload = 4;
   */
  payload: SaleReceipt[] = [];

  constructor(data?: PartialMessage<SalesReceiptsServicePaginationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SalesReceiptsServicePaginationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "payload", kind: "message", T: SaleReceipt, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServicePaginationResponse {
    return new SalesReceiptsServicePaginationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationResponse {
    return new SalesReceiptsServicePaginationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationResponse {
    return new SalesReceiptsServicePaginationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SalesReceiptsServicePaginationResponse | PlainMessage<SalesReceiptsServicePaginationResponse> | undefined, b: SalesReceiptsServicePaginationResponse | PlainMessage<SalesReceiptsServicePaginationResponse> | undefined): boolean {
    return proto3.util.equals(SalesReceiptsServicePaginationResponse, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.SalesReceiptsServiceEntityPaginationReq
 */
export class SalesReceiptsServiceEntityPaginationReq extends Message<SalesReceiptsServiceEntityPaginationReq> {
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
   * @generated from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;
   */
  sortKey = SALE_RECEIPT_SORT_KEY.SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The entity UUID that is to be used to filter records
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<SalesReceiptsServiceEntityPaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SalesReceiptsServiceEntityPaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SALE_RECEIPT_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceEntityPaginationReq {
    return new SalesReceiptsServiceEntityPaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceEntityPaginationReq {
    return new SalesReceiptsServiceEntityPaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceEntityPaginationReq {
    return new SalesReceiptsServiceEntityPaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: SalesReceiptsServiceEntityPaginationReq | PlainMessage<SalesReceiptsServiceEntityPaginationReq> | undefined, b: SalesReceiptsServiceEntityPaginationReq | PlainMessage<SalesReceiptsServiceEntityPaginationReq> | undefined): boolean {
    return proto3.util.equals(SalesReceiptsServiceEntityPaginationReq, a, b);
  }
}

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.SalesReceiptsServiceFilterReq
 */
export class SalesReceiptsServiceFilterReq extends Message<SalesReceiptsServiceFilterReq> {
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
   * @generated from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;
   */
  sortKey = SALE_RECEIPT_SORT_KEY.SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED;

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
   * The status of this sales receipt
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
   * The reference_id of the sales receipt
   *
   * @generated from field: string reference_id = 20;
   */
  referenceId = "";

  /**
   * The unique reference number that has been automatically generated
   *
   * @generated from field: string final_ref_number = 21;
   */
  finalRefNumber = "";

  /**
   * The reference on which the sales receipt has been created
   *
   * @generated from field: string ref_from = 22;
   */
  refFrom = "";

  /**
   * The ID of the associated reference
   *
   * @generated from field: int64 ref_id = 23;
   */
  refId = protoInt64.zero;

  /**
   * The ID of the associated client
   *
   * @generated from field: int64 client_id = 24;
   */
  clientId = protoInt64.zero;

  /**
   * The ID of the associated bank account
   *
   * @generated from field: int64 bank_account_id = 25;
   */
  bankAccountId = protoInt64.zero;

  /**
   * The ID of the associated currency
   *
   * @generated from field: int64 currency_id = 26;
   */
  currencyId = protoInt64.zero;

  /**
   * The type of the transaction
   *
   * @generated from field: string transaction_type = 27;
   */
  transactionType = "";

  /**
   * The start range of the payment timestamp
   *
   * @generated from field: int64 payment_timestamp_start = 28;
   */
  paymentTimestampStart = protoInt64.zero;

  /**
   * The end range of the payment timestamp
   *
   * @generated from field: int64 payment_timestamp_end = 29;
   */
  paymentTimestampEnd = protoInt64.zero;

  constructor(data?: PartialMessage<SalesReceiptsServiceFilterReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SalesReceiptsServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SALE_RECEIPT_SORT_KEY) },
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
    { no: 20, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "ref_from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 23, name: "ref_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 24, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 25, name: "bank_account_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 26, name: "currency_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 27, name: "transaction_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 28, name: "payment_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 29, name: "payment_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceFilterReq {
    return new SalesReceiptsServiceFilterReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceFilterReq {
    return new SalesReceiptsServiceFilterReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceFilterReq {
    return new SalesReceiptsServiceFilterReq().fromJsonString(jsonString, options);
  }

  static equals(a: SalesReceiptsServiceFilterReq | PlainMessage<SalesReceiptsServiceFilterReq> | undefined, b: SalesReceiptsServiceFilterReq | PlainMessage<SalesReceiptsServiceFilterReq> | undefined): boolean {
    return proto3.util.equals(SalesReceiptsServiceFilterReq, a, b);
  }
}

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.SalesReceiptsServiceSearchAllReq
 */
export class SalesReceiptsServiceSearchAllReq extends Message<SalesReceiptsServiceSearchAllReq> {
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
   * @generated from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;
   */
  sortKey = SALE_RECEIPT_SORT_KEY.SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED;

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

  constructor(data?: PartialMessage<SalesReceiptsServiceSearchAllReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Genesis.SalesReceiptsServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SALE_RECEIPT_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: proto3.getEnumType(STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceSearchAllReq {
    return new SalesReceiptsServiceSearchAllReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceSearchAllReq {
    return new SalesReceiptsServiceSearchAllReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceSearchAllReq {
    return new SalesReceiptsServiceSearchAllReq().fromJsonString(jsonString, options);
  }

  static equals(a: SalesReceiptsServiceSearchAllReq | PlainMessage<SalesReceiptsServiceSearchAllReq> | undefined, b: SalesReceiptsServiceSearchAllReq | PlainMessage<SalesReceiptsServiceSearchAllReq> | undefined): boolean {
    return proto3.util.equals(SalesReceiptsServiceSearchAllReq, a, b);
  }
}

