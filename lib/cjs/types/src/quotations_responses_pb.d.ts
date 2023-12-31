import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.QUOTATION_RESPONSE_SORT_KEY
 */
export declare enum QUOTATION_RESPONSE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUOTATION_RESPONSE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_CREATED_AT = 1;
     */
    QUOTATION_RESPONSE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_MODIFIED_AT = 2;
     */
    QUOTATION_RESPONSE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_APPROVED_ON = 3;
     */
    QUOTATION_RESPONSE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_APPROVED_BY = 4;
     */
    QUOTATION_RESPONSE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUOTATION_RESPONSE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_COMPLETED_ON = 6;
     */
    QUOTATION_RESPONSE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_REFERENCE_ID = 10;
     */
    QUOTATION_RESPONSE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: QUOTATION_RESPONSE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    QUOTATION_RESPONSE_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the available sort keys for sorting quotation response items
 *
 * @generated from enum Genesis.QUOTATION_RESPONSE_ITEM_SORT_KEY
 */
export declare enum QUOTATION_RESPONSE_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QUOTATION_RESPONSE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUOTATION_RESPONSE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QUOTATION_RESPONSE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    QUOTATION_RESPONSE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QUOTATION_RESPONSE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    QUOTATION_RESPONSE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QUOTATION_RESPONSE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    QUOTATION_RESPONSE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QUOTATION_RESPONSE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    QUOTATION_RESPONSE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QUOTATION_RESPONSE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUOTATION_RESPONSE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.QuotationsResponsesServiceCreateRequest
 */
