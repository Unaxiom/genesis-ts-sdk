import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available input types for a goal item (with possible vbalues being number-absolute, number-percentage, text-input, text-dropdown)
 *
 * @generated from enum Genesis.GOAL_ITEM_INPUT_VALUE_TYPE
 */
export declare enum GOAL_ITEM_INPUT_VALUE_TYPE {
    /**
     * Input value type is an absolute number (with min and max defined in number_min_value and number_max_value)
     *
     * @generated from enum value: GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED = 0;
     */
    GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED = 0,
    /**
     * Input value type is a percentage
     *
     * @generated from enum value: GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_PERCENTAGE = 1;
     */
    GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_PERCENTAGE = 1,
    /**
     * Input value type is a textual input
     *
     * @generated from enum value: GOAL_ITEM_INPUT_VALUE_TYPE_TEXT_INPUT = 2;
     */
    GOAL_ITEM_INPUT_VALUE_TYPE_TEXT_INPUT = 2,
    /**
     * Input value type is a dropdown (from the values as defined in text_values)
     *
     * @generated from enum value: GOAL_ITEM_INPUT_VALUE_TYPE_TEXT_DROPDOWN = 3;
     */
    GOAL_ITEM_INPUT_VALUE_TYPE_TEXT_DROPDOWN = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.GOAL_SORT_KEY
 */
export declare enum GOAL_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOAL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOAL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOAL_SORT_KEY_CREATED_AT = 1;
     */
    GOAL_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOAL_SORT_KEY_MODIFIED_AT = 2;
     */
    GOAL_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOAL_SORT_KEY_APPROVED_ON = 3;
     */
    GOAL_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOAL_SORT_KEY_APPROVED_BY = 4;
     */
    GOAL_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOAL_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOAL_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: GOAL_SORT_KEY_COMPLETED_ON = 6;
     */
    GOAL_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: GOAL_SORT_KEY_REFERENCE_ID = 10;
     */
    GOAL_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: GOAL_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    GOAL_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.GoalsServiceCreateRequest
 */
export declare class GoalsServiceCreateRequest extends Message<GoalsServiceCreateRequest> {
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
     * The reference ID of the goal
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated user ID
     *
     * @generated from field: int64 user_id = 12;
     */
    userId: bigint;
    /**
     * The date from which the goal comes into force
     *
     * @generated from field: string start_date = 13;
     */
    startDate: string;
    /**
     * The date until which the goal remains into force
     *
     * @generated from field: string end_date = 14;
     */
    endDate: string;
    /**
     * The description of the goal
     *
     * @generated from field: string description = 20;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GoalsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceCreateRequest;
    static equals(a: GoalsServiceCreateRequest | PlainMessage<GoalsServiceCreateRequest> | undefined, b: GoalsServiceCreateRequest | PlainMessage<GoalsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.GoalsServiceUpdateRequest
 */
export declare class GoalsServiceUpdateRequest extends Message<GoalsServiceUpdateRequest> {
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
     * The reference ID of the goal
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The date from which the goal comes into force
     *
     * @generated from field: string start_date = 13;
     */
    startDate: string;
    /**
     * The date until which the goal remains into force
     *
     * @generated from field: string end_date = 14;
     */
    endDate: string;
    /**
     * The description of the goal
     *
     * @generated from field: string description = 20;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GoalsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceUpdateRequest;
    static equals(a: GoalsServiceUpdateRequest | PlainMessage<GoalsServiceUpdateRequest> | undefined, b: GoalsServiceUpdateRequest | PlainMessage<GoalsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Goal
 */
export declare class Goal extends Message<Goal> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this goal
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
     * The status of this goal
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this goal
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this goal was marked as completed
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
     * The reference ID of the goal
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
     * The associated user ID
     *
     * @generated from field: int64 user_id = 12;
     */
    userId: bigint;
    /**
     * The date from which the goal comes into force
     *
     * @generated from field: string start_date = 13;
     */
    startDate: string;
    /**
     * The date until which the goal remains into force
     *
     * @generated from field: string end_date = 14;
     */
    endDate: string;
    /**
     * The description of the goal
     *
     * @generated from field: string description = 20;
     */
    description: string;
    /**
     * The list of associated goal items
     *
     * @generated from field: repeated Genesis.GoalItem list = 30;
     */
    list: GoalItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Goal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Goal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Goal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Goal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Goal;
    static equals(a: Goal | PlainMessage<Goal> | undefined, b: Goal | PlainMessage<Goal> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a goal
 *
 * @generated from message Genesis.GoalsServiceItemCreateRequest
 */
export declare class GoalsServiceItemCreateRequest extends Message<GoalsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the goal ID
     *
     * @generated from field: int64 goal_id = 10;
     */
    goalId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores an optional label
     *
     * @generated from field: int64 label_id = 12;
     */
    labelId: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 13;
     */
    specifications: string;
    /**
     * The input value type of the item
     *
     * @generated from field: Genesis.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;
     */
    inputValueType: GOAL_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_min_value = 21;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_max_value = 22;
     */
    numberMaxValue: bigint;
    /**
     * The acceptable value of the item in case input_value_type is of number type
     *
     * @generated from field: int64 number_acceptable_value = 23;
     */
    numberAcceptableValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 30;
     */
    textValues: string[];
    /**
     * The acceptable value of the item in case input_value_type is of text type
     *
     * @generated from field: string text_acceptable_value = 31;
     */
    textAcceptableValue: string;
    constructor(data?: PartialMessage<GoalsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceItemCreateRequest;
    static equals(a: GoalsServiceItemCreateRequest | PlainMessage<GoalsServiceItemCreateRequest> | undefined, b: GoalsServiceItemCreateRequest | PlainMessage<GoalsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a goal
 *
 * @generated from message Genesis.GoalsServiceItemUpdateRequest
 */
export declare class GoalsServiceItemUpdateRequest extends Message<GoalsServiceItemUpdateRequest> {
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
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores an optional label
     *
     * @generated from field: int64 label_id = 12;
     */
    labelId: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 13;
     */
    specifications: string;
    /**
     * The input value type of the item
     *
     * @generated from field: Genesis.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;
     */
    inputValueType: GOAL_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_min_value = 21;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_max_value = 22;
     */
    numberMaxValue: bigint;
    /**
     * The acceptable value of the item in case input_value_type is of number type
     *
     * @generated from field: int64 number_acceptable_value = 23;
     */
    numberAcceptableValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 30;
     */
    textValues: string[];
    /**
     * The acceptable value of the item in case input_value_type is of text type
     *
     * @generated from field: string text_acceptable_value = 31;
     */
    textAcceptableValue: string;
    constructor(data?: PartialMessage<GoalsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceItemUpdateRequest;
    static equals(a: GoalsServiceItemUpdateRequest | PlainMessage<GoalsServiceItemUpdateRequest> | undefined, b: GoalsServiceItemUpdateRequest | PlainMessage<GoalsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a goal
 *
 * @generated from message Genesis.GoalItem
 */
export declare class GoalItem extends Message<GoalItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this goal
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
     * Stores the goal ID
     *
     * @generated from field: int64 goal_id = 10;
     */
    goalId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores an optional label
     *
     * @generated from field: int64 label_id = 12;
     */
    labelId: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 13;
     */
    specifications: string;
    /**
     * The input value type of the item
     *
     * @generated from field: Genesis.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;
     */
    inputValueType: GOAL_ITEM_INPUT_VALUE_TYPE;
    /**
     * The minimum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_min_value = 21;
     */
    numberMinValue: bigint;
    /**
     * The maximum value (in cents) in case the input value type is number-absolute or number-percentage
     *
     * @generated from field: int64 number_max_value = 22;
     */
    numberMaxValue: bigint;
    /**
     * The acceptable value of the item in case input_value_type is of number type
     *
     * @generated from field: int64 number_acceptable_value = 23;
     */
    numberAcceptableValue: bigint;
    /**
     * The possible values from which a user can choose in case the input type is text-dropdown
     *
     * @generated from field: repeated string text_values = 30;
     */
    textValues: string[];
    /**
     * The acceptable value of the item in case input_value_type is of text type
     *
     * @generated from field: string text_acceptable_value = 31;
     */
    textAcceptableValue: string;
    constructor(data?: PartialMessage<GoalItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalItem;
    static equals(a: GoalItem | PlainMessage<GoalItem> | undefined, b: GoalItem | PlainMessage<GoalItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goals
 *
 * @generated from message Genesis.GoalsList
 */
export declare class GoalsList extends Message<GoalsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.Goal list = 1;
     */
    list: Goal[];
    constructor(data?: PartialMessage<GoalsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsList;
    static equals(a: GoalsList | PlainMessage<GoalsList> | undefined, b: GoalsList | PlainMessage<GoalsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goal items
 *
 * @generated from message Genesis.GoalsItemsList
 */
export declare class GoalsItemsList extends Message<GoalsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.GoalItem list = 1;
     */
    list: GoalItem[];
    constructor(data?: PartialMessage<GoalsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsItemsList;
    static equals(a: GoalsItemsList | PlainMessage<GoalsItemsList> | undefined, b: GoalsItemsList | PlainMessage<GoalsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.GoalItemHistoryRequest
 */
export declare class GoalItemHistoryRequest extends Message<GoalItemHistoryRequest> {
    /**
     * Stores the goal ID
     *
     * @generated from field: int64 goal_id = 10;
     */
    goalId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<GoalItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalItemHistoryRequest;
    static equals(a: GoalItemHistoryRequest | PlainMessage<GoalItemHistoryRequest> | undefined, b: GoalItemHistoryRequest | PlainMessage<GoalItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.GoalsServicePaginationReq
 */
export declare class GoalsServicePaginationReq extends Message<GoalsServicePaginationReq> {
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
     * @generated from field: Genesis.GOAL_SORT_KEY sort_key = 5;
     */
    sortKey: GOAL_SORT_KEY;
    /**
     * The status of this goal
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<GoalsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServicePaginationReq;
    static equals(a: GoalsServicePaginationReq | PlainMessage<GoalsServicePaginationReq> | undefined, b: GoalsServicePaginationReq | PlainMessage<GoalsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.GoalsServicePaginationResponse
 */
export declare class GoalsServicePaginationResponse extends Message<GoalsServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.Goal payload = 4;
     */
    payload: Goal[];
    constructor(data?: PartialMessage<GoalsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServicePaginationResponse;
    static equals(a: GoalsServicePaginationResponse | PlainMessage<GoalsServicePaginationResponse> | undefined, b: GoalsServicePaginationResponse | PlainMessage<GoalsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.GoalsServiceEntityPaginationReq
 */
export declare class GoalsServiceEntityPaginationReq extends Message<GoalsServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.GOAL_SORT_KEY sort_key = 5;
     */
    sortKey: GOAL_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<GoalsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceEntityPaginationReq;
    static equals(a: GoalsServiceEntityPaginationReq | PlainMessage<GoalsServiceEntityPaginationReq> | undefined, b: GoalsServiceEntityPaginationReq | PlainMessage<GoalsServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.GoalsServiceFilterReq
 */
export declare class GoalsServiceFilterReq extends Message<GoalsServiceFilterReq> {
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
     * @generated from field: Genesis.GOAL_SORT_KEY sort_key = 5;
     */
    sortKey: GOAL_SORT_KEY;
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
     * The status of this goal
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
     * The reference ID of the goal
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
     * The associated user ID
     *
     * @generated from field: int64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<GoalsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceFilterReq;
    static equals(a: GoalsServiceFilterReq | PlainMessage<GoalsServiceFilterReq> | undefined, b: GoalsServiceFilterReq | PlainMessage<GoalsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.GoalsServiceSearchAllReq
 */
export declare class GoalsServiceSearchAllReq extends Message<GoalsServiceSearchAllReq> {
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
     * @generated from field: Genesis.GOAL_SORT_KEY sort_key = 5;
     */
    sortKey: GOAL_SORT_KEY;
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
     * The associated user ID
     *
     * @generated from field: int64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<GoalsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoalsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoalsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoalsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoalsServiceSearchAllReq;
    static equals(a: GoalsServiceSearchAllReq | PlainMessage<GoalsServiceSearchAllReq> | undefined, b: GoalsServiceSearchAllReq | PlainMessage<GoalsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=goals_pb.d.ts.map