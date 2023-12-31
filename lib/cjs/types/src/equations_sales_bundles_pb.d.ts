import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.EQUATION_SALES_BUNDLE_SORT_KEY
 */
export declare enum EQUATION_SALES_BUNDLE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_CREATED_AT = 1;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_MODIFIED_AT = 2;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_APPROVED_ON = 3;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_APPROVED_BY = 4;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_COMPLETED_ON = 6;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_NAME = 10;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: EQUATION_SALES_BUNDLE_SORT_KEY_FAMILY_ID = 11;
     */
    EQUATION_SALES_BUNDLE_SORT_KEY_FAMILY_ID = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.EquationsSalesBundlesServiceCreateRequest
 */
export declare class EquationsSalesBundlesServiceCreateRequest extends Message<EquationsSalesBundlesServiceCreateRequest> {
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
     * The name of the equation sales bundle
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the family that this equation belongs to
     *
     * @generated from field: int64 family_id = 12;
     */
    familyId: bigint;
    /**
     * The description of the equation sales bundle
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsSalesBundlesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceCreateRequest;
    static equals(a: EquationsSalesBundlesServiceCreateRequest | PlainMessage<EquationsSalesBundlesServiceCreateRequest> | undefined, b: EquationsSalesBundlesServiceCreateRequest | PlainMessage<EquationsSalesBundlesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.EquationsSalesBundlesServiceUpdateRequest
 */
export declare class EquationsSalesBundlesServiceUpdateRequest extends Message<EquationsSalesBundlesServiceUpdateRequest> {
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
     * The name of the equation sales bundle
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the equation sales bundle
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<EquationsSalesBundlesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceUpdateRequest;
    static equals(a: EquationsSalesBundlesServiceUpdateRequest | PlainMessage<EquationsSalesBundlesServiceUpdateRequest> | undefined, b: EquationsSalesBundlesServiceUpdateRequest | PlainMessage<EquationsSalesBundlesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.EquationSalesBundle
 */
export declare class EquationSalesBundle extends Message<EquationSalesBundle> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation sales bundle
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
     * The status of this equation sales bundle
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this equation sales bundle
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this equation sales bundle was marked as completed
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
     * The name of the equation sales bundle
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the family that this equation belongs to
     *
     * @generated from field: int64 family_id = 12;
     */
    familyId: bigint;
    /**
     * The description of the equation sales bundle
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated equation sales bundle items
     *
     * @generated from field: repeated Genesis.EquationSalesBundleItem list = 20;
     */
    list: EquationSalesBundleItem[];
    /**
     * The total price of the equation sales bundle
     *
     * @generated from field: double total_price = 40;
     */
    totalPrice: number;
    constructor(data?: PartialMessage<EquationSalesBundle>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationSalesBundle";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationSalesBundle;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationSalesBundle;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationSalesBundle;
    static equals(a: EquationSalesBundle | PlainMessage<EquationSalesBundle> | undefined, b: EquationSalesBundle | PlainMessage<EquationSalesBundle> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a equation sales bundle
 *
 * @generated from message Genesis.EquationsSalesBundlesServiceItemCreateRequest
 */
export declare class EquationsSalesBundlesServiceItemCreateRequest extends Message<EquationsSalesBundlesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the equation sales bundle
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
    constructor(data?: PartialMessage<EquationsSalesBundlesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceItemCreateRequest;
    static equals(a: EquationsSalesBundlesServiceItemCreateRequest | PlainMessage<EquationsSalesBundlesServiceItemCreateRequest> | undefined, b: EquationsSalesBundlesServiceItemCreateRequest | PlainMessage<EquationsSalesBundlesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a equation sales bundle
 *
 * @generated from message Genesis.EquationsSalesBundlesServiceItemUpdateRequest
 */
export declare class EquationsSalesBundlesServiceItemUpdateRequest extends Message<EquationsSalesBundlesServiceItemUpdateRequest> {
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
    constructor(data?: PartialMessage<EquationsSalesBundlesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceItemUpdateRequest;
    static equals(a: EquationsSalesBundlesServiceItemUpdateRequest | PlainMessage<EquationsSalesBundlesServiceItemUpdateRequest> | undefined, b: EquationsSalesBundlesServiceItemUpdateRequest | PlainMessage<EquationsSalesBundlesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a equation sales bundle
 *
 * @generated from message Genesis.EquationSalesBundleItem
 */
export declare class EquationSalesBundleItem extends Message<EquationSalesBundleItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this equation sales bundle
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
     * Stores the ID of the equation sales bundle
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
    constructor(data?: PartialMessage<EquationSalesBundleItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationSalesBundleItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationSalesBundleItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationSalesBundleItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationSalesBundleItem;
    static equals(a: EquationSalesBundleItem | PlainMessage<EquationSalesBundleItem> | undefined, b: EquationSalesBundleItem | PlainMessage<EquationSalesBundleItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of equations sales bundles
 *
 * @generated from message Genesis.EquationsSalesBundlesList
 */
export declare class EquationsSalesBundlesList extends Message<EquationsSalesBundlesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.EquationSalesBundle list = 1;
     */
    list: EquationSalesBundle[];
    constructor(data?: PartialMessage<EquationsSalesBundlesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesList;
    static equals(a: EquationsSalesBundlesList | PlainMessage<EquationsSalesBundlesList> | undefined, b: EquationsSalesBundlesList | PlainMessage<EquationsSalesBundlesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of equation sales bundle items
 *
 * @generated from message Genesis.EquationsSalesBundlesItemsList
 */
export declare class EquationsSalesBundlesItemsList extends Message<EquationsSalesBundlesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.EquationSalesBundleItem list = 1;
     */
    list: EquationSalesBundleItem[];
    constructor(data?: PartialMessage<EquationsSalesBundlesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesItemsList;
    static equals(a: EquationsSalesBundlesItemsList | PlainMessage<EquationsSalesBundlesItemsList> | undefined, b: EquationsSalesBundlesItemsList | PlainMessage<EquationsSalesBundlesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.EquationSalesBundleItemHistoryRequest
 */
export declare class EquationSalesBundleItemHistoryRequest extends Message<EquationSalesBundleItemHistoryRequest> {
    /**
     * Stores the ID of the equation sales bundle
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
    constructor(data?: PartialMessage<EquationSalesBundleItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationSalesBundleItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationSalesBundleItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationSalesBundleItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationSalesBundleItemHistoryRequest;
    static equals(a: EquationSalesBundleItemHistoryRequest | PlainMessage<EquationSalesBundleItemHistoryRequest> | undefined, b: EquationSalesBundleItemHistoryRequest | PlainMessage<EquationSalesBundleItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.EquationsSalesBundlesServicePaginationReq
 */
export declare class EquationsSalesBundlesServicePaginationReq extends Message<EquationsSalesBundlesServicePaginationReq> {
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
     * @generated from field: Genesis.EQUATION_SALES_BUNDLE_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_SALES_BUNDLE_SORT_KEY;
    /**
     * The status of this equation sales bundle
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<EquationsSalesBundlesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServicePaginationReq;
    static equals(a: EquationsSalesBundlesServicePaginationReq | PlainMessage<EquationsSalesBundlesServicePaginationReq> | undefined, b: EquationsSalesBundlesServicePaginationReq | PlainMessage<EquationsSalesBundlesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.EquationsSalesBundlesServicePaginationResponse
 */
export declare class EquationsSalesBundlesServicePaginationResponse extends Message<EquationsSalesBundlesServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.EquationSalesBundle payload = 4;
     */
    payload: EquationSalesBundle[];
    constructor(data?: PartialMessage<EquationsSalesBundlesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServicePaginationResponse;
    static equals(a: EquationsSalesBundlesServicePaginationResponse | PlainMessage<EquationsSalesBundlesServicePaginationResponse> | undefined, b: EquationsSalesBundlesServicePaginationResponse | PlainMessage<EquationsSalesBundlesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.EquationsSalesBundlesServiceEntityPaginationReq
 */
export declare class EquationsSalesBundlesServiceEntityPaginationReq extends Message<EquationsSalesBundlesServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.EQUATION_SALES_BUNDLE_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_SALES_BUNDLE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<EquationsSalesBundlesServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceEntityPaginationReq;
    static equals(a: EquationsSalesBundlesServiceEntityPaginationReq | PlainMessage<EquationsSalesBundlesServiceEntityPaginationReq> | undefined, b: EquationsSalesBundlesServiceEntityPaginationReq | PlainMessage<EquationsSalesBundlesServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.EquationsSalesBundlesServiceFilterReq
 */
export declare class EquationsSalesBundlesServiceFilterReq extends Message<EquationsSalesBundlesServiceFilterReq> {
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
     * @generated from field: Genesis.EQUATION_SALES_BUNDLE_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_SALES_BUNDLE_SORT_KEY;
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
     * The status of this equation sales bundle
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
     * The name of the equation sales bundle
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The ID of the family that this equation belongs to
     *
     * @generated from field: int64 family_id = 21;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<EquationsSalesBundlesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceFilterReq;
    static equals(a: EquationsSalesBundlesServiceFilterReq | PlainMessage<EquationsSalesBundlesServiceFilterReq> | undefined, b: EquationsSalesBundlesServiceFilterReq | PlainMessage<EquationsSalesBundlesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.EquationsSalesBundlesServiceSearchAllReq
 */
export declare class EquationsSalesBundlesServiceSearchAllReq extends Message<EquationsSalesBundlesServiceSearchAllReq> {
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
     * @generated from field: Genesis.EQUATION_SALES_BUNDLE_SORT_KEY sort_key = 5;
     */
    sortKey: EQUATION_SALES_BUNDLE_SORT_KEY;
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
    constructor(data?: PartialMessage<EquationsSalesBundlesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EquationsSalesBundlesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EquationsSalesBundlesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EquationsSalesBundlesServiceSearchAllReq;
    static equals(a: EquationsSalesBundlesServiceSearchAllReq | PlainMessage<EquationsSalesBundlesServiceSearchAllReq> | undefined, b: EquationsSalesBundlesServiceSearchAllReq | PlainMessage<EquationsSalesBundlesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=equations_sales_bundles_pb.d.ts.map