"use strict";
// addLeaveAdjustmentRecord
// modifyLeaveAdjustmentRecord
// reorderLeaveAdjustmentRecords
// deleteLeaveAdjustmentRecord
// approveLeaveAdjustmentRecord
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeavesAdjustmentsServiceSearchAllReq = exports.LeavesAdjustmentsServiceFilterReq = exports.LeavesAdjustmentsServiceEntityPaginationReq = exports.LeavesAdjustmentsServicePaginationResponse = exports.LeavesAdjustmentsServicePaginationReq = exports.LeavesAdjustmentsRecordsHistoryRequest = exports.LeavesAdjustmentsRecordsList = exports.LeavesAdjustmentsList = exports.LeaveAdjustmentRecord = exports.LeavesAdjustmentsServiceRecordUpdateRequest = exports.LeavesAdjustmentsServiceRecordCreateRequest = exports.LeaveAdjustment = exports.LeavesAdjustmentsServiceUpdateRequest = exports.LeavesAdjustmentsServiceCreateRequest = exports.LEAVE_ADJUSTMENT_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.LEAVE_ADJUSTMENT_SORT_KEY
 */
var LEAVE_ADJUSTMENT_SORT_KEY;
(function (LEAVE_ADJUSTMENT_SORT_KEY) {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED"] = 0] = "LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT = 1;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT"] = 1] = "LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT"] = 2] = "LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON = 3;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON"] = 3] = "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON";
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY = 4;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY"] = 4] = "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY";
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID"] = 5] = "LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID";
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON"] = 6] = "LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON";
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID = 10;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID"] = 10] = "LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID";
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER"] = 11] = "LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER";
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: LEAVE_ADJUSTMENT_SORT_KEY_USER_ID = 12;
     */
    LEAVE_ADJUSTMENT_SORT_KEY[LEAVE_ADJUSTMENT_SORT_KEY["LEAVE_ADJUSTMENT_SORT_KEY_USER_ID"] = 12] = "LEAVE_ADJUSTMENT_SORT_KEY_USER_ID";
})(LEAVE_ADJUSTMENT_SORT_KEY || (exports.LEAVE_ADJUSTMENT_SORT_KEY = LEAVE_ADJUSTMENT_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY)
protobuf_1.proto3.util.setEnumType(LEAVE_ADJUSTMENT_SORT_KEY, "Genesis.LEAVE_ADJUSTMENT_SORT_KEY", [
    { no: 0, name: "LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED" },
    { no: 1, name: "LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT" },
    { no: 2, name: "LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT" },
    { no: 3, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON" },
    { no: 4, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY" },
    { no: 5, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID" },
    { no: 6, name: "LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON" },
    { no: 10, name: "LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID" },
    { no: 11, name: "LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER" },
    { no: 12, name: "LEAVE_ADJUSTMENT_SORT_KEY_USER_ID" },
]);
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceCreateRequest
 */
class LeavesAdjustmentsServiceCreateRequest extends protobuf_1.Message {
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
     * The reference ID of the leave adjustment
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId = "";
    /**
     * The ID of the user for whom this adjustment needs to be made
     *
     * @generated from field: int64 user_id = 11;
     */
    userId = protobuf_1.protoInt64.zero;
    /**
     * The description of the leave adjustment
     *
     * @generated from field: string description = 12;
     */
    description = "";
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServiceCreateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 11, name: "user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceCreateRequest, a, b);
    }
}
exports.LeavesAdjustmentsServiceCreateRequest = LeavesAdjustmentsServiceCreateRequest;
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceUpdateRequest
 */
class LeavesAdjustmentsServiceUpdateRequest extends protobuf_1.Message {
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
     * The reference ID of the leave adjustment
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId = "";
    /**
     * The description of the leave adjustment
     *
     * @generated from field: string description = 12;
     */
    description = "";
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServiceUpdateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceUpdateRequest, a, b);
    }
}
exports.LeavesAdjustmentsServiceUpdateRequest = LeavesAdjustmentsServiceUpdateRequest;
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.LeaveAdjustment
 */
class LeaveAdjustment extends protobuf_1.Message {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid = "";
    /**
     * Stores the metadata of this record
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
     * The status of this record
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
    /**
     * Stores the logs of every operation performed on this record
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs = [];
    /**
     * The timestamp of when this record was marked as completed
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
     * The reference_id of the leave adjustment
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId = "";
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber = "";
    /**
     * The ID of the user for whom this adjustment needs to be made
     *
     * @generated from field: int64 user_id = 12;
     */
    userId = protobuf_1.protoInt64.zero;
    /**
     * The description of the leave adjustment
     *
     * @generated from field: string description = 13;
     */
    description = "";
    /**
     * The list of associated leave adjustment records
     *
     * @generated from field: repeated Genesis.LeaveAdjustmentRecord list = 20;
     */
    list = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeaveAdjustment";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata },
        { no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata },
        { no: 4, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
        { no: 5, name: "logs", kind: "message", T: base_pb_js_1.LogbookLogConciseSLC, repeated: true },
        { no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 11, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 12, name: "user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 13, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 20, name: "list", kind: "message", T: LeaveAdjustmentRecord, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new LeaveAdjustment().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeaveAdjustment().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeaveAdjustment().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeaveAdjustment, a, b);
    }
}
exports.LeaveAdjustment = LeaveAdjustment;
/**
 *
 * Describes the parameters required to add a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceRecordCreateRequest
 */
class LeavesAdjustmentsServiceRecordCreateRequest extends protobuf_1.Message {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment = "";
    /**
     * Stores the leave adjustment ID
     *
     * @generated from field: int64 leave_adjustment_id = 10;
     */
    leaveAdjustmentId = protobuf_1.protoInt64.zero;
    /**
     * Stores the leave type ID
     *
     * @generated from field: int64 leave_type_id = 11;
     */
    leaveTypeId = protobuf_1.protoInt64.zero;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 12;
     */
    uomId = protobuf_1.protoInt64.zero;
    /**
     * Stores the quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServiceRecordCreateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 10, name: "leave_adjustment_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 11, name: "leave_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 12, name: "uom_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 13, name: "quantity", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceRecordCreateRequest, a, b);
    }
}
exports.LeavesAdjustmentsServiceRecordCreateRequest = LeavesAdjustmentsServiceRecordCreateRequest;
/**
 *
 * Describes the parameters required to update a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceRecordUpdateRequest
 */
class LeavesAdjustmentsServiceRecordUpdateRequest extends protobuf_1.Message {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment = "";
    /**
     * The ID of the record
     *
     * @generated from field: int64 id = 2;
     */
    id = protobuf_1.protoInt64.zero;
    /**
     * Stores the leave adjustment ID
     *
     * @generated from field: int64 leave_adjustment_id = 10;
     */
    leaveAdjustmentId = protobuf_1.protoInt64.zero;
    /**
     * Stores the leave type ID
     *
     * @generated from field: int64 leave_type_id = 11;
     */
    leaveTypeId = protobuf_1.protoInt64.zero;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 12;
     */
    uomId = protobuf_1.protoInt64.zero;
    /**
     * Stores the quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServiceRecordUpdateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 10, name: "leave_adjustment_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 11, name: "leave_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 12, name: "uom_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 13, name: "quantity", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceRecordUpdateRequest, a, b);
    }
}
exports.LeavesAdjustmentsServiceRecordUpdateRequest = LeavesAdjustmentsServiceRecordUpdateRequest;
/**
 *
 * Describes the parameters that constitute a record associated to a record
 *
 * @generated from message Genesis.LeaveAdjustmentRecord
 */
class LeaveAdjustmentRecord extends protobuf_1.Message {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid = "";
    /**
     * Stores the metadata of this record
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
     * Denotes if this record requires approval (or has been approved)
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval = false;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment = "";
    /**
     * Stores the leave adjustment ID
     *
     * @generated from field: int64 leave_adjustment_id = 10;
     */
    leaveAdjustmentId = protobuf_1.protoInt64.zero;
    /**
     * Stores the leave type ID
     *
     * @generated from field: int64 leave_type_id = 11;
     */
    leaveTypeId = protobuf_1.protoInt64.zero;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: int64 uom_id = 12;
     */
    uomId = protobuf_1.protoInt64.zero;
    /**
     * Stores the quantity of leaves (in cents)
     *
     * @generated from field: int64 quantity = 13;
     */
    quantity = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeaveAdjustmentRecord";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata },
        { no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata },
        { no: 4, name: "need_approval", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 5, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 10, name: "leave_adjustment_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 11, name: "leave_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 12, name: "uom_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 13, name: "quantity", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeaveAdjustmentRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeaveAdjustmentRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeaveAdjustmentRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeaveAdjustmentRecord, a, b);
    }
}
exports.LeaveAdjustmentRecord = LeaveAdjustmentRecord;
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.LeavesAdjustmentsList
 */
class LeavesAdjustmentsList extends protobuf_1.Message {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.LeaveAdjustment list = 1;
     */
    list = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsList";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "list", kind: "message", T: LeaveAdjustment, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsList, a, b);
    }
}
exports.LeavesAdjustmentsList = LeavesAdjustmentsList;
/**
 *
 * Describes the message consisting of the list of leave adjustment records
 *
 * @generated from message Genesis.LeavesAdjustmentsRecordsList
 */
class LeavesAdjustmentsRecordsList extends protobuf_1.Message {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.LeaveAdjustmentRecord list = 1;
     */
    list = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsRecordsList";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "list", kind: "message", T: LeaveAdjustmentRecord, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsRecordsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsRecordsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsRecordsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsRecordsList, a, b);
    }
}
exports.LeavesAdjustmentsRecordsList = LeavesAdjustmentsRecordsList;
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.LeavesAdjustmentsRecordsHistoryRequest
 */
class LeavesAdjustmentsRecordsHistoryRequest extends protobuf_1.Message {
    /**
     * Stores the leave adjustment ID
     *
     * @generated from field: int64 leave_adjustment_id = 10;
     */
    leaveAdjustmentId = protobuf_1.protoInt64.zero;
    /**
     * Stores the leave type ID
     *
     * @generated from field: int64 leave_type_id = 11;
     */
    leaveTypeId = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsRecordsHistoryRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 10, name: "leave_adjustment_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 11, name: "leave_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsRecordsHistoryRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsRecordsHistoryRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsRecordsHistoryRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsRecordsHistoryRequest, a, b);
    }
}
exports.LeavesAdjustmentsRecordsHistoryRequest = LeavesAdjustmentsRecordsHistoryRequest;
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.LeavesAdjustmentsServicePaginationReq
 */
