import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.ABSENCE_SORT_KEY
 */
export declare enum ABSENCE_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ABSENCE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ABSENCE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ABSENCE_SORT_KEY_CREATED_AT = 1;
     */
    ABSENCE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ABSENCE_SORT_KEY_MODIFIED_AT = 2;
     */
    ABSENCE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ABSENCE_SORT_KEY_APPROVED_ON = 3;
     */
    ABSENCE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ABSENCE_SORT_KEY_APPROVED_BY = 4;
     */
    ABSENCE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ABSENCE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ABSENCE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ABSENCE_SORT_KEY_COMPLETED_ON = 6;
     */
    ABSENCE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: ABSENCE_SORT_KEY_REFERENCE_ID = 10;
     */
    ABSENCE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: ABSENCE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    ABSENCE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: ABSENCE_SORT_KEY_USER_ID = 12;
     */
    ABSENCE_SORT_KEY_USER_ID = 12,
    /**
     * Fetch ordered results by the leave request ID
     *
     * @generated from enum value: ABSENCE_SORT_KEY_LEAVE_REQUEST_ID = 13;
     */
    ABSENCE_SORT_KEY_LEAVE_REQUEST_ID = 13,
    /**
     * Fetch ordered results by the "from timestamp"
     *
     * @generated from enum value: ABSENCE_SORT_KEY_FROM_TIMESTAMP = 14;
     */
    ABSENCE_SORT_KEY_FROM_TIMESTAMP = 14,
    /**
     * Fetch ordered results by the "to timestamp"
     *
     * @generated from enum value: ABSENCE_SORT_KEY_TO_TIMESTAMP = 15;
     */
    ABSENCE_SORT_KEY_TO_TIMESTAMP = 15
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.AbsencesServiceCreateRequest
 */
export declare class AbsencesServiceCreateRequest extends Message<AbsencesServiceCreateRequest> ***REMOVED***
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
     * The reference ID of the absence
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the user who has been marked as absent
     *
     * @generated from field: int64 user_id = 11;
     */
    userId: bigint;
    /**
     * The ID of the optional associated leave request
     *
     * @generated from field: int64 leave_request_id = 12;
     */
    leaveRequestId: bigint;
    /**
     * The UNIX timestamp from when the user is absent
     *
     * @generated from field: int64 from_timestamp = 13;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp until when the user is absent
     *
     * @generated from field: int64 to_timestamp = 14;
     */
    toTimestamp: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * Stores the quantity of absence (in cents)
     *
     * @generated from field: int64 quantity = 16;
     */
    quantity: bigint;
    /**
     * The description of the absence
     *
     * @generated from field: string description = 17;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<AbsencesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AbsencesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceCreateRequest;
    static equals(a: AbsencesServiceCreateRequest | PlainMessage<AbsencesServiceCreateRequest> | undefined, b: AbsencesServiceCreateRequest | PlainMessage<AbsencesServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.AbsencesServiceUpdateRequest
 */
export declare class AbsencesServiceUpdateRequest extends Message<AbsencesServiceUpdateRequest> ***REMOVED***
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
     * The reference ID of the absence
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the optional associated leave request
     *
     * @generated from field: int64 leave_request_id = 12;
     */
    leaveRequestId: bigint;
    /**
     * The UNIX timestamp from when the user is absent
     *
     * @generated from field: int64 from_timestamp = 13;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp until when the user is absent
     *
     * @generated from field: int64 to_timestamp = 14;
     */
    toTimestamp: bigint;
    /**
     * // Stores the unit of material ID
     * int64 uom_id = 15 [(genesis_validate.rules).int64.gt = 0];
     * Stores the quantity of absence (in cents)
     *
     * @generated from field: int64 quantity = 16;
     */
    quantity: bigint;
    /**
     * The description of the absence
     *
     * @generated from field: string description = 17;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<AbsencesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AbsencesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceUpdateRequest;
    static equals(a: AbsencesServiceUpdateRequest | PlainMessage<AbsencesServiceUpdateRequest> | undefined, b: AbsencesServiceUpdateRequest | PlainMessage<AbsencesServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Absence
 */
export declare class Absence extends Message<Absence> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this absence
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
     * The status of this absence
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this absence
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this absence was marked as completed
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
     * The reference_id of the absence
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
     * The ID of the user who has been marked as absent
     *
     * @generated from field: int64 user_id = 12;
     */
    userId: bigint;
    /**
     * The ID of the optional associated leave request
     *
     * @generated from field: int64 leave_request_id = 13;
     */
    leaveRequestId: bigint;
    /**
     * The UNIX timestamp from when the user is absent
     *
     * @generated from field: int64 from_timestamp = 14;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp until when the user is absent
     *
     * @generated from field: int64 to_timestamp = 15;
     */
    toTimestamp: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 16;
     */
    uomId: bigint;
    /**
     * Stores the quantity of absence (in cents)
     *
     * @generated from field: int64 quantity = 17;
     */
    quantity: bigint;
    /**
     * The description of the absence
     *
     * @generated from field: string description = 18;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Absence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Absence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Absence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Absence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Absence;
    static equals(a: Absence | PlainMessage<Absence> | undefined, b: Absence | PlainMessage<Absence> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.AbsencesList
 */
