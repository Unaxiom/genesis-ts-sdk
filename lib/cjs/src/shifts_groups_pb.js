"use strict";
// addShiftGroupShift
// modifyShiftGroupShift
// reorderShiftGroupShifts
// deleteShiftGroupShift
// approveShiftGroupShift
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
exports.ShiftsGroupsServiceSearchAllReq = exports.ShiftsGroupsServiceFilterReq = exports.ShiftsGroupsServiceEntityPaginationReq = exports.ShiftsGroupsServicePaginationResponse = exports.ShiftsGroupsServicePaginationReq = exports.ShiftsGroupsShiftsHistoryRequest = exports.ShiftsGroupsShiftsList = exports.ShiftsGroupsList = exports.ShiftGroupShift = exports.ShiftsGroupsServiceShiftGroupUpdateRequest = exports.ShiftsGroupsServiceShiftGroupCreateRequest = exports.ShiftGroup = exports.ShiftsGroupsServiceUpdateRequest = exports.ShiftsGroupsServiceCreateRequest = exports.SHIFT_GROUP_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.SHIFT_GROUP_SORT_KEY
 */
var SHIFT_GROUP_SORT_KEY;
(function (SHIFT_GROUP_SORT_KEY) ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED"] = 0] = "SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_CREATED_AT"] = 1] = "SHIFT_GROUP_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_MODIFIED_AT"] = 2] = "SHIFT_GROUP_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_APPROVED_ON"] = 3] = "SHIFT_GROUP_SORT_KEY_APPROVED_ON";
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_APPROVED_BY"] = 4] = "SHIFT_GROUP_SORT_KEY_APPROVED_BY";
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID"] = 5] = "SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID";
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_COMPLETED_ON = 6;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_COMPLETED_ON"] = 6] = "SHIFT_GROUP_SORT_KEY_COMPLETED_ON";
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_NAME = 10;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_NAME"] = 10] = "SHIFT_GROUP_SORT_KEY_NAME";
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: SHIFT_GROUP_SORT_KEY_CODE = 11;
     */
    SHIFT_GROUP_SORT_KEY[SHIFT_GROUP_SORT_KEY["SHIFT_GROUP_SORT_KEY_CODE"] = 11] = "SHIFT_GROUP_SORT_KEY_CODE";
***REMOVED***)(SHIFT_GROUP_SORT_KEY || (exports.SHIFT_GROUP_SORT_KEY = SHIFT_GROUP_SORT_KEY = ***REMOVED******REMOVED***));
// Retrieve enum metadata with: proto3.getEnumType(SHIFT_GROUP_SORT_KEY)
protobuf_1.proto3.util.setEnumType(SHIFT_GROUP_SORT_KEY, "Genesis.SHIFT_GROUP_SORT_KEY", [
    ***REMOVED*** no: 0, name: "SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED" ***REMOVED***,
    ***REMOVED*** no: 1, name: "SHIFT_GROUP_SORT_KEY_CREATED_AT" ***REMOVED***,
    ***REMOVED*** no: 2, name: "SHIFT_GROUP_SORT_KEY_MODIFIED_AT" ***REMOVED***,
    ***REMOVED*** no: 3, name: "SHIFT_GROUP_SORT_KEY_APPROVED_ON" ***REMOVED***,
    ***REMOVED*** no: 4, name: "SHIFT_GROUP_SORT_KEY_APPROVED_BY" ***REMOVED***,
    ***REMOVED*** no: 5, name: "SHIFT_GROUP_SORT_KEY_APPROVER_ROLE_ID" ***REMOVED***,
    ***REMOVED*** no: 6, name: "SHIFT_GROUP_SORT_KEY_COMPLETED_ON" ***REMOVED***,
    ***REMOVED*** no: 10, name: "SHIFT_GROUP_SORT_KEY_NAME" ***REMOVED***,
    ***REMOVED*** no: 11, name: "SHIFT_GROUP_SORT_KEY_CODE" ***REMOVED***,
]);
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.ShiftsGroupsServiceCreateRequest
 */
