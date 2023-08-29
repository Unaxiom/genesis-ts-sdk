import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.LEAVE_TYPE_SORT_KEY
 */
export declare enum LEAVE_TYPE_SORT_KEY ***REMOVED***
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
    LEAVE_TYPE_SORT_KEY_CODE = 11
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.LeavesTypesServiceCreateRequest
 */
export declare class LeavesTypesServiceCreateRequest extends Message<LeavesTypesServiceCreateRequest> ***REMOVED***
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
     * The name of the leave type
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the leave type
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The percentage of the applicable payroll on use of this leave type (in cents)
     *
     * @generated from field: int64 payroll_percentage = 13;
     */
    payrollPercentage: bigint;
    constructor(data?: PartialMessage<LeavesTypesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesTypesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceCreateRequest;
    static equals(a: LeavesTypesServiceCreateRequest | PlainMessage<LeavesTypesServiceCreateRequest> | undefined, b: LeavesTypesServiceCreateRequest | PlainMessage<LeavesTypesServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.LeavesTypesServiceUpdateRequest
 */
export declare class LeavesTypesServiceUpdateRequest extends Message<LeavesTypesServiceUpdateRequest> ***REMOVED***
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
     * The name of the leave type
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the leave type
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The percentage of the applicable payroll on use of this leave type (in cents)
     *
     * @generated from field: int64 payroll_percentage = 13;
     */
    payrollPercentage: bigint;
    constructor(data?: PartialMessage<LeavesTypesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesTypesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceUpdateRequest;
    static equals(a: LeavesTypesServiceUpdateRequest | PlainMessage<LeavesTypesServiceUpdateRequest> | undefined, b: LeavesTypesServiceUpdateRequest | PlainMessage<LeavesTypesServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.LeaveType
 */
export declare class LeaveType extends Message<LeaveType> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
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
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this leave type
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this leave type was marked as completed
     *
     * @generated from field: int64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The name of the leave type
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the leave type
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The percentage of the applicable payroll on use of this leave type (in cents)
     *
     * @generated from field: int64 payroll_percentage = 13;
     */
    payrollPercentage: bigint;
    constructor(data?: PartialMessage<LeaveType>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeaveType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveType;
    static equals(a: LeaveType | PlainMessage<LeaveType> | undefined, b: LeaveType | PlainMessage<LeaveType> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.LeavesTypesList
 */
export declare class LeavesTypesList extends Message<LeavesTypesList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.LeaveType list = 1;
     */
    list: LeaveType[];
    constructor(data?: PartialMessage<LeavesTypesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesTypesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesList;
    static equals(a: LeavesTypesList | PlainMessage<LeavesTypesList> | undefined, b: LeavesTypesList | PlainMessage<LeavesTypesList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.LeavesTypesServicePaginationReq
 */
export declare class LeavesTypesServicePaginationReq extends Message<LeavesTypesServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_TYPE_SORT_KEY;
    /**
     * The status of this leave type
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<LeavesTypesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesTypesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationReq;
    static equals(a: LeavesTypesServicePaginationReq | PlainMessage<LeavesTypesServicePaginationReq> | undefined, b: LeavesTypesServicePaginationReq | PlainMessage<LeavesTypesServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.LeavesTypesServicePaginationResponse
 */
export declare class LeavesTypesServicePaginationResponse extends Message<LeavesTypesServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.LeaveType payload = 4;
     */
    payload: LeaveType[];
    constructor(data?: PartialMessage<LeavesTypesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesTypesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationResponse;
    static equals(a: LeavesTypesServicePaginationResponse | PlainMessage<LeavesTypesServicePaginationResponse> | undefined, b: LeavesTypesServicePaginationResponse | PlainMessage<LeavesTypesServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.LeavesTypesServiceEntityPaginationReq
 */
export declare class LeavesTypesServiceEntityPaginationReq extends Message<LeavesTypesServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_TYPE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<LeavesTypesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesTypesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceEntityPaginationReq;
    static equals(a: LeavesTypesServiceEntityPaginationReq | PlainMessage<LeavesTypesServiceEntityPaginationReq> | undefined, b: LeavesTypesServiceEntityPaginationReq | PlainMessage<LeavesTypesServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.LeavesTypesServiceFilterReq
 */
export declare class LeavesTypesServiceFilterReq extends Message<LeavesTypesServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_TYPE_SORT_KEY;
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
     * The status of this leave type
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
     * The name of the leave type
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<LeavesTypesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesTypesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceFilterReq;
    static equals(a: LeavesTypesServiceFilterReq | PlainMessage<LeavesTypesServiceFilterReq> | undefined, b: LeavesTypesServiceFilterReq | PlainMessage<LeavesTypesServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.LeavesTypesServiceSearchAllReq
 */
export declare class LeavesTypesServiceSearchAllReq extends Message<LeavesTypesServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_TYPE_SORT_KEY;
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
    constructor(data?: PartialMessage<LeavesTypesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LeavesTypesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceSearchAllReq;
    static equals(a: LeavesTypesServiceSearchAllReq | PlainMessage<LeavesTypesServiceSearchAllReq> | undefined, b: LeavesTypesServiceSearchAllReq | PlainMessage<LeavesTypesServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=leaves_types_pb.d.ts.map