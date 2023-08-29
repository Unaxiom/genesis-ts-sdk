"use strict";
// addLeaveAdjustmentRecord
// modifyLeaveAdjustmentRecord
// reorderLeaveAdjustmentRecords
// deleteLeaveAdjustmentRecord
// approveLeaveAdjustmentRecord
Object.defineProperty(exports, "__esModule", ***REMOVED*** value: true ***REMOVED***);
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
(function (LEAVE_ADJUSTMENT_SORT_KEY) ***REMOVED***
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
***REMOVED***)(LEAVE_ADJUSTMENT_SORT_KEY || (exports.LEAVE_ADJUSTMENT_SORT_KEY = LEAVE_ADJUSTMENT_SORT_KEY = ***REMOVED******REMOVED***));
// Retrieve enum metadata with: proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY)
protobuf_1.proto3.util.setEnumType(LEAVE_ADJUSTMENT_SORT_KEY, "Genesis.LEAVE_ADJUSTMENT_SORT_KEY", [
    ***REMOVED*** no: 0, name: "LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED" ***REMOVED***,
    ***REMOVED*** no: 1, name: "LEAVE_ADJUSTMENT_SORT_KEY_CREATED_AT" ***REMOVED***,
    ***REMOVED*** no: 2, name: "LEAVE_ADJUSTMENT_SORT_KEY_MODIFIED_AT" ***REMOVED***,
    ***REMOVED*** no: 3, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_ON" ***REMOVED***,
    ***REMOVED*** no: 4, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVED_BY" ***REMOVED***,
    ***REMOVED*** no: 5, name: "LEAVE_ADJUSTMENT_SORT_KEY_APPROVER_ROLE_ID" ***REMOVED***,
    ***REMOVED*** no: 6, name: "LEAVE_ADJUSTMENT_SORT_KEY_COMPLETED_ON" ***REMOVED***,
    ***REMOVED*** no: 10, name: "LEAVE_ADJUSTMENT_SORT_KEY_REFERENCE_ID" ***REMOVED***,
    ***REMOVED*** no: 11, name: "LEAVE_ADJUSTMENT_SORT_KEY_FINAL_REF_NUMBER" ***REMOVED***,
    ***REMOVED*** no: 12, name: "LEAVE_ADJUSTMENT_SORT_KEY_USER_ID" ***REMOVED***,
]);
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceCreateRequest
 */
class LeavesAdjustmentsServiceCreateRequest extends protobuf_1.Message ***REMOVED***
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
         * The reference ID of the leave adjustment
         *
         * @generated from field: string reference_id = 10;
         */
        this.referenceId = "";
        /**
         * The ID of the user for whom this adjustment needs to be made
         *
         * @generated from field: int64 user_id = 11;
         */
        this.userId = protobuf_1.protoInt64.zero;
        /**
         * The description of the leave adjustment
         *
         * @generated from field: string description = 12;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsServiceCreateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServiceCreateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServiceCreateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceCreateRequest, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServiceCreateRequest = LeavesAdjustmentsServiceCreateRequest;
LeavesAdjustmentsServiceCreateRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceCreateRequest.typeName = "Genesis.LeavesAdjustmentsServiceCreateRequest";
LeavesAdjustmentsServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
]);
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceUpdateRequest
 */
class LeavesAdjustmentsServiceUpdateRequest extends protobuf_1.Message ***REMOVED***
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
         * The reference ID of the leave adjustment
         *
         * @generated from field: string reference_id = 10;
         */
        this.referenceId = "";
        /**
         * The description of the leave adjustment
         *
         * @generated from field: string description = 12;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsServiceUpdateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServiceUpdateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServiceUpdateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceUpdateRequest, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServiceUpdateRequest = LeavesAdjustmentsServiceUpdateRequest;
LeavesAdjustmentsServiceUpdateRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceUpdateRequest.typeName = "Genesis.LeavesAdjustmentsServiceUpdateRequest";
LeavesAdjustmentsServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
]);
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.LeaveAdjustment
 */
