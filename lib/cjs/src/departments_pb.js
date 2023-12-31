"use strict";
// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file departments.proto (package Genesis, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsServiceSearchAllReq = exports.DepartmentsServiceFilterReq = exports.DepartmentsServiceEntityPaginationReq = exports.DepartmentsServicePaginationResponse = exports.DepartmentsServicePaginationReq = exports.DepartmentsList = exports.Department = exports.DepartmentsServiceUpdateRequest = exports.DepartmentsServiceCreateRequest = exports.DEPARTMENT_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.DEPARTMENT_SORT_KEY
 */
var DEPARTMENT_SORT_KEY;
(function (DEPARTMENT_SORT_KEY) {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_ID_UNSPECIFIED"] = 0] = "DEPARTMENT_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_CREATED_AT = 1;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_CREATED_AT"] = 1] = "DEPARTMENT_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_MODIFIED_AT"] = 2] = "DEPARTMENT_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_APPROVED_ON = 3;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_APPROVED_ON"] = 3] = "DEPARTMENT_SORT_KEY_APPROVED_ON";
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_APPROVED_BY = 4;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_APPROVED_BY"] = 4] = "DEPARTMENT_SORT_KEY_APPROVED_BY";
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_APPROVER_ROLE_ID"] = 5] = "DEPARTMENT_SORT_KEY_APPROVER_ROLE_ID";
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_COMPLETED_ON"] = 6] = "DEPARTMENT_SORT_KEY_COMPLETED_ON";
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_NAME = 10;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_NAME"] = 10] = "DEPARTMENT_SORT_KEY_NAME";
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_CODE = 11;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_CODE"] = 11] = "DEPARTMENT_SORT_KEY_CODE";
    /**
     * Fetch ordered results by the head user ID
     *
     * @generated from enum value: DEPARTMENT_SORT_KEY_HEAD_USER_ID = 12;
     */
    DEPARTMENT_SORT_KEY[DEPARTMENT_SORT_KEY["DEPARTMENT_SORT_KEY_HEAD_USER_ID"] = 12] = "DEPARTMENT_SORT_KEY_HEAD_USER_ID";
})(DEPARTMENT_SORT_KEY || (exports.DEPARTMENT_SORT_KEY = DEPARTMENT_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(DEPARTMENT_SORT_KEY)
protobuf_1.proto3.util.setEnumType(DEPARTMENT_SORT_KEY, "Genesis.DEPARTMENT_SORT_KEY", [
    { no: 0, name: "DEPARTMENT_SORT_KEY_ID_UNSPECIFIED" },
    { no: 1, name: "DEPARTMENT_SORT_KEY_CREATED_AT" },
    { no: 2, name: "DEPARTMENT_SORT_KEY_MODIFIED_AT" },
    { no: 3, name: "DEPARTMENT_SORT_KEY_APPROVED_ON" },
    { no: 4, name: "DEPARTMENT_SORT_KEY_APPROVED_BY" },
    { no: 5, name: "DEPARTMENT_SORT_KEY_APPROVER_ROLE_ID" },
    { no: 6, name: "DEPARTMENT_SORT_KEY_COMPLETED_ON" },
    { no: 10, name: "DEPARTMENT_SORT_KEY_NAME" },
    { no: 11, name: "DEPARTMENT_SORT_KEY_CODE" },
    { no: 12, name: "DEPARTMENT_SORT_KEY_HEAD_USER_ID" },
]);
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.DepartmentsServiceCreateRequest
 */
class DepartmentsServiceCreateRequest extends protobuf_1.Message {
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
         * The name of the department
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The code of the department
         *
         * @generated from field: string code = 11;
         */
        this.code = "";
        /**
         * The ID of the user who is the department head of this department
         *
         * @generated from field: int64 head_user_id = 12;
         */
        this.headUserId = protobuf_1.protoInt64.zero;
        /**
         * The description of the department
         *
         * @generated from field: string description = 13;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepartmentsServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepartmentsServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepartmentsServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepartmentsServiceCreateRequest, a, b);
    }
}
exports.DepartmentsServiceCreateRequest = DepartmentsServiceCreateRequest;
DepartmentsServiceCreateRequest.runtime = protobuf_1.proto3;
DepartmentsServiceCreateRequest.typeName = "Genesis.DepartmentsServiceCreateRequest";
DepartmentsServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "head_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.DepartmentsServiceUpdateRequest
 */
class DepartmentsServiceUpdateRequest extends protobuf_1.Message {
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
         * The name of the department
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The code of the department
         *
         * @generated from field: string code = 11;
         */
        this.code = "";
        /**
         * The ID of the user who is the department head of this department
         *
         * @generated from field: int64 head_user_id = 12;
         */
        this.headUserId = protobuf_1.protoInt64.zero;
        /**
         * The description of the department
         *
         * @generated from field: string description = 13;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepartmentsServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepartmentsServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepartmentsServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepartmentsServiceUpdateRequest, a, b);
    }
}
exports.DepartmentsServiceUpdateRequest = DepartmentsServiceUpdateRequest;
DepartmentsServiceUpdateRequest.runtime = protobuf_1.proto3;
DepartmentsServiceUpdateRequest.typeName = "Genesis.DepartmentsServiceUpdateRequest";
DepartmentsServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "notify_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "head_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Department
 */
class Department extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores a globally unique entity UUID. This will be set at the organization level
         *
         * @generated from field: string entity_uuid = 1;
         */
        this.entityUuid = "";
        /**
         * The status of this department
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        /**
         * Stores the logs of every operation performed on this department
         *
         * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
         */
        this.logs = [];
        /**
         * The timestamp of when this department was marked as completed
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
         * The name of the department
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The code of the department
         *
         * @generated from field: string code = 11;
         */
        this.code = "";
        /**
         * The ID of the user who is the department head of this department
         *
         * @generated from field: int64 head_user_id = 12;
         */
        this.headUserId = protobuf_1.protoInt64.zero;
        /**
         * The description of the department
         *
         * @generated from field: string description = 13;
         */
        this.description = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Department().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Department().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Department().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Department, a, b);
    }
}
exports.Department = Department;
Department.runtime = protobuf_1.proto3;
Department.typeName = "Genesis.Department";
Department.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: base_pb_js_1.EmployeeMetadata },
    { no: 3, name: "approval_metadata", kind: "message", T: base_pb_js_1.ApprovalMetadata },
    { no: 4, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 5, name: "logs", kind: "message", T: base_pb_js_1.LogbookLogConciseSLC, repeated: true },
    { no: 6, name: "completed_on", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "vault_folder_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "head_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the message consisting of the list of departments
 *
 * @generated from message Genesis.DepartmentsList
 */
class DepartmentsList extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * List of records
         *
         * @generated from field: repeated Genesis.Department list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepartmentsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepartmentsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepartmentsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepartmentsList, a, b);
    }
}
exports.DepartmentsList = DepartmentsList;
DepartmentsList.runtime = protobuf_1.proto3;
DepartmentsList.typeName = "Genesis.DepartmentsList";
DepartmentsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: Department, repeated: true },
]);
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.DepartmentsServicePaginationReq
 */
