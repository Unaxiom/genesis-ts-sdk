import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SKILL_PARAM_SORT_KEY
 */
export declare enum SKILL_PARAM_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_CREATED_AT = 1;
     */
    SKILL_PARAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_MODIFIED_AT = 2;
     */
    SKILL_PARAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVED_ON = 3;
     */
    SKILL_PARAM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVED_BY = 4;
     */
    SKILL_PARAM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SKILL_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_COMPLETED_ON = 6;
     */
    SKILL_PARAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_NAME = 10;
     */
    SKILL_PARAM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: SKILL_PARAM_SORT_KEY_CODE = 11;
     */
    SKILL_PARAM_SORT_KEY_CODE = 11
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.SkillsParamsServiceCreateRequest
 */
export declare class SkillsParamsServiceCreateRequest extends Message<SkillsParamsServiceCreateRequest> ***REMOVED***
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
     * The name of the skill param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the skill param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SkillsParamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillsParamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceCreateRequest;
    static equals(a: SkillsParamsServiceCreateRequest | PlainMessage<SkillsParamsServiceCreateRequest> | undefined, b: SkillsParamsServiceCreateRequest | PlainMessage<SkillsParamsServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.SkillsParamsServiceUpdateRequest
 */
export declare class SkillsParamsServiceUpdateRequest extends Message<SkillsParamsServiceUpdateRequest> ***REMOVED***
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
     * The name of the skill param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the skill param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SkillsParamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillsParamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceUpdateRequest;
    static equals(a: SkillsParamsServiceUpdateRequest | PlainMessage<SkillsParamsServiceUpdateRequest> | undefined, b: SkillsParamsServiceUpdateRequest | PlainMessage<SkillsParamsServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.SkillParam
 */
export declare class SkillParam extends Message<SkillParam> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this skill param
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
     * The status of this skill param
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this skill param
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this skill param was marked as completed
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
     * The name of the skill param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the skill param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SkillParam>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillParam";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillParam;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillParam;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillParam;
    static equals(a: SkillParam | PlainMessage<SkillParam> | undefined, b: SkillParam | PlainMessage<SkillParam> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.SkillsParamsList
 */
export declare class SkillsParamsList extends Message<SkillsParamsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.SkillParam list = 1;
     */
    list: SkillParam[];
    constructor(data?: PartialMessage<SkillsParamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillsParamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsList;
    static equals(a: SkillsParamsList | PlainMessage<SkillsParamsList> | undefined, b: SkillsParamsList | PlainMessage<SkillsParamsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.SkillsParamsServicePaginationReq
 */
export declare class SkillsParamsServicePaginationReq extends Message<SkillsParamsServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_PARAM_SORT_KEY;
    /**
     * The status of this skill param
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SkillsParamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillsParamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationReq;
    static equals(a: SkillsParamsServicePaginationReq | PlainMessage<SkillsParamsServicePaginationReq> | undefined, b: SkillsParamsServicePaginationReq | PlainMessage<SkillsParamsServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.SkillsParamsServicePaginationResponse
 */
export declare class SkillsParamsServicePaginationResponse extends Message<SkillsParamsServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.SkillParam payload = 4;
     */
    payload: SkillParam[];
    constructor(data?: PartialMessage<SkillsParamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillsParamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServicePaginationResponse;
    static equals(a: SkillsParamsServicePaginationResponse | PlainMessage<SkillsParamsServicePaginationResponse> | undefined, b: SkillsParamsServicePaginationResponse | PlainMessage<SkillsParamsServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.SkillsParamsServiceEntityPaginationReq
 */
export declare class SkillsParamsServiceEntityPaginationReq extends Message<SkillsParamsServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_PARAM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<SkillsParamsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillsParamsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceEntityPaginationReq;
    static equals(a: SkillsParamsServiceEntityPaginationReq | PlainMessage<SkillsParamsServiceEntityPaginationReq> | undefined, b: SkillsParamsServiceEntityPaginationReq | PlainMessage<SkillsParamsServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.SkillsParamsServiceFilterReq
 */
export declare class SkillsParamsServiceFilterReq extends Message<SkillsParamsServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_PARAM_SORT_KEY;
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
     * The status of this skill param
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
     * The name of the skill param
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The skill param code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<SkillsParamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillsParamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceFilterReq;
    static equals(a: SkillsParamsServiceFilterReq | PlainMessage<SkillsParamsServiceFilterReq> | undefined, b: SkillsParamsServiceFilterReq | PlainMessage<SkillsParamsServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.SkillsParamsServiceSearchAllReq
 */
export declare class SkillsParamsServiceSearchAllReq extends Message<SkillsParamsServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: SKILL_PARAM_SORT_KEY;
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
    constructor(data?: PartialMessage<SkillsParamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SkillsParamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillsParamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillsParamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillsParamsServiceSearchAllReq;
    static equals(a: SkillsParamsServiceSearchAllReq | PlainMessage<SkillsParamsServiceSearchAllReq> | undefined, b: SkillsParamsServiceSearchAllReq | PlainMessage<SkillsParamsServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=skills_params_pb.d.ts.map