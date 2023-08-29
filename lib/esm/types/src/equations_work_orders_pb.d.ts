import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.EQUATION_WORK_ORDER_SORT_KEY
 */
export declare enum EQUATION_WORK_ORDER_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_CREATED_AT = 1;
     */
    EQUATION_WORK_ORDER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_MODIFIED_AT = 2;
     */
    EQUATION_WORK_ORDER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_APPROVED_ON = 3;
     */
    EQUATION_WORK_ORDER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_APPROVED_BY = 4;
     */
    EQUATION_WORK_ORDER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EQUATION_WORK_ORDER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_COMPLETED_ON = 6;
     */
    EQUATION_WORK_ORDER_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_NAME = 10;
     */
    EQUATION_WORK_ORDER_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the work order ID
     *
     * @generated from enum value: EQUATION_WORK_ORDER_SORT_KEY_WORK_ORDER_ID = 11;
     */
    EQUATION_WORK_ORDER_SORT_KEY_WORK_ORDER_ID = 11
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.EquationsWorkOrdersServiceCreateRequest
 */
export declare class EquationsWorkOrdersServiceCreateRequest extends Message<EquationsWorkOrdersServiceCreateRequest> ***REMOVED***
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
     * The name of the equation work order
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the work order that this equation belongs to
     *
     * @generated from field: int64 work_order_id = 12;
     */
    workOrderId: bigint;
    /**
     * The description of the equation work order
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceCreateRequest;
    static equals(a: EquationsWorkOrdersServiceCreateRequest | PlainMessage<EquationsWorkOrdersServiceCreateRequest> | undefined, b: EquationsWorkOrdersServiceCreateRequest | PlainMessage<EquationsWorkOrdersServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.EquationsWorkOrdersServiceUpdateRequest
 */
