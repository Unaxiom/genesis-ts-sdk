import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SALE_RECEIPT_SORT_KEY
 */
export declare enum SALE_RECEIPT_SORT_KEY {
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
    SALE_RECEIPT_SORT_KEY_PAYMENT_TIMESTAMP = 12
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.SalesReceiptsServiceCreateRequest
 */
export declare class SalesReceiptsServiceCreateRequest extends Message<SalesReceiptsServiceCreateRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the sales receipt
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The reference on which the sales receipt has been created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The ID of the associated reference
     *
     * @generated from field: int64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the associated bank account
     *
     * @generated from field: int64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: int64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: string transaction_type = 17;
     */
    transactionType: string;
    /**
     * The initial amount in cents, without any deductions
     *
     * @generated from field: int64 amount_base = 18;
     */
    amountBase: bigint;
    /**
     * The final amount in cents, after all the deductions
     *
     * @generated from field: int64 amount_net = 19;
     */
    amountNet: bigint;
    /**
     * The date & time of when the payment needs to be made
     *
     * @generated from field: int64 payment_timestamp = 20;
     */
    paymentTimestamp: bigint;
    /**
     * The description of the sales receipt
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<SalesReceiptsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReceiptsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceCreateRequest;
    static equals(a: SalesReceiptsServiceCreateRequest | PlainMessage<SalesReceiptsServiceCreateRequest> | undefined, b: SalesReceiptsServiceCreateRequest | PlainMessage<SalesReceiptsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.SalesReceiptsServiceUpdateRequest
 */
export declare class SalesReceiptsServiceUpdateRequest extends Message<SalesReceiptsServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record that needs to be updated
     *
     * @generated from field: int64 id = 2;
     */
    id: bigint;
    /**
     * Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the sales receipt
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the associated bank account
     *
     * @generated from field: int64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: int64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: string transaction_type = 17;
     */
    transactionType: string;
    /**
     * The initial amount in cents, without any deductions
     *
     * @generated from field: int64 amount_base = 18;
     */
    amountBase: bigint;
    /**
     * The final amount in cents, after all the deductions
     *
     * @generated from field: int64 amount_net = 19;
     */
    amountNet: bigint;
    /**
     * The date & time of when the payment needs to be made
     *
     * @generated from field: int64 payment_timestamp = 20;
     */
    paymentTimestamp: bigint;
    /**
     * The description of the sales receipt
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<SalesReceiptsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReceiptsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceUpdateRequest;
    static equals(a: SalesReceiptsServiceUpdateRequest | PlainMessage<SalesReceiptsServiceUpdateRequest> | undefined, b: SalesReceiptsServiceUpdateRequest | PlainMessage<SalesReceiptsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.SaleReceipt
 */
export declare class SaleReceipt extends Message<SaleReceipt> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
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
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this sales receipt
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this sales receipt was marked as completed
     *
     * @generated from field: int64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the sales receipt
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     * The reference on which the sales receipt has been created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The ID of the associated reference
     *
     * @generated from field: int64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the associated client
     *
     * @generated from field: int64 client_id = 14;
     */
    clientId: bigint;
    /**
     * The ID of the associated bank account
     *
     * @generated from field: int64 bank_account_id = 15;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: int64 currency_id = 16;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: string transaction_type = 17;
     */
    transactionType: string;
    /**
     * The initial amount in cents, without any deductions
     *
     * @generated from field: int64 amount_base = 18;
     */
    amountBase: bigint;
    /**
     * The final amount in cents, after all the deductions
     *
     * @generated from field: int64 amount_net = 19;
     */
    amountNet: bigint;
    /**
     * The date & time of when the payment needs to be made
     *
     * @generated from field: int64 payment_timestamp = 20;
     */
    paymentTimestamp: bigint;
    /**
     * The description of the sales receipt
     *
     * @generated from field: string description = 21;
     */
    description: string;
    constructor(data?: PartialMessage<SaleReceipt>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SaleReceipt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SaleReceipt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SaleReceipt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SaleReceipt;
    static equals(a: SaleReceipt | PlainMessage<SaleReceipt> | undefined, b: SaleReceipt | PlainMessage<SaleReceipt> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.SalesReceiptsList
 */
export declare class SalesReceiptsList extends Message<SalesReceiptsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.SaleReceipt list = 1;
     */
    list: SaleReceipt[];
    constructor(data?: PartialMessage<SalesReceiptsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReceiptsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsList;
    static equals(a: SalesReceiptsList | PlainMessage<SalesReceiptsList> | undefined, b: SalesReceiptsList | PlainMessage<SalesReceiptsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.SalesReceiptsServicePaginationReq
 */
export declare class SalesReceiptsServicePaginationReq extends Message<SalesReceiptsServicePaginationReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: SALE_RECEIPT_SORT_KEY;
    /**
     * The status of this sales receipt
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesReceiptsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReceiptsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationReq;
    static equals(a: SalesReceiptsServicePaginationReq | PlainMessage<SalesReceiptsServicePaginationReq> | undefined, b: SalesReceiptsServicePaginationReq | PlainMessage<SalesReceiptsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.SalesReceiptsServicePaginationResponse
 */
export declare class SalesReceiptsServicePaginationResponse extends Message<SalesReceiptsServicePaginationResponse> {
    /**
     * The number of records in this payload
     *
     * @generated from field: int64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: int64 offset = 2;
     */
    offset: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: int64 total = 3;
     */
    total: bigint;
    /**
     * The list of records
     *
     * @generated from field: repeated Genesis.SaleReceipt payload = 4;
     */
    payload: SaleReceipt[];
    constructor(data?: PartialMessage<SalesReceiptsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReceiptsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServicePaginationResponse;
    static equals(a: SalesReceiptsServicePaginationResponse | PlainMessage<SalesReceiptsServicePaginationResponse> | undefined, b: SalesReceiptsServicePaginationResponse | PlainMessage<SalesReceiptsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.SalesReceiptsServiceEntityPaginationReq
 */
export declare class SalesReceiptsServiceEntityPaginationReq extends Message<SalesReceiptsServiceEntityPaginationReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: SALE_RECEIPT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<SalesReceiptsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReceiptsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceEntityPaginationReq;
    static equals(a: SalesReceiptsServiceEntityPaginationReq | PlainMessage<SalesReceiptsServiceEntityPaginationReq> | undefined, b: SalesReceiptsServiceEntityPaginationReq | PlainMessage<SalesReceiptsServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.SalesReceiptsServiceFilterReq
 */
export declare class SalesReceiptsServiceFilterReq extends Message<SalesReceiptsServiceFilterReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: SALE_RECEIPT_SORT_KEY;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: int64 creation_timestamp_start = 6;
     */
    creationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: int64 creation_timestamp_end = 7;
     */
    creationTimestampEnd: bigint;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The status of this sales receipt
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: int64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: int64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: int64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: int64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: int64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: int64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The reference_id of the sales receipt
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The reference on which the sales receipt has been created
     *
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The ID of the associated reference
     *
     * @generated from field: int64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the associated client
     *
     * @generated from field: int64 client_id = 24;
     */
    clientId: bigint;
    /**
     * The ID of the associated bank account
     *
     * @generated from field: int64 bank_account_id = 25;
     */
    bankAccountId: bigint;
    /**
     * The ID of the associated currency
     *
     * @generated from field: int64 currency_id = 26;
     */
    currencyId: bigint;
    /**
     * The type of the transaction
     *
     * @generated from field: string transaction_type = 27;
     */
    transactionType: string;
    /**
     * The start range of the payment timestamp
     *
     * @generated from field: int64 payment_timestamp_start = 28;
     */
    paymentTimestampStart: bigint;
    /**
     * The end range of the payment timestamp
     *
     * @generated from field: int64 payment_timestamp_end = 29;
     */
    paymentTimestampEnd: bigint;
    constructor(data?: PartialMessage<SalesReceiptsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReceiptsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceFilterReq;
    static equals(a: SalesReceiptsServiceFilterReq | PlainMessage<SalesReceiptsServiceFilterReq> | undefined, b: SalesReceiptsServiceFilterReq | PlainMessage<SalesReceiptsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.SalesReceiptsServiceSearchAllReq
 */
export declare class SalesReceiptsServiceSearchAllReq extends Message<SalesReceiptsServiceSearchAllReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: SALE_RECEIPT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<SalesReceiptsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReceiptsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReceiptsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReceiptsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReceiptsServiceSearchAllReq;
    static equals(a: SalesReceiptsServiceSearchAllReq | PlainMessage<SalesReceiptsServiceSearchAllReq> | undefined, b: SalesReceiptsServiceSearchAllReq | PlainMessage<SalesReceiptsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=sales_receipts_pb.d.ts.map