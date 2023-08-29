import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.GOODS_DISPATCH_SORT_KEY
 */
export declare enum GOODS_DISPATCH_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_CREATED_AT = 1;
     */
    GOODS_DISPATCH_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_MODIFIED_AT = 2;
     */
    GOODS_DISPATCH_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_APPROVED_ON = 3;
     */
    GOODS_DISPATCH_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_APPROVED_BY = 4;
     */
    GOODS_DISPATCH_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    GOODS_DISPATCH_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_COMPLETED_ON = 6;
     */
    GOODS_DISPATCH_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_REFERENCE_ID = 10;
     */
    GOODS_DISPATCH_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: GOODS_DISPATCH_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    GOODS_DISPATCH_SORT_KEY_FINAL_REF_NUMBER = 11
***REMOVED***
/**
 *
 * Describes the available billing statuses
 *
 * @generated from enum Genesis.GOODS_DISPATCH_BILLING_STATUS
 */
export declare enum GOODS_DISPATCH_BILLING_STATUS ***REMOVED***
    /**
     * Any billing status
     *
     * @generated from enum value: GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED = 0;
     */
    GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Goods dispatch is billed
     *
     * @generated from enum value: GOODS_DISPATCH_BILLING_STATUS_BILLED = 1;
     */
    GOODS_DISPATCH_BILLING_STATUS_BILLED = 1,
    /**
     * Goods dispatch is unbilled
     *
     * @generated from enum value: GOODS_DISPATCH_BILLING_STATUS_UNBILLED = 2;
     */
    GOODS_DISPATCH_BILLING_STATUS_UNBILLED = 2
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.GoodsDispatchesServiceCreateRequest
 */
