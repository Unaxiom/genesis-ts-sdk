"use strict";
// addHolidayShiftGroup
// modifyHolidayShiftGroup
// reorderHolidayShiftsGroups
// deleteHolidayShiftGroup
// approveHolidayShiftGroup
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidaysServiceViewHolidaysOnTimestampRequest = exports.HolidaysServiceSearchAllReq = exports.HolidaysServiceFilterReq = exports.HolidaysServiceEntityPaginationReq = exports.HolidaysServicePaginationResponse = exports.HolidaysServicePaginationReq = exports.HolidaysShiftsGroupsHistoryRequest = exports.HolidaysShiftsGroupsList = exports.HolidaysList = exports.HolidayShiftGroup = exports.HolidaysServiceShiftGroupUpdateRequest = exports.HolidaysServiceShiftGroupCreateRequest = exports.Holiday = exports.HolidaysServiceUpdateRequest = exports.HolidaysServiceCreateRequest = exports.HOLIDAY_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.HOLIDAY_SORT_KEY
 */
var HOLIDAY_SORT_KEY;
(function (HOLIDAY_SORT_KEY) {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_ID_UNSPECIFIED"] = 0] = "HOLIDAY_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_CREATED_AT = 1;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_CREATED_AT"] = 1] = "HOLIDAY_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_MODIFIED_AT = 2;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_MODIFIED_AT"] = 2] = "HOLIDAY_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_APPROVED_ON = 3;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_APPROVED_ON"] = 3] = "HOLIDAY_SORT_KEY_APPROVED_ON";
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_APPROVED_BY = 4;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_APPROVED_BY"] = 4] = "HOLIDAY_SORT_KEY_APPROVED_BY";
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_APPROVER_ROLE_ID"] = 5] = "HOLIDAY_SORT_KEY_APPROVER_ROLE_ID";
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_COMPLETED_ON = 6;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_COMPLETED_ON"] = 6] = "HOLIDAY_SORT_KEY_COMPLETED_ON";
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_TITLE = 10;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_TITLE"] = 10] = "HOLIDAY_SORT_KEY_TITLE";
    /**
     * Fetch ordered results by the description
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_DESCRIPTION = 11;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_DESCRIPTION"] = 11] = "HOLIDAY_SORT_KEY_DESCRIPTION";
    /**
     * Fetch ordered results by the start on timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_START_ON = 12;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_START_ON"] = 12] = "HOLIDAY_SORT_KEY_START_ON";
    /**
     * Fetch ordered results by the end on timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_END_ON = 13;
     */
    HOLIDAY_SORT_KEY[HOLIDAY_SORT_KEY["HOLIDAY_SORT_KEY_END_ON"] = 13] = "HOLIDAY_SORT_KEY_END_ON";
})(HOLIDAY_SORT_KEY || (exports.HOLIDAY_SORT_KEY = HOLIDAY_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(HOLIDAY_SORT_KEY)
protobuf_1.proto3.util.setEnumType(HOLIDAY_SORT_KEY, "Genesis.HOLIDAY_SORT_KEY", [
    { no: 0, name: "HOLIDAY_SORT_KEY_ID_UNSPECIFIED" },
    { no: 1, name: "HOLIDAY_SORT_KEY_CREATED_AT" },
    { no: 2, name: "HOLIDAY_SORT_KEY_MODIFIED_AT" },
    { no: 3, name: "HOLIDAY_SORT_KEY_APPROVED_ON" },
    { no: 4, name: "HOLIDAY_SORT_KEY_APPROVED_BY" },
    { no: 5, name: "HOLIDAY_SORT_KEY_APPROVER_ROLE_ID" },
    { no: 6, name: "HOLIDAY_SORT_KEY_COMPLETED_ON" },
    { no: 10, name: "HOLIDAY_SORT_KEY_TITLE" },
    { no: 11, name: "HOLIDAY_SORT_KEY_DESCRIPTION" },
    { no: 12, name: "HOLIDAY_SORT_KEY_START_ON" },
    { no: 13, name: "HOLIDAY_SORT_KEY_END_ON" },
]);
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.HolidaysServiceCreateRequest
 */
class HolidaysServiceCreateRequest extends protobuf_1.Message {
    constructor(data) {
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
         * The title of the holiday
         *
         * @generated from field: string title = 10;
         */
        this.title = "";
        /**
         * The description of the holiday
         *
         * @generated from field: string description = 11;
         */
        this.description = "";
        /**
         * The start timestamp
         *
         * @generated from field: int64 start_on = 12;
         */
        this.startOn = protobuf_1.protoInt64.zero;
        /**
         * The end timestamp
         *
         * @generated from field: int64 end_on = 13;
         */
        this.endOn = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServiceCreateRequest, a, b);
    }
}
exports.HolidaysServiceCreateRequest = HolidaysServiceCreateRequest;
HolidaysServiceCreateRequest.runtime = protobuf_1.proto3;
HolidaysServiceCreateRequest.typeName = "Genesis.HolidaysServiceCreateRequest";
HolidaysServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "start_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "end_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.HolidaysServiceUpdateRequest
 */
class HolidaysServiceUpdateRequest extends protobuf_1.Message {
    constructor(data) {
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
         * The title of the holiday
         *
         * @generated from field: string title = 10;
         */
        this.title = "";
        /**
         * The description of the holiday
         *
         * @generated from field: string description = 11;
         */
        this.description = "";
        /**
         * The start timestamp
         *
         * @generated from field: int64 start_on = 12;
         */
        this.startOn = protobuf_1.protoInt64.zero;
        /**
         * The end timestamp
         *
         * @generated from field: int64 end_on = 13;
         */
        this.endOn = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServiceUpdateRequest, a, b);
    }
}
exports.HolidaysServiceUpdateRequest = HolidaysServiceUpdateRequest;
HolidaysServiceUpdateRequest.runtime = protobuf_1.proto3;
HolidaysServiceUpdateRequest.typeName = "Genesis.HolidaysServiceUpdateRequest";
HolidaysServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "start_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "end_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Holiday
 */
