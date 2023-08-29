import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.GOODS_RECEIPT_SORT_KEY
 */
export declare enum GOODS_RECEIPT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_CREATED_AT = 1;
     */
    GOODS_RECEIPT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_MODIFIED_AT = 2;
     */
    GOODS_RECEIPT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_APPROVED_ON = 3;
     */
    GOODS_RECEIPT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_APPROVED_BY = 4;
     */
    GOODS_RECEIPT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOODS_RECEIPT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_COMPLETED_ON = 6;
     */
    GOODS_RECEIPT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_REFERENCE_ID = 10;
     */
    GOODS_RECEIPT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    GOODS_RECEIPT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the vendor bill no
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_VENDOR_BILL_NO = 12;
     */
    GOODS_RECEIPT_SORT_KEY_VENDOR_BILL_NO = 12,
    /**
     * Fetch ordered results by the vendor bill date
     *
     * @generated from enum value: GOODS_RECEIPT_SORT_KEY_VENDOR_BILL_DATE = 13;
     */
    GOODS_RECEIPT_SORT_KEY_VENDOR_BILL_DATE = 13
}
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Genesis.GOODS_RECEIPT_BILLING_STATUS
 */
export declare enum GOODS_RECEIPT_BILLING_STATUS {
    /**
     * Any billing status
     *
     * @generated from enum value: GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Goods receipt is billed
     *
     * @generated from enum value: GOODS_RECEIPT_BILLING_STATUS_BILLED = 1;
     */
    GOODS_RECEIPT_BILLING_STATUS_BILLED = 1,
    /**
     * Goods receipt is unbilled
     *
     * @generated from enum value: GOODS_RECEIPT_BILLING_STATUS_UNBILLED = 2;
     */
    GOODS_RECEIPT_BILLING_STATUS_UNBILLED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.GoodsReceiptsServiceCreateRequest
 */
export declare class GoodsReceiptsServiceCreateRequest extends Message<GoodsReceiptsServiceCreateRequest> {
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
     * The reference ID of the goods receipt
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
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 14;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 15;
     */
    vendorBillDate: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GoodsReceiptsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceCreateRequest;
    static equals(a: GoodsReceiptsServiceCreateRequest | PlainMessage<GoodsReceiptsServiceCreateRequest> | undefined, b: GoodsReceiptsServiceCreateRequest | PlainMessage<GoodsReceiptsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.GoodsReceiptsServiceUpdateRequest
 */
export declare class GoodsReceiptsServiceUpdateRequest extends Message<GoodsReceiptsServiceUpdateRequest> {
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
     * The reference ID of the goods receipt
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 14;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 15;
     */
    vendorBillDate: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GoodsReceiptsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceUpdateRequest;
    static equals(a: GoodsReceiptsServiceUpdateRequest | PlainMessage<GoodsReceiptsServiceUpdateRequest> | undefined, b: GoodsReceiptsServiceUpdateRequest | PlainMessage<GoodsReceiptsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Genesis.GoodsReceiptsServiceAutofillRequest
 */
export declare class GoodsReceiptsServiceAutofillRequest extends Message<GoodsReceiptsServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<GoodsReceiptsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceAutofillRequest;
    static equals(a: GoodsReceiptsServiceAutofillRequest | PlainMessage<GoodsReceiptsServiceAutofillRequest> | undefined, b: GoodsReceiptsServiceAutofillRequest | PlainMessage<GoodsReceiptsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.GoodsReceipt
 */
export declare class GoodsReceipt extends Message<GoodsReceipt> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this goods receipt
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
     * The status of this goods receipt
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this goods receipt
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this goods receipt was marked as completed
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
     * The reference ID of the goods receipt
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
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 14;
     */
    vendorBillNo: string;
    /**
     * The date on which the bill was raised by the vendor
     *
     * @generated from field: string vendor_bill_date = 15;
     */
    vendorBillDate: string;
    /**
     * The list of associated goods receipt items
     *
     * @generated from field: repeated Genesis.GoodsReceiptItem list = 20;
     */
    list: GoodsReceiptItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<GoodsReceipt>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceipt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceipt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceipt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceipt;
    static equals(a: GoodsReceipt | PlainMessage<GoodsReceipt> | undefined, b: GoodsReceipt | PlainMessage<GoodsReceipt> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a goods receipt
 *
 * @generated from message Genesis.GoodsReceiptsServiceItemCreateRequest
 */
export declare class GoodsReceiptsServiceItemCreateRequest extends Message<GoodsReceiptsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the goods receipt ID
     *
     * @generated from field: int64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in vendor's unit of material
     *
     * @generated from field: int64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<GoodsReceiptsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceItemCreateRequest;
    static equals(a: GoodsReceiptsServiceItemCreateRequest | PlainMessage<GoodsReceiptsServiceItemCreateRequest> | undefined, b: GoodsReceiptsServiceItemCreateRequest | PlainMessage<GoodsReceiptsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a goods receipt
 *
 * @generated from message Genesis.GoodsReceiptsServiceItemUpdateRequest
 */
export declare class GoodsReceiptsServiceItemUpdateRequest extends Message<GoodsReceiptsServiceItemUpdateRequest> {
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in vendor's unit of material
     *
     * @generated from field: int64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<GoodsReceiptsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceItemUpdateRequest;
    static equals(a: GoodsReceiptsServiceItemUpdateRequest | PlainMessage<GoodsReceiptsServiceItemUpdateRequest> | undefined, b: GoodsReceiptsServiceItemUpdateRequest | PlainMessage<GoodsReceiptsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a goods receipt
 *
 * @generated from message Genesis.GoodsReceiptItem
 */
export declare class GoodsReceiptItem extends Message<GoodsReceiptItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this goods receipt
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
     * Stores the goods receipt ID
     *
     * @generated from field: int64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
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
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: int64 vendor_uom_id = 13;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being admitted in vendor's unit of material
     *
     * @generated from field: int64 vendor_quantity = 14;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<GoodsReceiptItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptItem;
    static equals(a: GoodsReceiptItem | PlainMessage<GoodsReceiptItem> | undefined, b: GoodsReceiptItem | PlainMessage<GoodsReceiptItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goods receipts
 *
 * @generated from message Genesis.GoodsReceiptsList
 */
export declare class GoodsReceiptsList extends Message<GoodsReceiptsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.GoodsReceipt list = 1;
     */
    list: GoodsReceipt[];
    constructor(data?: PartialMessage<GoodsReceiptsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsList;
    static equals(a: GoodsReceiptsList | PlainMessage<GoodsReceiptsList> | undefined, b: GoodsReceiptsList | PlainMessage<GoodsReceiptsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of goods receipt items
 *
 * @generated from message Genesis.GoodsReceiptsItemsList
 */
export declare class GoodsReceiptsItemsList extends Message<GoodsReceiptsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.GoodsReceiptItem list = 1;
     */
    list: GoodsReceiptItem[];
    constructor(data?: PartialMessage<GoodsReceiptsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsItemsList;
    static equals(a: GoodsReceiptsItemsList | PlainMessage<GoodsReceiptsItemsList> | undefined, b: GoodsReceiptsItemsList | PlainMessage<GoodsReceiptsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.GoodsReceiptItemHistoryRequest
 */
export declare class GoodsReceiptItemHistoryRequest extends Message<GoodsReceiptItemHistoryRequest> {
    /**
     * Stores the goods receipt ID
     *
     * @generated from field: int64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<GoodsReceiptItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptItemHistoryRequest;
    static equals(a: GoodsReceiptItemHistoryRequest | PlainMessage<GoodsReceiptItemHistoryRequest> | undefined, b: GoodsReceiptItemHistoryRequest | PlainMessage<GoodsReceiptItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective goods receipt item
 *
 * @generated from message Genesis.GoodsReceiptItemProspectiveInfoRequest
 */
export declare class GoodsReceiptItemProspectiveInfoRequest extends Message<GoodsReceiptItemProspectiveInfoRequest> {
    /**
     * Stores the goods receipt ID
     *
     * @generated from field: int64 goods_receipt_id = 10;
     */
    goodsReceiptId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<GoodsReceiptItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptItemProspectiveInfoRequest;
    static equals(a: GoodsReceiptItemProspectiveInfoRequest | PlainMessage<GoodsReceiptItemProspectiveInfoRequest> | undefined, b: GoodsReceiptItemProspectiveInfoRequest | PlainMessage<GoodsReceiptItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Genesis.GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest extends Message<GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest> {
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
    constructor(data?: PartialMessage<GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.GoodsReceiptsServicePaginationReq
 */
export declare class GoodsReceiptsServicePaginationReq extends Message<GoodsReceiptsServicePaginationReq> {
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
     * @generated from field: Genesis.GOODS_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_RECEIPT_SORT_KEY;
    /**
     * The status of this goods receipt
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<GoodsReceiptsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginationReq;
    static equals(a: GoodsReceiptsServicePaginationReq | PlainMessage<GoodsReceiptsServicePaginationReq> | undefined, b: GoodsReceiptsServicePaginationReq | PlainMessage<GoodsReceiptsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.GoodsReceiptsServicePaginationResponse
 */
export declare class GoodsReceiptsServicePaginationResponse extends Message<GoodsReceiptsServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.GoodsReceipt payload = 4;
     */
    payload: GoodsReceipt[];
    constructor(data?: PartialMessage<GoodsReceiptsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServicePaginationResponse;
    static equals(a: GoodsReceiptsServicePaginationResponse | PlainMessage<GoodsReceiptsServicePaginationResponse> | undefined, b: GoodsReceiptsServicePaginationResponse | PlainMessage<GoodsReceiptsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.GoodsReceiptsServiceEntityPaginationReq
 */
export declare class GoodsReceiptsServiceEntityPaginationReq extends Message<GoodsReceiptsServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.GOODS_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_RECEIPT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<GoodsReceiptsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceEntityPaginationReq;
    static equals(a: GoodsReceiptsServiceEntityPaginationReq | PlainMessage<GoodsReceiptsServiceEntityPaginationReq> | undefined, b: GoodsReceiptsServiceEntityPaginationReq | PlainMessage<GoodsReceiptsServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.GoodsReceiptsServiceFilterReq
 */
export declare class GoodsReceiptsServiceFilterReq extends Message<GoodsReceiptsServiceFilterReq> {
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
     * @generated from field: Genesis.GOODS_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_RECEIPT_SORT_KEY;
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
     * The status of this goods receipt
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
     * The reference ID of the goods receipt
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
     * The vendor's bill number
     *
     * @generated from field: string vendor_bill_no = 24;
     */
    vendorBillNo: string;
    /**
     * The start date of vendor bills
     *
     * @generated from field: string vendor_bill_date_start = 25;
     */
    vendorBillDateStart: string;
    /**
     * The end date of vendor bills
     *
     * @generated from field: string vendor_bill_date_end = 26;
     */
    vendorBillDateEnd: string;
    /**
     * The status of the goods receipt bill
     *
     * @generated from field: Genesis.GOODS_RECEIPT_BILLING_STATUS billing_status = 40;
     */
    billingStatus: GOODS_RECEIPT_BILLING_STATUS;
    constructor(data?: PartialMessage<GoodsReceiptsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceFilterReq;
    static equals(a: GoodsReceiptsServiceFilterReq | PlainMessage<GoodsReceiptsServiceFilterReq> | undefined, b: GoodsReceiptsServiceFilterReq | PlainMessage<GoodsReceiptsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.GoodsReceiptsServiceSearchAllReq
 */
export declare class GoodsReceiptsServiceSearchAllReq extends Message<GoodsReceiptsServiceSearchAllReq> {
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
     * @generated from field: Genesis.GOODS_RECEIPT_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_RECEIPT_SORT_KEY;
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
     * The status of the goods receipt bill
     *
     * @generated from field: Genesis.GOODS_RECEIPT_BILLING_STATUS billing_status = 40;
     */
    billingStatus: GOODS_RECEIPT_BILLING_STATUS;
    constructor(data?: PartialMessage<GoodsReceiptsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsReceiptsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsReceiptsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsReceiptsServiceSearchAllReq;
    static equals(a: GoodsReceiptsServiceSearchAllReq | PlainMessage<GoodsReceiptsServiceSearchAllReq> | undefined, b: GoodsReceiptsServiceSearchAllReq | PlainMessage<GoodsReceiptsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=goods_receipts_pb.d.ts.map