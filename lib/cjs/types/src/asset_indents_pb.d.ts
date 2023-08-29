import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.ASSET_INDENT_SORT_KEY
 */
export declare enum ASSET_INDENT_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_CREATED_AT = 1;
     */
    ASSET_INDENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_MODIFIED_AT = 2;
     */
    ASSET_INDENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_APPROVED_ON = 3;
     */
    ASSET_INDENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_APPROVED_BY = 4;
     */
    ASSET_INDENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ASSET_INDENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_COMPLETED_ON = 6;
     */
    ASSET_INDENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_REFERENCE_ID = 10;
     */
    ASSET_INDENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    ASSET_INDENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: ASSET_INDENT_SORT_KEY_LOCATION_ID = 12;
     */
    ASSET_INDENT_SORT_KEY_LOCATION_ID = 12
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.AssetIndentsServiceCreateRequest
 */
export declare class AssetIndentsServiceCreateRequest extends Message<AssetIndentsServiceCreateRequest> ***REMOVED***
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
     * The associated project ID
     *
     * @generated from field: int64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the asset indent
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the location
     *
     * @generated from field: int64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The ID of the associated user
     *
     * @generated from field: int64 user_id = 15;
     */
    userId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<AssetIndentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceCreateRequest;
    static equals(a: AssetIndentsServiceCreateRequest | PlainMessage<AssetIndentsServiceCreateRequest> | undefined, b: AssetIndentsServiceCreateRequest | PlainMessage<AssetIndentsServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.AssetIndentsServiceUpdateRequest
 */
export declare class AssetIndentsServiceUpdateRequest extends Message<AssetIndentsServiceUpdateRequest> ***REMOVED***
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
     * The associated project ID
     *
     * @generated from field: int64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the asset indent
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the associated user
     *
     * @generated from field: int64 user_id = 15;
     */
    userId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<AssetIndentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceUpdateRequest;
    static equals(a: AssetIndentsServiceUpdateRequest | PlainMessage<AssetIndentsServiceUpdateRequest> | undefined, b: AssetIndentsServiceUpdateRequest | PlainMessage<AssetIndentsServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.AssetIndent
 */
export declare class AssetIndent extends Message<AssetIndent> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this asset indent
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
     * The status of this asset indent
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this asset indent
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this asset indent was marked as completed
     *
     * @generated from field: int64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: int64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the asset indent
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The ID of the associated user
     *
     * @generated from field: int64 user_id = 15;
     */
    userId: bigint;
    /**
     * The list of associated asset indent items
     *
     * @generated from field: repeated Genesis.AssetIndentItem list = 20;
     */
    list: AssetIndentItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<AssetIndent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndent;
    static equals(a: AssetIndent | PlainMessage<AssetIndent> | undefined, b: AssetIndent | PlainMessage<AssetIndent> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add an item to a asset indent
 *
 * @generated from message Genesis.AssetIndentsServiceItemCreateRequest
 */
export declare class AssetIndentsServiceItemCreateRequest extends Message<AssetIndentsServiceItemCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the asset indent ID
     *
     * @generated from field: int64 asset_indent_id = 10;
     */
    assetIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity being manufactured
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceItemCreateRequest;
    static equals(a: AssetIndentsServiceItemCreateRequest | PlainMessage<AssetIndentsServiceItemCreateRequest> | undefined, b: AssetIndentsServiceItemCreateRequest | PlainMessage<AssetIndentsServiceItemCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update an item in a asset indent
 *
 * @generated from message Genesis.AssetIndentsServiceItemUpdateRequest
 */
export declare class AssetIndentsServiceItemUpdateRequest extends Message<AssetIndentsServiceItemUpdateRequest> ***REMOVED***
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
     * The quantity being manufactured
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceItemUpdateRequest;
    static equals(a: AssetIndentsServiceItemUpdateRequest | PlainMessage<AssetIndentsServiceItemUpdateRequest> | undefined, b: AssetIndentsServiceItemUpdateRequest | PlainMessage<AssetIndentsServiceItemUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute an item associated to a asset indent
 *
 * @generated from message Genesis.AssetIndentItem
 */
export declare class AssetIndentItem extends Message<AssetIndentItem> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this asset indent
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
     * Stores the asset indent ID
     *
     * @generated from field: int64 asset_indent_id = 10;
     */
    assetIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity being manufactured
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<AssetIndentItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentItem;
    static equals(a: AssetIndentItem | PlainMessage<AssetIndentItem> | undefined, b: AssetIndentItem | PlainMessage<AssetIndentItem> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of asset indents
 *
 * @generated from message Genesis.AssetIndentsList
 */
export declare class AssetIndentsList extends Message<AssetIndentsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.AssetIndent list = 1;
     */
    list: AssetIndent[];
    constructor(data?: PartialMessage<AssetIndentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsList;
    static equals(a: AssetIndentsList | PlainMessage<AssetIndentsList> | undefined, b: AssetIndentsList | PlainMessage<AssetIndentsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of asset indent items
 *
 * @generated from message Genesis.AssetIndentsItemsList
 */
export declare class AssetIndentsItemsList extends Message<AssetIndentsItemsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.AssetIndentItem list = 1;
     */
    list: AssetIndentItem[];
    constructor(data?: PartialMessage<AssetIndentsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsItemsList;
    static equals(a: AssetIndentsItemsList | PlainMessage<AssetIndentsItemsList> | undefined, b: AssetIndentsItemsList | PlainMessage<AssetIndentsItemsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.AssetIndentItemHistoryRequest
 */
export declare class AssetIndentItemHistoryRequest extends Message<AssetIndentItemHistoryRequest> ***REMOVED***
    /**
     * Stores the asset indent ID
     *
     * @generated from field: int64 asset_indent_id = 10;
     */
    assetIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<AssetIndentItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentItemHistoryRequest;
    static equals(a: AssetIndentItemHistoryRequest | PlainMessage<AssetIndentItemHistoryRequest> | undefined, b: AssetIndentItemHistoryRequest | PlainMessage<AssetIndentItemHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective asset indent item
 *
 * @generated from message Genesis.AssetIndentItemProspectiveInfoRequest
 */
export declare class AssetIndentItemProspectiveInfoRequest extends Message<AssetIndentItemProspectiveInfoRequest> ***REMOVED***
    /**
     * Stores the asset indent ID
     *
     * @generated from field: int64 asset_indent_id = 10;
     */
    assetIndentId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<AssetIndentItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentItemProspectiveInfoRequest;
    static equals(a: AssetIndentItemProspectiveInfoRequest | PlainMessage<AssetIndentItemProspectiveInfoRequest> | undefined, b: AssetIndentItemProspectiveInfoRequest | PlainMessage<AssetIndentItemProspectiveInfoRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.AssetIndentsServicePaginationReq
 */
export declare class AssetIndentsServicePaginationReq extends Message<AssetIndentsServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.ASSET_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: ASSET_INDENT_SORT_KEY;
    /**
     * The status of this asset indent
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<AssetIndentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginationReq;
    static equals(a: AssetIndentsServicePaginationReq | PlainMessage<AssetIndentsServicePaginationReq> | undefined, b: AssetIndentsServicePaginationReq | PlainMessage<AssetIndentsServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.AssetIndentsServicePaginationResponse
 */
export declare class AssetIndentsServicePaginationResponse extends Message<AssetIndentsServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.AssetIndent payload = 4;
     */
    payload: AssetIndent[];
    constructor(data?: PartialMessage<AssetIndentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServicePaginationResponse;
    static equals(a: AssetIndentsServicePaginationResponse | PlainMessage<AssetIndentsServicePaginationResponse> | undefined, b: AssetIndentsServicePaginationResponse | PlainMessage<AssetIndentsServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.AssetIndentsServiceEntityPaginationReq
 */
export declare class AssetIndentsServiceEntityPaginationReq extends Message<AssetIndentsServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.ASSET_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: ASSET_INDENT_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<AssetIndentsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceEntityPaginationReq;
    static equals(a: AssetIndentsServiceEntityPaginationReq | PlainMessage<AssetIndentsServiceEntityPaginationReq> | undefined, b: AssetIndentsServiceEntityPaginationReq | PlainMessage<AssetIndentsServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.AssetIndentsServiceFilterReq
 */
export declare class AssetIndentsServiceFilterReq extends Message<AssetIndentsServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.ASSET_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: ASSET_INDENT_SORT_KEY;
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
     * The status of this asset indent
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
     * The reference ID of the asset indent
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the associated user
     *
     * @generated from field: int64 user_id = 25;
     */
    userId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: int64 project_id = 50;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceFilterReq;
    static equals(a: AssetIndentsServiceFilterReq | PlainMessage<AssetIndentsServiceFilterReq> | undefined, b: AssetIndentsServiceFilterReq | PlainMessage<AssetIndentsServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.AssetIndentsServiceSearchAllReq
 */
export declare class AssetIndentsServiceSearchAllReq extends Message<AssetIndentsServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.ASSET_INDENT_SORT_KEY sort_key = 5;
     */
    sortKey: ASSET_INDENT_SORT_KEY;
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
     * The ID of the location
     *
     * @generated from field: int64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The ID of the associated user
     *
     * @generated from field: int64 user_id = 25;
     */
    userId: bigint;
    constructor(data?: PartialMessage<AssetIndentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.AssetIndentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetIndentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetIndentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetIndentsServiceSearchAllReq;
    static equals(a: AssetIndentsServiceSearchAllReq | PlainMessage<AssetIndentsServiceSearchAllReq> | undefined, b: AssetIndentsServiceSearchAllReq | PlainMessage<AssetIndentsServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=asset_indents_pb.d.ts.map