class LeaveAdjustment extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores a globally unique entity UUID. This will be set at the organization level
         *
         * @generated from field: string entity_uuid = 1;
         */
        this.entityUuid = "";
        /**
         * The status of this record
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        /**
         * Stores the logs of every operation performed on this record
         *
         * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
         */
        this.logs = [];
        /**
         * The timestamp of when this record was marked as completed
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
         * The reference_id of the leave adjustment
         *
         * @generated from field: string reference_id = 10;
         */
        this.referenceId = "";
        /**
         * The unique reference number that has been automatically generated
         *
         * @generated from field: string final_ref_number = 11;
         */
        this.finalRefNumber = "";
        /**
         * The ID of the user for whom this adjustment needs to be made
         *
         * @generated from field: int64 user_id = 12;
         */
        this.userId = protobuf_1.protoInt64.zero;
        /**
         * The description of the leave adjustment
         *
         * @generated from field: string description = 13;
         */
        this.description = "";
        /**
         * The list of associated leave adjustment records
         *
         * @generated from field: repeated Genesis.LeaveAdjustmentRecord list = 20;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeaveAdjustment().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeaveAdjustment().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeaveAdjustment().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeaveAdjustment, a, b);
***REMOVED***
***REMOVED***
exports.LeaveAdjustment = LeaveAdjustment;
LeaveAdjustment.runtime = protobuf_1.proto3;
LeaveAdjustment.typeName = "Genesis.LeaveAdjustment";
LeaveAdjustment.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata ***REMOVED***,
    ***REMOVED*** no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata ***REMOVED***,
    ***REMOVED*** no: 4, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 5, name: "logs", kind: "message", T: base_pb_js_1.LogbookLogConciseSLC, repeated: true ***REMOVED***,
    ***REMOVED*** no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 20, name: "list", kind: "message", T: LeaveAdjustmentRecord, repeated: true ***REMOVED***,
]);
/**
 *
 * Describes the parameters required to add a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceRecordCreateRequest
 */
class LeavesAdjustmentsServiceRecordCreateRequest extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * Stores the leave adjustment ID
         *
         * @generated from field: int64 leave_adjustment_id = 10;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave type ID
         *
         * @generated from field: int64 leave_type_id = 11;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        /**
         * Stores the unit of material ID
         *
         * @generated from field: int64 uom_id = 12;
         */
        this.uomId = protobuf_1.protoInt64.zero;
        /**
         * Stores the quantity of leaves (in cents)
         *
         * @generated from field: int64 quantity = 13;
         */
        this.quantity = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServiceRecordCreateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceRecordCreateRequest, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServiceRecordCreateRequest = LeavesAdjustmentsServiceRecordCreateRequest;
LeavesAdjustmentsServiceRecordCreateRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceRecordCreateRequest.typeName = "Genesis.LeavesAdjustmentsServiceRecordCreateRequest";
LeavesAdjustmentsServiceRecordCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "leave_adjustment_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "leave_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "uom_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "quantity", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes the parameters required to update a record
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceRecordUpdateRequest
 */
class LeavesAdjustmentsServiceRecordUpdateRequest extends protobuf_1.Message ***REMOVED***
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
         * Stores the leave adjustment ID
         *
         * @generated from field: int64 leave_adjustment_id = 10;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave type ID
         *
         * @generated from field: int64 leave_type_id = 11;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        /**
         * Stores the unit of material ID
         *
         * @generated from field: int64 uom_id = 12;
         */
        this.uomId = protobuf_1.protoInt64.zero;
        /**
         * Stores the quantity of leaves (in cents)
         *
         * @generated from field: int64 quantity = 13;
         */
        this.quantity = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServiceRecordUpdateRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceRecordUpdateRequest, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServiceRecordUpdateRequest = LeavesAdjustmentsServiceRecordUpdateRequest;
LeavesAdjustmentsServiceRecordUpdateRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceRecordUpdateRequest.typeName = "Genesis.LeavesAdjustmentsServiceRecordUpdateRequest";
LeavesAdjustmentsServiceRecordUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "leave_adjustment_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "leave_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "uom_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "quantity", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes the parameters that constitute a record associated to a record
 *
 * @generated from message Genesis.LeaveAdjustmentRecord
 */
