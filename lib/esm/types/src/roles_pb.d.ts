import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.ROLE_SORT_KEY
 */
export declare enum ROLE_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ROLE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ROLE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ROLE_SORT_KEY_CREATED_AT = 1;
     */
    ROLE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ROLE_SORT_KEY_MODIFIED_AT = 2;
     */
    ROLE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ROLE_SORT_KEY_APPROVED_ON = 3;
     */
    ROLE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ROLE_SORT_KEY_APPROVED_BY = 4;
     */
    ROLE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ROLE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ROLE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ROLE_SORT_KEY_COMPLETED_ON = 6;
     */
    ROLE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: ROLE_SORT_KEY_NAME = 10;
     */
    ROLE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: ROLE_SORT_KEY_CODE = 11;
     */
    ROLE_SORT_KEY_CODE = 11
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.RolesServiceCreateRequest
 */
export declare class RolesServiceCreateRequest extends Message<RolesServiceCreateRequest> ***REMOVED***
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
     * The name of the role
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the role
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the role
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * Stores if this role has access to Vault
     *
     * @generated from field: bool vault_access = 13;
     */
    vaultAccess: boolean;
    /**
     * Stores if the role has access to perform operations on the root folder in Vault
     *
     * @generated from field: bool vault_root_folder_interactions = 14;
     */
    vaultRootFolderInteractions: boolean;
    /**
     * Stores if the role has access via HTTP (or within local network)
     *
     * @generated from field: bool http_access = 15;
     */
    httpAccess: boolean;
    /**
     * Stores if the role has access via HTTPS (or through a public FQDN)
     *
     * @generated from field: bool https_access = 16;
     */
    httpsAccess: boolean;
    /**
     * The list of accessible menu UIDs
     *
     * @generated from field: repeated Genesis.RolesServiceAccessCreateAndUpdateRequest access_list = 20;
     */
    accessList: RolesServiceAccessCreateAndUpdateRequest[];
    constructor(data?: PartialMessage<RolesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceCreateRequest;
    static equals(a: RolesServiceCreateRequest | PlainMessage<RolesServiceCreateRequest> | undefined, b: RolesServiceCreateRequest | PlainMessage<RolesServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.RolesServiceUpdateRequest
 */
export declare class RolesServiceUpdateRequest extends Message<RolesServiceUpdateRequest> ***REMOVED***
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
     * The name of the role
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the role
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the role
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * Stores if this role has access to Vault
     *
     * @generated from field: bool vault_access = 13;
     */
    vaultAccess: boolean;
    /**
     * Stores if the role has access to perform operations on the root folder in Vault
     *
     * @generated from field: bool vault_root_folder_interactions = 14;
     */
    vaultRootFolderInteractions: boolean;
    /**
     * Stores if the role has access via HTTP (or within local network)
     *
     * @generated from field: bool http_access = 15;
     */
    httpAccess: boolean;
    /**
     * Stores if the role has access via HTTPS (or through a public FQDN)
     *
     * @generated from field: bool https_access = 16;
     */
    httpsAccess: boolean;
    /**
     * The list of accessible menu UIDs
     *
     * @generated from field: repeated Genesis.RolesServiceAccessCreateAndUpdateRequest access_list = 20;
     */
    accessList: RolesServiceAccessCreateAndUpdateRequest[];
    constructor(data?: PartialMessage<RolesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceUpdateRequest;
    static equals(a: RolesServiceUpdateRequest | PlainMessage<RolesServiceUpdateRequest> | undefined, b: RolesServiceUpdateRequest | PlainMessage<RolesServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Role
 */
export declare class Role extends Message<Role> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this role
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
     * The status of this role
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this role
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this role was marked as completed
     *
     * @generated from field: int64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The name of the role
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the role
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the role
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * Stores if this role has access to Vault
     *
     * @generated from field: bool vault_access = 13;
     */
    vaultAccess: boolean;
    /**
     * Stores if the role has access to perform operations on the root folder in Vault
     *
     * @generated from field: bool vault_root_folder_interactions = 14;
     */
    vaultRootFolderInteractions: boolean;
    /**
     * Stores if the role has access via HTTP (or within local network)
     *
     * @generated from field: bool http_access = 15;
     */
    httpAccess: boolean;
    /**
     * Stores if the role has access via HTTPS (or through a public FQDN)
     *
     * @generated from field: bool https_access = 16;
     */
    httpsAccess: boolean;
    /**
     * The list of associated role accesses
     *
     * @generated from field: repeated Genesis.RoleAccess access_list = 20;
     */
    accessList: RoleAccess[];
    constructor(data?: PartialMessage<Role>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Role";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role;
    static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the necessary data structure during creation/updation of a role access
 *
 * @generated from message Genesis.RolesServiceAccessCreateAndUpdateRequest
 */
export declare class RolesServiceAccessCreateAndUpdateRequest extends Message<RolesServiceAccessCreateAndUpdateRequest> ***REMOVED***
    /**
     * The menu UID (or internal code)
     *
     * @generated from field: string menu_uid = 11;
     */
    menuUid: string;
    /**
     * Denotes if the menu is accessible
     *
     * @generated from field: bool is_accessible = 12;
     */
    isAccessible: boolean;
    constructor(data?: PartialMessage<RolesServiceAccessCreateAndUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesServiceAccessCreateAndUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static equals(a: RolesServiceAccessCreateAndUpdateRequest | PlainMessage<RolesServiceAccessCreateAndUpdateRequest> | undefined, b: RolesServiceAccessCreateAndUpdateRequest | PlainMessage<RolesServiceAccessCreateAndUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data structure of each role access on the platform
 *
 * @generated from message Genesis.RoleAccess
 */
export declare class RoleAccess extends Message<RoleAccess> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this team
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
     * The associated Role ID
     *
     * @generated from field: int64 role_id = 10;
     */
    roleId: bigint;
    /**
     * The menu UID (or internal code)
     *
     * @generated from field: string menu_uid = 11;
     */
    menuUid: string;
    /**
     * Denotes if the menu is accessible
     *
     * @generated from field: bool is_accessible = 12;
     */
    isAccessible: boolean;
    constructor(data?: PartialMessage<RoleAccess>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RoleAccess";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleAccess;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleAccess;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleAccess;
    static equals(a: RoleAccess | PlainMessage<RoleAccess> | undefined, b: RoleAccess | PlainMessage<RoleAccess> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of roles
 *
 * @generated from message Genesis.RolesList
 */
export declare class RolesList extends Message<RolesList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.Role list = 1;
     */
    list: Role[];
    constructor(data?: PartialMessage<RolesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesList;
    static equals(a: RolesList | PlainMessage<RolesList> | undefined, b: RolesList | PlainMessage<RolesList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.RolesServicePaginationReq
 */
export declare class RolesServicePaginationReq extends Message<RolesServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.ROLE_SORT_KEY sort_key = 5;
     */
    sortKey: ROLE_SORT_KEY;
    /**
     * The status of this role
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<RolesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServicePaginationReq;
    static equals(a: RolesServicePaginationReq | PlainMessage<RolesServicePaginationReq> | undefined, b: RolesServicePaginationReq | PlainMessage<RolesServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.RolesServicePaginationResponse
 */
export declare class RolesServicePaginationResponse extends Message<RolesServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.Role payload = 4;
     */
    payload: Role[];
    constructor(data?: PartialMessage<RolesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServicePaginationResponse;
    static equals(a: RolesServicePaginationResponse | PlainMessage<RolesServicePaginationResponse> | undefined, b: RolesServicePaginationResponse | PlainMessage<RolesServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.RolesServiceEntityPaginationReq
 */
export declare class RolesServiceEntityPaginationReq extends Message<RolesServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.ROLE_SORT_KEY sort_key = 5;
     */
    sortKey: ROLE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<RolesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceEntityPaginationReq;
    static equals(a: RolesServiceEntityPaginationReq | PlainMessage<RolesServiceEntityPaginationReq> | undefined, b: RolesServiceEntityPaginationReq | PlainMessage<RolesServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.RolesServiceFilterReq
 */
export declare class RolesServiceFilterReq extends Message<RolesServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.ROLE_SORT_KEY sort_key = 5;
     */
    sortKey: ROLE_SORT_KEY;
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
     * The status of this role
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
     * The name of the role
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The name of the code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<RolesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceFilterReq;
    static equals(a: RolesServiceFilterReq | PlainMessage<RolesServiceFilterReq> | undefined, b: RolesServiceFilterReq | PlainMessage<RolesServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.RolesServiceSearchAllReq
 */
export declare class RolesServiceSearchAllReq extends Message<RolesServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.ROLE_SORT_KEY sort_key = 5;
     */
    sortKey: ROLE_SORT_KEY;
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
    constructor(data?: PartialMessage<RolesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.RolesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceSearchAllReq;
    static equals(a: RolesServiceSearchAllReq | PlainMessage<RolesServiceSearchAllReq> | undefined, b: RolesServiceSearchAllReq | PlainMessage<RolesServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=roles_pb.d.ts.map