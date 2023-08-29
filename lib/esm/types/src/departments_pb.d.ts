import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.DEPARTMENT_SORT_KEY
 */
export declare enum DEPARTMENT_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    DEPARTMENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_CREATED_AT = 1;
     */
    DEPARTMENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    DEPARTMENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_APPROVED_ON = 3;
     */
    DEPARTMENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_APPROVED_BY = 4;
     */
    DEPARTMENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    DEPARTMENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    DEPARTMENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_NAME = 10;
     */
    DEPARTMENT_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_CODE = 11;
     */
    DEPARTMENT_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the head user ID
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_HEAD_USER_ID = 12;
     */
    DEPARTMENT_SORT_KEY_HEAD_USER_ID = 12
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.DepartmentsServiceCreateRequest
 */
export declare class DepartmentsServiceCreateRequest extends Message<DepartmentsServiceCreateRequest> ***REMOVED***
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
     * The name of the department
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the department
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the department head of this department
     *
     * @generated from field: int64 head_user_id = 12;
     */
    headUserId: bigint;
    /**
     * The description of the department
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<DepartmentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DepartmentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepartmentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepartmentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepartmentsServiceCreateRequest;
    static equals(a: DepartmentsServiceCreateRequest | PlainMessage<DepartmentsServiceCreateRequest> | undefined, b: DepartmentsServiceCreateRequest | PlainMessage<DepartmentsServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.DepartmentsServiceUpdateRequest
 */
export declare class DepartmentsServiceUpdateRequest extends Message<DepartmentsServiceUpdateRequest> ***REMOVED***
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
     * The name of the department
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the department
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the department head of this department
     *
     * @generated from field: int64 head_user_id = 12;
     */
    headUserId: bigint;
    /**
     * The description of the department
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<DepartmentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DepartmentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepartmentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepartmentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepartmentsServiceUpdateRequest;
    static equals(a: DepartmentsServiceUpdateRequest | PlainMessage<DepartmentsServiceUpdateRequest> | undefined, b: DepartmentsServiceUpdateRequest | PlainMessage<DepartmentsServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Department
 */
export declare class Department extends Message<Department> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this department
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
     * The status of this department
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this department
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this department was marked as completed
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
     * The name of the department
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the department
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the department head of this department
     *
     * @generated from field: int64 head_user_id = 12;
     */
    headUserId: bigint;
    /**
     * The description of the department
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<Department>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Department";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Department;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Department;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Department;
    static equals(a: Department | PlainMessage<Department> | undefined, b: Department | PlainMessage<Department> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of departments
 *
 * @generated from message Genesis.DepartmentsList
 */
export declare class DepartmentsList extends Message<DepartmentsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.Department list = 1;
     */
    list: Department[];
    constructor(data?: PartialMessage<DepartmentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DepartmentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepartmentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepartmentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepartmentsList;
    static equals(a: DepartmentsList | PlainMessage<DepartmentsList> | undefined, b: DepartmentsList | PlainMessage<DepartmentsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.DepartmentsServicePaginationReq
 */
export declare class DepartmentsServicePaginationReq extends Message<DepartmentsServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;
     */
    sortKey: DEPARTMENT_SORT_KEY;
    /**
     * The status of this department
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<DepartmentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DepartmentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepartmentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepartmentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepartmentsServicePaginationReq;
    static equals(a: DepartmentsServicePaginationReq | PlainMessage<DepartmentsServicePaginationReq> | undefined, b: DepartmentsServicePaginationReq | PlainMessage<DepartmentsServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.DepartmentsServicePaginationResponse
 */
export declare class DepartmentsServicePaginationResponse extends Message<DepartmentsServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.Department payload = 4;
     */
    payload: Department[];
    constructor(data?: PartialMessage<DepartmentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DepartmentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepartmentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepartmentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepartmentsServicePaginationResponse;
    static equals(a: DepartmentsServicePaginationResponse | PlainMessage<DepartmentsServicePaginationResponse> | undefined, b: DepartmentsServicePaginationResponse | PlainMessage<DepartmentsServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.DepartmentsServiceEntityPaginationReq
 */
export declare class DepartmentsServiceEntityPaginationReq extends Message<DepartmentsServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;
     */
    sortKey: DEPARTMENT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<DepartmentsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DepartmentsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepartmentsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepartmentsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepartmentsServiceEntityPaginationReq;
    static equals(a: DepartmentsServiceEntityPaginationReq | PlainMessage<DepartmentsServiceEntityPaginationReq> | undefined, b: DepartmentsServiceEntityPaginationReq | PlainMessage<DepartmentsServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.DepartmentsServiceFilterReq
 */
export declare class DepartmentsServiceFilterReq extends Message<DepartmentsServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;
     */
    sortKey: DEPARTMENT_SORT_KEY;
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
     * The status of this department
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
     * The name of the department
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The code of the department
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The user ID of the head
     *
     * @generated from field: int64 head_user_id = 22;
     */
    headUserId: bigint;
    constructor(data?: PartialMessage<DepartmentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DepartmentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepartmentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepartmentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepartmentsServiceFilterReq;
    static equals(a: DepartmentsServiceFilterReq | PlainMessage<DepartmentsServiceFilterReq> | undefined, b: DepartmentsServiceFilterReq | PlainMessage<DepartmentsServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.DepartmentsServiceSearchAllReq
 */
export declare class DepartmentsServiceSearchAllReq extends Message<DepartmentsServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;
     */
    sortKey: DEPARTMENT_SORT_KEY;
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
    constructor(data?: PartialMessage<DepartmentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DepartmentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepartmentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepartmentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepartmentsServiceSearchAllReq;
    static equals(a: DepartmentsServiceSearchAllReq | PlainMessage<DepartmentsServiceSearchAllReq> | undefined, b: DepartmentsServiceSearchAllReq | PlainMessage<DepartmentsServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=departments_pb.d.ts.map