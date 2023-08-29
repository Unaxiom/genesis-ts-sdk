import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** EmployeeMetadata, SORT_ORDER ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available options that a associate can be associated with
 *
 * @generated from enum Genesis.ASSOCIATE_ORG_REF_FROM
 */
export declare enum ASSOCIATE_ORG_REF_FROM ***REMOVED***
    /**
     * The default value which is an empty string
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_UNSPECIFIED = 0;
     */
    ASSOCIATE_ORG_REF_FROM_UNSPECIFIED = 0,
    /**
     * When the associate has been associated to a client
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_CLIENT = 1;
     */
    ASSOCIATE_ORG_REF_FROM_CLIENT = 1,
    /**
     * When the associate has been associated to a vendor
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_VENDOR = 2;
     */
    ASSOCIATE_ORG_REF_FROM_VENDOR = 2
***REMOVED***
/**
 *
 * Describes the available sort keys for retrieving associates
 *
 * @generated from enum Genesis.ASSOCIATE_SORT_KEY
 */
export declare enum ASSOCIATE_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ASSOCIATE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_CREATED_AT = 1;
     */
    ASSOCIATE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_MODIFIED_AT = 2;
     */
    ASSOCIATE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by first name
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_FIRST_NAME = 10;
     */
    ASSOCIATE_SORT_KEY_FIRST_NAME = 10,
    /**
     * Fetch ordered results by middle name
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_MIDDLE_NAME = 11;
     */
    ASSOCIATE_SORT_KEY_MIDDLE_NAME = 11,
    /**
     * Fetch ordered results by last name
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_LAST_NAME = 12;
     */
    ASSOCIATE_SORT_KEY_LAST_NAME = 12,
    /**
     * Fetch ordered results by organization name
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_ORG_NAME = 13;
     */
    ASSOCIATE_SORT_KEY_ORG_NAME = 13,
    /**
     * Fetch ordered results by job title
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_JOB_TITLE = 14;
     */
    ASSOCIATE_SORT_KEY_JOB_TITLE = 14
***REMOVED***
/**
 *
 * Describes the data structure of each associate on the platform
 *
 * @generated from message Genesis.Associate
 */