class Holiday extends protobuf_1.Message {
    constructor(data) {
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
         * The title of the holiday
         *
         * @generated from field: string title = 10;
         */
        this.title = "";
        /**
         * The description of the holiday
         *
         * @generated from field: string description = 11;
         */
        this.description = "";
        /**
         * The start timestamp
         *
         * @generated from field: int64 start_on = 12;
         */
        this.startOn = protobuf_1.protoInt64.zero;
        /**
         * The end timestamp
         *
         * @generated from field: int64 end_on = 13;
         */
        this.endOn = protobuf_1.protoInt64.zero;
        /**
         * The list of associated holiday shift groups
         *
         * @generated from field: repeated Genesis.HolidayShiftGroup list = 20;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Holiday().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Holiday().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Holiday().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Holiday, a, b);
    }
}
exports.Holiday = Holiday;
Holiday.runtime = protobuf_1.proto3;
Holiday.typeName = "Genesis.Holiday";
Holiday.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata },
    { no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata },
    { no: 4, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 5, name: "logs", kind: "message", T: base_pb_js_1.LogbookLogConciseSLC, repeated: true },
    { no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "start_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "end_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "list", kind: "message", T: HolidayShiftGroup, repeated: true },
]);
/**
 *
 * Describes the parameters required to add a shift to a shift group
 *
 * @generated from message Genesis.HolidaysServiceShiftGroupCreateRequest
 */
class HolidaysServiceShiftGroupCreateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * Stores the holiday ID
         *
         * @generated from field: int64 holiday_id = 10;
         */
        this.holidayId = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 11;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServiceShiftGroupCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServiceShiftGroupCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServiceShiftGroupCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServiceShiftGroupCreateRequest, a, b);
    }
}
exports.HolidaysServiceShiftGroupCreateRequest = HolidaysServiceShiftGroupCreateRequest;
HolidaysServiceShiftGroupCreateRequest.runtime = protobuf_1.proto3;
HolidaysServiceShiftGroupCreateRequest.typeName = "Genesis.HolidaysServiceShiftGroupCreateRequest";
HolidaysServiceShiftGroupCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "holiday_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 *
 * Describes the parameters required to update a shift in a shift group
 *
 * @generated from message Genesis.HolidaysServiceShiftGroupUpdateRequest
 */
class HolidaysServiceShiftGroupUpdateRequest extends protobuf_1.Message {
    constructor(data) {
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
         * Stores the holiday ID
         *
         * @generated from field: int64 holiday_id = 10;
         */
        this.holidayId = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 11;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServiceShiftGroupUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServiceShiftGroupUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServiceShiftGroupUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServiceShiftGroupUpdateRequest, a, b);
    }
}
exports.HolidaysServiceShiftGroupUpdateRequest = HolidaysServiceShiftGroupUpdateRequest;
HolidaysServiceShiftGroupUpdateRequest.runtime = protobuf_1.proto3;
HolidaysServiceShiftGroupUpdateRequest.typeName = "Genesis.HolidaysServiceShiftGroupUpdateRequest";
HolidaysServiceShiftGroupUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "holiday_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 *
 * Describes the parameters that constitute a shift associated to a shift group
 *
 * @generated from message Genesis.HolidayShiftGroup
 */