class LeavesAdjustmentsServicePaginationReq extends protobuf_1.Message {
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
     * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
     */
    sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The status of this record
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServicePaginationReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) },
        { no: 6, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServicePaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServicePaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServicePaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServicePaginationReq, a, b);
    }
}
exports.LeavesAdjustmentsServicePaginationReq = LeavesAdjustmentsServicePaginationReq;
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.LeavesAdjustmentsServicePaginationResponse
 */
class LeavesAdjustmentsServicePaginationResponse extends protobuf_1.Message {
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
     * @generated from field: repeated Genesis.LeaveAdjustment payload = 4;
     */
    payload = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServicePaginationResponse";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 4, name: "payload", kind: "message", T: LeaveAdjustment, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServicePaginationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServicePaginationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServicePaginationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServicePaginationResponse, a, b);
    }
}
exports.LeavesAdjustmentsServicePaginationResponse = LeavesAdjustmentsServicePaginationResponse;
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceEntityPaginationReq
 */
class LeavesAdjustmentsServiceEntityPaginationReq extends protobuf_1.Message {
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
     * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
     */
    sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid = "";
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServiceEntityPaginationReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) },
        { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceEntityPaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceEntityPaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceEntityPaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceEntityPaginationReq, a, b);
    }
}
exports.LeavesAdjustmentsServiceEntityPaginationReq = LeavesAdjustmentsServiceEntityPaginationReq;
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceFilterReq
 */