class ShiftsGroupsServiceCreateRequest extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores a globally unique entity UUID. This will be set at the organization level
         *
         * @generated from field: string entity_uuid = 1;
         */
        this.entityUuid = "";
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 2;
         */
        this.userComment = "";
        /**
         * The associated vault folder ID
         *
         * @generated from field: int64 vault_folder_id = 9;
         */
        this.vaultFolderId = protobuf_1.protoInt64.zero;
        /**
         * The name of the shift group
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The shift group code
         *
         * @generated from field: string code = 11;
         */
        this.code = "";
        /**
         * The description of the shift group
         *
         * @generated from field: string description = 12;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServiceCreateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServiceCreateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServiceCreateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceCreateRequest, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServiceCreateRequest = ShiftsGroupsServiceCreateRequest;
ShiftsGroupsServiceCreateRequest.runtime = protobuf_1.proto3;
ShiftsGroupsServiceCreateRequest.typeName = "Genesis.ShiftsGroupsServiceCreateRequest";
ShiftsGroupsServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
]);
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.ShiftsGroupsServiceUpdateRequest
 */
class ShiftsGroupsServiceUpdateRequest extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * The ID of the record that needs to be updated
         *
         * @generated from field: int64 id = 2;
         */
        this.id = protobuf_1.protoInt64.zero;
        /**
         * Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
         *
         * @generated from field: bool notify_users = 3;
         */
        this.notifyUsers = false;
        /**
         * The associated vault folder ID
         *
         * @generated from field: int64 vault_folder_id = 9;
         */
        this.vaultFolderId = protobuf_1.protoInt64.zero;
        /**
         * The name of the shift group
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The shift group code
         *
         * @generated from field: string code = 11;
         */
        this.code = "";
        /**
         * The description of the shift group
         *
         * @generated from field: string description = 12;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServiceUpdateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServiceUpdateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServiceUpdateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceUpdateRequest, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServiceUpdateRequest = ShiftsGroupsServiceUpdateRequest;
ShiftsGroupsServiceUpdateRequest.runtime = protobuf_1.proto3;
ShiftsGroupsServiceUpdateRequest.typeName = "Genesis.ShiftsGroupsServiceUpdateRequest";
ShiftsGroupsServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
]);
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.ShiftGroup
 */
class ShiftGroup extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores a globally unique entity UUID. This will be set at the organization level
         *
         * @generated from field: string entity_uuid = 1;
         */
        this.entityUuid = "";
        /**
         * The status of this shift group
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        /**
         * Stores the logs of every operation performed on this shift group
         *
         * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
         */
        this.logs = [];
        /**
         * The timestamp of when this shift group was marked as completed
         *
         * @generated from field: int64 completed_on = 6;
         */
        this.completedOn = protobuf_1.protoInt64.zero;
        /**
         * The associated vault folder ID
         *
         * @generated from field: int64 vault_folder_id = 9;
         */
        this.vaultFolderId = protobuf_1.protoInt64.zero;
        /**
         * The name of the shift group
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The shift group code
         *
         * @generated from field: string code = 11;
         */
        this.code = "";
        /**
         * The description of the shift group
         *
         * @generated from field: string description = 12;
         */
        this.description = "";
        /**
         * The list of associated shift group shifts
         *
         * @generated from field: repeated Genesis.ShiftGroupShift list = 20;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftGroup().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftGroup().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftGroup().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftGroup, a, b);
***REMOVED***
***REMOVED***
exports.ShiftGroup = ShiftGroup;
ShiftGroup.runtime = protobuf_1.proto3;
ShiftGroup.typeName = "Genesis.ShiftGroup";
ShiftGroup.fields = protobuf_1.proto3.util.newFieldList(() => [
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
    ***REMOVED*** no: 20, name: "list", kind: "message", T: ShiftGroupShift, repeated: true ***REMOVED***,
]);
/**
 *
 * Describes the parameters required to add a shift to a shift group
 *
 * @generated from message Genesis.ShiftsGroupsServiceShiftGroupCreateRequest
 */
class ShiftsGroupsServiceShiftGroupCreateRequest extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 10;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift ID
         *
         * @generated from field: int64 shift_id = 11;
         */
        this.shiftId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServiceShiftGroupCreateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServiceShiftGroupCreateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServiceShiftGroupCreateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceShiftGroupCreateRequest, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServiceShiftGroupCreateRequest = ShiftsGroupsServiceShiftGroupCreateRequest;