class HolidayShiftGroup extends protobuf_1.Message {
    constructor(data) {
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
         * Stores the holiday ID
         *
         * @generated from field: int64 holiday_id = 10;
         */
        this.holidayId = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 11;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidayShiftGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidayShiftGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidayShiftGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidayShiftGroup, a, b);
    }
}
exports.HolidayShiftGroup = HolidayShiftGroup;
HolidayShiftGroup.runtime = protobuf_1.proto3;
HolidayShiftGroup.typeName = "Genesis.HolidayShiftGroup";
HolidayShiftGroup.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata },
    { no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata },
    { no: 4, name: "need_approval", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "holiday_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 *
 * Describes the message consisting of the list of shift groups
 *
 * @generated from message Genesis.HolidaysList
 */
class HolidaysList extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Genesis.Holiday list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysList, a, b);
    }
}
exports.HolidaysList = HolidaysList;
HolidaysList.runtime = protobuf_1.proto3;
HolidaysList.typeName = "Genesis.HolidaysList";
HolidaysList.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: Holiday, repeated: true },
]);
/**
 *
 * Describes the message consisting of the list of holiday shift groups
 *
 * @generated from message Genesis.HolidaysShiftsGroupsList
 */
class HolidaysShiftsGroupsList extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Genesis.HolidayShiftGroup list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysShiftsGroupsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysShiftsGroupsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysShiftsGroupsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysShiftsGroupsList, a, b);
    }
}
exports.HolidaysShiftsGroupsList = HolidaysShiftsGroupsList;
HolidaysShiftsGroupsList.runtime = protobuf_1.proto3;
HolidaysShiftsGroupsList.typeName = "Genesis.HolidaysShiftsGroupsList";
HolidaysShiftsGroupsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: HolidayShiftGroup, repeated: true },
]);
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.HolidaysShiftsGroupsHistoryRequest
 */
class HolidaysShiftsGroupsHistoryRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores the holiday ID
         *
         * @generated from field: int64 holiday_id = 10;
         */
        this.holidayId = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 11;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysShiftsGroupsHistoryRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysShiftsGroupsHistoryRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysShiftsGroupsHistoryRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysShiftsGroupsHistoryRequest, a, b);
    }
}
exports.HolidaysShiftsGroupsHistoryRequest = HolidaysShiftsGroupsHistoryRequest;
HolidaysShiftsGroupsHistoryRequest.runtime = protobuf_1.proto3;
HolidaysShiftsGroupsHistoryRequest.typeName = "Genesis.HolidaysShiftsGroupsHistoryRequest";
HolidaysShiftsGroupsHistoryRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 10, name: "holiday_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.HolidaysServicePaginationReq
 */
class HolidaysServicePaginationReq extends protobuf_1.Message {
    constructor(data) {
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
         * @generated from field: Genesis.HOLIDAY_SORT_KEY sort_key = 5;
         */
        this.sortKey = HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The status of this shift group
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServicePaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServicePaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServicePaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServicePaginationReq, a, b);
    }
}
exports.HolidaysServicePaginationReq = HolidaysServicePaginationReq;
HolidaysServicePaginationReq.runtime = protobuf_1.proto3;
HolidaysServicePaginationReq.typeName = "Genesis.HolidaysServicePaginationReq";
HolidaysServicePaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(HOLIDAY_SORT_KEY) },
    { no: 6, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
]);
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.HolidaysServicePaginationResponse
 */
class HolidaysServicePaginationResponse extends protobuf_1.Message {
    constructor(data) {
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
         * @generated from field: repeated Genesis.Holiday payload = 4;
         */
        this.payload = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServicePaginationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServicePaginationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServicePaginationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServicePaginationResponse, a, b);
    }
}
exports.HolidaysServicePaginationResponse = HolidaysServicePaginationResponse;
HolidaysServicePaginationResponse.runtime = protobuf_1.proto3;
HolidaysServicePaginationResponse.typeName = "Genesis.HolidaysServicePaginationResponse";
HolidaysServicePaginationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "payload", kind: "message", T: Holiday, repeated: true },
]);
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.HolidaysServiceEntityPaginationReq
 */