export declare class AbsencesList extends Message<AbsencesList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.Absence list = 1;
     */
    list: Absence[];
    constructor(data?: PartialMessage<AbsencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AbsencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesList;
    static equals(a: AbsencesList | PlainMessage<AbsencesList> | undefined, b: AbsencesList | PlainMessage<AbsencesList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.AbsencesServicePaginationReq
 */
export declare class AbsencesServicePaginationReq extends Message<AbsencesServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.ABSENCE_SORT_KEY sort_key = 5;
     */
    sortKey: ABSENCE_SORT_KEY;
    /**
     * The status of this absence
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<AbsencesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AbsencesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServicePaginationReq;
    static equals(a: AbsencesServicePaginationReq | PlainMessage<AbsencesServicePaginationReq> | undefined, b: AbsencesServicePaginationReq | PlainMessage<AbsencesServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.AbsencesServicePaginationResponse
 */
export declare class AbsencesServicePaginationResponse extends Message<AbsencesServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.Absence payload = 4;
     */
    payload: Absence[];
    constructor(data?: PartialMessage<AbsencesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AbsencesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServicePaginationResponse;
    static equals(a: AbsencesServicePaginationResponse | PlainMessage<AbsencesServicePaginationResponse> | undefined, b: AbsencesServicePaginationResponse | PlainMessage<AbsencesServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.AbsencesServiceEntityPaginationReq
 */
export declare class AbsencesServiceEntityPaginationReq extends Message<AbsencesServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.ABSENCE_SORT_KEY sort_key = 5;
     */
    sortKey: ABSENCE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<AbsencesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AbsencesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceEntityPaginationReq;
    static equals(a: AbsencesServiceEntityPaginationReq | PlainMessage<AbsencesServiceEntityPaginationReq> | undefined, b: AbsencesServiceEntityPaginationReq | PlainMessage<AbsencesServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.AbsencesServiceFilterReq
 */
export declare class AbsencesServiceFilterReq extends Message<AbsencesServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.ABSENCE_SORT_KEY sort_key = 5;
     */
    sortKey: ABSENCE_SORT_KEY;
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
     * The status of this absence
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
     * The reference_id of the absence
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
     * The ID of the user who has been marked as absent
     *
     * @generated from field: int64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the optionally associated leave request
     *
     * @generated from field: int64 leave_request_id = 23;
     */
    leaveRequestId: bigint;
    /**
     * The start range of "from timestamp"
     *
     * @generated from field: int64 from_timestamp_start = 24;
     */
    fromTimestampStart: bigint;
    /**
     * The end range of "from timestamp"
     *
     * @generated from field: int64 from_timestamp_end = 25;
     */
    fromTimestampEnd: bigint;
    /**
     * The start range of "to timestamp"
     *
     * @generated from field: int64 to_timestamp_start = 26;
     */
    toTimestampStart: bigint;
    /**
     * The end range of "to timestamp"
     *
     * @generated from field: int64 to_timestamp_end = 27;
     */
    toTimestampEnd: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 28;
     */
    uomId: bigint;
    /**
     * The min quantity of absence (in cents)
     *
     * @generated from field: int64 quantity_min = 29;
     */
    quantityMin: bigint;
    /**
     * The max quantity of absence (in cents)
     *
     * @generated from field: int64 quantity_max = 30;
     */
    quantityMax: bigint;
    constructor(data?: PartialMessage<AbsencesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AbsencesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceFilterReq;
    static equals(a: AbsencesServiceFilterReq | PlainMessage<AbsencesServiceFilterReq> | undefined, b: AbsencesServiceFilterReq | PlainMessage<AbsencesServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.AbsencesServiceSearchAllReq
 */
export declare class AbsencesServiceSearchAllReq extends Message<AbsencesServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.ABSENCE_SORT_KEY sort_key = 5;
     */
    sortKey: ABSENCE_SORT_KEY;
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
    /**
     * The ID of the user who has been marked as absent
     *
     * @generated from field: int64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<AbsencesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AbsencesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceSearchAllReq;
    static equals(a: AbsencesServiceSearchAllReq | PlainMessage<AbsencesServiceSearchAllReq> | undefined, b: AbsencesServiceSearchAllReq | PlainMessage<AbsencesServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=absences_pb.d.ts.map