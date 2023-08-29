"use strict";
// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file shifts.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.ShiftsServiceSearchAllReq = exports.ShiftsServiceFilterReq = exports.ShiftsServiceEntityPaginationReq = exports.ShiftsServicePaginationResponse = exports.ShiftsServicePaginationReq = exports.ShiftsList = exports.Shift = exports.ShiftsServiceUpdateRequest = exports.ShiftsServiceCreateRequest = exports.SHIFT_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SHIFT_SORT_KEY
 */
var SHIFT_SORT_KEY;
(function (SHIFT_SORT_KEY) ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SHIFT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_ID_UNSPECIFIED"] = 0] = "SHIFT_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_CREATED_AT = 1;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_CREATED_AT"] = 1] = "SHIFT_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_MODIFIED_AT = 2;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_MODIFIED_AT"] = 2] = "SHIFT_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVED_ON = 3;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_APPROVED_ON"] = 3] = "SHIFT_SORT_KEY_APPROVED_ON";
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVED_BY = 4;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_APPROVED_BY"] = 4] = "SHIFT_SORT_KEY_APPROVED_BY";
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SHIFT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_APPROVER_ROLE_ID"] = 5] = "SHIFT_SORT_KEY_APPROVER_ROLE_ID";
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_COMPLETED_ON = 6;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_COMPLETED_ON"] = 6] = "SHIFT_SORT_KEY_COMPLETED_ON";
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SHIFT_SORT_KEY_NAME = 10;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_NAME"] = 10] = "SHIFT_SORT_KEY_NAME";
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: SHIFT_SORT_KEY_CODE = 11;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_CODE"] = 11] = "SHIFT_SORT_KEY_CODE";
    /**
     * Fetch ordered results by the start at timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_START_AT = 12;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_START_AT"] = 12] = "SHIFT_SORT_KEY_START_AT";
    /**
     * Fetch ordered results by the end at timestamp
     *
     * @generated from enum value: SHIFT_SORT_KEY_END_AT = 13;
     */
    SHIFT_SORT_KEY[SHIFT_SORT_KEY["SHIFT_SORT_KEY_END_AT"] = 13] = "SHIFT_SORT_KEY_END_AT";
***REMOVED***)(SHIFT_SORT_KEY || (exports.SHIFT_SORT_KEY = SHIFT_SORT_KEY = ***REMOVED******REMOVED***));
// Retrieve enum metadata with: proto3.getEnumType(SHIFT_SORT_KEY)
protobuf_1.proto3.util.setEnumType(SHIFT_SORT_KEY, "Genesis.SHIFT_SORT_KEY", [
    ***REMOVED*** no: 0, name: "SHIFT_SORT_KEY_ID_UNSPECIFIED" ***REMOVED***,
    ***REMOVED*** no: 1, name: "SHIFT_SORT_KEY_CREATED_AT" ***REMOVED***,
    ***REMOVED*** no: 2, name: "SHIFT_SORT_KEY_MODIFIED_AT" ***REMOVED***,
    ***REMOVED*** no: 3, name: "SHIFT_SORT_KEY_APPROVED_ON" ***REMOVED***,
    ***REMOVED*** no: 4, name: "SHIFT_SORT_KEY_APPROVED_BY" ***REMOVED***,
    ***REMOVED*** no: 5, name: "SHIFT_SORT_KEY_APPROVER_ROLE_ID" ***REMOVED***,
    ***REMOVED*** no: 6, name: "SHIFT_SORT_KEY_COMPLETED_ON" ***REMOVED***,
    ***REMOVED*** no: 10, name: "SHIFT_SORT_KEY_NAME" ***REMOVED***,
    ***REMOVED*** no: 11, name: "SHIFT_SORT_KEY_CODE" ***REMOVED***,
    ***REMOVED*** no: 12, name: "SHIFT_SORT_KEY_START_AT" ***REMOVED***,
    ***REMOVED*** no: 13, name: "SHIFT_SORT_KEY_END_AT" ***REMOVED***,
]);
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.ShiftsServiceCreateRequest
 */