class HolidaysServiceEntityPaginationReq extends protobuf_1.Message {
    constructor(data) {
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
         * @generated from field: Genesis.HOLIDAY_SORT_KEY sort_key = 5;
         */
        this.sortKey = HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The entity UUID that is to be used to filter records
         *
         * @generated from field: string entity_uuid = 6;
         */
        this.entityUuid = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServiceEntityPaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServiceEntityPaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServiceEntityPaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServiceEntityPaginationReq, a, b);
    }
}
exports.HolidaysServiceEntityPaginationReq = HolidaysServiceEntityPaginationReq;
HolidaysServiceEntityPaginationReq.runtime = protobuf_1.proto3;
HolidaysServiceEntityPaginationReq.typeName = "Genesis.HolidaysServiceEntityPaginationReq";
HolidaysServiceEntityPaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(HOLIDAY_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.HolidaysServiceFilterReq
 */
class HolidaysServiceFilterReq extends protobuf_1.Message {
    constructor(data) {
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
         * @generated from field: Genesis.HOLIDAY_SORT_KEY sort_key = 5;
         */
        this.sortKey = HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED;
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
         * The title of the holiday
         *
         * @generated from field: string title = 20;
         */
        this.title = "";
        /**
         * The description of the holiday
         *
         * @generated from field: string description = 21;
         */
        this.description = "";
        /**
         * The start range of start timestamp
         *
         * @generated from field: int64 start_on_start = 22;
         */
        this.startOnStart = protobuf_1.protoInt64.zero;
        /**
         * The end range of start timestamp
         *
         * @generated from field: int64 start_on_end = 23;
         */
        this.startOnEnd = protobuf_1.protoInt64.zero;
        /**
         * The start range of end timestamp
         *
         * @generated from field: int64 end_on_start = 24;
         */
        this.endOnStart = protobuf_1.protoInt64.zero;
        /**
         * The end range of end timestamp
         *
         * @generated from field: int64 end_on_end = 25;
         */
        this.endOnEnd = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServiceFilterReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServiceFilterReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServiceFilterReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServiceFilterReq, a, b);
    }
}
exports.HolidaysServiceFilterReq = HolidaysServiceFilterReq;
HolidaysServiceFilterReq.runtime = protobuf_1.proto3;
HolidaysServiceFilterReq.typeName = "Genesis.HolidaysServiceFilterReq";
HolidaysServiceFilterReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(HOLIDAY_SORT_KEY) },
    { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "approved_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "approved_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "approved_by_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "approver_role_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "completed_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "completed_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "start_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 23, name: "start_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 24, name: "end_on_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 25, name: "end_on_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.HolidaysServiceSearchAllReq
 */
class HolidaysServiceSearchAllReq extends protobuf_1.Message {
    constructor(data) {
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
         * @generated from field: Genesis.HOLIDAY_SORT_KEY sort_key = 5;
         */
        this.sortKey = HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED;
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
    }
    static fromBinary(bytes, options) {
        return new HolidaysServiceSearchAllReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServiceSearchAllReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServiceSearchAllReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServiceSearchAllReq, a, b);
    }
}
exports.HolidaysServiceSearchAllReq = HolidaysServiceSearchAllReq;
HolidaysServiceSearchAllReq.runtime = protobuf_1.proto3;
HolidaysServiceSearchAllReq.typeName = "Genesis.HolidaysServiceSearchAllReq";
HolidaysServiceSearchAllReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(HOLIDAY_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the request payload to query if the given timestamp is a holiday for the given shift group ID
 *
 * @generated from message Genesis.HolidaysServiceViewHolidaysOnTimestampRequest
 */
class HolidaysServiceViewHolidaysOnTimestampRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores the timestamp
         *
         * @generated from field: int64 timestamp = 10;
         */
        this.timestamp = protobuf_1.protoInt64.zero;
        /**
         * Stores the shift group ID
         *
         * @generated from field: int64 shift_group_id = 11;
         */
        this.shiftGroupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HolidaysServiceViewHolidaysOnTimestampRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HolidaysServiceViewHolidaysOnTimestampRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HolidaysServiceViewHolidaysOnTimestampRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(HolidaysServiceViewHolidaysOnTimestampRequest, a, b);
    }
}
exports.HolidaysServiceViewHolidaysOnTimestampRequest = HolidaysServiceViewHolidaysOnTimestampRequest;
HolidaysServiceViewHolidaysOnTimestampRequest.runtime = protobuf_1.proto3;
HolidaysServiceViewHolidaysOnTimestampRequest.typeName = "Genesis.HolidaysServiceViewHolidaysOnTimestampRequest";
HolidaysServiceViewHolidaysOnTimestampRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 10, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "shift_group_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
