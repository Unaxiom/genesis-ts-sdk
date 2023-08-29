import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
/**
 *
 * Describes the order in which the records need to be returned
 *
 * @generated from enum Genesis.SORT_ORDER
 */
export declare enum SORT_ORDER ***REMOVED***
    /**
     * Fetch results in the ascending order of the provided sort key
     *
     * @generated from enum value: ASCENDING_UNSPECIFIED = 0;
     */
    ASCENDING_UNSPECIFIED = 0,
    /**
     * Fetch results in the descending order of the provided sort key
     *
     * @generated from enum value: DESCENDING = 1;
     */
    DESCENDING = 1
***REMOVED***
/**
 *
 * Describes the standard lifecycle status of each record
 *
 * @generated from enum Genesis.STANDARD_LIFECYCLE_STATUS
 */
export declare enum STANDARD_LIFECYCLE_STATUS ***REMOVED***
    /**
     * The resource has just been created, and has been sent for verification
     *
     * @generated from enum value: PREVERIFY_UNSPECIFIED = 0;
     */
    PREVERIFY_UNSPECIFIED = 0,
    /**
     * The resource has been saved as a draft
     *
     * @generated from enum value: DRAFT = 1;
     */
    DRAFT = 1,
    /**
     * The resource has been verified
     *
     * @generated from enum value: VERIFIED = 2;
     */
    VERIFIED = 2,
    /**
     * The resource has been approved
     *
     * @generated from enum value: STANDING = 3;
     */
    STANDING = 3,
    /**
     * The resource has been sent for revision
     *
     * @generated from enum value: REVISION = 4;
     */
    REVISION = 4,
    /**
     * The resource has been halted
     *
     * @generated from enum value: HALTED = 5;
     */
    HALTED = 5,
    /**
     * The resource has been marked as completed
     *
     * @generated from enum value: COMPLETED = 6;
     */
    COMPLETED = 6,
    /**
     * The resource has been discarded
     *
     * @generated from enum value: DISCARDED = 7;
     */
    DISCARDED = 7,
    /**
     * Use this only in filter and search queries so as to retrieve all the records regardless of the status that they are in
     *
     * @generated from enum value: ANY = 10;
     */
    ANY = 10
***REMOVED***
/**
 *
 * Describes all the possible values within a logbook operation
 *
 * @generated from enum Genesis.LOGBOOK_OPERATION
 */
export declare enum LOGBOOK_OPERATION ***REMOVED***
    /**
     * Create a resource
     *
     * @generated from enum value: CREATE_UNSPECIFIED = 0;
     */
    CREATE_UNSPECIFIED = 0,
    /**
     * Update a resource
     *
     * @generated from enum value: UPDATE = 1;
     */
    UPDATE = 1,
    /**
     * Archive a resource
     *
     * @generated from enum value: ARCHIVE = 2;
     */
    ARCHIVE = 2,
    /**
     * Restore a resource
     *
     * @generated from enum value: RESTORE = 3;
     */
    RESTORE = 3
***REMOVED***
/**
 *
 * Describes an empty object
 *
 * @generated from message Genesis.Empty
 */