class ShiftsServiceCreateRequest extends protobuf_1.Message ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid = "";
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment = "";
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name = "";
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code = "";
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description = "";
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 start_at = 13;
     */
    startAt = protobuf_1.protoInt64.zero;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 end_at = 14;
     */
    endAt = protobuf_1.protoInt64.zero;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek = "";
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone = "";
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.ShiftsServiceCreateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 13, name: "start_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 14, name: "end_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 15, name: "day_of_week", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 16, name: "timezone", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsServiceCreateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsServiceCreateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsServiceCreateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsServiceCreateRequest, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsServiceCreateRequest = ShiftsServiceCreateRequest;
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.ShiftsServiceUpdateRequest
 */
class ShiftsServiceUpdateRequest extends protobuf_1.Message ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment = "";
    /**
     * The ID of the record that needs to be updated
     *
     * @generated from field: int64 id = 2;
     */
    id = protobuf_1.protoInt64.zero;
    /**
     * Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers = false;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name = "";
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code = "";
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description = "";
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 start_at = 13;
     */
    startAt = protobuf_1.protoInt64.zero;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 end_at = 14;
     */
    endAt = protobuf_1.protoInt64.zero;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek = "";
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone = "";
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.ShiftsServiceUpdateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
        ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 13, name: "start_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 14, name: "end_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 15, name: "day_of_week", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 16, name: "timezone", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsServiceUpdateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsServiceUpdateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsServiceUpdateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsServiceUpdateRequest, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsServiceUpdateRequest = ShiftsServiceUpdateRequest;
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Shift
 */
class Shift extends protobuf_1.Message ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid = "";
    /**
     * Stores the metadata of this shift
     *
     * @generated from field: Genesis.EmployeeMetadata metadata = 2;
     */
    metadata;
    /**
     * Stores the approval metadata
     *
     * @generated from field: Genesis.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata;
    /**
     * The status of this shift
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
    /**
     * Stores the logs of every operation performed on this shift
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs = [];
    /**
     * The timestamp of when this shift was marked as completed
     *
     * @generated from field: int64 completed_on = 6;
     */
    completedOn = protobuf_1.protoInt64.zero;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift
     *
     * @generated from field: string name = 10;
     */
    name = "";
    /**
     * The shift code
     *
     * @generated from field: string code = 11;
     */
    code = "";
    /**
     * The description of the shift
     *
     * @generated from field: string description = 12;
     */
    description = "";
    /**
     * The timestamp of when the shift begins (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 start_at = 13;
     */
    startAt = protobuf_1.protoInt64.zero;
    /**
     * The timestamp of when the shift ends (in seconds within a 24 hour cycle)
     *
     * @generated from field: int64 end_at = 14;
     */
    endAt = protobuf_1.protoInt64.zero;
    /**
     * The week day that the shift is applicable on
     *
     * @generated from field: string day_of_week = 15;
     */
    dayOfWeek = "";
    /**
     * The timezone as represented in the TZ database
     *
     * @generated from field: string timezone = 16;
     */
    timezone = "";
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.Shift";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata ***REMOVED***,
        ***REMOVED*** no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata ***REMOVED***,
        ***REMOVED*** no: 4, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
        ***REMOVED*** no: 5, name: "logs", kind: "message", T: base_pb_js_1.LogbookLogConciseSLC, repeated: true ***REMOVED***,
        ***REMOVED*** no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 13, name: "start_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 14, name: "end_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 15, name: "day_of_week", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 16, name: "timezone", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new Shift().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new Shift().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new Shift().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(Shift, a, b);
***REMOVED***
***REMOVED***
exports.Shift = Shift;
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.ShiftsList
 */
class ShiftsList extends protobuf_1.Message ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.Shift list = 1;
     */
    list = [];
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.ShiftsList";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "list", kind: "message", T: Shift, repeated: true ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsList().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsList().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsList().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsList, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsList = ShiftsList;
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.ShiftsServicePaginationReq
 */
class ShiftsServicePaginationReq extends protobuf_1.Message ***REMOVED***
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive = false;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey = SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The status of this shift
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.ShiftsServicePaginationReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
        ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
        ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_SORT_KEY) ***REMOVED***,
        ***REMOVED*** no: 6, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsServicePaginationReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsServicePaginationReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsServicePaginationReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsServicePaginationReq, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsServicePaginationReq = ShiftsServicePaginationReq;
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.ShiftsServicePaginationResponse
 */
