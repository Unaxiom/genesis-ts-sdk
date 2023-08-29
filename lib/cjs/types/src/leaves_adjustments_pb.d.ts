import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.LEAVE_ADJUSTMENT_SORT_KEY
 */
export declare enum LEAVE_ADJUSTMENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT = 1;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON = 3;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY = 4;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID = 10;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_USER_ID = 12;
     */
    LEAVE_ADJUSTMENT_SORT_KEY_USER_ID = 12
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceCreateRequest
 */
export declare class LeavesAdjustmentsServiceCreateRequest extends Message<LeavesAdjustmentsServiceCreateRequest> {
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
     * The reference ID of the leave adjustment
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the user for whom this adjustment needs to be made
     *
     * @generated from field: int64 user_id = 11;
     */
    userId: bigint;
    /**
     * The description of the leave adjustment
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<LeavesAdjustmentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceCreateRequest;
    static equals(a: LeavesAdjustmentsServiceCreateRequest | PlainMessage<LeavesAdjustmentsServiceCreateRequest> | undefined, b: LeavesAdjustmentsServiceCreateRequest | PlainMessage<LeavesAdjustmentsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceUpdateRequest
 */
export declare class LeavesAdjustmentsServiceUpdateRequest extends Message<LeavesAdjustmentsServiceUpdateRequest> {
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
     * The reference ID of the leave adjustment
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The description of the leave adjustment
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<LeavesAdjustmentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceUpdateRequest;
    static equals(a: LeavesAdjustmentsServiceUpdateRequest | PlainMessage<LeavesAdjustmentsServiceUpdateRequest> | undefined, b: LeavesAdjustmentsServiceUpdateRequest | PlainMessage<LeavesAdjustmentsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.LeaveAdjustment
 */
export declare class LeaveAdjustment extends Message<LeaveAdjustment> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this record
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
     * The status of this record
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this record
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this record was marked as completed
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
     * The reference_id of the leave adjustment
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
     * The ID of the user for whom this adjustment needs to be made
     *
     * @generated from field: int64 user_id = 12;
     */
    userId: bigint;
    /**
     * The description of the leave adjustment
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated leave adjustment records
     *
     * @generated from field: repeated Genesis.LeaveAdjustmentRecord list = 20;
     */
    list: LeaveAdjustmentRecord[];
    constructor(data?: PartialMessage<LeaveAdjustment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeaveAdjustment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveAdjustment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveAdjustment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveAdjustment;
    static equals(a: LeaveAdjustment | PlainMessage<LeaveAdjustment> | undefined, b: LeaveAdjustment | PlainMessage<LeaveAdjustment> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceRecordCreateRequest
 */
export declare class LeavesAdjustmentsServiceRecordCreateRequest extends Message<LeavesAdjustmentsServiceRecordCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the leave adjustment ID
     *
     * @generated from field: int64 leave_adjustment_id = 10;
     */
    leaveAdjustmentId: bigint;
    /**
     * Stores the leave type ID
     *
     * @generated from field: int64 leave_type_id = 11;
     */
    leaveTypeId: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 12;
     */
    uomId: bigint;
    /**
     * Stores the quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<LeavesAdjustmentsServiceRecordCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServiceRecordCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServiceRecordCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceRecordCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceRecordCreateRequest;
    static equals(a: LeavesAdjustmentsServiceRecordCreateRequest | PlainMessage<LeavesAdjustmentsServiceRecordCreateRequest> | undefined, b: LeavesAdjustmentsServiceRecordCreateRequest | PlainMessage<LeavesAdjustmentsServiceRecordCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceRecordUpdateRequest
 */
export declare class LeavesAdjustmentsServiceRecordUpdateRequest extends Message<LeavesAdjustmentsServiceRecordUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record
     *
     * @generated from field: int64 id = 2;
     */
    id: bigint;
    /**
     * Stores the leave adjustment ID
     *
     * @generated from field: int64 leave_adjustment_id = 10;
     */
    leaveAdjustmentId: bigint;
    /**
     * Stores the leave type ID
     *
     * @generated from field: int64 leave_type_id = 11;
     */
    leaveTypeId: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 12;
     */
    uomId: bigint;
    /**
     * Stores the quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<LeavesAdjustmentsServiceRecordUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServiceRecordUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServiceRecordUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceRecordUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceRecordUpdateRequest;
    static equals(a: LeavesAdjustmentsServiceRecordUpdateRequest | PlainMessage<LeavesAdjustmentsServiceRecordUpdateRequest> | undefined, b: LeavesAdjustmentsServiceRecordUpdateRequest | PlainMessage<LeavesAdjustmentsServiceRecordUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a record associated to a record
 *
 * @generated from message Genesis.LeaveAdjustmentRecord
 */
export declare class LeaveAdjustmentRecord extends Message<LeaveAdjustmentRecord> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this record
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
     * Denotes if this record requires approval (or has been approved)
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval: boolean;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the leave adjustment ID
     *
     * @generated from field: int64 leave_adjustment_id = 10;
     */
    leaveAdjustmentId: bigint;
    /**
     * Stores the leave type ID
     *
     * @generated from field: int64 leave_type_id = 11;
     */
    leaveTypeId: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 12;
     */
    uomId: bigint;
    /**
     * Stores the quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<LeaveAdjustmentRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeaveAdjustmentRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveAdjustmentRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveAdjustmentRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveAdjustmentRecord;
    static equals(a: LeaveAdjustmentRecord | PlainMessage<LeaveAdjustmentRecord> | undefined, b: LeaveAdjustmentRecord | PlainMessage<LeaveAdjustmentRecord> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.LeavesAdjustmentsList
 */
export declare class LeavesAdjustmentsList extends Message<LeavesAdjustmentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.LeaveAdjustment list = 1;
     */
    list: LeaveAdjustment[];
    constructor(data?: PartialMessage<LeavesAdjustmentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsList;
    static equals(a: LeavesAdjustmentsList | PlainMessage<LeavesAdjustmentsList> | undefined, b: LeavesAdjustmentsList | PlainMessage<LeavesAdjustmentsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of leave adjustment records
 *
 * @generated from message Genesis.LeavesAdjustmentsRecordsList
 */
export declare class LeavesAdjustmentsRecordsList extends Message<LeavesAdjustmentsRecordsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.LeaveAdjustmentRecord list = 1;
     */
    list: LeaveAdjustmentRecord[];
    constructor(data?: PartialMessage<LeavesAdjustmentsRecordsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsRecordsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsRecordsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsRecordsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsRecordsList;
    static equals(a: LeavesAdjustmentsRecordsList | PlainMessage<LeavesAdjustmentsRecordsList> | undefined, b: LeavesAdjustmentsRecordsList | PlainMessage<LeavesAdjustmentsRecordsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.LeavesAdjustmentsRecordsHistoryRequest
 */
export declare class LeavesAdjustmentsRecordsHistoryRequest extends Message<LeavesAdjustmentsRecordsHistoryRequest> {
    /**
     * Stores the leave adjustment ID
     *
     * @generated from field: int64 leave_adjustment_id = 10;
     */
    leaveAdjustmentId: bigint;
    /**
     * Stores the leave type ID
     *
     * @generated from field: int64 leave_type_id = 11;
     */
    leaveTypeId: bigint;
    constructor(data?: PartialMessage<LeavesAdjustmentsRecordsHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsRecordsHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsRecordsHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsRecordsHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsRecordsHistoryRequest;
    static equals(a: LeavesAdjustmentsRecordsHistoryRequest | PlainMessage<LeavesAdjustmentsRecordsHistoryRequest> | undefined, b: LeavesAdjustmentsRecordsHistoryRequest | PlainMessage<LeavesAdjustmentsRecordsHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.LeavesAdjustmentsServicePaginationReq
 */
export declare class LeavesAdjustmentsServicePaginationReq extends Message<LeavesAdjustmentsServicePaginationReq> {
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
     * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_ADJUSTMENT_SORT_KEY;
    /**
     * The status of this record
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<LeavesAdjustmentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServicePaginationReq;
    static equals(a: LeavesAdjustmentsServicePaginationReq | PlainMessage<LeavesAdjustmentsServicePaginationReq> | undefined, b: LeavesAdjustmentsServicePaginationReq | PlainMessage<LeavesAdjustmentsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.LeavesAdjustmentsServicePaginationResponse
 */
export declare class LeavesAdjustmentsServicePaginationResponse extends Message<LeavesAdjustmentsServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.LeaveAdjustment payload = 4;
     */
    payload: LeaveAdjustment[];
    constructor(data?: PartialMessage<LeavesAdjustmentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServicePaginationResponse;
    static equals(a: LeavesAdjustmentsServicePaginationResponse | PlainMessage<LeavesAdjustmentsServicePaginationResponse> | undefined, b: LeavesAdjustmentsServicePaginationResponse | PlainMessage<LeavesAdjustmentsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceEntityPaginationReq
 */
export declare class LeavesAdjustmentsServiceEntityPaginationReq extends Message<LeavesAdjustmentsServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_ADJUSTMENT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<LeavesAdjustmentsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceEntityPaginationReq;
    static equals(a: LeavesAdjustmentsServiceEntityPaginationReq | PlainMessage<LeavesAdjustmentsServiceEntityPaginationReq> | undefined, b: LeavesAdjustmentsServiceEntityPaginationReq | PlainMessage<LeavesAdjustmentsServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceFilterReq
 */
export declare class LeavesAdjustmentsServiceFilterReq extends Message<LeavesAdjustmentsServiceFilterReq> {
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
     * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_ADJUSTMENT_SORT_KEY;
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
     * The status of this record
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
     * The reference_id of the leave adjustment
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
     * The ID of the user for whom this adjustment needs to be made
     *
     * @generated from field: int64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<LeavesAdjustmentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceFilterReq;
    static equals(a: LeavesAdjustmentsServiceFilterReq | PlainMessage<LeavesAdjustmentsServiceFilterReq> | undefined, b: LeavesAdjustmentsServiceFilterReq | PlainMessage<LeavesAdjustmentsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceSearchAllReq
 */
export declare class LeavesAdjustmentsServiceSearchAllReq extends Message<LeavesAdjustmentsServiceSearchAllReq> {
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
     * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_ADJUSTMENT_SORT_KEY;
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
    constructor(data?: PartialMessage<LeavesAdjustmentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesAdjustmentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesAdjustmentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesAdjustmentsServiceSearchAllReq;
    static equals(a: LeavesAdjustmentsServiceSearchAllReq | PlainMessage<LeavesAdjustmentsServiceSearchAllReq> | undefined, b: LeavesAdjustmentsServiceSearchAllReq | PlainMessage<LeavesAdjustmentsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=leaves_adjustments_pb.d.ts.map