class LeaveAdjustmentRecord extends protobuf_1.Message ***REMOVED***
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
         * Stores the leave adjustment ID
         *
         * @generated from field: int64 leave_adjustment_id = 10;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave type ID
         *
         * @generated from field: int64 leave_type_id = 11;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        /**
         * Stores the unit of material ID
         *
         * @generated from field: int64 uom_id = 12;
         */
        this.uomId = protobuf_1.protoInt64.zero;
        /**
         * Stores the quantity of leaves (in cents)
         *
         * @generated from field: int64 quantity = 13;
         */
        this.quantity = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeaveAdjustmentRecord().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeaveAdjustmentRecord().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeaveAdjustmentRecord().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeaveAdjustmentRecord, a, b);
***REMOVED***
***REMOVED***
exports.LeaveAdjustmentRecord = LeaveAdjustmentRecord;
LeaveAdjustmentRecord.runtime = protobuf_1.proto3;
LeaveAdjustmentRecord.typeName = "Genesis.LeaveAdjustmentRecord";
LeaveAdjustmentRecord.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata ***REMOVED***,
    ***REMOVED*** no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata ***REMOVED***,
    ***REMOVED*** no: 4, name: "need_approval", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 5, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "leave_adjustment_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "leave_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 12, name: "uom_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 13, name: "quantity", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.LeavesAdjustmentsList
 */
class LeavesAdjustmentsList extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Genesis.LeaveAdjustment list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsList().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsList().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsList().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsList, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsList = LeavesAdjustmentsList;
LeavesAdjustmentsList.runtime = protobuf_1.proto3;
LeavesAdjustmentsList.typeName = "Genesis.LeavesAdjustmentsList";
LeavesAdjustmentsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "list", kind: "message", T: LeaveAdjustment, repeated: true ***REMOVED***,
]);
/**
 *
 * Describes the message consisting of the list of leave adjustment records
 *
 * @generated from message Genesis.LeavesAdjustmentsRecordsList
 */
class LeavesAdjustmentsRecordsList extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Genesis.LeaveAdjustmentRecord list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsRecordsList().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsRecordsList().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsRecordsList().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsRecordsList, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsRecordsList = LeavesAdjustmentsRecordsList;
LeavesAdjustmentsRecordsList.runtime = protobuf_1.proto3;
LeavesAdjustmentsRecordsList.typeName = "Genesis.LeavesAdjustmentsRecordsList";
LeavesAdjustmentsRecordsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "list", kind: "message", T: LeaveAdjustmentRecord, repeated: true ***REMOVED***,
]);
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.LeavesAdjustmentsRecordsHistoryRequest
 */
class LeavesAdjustmentsRecordsHistoryRequest extends protobuf_1.Message ***REMOVED***
    constructor(data) ***REMOVED***
        super();
        /**
         * Stores the leave adjustment ID
         *
         * @generated from field: int64 leave_adjustment_id = 10;
         */
        this.leaveAdjustmentId = protobuf_1.protoInt64.zero;
        /**
         * Stores the leave type ID
         *
         * @generated from field: int64 leave_type_id = 11;
         */
        this.leaveTypeId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsRecordsHistoryRequest().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsRecordsHistoryRequest().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsRecordsHistoryRequest().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsRecordsHistoryRequest, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsRecordsHistoryRequest = LeavesAdjustmentsRecordsHistoryRequest;
LeavesAdjustmentsRecordsHistoryRequest.runtime = protobuf_1.proto3;
LeavesAdjustmentsRecordsHistoryRequest.typeName = "Genesis.LeavesAdjustmentsRecordsHistoryRequest";
LeavesAdjustmentsRecordsHistoryRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 10, name: "leave_adjustment_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 11, name: "leave_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.LeavesAdjustmentsServicePaginationReq
 */
class LeavesAdjustmentsServicePaginationReq extends protobuf_1.Message ***REMOVED***
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
         * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The status of this record
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsServicePaginationReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServicePaginationReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServicePaginationReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServicePaginationReq, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServicePaginationReq = LeavesAdjustmentsServicePaginationReq;
LeavesAdjustmentsServicePaginationReq.runtime = protobuf_1.proto3;
LeavesAdjustmentsServicePaginationReq.typeName = "Genesis.LeavesAdjustmentsServicePaginationReq";
LeavesAdjustmentsServicePaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
]);
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.LeavesAdjustmentsServicePaginationResponse
 */
