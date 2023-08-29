import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.STOCK_ISSUANCE_SORT_KEY
 */
export declare enum STOCK_ISSUANCE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_CREATED_AT = 1;
     */
    STOCK_ISSUANCE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_MODIFIED_AT = 2;
     */
    STOCK_ISSUANCE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_APPROVED_ON = 3;
     */
    STOCK_ISSUANCE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_APPROVED_BY = 4;
     */
    STOCK_ISSUANCE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STOCK_ISSUANCE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_COMPLETED_ON = 6;
     */
    STOCK_ISSUANCE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_REFERENCE_ID = 10;
     */
    STOCK_ISSUANCE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    STOCK_ISSUANCE_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.StockIssuancesServiceCreateRequest
 */
export declare class StockIssuancesServiceCreateRequest extends Message<StockIssuancesServiceCreateRequest> {
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
     * The reference ID of the stock issuance
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
    constructor(data?: PartialMessage<StockIssuancesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceCreateRequest;
    static equals(a: StockIssuancesServiceCreateRequest | PlainMessage<StockIssuancesServiceCreateRequest> | undefined, b: StockIssuancesServiceCreateRequest | PlainMessage<StockIssuancesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.StockIssuancesServiceUpdateRequest
 */
export declare class StockIssuancesServiceUpdateRequest extends Message<StockIssuancesServiceUpdateRequest> {
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
     * The reference ID of the stock issuance
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
    constructor(data?: PartialMessage<StockIssuancesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceUpdateRequest;
    static equals(a: StockIssuancesServiceUpdateRequest | PlainMessage<StockIssuancesServiceUpdateRequest> | undefined, b: StockIssuancesServiceUpdateRequest | PlainMessage<StockIssuancesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Genesis.StockIssuancesServiceAutofillRequest
 */
export declare class StockIssuancesServiceAutofillRequest extends Message<StockIssuancesServiceAutofillRequest> {
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
     * Stores if the inventory needs to be split into unit quantities
     *
     * @generated from field: bool split_into_unit_quantity = 10;
     */
    splitIntoUnitQuantity: boolean;
    constructor(data?: PartialMessage<StockIssuancesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceAutofillRequest;
    static equals(a: StockIssuancesServiceAutofillRequest | PlainMessage<StockIssuancesServiceAutofillRequest> | undefined, b: StockIssuancesServiceAutofillRequest | PlainMessage<StockIssuancesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.StockIssuance
 */
export declare class StockIssuance extends Message<StockIssuance> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this stock issuance
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
     * The status of this stock issuance
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this stock issuance
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this stock issuance was marked as completed
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
     * The reference ID of the stock issuance
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
     * The list of associated stock issuance items
     *
     * @generated from field: repeated Genesis.StockIssuanceItem list = 20;
     */
    list: StockIssuanceItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<StockIssuance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuance;
    static equals(a: StockIssuance | PlainMessage<StockIssuance> | undefined, b: StockIssuance | PlainMessage<StockIssuance> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a stock issuance
 *
 * @generated from message Genesis.StockIssuancesServiceItemCreateRequest
 */
export declare class StockIssuancesServiceItemCreateRequest extends Message<StockIssuancesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the stock issuance ID
     *
     * @generated from field: int64 stock_issuance_id = 10;
     */
    stockIssuanceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    constructor(data?: PartialMessage<StockIssuancesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceItemCreateRequest;
    static equals(a: StockIssuancesServiceItemCreateRequest | PlainMessage<StockIssuancesServiceItemCreateRequest> | undefined, b: StockIssuancesServiceItemCreateRequest | PlainMessage<StockIssuancesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a stock issuance
 *
 * @generated from message Genesis.StockIssuancesServiceItemUpdateRequest
 */
export declare class StockIssuancesServiceItemUpdateRequest extends Message<StockIssuancesServiceItemUpdateRequest> {
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
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    constructor(data?: PartialMessage<StockIssuancesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceItemUpdateRequest;
    static equals(a: StockIssuancesServiceItemUpdateRequest | PlainMessage<StockIssuancesServiceItemUpdateRequest> | undefined, b: StockIssuancesServiceItemUpdateRequest | PlainMessage<StockIssuancesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a stock issuance
 *
 * @generated from message Genesis.StockIssuanceItem
 */
export declare class StockIssuanceItem extends Message<StockIssuanceItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this stock issuance
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
     * Stores the stock issuance ID
     *
     * @generated from field: int64 stock_issuance_id = 10;
     */
    stockIssuanceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: int64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    constructor(data?: PartialMessage<StockIssuanceItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuanceItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuanceItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuanceItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuanceItem;
    static equals(a: StockIssuanceItem | PlainMessage<StockIssuanceItem> | undefined, b: StockIssuanceItem | PlainMessage<StockIssuanceItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of stock issuances
 *
 * @generated from message Genesis.StockIssuancesList
 */
export declare class StockIssuancesList extends Message<StockIssuancesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.StockIssuance list = 1;
     */
    list: StockIssuance[];
    constructor(data?: PartialMessage<StockIssuancesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesList;
    static equals(a: StockIssuancesList | PlainMessage<StockIssuancesList> | undefined, b: StockIssuancesList | PlainMessage<StockIssuancesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of stock issuance items
 *
 * @generated from message Genesis.StockIssuancesItemsList
 */
export declare class StockIssuancesItemsList extends Message<StockIssuancesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.StockIssuanceItem list = 1;
     */
    list: StockIssuanceItem[];
    constructor(data?: PartialMessage<StockIssuancesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesItemsList;
    static equals(a: StockIssuancesItemsList | PlainMessage<StockIssuancesItemsList> | undefined, b: StockIssuancesItemsList | PlainMessage<StockIssuancesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.StockIssuanceItemHistoryRequest
 */
export declare class StockIssuanceItemHistoryRequest extends Message<StockIssuanceItemHistoryRequest> {
    /**
     * Stores the stock issuance ID
     *
     * @generated from field: int64 stock_issuance_id = 10;
     */
    stockIssuanceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StockIssuanceItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuanceItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuanceItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuanceItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuanceItemHistoryRequest;
    static equals(a: StockIssuanceItemHistoryRequest | PlainMessage<StockIssuanceItemHistoryRequest> | undefined, b: StockIssuanceItemHistoryRequest | PlainMessage<StockIssuanceItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective stock issuance item
 *
 * @generated from message Genesis.StockIssuanceItemProspectiveInfoRequest
 */
export declare class StockIssuanceItemProspectiveInfoRequest extends Message<StockIssuanceItemProspectiveInfoRequest> {
    /**
     * Stores the stock issuance ID
     *
     * @generated from field: int64 stock_issuance_id = 10;
     */
    stockIssuanceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StockIssuanceItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuanceItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuanceItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuanceItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuanceItemProspectiveInfoRequest;
    static equals(a: StockIssuanceItemProspectiveInfoRequest | PlainMessage<StockIssuanceItemProspectiveInfoRequest> | undefined, b: StockIssuanceItemProspectiveInfoRequest | PlainMessage<StockIssuanceItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Genesis.StockIssuancesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class StockIssuancesServiceAlreadyAddedQuantityForSourceRequest extends Message<StockIssuancesServiceAlreadyAddedQuantityForSourceRequest> {
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
    constructor(data?: PartialMessage<StockIssuancesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: StockIssuancesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<StockIssuancesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: StockIssuancesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<StockIssuancesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.StockIssuancesServicePaginationReq
 */
export declare class StockIssuancesServicePaginationReq extends Message<StockIssuancesServicePaginationReq> {
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
     * @generated from field: Genesis.STOCK_ISSUANCE_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_ISSUANCE_SORT_KEY;
    /**
     * The status of this stock issuance
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<StockIssuancesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginationReq;
    static equals(a: StockIssuancesServicePaginationReq | PlainMessage<StockIssuancesServicePaginationReq> | undefined, b: StockIssuancesServicePaginationReq | PlainMessage<StockIssuancesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.StockIssuancesServicePaginationResponse
 */
export declare class StockIssuancesServicePaginationResponse extends Message<StockIssuancesServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.StockIssuance payload = 4;
     */
    payload: StockIssuance[];
    constructor(data?: PartialMessage<StockIssuancesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginationResponse;
    static equals(a: StockIssuancesServicePaginationResponse | PlainMessage<StockIssuancesServicePaginationResponse> | undefined, b: StockIssuancesServicePaginationResponse | PlainMessage<StockIssuancesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.StockIssuancesServiceEntityPaginationReq
 */
export declare class StockIssuancesServiceEntityPaginationReq extends Message<StockIssuancesServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.STOCK_ISSUANCE_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_ISSUANCE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<StockIssuancesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceEntityPaginationReq;
    static equals(a: StockIssuancesServiceEntityPaginationReq | PlainMessage<StockIssuancesServiceEntityPaginationReq> | undefined, b: StockIssuancesServiceEntityPaginationReq | PlainMessage<StockIssuancesServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.StockIssuancesServiceFilterReq
 */
export declare class StockIssuancesServiceFilterReq extends Message<StockIssuancesServiceFilterReq> {
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
     * @generated from field: Genesis.STOCK_ISSUANCE_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_ISSUANCE_SORT_KEY;
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
     * The status of this stock issuance
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
     * The reference ID of the stock issuance
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
    constructor(data?: PartialMessage<StockIssuancesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceFilterReq;
    static equals(a: StockIssuancesServiceFilterReq | PlainMessage<StockIssuancesServiceFilterReq> | undefined, b: StockIssuancesServiceFilterReq | PlainMessage<StockIssuancesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.StockIssuancesServiceSearchAllReq
 */
export declare class StockIssuancesServiceSearchAllReq extends Message<StockIssuancesServiceSearchAllReq> {
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
     * @generated from field: Genesis.STOCK_ISSUANCE_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_ISSUANCE_SORT_KEY;
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
    constructor(data?: PartialMessage<StockIssuancesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.StockIssuancesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceSearchAllReq;
    static equals(a: StockIssuancesServiceSearchAllReq | PlainMessage<StockIssuancesServiceSearchAllReq> | undefined, b: StockIssuancesServiceSearchAllReq | PlainMessage<StockIssuancesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=stock_issuances_pb.d.ts.map