ShiftsGroupsServiceShiftGroupCreateRequest.runtime = protobuf_1.proto3;
ShiftsGroupsServiceShiftGroupCreateRequest.typeName = "Genesis.ShiftsGroupsServiceShiftGroupCreateRequest";
ShiftsGroupsServiceShiftGroupCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "shift_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes the parameters required to update a shift in a shift group
 *
 * @generated from message Genesis.ShiftsGroupsServiceShiftGroupUpdateRequest
 */
class ShiftsGroupsServiceShiftGroupUpdateRequest extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * The ID of the record
         *
         * @generated from field: int64 id = 2;
         */
        this.id = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 10;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift ID
         *
         * @generated from field: int64 shift_id = 11;
         */
        this.shiftId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServiceShiftGroupUpdateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServiceShiftGroupUpdateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServiceShiftGroupUpdateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceShiftGroupUpdateRequest, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServiceShiftGroupUpdateRequest = ShiftsGroupsServiceShiftGroupUpdateRequest;
ShiftsGroupsServiceShiftGroupUpdateRequest.runtime = protobuf_1.proto3;
ShiftsGroupsServiceShiftGroupUpdateRequest.typeName = "Genesis.ShiftsGroupsServiceShiftGroupUpdateRequest";
ShiftsGroupsServiceShiftGroupUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "shift_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes the parameters that constitute a shift associated to a shift group
 *
 * @generated from message Genesis.ShiftGroupShift
 */
class ShiftGroupShift extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores a globally unique entity UUID. This will be set at the organization level
         *
         * @generated from field: string entity_uuid = 1;
         */
        this.entityUuid = "";
        /**
         * Denotes if this record requires approval (or has been approved)
         *
         * @generated from field: bool need_approval = 4;
         */
        this.needApproval = false;
        /**
         * Stores any comment that the user might have added during an operation
         *
         * @generated from field: string user_comment = 5;
         */
        this.userComment = "";
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 10;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift ID
         *
         * @generated from field: int64 shift_id = 11;
         */
        this.shiftId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftGroupShift().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftGroupShift().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftGroupShift().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftGroupShift, a, b);
***REMOVED***
***REMOVED***
exports.ShiftGroupShift = ShiftGroupShift;
ShiftGroupShift.runtime = protobuf_1.proto3;
ShiftGroupShift.typeName = "Genesis.ShiftGroupShift";
ShiftGroupShift.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata ***REMOVED***,
    ***REMOVED*** no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata ***REMOVED***,
    ***REMOVED*** no: 4, name: "need_approval", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 5, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "shift_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes the message consisting of the list of shift groups
 *
 * @generated from message Genesis.ShiftsGroupsList
 */
class ShiftsGroupsList extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Genesis.ShiftGroup list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsList().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsList().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsList().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsList, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsList = ShiftsGroupsList;
ShiftsGroupsList.runtime = protobuf_1.proto3;
ShiftsGroupsList.typeName = "Genesis.ShiftsGroupsList";
ShiftsGroupsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "list", kind: "message", T: ShiftGroup, repeated: true ***REMOVED***,
]);
/**
 *
 * Describes the message consisting of the list of shift group shifts
 *
 * @generated from message Genesis.ShiftsGroupsShiftsList
 */
class ShiftsGroupsShiftsList extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Genesis.ShiftGroupShift list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsShiftsList().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsShiftsList().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsShiftsList().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsShiftsList, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsShiftsList = ShiftsGroupsShiftsList;
ShiftsGroupsShiftsList.runtime = protobuf_1.proto3;
ShiftsGroupsShiftsList.typeName = "Genesis.ShiftsGroupsShiftsList";
ShiftsGroupsShiftsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "list", kind: "message", T: ShiftGroupShift, repeated: true ***REMOVED***,
]);
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.ShiftsGroupsShiftsHistoryRequest
 */
class ShiftsGroupsShiftsHistoryRequest extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 10;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift ID
         *
         * @generated from field: int64 shift_id = 11;
         */
        this.shiftId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsShiftsHistoryRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsShiftsHistoryRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsShiftsHistoryRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsShiftsHistoryRequest, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsShiftsHistoryRequest = ShiftsGroupsShiftsHistoryRequest;
