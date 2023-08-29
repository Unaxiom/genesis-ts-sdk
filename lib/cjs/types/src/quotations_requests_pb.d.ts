import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.QUOTATION_REQUEST_SORT_KEY
 */
export declare enum QUOTATION_REQUEST_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_CREATED_AT = 1;
     */
    QUOTATION_REQUEST_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_MODIFIED_AT = 2;
     */
    QUOTATION_REQUEST_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_APPROVED_ON = 3;
     */
    QUOTATION_REQUEST_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_APPROVED_BY = 4;
     */
    QUOTATION_REQUEST_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUOTATION_REQUEST_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_COMPLETED_ON = 6;
     */
    QUOTATION_REQUEST_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_REFERENCE_ID = 10;
     */
    QUOTATION_REQUEST_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    QUOTATION_REQUEST_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the priority
     *
     * @generated from enum value: QUOTATION_REQUEST_SORT_KEY_PRIORITY = 14;
     */
    QUOTATION_REQUEST_SORT_KEY_PRIORITY = 14
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.QuotationsRequestsServiceCreateRequest
 */
export declare class QuotationsRequestsServiceCreateRequest extends Message<QuotationsRequestsServiceCreateRequest> {
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
     * The reference ID of the quotation request
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated purchase enquiry
     *
     * @generated from field: int64 purchase_enquiry_id = 12;
     */
    purchaseEnquiryId: bigint;
    /**
     * The date until which quotations responses can be sent
     *
     * @generated from field: string last_date = 13;
     */
    lastDate: string;
    /**
     * The associated currency
     *
     * @generated from field: int64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The number of days until which the quotation request is valid
     *
     * @generated from field: int64 renewal_period = 15;
     */
    renewalPeriod: bigint;
    /**
     * The priority of the quotation request. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 16;
     */
    priority: string;
    /**
     * The description of the quotation request
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
    constructor(data?: PartialMessage<QuotationsRequestsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceCreateRequest;
    static equals(a: QuotationsRequestsServiceCreateRequest | PlainMessage<QuotationsRequestsServiceCreateRequest> | undefined, b: QuotationsRequestsServiceCreateRequest | PlainMessage<QuotationsRequestsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.QuotationsRequestsServiceUpdateRequest
 */
export declare class QuotationsRequestsServiceUpdateRequest extends Message<QuotationsRequestsServiceUpdateRequest> {
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
     * The reference ID of the quotation request
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The date until which quotations responses can be sent
     *
     * @generated from field: string last_date = 13;
     */
    lastDate: string;
    /**
     * The associated currency
     *
     * @generated from field: int64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The number of days until which the quotation request is valid
     *
     * @generated from field: int64 renewal_period = 15;
     */
    renewalPeriod: bigint;
    /**
     * The priority of the quotation request. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 16;
     */
    priority: string;
    /**
     * The description of the quotation request
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
    constructor(data?: PartialMessage<QuotationsRequestsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceUpdateRequest;
    static equals(a: QuotationsRequestsServiceUpdateRequest | PlainMessage<QuotationsRequestsServiceUpdateRequest> | undefined, b: QuotationsRequestsServiceUpdateRequest | PlainMessage<QuotationsRequestsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Genesis.QuotationsRequestsServiceAutofillRequest
 */
export declare class QuotationsRequestsServiceAutofillRequest extends Message<QuotationsRequestsServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<QuotationsRequestsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceAutofillRequest;
    static equals(a: QuotationsRequestsServiceAutofillRequest | PlainMessage<QuotationsRequestsServiceAutofillRequest> | undefined, b: QuotationsRequestsServiceAutofillRequest | PlainMessage<QuotationsRequestsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.QuotationRequest
 */
export declare class QuotationRequest extends Message<QuotationRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this quotation request
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
     * The status of this quotation request
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this quotation request
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this quotation request was marked as completed
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
     * The reference ID of the quotation request
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
     * The associated purchase enquiry
     *
     * @generated from field: int64 purchase_enquiry_id = 12;
     */
    purchaseEnquiryId: bigint;
    /**
     * The date until which quotations responses can be sent
     *
     * @generated from field: string last_date = 13;
     */
    lastDate: string;
    /**
     * The associated currency
     *
     * @generated from field: int64 currency_id = 14;
     */
    currencyId: bigint;
    /**
     * The number of days until which the quotation request is valid
     *
     * @generated from field: int64 renewal_period = 15;
     */
    renewalPeriod: bigint;
    /**
     * The priority of the quotation request. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 16;
     */
    priority: string;
    /**
     * The description of the quotation request
     *
     * @generated from field: string description = 17;
     */
    description: string;
    /**
     * The list of associated quotation request items
     *
     * @generated from field: repeated Genesis.QuotationRequestItem list = 20;
     */
    list: QuotationRequestItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<QuotationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationRequest;
    static equals(a: QuotationRequest | PlainMessage<QuotationRequest> | undefined, b: QuotationRequest | PlainMessage<QuotationRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a quotation request
 *
 * @generated from message Genesis.QuotationsRequestsServiceItemCreateRequest
 */
export declare class QuotationsRequestsServiceItemCreateRequest extends Message<QuotationsRequestsServiceItemCreateRequest> {
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
     * Stores the quotation request ID
     *
     * @generated from field: int64 quotation_request_id = 10;
     */
    quotationRequestId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 12;
     */
    hsnSacCode: string;
    /**
     * The min price (in cents)
     *
     * @generated from field: int64 baseline_price = 13;
     */
    baselinePrice: bigint;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: int64 quantity = 14;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 16;
     */
    deliveryDate: string;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 17;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationsRequestsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceItemCreateRequest;
    static equals(a: QuotationsRequestsServiceItemCreateRequest | PlainMessage<QuotationsRequestsServiceItemCreateRequest> | undefined, b: QuotationsRequestsServiceItemCreateRequest | PlainMessage<QuotationsRequestsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a quotation request
 *
 * @generated from message Genesis.QuotationsRequestsServiceItemUpdateRequest
 */
export declare class QuotationsRequestsServiceItemUpdateRequest extends Message<QuotationsRequestsServiceItemUpdateRequest> {
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
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 12;
     */
    hsnSacCode: string;
    /**
     * The min price (in cents)
     *
     * @generated from field: int64 baseline_price = 13;
     */
    baselinePrice: bigint;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: int64 quantity = 14;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 16;
     */
    deliveryDate: string;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 17;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationsRequestsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceItemUpdateRequest;
    static equals(a: QuotationsRequestsServiceItemUpdateRequest | PlainMessage<QuotationsRequestsServiceItemUpdateRequest> | undefined, b: QuotationsRequestsServiceItemUpdateRequest | PlainMessage<QuotationsRequestsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a quotation request
 *
 * @generated from message Genesis.QuotationRequestItem
 */
export declare class QuotationRequestItem extends Message<QuotationRequestItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this quotation request
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
     * Stores the quotation request ID
     *
     * @generated from field: int64 quotation_request_id = 10;
     */
    quotationRequestId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores the HSN/SAC code of the item
     *
     * @generated from field: string hsn_sac_code = 12;
     */
    hsnSacCode: string;
    /**
     * The min price (in cents)
     *
     * @generated from field: int64 baseline_price = 13;
     */
    baselinePrice: bigint;
    /**
     * The quantity required (in cents)
     *
     * @generated from field: int64 quantity = 14;
     */
    quantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 16;
     */
    deliveryDate: string;
    /**
     * The specifications of the item
     *
     * @generated from field: string specifications = 17;
     */
    specifications: string;
    constructor(data?: PartialMessage<QuotationRequestItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationRequestItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationRequestItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationRequestItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationRequestItem;
    static equals(a: QuotationRequestItem | PlainMessage<QuotationRequestItem> | undefined, b: QuotationRequestItem | PlainMessage<QuotationRequestItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of quotations requests
 *
 * @generated from message Genesis.QuotationsRequestsList
 */
export declare class QuotationsRequestsList extends Message<QuotationsRequestsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.QuotationRequest list = 1;
     */
    list: QuotationRequest[];
    constructor(data?: PartialMessage<QuotationsRequestsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsList;
    static equals(a: QuotationsRequestsList | PlainMessage<QuotationsRequestsList> | undefined, b: QuotationsRequestsList | PlainMessage<QuotationsRequestsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of quotation request items
 *
 * @generated from message Genesis.QuotationsRequestsItemsList
 */
export declare class QuotationsRequestsItemsList extends Message<QuotationsRequestsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.QuotationRequestItem list = 1;
     */
    list: QuotationRequestItem[];
    constructor(data?: PartialMessage<QuotationsRequestsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsItemsList;
    static equals(a: QuotationsRequestsItemsList | PlainMessage<QuotationsRequestsItemsList> | undefined, b: QuotationsRequestsItemsList | PlainMessage<QuotationsRequestsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.QuotationRequestItemHistoryRequest
 */
export declare class QuotationRequestItemHistoryRequest extends Message<QuotationRequestItemHistoryRequest> {
    /**
     * Stores the quotation request ID
     *
     * @generated from field: int64 quotation_request_id = 10;
     */
    quotationRequestId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<QuotationRequestItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationRequestItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationRequestItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationRequestItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationRequestItemHistoryRequest;
    static equals(a: QuotationRequestItemHistoryRequest | PlainMessage<QuotationRequestItemHistoryRequest> | undefined, b: QuotationRequestItemHistoryRequest | PlainMessage<QuotationRequestItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.QuotationsRequestsServicePaginationReq
 */
export declare class QuotationsRequestsServicePaginationReq extends Message<QuotationsRequestsServicePaginationReq> {
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
     * @generated from field: Genesis.QUOTATION_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_REQUEST_SORT_KEY;
    /**
     * The status of this quotation request
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<QuotationsRequestsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginationReq;
    static equals(a: QuotationsRequestsServicePaginationReq | PlainMessage<QuotationsRequestsServicePaginationReq> | undefined, b: QuotationsRequestsServicePaginationReq | PlainMessage<QuotationsRequestsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.QuotationsRequestsServicePaginationResponse
 */
export declare class QuotationsRequestsServicePaginationResponse extends Message<QuotationsRequestsServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.QuotationRequest payload = 4;
     */
    payload: QuotationRequest[];
    constructor(data?: PartialMessage<QuotationsRequestsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServicePaginationResponse;
    static equals(a: QuotationsRequestsServicePaginationResponse | PlainMessage<QuotationsRequestsServicePaginationResponse> | undefined, b: QuotationsRequestsServicePaginationResponse | PlainMessage<QuotationsRequestsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.QuotationsRequestsServiceEntityPaginationReq
 */
export declare class QuotationsRequestsServiceEntityPaginationReq extends Message<QuotationsRequestsServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.QUOTATION_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_REQUEST_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<QuotationsRequestsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceEntityPaginationReq;
    static equals(a: QuotationsRequestsServiceEntityPaginationReq | PlainMessage<QuotationsRequestsServiceEntityPaginationReq> | undefined, b: QuotationsRequestsServiceEntityPaginationReq | PlainMessage<QuotationsRequestsServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.QuotationsRequestsServiceFilterReq
 */
export declare class QuotationsRequestsServiceFilterReq extends Message<QuotationsRequestsServiceFilterReq> {
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
     * @generated from field: Genesis.QUOTATION_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_REQUEST_SORT_KEY;
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
     * The status of this quotation request
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
     * The reference ID of the quotation request
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
     * The associated purchase enquiry
     *
     * @generated from field: int64 purchase_enquiry_id = 22;
     */
    purchaseEnquiryId: bigint;
    /**
     * The priority of the quotation request. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 24;
     */
    priority: string;
    constructor(data?: PartialMessage<QuotationsRequestsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceFilterReq;
    static equals(a: QuotationsRequestsServiceFilterReq | PlainMessage<QuotationsRequestsServiceFilterReq> | undefined, b: QuotationsRequestsServiceFilterReq | PlainMessage<QuotationsRequestsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.QuotationsRequestsServiceSearchAllReq
 */
export declare class QuotationsRequestsServiceSearchAllReq extends Message<QuotationsRequestsServiceSearchAllReq> {
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
     * @generated from field: Genesis.QUOTATION_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: QUOTATION_REQUEST_SORT_KEY;
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
    constructor(data?: PartialMessage<QuotationsRequestsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuotationsRequestsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuotationsRequestsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuotationsRequestsServiceSearchAllReq;
    static equals(a: QuotationsRequestsServiceSearchAllReq | PlainMessage<QuotationsRequestsServiceSearchAllReq> | undefined, b: QuotationsRequestsServiceSearchAllReq | PlainMessage<QuotationsRequestsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=quotations_requests_pb.d.ts.map