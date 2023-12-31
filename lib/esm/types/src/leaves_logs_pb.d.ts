import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EmployeeMetadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.LEAVE_LOG_SORT_KEY
 */
export declare enum LEAVE_LOG_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEAVE_LOG_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_CREATED_AT = 1;
     */
    LEAVE_LOG_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_MODIFIED_AT = 2;
     */
    LEAVE_LOG_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_USER_ID = 10;
     */
    LEAVE_LOG_SORT_KEY_USER_ID = 10,
    /**
     * Fetch ordered results by the uom ID
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_UOM_ID = 11;
     */
    LEAVE_LOG_SORT_KEY_UOM_ID = 11,
    /**
     * Fetch ordered results by the leave type ID
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_LEAVE_TYPE_ID = 12;
     */
    LEAVE_LOG_SORT_KEY_LEAVE_TYPE_ID = 12,
    /**
     * Fetch ordered results by the quantity
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_QUANTITY = 13;
     */
    LEAVE_LOG_SORT_KEY_QUANTITY = 13,
    /**
     * Fetch ordered results by the reference from attribute
     *
     * @generated from enum value: LEAVE_LOG_SORT_KEY_REF_FROM = 14;
     */
    LEAVE_LOG_SORT_KEY_REF_FROM = 14
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.LeavesLogsServiceCreateRequest
 */
export declare class LeavesLogsServiceCreateRequest extends Message<LeavesLogsServiceCreateRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: int64 user_id = 10;
     */
    userId: bigint;
    /**
     * The ID of the uom
     *
     * @generated from field: int64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * The reference on the basis of which this record is created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The corresponding reference ID
     *
     * @generated from field: int64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: int64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    /**
     * The quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity = 15;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<LeavesLogsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesLogsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsServiceCreateRequest;
    static equals(a: LeavesLogsServiceCreateRequest | PlainMessage<LeavesLogsServiceCreateRequest> | undefined, b: LeavesLogsServiceCreateRequest | PlainMessage<LeavesLogsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.LeaveLog
 */
export declare class LeaveLog extends Message<LeaveLog> {
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
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: int64 user_id = 10;
     */
    userId: bigint;
    /**
     * The ID of the uom
     *
     * @generated from field: int64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * The reference on the basis of which this record is created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The corresponding reference ID
     *
     * @generated from field: int64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: int64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    /**
     * The quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity = 15;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<LeaveLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeaveLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveLog;
    static equals(a: LeaveLog | PlainMessage<LeaveLog> | undefined, b: LeaveLog | PlainMessage<LeaveLog> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to fetch the number of leaves available for an employee
 *
 * @generated from message Genesis.LeavesLogsCountEmployeeLeavesRequest
 */
export declare class LeavesLogsCountEmployeeLeavesRequest extends Message<LeavesLogsCountEmployeeLeavesRequest> {
    /**
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: int64 user_id = 10;
     */
    userId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: int64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    constructor(data?: PartialMessage<LeavesLogsCountEmployeeLeavesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesLogsCountEmployeeLeavesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsCountEmployeeLeavesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsCountEmployeeLeavesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsCountEmployeeLeavesRequest;
    static equals(a: LeavesLogsCountEmployeeLeavesRequest | PlainMessage<LeavesLogsCountEmployeeLeavesRequest> | undefined, b: LeavesLogsCountEmployeeLeavesRequest | PlainMessage<LeavesLogsCountEmployeeLeavesRequest> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.LeavesLogsList
 */
export declare class LeavesLogsList extends Message<LeavesLogsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.LeaveLog list = 1;
     */
    list: LeaveLog[];
    constructor(data?: PartialMessage<LeavesLogsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesLogsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsList;
    static equals(a: LeavesLogsList | PlainMessage<LeavesLogsList> | undefined, b: LeavesLogsList | PlainMessage<LeavesLogsList> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.LeavesLogsServiceFilterReq
 */
export declare class LeavesLogsServiceFilterReq extends Message<LeavesLogsServiceFilterReq> {
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
     * @generated from field: Genesis.LEAVE_LOG_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_LOG_SORT_KEY;
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
     * The ID of the user for whom this log needs to be made
     *
     * @generated from field: int64 user_id = 10;
     */
    userId: bigint;
    /**
     * The ID of the uom
     *
     * @generated from field: int64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * The reference on the basis of which this record is created
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The corresponding reference ID
     *
     * @generated from field: int64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The leave type ID
     *
     * @generated from field: int64 leave_type_id = 14;
     */
    leaveTypeId: bigint;
    /**
     * The minimum quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity_min = 15;
     */
    quantityMin: bigint;
    /**
     * The maximum quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity_max = 16;
     */
    quantityMax: bigint;
    constructor(data?: PartialMessage<LeavesLogsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesLogsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesLogsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesLogsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesLogsServiceFilterReq;
    static equals(a: LeavesLogsServiceFilterReq | PlainMessage<LeavesLogsServiceFilterReq> | undefined, b: LeavesLogsServiceFilterReq | PlainMessage<LeavesLogsServiceFilterReq> | undefined): boolean;
}
//# sourceMappingURL=leaves_logs_pb.d.ts.map