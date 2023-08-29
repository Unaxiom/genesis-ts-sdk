import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SHIFT_GROUP_SORT_KEY
 */
export declare enum SHIFT_GROUP_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    SHIFT_GROUP_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    SHIFT_GROUP_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    SHIFT_GROUP_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    SHIFT_GROUP_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_COMPLETED_ON = 6;
     */
    SHIFT_GROUP_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_NAME = 10;
     */
    SHIFT_GROUP_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_CODE = 11;
     */
    SHIFT_GROUP_SORT_KEY_CODE = 11
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.ShiftsGroupsServiceCreateRequest
 */
export declare class ShiftsGroupsServiceCreateRequest extends Message<ShiftsGroupsServiceCreateRequest> ***REMOVED***
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
     * The name of the shift group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift group
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<ShiftsGroupsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceCreateRequest;
    static equals(a: ShiftsGroupsServiceCreateRequest | PlainMessage<ShiftsGroupsServiceCreateRequest> | undefined, b: ShiftsGroupsServiceCreateRequest | PlainMessage<ShiftsGroupsServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.ShiftsGroupsServiceUpdateRequest
 */
export declare class ShiftsGroupsServiceUpdateRequest extends Message<ShiftsGroupsServiceUpdateRequest> ***REMOVED***
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
     * The name of the shift group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift group
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<ShiftsGroupsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceUpdateRequest;
    static equals(a: ShiftsGroupsServiceUpdateRequest | PlainMessage<ShiftsGroupsServiceUpdateRequest> | undefined, b: ShiftsGroupsServiceUpdateRequest | PlainMessage<ShiftsGroupsServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.ShiftGroup
 */
export declare class ShiftGroup extends Message<ShiftGroup> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this shift group
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
     * The status of this shift group
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this shift group
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this shift group was marked as completed
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
     * The name of the shift group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The shift group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the shift group
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of associated shift group shifts
     *
     * @generated from field: repeated Genesis.ShiftGroupShift list = 20;
     */
    list: ShiftGroupShift[];
    constructor(data?: PartialMessage<ShiftGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftGroup;
    static equals(a: ShiftGroup | PlainMessage<ShiftGroup> | undefined, b: ShiftGroup | PlainMessage<ShiftGroup> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add a shift to a shift group
 *
 * @generated from message Genesis.ShiftsGroupsServiceShiftGroupCreateRequest
 */
export declare class ShiftsGroupsServiceShiftGroupCreateRequest extends Message<ShiftsGroupsServiceShiftGroupCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the shift group ID
     *
     * @generated from field: int64 shift_group_id = 10;
     */
    shiftGroupId: bigint;
    /**
     * Stores the shift ID
     *
     * @generated from field: int64 shift_id = 11;
     */
    shiftId: bigint;
    constructor(data?: PartialMessage<ShiftsGroupsServiceShiftGroupCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServiceShiftGroupCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServiceShiftGroupCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceShiftGroupCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceShiftGroupCreateRequest;
    static equals(a: ShiftsGroupsServiceShiftGroupCreateRequest | PlainMessage<ShiftsGroupsServiceShiftGroupCreateRequest> | undefined, b: ShiftsGroupsServiceShiftGroupCreateRequest | PlainMessage<ShiftsGroupsServiceShiftGroupCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update a shift in a shift group
 *
 * @generated from message Genesis.ShiftsGroupsServiceShiftGroupUpdateRequest
 */
export declare class ShiftsGroupsServiceShiftGroupUpdateRequest extends Message<ShiftsGroupsServiceShiftGroupUpdateRequest> ***REMOVED***
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
     * Stores the shift group ID
     *
     * @generated from field: int64 shift_group_id = 10;
     */
    shiftGroupId: bigint;
    /**
     * Stores the shift ID
     *
     * @generated from field: int64 shift_id = 11;
     */
    shiftId: bigint;
    constructor(data?: PartialMessage<ShiftsGroupsServiceShiftGroupUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServiceShiftGroupUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServiceShiftGroupUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceShiftGroupUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceShiftGroupUpdateRequest;
    static equals(a: ShiftsGroupsServiceShiftGroupUpdateRequest | PlainMessage<ShiftsGroupsServiceShiftGroupUpdateRequest> | undefined, b: ShiftsGroupsServiceShiftGroupUpdateRequest | PlainMessage<ShiftsGroupsServiceShiftGroupUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute a shift associated to a shift group
 *
 * @generated from message Genesis.ShiftGroupShift
 */
export declare class ShiftGroupShift extends Message<ShiftGroupShift> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this shift group
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
     * Stores the shift group ID
     *
     * @generated from field: int64 shift_group_id = 10;
     */
    shiftGroupId: bigint;
    /**
     * Stores the shift ID
     *
     * @generated from field: int64 shift_id = 11;
     */
    shiftId: bigint;
    constructor(data?: PartialMessage<ShiftGroupShift>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftGroupShift";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftGroupShift;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftGroupShift;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftGroupShift;
    static equals(a: ShiftGroupShift | PlainMessage<ShiftGroupShift> | undefined, b: ShiftGroupShift | PlainMessage<ShiftGroupShift> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of shift groups
 *
 * @generated from message Genesis.ShiftsGroupsList
 */
export declare class ShiftsGroupsList extends Message<ShiftsGroupsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.ShiftGroup list = 1;
     */
    list: ShiftGroup[];
    constructor(data?: PartialMessage<ShiftsGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsList;
    static equals(a: ShiftsGroupsList | PlainMessage<ShiftsGroupsList> | undefined, b: ShiftsGroupsList | PlainMessage<ShiftsGroupsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of shift group shifts
 *
 * @generated from message Genesis.ShiftsGroupsShiftsList
 */
export declare class ShiftsGroupsShiftsList extends Message<ShiftsGroupsShiftsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.ShiftGroupShift list = 1;
     */
    list: ShiftGroupShift[];
    constructor(data?: PartialMessage<ShiftsGroupsShiftsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsShiftsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsShiftsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsShiftsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsShiftsList;
    static equals(a: ShiftsGroupsShiftsList | PlainMessage<ShiftsGroupsShiftsList> | undefined, b: ShiftsGroupsShiftsList | PlainMessage<ShiftsGroupsShiftsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.ShiftsGroupsShiftsHistoryRequest
 */
export declare class ShiftsGroupsShiftsHistoryRequest extends Message<ShiftsGroupsShiftsHistoryRequest> ***REMOVED***
    /**
     * Stores the shift group ID
     *
     * @generated from field: int64 shift_group_id = 10;
     */
    shiftGroupId: bigint;
    /**
     * Stores the shift ID
     *
     * @generated from field: int64 shift_id = 11;
     */
    shiftId: bigint;
    constructor(data?: PartialMessage<ShiftsGroupsShiftsHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsShiftsHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsShiftsHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsShiftsHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsShiftsHistoryRequest;
    static equals(a: ShiftsGroupsShiftsHistoryRequest | PlainMessage<ShiftsGroupsShiftsHistoryRequest> | undefined, b: ShiftsGroupsShiftsHistoryRequest | PlainMessage<ShiftsGroupsShiftsHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.ShiftsGroupsServicePaginationReq
 */
export declare class ShiftsGroupsServicePaginationReq extends Message<ShiftsGroupsServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_GROUP_SORT_KEY;
    /**
     * The status of this shift group
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ShiftsGroupsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServicePaginationReq;
    static equals(a: ShiftsGroupsServicePaginationReq | PlainMessage<ShiftsGroupsServicePaginationReq> | undefined, b: ShiftsGroupsServicePaginationReq | PlainMessage<ShiftsGroupsServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.ShiftsGroupsServicePaginationResponse
 */
export declare class ShiftsGroupsServicePaginationResponse extends Message<ShiftsGroupsServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.ShiftGroup payload = 4;
     */
    payload: ShiftGroup[];
    constructor(data?: PartialMessage<ShiftsGroupsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServicePaginationResponse;
    static equals(a: ShiftsGroupsServicePaginationResponse | PlainMessage<ShiftsGroupsServicePaginationResponse> | undefined, b: ShiftsGroupsServicePaginationResponse | PlainMessage<ShiftsGroupsServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.ShiftsGroupsServiceEntityPaginationReq
 */
export declare class ShiftsGroupsServiceEntityPaginationReq extends Message<ShiftsGroupsServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_GROUP_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ShiftsGroupsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceEntityPaginationReq;
    static equals(a: ShiftsGroupsServiceEntityPaginationReq | PlainMessage<ShiftsGroupsServiceEntityPaginationReq> | undefined, b: ShiftsGroupsServiceEntityPaginationReq | PlainMessage<ShiftsGroupsServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.ShiftsGroupsServiceFilterReq
 */
export declare class ShiftsGroupsServiceFilterReq extends Message<ShiftsGroupsServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_GROUP_SORT_KEY;
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
     * The status of this shift group
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
     * The name of the shift group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The shift group code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<ShiftsGroupsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceFilterReq;
    static equals(a: ShiftsGroupsServiceFilterReq | PlainMessage<ShiftsGroupsServiceFilterReq> | undefined, b: ShiftsGroupsServiceFilterReq | PlainMessage<ShiftsGroupsServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.ShiftsGroupsServiceSearchAllReq
 */
export declare class ShiftsGroupsServiceSearchAllReq extends Message<ShiftsGroupsServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: SHIFT_GROUP_SORT_KEY;
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
    constructor(data?: PartialMessage<ShiftsGroupsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ShiftsGroupsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftsGroupsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftsGroupsServiceSearchAllReq;
    static equals(a: ShiftsGroupsServiceSearchAllReq | PlainMessage<ShiftsGroupsServiceSearchAllReq> | undefined, b: ShiftsGroupsServiceSearchAllReq | PlainMessage<ShiftsGroupsServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=shifts_groups_pb.d.ts.map