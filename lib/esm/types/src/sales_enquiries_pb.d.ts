import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SALES_ENQUIRY_SORT_KEY
 */
export declare enum SALES_ENQUIRY_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_CREATED_AT = 1;
     */
    SALES_ENQUIRY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_ENQUIRY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_ENQUIRY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_ENQUIRY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_ENQUIRY_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_ENQUIRY_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the consignee client ID
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_CONSIGNEE_CLIENT_ID = 12;
     */
    SALES_ENQUIRY_SORT_KEY_CONSIGNEE_CLIENT_ID = 12,
    /**
     * Fetch ordered results by the buyer client ID
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_BUYER_CLIENT_ID = 13;
     */
    SALES_ENQUIRY_SORT_KEY_BUYER_CLIENT_ID = 13,
    /**
     * Fetch ordered results by the priority
     *
     * @generated from enum value: SALES_ENQUIRY_SORT_KEY_PRIORITY = 14;
     */
    SALES_ENQUIRY_SORT_KEY_PRIORITY = 14
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.SalesEnquiriesServiceCreateRequest
 */
export declare class SalesEnquiriesServiceCreateRequest extends Message<SalesEnquiriesServiceCreateRequest> ***REMOVED***
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
     * The reference ID of the sales enquiry
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the consignee
     *
     * @generated from field: int64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: int64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: int64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the sales enquiry
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The miscellaneous cost (in cents)
     *
     * @generated from field: int64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The overall discount (in cents)
     *
     * @generated from field: int64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The round off amount (in cents) (both positive and negative values are allowed)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesEnquiriesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceCreateRequest;
    static equals(a: SalesEnquiriesServiceCreateRequest | PlainMessage<SalesEnquiriesServiceCreateRequest> | undefined, b: SalesEnquiriesServiceCreateRequest | PlainMessage<SalesEnquiriesServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.SalesEnquiriesServiceUpdateRequest
 */
export declare class SalesEnquiriesServiceUpdateRequest extends Message<SalesEnquiriesServiceUpdateRequest> ***REMOVED***
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
     * The reference ID of the sales enquiry
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the consignee
     *
     * @generated from field: int64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: int64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: int64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the sales enquiry
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The miscellaneous cost (in cents)
     *
     * @generated from field: int64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The overall discount (in cents)
     *
     * @generated from field: int64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The round off amount (in cents) (both positive and negative values are allowed)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesEnquiriesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceUpdateRequest;
    static equals(a: SalesEnquiriesServiceUpdateRequest | PlainMessage<SalesEnquiriesServiceUpdateRequest> | undefined, b: SalesEnquiriesServiceUpdateRequest | PlainMessage<SalesEnquiriesServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.SalesEnquiry
 */
export declare class SalesEnquiry extends Message<SalesEnquiry> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales enquiry
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
     * The status of this sales enquiry
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this sales enquiry
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this sales enquiry was marked as completed
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
     * The reference ID of the sales enquiry
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
     * The ID of the consignee
     *
     * @generated from field: int64 consignee_client_id = 12;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: int64 buyer_client_id = 13;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 14;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: int64 currency_id = 15;
     */
    currencyId: bigint;
    /**
     * The description of the sales enquiry
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The miscellaneous cost (in cents)
     *
     * @generated from field: int64 miscellaneous_cost = 17;
     */
    miscellaneousCost: bigint;
    /**
     * The overall discount (in cents)
     *
     * @generated from field: int64 overall_discount = 18;
     */
    overallDiscount: bigint;
    /**
     * The round off amount (in cents)
     *
     * @generated from field: int64 round_off = 19;
     */
    roundOff: bigint;
    /**
     * The list of associated sales enquiry items
     *
     * @generated from field: repeated Genesis.SalesEnquiryItem list = 20;
     */
    list: SalesEnquiryItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    /**
     * The total price of the sales enquiry
     *
     * @generated from field: double total_price = 40;
     */
    totalPrice: number;
    constructor(data?: PartialMessage<SalesEnquiry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiry;
    static equals(a: SalesEnquiry | PlainMessage<SalesEnquiry> | undefined, b: SalesEnquiry | PlainMessage<SalesEnquiry> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add an item to a sales enquiry
 *
 * @generated from message Genesis.SalesEnquiriesServiceItemCreateRequest
 */
export declare class SalesEnquiriesServiceItemCreateRequest extends Message<SalesEnquiriesServiceItemCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales enquiry ID
     *
     * @generated from field: int64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The quantity being offered (in cents)
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The unit price
     *
     * @generated from field: int64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     * The discount percentage (in cents)
     *
     * @generated from field: int64 discount = 15;
     */
    discount: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: int64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The round off (in cents) (both positive and negative values are allowed)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * The specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemCreateRequest;
    static equals(a: SalesEnquiriesServiceItemCreateRequest | PlainMessage<SalesEnquiriesServiceItemCreateRequest> | undefined, b: SalesEnquiriesServiceItemCreateRequest | PlainMessage<SalesEnquiriesServiceItemCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update an item in a sales enquiry
 *
 * @generated from message Genesis.SalesEnquiriesServiceItemUpdateRequest
 */
export declare class SalesEnquiriesServiceItemUpdateRequest extends Message<SalesEnquiriesServiceItemUpdateRequest> ***REMOVED***
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
     * The quantity being offered (in cents)
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The unit price
     *
     * @generated from field: int64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     * The discount percentage (in cents)
     *
     * @generated from field: int64 discount = 15;
     */
    discount: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: int64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The round off (in cents) (both positive and negative values are allowed)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * The specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceItemUpdateRequest;
    static equals(a: SalesEnquiriesServiceItemUpdateRequest | PlainMessage<SalesEnquiriesServiceItemUpdateRequest> | undefined, b: SalesEnquiriesServiceItemUpdateRequest | PlainMessage<SalesEnquiriesServiceItemUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute an item associated to a sales enquiry
 *
 * @generated from message Genesis.SalesEnquiryItem
 */
export declare class SalesEnquiryItem extends Message<SalesEnquiryItem> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales enquiry
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
     * Stores the sales enquiry ID
     *
     * @generated from field: int64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The quantity being offered (in cents)
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The ID of the associated unit of material
     *
     * @generated from field: int64 uom_id = 13;
     */
    uomId: bigint;
    /**
     * The unit price
     *
     * @generated from field: int64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     * The discount percentage (in cents)
     *
     * @generated from field: int64 discount = 15;
     */
    discount: bigint;
    /**
     * The ID of the associated tax group
     *
     * @generated from field: int64 tax_group_id = 16;
     */
    taxGroupId: bigint;
    /**
     * The round off (in cents)
     *
     * @generated from field: int64 round_off = 17;
     */
    roundOff: bigint;
    /**
     * The delivery date
     *
     * @generated from field: string delivery_date = 18;
     */
    deliveryDate: string;
    /**
     * The specifications
     *
     * @generated from field: string specifications = 19;
     */
    specifications: string;
    constructor(data?: PartialMessage<SalesEnquiryItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiryItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryItem;
    static equals(a: SalesEnquiryItem | PlainMessage<SalesEnquiryItem> | undefined, b: SalesEnquiryItem | PlainMessage<SalesEnquiryItem> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of sales enquiries
 *
 * @generated from message Genesis.SalesEnquiriesList
 */
export declare class SalesEnquiriesList extends Message<SalesEnquiriesList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.SalesEnquiry list = 1;
     */
    list: SalesEnquiry[];
    constructor(data?: PartialMessage<SalesEnquiriesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesList;
    static equals(a: SalesEnquiriesList | PlainMessage<SalesEnquiriesList> | undefined, b: SalesEnquiriesList | PlainMessage<SalesEnquiriesList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of sales enquiry items
 *
 * @generated from message Genesis.SalesEnquiriesItemsList
 */
export declare class SalesEnquiriesItemsList extends Message<SalesEnquiriesItemsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.SalesEnquiryItem list = 1;
     */
    list: SalesEnquiryItem[];
    constructor(data?: PartialMessage<SalesEnquiriesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesItemsList;
    static equals(a: SalesEnquiriesItemsList | PlainMessage<SalesEnquiriesItemsList> | undefined, b: SalesEnquiriesItemsList | PlainMessage<SalesEnquiriesItemsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.SalesEnquiryItemHistoryRequest
 */
export declare class SalesEnquiryItemHistoryRequest extends Message<SalesEnquiryItemHistoryRequest> ***REMOVED***
    /**
     * Stores the sales enquiry ID
     *
     * @generated from field: int64 sales_enquiry_id = 10;
     */
    salesEnquiryId: bigint;
    /**
     * Stores the name of the item
     *
     * @generated from field: string name = 11;
     */
    name: string;
    constructor(data?: PartialMessage<SalesEnquiryItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiryItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiryItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiryItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiryItemHistoryRequest;
    static equals(a: SalesEnquiryItemHistoryRequest | PlainMessage<SalesEnquiryItemHistoryRequest> | undefined, b: SalesEnquiryItemHistoryRequest | PlainMessage<SalesEnquiryItemHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.SalesEnquiriesServicePaginationReq
 */
export declare class SalesEnquiriesServicePaginationReq extends Message<SalesEnquiriesServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ENQUIRY_SORT_KEY;
    /**
     * The status of this sales enquiry
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesEnquiriesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationReq;
    static equals(a: SalesEnquiriesServicePaginationReq | PlainMessage<SalesEnquiriesServicePaginationReq> | undefined, b: SalesEnquiriesServicePaginationReq | PlainMessage<SalesEnquiriesServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.SalesEnquiriesServicePaginationResponse
 */
export declare class SalesEnquiriesServicePaginationResponse extends Message<SalesEnquiriesServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.SalesEnquiry payload = 4;
     */
    payload: SalesEnquiry[];
    constructor(data?: PartialMessage<SalesEnquiriesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServicePaginationResponse;
    static equals(a: SalesEnquiriesServicePaginationResponse | PlainMessage<SalesEnquiriesServicePaginationResponse> | undefined, b: SalesEnquiriesServicePaginationResponse | PlainMessage<SalesEnquiriesServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.SalesEnquiriesServiceEntityPaginationReq
 */
export declare class SalesEnquiriesServiceEntityPaginationReq extends Message<SalesEnquiriesServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ENQUIRY_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<SalesEnquiriesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceEntityPaginationReq;
    static equals(a: SalesEnquiriesServiceEntityPaginationReq | PlainMessage<SalesEnquiriesServiceEntityPaginationReq> | undefined, b: SalesEnquiriesServiceEntityPaginationReq | PlainMessage<SalesEnquiriesServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.SalesEnquiriesServiceFilterReq
 */
export declare class SalesEnquiriesServiceFilterReq extends Message<SalesEnquiriesServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ENQUIRY_SORT_KEY;
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
     * The status of this sales enquiry
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
     * The reference ID of the sales enquiry
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
     * The ID of the consignee
     *
     * @generated from field: int64 consignee_client_id = 22;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: int64 buyer_client_id = 23;
     */
    buyerClientId: bigint;
    /**
     * The priority of the sales enquiry. Possible values are "low", "medium", "high".
     *
     * @generated from field: string priority = 24;
     */
    priority: string;
    /**
     * The ID of the currency
     *
     * @generated from field: int64 currency_id = 25;
     */
    currencyId: bigint;
    constructor(data?: PartialMessage<SalesEnquiriesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceFilterReq;
    static equals(a: SalesEnquiriesServiceFilterReq | PlainMessage<SalesEnquiriesServiceFilterReq> | undefined, b: SalesEnquiriesServiceFilterReq | PlainMessage<SalesEnquiriesServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.SalesEnquiriesServiceSearchAllReq
 */
export declare class SalesEnquiriesServiceSearchAllReq extends Message<SalesEnquiriesServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.SALES_ENQUIRY_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_ENQUIRY_SORT_KEY;
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
     * The ID of the consignee
     *
     * @generated from field: int64 consignee_client_id = 22;
     */
    consigneeClientId: bigint;
    /**
     * The ID of the buyer
     *
     * @generated from field: int64 buyer_client_id = 23;
     */
    buyerClientId: bigint;
    constructor(data?: PartialMessage<SalesEnquiriesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesEnquiriesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesEnquiriesServiceSearchAllReq;
    static equals(a: SalesEnquiriesServiceSearchAllReq | PlainMessage<SalesEnquiriesServiceSearchAllReq> | undefined, b: SalesEnquiriesServiceSearchAllReq | PlainMessage<SalesEnquiriesServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=sales_enquiries_pb.d.ts.map