export declare class GoodsDispatchesServiceCreateRequest extends Message<GoodsDispatchesServiceCreateRequest> ***REMOVED***
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
     * The reference ID of the goods dispatch
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
    constructor(data?: PartialMessage<GoodsDispatchesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceCreateRequest;
    static equals(a: GoodsDispatchesServiceCreateRequest | PlainMessage<GoodsDispatchesServiceCreateRequest> | undefined, b: GoodsDispatchesServiceCreateRequest | PlainMessage<GoodsDispatchesServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.GoodsDispatchesServiceUpdateRequest
 */
export declare class GoodsDispatchesServiceUpdateRequest extends Message<GoodsDispatchesServiceUpdateRequest> ***REMOVED***
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
     * The reference ID of the goods dispatch
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
    constructor(data?: PartialMessage<GoodsDispatchesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceUpdateRequest;
    static equals(a: GoodsDispatchesServiceUpdateRequest | PlainMessage<GoodsDispatchesServiceUpdateRequest> | undefined, b: GoodsDispatchesServiceUpdateRequest | PlainMessage<GoodsDispatchesServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Genesis.GoodsDispatchesServiceAutofillRequest
 */
export declare class GoodsDispatchesServiceAutofillRequest extends Message<GoodsDispatchesServiceAutofillRequest> ***REMOVED***
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
    constructor(data?: PartialMessage<GoodsDispatchesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceAutofillRequest;
    static equals(a: GoodsDispatchesServiceAutofillRequest | PlainMessage<GoodsDispatchesServiceAutofillRequest> | undefined, b: GoodsDispatchesServiceAutofillRequest | PlainMessage<GoodsDispatchesServiceAutofillRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.GoodsDispatch
 */
export declare class GoodsDispatch extends Message<GoodsDispatch> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this goods dispatch
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
     * The status of this goods dispatch
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this goods dispatch
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this goods dispatch was marked as completed
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
     * The reference ID of the goods dispatch
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
     * The list of associated goods dispatch items
     *
     * @generated from field: repeated Genesis.GoodsDispatchItem list = 20;
     */
    list: GoodsDispatchItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<GoodsDispatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatch;
    static equals(a: GoodsDispatch | PlainMessage<GoodsDispatch> | undefined, b: GoodsDispatch | PlainMessage<GoodsDispatch> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add an item to a goods dispatch
 *
 * @generated from message Genesis.GoodsDispatchesServiceItemCreateRequest
 */
export declare class GoodsDispatchesServiceItemCreateRequest extends Message<GoodsDispatchesServiceItemCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: int64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
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
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<GoodsDispatchesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceItemCreateRequest;
    static equals(a: GoodsDispatchesServiceItemCreateRequest | PlainMessage<GoodsDispatchesServiceItemCreateRequest> | undefined, b: GoodsDispatchesServiceItemCreateRequest | PlainMessage<GoodsDispatchesServiceItemCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update an item in a goods dispatch
 *
 * @generated from message Genesis.GoodsDispatchesServiceItemUpdateRequest
 */
export declare class GoodsDispatchesServiceItemUpdateRequest extends Message<GoodsDispatchesServiceItemUpdateRequest> ***REMOVED***
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
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<GoodsDispatchesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceItemUpdateRequest;
    static equals(a: GoodsDispatchesServiceItemUpdateRequest | PlainMessage<GoodsDispatchesServiceItemUpdateRequest> | undefined, b: GoodsDispatchesServiceItemUpdateRequest | PlainMessage<GoodsDispatchesServiceItemUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute an item associated to a goods dispatch
 *
 * @generated from message Genesis.GoodsDispatchItem
 */
export declare class GoodsDispatchItem extends Message<GoodsDispatchItem> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this goods dispatch
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
     * Stores the goods dispatch ID
     *
     * @generated from field: int64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
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
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<GoodsDispatchItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchItem;
    static equals(a: GoodsDispatchItem | PlainMessage<GoodsDispatchItem> | undefined, b: GoodsDispatchItem | PlainMessage<GoodsDispatchItem> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of goods dispatches
 *
 * @generated from message Genesis.GoodsDispatchesList
 */
export declare class GoodsDispatchesList extends Message<GoodsDispatchesList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.GoodsDispatch list = 1;
     */
    list: GoodsDispatch[];
    constructor(data?: PartialMessage<GoodsDispatchesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesList;
    static equals(a: GoodsDispatchesList | PlainMessage<GoodsDispatchesList> | undefined, b: GoodsDispatchesList | PlainMessage<GoodsDispatchesList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of goods dispatch items
 *
 * @generated from message Genesis.GoodsDispatchesItemsList
 */
export declare class GoodsDispatchesItemsList extends Message<GoodsDispatchesItemsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.GoodsDispatchItem list = 1;
     */
    list: GoodsDispatchItem[];
    constructor(data?: PartialMessage<GoodsDispatchesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesItemsList;
    static equals(a: GoodsDispatchesItemsList | PlainMessage<GoodsDispatchesItemsList> | undefined, b: GoodsDispatchesItemsList | PlainMessage<GoodsDispatchesItemsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.GoodsDispatchItemHistoryRequest
 */
export declare class GoodsDispatchItemHistoryRequest extends Message<GoodsDispatchItemHistoryRequest> ***REMOVED***
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: int64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<GoodsDispatchItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchItemHistoryRequest;
    static equals(a: GoodsDispatchItemHistoryRequest | PlainMessage<GoodsDispatchItemHistoryRequest> | undefined, b: GoodsDispatchItemHistoryRequest | PlainMessage<GoodsDispatchItemHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective goods dispatch item
 *
 * @generated from message Genesis.GoodsDispatchItemProspectiveInfoRequest
 */
export declare class GoodsDispatchItemProspectiveInfoRequest extends Message<GoodsDispatchItemProspectiveInfoRequest> ***REMOVED***
    /**
     * Stores the goods dispatch ID
     *
     * @generated from field: int64 goods_dispatch_id = 10;
     */
    goodsDispatchId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<GoodsDispatchItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchItemProspectiveInfoRequest;
    static equals(a: GoodsDispatchItemProspectiveInfoRequest | PlainMessage<GoodsDispatchItemProspectiveInfoRequest> | undefined, b: GoodsDispatchItemProspectiveInfoRequest | PlainMessage<GoodsDispatchItemProspectiveInfoRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Genesis.GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest extends Message<GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest> ***REMOVED***
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
    constructor(data?: PartialMessage<GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.GoodsDispatchesServicePaginationReq
 */
export declare class GoodsDispatchesServicePaginationReq extends Message<GoodsDispatchesServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.GOODS_DISPATCH_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_DISPATCH_SORT_KEY;
    /**
     * The status of this goods dispatch
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<GoodsDispatchesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginationReq;
    static equals(a: GoodsDispatchesServicePaginationReq | PlainMessage<GoodsDispatchesServicePaginationReq> | undefined, b: GoodsDispatchesServicePaginationReq | PlainMessage<GoodsDispatchesServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.GoodsDispatchesServicePaginationResponse
 */
export declare class GoodsDispatchesServicePaginationResponse extends Message<GoodsDispatchesServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.GoodsDispatch payload = 4;
     */
    payload: GoodsDispatch[];
    constructor(data?: PartialMessage<GoodsDispatchesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServicePaginationResponse;
    static equals(a: GoodsDispatchesServicePaginationResponse | PlainMessage<GoodsDispatchesServicePaginationResponse> | undefined, b: GoodsDispatchesServicePaginationResponse | PlainMessage<GoodsDispatchesServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.GoodsDispatchesServiceEntityPaginationReq
 */
export declare class GoodsDispatchesServiceEntityPaginationReq extends Message<GoodsDispatchesServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.GOODS_DISPATCH_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_DISPATCH_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<GoodsDispatchesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceEntityPaginationReq;
    static equals(a: GoodsDispatchesServiceEntityPaginationReq | PlainMessage<GoodsDispatchesServiceEntityPaginationReq> | undefined, b: GoodsDispatchesServiceEntityPaginationReq | PlainMessage<GoodsDispatchesServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.GoodsDispatchesServiceFilterReq
 */
export declare class GoodsDispatchesServiceFilterReq extends Message<GoodsDispatchesServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.GOODS_DISPATCH_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_DISPATCH_SORT_KEY;
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
     * The status of this goods dispatch
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
     * The reference ID of the goods dispatch
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
     * The status of the goods dispatch bill
     *
     * @generated from field: Genesis.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;
     */
    billingStatus: GOODS_DISPATCH_BILLING_STATUS;
    constructor(data?: PartialMessage<GoodsDispatchesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceFilterReq;
    static equals(a: GoodsDispatchesServiceFilterReq | PlainMessage<GoodsDispatchesServiceFilterReq> | undefined, b: GoodsDispatchesServiceFilterReq | PlainMessage<GoodsDispatchesServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.GoodsDispatchesServiceSearchAllReq
 */
export declare class GoodsDispatchesServiceSearchAllReq extends Message<GoodsDispatchesServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.GOODS_DISPATCH_SORT_KEY sort_key = 5;
     */
    sortKey: GOODS_DISPATCH_SORT_KEY;
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
     * The status of the goods dispatch bill
     *
     * @generated from field: Genesis.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;
     */
    billingStatus: GOODS_DISPATCH_BILLING_STATUS;
    constructor(data?: PartialMessage<GoodsDispatchesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GoodsDispatchesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoodsDispatchesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoodsDispatchesServiceSearchAllReq;
    static equals(a: GoodsDispatchesServiceSearchAllReq | PlainMessage<GoodsDispatchesServiceSearchAllReq> | undefined, b: GoodsDispatchesServiceSearchAllReq | PlainMessage<GoodsDispatchesServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=goods_dispatches_pb.d.ts.map