import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.CLIENT_SORT_KEY
 */
export declare enum CLIENT_SORT_KEY ***REMOVED***
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
    CLIENT_SORT_KEY_PHONE = 13
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.ClientsServiceCreateRequest
 */
export declare class ClientsServiceCreateRequest extends Message<ClientsServiceCreateRequest> ***REMOVED***
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
     * The name of the client
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ClientsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ClientsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceCreateRequest;
    static equals(a: ClientsServiceCreateRequest | PlainMessage<ClientsServiceCreateRequest> | undefined, b: ClientsServiceCreateRequest | PlainMessage<ClientsServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.ClientsServiceUpdateRequest
 */
export declare class ClientsServiceUpdateRequest extends Message<ClientsServiceUpdateRequest> ***REMOVED***
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
     * The name of the client
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ClientsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ClientsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceUpdateRequest;
    static equals(a: ClientsServiceUpdateRequest | PlainMessage<ClientsServiceUpdateRequest> | undefined, b: ClientsServiceUpdateRequest | PlainMessage<ClientsServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Client
 */
export declare class Client extends Message<Client> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
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
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this client
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The name of the client
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 13;
     */
    phone: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Client>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Client";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Client;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Client;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Client;
    static equals(a: Client | PlainMessage<Client> | undefined, b: Client | PlainMessage<Client> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.ClientsList
 */
export declare class ClientsList extends Message<ClientsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.Client list = 1;
     */
    list: Client[];
    constructor(data?: PartialMessage<ClientsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ClientsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsList;
    static equals(a: ClientsList | PlainMessage<ClientsList> | undefined, b: ClientsList | PlainMessage<ClientsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.ClientsServicePaginationReq
 */
export declare class ClientsServicePaginationReq extends Message<ClientsServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.CLIENT_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_SORT_KEY;
    /**
     * The status of this client
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ClientsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ClientsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServicePaginationReq;
    static equals(a: ClientsServicePaginationReq | PlainMessage<ClientsServicePaginationReq> | undefined, b: ClientsServicePaginationReq | PlainMessage<ClientsServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.ClientsServicePaginationResponse
 */
export declare class ClientsServicePaginationResponse extends Message<ClientsServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.Client payload = 4;
     */
    payload: Client[];
    constructor(data?: PartialMessage<ClientsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ClientsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServicePaginationResponse;
    static equals(a: ClientsServicePaginationResponse | PlainMessage<ClientsServicePaginationResponse> | undefined, b: ClientsServicePaginationResponse | PlainMessage<ClientsServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.ClientsServiceEntityPaginationReq
 */
export declare class ClientsServiceEntityPaginationReq extends Message<ClientsServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.CLIENT_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ClientsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ClientsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceEntityPaginationReq;
    static equals(a: ClientsServiceEntityPaginationReq | PlainMessage<ClientsServiceEntityPaginationReq> | undefined, b: ClientsServiceEntityPaginationReq | PlainMessage<ClientsServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.ClientsServiceFilterReq
 */
export declare class ClientsServiceFilterReq extends Message<ClientsServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.CLIENT_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_SORT_KEY;
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
     * The status of this client
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
     * The name of the client
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the client is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The primary email of the client
     *
     * @generated from field: string email = 22;
     */
    email: string;
    /**
     * The primary contact number of the client
     *
     * @generated from field: string phone = 23;
     */
    phone: string;
    constructor(data?: PartialMessage<ClientsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ClientsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceFilterReq;
    static equals(a: ClientsServiceFilterReq | PlainMessage<ClientsServiceFilterReq> | undefined, b: ClientsServiceFilterReq | PlainMessage<ClientsServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.ClientsServiceSearchAllReq
 */
export declare class ClientsServiceSearchAllReq extends Message<ClientsServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.CLIENT_SORT_KEY sort_key = 5;
     */
    sortKey: CLIENT_SORT_KEY;
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
    constructor(data?: PartialMessage<ClientsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ClientsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientsServiceSearchAllReq;
    static equals(a: ClientsServiceSearchAllReq | PlainMessage<ClientsServiceSearchAllReq> | undefined, b: ClientsServiceSearchAllReq | PlainMessage<ClientsServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=clients_pb.d.ts.map