class DepartmentsServicePaginationReq extends protobuf_1.Message {
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
         * @generated from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = DEPARTMENT_SORT_KEY.DEPARTMENT_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The status of this department
         *
         * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
         */
        this.status = base_pb_js_1.STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepartmentsServicePaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepartmentsServicePaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepartmentsServicePaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepartmentsServicePaginationReq, a, b);
    }
}
exports.DepartmentsServicePaginationReq = DepartmentsServicePaginationReq;
DepartmentsServicePaginationReq.runtime = protobuf_1.proto3;
DepartmentsServicePaginationReq.typeName = "Genesis.DepartmentsServicePaginationReq";
DepartmentsServicePaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(DEPARTMENT_SORT_KEY) },
    { no: 6, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
]);
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.DepartmentsServicePaginationResponse
 */
class DepartmentsServicePaginationResponse extends protobuf_1.Message {
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
         * @generated from field: repeated Genesis.Department payload = 4;
         */
        this.payload = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepartmentsServicePaginationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepartmentsServicePaginationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepartmentsServicePaginationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepartmentsServicePaginationResponse, a, b);
    }
}
exports.DepartmentsServicePaginationResponse = DepartmentsServicePaginationResponse;
DepartmentsServicePaginationResponse.runtime = protobuf_1.proto3;
DepartmentsServicePaginationResponse.typeName = "Genesis.DepartmentsServicePaginationResponse";
DepartmentsServicePaginationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "payload", kind: "message", T: Department, repeated: true },
]);
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.DepartmentsServiceEntityPaginationReq
 */
