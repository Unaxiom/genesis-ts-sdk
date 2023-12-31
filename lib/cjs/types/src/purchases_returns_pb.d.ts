import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.PURCHASE_RETURN_SORT_KEY
 */
export declare enum PURCHASE_RETURN_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_CREATED_AT = 1;
     */
    PURCHASE_RETURN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_MODIFIED_AT = 2;
     */
    PURCHASE_RETURN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_APPROVED_ON = 3;
     */
    PURCHASE_RETURN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_APPROVED_BY = 4;
     */
    PURCHASE_RETURN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PURCHASE_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_COMPLETED_ON = 6;
     */
    PURCHASE_RETURN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_REFERENCE_ID = 10;
     */
    PURCHASE_RETURN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PURCHASE_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PURCHASE_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Genesis.PURCHASE_RETURN_BILLING_STATUS
 */
export declare enum PURCHASE_RETURN_BILLING_STATUS {
    /**
     * Any billing status
     *
     * @generated from enum value: PURCHASE_RETURN_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    PURCHASE_RETURN_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Purchase return is billed
     *
     * @generated from enum value: PURCHASE_RETURN_BILLING_STATUS_BILLED = 1;
     */
    PURCHASE_RETURN_BILLING_STATUS_BILLED = 1,
    /**
     * Purchase return is unbilled
     *
     * @generated from enum value: PURCHASE_RETURN_BILLING_STATUS_UNBILLED = 2;
     */
    PURCHASE_RETURN_BILLING_STATUS_UNBILLED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.PurchasesReturnsServiceCreateRequest
 */
export declare class PurchasesReturnsServiceCreateRequest extends Message<PurchasesReturnsServiceCreateRequest> {
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
     * The reference ID of the purchase return
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
    constructor(data?: PartialMessage<PurchasesReturnsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceCreateRequest;
    static equals(a: PurchasesReturnsServiceCreateRequest | PlainMessage<PurchasesReturnsServiceCreateRequest> | undefined, b: PurchasesReturnsServiceCreateRequest | PlainMessage<PurchasesReturnsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.PurchasesReturnsServiceUpdateRequest
 */
export declare class PurchasesReturnsServiceUpdateRequest extends Message<PurchasesReturnsServiceUpdateRequest> {
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
     * The reference ID of the purchase return
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
    constructor(data?: PartialMessage<PurchasesReturnsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceUpdateRequest;
    static equals(a: PurchasesReturnsServiceUpdateRequest | PlainMessage<PurchasesReturnsServiceUpdateRequest> | undefined, b: PurchasesReturnsServiceUpdateRequest | PlainMessage<PurchasesReturnsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.PurchaseReturn
 */
export declare class PurchaseReturn extends Message<PurchaseReturn> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase return
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
     * The status of this purchase return
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this purchase return
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this purchase return was marked as completed
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
     * The reference ID of the purchase return
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
     * The list of associated purchase return items
     *
     * @generated from field: repeated Genesis.PurchaseReturnItem list = 20;
     */
    list: PurchaseReturnItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<PurchaseReturn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchaseReturn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturn;
    static equals(a: PurchaseReturn | PlainMessage<PurchaseReturn> | undefined, b: PurchaseReturn | PlainMessage<PurchaseReturn> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a purchase return
 *
 * @generated from message Genesis.PurchasesReturnsServiceItemCreateRequest
 */
export declare class PurchasesReturnsServiceItemCreateRequest extends Message<PurchasesReturnsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the purchase return ID
     *
     * @generated from field: int64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: int64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<PurchasesReturnsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceItemCreateRequest;
    static equals(a: PurchasesReturnsServiceItemCreateRequest | PlainMessage<PurchasesReturnsServiceItemCreateRequest> | undefined, b: PurchasesReturnsServiceItemCreateRequest | PlainMessage<PurchasesReturnsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a purchase return
 *
 * @generated from message Genesis.PurchasesReturnsServiceItemUpdateRequest
 */
export declare class PurchasesReturnsServiceItemUpdateRequest extends Message<PurchasesReturnsServiceItemUpdateRequest> {
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: int64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<PurchasesReturnsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceItemUpdateRequest;
    static equals(a: PurchasesReturnsServiceItemUpdateRequest | PlainMessage<PurchasesReturnsServiceItemUpdateRequest> | undefined, b: PurchasesReturnsServiceItemUpdateRequest | PlainMessage<PurchasesReturnsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a purchase return
 *
 * @generated from message Genesis.PurchaseReturnItem
 */
export declare class PurchaseReturnItem extends Message<PurchaseReturnItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this purchase return
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
     * Stores the purchase return ID
     *
     * @generated from field: int64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: int64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<PurchaseReturnItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchaseReturnItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturnItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturnItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturnItem;
    static equals(a: PurchaseReturnItem | PlainMessage<PurchaseReturnItem> | undefined, b: PurchaseReturnItem | PlainMessage<PurchaseReturnItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchases returns
 *
 * @generated from message Genesis.PurchasesReturnsList
 */
export declare class PurchasesReturnsList extends Message<PurchasesReturnsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.PurchaseReturn list = 1;
     */
    list: PurchaseReturn[];
    constructor(data?: PartialMessage<PurchasesReturnsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsList;
    static equals(a: PurchasesReturnsList | PlainMessage<PurchasesReturnsList> | undefined, b: PurchasesReturnsList | PlainMessage<PurchasesReturnsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of purchase return items
 *
 * @generated from message Genesis.PurchasesReturnsItemsList
 */
export declare class PurchasesReturnsItemsList extends Message<PurchasesReturnsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.PurchaseReturnItem list = 1;
     */
    list: PurchaseReturnItem[];
    constructor(data?: PartialMessage<PurchasesReturnsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsItemsList;
    static equals(a: PurchasesReturnsItemsList | PlainMessage<PurchasesReturnsItemsList> | undefined, b: PurchasesReturnsItemsList | PlainMessage<PurchasesReturnsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.PurchaseReturnItemHistoryRequest
 */
export declare class PurchaseReturnItemHistoryRequest extends Message<PurchaseReturnItemHistoryRequest> {
    /**
     * Stores the purchase return ID
     *
     * @generated from field: int64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<PurchaseReturnItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchaseReturnItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturnItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturnItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturnItemHistoryRequest;
    static equals(a: PurchaseReturnItemHistoryRequest | PlainMessage<PurchaseReturnItemHistoryRequest> | undefined, b: PurchaseReturnItemHistoryRequest | PlainMessage<PurchaseReturnItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective purchase return item
 *
 * @generated from message Genesis.PurchaseReturnItemProspectiveInfoRequest
 */
export declare class PurchaseReturnItemProspectiveInfoRequest extends Message<PurchaseReturnItemProspectiveInfoRequest> {
    /**
     * Stores the purchase return ID
     *
     * @generated from field: int64 purchase_return_id = 10;
     */
    purchaseReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<PurchaseReturnItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchaseReturnItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseReturnItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseReturnItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseReturnItemProspectiveInfoRequest;
    static equals(a: PurchaseReturnItemProspectiveInfoRequest | PlainMessage<PurchaseReturnItemProspectiveInfoRequest> | undefined, b: PurchaseReturnItemProspectiveInfoRequest | PlainMessage<PurchaseReturnItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Genesis.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest extends Message<PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest> {
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
    constructor(data?: PartialMessage<PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.PurchasesReturnsServicePaginationReq
 */
export declare class PurchasesReturnsServicePaginationReq extends Message<PurchasesReturnsServicePaginationReq> {
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
     * @generated from field: Genesis.PURCHASE_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_RETURN_SORT_KEY;
    /**
     * The status of this purchase return
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<PurchasesReturnsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginationReq;
    static equals(a: PurchasesReturnsServicePaginationReq | PlainMessage<PurchasesReturnsServicePaginationReq> | undefined, b: PurchasesReturnsServicePaginationReq | PlainMessage<PurchasesReturnsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.PurchasesReturnsServicePaginationResponse
 */
export declare class PurchasesReturnsServicePaginationResponse extends Message<PurchasesReturnsServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.PurchaseReturn payload = 4;
     */
    payload: PurchaseReturn[];
    constructor(data?: PartialMessage<PurchasesReturnsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServicePaginationResponse;
    static equals(a: PurchasesReturnsServicePaginationResponse | PlainMessage<PurchasesReturnsServicePaginationResponse> | undefined, b: PurchasesReturnsServicePaginationResponse | PlainMessage<PurchasesReturnsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.PurchasesReturnsServiceEntityPaginationReq
 */
export declare class PurchasesReturnsServiceEntityPaginationReq extends Message<PurchasesReturnsServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.PURCHASE_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_RETURN_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<PurchasesReturnsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceEntityPaginationReq;
    static equals(a: PurchasesReturnsServiceEntityPaginationReq | PlainMessage<PurchasesReturnsServiceEntityPaginationReq> | undefined, b: PurchasesReturnsServiceEntityPaginationReq | PlainMessage<PurchasesReturnsServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.PurchasesReturnsServiceFilterReq
 */
export declare class PurchasesReturnsServiceFilterReq extends Message<PurchasesReturnsServiceFilterReq> {
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
     * @generated from field: Genesis.PURCHASE_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_RETURN_SORT_KEY;
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
     * The status of this purchase return
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
     * The reference ID of the purchase return
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
     * The status of the purchase return bill
     *
     * @generated from field: Genesis.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: PURCHASE_RETURN_BILLING_STATUS;
    constructor(data?: PartialMessage<PurchasesReturnsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceFilterReq;
    static equals(a: PurchasesReturnsServiceFilterReq | PlainMessage<PurchasesReturnsServiceFilterReq> | undefined, b: PurchasesReturnsServiceFilterReq | PlainMessage<PurchasesReturnsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.PurchasesReturnsServiceSearchAllReq
 */
export declare class PurchasesReturnsServiceSearchAllReq extends Message<PurchasesReturnsServiceSearchAllReq> {
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
     * @generated from field: Genesis.PURCHASE_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: PURCHASE_RETURN_SORT_KEY;
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
     * The status of the purchase return bill
     *
     * @generated from field: Genesis.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;
     */
    billingStatus: PURCHASE_RETURN_BILLING_STATUS;
    constructor(data?: PartialMessage<PurchasesReturnsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.PurchasesReturnsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchasesReturnsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchasesReturnsServiceSearchAllReq;
    static equals(a: PurchasesReturnsServiceSearchAllReq | PlainMessage<PurchasesReturnsServiceSearchAllReq> | undefined, b: PurchasesReturnsServiceSearchAllReq | PlainMessage<PurchasesReturnsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=purchases_returns_pb.d.ts.map