export declare class EquationsWorkOrdersServiceUpdateRequest extends Message<EquationsWorkOrdersServiceUpdateRequest> ***REMOVED***
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
     * The name of the equation work order
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the equation work order
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceUpdateRequest;
    static equals(a: EquationsWorkOrdersServiceUpdateRequest | PlainMessage<EquationsWorkOrdersServiceUpdateRequest> | undefined, b: EquationsWorkOrdersServiceUpdateRequest | PlainMessage<EquationsWorkOrdersServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.EquationWorkOrder
 */
export declare class EquationWorkOrder extends Message<EquationWorkOrder> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation work order
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
     * The status of this equation work order
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this equation work order
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this equation work order was marked as completed
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
     * The name of the equation work order
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the work order that this equation belongs to
     *
     * @generated from field: int64 work_order_id = 12;
     */
    workOrderId: bigint;
    /**
     * The description of the equation work order
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated equation work order items
     *
     * @generated from field: repeated Genesis.EquationWorkOrderItem list = 20;
     */
    list: EquationWorkOrderItem[];
    /**
     * The total price of the equation work order
     *
     * @generated from field: double total_price = 40;
     */
    totalPrice: number;
    constructor(data?: PartialMessage<EquationWorkOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationWorkOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationWorkOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationWorkOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationWorkOrder;
    static equals(a: EquationWorkOrder | PlainMessage<EquationWorkOrder> | undefined, b: EquationWorkOrder | PlainMessage<EquationWorkOrder> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add an item to a equation work order
 *
 * @generated from message Genesis.EquationsWorkOrdersServiceItemCreateRequest
 */
export declare class EquationsWorkOrdersServiceItemCreateRequest extends Message<EquationsWorkOrdersServiceItemCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the equation work order
     *
     * @generated from field: int64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the associated family to be used as the multiplier
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The optional unit price of this family
     *
     * @generated from field: int64 unit_price = 13;
     */
    unitPrice: bigint;
    /**
     * The optional specifications
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceItemCreateRequest;
    static equals(a: EquationsWorkOrdersServiceItemCreateRequest | PlainMessage<EquationsWorkOrdersServiceItemCreateRequest> | undefined, b: EquationsWorkOrdersServiceItemCreateRequest | PlainMessage<EquationsWorkOrdersServiceItemCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update an item in a equation work order
 *
 * @generated from message Genesis.EquationsWorkOrdersServiceItemUpdateRequest
 */
export declare class EquationsWorkOrdersServiceItemUpdateRequest extends Message<EquationsWorkOrdersServiceItemUpdateRequest> ***REMOVED***
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
     * The quantity of the associated family to be used as the multiplier
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The optional unit price of this family
     *
     * @generated from field: int64 unit_price = 13;
     */
    unitPrice: bigint;
    /**
     * The optional specifications
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceItemUpdateRequest;
    static equals(a: EquationsWorkOrdersServiceItemUpdateRequest | PlainMessage<EquationsWorkOrdersServiceItemUpdateRequest> | undefined, b: EquationsWorkOrdersServiceItemUpdateRequest | PlainMessage<EquationsWorkOrdersServiceItemUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute an item associated to a equation work order
 *
 * @generated from message Genesis.EquationWorkOrderItem
 */
export declare class EquationWorkOrderItem extends Message<EquationWorkOrderItem> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation work order
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
     * Stores the ID of the equation work order
     *
     * @generated from field: int64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the associated family to be used as the multiplier
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    /**
     * The optional unit price of this family
     *
     * @generated from field: int64 unit_price = 13;
     */
    unitPrice: bigint;
    /**
     * The optional specifications
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<EquationWorkOrderItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationWorkOrderItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationWorkOrderItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationWorkOrderItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationWorkOrderItem;
    static equals(a: EquationWorkOrderItem | PlainMessage<EquationWorkOrderItem> | undefined, b: EquationWorkOrderItem | PlainMessage<EquationWorkOrderItem> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of equations work orders
 *
 * @generated from message Genesis.EquationsWorkOrdersList
 */
export declare class EquationsWorkOrdersList extends Message<EquationsWorkOrdersList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.EquationWorkOrder list = 1;
     */
    list: EquationWorkOrder[];
    constructor(data?: PartialMessage<EquationsWorkOrdersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersList;
    static equals(a: EquationsWorkOrdersList | PlainMessage<EquationsWorkOrdersList> | undefined, b: EquationsWorkOrdersList | PlainMessage<EquationsWorkOrdersList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of equation work order items
 *
 * @generated from message Genesis.EquationsWorkOrdersItemsList
 */
export declare class EquationsWorkOrdersItemsList extends Message<EquationsWorkOrdersItemsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.EquationWorkOrderItem list = 1;
     */
    list: EquationWorkOrderItem[];
    constructor(data?: PartialMessage<EquationsWorkOrdersItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersItemsList;
    static equals(a: EquationsWorkOrdersItemsList | PlainMessage<EquationsWorkOrdersItemsList> | undefined, b: EquationsWorkOrdersItemsList | PlainMessage<EquationsWorkOrdersItemsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.EquationWorkOrderItemHistoryRequest
 */
export declare class EquationWorkOrderItemHistoryRequest extends Message<EquationWorkOrderItemHistoryRequest> ***REMOVED***
    /**
     * Stores the ID of the equation work order
     *
     * @generated from field: int64 equation_id = 10;
     */
    equationId: bigint;
    /**
     * The ID of the family that the equation depends upon
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<EquationWorkOrderItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationWorkOrderItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationWorkOrderItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationWorkOrderItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationWorkOrderItemHistoryRequest;
    static equals(a: EquationWorkOrderItemHistoryRequest | PlainMessage<EquationWorkOrderItemHistoryRequest> | undefined, b: EquationWorkOrderItemHistoryRequest | PlainMessage<EquationWorkOrderItemHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.EquationsWorkOrdersServicePaginationReq
 */
export declare class EquationsWorkOrdersServicePaginationReq extends Message<EquationsWorkOrdersServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_WORK_ORDER_SORT_KEY;
    /**
     * The status of this equation work order
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<EquationsWorkOrdersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginationReq;
    static equals(a: EquationsWorkOrdersServicePaginationReq | PlainMessage<EquationsWorkOrdersServicePaginationReq> | undefined, b: EquationsWorkOrdersServicePaginationReq | PlainMessage<EquationsWorkOrdersServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.EquationsWorkOrdersServicePaginationResponse
 */
export declare class EquationsWorkOrdersServicePaginationResponse extends Message<EquationsWorkOrdersServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.EquationWorkOrder payload = 4;
     */
    payload: EquationWorkOrder[];
    constructor(data?: PartialMessage<EquationsWorkOrdersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServicePaginationResponse;
    static equals(a: EquationsWorkOrdersServicePaginationResponse | PlainMessage<EquationsWorkOrdersServicePaginationResponse> | undefined, b: EquationsWorkOrdersServicePaginationResponse | PlainMessage<EquationsWorkOrdersServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.EquationsWorkOrdersServiceEntityPaginationReq
 */
export declare class EquationsWorkOrdersServiceEntityPaginationReq extends Message<EquationsWorkOrdersServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_WORK_ORDER_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceEntityPaginationReq;
    static equals(a: EquationsWorkOrdersServiceEntityPaginationReq | PlainMessage<EquationsWorkOrdersServiceEntityPaginationReq> | undefined, b: EquationsWorkOrdersServiceEntityPaginationReq | PlainMessage<EquationsWorkOrdersServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.EquationsWorkOrdersServiceFilterReq
 */
export declare class EquationsWorkOrdersServiceFilterReq extends Message<EquationsWorkOrdersServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_WORK_ORDER_SORT_KEY;
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
     * The status of this equation work order
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
     * The name of the equation work order
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The ID of the work order that this equation belongs to
     *
     * @generated from field: int64 work_order_id = 21;
     */
    workOrderId: bigint;
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceFilterReq;
    static equals(a: EquationsWorkOrdersServiceFilterReq | PlainMessage<EquationsWorkOrdersServiceFilterReq> | undefined, b: EquationsWorkOrdersServiceFilterReq | PlainMessage<EquationsWorkOrdersServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.EquationsWorkOrdersServiceSearchAllReq
 */
export declare class EquationsWorkOrdersServiceSearchAllReq extends Message<EquationsWorkOrdersServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_WORK_ORDER_SORT_KEY;
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
    constructor(data?: PartialMessage<EquationsWorkOrdersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsWorkOrdersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsWorkOrdersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsWorkOrdersServiceSearchAllReq;
    static equals(a: EquationsWorkOrdersServiceSearchAllReq | PlainMessage<EquationsWorkOrdersServiceSearchAllReq> | undefined, b: EquationsWorkOrdersServiceSearchAllReq | PlainMessage<EquationsWorkOrdersServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=equations_work_orders_pb.d.ts.map