class ShiftsServicePaginationResponse extends protobuf_1.Message ***REMOVED***
    /**
     * The number of records in this payload
     *
     * @generated from field: int64 count = 1;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: int64 offset = 2;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The total number of records that are available
     *
     * @generated from field: int64 total = 3;
     */
    total = protobuf_1.protoInt64.zero;
    /**
     * The list of records
     *
     * @generated from field: repeated Genesis.Shift payload = 4;
     */
    payload = [];
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.ShiftsServicePaginationResponse";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 4, name: "payload", kind: "message", T: Shift, repeated: true ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsServicePaginationResponse().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsServicePaginationResponse().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsServicePaginationResponse().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsServicePaginationResponse, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsServicePaginationResponse = ShiftsServicePaginationResponse;
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.ShiftsServiceEntityPaginationReq
 */
class ShiftsServiceEntityPaginationReq extends protobuf_1.Message ***REMOVED***
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive = false;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey = SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid = "";
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.ShiftsServiceEntityPaginationReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
        ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
        ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_SORT_KEY) ***REMOVED***,
        ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsServiceEntityPaginationReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsServiceEntityPaginationReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsServiceEntityPaginationReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsServiceEntityPaginationReq, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsServiceEntityPaginationReq = ShiftsServiceEntityPaginationReq;
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.ShiftsServiceFilterReq
 */
class ShiftsServiceFilterReq extends protobuf_1.Message ***REMOVED***
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive = false;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey = SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: int64 creation_timestamp_start = 6;
     */
    creationTimestampStart = protobuf_1.protoInt64.zero;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: int64 creation_timestamp_end = 7;
     */
    creationTimestampEnd = protobuf_1.protoInt64.zero;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid = "";
    /**
     * The status of this shift
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: int64 approved_on_start = 11;
     */
    approvedOnStart = protobuf_1.protoInt64.zero;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: int64 approved_on_end = 12;
     */
    approvedOnEnd = protobuf_1.protoInt64.zero;
    /**
     * The ID of the approver
     *
     * @generated from field: int64 approved_by_user_id = 13;
     */
    approvedByUserId = protobuf_1.protoInt64.zero;
    /**
     * The role ID of the approver
     *
     * @generated from field: int64 approver_role_id = 14;
     */
    approverRoleId = protobuf_1.protoInt64.zero;
    /**
     * The start range of completed timestamp
     *
     * @generated from field: int64 completed_on_start = 15;
     */
    completedOnStart = protobuf_1.protoInt64.zero;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: int64 completed_on_end = 16;
     */
    completedOnEnd = protobuf_1.protoInt64.zero;
    /**
     * The name of the shift
     *
     * @generated from field: string name = 20;
     */
    name = "";
    /**
     * The shift code
     *
     * @generated from field: string code = 21;
     */
    code = "";
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.ShiftsServiceFilterReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
        ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
        ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_SORT_KEY) ***REMOVED***,
        ***REMOVED*** no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
        ***REMOVED*** no: 11, name: "approved_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 12, name: "approved_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 13, name: "approved_by_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 14, name: "approver_role_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 15, name: "completed_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 16, name: "completed_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsServiceFilterReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsServiceFilterReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsServiceFilterReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsServiceFilterReq, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsServiceFilterReq = ShiftsServiceFilterReq;
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.ShiftsServiceSearchAllReq
 */
class ShiftsServiceSearchAllReq extends protobuf_1.Message ***REMOVED***
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive = false;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Genesis.SHIFT_SORT_KEY sort_key = 5;
     */
    sortKey = SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid = "";
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey = "";
    constructor(data) ***REMOVED***
        super();
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.ShiftsServiceSearchAllReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
        ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
        ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
        ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_SORT_KEY) ***REMOVED***,
        ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
        ***REMOVED*** no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
        ***REMOVED*** no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ]);
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsServiceSearchAllReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsServiceSearchAllReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsServiceSearchAllReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsServiceSearchAllReq, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsServiceSearchAllReq = ShiftsServiceSearchAllReq;