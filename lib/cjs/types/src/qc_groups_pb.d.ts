import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available input types for a qc group item (with possible vbalues being number-absolute, number-percentage, text-input, text-dropdown)
 *
 * @generated from enum Genesis.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE
 */
export declare enum QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE ***REMOVED***
    /**
     * Acceptable value type is an absolute number (with min and max defined in number_min_value and number_max_value)
     *
     * @generated from enum value: QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED = 0;
     */
    QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED = 0,
    /**
     * Acceptable value type is a percentage
     *
     * @generated from enum value: QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_NUMBER_PERCENTAGE = 1;
     */
    QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_NUMBER_PERCENTAGE = 1,
    /**
     * Acceptable value type is a textual input
     *
     * @generated from enum value: QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_TEXT_INPUT = 2;
     */
    QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_TEXT_INPUT = 2,
    /**
     * Acceptable value type is a dropdown (from the values as defined in text_values)
     *
     * @generated from enum value: QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_TEXT_DROPDOWN = 3;
     */
    QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_TEXT_DROPDOWN = 3
***REMOVED***
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.QC_GROUP_SORT_KEY
 */
export declare enum QC_GROUP_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QC_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QC_GROUP_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QC_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    QC_GROUP_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QC_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    QC_GROUP_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QC_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    QC_GROUP_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QC_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    QC_GROUP_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QC_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QC_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: QC_GROUP_SORT_KEY_COMPLETED_ON = 6;
     */
    QC_GROUP_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: QC_GROUP_SORT_KEY_NAME = 10;
     */
    QC_GROUP_SORT_KEY_NAME = 10
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.QCGroupsServiceCreateRequest
 */
