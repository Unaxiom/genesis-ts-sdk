import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** FormFieldDatum, FormFieldDatumCreateRequest ***REMOVED*** from "./forms_pb.js";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.PRODUCTION_PLAN_SORT_KEY
 */
export declare enum PRODUCTION_PLAN_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_CREATED_AT = 1;
     */
    PRODUCTION_PLAN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_MODIFIED_AT = 2;
     */
    PRODUCTION_PLAN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_APPROVED_ON = 3;
     */
    PRODUCTION_PLAN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_APPROVED_BY = 4;
     */
    PRODUCTION_PLAN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PRODUCTION_PLAN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_COMPLETED_ON = 6;
     */
    PRODUCTION_PLAN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_REFERENCE_ID = 10;
     */
    PRODUCTION_PLAN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PRODUCTION_PLAN_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_LOCATION_ID = 12;
     */
    PRODUCTION_PLAN_SORT_KEY_LOCATION_ID = 12,
    /**
     * Fetch ordered results by the start date
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_START_DATE = 13;
     */
    PRODUCTION_PLAN_SORT_KEY_START_DATE = 13,
    /**
     * Fetch ordered results by the end date
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_END_DATE = 14;
     */
    PRODUCTION_PLAN_SORT_KEY_END_DATE = 14
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.ProductionPlansServiceCreateRequest
 */