ShiftsGroupsShiftsHistoryRequest.runtime = protobuf_1.proto3;
ShiftsGroupsShiftsHistoryRequest.typeName = "Genesis.ShiftsGroupsShiftsHistoryRequest";
ShiftsGroupsShiftsHistoryRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 10, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "shift_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.ShiftsGroupsServicePaginationReq
 */
class ShiftsGroupsServicePaginationReq extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * If true, then returns only active records. If false, then returns only inactive records
         *
         * @generated from field: bool is_active = 1;
         */
        this.isActive = false;
        /**
         * The number of records that need to be sent in the response
         *
         * @generated from field: int64 count = 2;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The number that need to be offset by before fetching the records
         *
         * @generated from field: int64 offset = 3;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         * The sort order that is to be used to fetch the pagination response
         *
         * @generated from field: Genesis.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;
         */
        this.sortKey = SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The status of this shift group
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServicePaginationReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServicePaginationReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServicePaginationReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServicePaginationReq, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServicePaginationReq = ShiftsGroupsServicePaginationReq;
ShiftsGroupsServicePaginationReq.runtime = protobuf_1.proto3;
ShiftsGroupsServicePaginationReq.typeName = "Genesis.ShiftsGroupsServicePaginationReq";
ShiftsGroupsServicePaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_GROUP_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
]);
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.ShiftsGroupsServicePaginationResponse
 */
class ShiftsGroupsServicePaginationResponse extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * The number of records in this payload
         *
         * @generated from field: int64 count = 1;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
         *
         * @generated from field: int64 offset = 2;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         * The total number of records that are available
         *
         * @generated from field: int64 total = 3;
         */
        this.total = protobuf_1.protoInt64.zero;
        /**
         * The list of records
         *
         * @generated from field: repeated Genesis.ShiftGroup payload = 4;
         */
        this.payload = [];
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServicePaginationResponse().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServicePaginationResponse().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServicePaginationResponse().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServicePaginationResponse, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServicePaginationResponse = ShiftsGroupsServicePaginationResponse;
ShiftsGroupsServicePaginationResponse.runtime = protobuf_1.proto3;
ShiftsGroupsServicePaginationResponse.typeName = "Genesis.ShiftsGroupsServicePaginationResponse";
ShiftsGroupsServicePaginationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "payload", kind: "message", T: ShiftGroup, repeated: true ***REMOVED***,
]);
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.ShiftsGroupsServiceEntityPaginationReq
 */
class ShiftsGroupsServiceEntityPaginationReq extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * If true, then returns only active records. If false, then returns only inactive records
         *
         * @generated from field: bool is_active = 1;
         */
        this.isActive = false;
        /**
         * The number of records that need to be sent in the response
         *
         * @generated from field: int64 count = 2;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The number that need to be offset by before fetching the records
         *
         * @generated from field: int64 offset = 3;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         * The sort order that is to be used to fetch the pagination response
         *
         * @generated from field: Genesis.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;
         */
        this.sortKey = SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The entity UUID that is to be used to filter records
         *
         * @generated from field: string entity_uuid = 6;
         */
        this.entityUuid = "";
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServiceEntityPaginationReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServiceEntityPaginationReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServiceEntityPaginationReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceEntityPaginationReq, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServiceEntityPaginationReq = ShiftsGroupsServiceEntityPaginationReq;
ShiftsGroupsServiceEntityPaginationReq.runtime = protobuf_1.proto3;
ShiftsGroupsServiceEntityPaginationReq.typeName = "Genesis.ShiftsGroupsServiceEntityPaginationReq";
ShiftsGroupsServiceEntityPaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_GROUP_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
]);
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.ShiftsGroupsServiceFilterReq
 */