class LeavesAdjustmentsServiceFilterReq extends protobuf_1.Message {
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
     * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
     */
    sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
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
     * The status of this record
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
     * The reference_id of the leave adjustment
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId = "";
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber = "";
    /**
     * The ID of the user for whom this adjustment needs to be made
     *
     * @generated from field: int64 user_id = 22;
     */
    userId = protobuf_1.protoInt64.zero;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServiceFilterReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) },
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
        { no: 20, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 21, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 22, name: "user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceFilterReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceFilterReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceFilterReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceFilterReq, a, b);
    }
}
exports.LeavesAdjustmentsServiceFilterReq = LeavesAdjustmentsServiceFilterReq;
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceSearchAllReq
 */
class LeavesAdjustmentsServiceSearchAllReq extends protobuf_1.Message {
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
     * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
     */
    sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
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
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "Genesis.LeavesAdjustmentsServiceSearchAllReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) },
        { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
        { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new LeavesAdjustmentsServiceSearchAllReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LeavesAdjustmentsServiceSearchAllReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LeavesAdjustmentsServiceSearchAllReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceSearchAllReq, a, b);
    }
}
exports.LeavesAdjustmentsServiceSearchAllReq = LeavesAdjustmentsServiceSearchAllReq;
