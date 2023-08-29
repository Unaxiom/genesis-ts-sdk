import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.WORK_ORDER_SORT_KEY
 */
export declare enum WORK_ORDER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    WORK_ORDER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_CREATED_AT = 1;
     */
    WORK_ORDER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_MODIFIED_AT = 2;
     */
    WORK_ORDER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_APPROVED_ON = 3;
     */
    WORK_ORDER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_APPROVED_BY = 4;
     */
    WORK_ORDER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    WORK_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_COMPLETED_ON = 6;
     */
    WORK_ORDER_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_REFERENCE_ID = 10;
     */
    WORK_ORDER_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    WORK_ORDER_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: WORK_ORDER_SORT_KEY_LOCATION_ID = 12;
     */
    WORK_ORDER_SORT_KEY_LOCATION_ID = 12
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.WorkOrdersServiceCreateRequest
 */
export declare class WorkOrdersServiceCreateRequest extends Message<WorkOrdersServiceCreateRequest> {
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
     * The reference ID of the work order
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<WorkOrdersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceCreateRequest;
    static equals(a: WorkOrdersServiceCreateRequest | PlainMessage<WorkOrdersServiceCreateRequest> | undefined, b: WorkOrdersServiceCreateRequest | PlainMessage<WorkOrdersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.WorkOrdersServiceUpdateRequest
 */
export declare class WorkOrdersServiceUpdateRequest extends Message<WorkOrdersServiceUpdateRequest> {
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
     * The reference ID of the work order
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
    constructor(data?: PartialMessage<WorkOrdersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceUpdateRequest;
    static equals(a: WorkOrdersServiceUpdateRequest | PlainMessage<WorkOrdersServiceUpdateRequest> | undefined, b: WorkOrdersServiceUpdateRequest | PlainMessage<WorkOrdersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Genesis.WorkOrdersServiceAutofillRequest
 */
export declare class WorkOrdersServiceAutofillRequest extends Message<WorkOrdersServiceAutofillRequest> {
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
     * Denotes if all the equation dependencies (if applicable) should also be automatically added to the work order
     *
     * @generated from field: bool populate_using_equation_dependencies = 3;
     */
    populateUsingEquationDependencies: boolean;
    constructor(data?: PartialMessage<WorkOrdersServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceAutofillRequest;
    static equals(a: WorkOrdersServiceAutofillRequest | PlainMessage<WorkOrdersServiceAutofillRequest> | undefined, b: WorkOrdersServiceAutofillRequest | PlainMessage<WorkOrdersServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.WorkOrder
 */
export declare class WorkOrder extends Message<WorkOrder> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this work order
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
     * The status of this work order
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this work order
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this work order was marked as completed
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
     * The reference ID of the work order
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The list of associated work order items
     *
     * @generated from field: repeated Genesis.WorkOrderItem list = 20;
     */
    list: WorkOrderItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<WorkOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrder;
    static equals(a: WorkOrder | PlainMessage<WorkOrder> | undefined, b: WorkOrder | PlainMessage<WorkOrder> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a work order
 *
 * @generated from message Genesis.WorkOrdersServiceItemCreateRequest
 */
export declare class WorkOrdersServiceItemCreateRequest extends Message<WorkOrdersServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the work order ID
     *
     * @generated from field: int64 work_order_id = 10;
     */
    workOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    constructor(data?: PartialMessage<WorkOrdersServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceItemCreateRequest;
    static equals(a: WorkOrdersServiceItemCreateRequest | PlainMessage<WorkOrdersServiceItemCreateRequest> | undefined, b: WorkOrdersServiceItemCreateRequest | PlainMessage<WorkOrdersServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a work order
 *
 * @generated from message Genesis.WorkOrdersServiceItemUpdateRequest
 */
export declare class WorkOrdersServiceItemUpdateRequest extends Message<WorkOrdersServiceItemUpdateRequest> {
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
     * The quantity of the item
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    constructor(data?: PartialMessage<WorkOrdersServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceItemUpdateRequest;
    static equals(a: WorkOrdersServiceItemUpdateRequest | PlainMessage<WorkOrdersServiceItemUpdateRequest> | undefined, b: WorkOrdersServiceItemUpdateRequest | PlainMessage<WorkOrdersServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a work order
 *
 * @generated from message Genesis.WorkOrderItem
 */
export declare class WorkOrderItem extends Message<WorkOrderItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this work order
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
     * Stores the work order ID
     *
     * @generated from field: int64 work_order_id = 10;
     */
    workOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    constructor(data?: PartialMessage<WorkOrderItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrderItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderItem;
    static equals(a: WorkOrderItem | PlainMessage<WorkOrderItem> | undefined, b: WorkOrderItem | PlainMessage<WorkOrderItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of work orders
 *
 * @generated from message Genesis.WorkOrdersList
 */
export declare class WorkOrdersList extends Message<WorkOrdersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.WorkOrder list = 1;
     */
    list: WorkOrder[];
    constructor(data?: PartialMessage<WorkOrdersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersList;
    static equals(a: WorkOrdersList | PlainMessage<WorkOrdersList> | undefined, b: WorkOrdersList | PlainMessage<WorkOrdersList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of work order items
 *
 * @generated from message Genesis.WorkOrdersItemsList
 */
export declare class WorkOrdersItemsList extends Message<WorkOrdersItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.WorkOrderItem list = 1;
     */
    list: WorkOrderItem[];
    constructor(data?: PartialMessage<WorkOrdersItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersItemsList;
    static equals(a: WorkOrdersItemsList | PlainMessage<WorkOrdersItemsList> | undefined, b: WorkOrdersItemsList | PlainMessage<WorkOrdersItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.WorkOrderItemHistoryRequest
 */
export declare class WorkOrderItemHistoryRequest extends Message<WorkOrderItemHistoryRequest> {
    /**
     * Stores the work order ID
     *
     * @generated from field: int64 work_order_id = 10;
     */
    workOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<WorkOrderItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrderItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderItemHistoryRequest;
    static equals(a: WorkOrderItemHistoryRequest | PlainMessage<WorkOrderItemHistoryRequest> | undefined, b: WorkOrderItemHistoryRequest | PlainMessage<WorkOrderItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective work order item
 *
 * @generated from message Genesis.WorkOrderItemProspectiveInfoRequest
 */
export declare class WorkOrderItemProspectiveInfoRequest extends Message<WorkOrderItemProspectiveInfoRequest> {
    /**
     * Stores the work order ID
     *
     * @generated from field: int64 work_order_id = 10;
     */
    workOrderId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<WorkOrderItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrderItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrderItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrderItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrderItemProspectiveInfoRequest;
    static equals(a: WorkOrderItemProspectiveInfoRequest | PlainMessage<WorkOrderItemProspectiveInfoRequest> | undefined, b: WorkOrderItemProspectiveInfoRequest | PlainMessage<WorkOrderItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.WorkOrdersServicePaginationReq
 */
export declare class WorkOrdersServicePaginationReq extends Message<WorkOrdersServicePaginationReq> {
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
     * @generated from field: Genesis.WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: WORK_ORDER_SORT_KEY;
    /**
     * The status of this work order
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<WorkOrdersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginationReq;
    static equals(a: WorkOrdersServicePaginationReq | PlainMessage<WorkOrdersServicePaginationReq> | undefined, b: WorkOrdersServicePaginationReq | PlainMessage<WorkOrdersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.WorkOrdersServicePaginationResponse
 */
export declare class WorkOrdersServicePaginationResponse extends Message<WorkOrdersServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.WorkOrder payload = 4;
     */
    payload: WorkOrder[];
    constructor(data?: PartialMessage<WorkOrdersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServicePaginationResponse;
    static equals(a: WorkOrdersServicePaginationResponse | PlainMessage<WorkOrdersServicePaginationResponse> | undefined, b: WorkOrdersServicePaginationResponse | PlainMessage<WorkOrdersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.WorkOrdersServiceEntityPaginationReq
 */
export declare class WorkOrdersServiceEntityPaginationReq extends Message<WorkOrdersServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: WORK_ORDER_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<WorkOrdersServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceEntityPaginationReq;
    static equals(a: WorkOrdersServiceEntityPaginationReq | PlainMessage<WorkOrdersServiceEntityPaginationReq> | undefined, b: WorkOrdersServiceEntityPaginationReq | PlainMessage<WorkOrdersServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.WorkOrdersServiceFilterReq
 */
export declare class WorkOrdersServiceFilterReq extends Message<WorkOrdersServiceFilterReq> {
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
     * @generated from field: Genesis.WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: WORK_ORDER_SORT_KEY;
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
     * The status of this work order
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
     * The exact delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_exact = 17;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_start = 18;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of any item in the work order
     *
     * @generated from field: string delivery_date_end = 19;
     */
    deliveryDateEnd: string;
    /**
     * The reference ID of the work order
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 24;
     */
    locationId: bigint;
    constructor(data?: PartialMessage<WorkOrdersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceFilterReq;
    static equals(a: WorkOrdersServiceFilterReq | PlainMessage<WorkOrdersServiceFilterReq> | undefined, b: WorkOrdersServiceFilterReq | PlainMessage<WorkOrdersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.WorkOrdersServiceSearchAllReq
 */
export declare class WorkOrdersServiceSearchAllReq extends Message<WorkOrdersServiceSearchAllReq> {
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
     * @generated from field: Genesis.WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: WORK_ORDER_SORT_KEY;
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 24;
     */
    locationId: bigint;
    constructor(data?: PartialMessage<WorkOrdersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.WorkOrdersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkOrdersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkOrdersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkOrdersServiceSearchAllReq;
    static equals(a: WorkOrdersServiceSearchAllReq | PlainMessage<WorkOrdersServiceSearchAllReq> | undefined, b: WorkOrdersServiceSearchAllReq | PlainMessage<WorkOrdersServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=work_orders_pb.d.ts.map