class ShiftsGroupsServiceFilterReq extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * If true, then returns only active records. If false, then returns only inactive records
         *
         * @generated from field: bool is_active = 1;
         */
        this.isActive = false;
        /**
         * The number of records that need to be sent in the response. Returns all records if it is set to -1
         *
         * @generated from field: int64 count = 2;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The number that need to be offset by before fetching the records
         *
         * @generated from field: int64 offset = 3;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         * The sort order that is to be used to fetch the pagination response
         *
         * @generated from field: Genesis.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;
         */
        this.sortKey = SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The minimum timestamp that needs to be considered to filter by creation
         *
         * @generated from field: int64 creation_timestamp_start = 6;
         */
        this.creationTimestampStart = protobuf_1.protoInt64.zero;
        /**
         * The maximum timestamp that needs to be considered to filter by creation
         *
         * @generated from field: int64 creation_timestamp_end = 7;
         */
        this.creationTimestampEnd = protobuf_1.protoInt64.zero;
        /**
         * The entity UUID that is to be used to filter records
         *
         * @generated from field: string entity_uuid = 8;
         */
        this.entityUuid = "";
        /**
         * The status of this shift group
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        /**
         * The start range of approved timestamp
         *
         * @generated from field: int64 approved_on_start = 11;
         */
        this.approvedOnStart = protobuf_1.protoInt64.zero;
        /**
         * The end range of approved timestamp
         *
         * @generated from field: int64 approved_on_end = 12;
         */
        this.approvedOnEnd = protobuf_1.protoInt64.zero;
        /**
         * The ID of the approver
         *
         * @generated from field: int64 approved_by_user_id = 13;
         */
        this.approvedByUserId = protobuf_1.protoInt64.zero;
        /**
         * The role ID of the approver
         *
         * @generated from field: int64 approver_role_id = 14;
         */
        this.approverRoleId = protobuf_1.protoInt64.zero;
        /**
         * The start range of completed timestamp
         *
         * @generated from field: int64 completed_on_start = 15;
         */
        this.completedOnStart = protobuf_1.protoInt64.zero;
        /**
         * The end range of completed timestamp
         *
         * @generated from field: int64 completed_on_end = 16;
         */
        this.completedOnEnd = protobuf_1.protoInt64.zero;
        /**
         * The name of the shift group
         *
         * @generated from field: string name = 20;
         */
        this.name = "";
        /**
         * The shift group code
         *
         * @generated from field: string code = 21;
         */
        this.code = "";
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServiceFilterReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServiceFilterReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServiceFilterReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceFilterReq, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServiceFilterReq = ShiftsGroupsServiceFilterReq;
ShiftsGroupsServiceFilterReq.runtime = protobuf_1.proto3;
ShiftsGroupsServiceFilterReq.typeName = "Genesis.ShiftsGroupsServiceFilterReq";
ShiftsGroupsServiceFilterReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_GROUP_SORT_KEY) ***REMOVED***,
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
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.ShiftsGroupsServiceSearchAllReq
 */
class ShiftsGroupsServiceSearchAllReq extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * If true, then returns only active records. If false, then returns only inactive records
         *
         * @generated from field: bool is_active = 1;
         */
        this.isActive = false;
        /**
         * The number of records that need to be sent in the response. Returns all records if it is set to -1
         *
         * @generated from field: int64 count = 2;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The number that need to be offset by before fetching the records
         *
         * @generated from field: int64 offset = 3;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         * The sort order that is to be used to fetch the pagination response
         *
         * @generated from field: Genesis.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;
         */
        this.sortKey = SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The entity UUID that is to be used to filter records
         *
         * @generated from field: string entity_uuid = 6;
         */
        this.entityUuid = "";
        /**
         * Limit the search space to the given status
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        /**
         * Describes the key with which the search operation needs to be performed
         *
         * @generated from field: string search_key = 11;
         */
        this.searchKey = "";
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new ShiftsGroupsServiceSearchAllReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new ShiftsGroupsServiceSearchAllReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new ShiftsGroupsServiceSearchAllReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(ShiftsGroupsServiceSearchAllReq, a, b);
***REMOVED***
***REMOVED***
exports.ShiftsGroupsServiceSearchAllReq = ShiftsGroupsServiceSearchAllReq;
ShiftsGroupsServiceSearchAllReq.runtime = protobuf_1.proto3;
ShiftsGroupsServiceSearchAllReq.typeName = "Genesis.ShiftsGroupsServiceSearchAllReq";
ShiftsGroupsServiceSearchAllReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(SHIFT_GROUP_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
]);