export declare class Associate extends Message<Associate> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: Genesis.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The first name of the associate
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The middle name of the associate
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     * The last name of the associate
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Genesis.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: int64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     * The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     * The job title of the associate
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     * The department that the associates works in
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     * The work phone number of the associate
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     * The work email address of the associate
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     * The personal phone number of the associate
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     * The personal email address of the associate
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     * The associate's birthday
     *
     * @generated from field: string birthday = 22;
     */
    birthday: string;
    /**
     * The associate's anniversary
     *
     * @generated from field: string anniversary = 23;
     */
    anniversary: string;
    /**
     * A short description of the associate
     *
     * @generated from field: string description = 24;
     */
    description: string;
    constructor(data?: PartialMessage<Associate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Associate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Associate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Associate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Associate;
    static equals(a: Associate | PlainMessage<Associate> | undefined, b: Associate | PlainMessage<Associate> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data structure that stores a list of associates
 *
 * @generated from message Genesis.AssociatesList
 */
export declare class AssociatesList extends Message<AssociatesList> ***REMOVED***
    /**
     * List of associates
     *
     * @generated from field: repeated Genesis.Associate list = 1;
     */
    list: Associate[];
    constructor(data?: PartialMessage<AssociatesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssociatesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesList;
    static equals(a: AssociatesList | PlainMessage<AssociatesList> | undefined, b: AssociatesList | PlainMessage<AssociatesList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message Genesis.AssociatePaginationResp
 */
export declare class AssociatePaginationResp extends Message<AssociatePaginationResp> ***REMOVED***
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
     * @generated from field: repeated Genesis.Associate payload = 4;
     */
    payload: Associate[];
    constructor(data?: PartialMessage<AssociatePaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssociatePaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatePaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatePaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatePaginationResp;
    static equals(a: AssociatePaginationResp | PlainMessage<AssociatePaginationResp> | undefined, b: AssociatePaginationResp | PlainMessage<AssociatePaginationResp> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the necessary data structure during creation of a associate
 *
 * @generated from message Genesis.AssociatesServiceCreateRequest
 */
export declare class AssociatesServiceCreateRequest extends Message<AssociatesServiceCreateRequest> ***REMOVED***
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
     * The first name of the associate
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The middle name of the associate
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     * The last name of the associate
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Genesis.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: int64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     * The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     * The job title of the associate
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     * The department that the associates works in
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     * The work phone number of the associate
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     * The work email address of the associate
     *
     * [(genesis_validate.rules).string.email = true];
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     * The personal phone number of the associate
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     * The personal email address of the associate
     *
     * [(genesis_validate.rules).string.email = true];
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     * The associate's birthday
     *
     * @generated from field: string birthday = 22;
     */
    birthday: string;
    /**
     * The associate's anniversary
     *
     * @generated from field: string anniversary = 23;
     */
    anniversary: string;
    /**
     * A short description of the associate
     *
     * @generated from field: string description = 24;
     */
    description: string;
    constructor(data?: PartialMessage<AssociatesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssociatesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceCreateRequest;
    static equals(a: AssociatesServiceCreateRequest | PlainMessage<AssociatesServiceCreateRequest> | undefined, b: AssociatesServiceCreateRequest | PlainMessage<AssociatesServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a associate
 *
 * @generated from message Genesis.AssociatesServiceUpdateRequest
 */
export declare class AssociatesServiceUpdateRequest extends Message<AssociatesServiceUpdateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the associate that needs to be updated
     *
     * @generated from field: int64 id = 2;
     */
    id: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The first name of the associate
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The middle name of the associate
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     * The last name of the associate
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     * The association with a vendor or a client
     *
     * @generated from field: Genesis.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     * The ID of the associated vendor or client
     *
     * @generated from field: int64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     * The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     * The job title of the associate
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     * The department that the associates works in
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     * The work phone number of the associate
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     * The work email address of the associate
     *
     * [(genesis_validate.rules).string.email = true];
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     * The personal phone number of the associate
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     * The personal email address of the associate
     *
     * [(genesis_validate.rules).string.email = true];
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     * The associate's birthday
     *
     * @generated from field: string birthday = 22;
     */
    birthday: string;
    /**
     * The associate's anniversary
     *
     * @generated from field: string anniversary = 23;
     */
    anniversary: string;
    /**
     * A short description of the associate
     *
     * @generated from field: string description = 24;
     */
    description: string;
    constructor(data?: PartialMessage<AssociatesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssociatesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceUpdateRequest;
    static equals(a: AssociatesServiceUpdateRequest | PlainMessage<AssociatesServiceUpdateRequest> | undefined, b: AssociatesServiceUpdateRequest | PlainMessage<AssociatesServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.AssociatesServicePaginationReq
 */
export declare class AssociatesServicePaginationReq extends Message<AssociatesServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey: ASSOCIATE_SORT_KEY;
    constructor(data?: PartialMessage<AssociatesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssociatesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServicePaginationReq;
    static equals(a: AssociatesServicePaginationReq | PlainMessage<AssociatesServicePaginationReq> | undefined, b: AssociatesServicePaginationReq | PlainMessage<AssociatesServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.AssociatesServiceEntityPaginationReq
 */
export declare class AssociatesServiceEntityPaginationReq extends Message<AssociatesServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey: ASSOCIATE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter associates
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<AssociatesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssociatesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceEntityPaginationReq;
    static equals(a: AssociatesServiceEntityPaginationReq | PlainMessage<AssociatesServiceEntityPaginationReq> | undefined, b: AssociatesServiceEntityPaginationReq | PlainMessage<AssociatesServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on associates
 *
 * @generated from message Genesis.AssociatesServiceSearchAllReq
 */
export declare class AssociatesServiceSearchAllReq extends Message<AssociatesServiceSearchAllReq> ***REMOVED***
    /**
     * The sort order that is to be used to fetch the response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the response
     *
     * @generated from field: Genesis.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey: ASSOCIATE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter associates
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 10;
     */
    searchKey: string;
    constructor(data?: PartialMessage<AssociatesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssociatesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceSearchAllReq;
    static equals(a: AssociatesServiceSearchAllReq | PlainMessage<AssociatesServiceSearchAllReq> | undefined, b: AssociatesServiceSearchAllReq | PlainMessage<AssociatesServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=associates_pb.d.ts.map