export declare class QuotationsResponsesServiceCreateRequest extends Message<QuotationsResponsesServiceCreateRequest> {
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
     * The reference ID of the quotation response
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated quotation request
     *
     * @generated from field: int64 quotation_request_id = 12;
     */
    quotationRequestId: bigint;
    /**
     * The associated party type
     *
     * @generated from field: string ref_from = 13;
     */
    refFrom: string;
    /**
     * The associated party ID
     *
     * @generated from field: int64 ref_id = 14;
     */
    refId: bigint;
    /**
     * The associated currency
     *
     * @generated from field: int64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the quotation response
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
    constructor(data?: PartialMessage<QuotationsResponsesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceCreateRequest;
    static equals(a: QuotationsResponsesServiceCreateRequest | PlainMessage<QuotationsResponsesServiceCreateRequest> | undefined, b: QuotationsResponsesServiceCreateRequest | PlainMessage<QuotationsResponsesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.QuotationsResponsesServiceUpdateRequest
 */
export declare class QuotationsResponsesServiceUpdateRequest extends Message<QuotationsResponsesServiceUpdateRequest> {
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
     * The reference ID of the quotation response
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated currency
     *
     * @generated from field: int64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the quotation response
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
    constructor(data?: PartialMessage<QuotationsResponsesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceUpdateRequest;
    static equals(a: QuotationsResponsesServiceUpdateRequest | PlainMessage<QuotationsResponsesServiceUpdateRequest> | undefined, b: QuotationsResponsesServiceUpdateRequest | PlainMessage<QuotationsResponsesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.QuotationResponse
 */
export declare class QuotationResponse extends Message<QuotationResponse> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this quotation response
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
     * The status of this quotation response
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this quotation response
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this quotation response was marked as completed
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
     * The reference ID of the quotation response
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
     * The associated quotation request
     *
     * @generated from field: int64 quotation_request_id = 12;
     */
    quotationRequestId: bigint;
    /**
     * The associated party type
     *
     * @generated from field: string ref_from = 13;
     */
    refFrom: string;
    /**
     * The associated party ID
     *
     * @generated from field: int64 ref_id = 14;
     */
    refId: bigint;
    /**
     * The associated currency
     *
     * @generated from field: int64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the quotation response
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of associated quotation response items
     *
     * @generated from field: repeated Genesis.QuotationResponseItem list = 20;
     */
    list: QuotationResponseItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<QuotationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationResponse;
    static equals(a: QuotationResponse | PlainMessage<QuotationResponse> | undefined, b: QuotationResponse | PlainMessage<QuotationResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a quotation response
 *
 * @generated from message Genesis.QuotationsResponsesServiceItemCreateRequest
 */
export declare class QuotationsResponsesServiceItemCreateRequest extends Message<QuotationsResponsesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * Stores the quotation response ID
     *
     * @generated from field: int64 quotation_response_id = 10;
     */
    quotationResponseId: bigint;
    /**
     * Stores the corresponding item ID of the item from the quotation request
     *
     * @generated from field: int64 quotation_request_item_id = 11;
     */
    quotationRequestItemId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 13;
     */
    hsnSacCode: string;
    /**
     * The internal unit of material
     *
     * @generated from field: int64 uom_id = 14;
     */
    uomId: bigint;
    /**
     * The internal quantity offered (in cents)
     *
     * @generated from field: int64 internal_quantity = 15;
     */
    internalQuantity: bigint;
    /**
     * The vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 16;
     */
    vendorUomId: bigint;
    /**
     * The quantity offered in vendor's unit of material (in cents)
     *
     * @generated from field: int64 vendor_quantity = 17;
     */
    vendorQuantity: bigint;
    /**
     * The unit price per vendor's unit of material
     *
     * @generated from field: int64 vendor_unit_price = 18;
     */
    vendorUnitPrice: bigint;
    /**
     * The associated tax group ID
     *
     * @generated from field: int64 tax_group_id = 19;
     */
    taxGroupId: bigint;
    /**
     * The delivery time in days (in cents)
     *
     * @generated from field: int64 delivery_time_in_days = 20;
     */
    deliveryTimeInDays: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationsResponsesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceItemCreateRequest;
    static equals(a: QuotationsResponsesServiceItemCreateRequest | PlainMessage<QuotationsResponsesServiceItemCreateRequest> | undefined, b: QuotationsResponsesServiceItemCreateRequest | PlainMessage<QuotationsResponsesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a quotation response
 *
 * @generated from message Genesis.QuotationsResponsesServiceItemUpdateRequest
 */
export declare class QuotationsResponsesServiceItemUpdateRequest extends Message<QuotationsResponsesServiceItemUpdateRequest> {
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
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 13;
     */
    hsnSacCode: string;
    /**
     * The internal unit of material
     *
     * @generated from field: int64 uom_id = 14;
     */
    uomId: bigint;
    /**
     * The internal quantity offered (in cents)
     *
     * @generated from field: int64 internal_quantity = 15;
     */
    internalQuantity: bigint;
    /**
     * The vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 16;
     */
    vendorUomId: bigint;
    /**
     * The quantity offered in vendor's unit of material (in cents)
     *
     * @generated from field: int64 vendor_quantity = 17;
     */
    vendorQuantity: bigint;
    /**
     * The unit price per vendor's unit of material
     *
     * @generated from field: int64 vendor_unit_price = 18;
     */
    vendorUnitPrice: bigint;
    /**
     * The associated tax group ID
     *
     * @generated from field: int64 tax_group_id = 19;
     */
    taxGroupId: bigint;
    /**
     * The delivery time in days (in cents)
     *
     * @generated from field: int64 delivery_time_in_days = 20;
     */
    deliveryTimeInDays: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationsResponsesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceItemUpdateRequest;
    static equals(a: QuotationsResponsesServiceItemUpdateRequest | PlainMessage<QuotationsResponsesServiceItemUpdateRequest> | undefined, b: QuotationsResponsesServiceItemUpdateRequest | PlainMessage<QuotationsResponsesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a quotation response
 *
 * @generated from message Genesis.QuotationResponseItem
 */
export declare class QuotationResponseItem extends Message<QuotationResponseItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this quotation response
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
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * Stores the quotation response ID
     *
     * @generated from field: int64 quotation_response_id = 10;
     */
    quotationResponseId: bigint;
    /**
     * Stores the corresponding item ID of the item from the quotation request
     *
     * @generated from field: int64 quotation_request_item_id = 11;
     */
    quotationRequestItemId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 13;
     */
    hsnSacCode: string;
    /**
     * The internal unit of material
     *
     * @generated from field: int64 uom_id = 14;
     */
    uomId: bigint;
    /**
     * The internal quantity offered (in cents)
     *
     * @generated from field: int64 internal_quantity = 15;
     */
    internalQuantity: bigint;
    /**
     * The vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 16;
     */
    vendorUomId: bigint;
    /**
     * The quantity offered in vendor's unit of material (in cents)
     *
     * @generated from field: int64 vendor_quantity = 17;
     */
    vendorQuantity: bigint;
    /**
     * The unit price per vendor's unit of material
     *
     * @generated from field: int64 vendor_unit_price = 18;
     */
    vendorUnitPrice: bigint;
    /**
     * The associated tax group ID
     *
     * @generated from field: int64 tax_group_id = 19;
     */
    taxGroupId: bigint;
    /**
     * The delivery time in days (in cents)
     *
     * @generated from field: int64 delivery_time_in_days = 20;
     */
    deliveryTimeInDays: bigint;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationResponseItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationResponseItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationResponseItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationResponseItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationResponseItem;
    static equals(a: QuotationResponseItem | PlainMessage<QuotationResponseItem> | undefined, b: QuotationResponseItem | PlainMessage<QuotationResponseItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of quotations responses
 *
 * @generated from message Genesis.QuotationsResponsesList
 */
export declare class QuotationsResponsesList extends Message<QuotationsResponsesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.QuotationResponse list = 1;
     */
    list: QuotationResponse[];
    constructor(data?: PartialMessage<QuotationsResponsesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesList;
    static equals(a: QuotationsResponsesList | PlainMessage<QuotationsResponsesList> | undefined, b: QuotationsResponsesList | PlainMessage<QuotationsResponsesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of quotation response items
 *
 * @generated from message Genesis.QuotationsResponsesItemsList
 */
export declare class QuotationsResponsesItemsList extends Message<QuotationsResponsesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.QuotationResponseItem list = 1;
     */
    list: QuotationResponseItem[];
    constructor(data?: PartialMessage<QuotationsResponsesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesItemsList;
    static equals(a: QuotationsResponsesItemsList | PlainMessage<QuotationsResponsesItemsList> | undefined, b: QuotationsResponsesItemsList | PlainMessage<QuotationsResponsesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.QuotationResponseItemHistoryRequest
 */
export declare class QuotationResponseItemHistoryRequest extends Message<QuotationResponseItemHistoryRequest> {
    /**
     * Stores the quotation response ID
     *
     * @generated from field: int64 quotation_response_id = 10;
     */
    quotationResponseId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<QuotationResponseItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationResponseItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationResponseItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationResponseItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationResponseItemHistoryRequest;
    static equals(a: QuotationResponseItemHistoryRequest | PlainMessage<QuotationResponseItemHistoryRequest> | undefined, b: QuotationResponseItemHistoryRequest | PlainMessage<QuotationResponseItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination response to retrieve records
 *
 * @generated from message Genesis.QuotationsResponsesServicePaginationReq
 */
export declare class QuotationsResponsesServicePaginationReq extends Message<QuotationsResponsesServicePaginationReq> {
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
     * @generated from field: Genesis.QUOTATION_RESPONSE_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_RESPONSE_SORT_KEY;
    /**
     * The status of this quotation response
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<QuotationsResponsesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServicePaginationReq;
    static equals(a: QuotationsResponsesServicePaginationReq | PlainMessage<QuotationsResponsesServicePaginationReq> | undefined, b: QuotationsResponsesServicePaginationReq | PlainMessage<QuotationsResponsesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination response
 *
 * @generated from message Genesis.QuotationsResponsesServicePaginationResponse
 */
export declare class QuotationsResponsesServicePaginationResponse extends Message<QuotationsResponsesServicePaginationResponse> {
    /**
     * The number of records in this payload
     *
     * @generated from field: int64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination response
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
     * @generated from field: repeated Genesis.QuotationResponse payload = 4;
     */
    payload: QuotationResponse[];
    constructor(data?: PartialMessage<QuotationsResponsesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServicePaginationResponse;
    static equals(a: QuotationsResponsesServicePaginationResponse | PlainMessage<QuotationsResponsesServicePaginationResponse> | undefined, b: QuotationsResponsesServicePaginationResponse | PlainMessage<QuotationsResponsesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination response to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.QuotationsResponsesServiceEntityPaginationReq
 */
export declare class QuotationsResponsesServiceEntityPaginationReq extends Message<QuotationsResponsesServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.QUOTATION_RESPONSE_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_RESPONSE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<QuotationsResponsesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceEntityPaginationReq;
    static equals(a: QuotationsResponsesServiceEntityPaginationReq | PlainMessage<QuotationsResponsesServiceEntityPaginationReq> | undefined, b: QuotationsResponsesServiceEntityPaginationReq | PlainMessage<QuotationsResponsesServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base response payload of a filter search
 *
 * @generated from message Genesis.QuotationsResponsesServiceFilterReq
 */
export declare class QuotationsResponsesServiceFilterReq extends Message<QuotationsResponsesServiceFilterReq> {
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
     * @generated from field: Genesis.QUOTATION_RESPONSE_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_RESPONSE_SORT_KEY;
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
     * The status of this quotation response
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
     * The reference ID of the quotation response
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
     * The associated quotation request
     *
     * @generated from field: int64 quotation_request_id = 22;
     */
    quotationRequestId: bigint;
    /**
     * The associated party type
     *
     * @generated from field: string ref_from = 23;
     */
    refFrom: string;
    /**
     * The associated party ID
     *
     * @generated from field: int64 ref_id = 24;
     */
    refId: bigint;
    constructor(data?: PartialMessage<QuotationsResponsesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceFilterReq;
    static equals(a: QuotationsResponsesServiceFilterReq | PlainMessage<QuotationsResponsesServiceFilterReq> | undefined, b: QuotationsResponsesServiceFilterReq | PlainMessage<QuotationsResponsesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the response payload for performing a generic search operation on records
 *
 * @generated from message Genesis.QuotationsResponsesServiceSearchAllReq
 */
export declare class QuotationsResponsesServiceSearchAllReq extends Message<QuotationsResponsesServiceSearchAllReq> {
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
     * @generated from field: Genesis.QUOTATION_RESPONSE_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_RESPONSE_SORT_KEY;
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
    constructor(data?: PartialMessage<QuotationsResponsesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceSearchAllReq;
    static equals(a: QuotationsResponsesServiceSearchAllReq | PlainMessage<QuotationsResponsesServiceSearchAllReq> | undefined, b: QuotationsResponsesServiceSearchAllReq | PlainMessage<QuotationsResponsesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to filter quotation response items
 *
 * @generated from message Genesis.QuotationsResponsesServiceItemsFilterReq
 */
export declare class QuotationsResponsesServiceItemsFilterReq extends Message<QuotationsResponsesServiceItemsFilterReq> {
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
     * @generated from field: Genesis.QUOTATION_RESPONSE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_RESPONSE_ITEM_SORT_KEY;
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
     * Stores the quotation response ID
     *
     * @generated from field: int64 quotation_response_id = 20;
     */
    quotationResponseId: bigint;
    /**
     * Stores the corresponding item ID of the item from the quotation request
     *
     * @generated from field: int64 quotation_request_item_id = 21;
     */
    quotationRequestItemId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 22;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 23;
     */
    hsnSacCode: string;
    /**
     * The internal unit of material
     *
     * @generated from field: int64 uom_id = 24;
     */
    uomId: bigint;
    /**
     * The vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 26;
     */
    vendorUomId: bigint;
    /**
     * The associated tax group ID
     *
     * @generated from field: int64 tax_group_id = 29;
     */
    taxGroupId: bigint;
    constructor(data?: PartialMessage<QuotationsResponsesServiceItemsFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsResponsesServiceItemsFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsResponsesServiceItemsFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceItemsFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsResponsesServiceItemsFilterReq;
    static equals(a: QuotationsResponsesServiceItemsFilterReq | PlainMessage<QuotationsResponsesServiceItemsFilterReq> | undefined, b: QuotationsResponsesServiceItemsFilterReq | PlainMessage<QuotationsResponsesServiceItemsFilterReq> | undefined): boolean;
}
//# sourceMappingURL=quotations_responses_pb.d.ts.map