import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SALES_RETURN_SORT_KEY
 */
export declare enum SALES_RETURN_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SALES_RETURN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_CREATED_AT = 1;
     */
    SALES_RETURN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_MODIFIED_AT = 2;
     */
    SALES_RETURN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_APPROVED_ON = 3;
     */
    SALES_RETURN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_APPROVED_BY = 4;
     */
    SALES_RETURN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SALES_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_COMPLETED_ON = 6;
     */
    SALES_RETURN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_REFERENCE_ID = 10;
     */
    SALES_RETURN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: SALES_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    SALES_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11
***REMOVED***
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Genesis.SALES_RETURN_BILLING_STATUS
 */
export declare enum SALES_RETURN_BILLING_STATUS ***REMOVED***
    /**
     * Any billing status
     *
     * @generated from enum value: SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Sales return is billed
     *
     * @generated from enum value: SALES_RETURN_BILLING_STATUS_BILLED = 1;
     */
    SALES_RETURN_BILLING_STATUS_BILLED = 1,
    /**
     * Sales return is unbilled
     *
     * @generated from enum value: SALES_RETURN_BILLING_STATUS_UNBILLED = 2;
     */
    SALES_RETURN_BILLING_STATUS_UNBILLED = 2
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.SalesReturnsServiceCreateRequest
 */