class LeavesAdjustmentsServicePaginationResponse extends protobuf_1.Message ***REMOVED***
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
         * @generated from field: repeated Genesis.LeaveAdjustment payload = 4;
         */
        this.payload = [];
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsServicePaginationResponse().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServicePaginationResponse().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServicePaginationResponse().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServicePaginationResponse, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServicePaginationResponse = LeavesAdjustmentsServicePaginationResponse;
LeavesAdjustmentsServicePaginationResponse.runtime = protobuf_1.proto3;
LeavesAdjustmentsServicePaginationResponse.typeName = "Genesis.LeavesAdjustmentsServicePaginationResponse";
LeavesAdjustmentsServicePaginationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "payload", kind: "message", T: LeaveAdjustment, repeated: true ***REMOVED***,
]);
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceEntityPaginationReq
 */
class LeavesAdjustmentsServiceEntityPaginationReq extends protobuf_1.Message ***REMOVED***
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
         * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The entity UUID that is to be used to filter records
         *
         * @generated from field: string entity_uuid = 6;
         */
        this.entityUuid = "";
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsServiceEntityPaginationReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServiceEntityPaginationReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServiceEntityPaginationReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceEntityPaginationReq, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServiceEntityPaginationReq = LeavesAdjustmentsServiceEntityPaginationReq;
LeavesAdjustmentsServiceEntityPaginationReq.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceEntityPaginationReq.typeName = "Genesis.LeavesAdjustmentsServiceEntityPaginationReq";
LeavesAdjustmentsServiceEntityPaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
]);
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceFilterReq
 */
class LeavesAdjustmentsServiceFilterReq extends protobuf_1.Message ***REMOVED***
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
         * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
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
         * The status of this record
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
         * The reference_id of the leave adjustment
         *
         * @generated from field: string reference_id = 20;
         */
        this.referenceId = "";
        /**
         * The unique reference number that has been automatically generated
         *
         * @generated from field: string final_ref_number = 21;
         */
        this.finalRefNumber = "";
        /**
         * The ID of the user for whom this adjustment needs to be made
         *
         * @generated from field: int64 user_id = 22;
         */
        this.userId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
***REMOVED***
    static fromBinary(bytes, options) ***REMOVED***
        return new LeavesAdjustmentsServiceFilterReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServiceFilterReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServiceFilterReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceFilterReq, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServiceFilterReq = LeavesAdjustmentsServiceFilterReq;
LeavesAdjustmentsServiceFilterReq.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceFilterReq.typeName = "Genesis.LeavesAdjustmentsServiceFilterReq";
LeavesAdjustmentsServiceFilterReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) ***REMOVED***,
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
    ***REMOVED*** no: 20, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 21, name: "final_ref_number", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 22, name: "user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
]);
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.LeavesAdjustmentsServiceSearchAllReq
 */
class LeavesAdjustmentsServiceSearchAllReq extends protobuf_1.Message ***REMOVED***
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
         * @generated from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED;
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
        return new LeavesAdjustmentsServiceSearchAllReq().fromBinary(bytes, options);
***REMOVED***
    static fromJson(jsonValue, options) ***REMOVED***
        return new LeavesAdjustmentsServiceSearchAllReq().fromJson(jsonValue, options);
***REMOVED***
    static fromJsonString(jsonString, options) ***REMOVED***
        return new LeavesAdjustmentsServiceSearchAllReq().fromJsonString(jsonString, options);
***REMOVED***
    static equals(a, b) ***REMOVED***
        return protobuf_1.proto3.util.equals(LeavesAdjustmentsServiceSearchAllReq, a, b);
***REMOVED***
***REMOVED***
exports.LeavesAdjustmentsServiceSearchAllReq = LeavesAdjustmentsServiceSearchAllReq;
LeavesAdjustmentsServiceSearchAllReq.runtime = protobuf_1.proto3;
LeavesAdjustmentsServiceSearchAllReq.typeName = "Genesis.LeavesAdjustmentsServiceSearchAllReq";
LeavesAdjustmentsServiceSearchAllReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    ***REMOVED*** no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ ***REMOVED***,
    ***REMOVED*** no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ ***REMOVED***,
    ***REMOVED*** no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) ***REMOVED***,
    ***REMOVED*** no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(LEAVE_ADJUSTMENT_SORT_KEY) ***REMOVED***,
    ***REMOVED*** no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
    ***REMOVED*** no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) ***REMOVED***,
    ***REMOVED*** no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ ***REMOVED***,
]);