export declare class ProductionPlansServiceCreateRequest extends Message<ProductionPlansServiceCreateRequest> ***REMOVED***
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
     * The reference ID of the production plan
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
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * The start date of the plan (in string)
     *
     * @generated from field: string start_date = 16;
     */
    startDate: string;
    /**
     * The start time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string start_time = 17;
     */
    startTime: string;
    /**
     * The end date of the plan
     *
     * @generated from field: string end_date = 18;
     */
    endDate: string;
    /**
     * The end time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string end_time = 19;
     */
    endTime: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProductionPlansServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceCreateRequest;
    static equals(a: ProductionPlansServiceCreateRequest | PlainMessage<ProductionPlansServiceCreateRequest> | undefined, b: ProductionPlansServiceCreateRequest | PlainMessage<ProductionPlansServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.ProductionPlansServiceUpdateRequest
 */
export declare class ProductionPlansServiceUpdateRequest extends Message<ProductionPlansServiceUpdateRequest> ***REMOVED***
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
     * The reference ID of the production plan
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * The start date of the plan (in string)
     *
     * @generated from field: string start_date = 16;
     */
    startDate: string;
    /**
     * The start time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string start_time = 17;
     */
    startTime: string;
    /**
     * The end date of the plan
     *
     * @generated from field: string end_date = 18;
     */
    endDate: string;
    /**
     * The end time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string end_time = 19;
     */
    endTime: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProductionPlansServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceUpdateRequest;
    static equals(a: ProductionPlansServiceUpdateRequest | PlainMessage<ProductionPlansServiceUpdateRequest> | undefined, b: ProductionPlansServiceUpdateRequest | PlainMessage<ProductionPlansServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Genesis.ProductionPlansServiceAutofillRequest
 */
export declare class ProductionPlansServiceAutofillRequest extends Message<ProductionPlansServiceAutofillRequest> ***REMOVED***
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
     * Denotes if all the equation dependencies (if applicable) should also be automatically added to the production plan
     *
     * @generated from field: bool populate_using_equation_dependencies = 3;
     */
    populateUsingEquationDependencies: boolean;
    constructor(data?: PartialMessage<ProductionPlansServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceAutofillRequest;
    static equals(a: ProductionPlansServiceAutofillRequest | PlainMessage<ProductionPlansServiceAutofillRequest> | undefined, b: ProductionPlansServiceAutofillRequest | PlainMessage<ProductionPlansServiceAutofillRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.ProductionPlan
 */
export declare class ProductionPlan extends Message<ProductionPlan> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this production plan
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
     * The status of this production plan
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this production plan
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this production plan was marked as completed
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
     * The reference ID of the production plan
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
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * The start date of the plan (in string)
     *
     * @generated from field: string start_date = 16;
     */
    startDate: string;
    /**
     * The start time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string start_time = 17;
     */
    startTime: string;
    /**
     * The end date of the plan
     *
     * @generated from field: string end_date = 18;
     */
    endDate: string;
    /**
     * The end time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string end_time = 19;
     */
    endTime: string;
    /**
     * The list of associated production plan items
     *
     * @generated from field: repeated Genesis.ProductionPlanItem list = 20;
     */
    list: ProductionPlanItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<ProductionPlan>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlan";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlan;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlan;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlan;
    static equals(a: ProductionPlan | PlainMessage<ProductionPlan> | undefined, b: ProductionPlan | PlainMessage<ProductionPlan> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add an item to a production plan
 *
 * @generated from message Genesis.ProductionPlansServiceItemCreateRequest
 */
export declare class ProductionPlansServiceItemCreateRequest extends Message<ProductionPlansServiceItemCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the production plan ID
     *
     * @generated from field: int64 production_plan_id = 10;
     */
    productionPlanId: bigint;
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
    constructor(data?: PartialMessage<ProductionPlansServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceItemCreateRequest;
    static equals(a: ProductionPlansServiceItemCreateRequest | PlainMessage<ProductionPlansServiceItemCreateRequest> | undefined, b: ProductionPlansServiceItemCreateRequest | PlainMessage<ProductionPlansServiceItemCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update an item in a production plan
 *
 * @generated from message Genesis.ProductionPlansServiceItemUpdateRequest
 */
export declare class ProductionPlansServiceItemUpdateRequest extends Message<ProductionPlansServiceItemUpdateRequest> ***REMOVED***
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
    constructor(data?: PartialMessage<ProductionPlansServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceItemUpdateRequest;
    static equals(a: ProductionPlansServiceItemUpdateRequest | PlainMessage<ProductionPlansServiceItemUpdateRequest> | undefined, b: ProductionPlansServiceItemUpdateRequest | PlainMessage<ProductionPlansServiceItemUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute an item associated to a production plan
 *
 * @generated from message Genesis.ProductionPlanItem
 */
export declare class ProductionPlanItem extends Message<ProductionPlanItem> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this production plan
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
     * Stores the production plan ID
     *
     * @generated from field: int64 production_plan_id = 10;
     */
    productionPlanId: bigint;
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
    constructor(data?: PartialMessage<ProductionPlanItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlanItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanItem;
    static equals(a: ProductionPlanItem | PlainMessage<ProductionPlanItem> | undefined, b: ProductionPlanItem | PlainMessage<ProductionPlanItem> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of production plans
 *
 * @generated from message Genesis.ProductionPlansList
 */
export declare class ProductionPlansList extends Message<ProductionPlansList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.ProductionPlan list = 1;
     */
    list: ProductionPlan[];
    constructor(data?: PartialMessage<ProductionPlansList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansList;
    static equals(a: ProductionPlansList | PlainMessage<ProductionPlansList> | undefined, b: ProductionPlansList | PlainMessage<ProductionPlansList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of production plan items
 *
 * @generated from message Genesis.ProductionPlansItemsList
 */
export declare class ProductionPlansItemsList extends Message<ProductionPlansItemsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.ProductionPlanItem list = 1;
     */
    list: ProductionPlanItem[];
    constructor(data?: PartialMessage<ProductionPlansItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansItemsList;
    static equals(a: ProductionPlansItemsList | PlainMessage<ProductionPlansItemsList> | undefined, b: ProductionPlansItemsList | PlainMessage<ProductionPlansItemsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.ProductionPlanItemHistoryRequest
 */
export declare class ProductionPlanItemHistoryRequest extends Message<ProductionPlanItemHistoryRequest> ***REMOVED***
    /**
     * Stores the production plan ID
     *
     * @generated from field: int64 production_plan_id = 10;
     */
    productionPlanId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ProductionPlanItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlanItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanItemHistoryRequest;
    static equals(a: ProductionPlanItemHistoryRequest | PlainMessage<ProductionPlanItemHistoryRequest> | undefined, b: ProductionPlanItemHistoryRequest | PlainMessage<ProductionPlanItemHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective production plan item
 *
 * @generated from message Genesis.ProductionPlanItemProspectiveInfoRequest
 */
export declare class ProductionPlanItemProspectiveInfoRequest extends Message<ProductionPlanItemProspectiveInfoRequest> ***REMOVED***
    /**
     * Stores the production plan ID
     *
     * @generated from field: int64 production_plan_id = 10;
     */
    productionPlanId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: int64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ProductionPlanItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlanItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanItemProspectiveInfoRequest;
    static equals(a: ProductionPlanItemProspectiveInfoRequest | PlainMessage<ProductionPlanItemProspectiveInfoRequest> | undefined, b: ProductionPlanItemProspectiveInfoRequest | PlainMessage<ProductionPlanItemProspectiveInfoRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.ProductionPlansServicePaginationReq
 */
export declare class ProductionPlansServicePaginationReq extends Message<ProductionPlansServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.PRODUCTION_PLAN_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_PLAN_SORT_KEY;
    /**
     * The status of this production plan
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ProductionPlansServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginationReq;
    static equals(a: ProductionPlansServicePaginationReq | PlainMessage<ProductionPlansServicePaginationReq> | undefined, b: ProductionPlansServicePaginationReq | PlainMessage<ProductionPlansServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.ProductionPlansServicePaginationResponse
 */
export declare class ProductionPlansServicePaginationResponse extends Message<ProductionPlansServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.ProductionPlan payload = 4;
     */
    payload: ProductionPlan[];
    constructor(data?: PartialMessage<ProductionPlansServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginationResponse;
    static equals(a: ProductionPlansServicePaginationResponse | PlainMessage<ProductionPlansServicePaginationResponse> | undefined, b: ProductionPlansServicePaginationResponse | PlainMessage<ProductionPlansServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.ProductionPlansServiceEntityPaginationReq
 */
export declare class ProductionPlansServiceEntityPaginationReq extends Message<ProductionPlansServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.PRODUCTION_PLAN_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_PLAN_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ProductionPlansServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceEntityPaginationReq;
    static equals(a: ProductionPlansServiceEntityPaginationReq | PlainMessage<ProductionPlansServiceEntityPaginationReq> | undefined, b: ProductionPlansServiceEntityPaginationReq | PlainMessage<ProductionPlansServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.ProductionPlansServiceFilterReq
 */
export declare class ProductionPlansServiceFilterReq extends Message<ProductionPlansServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.PRODUCTION_PLAN_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_PLAN_SORT_KEY;
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
     * The status of this production plan
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
     * The reference ID of the production plan
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
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 25;
     */
    supervisor: string;
    /**
     * The min start date of the plan (in string)
     *
     * @generated from field: string start_date_start = 30;
     */
    startDateStart: string;
    /**
     * The max start date of the plan (in string)
     *
     * @generated from field: string start_date_end = 31;
     */
    startDateEnd: string;
    /**
     * The min start time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string start_time_start = 32;
     */
    startTimeStart: string;
    /**
     * The max start time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string start_time_end = 33;
     */
    startTimeEnd: string;
    /**
     * The min end date of the plan (in string)
     *
     * @generated from field: string end_date_start = 34;
     */
    endDateStart: string;
    /**
     * The max end date of the plan (in string)
     *
     * @generated from field: string end_date_end = 35;
     */
    endDateEnd: string;
    /**
     * The min end time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string end_time_start = 36;
     */
    endTimeStart: string;
    /**
     * The max end time of the plan (in HH:MM:SS format)
     *
     * @generated from field: string end_time_end = 37;
     */
    endTimeEnd: string;
    /**
     * The associated project ID
     *
     * @generated from field: int64 project_id = 50;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<ProductionPlansServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceFilterReq;
    static equals(a: ProductionPlansServiceFilterReq | PlainMessage<ProductionPlansServiceFilterReq> | undefined, b: ProductionPlansServiceFilterReq | PlainMessage<ProductionPlansServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.ProductionPlansServiceSearchAllReq
 */
export declare class ProductionPlansServiceSearchAllReq extends Message<ProductionPlansServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.PRODUCTION_PLAN_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_PLAN_SORT_KEY;
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
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 25;
     */
    supervisor: string;
    constructor(data?: PartialMessage<ProductionPlansServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ProductionPlansServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceSearchAllReq;
    static equals(a: ProductionPlansServiceSearchAllReq | PlainMessage<ProductionPlansServiceSearchAllReq> | undefined, b: ProductionPlansServiceSearchAllReq | PlainMessage<ProductionPlansServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=production_plans_pb.d.ts.map