export declare class SalesReturnsServiceCreateRequest extends Message<SalesReturnsServiceCreateRequest> ***REMOVED***
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
     * The reference ID of the sales return
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesReturnsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceCreateRequest;
    static equals(a: SalesReturnsServiceCreateRequest | PlainMessage<SalesReturnsServiceCreateRequest> | undefined, b: SalesReturnsServiceCreateRequest | PlainMessage<SalesReturnsServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.SalesReturnsServiceUpdateRequest
 */
export declare class SalesReturnsServiceUpdateRequest extends Message<SalesReturnsServiceUpdateRequest> ***REMOVED***
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
     * The reference ID of the sales return
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<SalesReturnsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceUpdateRequest;
    static equals(a: SalesReturnsServiceUpdateRequest | PlainMessage<SalesReturnsServiceUpdateRequest> | undefined, b: SalesReturnsServiceUpdateRequest | PlainMessage<SalesReturnsServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.SalesReturn
 */
export declare class SalesReturn extends Message<SalesReturn> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales return
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
     * The status of this sales return
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this sales return
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this sales return was marked as completed
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
     * The reference ID of the sales return
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
     * The associated reference
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The list of associated sales return items
     *
     * @generated from field: repeated Genesis.SalesReturnItem list = 20;
     */
    list: SalesReturnItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<SalesReturn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturn;
    static equals(a: SalesReturn | PlainMessage<SalesReturn> | undefined, b: SalesReturn | PlainMessage<SalesReturn> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add an item to a sales return
 *
 * @generated from message Genesis.SalesReturnsServiceItemCreateRequest
 */
export declare class SalesReturnsServiceItemCreateRequest extends Message<SalesReturnsServiceItemCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the sales return ID
     *
     * @generated from field: int64 sales_return_id = 10;
     */
    salesReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
     *
     * @generated from field: int64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: int64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: int64 client_quantity = 15;
     */
    clientQuantity: bigint;
    constructor(data?: PartialMessage<SalesReturnsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceItemCreateRequest;
    static equals(a: SalesReturnsServiceItemCreateRequest | PlainMessage<SalesReturnsServiceItemCreateRequest> | undefined, b: SalesReturnsServiceItemCreateRequest | PlainMessage<SalesReturnsServiceItemCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update an item in a sales return
 *
 * @generated from message Genesis.SalesReturnsServiceItemUpdateRequest
 */
export declare class SalesReturnsServiceItemUpdateRequest extends Message<SalesReturnsServiceItemUpdateRequest> ***REMOVED***
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
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
     *
     * @generated from field: int64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: int64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: int64 client_quantity = 15;
     */
    clientQuantity: bigint;
    constructor(data?: PartialMessage<SalesReturnsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceItemUpdateRequest;
    static equals(a: SalesReturnsServiceItemUpdateRequest | PlainMessage<SalesReturnsServiceItemUpdateRequest> | undefined, b: SalesReturnsServiceItemUpdateRequest | PlainMessage<SalesReturnsServiceItemUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute an item associated to a sales return
 *
 * @generated from message Genesis.SalesReturnItem
 */
export declare class SalesReturnItem extends Message<SalesReturnItem> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales return
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
     * Stores the sales return ID
     *
     * @generated from field: int64 sales_return_id = 10;
     */
    salesReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
     *
     * @generated from field: int64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the client's unit of material
     *
     * @generated from field: int64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: int64 client_quantity = 15;
     */
    clientQuantity: bigint;
    constructor(data?: PartialMessage<SalesReturnItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnItem;
    static equals(a: SalesReturnItem | PlainMessage<SalesReturnItem> | undefined, b: SalesReturnItem | PlainMessage<SalesReturnItem> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of sales returns
 *
 * @generated from message Genesis.SalesReturnsList
 */
export declare class SalesReturnsList extends Message<SalesReturnsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.SalesReturn list = 1;
     */
    list: SalesReturn[];
    constructor(data?: PartialMessage<SalesReturnsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsList;
    static equals(a: SalesReturnsList | PlainMessage<SalesReturnsList> | undefined, b: SalesReturnsList | PlainMessage<SalesReturnsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of sales return items
 *
 * @generated from message Genesis.SalesReturnsItemsList
 */
export declare class SalesReturnsItemsList extends Message<SalesReturnsItemsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.SalesReturnItem list = 1;
     */
    list: SalesReturnItem[];
    constructor(data?: PartialMessage<SalesReturnsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsItemsList;
    static equals(a: SalesReturnsItemsList | PlainMessage<SalesReturnsItemsList> | undefined, b: SalesReturnsItemsList | PlainMessage<SalesReturnsItemsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.SalesReturnItemHistoryRequest
 */
export declare class SalesReturnItemHistoryRequest extends Message<SalesReturnItemHistoryRequest> ***REMOVED***
    /**
     * Stores the sales return ID
     *
     * @generated from field: int64 sales_return_id = 10;
     */
    salesReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesReturnItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnItemHistoryRequest;
    static equals(a: SalesReturnItemHistoryRequest | PlainMessage<SalesReturnItemHistoryRequest> | undefined, b: SalesReturnItemHistoryRequest | PlainMessage<SalesReturnItemHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective sales return item
 *
 * @generated from message Genesis.SalesReturnItemProspectiveInfoRequest
 */
export declare class SalesReturnItemProspectiveInfoRequest extends Message<SalesReturnItemProspectiveInfoRequest> ***REMOVED***
    /**
     * Stores the sales return ID
     *
     * @generated from field: int64 sales_return_id = 10;
     */
    salesReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesReturnItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnItemProspectiveInfoRequest;
    static equals(a: SalesReturnItemProspectiveInfoRequest | PlainMessage<SalesReturnItemProspectiveInfoRequest> | undefined, b: SalesReturnItemProspectiveInfoRequest | PlainMessage<SalesReturnItemProspectiveInfoRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Genesis.SalesReturnsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class SalesReturnsServiceAlreadyAddedQuantityForSourceRequest extends Message<SalesReturnsServiceAlreadyAddedQuantityForSourceRequest> ***REMOVED***
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 1;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 2;
     */
    refId: bigint;
    /**
     * The associated family ID
     *
     * @generated from field: int64 family_id = 3;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<SalesReturnsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: SalesReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<SalesReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: SalesReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<SalesReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.SalesReturnsServicePaginationReq
 */
export declare class SalesReturnsServicePaginationReq extends Message<SalesReturnsServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.SALES_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RETURN_SORT_KEY;
    /**
     * The status of this sales return
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<SalesReturnsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginationReq;
    static equals(a: SalesReturnsServicePaginationReq | PlainMessage<SalesReturnsServicePaginationReq> | undefined, b: SalesReturnsServicePaginationReq | PlainMessage<SalesReturnsServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.SalesReturnsServicePaginationResponse
 */
export declare class SalesReturnsServicePaginationResponse extends Message<SalesReturnsServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.SalesReturn payload = 4;
     */
    payload: SalesReturn[];
    constructor(data?: PartialMessage<SalesReturnsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServicePaginationResponse;
    static equals(a: SalesReturnsServicePaginationResponse | PlainMessage<SalesReturnsServicePaginationResponse> | undefined, b: SalesReturnsServicePaginationResponse | PlainMessage<SalesReturnsServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.SalesReturnsServiceEntityPaginationReq
 */
export declare class SalesReturnsServiceEntityPaginationReq extends Message<SalesReturnsServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.SALES_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RETURN_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<SalesReturnsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceEntityPaginationReq;
    static equals(a: SalesReturnsServiceEntityPaginationReq | PlainMessage<SalesReturnsServiceEntityPaginationReq> | undefined, b: SalesReturnsServiceEntityPaginationReq | PlainMessage<SalesReturnsServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.SalesReturnsServiceFilterReq
 */
export declare class SalesReturnsServiceFilterReq extends Message<SalesReturnsServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.SALES_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RETURN_SORT_KEY;
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
     * The status of this sales return
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
     * The reference ID of the sales return
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
     * The associated reference
     *
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The status of the sales return bill
     *
     * @generated from field: Genesis.SALES_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: SALES_RETURN_BILLING_STATUS;
    constructor(data?: PartialMessage<SalesReturnsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceFilterReq;
    static equals(a: SalesReturnsServiceFilterReq | PlainMessage<SalesReturnsServiceFilterReq> | undefined, b: SalesReturnsServiceFilterReq | PlainMessage<SalesReturnsServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.SalesReturnsServiceSearchAllReq
 */
export declare class SalesReturnsServiceSearchAllReq extends Message<SalesReturnsServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.SALES_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: SALES_RETURN_SORT_KEY;
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
     * The associated reference
     *
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: int64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The status of the sales return bill
     *
     * @generated from field: Genesis.SALES_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: SALES_RETURN_BILLING_STATUS;
    constructor(data?: PartialMessage<SalesReturnsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SalesReturnsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SalesReturnsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SalesReturnsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SalesReturnsServiceSearchAllReq;
    static equals(a: SalesReturnsServiceSearchAllReq | PlainMessage<SalesReturnsServiceSearchAllReq> | undefined, b: SalesReturnsServiceSearchAllReq | PlainMessage<SalesReturnsServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=sales_returns_pb.d.ts.map