class DepartmentsServiceEntityPaginationReq extends protobuf_1.Message {
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
         * @generated from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = DEPARTMENT_SORT_KEY.DEPARTMENT_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The entity UUID that is to be used to filter records
         *
         * @generated from field: string entity_uuid = 6;
         */
        this.entityUuid = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepartmentsServiceEntityPaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepartmentsServiceEntityPaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepartmentsServiceEntityPaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepartmentsServiceEntityPaginationReq, a, b);
    }
}
exports.DepartmentsServiceEntityPaginationReq = DepartmentsServiceEntityPaginationReq;
DepartmentsServiceEntityPaginationReq.runtime = protobuf_1.proto3;
DepartmentsServiceEntityPaginationReq.typeName = "Genesis.DepartmentsServiceEntityPaginationReq";
DepartmentsServiceEntityPaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(DEPARTMENT_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.DepartmentsServiceFilterReq
 */
class DepartmentsServiceFilterReq extends protobuf_1.Message {
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
         * @generated from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = DEPARTMENT_SORT_KEY.DEPARTMENT_SORT_KEY_ID_UNSPECIFIED;
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
         * The status of this department
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
         * The name of the department
         *
         * @generated from field: string name = 20;
         */
        this.name = "";
        /**
         * The code of the department
         *
         * @generated from field: string code = 21;
         */
        this.code = "";
        /**
         * The user ID of the head
         *
         * @generated from field: int64 head_user_id = 22;
         */
        this.headUserId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepartmentsServiceFilterReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepartmentsServiceFilterReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepartmentsServiceFilterReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepartmentsServiceFilterReq, a, b);
    }
}
exports.DepartmentsServiceFilterReq = DepartmentsServiceFilterReq;
DepartmentsServiceFilterReq.runtime = protobuf_1.proto3;
DepartmentsServiceFilterReq.typeName = "Genesis.DepartmentsServiceFilterReq";
DepartmentsServiceFilterReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(DEPARTMENT_SORT_KEY) },
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
    { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "head_user_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.DepartmentsServiceSearchAllReq
 */
class DepartmentsServiceSearchAllReq extends protobuf_1.Message {
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
         * @generated from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;
         */
        this.sortKey = DEPARTMENT_SORT_KEY.DEPARTMENT_SORT_KEY_ID_UNSPECIFIED;
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
        return new DepartmentsServiceSearchAllReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepartmentsServiceSearchAllReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepartmentsServiceSearchAllReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepartmentsServiceSearchAllReq, a, b);
    }
}
exports.DepartmentsServiceSearchAllReq = DepartmentsServiceSearchAllReq;
DepartmentsServiceSearchAllReq.runtime = protobuf_1.proto3;
DepartmentsServiceSearchAllReq.typeName = "Genesis.DepartmentsServiceSearchAllReq";
DepartmentsServiceSearchAllReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(DEPARTMENT_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.STANDARD_LIFECYCLE_STATUS) },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
