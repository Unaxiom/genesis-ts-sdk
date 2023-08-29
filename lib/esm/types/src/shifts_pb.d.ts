import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SHIFT_SORT_KEY
 */
export declare enum SHIFT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SHIFT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SHIFT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_CREATED_AT = 1;
     */
    SHIFT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_MODIFIED_AT = 2;
     */
    SHIFT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVED_ON = 3;
     */
    SHIFT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVED_BY = 4;
     */
    SHIFT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SHIFT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_COMPLETED_ON = 6;
     */
    SHIFT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SHIFT_SORT_KEY_NAME = 10;
     */
    SHIFT_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: SHIFT_SORT_KEY_CODE = 11;
     */
    SHIFT_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the start at timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_START_AT = 12;
     */
    SHIFT_SORT_KEY_START_AT = 12,
    /**
     * Fetch ordered results by the end at timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_END_AT = 13;
     */
    SHIFT_SORT_KEY_END_AT = 13
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.ShiftsServiceCreateRequest
 */
export declare class ShiftsServiceCreateRequest extends Message<ShiftsServiceCreateRequest> {
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
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 start_at = 13;
     */
    startAt: bigint;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 end_at = 14;
     */
    endAt: bigint;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek: string;
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone: string;
    constructor(data?: PartialMessage<ShiftsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceCreateRequest;
    static equals(a: ShiftsServiceCreateRequest | PlainMessage<ShiftsServiceCreateRequest> | undefined, b: ShiftsServiceCreateRequest | PlainMessage<ShiftsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.ShiftsServiceUpdateRequest
 */
export declare class ShiftsServiceUpdateRequest extends Message<ShiftsServiceUpdateRequest> {
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
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 start_at = 13;
     */
    startAt: bigint;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 end_at = 14;
     */
    endAt: bigint;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek: string;
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone: string;
    constructor(data?: PartialMessage<ShiftsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceUpdateRequest;
    static equals(a: ShiftsServiceUpdateRequest | PlainMessage<ShiftsServiceUpdateRequest> | undefined, b: ShiftsServiceUpdateRequest | PlainMessage<ShiftsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Shift
 */
export declare class Shift extends Message<Shift> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this shift
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
     * The status of this shift
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this shift
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this shift was marked as completed
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
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 start_at = 13;
     */
    startAt: bigint;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 end_at = 14;
     */
    endAt: bigint;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek: string;
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone: string;
    constructor(data?: PartialMessage<Shift>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Shift";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Shift;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Shift;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Shift;
    static equals(a: Shift | PlainMessage<Shift> | undefined, b: Shift | PlainMessage<Shift> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.ShiftsList
 */
export declare class ShiftsList extends Message<ShiftsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.Shift list = 1;
     */
    list: Shift[];
    constructor(data?: PartialMessage<ShiftsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsList;
    static equals(a: ShiftsList | PlainMessage<ShiftsList> | undefined, b: ShiftsList | PlainMessage<ShiftsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.ShiftsServicePaginationReq
 */
export declare class ShiftsServicePaginationReq extends Message<ShiftsServicePaginationReq> {
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
     * @generated from field: Genesis.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_SORT_KEY;
    /**
     * The status of this shift
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ShiftsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServicePaginationReq;
    static equals(a: ShiftsServicePaginationReq | PlainMessage<ShiftsServicePaginationReq> | undefined, b: ShiftsServicePaginationReq | PlainMessage<ShiftsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.ShiftsServicePaginationResponse
 */
export declare class ShiftsServicePaginationResponse extends Message<ShiftsServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.Shift payload = 4;
     */
    payload: Shift[];
    constructor(data?: PartialMessage<ShiftsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServicePaginationResponse;
    static equals(a: ShiftsServicePaginationResponse | PlainMessage<ShiftsServicePaginationResponse> | undefined, b: ShiftsServicePaginationResponse | PlainMessage<ShiftsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.ShiftsServiceEntityPaginationReq
 */
export declare class ShiftsServiceEntityPaginationReq extends Message<ShiftsServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ShiftsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceEntityPaginationReq;
    static equals(a: ShiftsServiceEntityPaginationReq | PlainMessage<ShiftsServiceEntityPaginationReq> | undefined, b: ShiftsServiceEntityPaginationReq | PlainMessage<ShiftsServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.ShiftsServiceFilterReq
 */
export declare class ShiftsServiceFilterReq extends Message<ShiftsServiceFilterReq> {
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
     * @generated from field: Genesis.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_SORT_KEY;
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
     * The status of this shift
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
     * The name of the shift
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The shift code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<ShiftsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceFilterReq;
    static equals(a: ShiftsServiceFilterReq | PlainMessage<ShiftsServiceFilterReq> | undefined, b: ShiftsServiceFilterReq | PlainMessage<ShiftsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.ShiftsServiceSearchAllReq
 */
export declare class ShiftsServiceSearchAllReq extends Message<ShiftsServiceSearchAllReq> {
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
     * @generated from field: Genesis.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_SORT_KEY;
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
    constructor(data?: PartialMessage<ShiftsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsServiceSearchAllReq;
    static equals(a: ShiftsServiceSearchAllReq | PlainMessage<ShiftsServiceSearchAllReq> | undefined, b: ShiftsServiceSearchAllReq | PlainMessage<ShiftsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=shifts_pb.d.ts.map