export declare class QCGroupsServiceCreateRequest extends Message<QCGroupsServiceCreateRequest> ***REMOVED***
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
     * The name of the qc group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The qc group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<QCGroupsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServiceCreateRequest;
    static equals(a: QCGroupsServiceCreateRequest | PlainMessage<QCGroupsServiceCreateRequest> | undefined, b: QCGroupsServiceCreateRequest | PlainMessage<QCGroupsServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.QCGroupsServiceUpdateRequest
 */
export declare class QCGroupsServiceUpdateRequest extends Message<QCGroupsServiceUpdateRequest> ***REMOVED***
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
     * The name of the qc group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The qc group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<QCGroupsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServiceUpdateRequest;
    static equals(a: QCGroupsServiceUpdateRequest | PlainMessage<QCGroupsServiceUpdateRequest> | undefined, b: QCGroupsServiceUpdateRequest | PlainMessage<QCGroupsServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.QCGroup
 */
export declare class QCGroup extends Message<QCGroup> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this qc group
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
     * The status of this qc group
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this qc group
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this qc group was marked as completed
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
     * The name of the qc group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The qc group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the qc group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated qc group params
     *
     * @generated from field: repeated Genesis.QCGroupItem list = 20;
     */
    list: QCGroupItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<QCGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroup;
    static equals(a: QCGroup | PlainMessage<QCGroup> | undefined, b: QCGroup | PlainMessage<QCGroup> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add a param to a qc group
 *
 * @generated from message Genesis.QCGroupsServiceItemCreateRequest
 */
export declare class QCGroupsServiceItemCreateRequest extends Message<QCGroupsServiceItemCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the qc group
     *
     * @generated from field: int64 qc_group_id = 10;
     */
    qcGroupId: bigint;
    /**
     * The ID of the qc param that is a part of the qc group
     *
     * @generated from field: int64 qc_param_id = 11;
     */
    qcParamId: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 12;
     */
    uomId: bigint;
    /**
     * The acceptable value type of the item
     *
     * @generated from field: Genesis.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE acceptable_value_type = 20;
     */
    acceptableValueType: QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE;
    /**
     * The acceptable value (in cents) in case the acceptable value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_acceptable_value = 21;
     */
    numberAcceptableValue: bigint;
    /**
     * The relative lower bound (in cents) of the number_acceptable_value that serves as a reference point for the test
     *
     * @generated from field: int64 number_relative_lower_bound = 22;
     */
    numberRelativeLowerBound: bigint;
    /**
     * The relative upper bound (in cents) of the number_acceptable_value that serves as a reference point for the test
     *
     * @generated from field: int64 number_relative_upper_bound = 23;
     */
    numberRelativeUpperBound: bigint;
    /**
     * The list of values that are acceptable in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_acceptable_values = 30;
     */
    textAcceptableValues: string[];
    /**
     * The list of values that are acceptable (but with deviation) in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_acceptable_values_with_deviation = 31;
     */
    textAcceptableValuesWithDeviation: string[];
    /**
     * The list of unacceptable values in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_unacceptable_values = 32;
     */
    textUnacceptableValues: string[];
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<QCGroupsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServiceItemCreateRequest;
    static equals(a: QCGroupsServiceItemCreateRequest | PlainMessage<QCGroupsServiceItemCreateRequest> | undefined, b: QCGroupsServiceItemCreateRequest | PlainMessage<QCGroupsServiceItemCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update a param in a qc group
 *
 * @generated from message Genesis.QCGroupsServiceItemUpdateRequest
 */
export declare class QCGroupsServiceItemUpdateRequest extends Message<QCGroupsServiceItemUpdateRequest> ***REMOVED***
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
     * The acceptable value type of the item
     *
     * @generated from field: Genesis.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE acceptable_value_type = 20;
     */
    acceptableValueType: QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE;
    /**
     * The acceptable value (in cents) in case the acceptable value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_acceptable_value = 21;
     */
    numberAcceptableValue: bigint;
    /**
     * The relative lower bound (in cents) of the number_acceptable_value that serves as a reference point for the test
     *
     * @generated from field: int64 number_relative_lower_bound = 22;
     */
    numberRelativeLowerBound: bigint;
    /**
     * The relative upper bound (in cents) of the number_acceptable_value that serves as a reference point for the test
     *
     * @generated from field: int64 number_relative_upper_bound = 23;
     */
    numberRelativeUpperBound: bigint;
    /**
     * The list of values that are acceptable in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_acceptable_values = 30;
     */
    textAcceptableValues: string[];
    /**
     * The list of values that are acceptable (but with deviation) in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_acceptable_values_with_deviation = 31;
     */
    textAcceptableValuesWithDeviation: string[];
    /**
     * The list of unacceptable values in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_unacceptable_values = 32;
     */
    textUnacceptableValues: string[];
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<QCGroupsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServiceItemUpdateRequest;
    static equals(a: QCGroupsServiceItemUpdateRequest | PlainMessage<QCGroupsServiceItemUpdateRequest> | undefined, b: QCGroupsServiceItemUpdateRequest | PlainMessage<QCGroupsServiceItemUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute a param associated to a qc group
 *
 * @generated from message Genesis.QCGroupItem
 */
export declare class QCGroupItem extends Message<QCGroupItem> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this qc group
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
     * Stores the ID of the qc group
     *
     * @generated from field: int64 qc_group_id = 10;
     */
    qcGroupId: bigint;
    /**
     * The ID of the qc param that is a part of the qc group
     *
     * @generated from field: int64 qc_param_id = 11;
     */
    qcParamId: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 12;
     */
    uomId: bigint;
    /**
     * The acceptable value type of the item
     *
     * @generated from field: Genesis.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE acceptable_value_type = 20;
     */
    acceptableValueType: QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE;
    /**
     * The acceptable value (in cents) in case the acceptable value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_acceptable_value = 21;
     */
    numberAcceptableValue: bigint;
    /**
     * The relative lower bound (in cents) of the number_acceptable_value that serves as a reference point for the test
     *
     * @generated from field: int64 number_relative_lower_bound = 22;
     */
    numberRelativeLowerBound: bigint;
    /**
     * The relative upper bound (in cents) of the number_acceptable_value that serves as a reference point for the test
     *
     * @generated from field: int64 number_relative_upper_bound = 23;
     */
    numberRelativeUpperBound: bigint;
    /**
     * The list of values that are acceptable in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_acceptable_values = 30;
     */
    textAcceptableValues: string[];
    /**
     * The list of values that are acceptable (but with deviation) in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_acceptable_values_with_deviation = 31;
     */
    textAcceptableValuesWithDeviation: string[];
    /**
     * The list of unacceptable values in case the acceptable value type is text-input or text-dropdown
     *
     * @generated from field: repeated string text_unacceptable_values = 32;
     */
    textUnacceptableValues: string[];
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<QCGroupItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupItem;
    static equals(a: QCGroupItem | PlainMessage<QCGroupItem> | undefined, b: QCGroupItem | PlainMessage<QCGroupItem> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of qc groups
 *
 * @generated from message Genesis.QCGroupsList
 */
export declare class QCGroupsList extends Message<QCGroupsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.QCGroup list = 1;
     */
    list: QCGroup[];
    constructor(data?: PartialMessage<QCGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsList;
    static equals(a: QCGroupsList | PlainMessage<QCGroupsList> | undefined, b: QCGroupsList | PlainMessage<QCGroupsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of qc group params
 *
 * @generated from message Genesis.QCGroupsItemsList
 */
export declare class QCGroupsItemsList extends Message<QCGroupsItemsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.QCGroupItem list = 1;
     */
    list: QCGroupItem[];
    constructor(data?: PartialMessage<QCGroupsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsItemsList;
    static equals(a: QCGroupsItemsList | PlainMessage<QCGroupsItemsList> | undefined, b: QCGroupsItemsList | PlainMessage<QCGroupsItemsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.QCGroupItemHistoryRequest
 */
export declare class QCGroupItemHistoryRequest extends Message<QCGroupItemHistoryRequest> ***REMOVED***
    /**
     * Stores the ID of the qc group
     *
     * @generated from field: int64 qc_group_id = 10;
     */
    qcGroupId: bigint;
    /**
     * The ID of the qc param that is a part of the qc group
     *
     * @generated from field: int64 qc_param_id = 11;
     */
    qcParamId: bigint;
    constructor(data?: PartialMessage<QCGroupItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupItemHistoryRequest;
    static equals(a: QCGroupItemHistoryRequest | PlainMessage<QCGroupItemHistoryRequest> | undefined, b: QCGroupItemHistoryRequest | PlainMessage<QCGroupItemHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.QCGroupsServicePaginationReq
 */
export declare class QCGroupsServicePaginationReq extends Message<QCGroupsServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.QC_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: QC_GROUP_SORT_KEY;
    /**
     * The status of this qc group
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<QCGroupsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServicePaginationReq;
    static equals(a: QCGroupsServicePaginationReq | PlainMessage<QCGroupsServicePaginationReq> | undefined, b: QCGroupsServicePaginationReq | PlainMessage<QCGroupsServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.QCGroupsServicePaginationResponse
 */
export declare class QCGroupsServicePaginationResponse extends Message<QCGroupsServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.QCGroup payload = 4;
     */
    payload: QCGroup[];
    constructor(data?: PartialMessage<QCGroupsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServicePaginationResponse;
    static equals(a: QCGroupsServicePaginationResponse | PlainMessage<QCGroupsServicePaginationResponse> | undefined, b: QCGroupsServicePaginationResponse | PlainMessage<QCGroupsServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.QCGroupsServiceEntityPaginationReq
 */
export declare class QCGroupsServiceEntityPaginationReq extends Message<QCGroupsServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.QC_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: QC_GROUP_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<QCGroupsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServiceEntityPaginationReq;
    static equals(a: QCGroupsServiceEntityPaginationReq | PlainMessage<QCGroupsServiceEntityPaginationReq> | undefined, b: QCGroupsServiceEntityPaginationReq | PlainMessage<QCGroupsServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.QCGroupsServiceFilterReq
 */
export declare class QCGroupsServiceFilterReq extends Message<QCGroupsServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.QC_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: QC_GROUP_SORT_KEY;
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
     * The status of this qc group
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
     * The name of the qc group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    constructor(data?: PartialMessage<QCGroupsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServiceFilterReq;
    static equals(a: QCGroupsServiceFilterReq | PlainMessage<QCGroupsServiceFilterReq> | undefined, b: QCGroupsServiceFilterReq | PlainMessage<QCGroupsServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.QCGroupsServiceSearchAllReq
 */
export declare class QCGroupsServiceSearchAllReq extends Message<QCGroupsServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.QC_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: QC_GROUP_SORT_KEY;
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
    constructor(data?: PartialMessage<QCGroupsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QCGroupsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QCGroupsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QCGroupsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QCGroupsServiceSearchAllReq;
    static equals(a: QCGroupsServiceSearchAllReq | PlainMessage<QCGroupsServiceSearchAllReq> | undefined, b: QCGroupsServiceSearchAllReq | PlainMessage<QCGroupsServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=qc_groups_pb.d.ts.map