export declare class Empty extends Message<Empty> ***REMOVED***
    constructor(data?: PartialMessage<Empty>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Empty";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Empty;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Empty;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Empty;
    static equals(a: Empty | PlainMessage<Empty> | undefined, b: Empty | PlainMessage<Empty> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the boolean response
 *
 * @generated from message Genesis.BooleanResponse
 */
export declare class BooleanResponse extends Message<BooleanResponse> ***REMOVED***
    /**
     * Stores if the value is true or false
     *
     * @generated from field: bool value = 1;
     */
    value: boolean;
    constructor(data?: PartialMessage<BooleanResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.BooleanResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BooleanResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BooleanResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BooleanResponse;
    static equals(a: BooleanResponse | PlainMessage<BooleanResponse> | undefined, b: BooleanResponse | PlainMessage<BooleanResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a generic response that consists of bytes as payload
 *
 * @generated from message Genesis.BytesResponse
 */
export declare class BytesResponse extends Message<BytesResponse> ***REMOVED***
    /**
     * Stores the response content in bytes
     *
     * @generated from field: bytes value = 1;
     */
    value: Uint8Array;
    constructor(data?: PartialMessage<BytesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.BytesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BytesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BytesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BytesResponse;
    static equals(a: BytesResponse | PlainMessage<BytesResponse> | undefined, b: BytesResponse | PlainMessage<BytesResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a generic response that consists of info of an image
 *
 * @generated from message Genesis.ImageResponse
 */
export declare class ImageResponse extends Message<ImageResponse> ***REMOVED***
    /**
     * Stores the raw image content
     *
     * @generated from field: bytes image = 1;
     */
    image: Uint8Array;
    /**
     * Stores the MIME type of the image
     *
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
    /**
     * The timestamp of when the image was captured
     *
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<ImageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ImageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageResponse;
    static equals(a: ImageResponse | PlainMessage<ImageResponse> | undefined, b: ImageResponse | PlainMessage<ImageResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message that consists of a base64 string. Useful for relaying an image as a base64 string.
 *
 * @generated from message Genesis.Base64String
 */
export declare class Base64String extends Message<Base64String> ***REMOVED***
    /**
     * Stores the image as a base64 string
     *
     * @generated from field: string image = 1;
     */
    image: string;
    constructor(data?: PartialMessage<Base64String>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Base64String";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Base64String;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Base64String;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Base64String;
    static equals(a: Base64String | PlainMessage<Base64String> | undefined, b: Base64String | PlainMessage<Base64String> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the payload that will be used to filter records on the basis of the given month and day
 *
 * @generated from message Genesis.MonthAndDayFilter
 */
export declare class MonthAndDayFilter extends Message<MonthAndDayFilter> ***REMOVED***
    /**
     * Stores the month (1 for Jan, 2 for Feb, etc.)
     *
     * @generated from field: int64 month = 1;
     */
    month: bigint;
    /**
     * Stores the day
     *
     * @generated from field: int64 day = 2;
     */
    day: bigint;
    constructor(data?: PartialMessage<MonthAndDayFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.MonthAndDayFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MonthAndDayFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MonthAndDayFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MonthAndDayFilter;
    static equals(a: MonthAndDayFilter | PlainMessage<MonthAndDayFilter> | undefined, b: MonthAndDayFilter | PlainMessage<MonthAndDayFilter> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a generic response that represents a GPS coordinate
 *
 * @generated from message Genesis.GPSCoordinatesResponse
 */
export declare class GPSCoordinatesResponse extends Message<GPSCoordinatesResponse> ***REMOVED***
    /**
     * Stores the latitude
     *
     * @generated from field: double latitude = 1;
     */
    latitude: number;
    /**
     * Stores the longitude
     *
     * @generated from field: double longitude = 2;
     */
    longitude: number;
    constructor(data?: PartialMessage<GPSCoordinatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.GPSCoordinatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GPSCoordinatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GPSCoordinatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GPSCoordinatesResponse;
    static equals(a: GPSCoordinatesResponse | PlainMessage<GPSCoordinatesResponse> | undefined, b: GPSCoordinatesResponse | PlainMessage<GPSCoordinatesResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the payload for a request to determine the count of records in the given status
 *
 * @generated from message Genesis.CountInSLCStatusRequest
 */
export declare class CountInSLCStatusRequest extends Message<CountInSLCStatusRequest> ***REMOVED***
    /**
     * Denote if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * The standard lifecycle status
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 2;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<CountInSLCStatusRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.CountInSLCStatusRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountInSLCStatusRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountInSLCStatusRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountInSLCStatusRequest;
    static equals(a: CountInSLCStatusRequest | PlainMessage<CountInSLCStatusRequest> | undefined, b: CountInSLCStatusRequest | PlainMessage<CountInSLCStatusRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the count response
 *
 * @generated from message Genesis.CountResponse
 */
export declare class CountResponse extends Message<CountResponse> ***REMOVED***
    /**
     * The number of records
     *
     * @generated from field: int64 count = 1;
     */
    count: bigint;
    constructor(data?: PartialMessage<CountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.CountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountResponse;
    static equals(a: CountResponse | PlainMessage<CountResponse> | undefined, b: CountResponse | PlainMessage<CountResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the quantity response
 *
 * @generated from message Genesis.QuantityResponse
 */
export declare class QuantityResponse extends Message<QuantityResponse> ***REMOVED***
    /**
     * The quantity
     *
     * @generated from field: int64 quantity = 1;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<QuantityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.QuantityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuantityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuantityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuantityResponse;
    static equals(a: QuantityResponse | PlainMessage<QuantityResponse> | undefined, b: QuantityResponse | PlainMessage<QuantityResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the dual quantity response. Primary quantity represents quantity in internal UoM and secondary quantity represents quantity in either vendor UoM or client UoM, depending on the context
 *
 * @generated from message Genesis.DualQuantitiesResponse
 */
export declare class DualQuantitiesResponse extends Message<DualQuantitiesResponse> ***REMOVED***
    /**
     * Quantity in internal UoM
     *
     * @generated from field: int64 primary_quantity = 1;
     */
    primaryQuantity: bigint;
    /**
     * Quantity in either vendor or client UoM
     *
     * @generated from field: int64 secondary_quantity = 2;
     */
    secondaryQuantity: bigint;
    constructor(data?: PartialMessage<DualQuantitiesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.DualQuantitiesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DualQuantitiesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DualQuantitiesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DualQuantitiesResponse;
    static equals(a: DualQuantitiesResponse | PlainMessage<DualQuantitiesResponse> | undefined, b: DualQuantitiesResponse | PlainMessage<DualQuantitiesResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the employee metadata of each resource
 *
 * @generated from message Genesis.EmployeeMetadata
 */
export declare class EmployeeMetadata extends Message<EmployeeMetadata> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * UUID of the resource
     *
     * @generated from field: bytes uuid = 2;
     */
    uuid: Uint8Array;
    /**
     * Stores the username of the user who added this resource
     *
     * @generated from field: string added_by = 3;
     */
    addedBy: string;
    /**
     * Represents if the resource is active
     *
     * @generated from field: bool is_active = 4;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when the resource was created
     *
     * @generated from field: int64 created_at = 5;
     */
    createdAt: bigint;
    /**
     * Stores the timestamp of when the resource was last modified
     *
     * @generated from field: int64 modified_at = 6;
     */
    modifiedAt: bigint;
    constructor(data?: PartialMessage<EmployeeMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.EmployeeMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmployeeMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmployeeMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmployeeMetadata;
    static equals(a: EmployeeMetadata | PlainMessage<EmployeeMetadata> | undefined, b: EmployeeMetadata | PlainMessage<EmployeeMetadata> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the approval metadata of each resource
 *
 * @generated from message Genesis.ApprovalMetadata
 */
export declare class ApprovalMetadata extends Message<ApprovalMetadata> ***REMOVED***
    /**
     * Stores the UNIX timestamp of when a resource was approved
     *
     * @generated from field: int64 approved_on = 1;
     */
    approvedOn: bigint;
    /**
     * Stores the ID of the user who approved this resource
     *
     * @generated from field: int64 approved_by_user_id = 2;
     */
    approvedByUserId: bigint;
    /**
     * Stores the Role ID of the user who approved this resource at the time of approval. This needs to be stored, as the user's role is fluid
     *
     * @generated from field: int64 approver_role_id = 3;
     */
    approverRoleId: bigint;
    constructor(data?: PartialMessage<ApprovalMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ApprovalMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApprovalMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApprovalMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApprovalMetadata;
    static equals(a: ApprovalMetadata | PlainMessage<ApprovalMetadata> | undefined, b: ApprovalMetadata | PlainMessage<ApprovalMetadata> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the status of the records returned to a request
 *
 * @generated from message Genesis.ActiveStatus
 */
export declare class ActiveStatus extends Message<ActiveStatus> ***REMOVED***
    /**
     * Used in ViewAll procedural calls, to denote if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    constructor(data?: PartialMessage<ActiveStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ActiveStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveStatus;
    static equals(a: ActiveStatus | PlainMessage<ActiveStatus> | undefined, b: ActiveStatus | PlainMessage<ActiveStatus> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the payload that is required to update the password of a user (by an administrator)
 *
 * @generated from message Genesis.UpdatePasswordReq
 */
export declare class UpdatePasswordReq extends Message<UpdatePasswordReq> ***REMOVED***
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
     * The plain text password using which the user can login
     *
     * @generated from field: string plain_text_password = 10;
     */
    plainTextPassword: string;
    constructor(data?: PartialMessage<UpdatePasswordReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UpdatePasswordReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePasswordReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePasswordReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePasswordReq;
    static equals(a: UpdatePasswordReq | PlainMessage<UpdatePasswordReq> | undefined, b: UpdatePasswordReq | PlainMessage<UpdatePasswordReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the payload that is requred to update the user's own password
 *
 * @generated from message Genesis.UpdateOwnPasswordReq
 */
export declare class UpdateOwnPasswordReq extends Message<UpdateOwnPasswordReq> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The old login password
     *
     * @generated from field: string old_plain_text_password = 3;
     */
    oldPlainTextPassword: string;
    /**
     * The new password
     *
     * @generated from field: string plain_text_password = 4;
     */
    plainTextPassword: string;
    constructor(data?: PartialMessage<UpdateOwnPasswordReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UpdateOwnPasswordReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateOwnPasswordReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateOwnPasswordReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateOwnPasswordReq;
    static equals(a: UpdateOwnPasswordReq | PlainMessage<UpdateOwnPasswordReq> | undefined, b: UpdateOwnPasswordReq | PlainMessage<UpdateOwnPasswordReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the payload that is required to upload a picture associated to a resource (such as profile picture or signature)
 *
 * @generated from message Genesis.UploadPictureReq
 */
export declare class UploadPictureReq extends Message<UploadPictureReq> ***REMOVED***
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
     * The base64 encoded image that is to be set as the profile picture
     *
     * @generated from field: string img = 10;
     */
    img: string;
    /**
     * The MIME type of the profile picture
     *
     * @generated from field: string mime_type = 11;
     */
    mimeType: string;
    constructor(data?: PartialMessage<UploadPictureReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UploadPictureReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadPictureReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadPictureReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadPictureReq;
    static equals(a: UploadPictureReq | PlainMessage<UploadPictureReq> | undefined, b: UploadPictureReq | PlainMessage<UploadPictureReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a simple search request
 *
 * @generated from message Genesis.SimpleSearchReq
 */
export declare class SimpleSearchReq extends Message<SimpleSearchReq> ***REMOVED***
    /**
     * @generated from field: string search_key = 1;
     */
    searchKey: string;
    constructor(data?: PartialMessage<SimpleSearchReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.SimpleSearchReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleSearchReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleSearchReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleSearchReq;
    static equals(a: SimpleSearchReq | PlainMessage<SimpleSearchReq> | undefined, b: SimpleSearchReq | PlainMessage<SimpleSearchReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the standard identifier
 *
 * @generated from message Genesis.Identifier
 */
export declare class Identifier extends Message<Identifier> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    constructor(data?: PartialMessage<Identifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Identifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Identifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Identifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Identifier;
    static equals(a: Identifier | PlainMessage<Identifier> | undefined, b: Identifier | PlainMessage<Identifier> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the standard identifier that can also be a zero
 *
 * @generated from message Genesis.IdentifierZeroable
 */
export declare class IdentifierZeroable extends Message<IdentifierZeroable> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    constructor(data?: PartialMessage<IdentifierZeroable>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.IdentifierZeroable";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierZeroable;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierZeroable;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierZeroable;
    static equals(a: IdentifierZeroable | PlainMessage<IdentifierZeroable> | undefined, b: IdentifierZeroable | PlainMessage<IdentifierZeroable> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the standard identifier along with a search key
 *
 * @generated from message Genesis.IdentifierWithSearch
 */
export declare class IdentifierWithSearch extends Message<IdentifierWithSearch> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 2;
     */
    searchKey: string;
    constructor(data?: PartialMessage<IdentifierWithSearch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.IdentifierWithSearch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithSearch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithSearch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithSearch;
    static equals(a: IdentifierWithSearch | PlainMessage<IdentifierWithSearch> | undefined, b: IdentifierWithSearch | PlainMessage<IdentifierWithSearch> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the list of standard identifiers, used for identifying associated items
 *
 * @generated from message Genesis.IdentifiersList
 */
export declare class IdentifiersList extends Message<IdentifiersList> ***REMOVED***
    /**
     * List of identifiers
     *
     * @generated from field: repeated int64 list = 1;
     */
    list: bigint[];
    constructor(data?: PartialMessage<IdentifiersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.IdentifiersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifiersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifiersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifiersList;
    static equals(a: IdentifiersList | PlainMessage<IdentifiersList> | undefined, b: IdentifiersList | PlainMessage<IdentifiersList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the standard identifier with a user comment. Useful when an operation needs to be performed, and a user comment needs to be recorded
 *
 * @generated from message Genesis.IdentifierWithUserComment
 */
export declare class IdentifierWithUserComment extends Message<IdentifierWithUserComment> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    constructor(data?: PartialMessage<IdentifierWithUserComment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.IdentifierWithUserComment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithUserComment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithUserComment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithUserComment;
    static equals(a: IdentifierWithUserComment | PlainMessage<IdentifierWithUserComment> | undefined, b: IdentifierWithUserComment | PlainMessage<IdentifierWithUserComment> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the standard identifier with email attributes. Useful when a record (identified by the identifier) needs to be mailed with the given subject, and the list of email addresses.
 *
 * @generated from message Genesis.IdentifierWithEmailAttributes
 */
export declare class IdentifierWithEmailAttributes extends Message<IdentifierWithEmailAttributes> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * The subject of the email
     *
     * @generated from field: string subject = 10;
     */
    subject: string;
    /**
     * The list of email addresses of the recipients
     *
     * @generated from field: repeated string recipients = 11;
     */
    recipients: string[];
    /**
     * The body of the email
     *
     * @generated from field: string body = 12;
     */
    body: string;
    constructor(data?: PartialMessage<IdentifierWithEmailAttributes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.IdentifierWithEmailAttributes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithEmailAttributes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithEmailAttributes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithEmailAttributes;
    static equals(a: IdentifierWithEmailAttributes | PlainMessage<IdentifierWithEmailAttributes> | undefined, b: IdentifierWithEmailAttributes | PlainMessage<IdentifierWithEmailAttributes> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the standard identifier with a search key. Useful when searching within sub records of a parent item (such as shift group shifts, etc)
 *
 * @generated from message Genesis.IdentifierWithSearchKey
 */
export declare class IdentifierWithSearchKey extends Message<IdentifierWithSearchKey> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * The search key
     *
     * @generated from field: string search_key = 2;
     */
    searchKey: string;
    constructor(data?: PartialMessage<IdentifierWithSearchKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.IdentifierWithSearchKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithSearchKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithSearchKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithSearchKey;
    static equals(a: IdentifierWithSearchKey | PlainMessage<IdentifierWithSearchKey> | undefined, b: IdentifierWithSearchKey | PlainMessage<IdentifierWithSearchKey> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the UUID identifier
 *
 * @generated from message Genesis.IdentifierUUID
 */
export declare class IdentifierUUID extends Message<IdentifierUUID> ***REMOVED***
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    constructor(data?: PartialMessage<IdentifierUUID>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.IdentifierUUID";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierUUID;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierUUID;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierUUID;
    static equals(a: IdentifierUUID | PlainMessage<IdentifierUUID> | undefined, b: IdentifierUUID | PlainMessage<IdentifierUUID> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being a standard lifecycle status
 *
 * @generated from message Genesis.LogbookLogConciseSLC
 */
export declare class LogbookLogConciseSLC extends Message<LogbookLogConciseSLC> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * Stores if the resource is active
     *
     * @generated from field: bool is_active = 2;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: bytes ref_uuid = 10;
     */
    refUuid: Uint8Array;
    /**
     * The operation that was performed
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS operation = 11;
     */
    operation: STANDARD_LIFECYCLE_STATUS;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The name of the person who made this entry
     *
     * @generated from field: string name = 13;
     */
    name: string;
    /**
     * The ID of the user who made this entry
     *
     * @generated from field: int64 user_id = 14;
     */
    userId: bigint;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 15;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 16;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogConciseSLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LogbookLogConciseSLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogConciseSLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogConciseSLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogConciseSLC;
    static equals(a: LogbookLogConciseSLC | PlainMessage<LogbookLogConciseSLC> | undefined, b: LogbookLogConciseSLC | PlainMessage<LogbookLogConciseSLC> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to create a standard lifecycle log entry
 *
 * @generated from message Genesis.LogbookLogConciseSLCCreateRequest
 */
export declare class LogbookLogConciseSLCCreateRequest extends Message<LogbookLogConciseSLCCreateRequest> ***REMOVED***
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: bytes ref_uuid = 10;
     */
    refUuid: Uint8Array;
    /**
     * The operation that was performed
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS operation = 11;
     */
    operation: STANDARD_LIFECYCLE_STATUS;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 13;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 14;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogConciseSLCCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LogbookLogConciseSLCCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogConciseSLCCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogConciseSLCCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogConciseSLCCreateRequest;
    static equals(a: LogbookLogConciseSLCCreateRequest | PlainMessage<LogbookLogConciseSLCCreateRequest> | undefined, b: LogbookLogConciseSLCCreateRequest | PlainMessage<LogbookLogConciseSLCCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to create a generic lifecycle log entry
 *
 * @generated from message Genesis.LogbookLogConciseGenericCreateRequest
 */
export declare class LogbookLogConciseGenericCreateRequest extends Message<LogbookLogConciseGenericCreateRequest> ***REMOVED***
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: bytes ref_uuid = 10;
     */
    refUuid: Uint8Array;
    /**
     * The operation that was performed
     *
     * @generated from field: string operation = 11;
     */
    operation: string;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 13;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 14;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogConciseGenericCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LogbookLogConciseGenericCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogConciseGenericCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogConciseGenericCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogConciseGenericCreateRequest;
    static equals(a: LogbookLogConciseGenericCreateRequest | PlainMessage<LogbookLogConciseGenericCreateRequest> | undefined, b: LogbookLogConciseGenericCreateRequest | PlainMessage<LogbookLogConciseGenericCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes each parameter that's part of the logbook (includes historical data of the object)
 *
 * @generated from message Genesis.LogbookLogComplete
 */
export declare class LogbookLogComplete extends Message<LogbookLogComplete> ***REMOVED***
    /**
     * Stores the metada of this resource
     *
     * @generated from field: Genesis.EmployeeMetadata metadata = 1;
     */
    metadata?: EmployeeMetadata;
    /**
     * The UUID of the resource
     *
     * @generated from field: bytes ref_uuid = 10;
     */
    refUuid: Uint8Array;
    /**
     * The operation that was performed
     *
     * @generated from field: Genesis.LOGBOOK_OPERATION operation = 11;
     */
    operation: LOGBOOK_OPERATION;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 13;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 14;
     */
    userComment: string;
    /**
     * The marshalled object at the time the log was created
     *
     * @generated from field: bytes previous_data = 15;
     */
    previousData: Uint8Array;
    constructor(data?: PartialMessage<LogbookLogComplete>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.LogbookLogComplete";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogComplete;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogComplete;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogComplete;
    static equals(a: LogbookLogComplete | PlainMessage<LogbookLogComplete> | undefined, b: LogbookLogComplete | PlainMessage<LogbookLogComplete> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data model to handle reordering of items
 *
 * @generated from message Genesis.ReorderItemsRequest
 */
export declare class ReorderItemsRequest extends Message<ReorderItemsRequest> ***REMOVED***
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * The list of IDs to be stored in the given sequence
     *
     * @generated from field: repeated int64 sequence = 2;
     */
    sequence: bigint[];
    constructor(data?: PartialMessage<ReorderItemsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.ReorderItemsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReorderItemsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReorderItemsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReorderItemsRequest;
    static equals(a: ReorderItemsRequest | PlainMessage<ReorderItemsRequest> | undefined, b: ReorderItemsRequest | PlainMessage<ReorderItemsRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the data model to handle cloning of properties of a source record (denoted by source ID) into a target record (denoted by the target ID)
 *
 * @generated from message Genesis.CloneRequest
 */
export declare class CloneRequest extends Message<CloneRequest> ***REMOVED***
    /**
     * The ID of the source record whose properties need to be cloned into the target record
     *
     * @generated from field: int64 source_id = 1;
     */
    sourceId: bigint;
    /**
     * The ID of the target record that will store the cloned properties from the source
     *
     * @generated from field: int64 target_id = 2;
     */
    targetId: bigint;
    /**
     * Stores if the existing items in the target resource need to be deleted before cloning from the source resource
     *
     * @generated from field: bool delete_existing = 3;
     */
    deleteExisting: boolean;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 4;
     */
    userComment: string;
    constructor(data?: PartialMessage<CloneRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.CloneRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CloneRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CloneRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CloneRequest;
    static equals(a: CloneRequest | PlainMessage<CloneRequest> | undefined, b: CloneRequest | PlainMessage<CloneRequest> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=base_pb.d.ts.map