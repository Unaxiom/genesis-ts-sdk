import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.REPLACEABLE_INDENT_SORT_KEY
 */
export declare enum REPLACEABLE_INDENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_CREATED_AT = 1;
     */
    REPLACEABLE_INDENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_MODIFIED_AT = 2;
     */
    REPLACEABLE_INDENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_APPROVED_ON = 3;
     */
    REPLACEABLE_INDENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_APPROVED_BY = 4;
     */
    REPLACEABLE_INDENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    REPLACEABLE_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_COMPLETED_ON = 6;
     */
    REPLACEABLE_INDENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_REFERENCE_ID = 10;
     */
    REPLACEABLE_INDENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    REPLACEABLE_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: REPLACEABLE_INDENT_SORT_KEY_LOCATION_ID = 12;
     */
    REPLACEABLE_INDENT_SORT_KEY_LOCATION_ID = 12
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.ReplaceableIndentsServiceCreateRequest
 */
export declare class ReplaceableIndentsServiceCreateRequest extends Message<ReplaceableIndentsServiceCreateRequest> {
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
     * The reference ID of the replaceable indent
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the location
     *
     * @generated from field: int64 location_id = 12;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 13;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: int64 family_id = 14;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 15;
     */
    itemHash: string;
    /**
     * The description of the replaceable indent
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ReplaceableIndentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceCreateRequest;
    static equals(a: ReplaceableIndentsServiceCreateRequest | PlainMessage<ReplaceableIndentsServiceCreateRequest> | undefined, b: ReplaceableIndentsServiceCreateRequest | PlainMessage<ReplaceableIndentsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.ReplaceableIndentsServiceUpdateRequest
 */
export declare class ReplaceableIndentsServiceUpdateRequest extends Message<ReplaceableIndentsServiceUpdateRequest> {
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
     * The reference ID of the replaceable indent
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 13;
     */
    supervisor: string;
    /**
     * The description of the replaceable indent
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ReplaceableIndentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceUpdateRequest;
    static equals(a: ReplaceableIndentsServiceUpdateRequest | PlainMessage<ReplaceableIndentsServiceUpdateRequest> | undefined, b: ReplaceableIndentsServiceUpdateRequest | PlainMessage<ReplaceableIndentsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Genesis.ReplaceableIndentsServiceAutofillRequest
 */
export declare class ReplaceableIndentsServiceAutofillRequest extends Message<ReplaceableIndentsServiceAutofillRequest> {
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
     * Denotes if all the equation dependencies (if applicable) should also be automatically added to the replaceable indent
     *
     * @generated from field: bool populate_using_equation_dependencies = 3;
     */
    populateUsingEquationDependencies: boolean;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceAutofillRequest;
    static equals(a: ReplaceableIndentsServiceAutofillRequest | PlainMessage<ReplaceableIndentsServiceAutofillRequest> | undefined, b: ReplaceableIndentsServiceAutofillRequest | PlainMessage<ReplaceableIndentsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.ReplaceableIndent
 */
export declare class ReplaceableIndent extends Message<ReplaceableIndent> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this replaceable indent
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
     * The status of this replaceable indent
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this replaceable indent
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this replaceable indent was marked as completed
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
     * The reference ID of the replaceable indent
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 12;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 13;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: int64 family_id = 14;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 15;
     */
    itemHash: string;
    /**
     * The description of the replaceable indent
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of associated replaceable indent items
     *
     * @generated from field: repeated Genesis.ReplaceableIndentItem list = 30;
     */
    list: ReplaceableIndentItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 40;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<ReplaceableIndent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndent;
    static equals(a: ReplaceableIndent | PlainMessage<ReplaceableIndent> | undefined, b: ReplaceableIndent | PlainMessage<ReplaceableIndent> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a replaceable indent
 *
 * @generated from message Genesis.ReplaceableIndentsServiceItemCreateRequest
 */
export declare class ReplaceableIndentsServiceItemCreateRequest extends Message<ReplaceableIndentsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the replaceable indent ID
     *
     * @generated from field: int64 replaceable_indent_id = 10;
     */
    replaceableIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity required
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceItemCreateRequest;
    static equals(a: ReplaceableIndentsServiceItemCreateRequest | PlainMessage<ReplaceableIndentsServiceItemCreateRequest> | undefined, b: ReplaceableIndentsServiceItemCreateRequest | PlainMessage<ReplaceableIndentsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a replaceable indent
 *
 * @generated from message Genesis.ReplaceableIndentsServiceItemUpdateRequest
 */
export declare class ReplaceableIndentsServiceItemUpdateRequest extends Message<ReplaceableIndentsServiceItemUpdateRequest> {
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
     * The quantity required
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceItemUpdateRequest;
    static equals(a: ReplaceableIndentsServiceItemUpdateRequest | PlainMessage<ReplaceableIndentsServiceItemUpdateRequest> | undefined, b: ReplaceableIndentsServiceItemUpdateRequest | PlainMessage<ReplaceableIndentsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a replaceable indent
 *
 * @generated from message Genesis.ReplaceableIndentItem
 */
export declare class ReplaceableIndentItem extends Message<ReplaceableIndentItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this replaceable indent
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
     * Stores the replaceable indent ID
     *
     * @generated from field: int64 replaceable_indent_id = 10;
     */
    replaceableIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity required
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentItem;
    static equals(a: ReplaceableIndentItem | PlainMessage<ReplaceableIndentItem> | undefined, b: ReplaceableIndentItem | PlainMessage<ReplaceableIndentItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of replaceable indents
 *
 * @generated from message Genesis.ReplaceableIndentsList
 */
export declare class ReplaceableIndentsList extends Message<ReplaceableIndentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.ReplaceableIndent list = 1;
     */
    list: ReplaceableIndent[];
    constructor(data?: PartialMessage<ReplaceableIndentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsList;
    static equals(a: ReplaceableIndentsList | PlainMessage<ReplaceableIndentsList> | undefined, b: ReplaceableIndentsList | PlainMessage<ReplaceableIndentsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of replaceable indent items
 *
 * @generated from message Genesis.ReplaceableIndentsItemsList
 */
export declare class ReplaceableIndentsItemsList extends Message<ReplaceableIndentsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.ReplaceableIndentItem list = 1;
     */
    list: ReplaceableIndentItem[];
    constructor(data?: PartialMessage<ReplaceableIndentsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsItemsList;
    static equals(a: ReplaceableIndentsItemsList | PlainMessage<ReplaceableIndentsItemsList> | undefined, b: ReplaceableIndentsItemsList | PlainMessage<ReplaceableIndentsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.ReplaceableIndentItemHistoryRequest
 */
export declare class ReplaceableIndentItemHistoryRequest extends Message<ReplaceableIndentItemHistoryRequest> {
    /**
     * Stores the replaceable indent ID
     *
     * @generated from field: int64 replaceable_indent_id = 10;
     */
    replaceableIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentItemHistoryRequest;
    static equals(a: ReplaceableIndentItemHistoryRequest | PlainMessage<ReplaceableIndentItemHistoryRequest> | undefined, b: ReplaceableIndentItemHistoryRequest | PlainMessage<ReplaceableIndentItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective replaceable indent item
 *
 * @generated from message Genesis.ReplaceableIndentItemProspectiveInfoRequest
 */
export declare class ReplaceableIndentItemProspectiveInfoRequest extends Message<ReplaceableIndentItemProspectiveInfoRequest> {
    /**
     * Stores the replaceable indent ID
     *
     * @generated from field: int64 replaceable_indent_id = 10;
     */
    replaceableIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ReplaceableIndentItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentItemProspectiveInfoRequest;
    static equals(a: ReplaceableIndentItemProspectiveInfoRequest | PlainMessage<ReplaceableIndentItemProspectiveInfoRequest> | undefined, b: ReplaceableIndentItemProspectiveInfoRequest | PlainMessage<ReplaceableIndentItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.ReplaceableIndentsServicePaginationReq
 */
export declare class ReplaceableIndentsServicePaginationReq extends Message<ReplaceableIndentsServicePaginationReq> {
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
     * @generated from field: Genesis.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
    /**
     * The status of this replaceable indent
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ReplaceableIndentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginationReq;
    static equals(a: ReplaceableIndentsServicePaginationReq | PlainMessage<ReplaceableIndentsServicePaginationReq> | undefined, b: ReplaceableIndentsServicePaginationReq | PlainMessage<ReplaceableIndentsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.ReplaceableIndentsServicePaginationResponse
 */
export declare class ReplaceableIndentsServicePaginationResponse extends Message<ReplaceableIndentsServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.ReplaceableIndent payload = 4;
     */
    payload: ReplaceableIndent[];
    constructor(data?: PartialMessage<ReplaceableIndentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServicePaginationResponse;
    static equals(a: ReplaceableIndentsServicePaginationResponse | PlainMessage<ReplaceableIndentsServicePaginationResponse> | undefined, b: ReplaceableIndentsServicePaginationResponse | PlainMessage<ReplaceableIndentsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.ReplaceableIndentsServiceEntityPaginationReq
 */
export declare class ReplaceableIndentsServiceEntityPaginationReq extends Message<ReplaceableIndentsServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceEntityPaginationReq;
    static equals(a: ReplaceableIndentsServiceEntityPaginationReq | PlainMessage<ReplaceableIndentsServiceEntityPaginationReq> | undefined, b: ReplaceableIndentsServiceEntityPaginationReq | PlainMessage<ReplaceableIndentsServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.ReplaceableIndentsServiceFilterReq
 */
export declare class ReplaceableIndentsServiceFilterReq extends Message<ReplaceableIndentsServiceFilterReq> {
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
     * @generated from field: Genesis.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
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
     * The status of this replaceable indent
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
     * The reference ID of the replaceable indent
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 23;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 24;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: int64 family_id = 25;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 26;
     */
    itemHash: string;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceFilterReq;
    static equals(a: ReplaceableIndentsServiceFilterReq | PlainMessage<ReplaceableIndentsServiceFilterReq> | undefined, b: ReplaceableIndentsServiceFilterReq | PlainMessage<ReplaceableIndentsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.ReplaceableIndentsServiceSearchAllReq
 */
export declare class ReplaceableIndentsServiceSearchAllReq extends Message<ReplaceableIndentsServiceSearchAllReq> {
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
     * @generated from field: Genesis.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: REPLACEABLE_INDENT_SORT_KEY;
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 23;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 24;
     */
    supervisor: string;
    /**
     * The ID of the family
     *
     * @generated from field: int64 family_id = 25;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 26;
     */
    itemHash: string;
    constructor(data?: PartialMessage<ReplaceableIndentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReplaceableIndentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceableIndentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceableIndentsServiceSearchAllReq;
    static equals(a: ReplaceableIndentsServiceSearchAllReq | PlainMessage<ReplaceableIndentsServiceSearchAllReq> | undefined, b: ReplaceableIndentsServiceSearchAllReq | PlainMessage<ReplaceableIndentsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=replaceable_indents_pb.d.ts.map