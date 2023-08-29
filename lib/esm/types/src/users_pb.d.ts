import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_pb.js";
import { ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.USER_SORT_KEY
 */
export declare enum USER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: USER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    USER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: USER_SORT_KEY_CREATED_AT = 1;
     */
    USER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: USER_SORT_KEY_MODIFIED_AT = 2;
     */
    USER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: USER_SORT_KEY_APPROVED_ON = 3;
     */
    USER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: USER_SORT_KEY_APPROVED_BY = 4;
     */
    USER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: USER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    USER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the username
     *
     * @generated from enum value: USER_SORT_KEY_USERNAME = 10;
     */
    USER_SORT_KEY_USERNAME = 10,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: USER_SORT_KEY_NAME = 11;
     */
    USER_SORT_KEY_NAME = 11,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: USER_SORT_KEY_CODE = 12;
     */
    USER_SORT_KEY_CODE = 12,
    /**
     * Fetch ordered results by the email address
     *
     * @generated from enum value: USER_SORT_KEY_EMAIL = 13;
     */
    USER_SORT_KEY_EMAIL = 13,
    /**
     * Fetch ordered results by the phone number
     *
     * @generated from enum value: USER_SORT_KEY_PHONE = 14;
     */
    USER_SORT_KEY_PHONE = 14
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.UsersServiceCreateRequest
 */
export declare class UsersServiceCreateRequest extends Message<UsersServiceCreateRequest> {
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
     * The username of the user
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     * The unique employee code by which the user is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * The plain text password using which the user can login
     *
     * @generated from field: string plain_text_password = 13;
     */
    plainTextPassword: string;
    /**
     * The associated role ID
     *
     * @generated from field: int64 role_id = 14;
     */
    roleId: bigint;
    /**
     * The associated mobile role ID
     *
     * @generated from field: int64 mobile_role_id = 15;
     */
    mobileRoleId: bigint;
    /**
     * The primary email of the user
     *
     * @generated from field: string email = 16;
     */
    email: string;
    /**
     * The optional work email of the user
     *
     * @generated from field: string work_email = 17;
     */
    workEmail: string;
    /**
     * The primary contact number of the user
     *
     * @generated from field: string phone = 18;
     */
    phone: string;
    /**
     * The birthday of the user
     *
     * @generated from field: string birthday = 30;
     */
    birthday: string;
    /**
     * The joining date of the user
     *
     * @generated from field: string joining_date = 31;
     */
    joiningDate: string;
    /**
     * The address of the user
     *
     * @generated from field: string address = 32;
     */
    address: string;
    /**
     * The city of residence
     *
     * @generated from field: string city = 33;
     */
    city: string;
    /**
     * The state of residence
     *
     * @generated from field: string state = 34;
     */
    state: string;
    /**
     * The country of residence
     *
     * @generated from field: string country = 35;
     */
    country: string;
    /**
     * THe PIN Code of residence
     *
     * @generated from field: string pin_code = 36;
     */
    pinCode: string;
    /**
     * THe Blood Group of the user
     *
     * @generated from field: string blood_group = 37;
     */
    bloodGroup: string;
    /**
     * The associated shift group ID
     *
     * @generated from field: int64 shift_group_id = 50;
     */
    shiftGroupId: bigint;
    /**
     * The associated unit of material of the user's attendance record
     *
     * @generated from field: int64 attendance_uom_id = 51;
     */
    attendanceUomId: bigint;
    /**
     * The associated department (can be 0 to allow seamless transition)
     *
     * @generated from field: int64 department_id = 52;
     */
    departmentId: bigint;
    /**
     * The associated payroll group ID of the user
     *
     * @generated from field: int64 payroll_group_id = 53;
     */
    payrollGroupId: bigint;
    /**
     * The associated tax group ID using which the user's payroll needs to be calculated
     *
     * @generated from field: int64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId: bigint;
    /**
     * The associated currency ID of the user's payroll
     *
     * @generated from field: int64 payroll_currency_id = 55;
     */
    payrollCurrencyId: bigint;
    /**
     * The basic pay amount of the user (in cents)
     *
     * @generated from field: int64 basic_pay_amount = 56;
     */
    basicPayAmount: bigint;
    /**
     * The associated unit of material for storing the basic pay amount
     *
     * @generated from field: int64 basic_pay_uom_id = 57;
     */
    basicPayUomId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 70;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<UsersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceCreateRequest;
    static equals(a: UsersServiceCreateRequest | PlainMessage<UsersServiceCreateRequest> | undefined, b: UsersServiceCreateRequest | PlainMessage<UsersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.UsersServiceUpdateRequest
 */
export declare class UsersServiceUpdateRequest extends Message<UsersServiceUpdateRequest> {
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
     * The unique employee code by which the user is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * The associated role ID
     *
     * @generated from field: int64 role_id = 14;
     */
    roleId: bigint;
    /**
     * The associated mobile role ID
     *
     * @generated from field: int64 mobile_role_id = 15;
     */
    mobileRoleId: bigint;
    /**
     * The primary email of the user
     *
     * @generated from field: string email = 16;
     */
    email: string;
    /**
     * The optional work email of the user
     *
     * @generated from field: string work_email = 17;
     */
    workEmail: string;
    /**
     * The primary contact number of the user
     *
     * @generated from field: string phone = 18;
     */
    phone: string;
    /**
     * The birthday of the user
     *
     * @generated from field: string birthday = 30;
     */
    birthday: string;
    /**
     * The joining date of the user
     *
     * @generated from field: string joining_date = 31;
     */
    joiningDate: string;
    /**
     * The address of the user
     *
     * @generated from field: string address = 32;
     */
    address: string;
    /**
     * The city of residence
     *
     * @generated from field: string city = 33;
     */
    city: string;
    /**
     * The state of residence
     *
     * @generated from field: string state = 34;
     */
    state: string;
    /**
     * The country of residence
     *
     * @generated from field: string country = 35;
     */
    country: string;
    /**
     * THe PIN Code of residence
     *
     * @generated from field: string pin_code = 36;
     */
    pinCode: string;
    /**
     * THe Blood Group of the user
     *
     * @generated from field: string blood_group = 37;
     */
    bloodGroup: string;
    /**
     * The associated shift group ID
     *
     * @generated from field: int64 shift_group_id = 50;
     */
    shiftGroupId: bigint;
    /**
     * The associated unit of material of the user's attendance record
     *
     * @generated from field: int64 attendance_uom_id = 51;
     */
    attendanceUomId: bigint;
    /**
     * The associated department (can be 0 to allow seamless transition)
     *
     * @generated from field: int64 department_id = 52;
     */
    departmentId: bigint;
    /**
     * The associated payroll group ID of the user
     *
     * @generated from field: int64 payroll_group_id = 53;
     */
    payrollGroupId: bigint;
    /**
     * The associated tax group ID using which the user's payroll needs to be calculated
     *
     * @generated from field: int64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId: bigint;
    /**
     * The associated currency ID of the user's payroll
     *
     * @generated from field: int64 payroll_currency_id = 55;
     */
    payrollCurrencyId: bigint;
    /**
     * The basic pay amount of the user (in cents)
     *
     * @generated from field: int64 basic_pay_amount = 56;
     */
    basicPayAmount: bigint;
    /**
     * The associated unit of material for storing the basic pay amount
     *
     * @generated from field: int64 basic_pay_uom_id = 57;
     */
    basicPayUomId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 70;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<UsersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceUpdateRequest;
    static equals(a: UsersServiceUpdateRequest | PlainMessage<UsersServiceUpdateRequest> | undefined, b: UsersServiceUpdateRequest | PlainMessage<UsersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.User
 */
export declare class User extends Message<User> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this user
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
     * The status of this user
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this user
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The username of the user
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     * The unique employee code by which the user is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * The associated role ID
     *
     * @generated from field: int64 role_id = 14;
     */
    roleId: bigint;
    /**
     * The associated mobile role ID
     *
     * @generated from field: int64 mobile_role_id = 15;
     */
    mobileRoleId: bigint;
    /**
     * The primary email of the user
     *
     * @generated from field: string email = 16;
     */
    email: string;
    /**
     * The optional work email of the user
     *
     * @generated from field: string work_email = 17;
     */
    workEmail: string;
    /**
     * The primary contact number of the user
     *
     * @generated from field: string phone = 18;
     */
    phone: string;
    /**
     * The birthday of the user
     *
     * @generated from field: string birthday = 30;
     */
    birthday: string;
    /**
     * The joining date of the user
     *
     * @generated from field: string joining_date = 31;
     */
    joiningDate: string;
    /**
     * The address of the user
     *
     * @generated from field: string address = 32;
     */
    address: string;
    /**
     * The city of residence
     *
     * @generated from field: string city = 33;
     */
    city: string;
    /**
     * The state of residence
     *
     * @generated from field: string state = 34;
     */
    state: string;
    /**
     * The country of residence
     *
     * @generated from field: string country = 35;
     */
    country: string;
    /**
     * THe PIN Code of residence
     *
     * @generated from field: string pin_code = 36;
     */
    pinCode: string;
    /**
     * THe Blood Group of the user
     *
     * @generated from field: string blood_group = 37;
     */
    bloodGroup: string;
    /**
     * The associated shift group ID
     *
     * @generated from field: int64 shift_group_id = 50;
     */
    shiftGroupId: bigint;
    /**
     * The associated unit of material of the user's attendance record
     *
     * @generated from field: int64 attendance_uom_id = 51;
     */
    attendanceUomId: bigint;
    /**
     * The associated department
     *
     * @generated from field: int64 department_id = 52;
     */
    departmentId: bigint;
    /**
     * The associated payroll group ID of the user
     *
     * @generated from field: int64 payroll_group_id = 53;
     */
    payrollGroupId: bigint;
    /**
     * The associated tax group ID using which the user's payroll needs to be calculated
     *
     * @generated from field: int64 payroll_tax_group_id = 54;
     */
    payrollTaxGroupId: bigint;
    /**
     * The associated currency ID of the user's payroll
     *
     * @generated from field: int64 payroll_currency_id = 55;
     */
    payrollCurrencyId: bigint;
    /**
     * The basic pay amount of the user (in cents)
     *
     * @generated from field: int64 basic_pay_amount = 56;
     */
    basicPayAmount: bigint;
    /**
     * The associated unit of material for storing the basic pay amount
     *
     * @generated from field: int64 basic_pay_uom_id = 57;
     */
    basicPayUomId: bigint;
    /**
     * Stores if MFA has been enabled by the user
     *
     * @generated from field: bool mfa_status = 60;
     */
    mfaStatus: boolean;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Genesis.FormFieldDatum form_data = 70;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<User>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.User";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;
    static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}
/**
 *
 * Describes the message that is used internally to validate user
 *
 * @generated from message Genesis.UserPrimaryInfo
 */
export declare class UserPrimaryInfo extends Message<UserPrimaryInfo> {
    /**
     * The username of the user
     *
     * @generated from field: string username = 10;
     */
    username: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * Stores the hashed password
     *
     * @generated from field: bytes password = 12;
     */
    password: Uint8Array;
    /**
     * The associated role ID
     *
     * @generated from field: int64 role_id = 13;
     */
    roleId: bigint;
    /**
     * The associated mobile role ID
     *
     * @generated from field: int64 mobile_role_id = 14;
     */
    mobileRoleId: bigint;
    /**
     * Stores if MFA has been enabled by the user
     *
     * @generated from field: bool mfa_status = 15;
     */
    mfaStatus: boolean;
    /**
     * Stores the MFA secret
     *
     * @generated from field: bytes mfa_secret = 16;
     */
    mfaSecret: Uint8Array;
    /**
     * THe Blood Group of the user
     *
     * @generated from field: string blood_group = 20;
     */
    bloodGroup: string;
    constructor(data?: PartialMessage<UserPrimaryInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UserPrimaryInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserPrimaryInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserPrimaryInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserPrimaryInfo;
    static equals(a: UserPrimaryInfo | PlainMessage<UserPrimaryInfo> | undefined, b: UserPrimaryInfo | PlainMessage<UserPrimaryInfo> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Genesis.UsersList
 */
export declare class UsersList extends Message<UsersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.User list = 1;
     */
    list: User[];
    constructor(data?: PartialMessage<UsersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersList;
    static equals(a: UsersList | PlainMessage<UsersList> | undefined, b: UsersList | PlainMessage<UsersList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.UsersServicePaginationReq
 */
export declare class UsersServicePaginationReq extends Message<UsersServicePaginationReq> {
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
     * @generated from field: Genesis.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
    /**
     * The status of this user
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<UsersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServicePaginationReq;
    static equals(a: UsersServicePaginationReq | PlainMessage<UsersServicePaginationReq> | undefined, b: UsersServicePaginationReq | PlainMessage<UsersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.UsersServicePaginationResponse
 */
export declare class UsersServicePaginationResponse extends Message<UsersServicePaginationResponse> {
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
     * @generated from field: repeated Genesis.User payload = 4;
     */
    payload: User[];
    constructor(data?: PartialMessage<UsersServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServicePaginationResponse;
    static equals(a: UsersServicePaginationResponse | PlainMessage<UsersServicePaginationResponse> | undefined, b: UsersServicePaginationResponse | PlainMessage<UsersServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.UsersServiceEntityPaginationReq
 */
export declare class UsersServiceEntityPaginationReq extends Message<UsersServiceEntityPaginationReq> {
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
     * @generated from field: Genesis.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<UsersServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceEntityPaginationReq;
    static equals(a: UsersServiceEntityPaginationReq | PlainMessage<UsersServiceEntityPaginationReq> | undefined, b: UsersServiceEntityPaginationReq | PlainMessage<UsersServiceEntityPaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.UsersServiceFilterReq
 */
export declare class UsersServiceFilterReq extends Message<UsersServiceFilterReq> {
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
     * @generated from field: Genesis.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
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
     * The status of this user
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
     * The username of the user
     *
     * @generated from field: string username = 20;
     */
    username: string;
    /**
     * The name of the user
     *
     * @generated from field: string name = 21;
     */
    name: string;
    /**
     * The unique code by which the user is classified
     *
     * @generated from field: string code = 22;
     */
    code: string;
    /**
     * The primary email of the user
     *
     * @generated from field: string email = 23;
     */
    email: string;
    /**
     * The primary contact number of the user
     *
     * @generated from field: string phone = 24;
     */
    phone: string;
    /**
     * The associated role ID
     *
     * @generated from field: int64 role_id = 25;
     */
    roleId: bigint;
    /**
     * The associated shift group ID
     *
     * @generated from field: int64 shift_group_id = 26;
     */
    shiftGroupId: bigint;
    /**
     * The associated unit of material of the user's attendance record
     *
     * @generated from field: int64 attendance_uom_id = 27;
     */
    attendanceUomId: bigint;
    /**
     * The associated department
     *
     * @generated from field: int64 department_id = 28;
     */
    departmentId: bigint;
    /**
     * The associated payroll group ID of the user
     *
     * @generated from field: int64 payroll_group_id = 29;
     */
    payrollGroupId: bigint;
    /**
     * The associated tax group ID using which the user's payroll needs to be calculated
     *
     * @generated from field: int64 payroll_tax_group_id = 30;
     */
    payrollTaxGroupId: bigint;
    /**
     * The associated currency ID of the user's payroll
     *
     * @generated from field: int64 payroll_currency_id = 31;
     */
    payrollCurrencyId: bigint;
    /**
     * The associated unit of material for storing the basic pay amount
     *
     * @generated from field: int64 basic_pay_uom_id = 32;
     */
    basicPayUomId: bigint;
    /**
     * The optional work email of the user
     *
     * @generated from field: string work_email = 33;
     */
    workEmail: string;
    constructor(data?: PartialMessage<UsersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceFilterReq;
    static equals(a: UsersServiceFilterReq | PlainMessage<UsersServiceFilterReq> | undefined, b: UsersServiceFilterReq | PlainMessage<UsersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.UsersServiceSearchAllReq
 */
export declare class UsersServiceSearchAllReq extends Message<UsersServiceSearchAllReq> {
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
     * @generated from field: Genesis.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
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
    constructor(data?: PartialMessage<UsersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceSearchAllReq;
    static equals(a: UsersServiceSearchAllReq | PlainMessage<UsersServiceSearchAllReq> | undefined, b: UsersServiceSearchAllReq | PlainMessage<UsersServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the message that is required to register a user's device
 *
 * @generated from message Genesis.UsersServiceRegisterMobileDeviceRequest
 */
export declare class UsersServiceRegisterMobileDeviceRequest extends Message<UsersServiceRegisterMobileDeviceRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * The ID of the user who has possession of the device
     *
     * @generated from field: int64 user_id = 11;
     */
    userId: bigint;
    /**
     * The operating system of the device
     *
     * @generated from field: string device_os = 12;
     */
    deviceOs: string;
    /**
     * The generated FCM Token
     *
     * @generated from field: string device_token = 13;
     */
    deviceToken: string;
    constructor(data?: PartialMessage<UsersServiceRegisterMobileDeviceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.UsersServiceRegisterMobileDeviceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceRegisterMobileDeviceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceRegisterMobileDeviceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceRegisterMobileDeviceRequest;
    static equals(a: UsersServiceRegisterMobileDeviceRequest | PlainMessage<UsersServiceRegisterMobileDeviceRequest> | undefined, b: UsersServiceRegisterMobileDeviceRequest | PlainMessage<UsersServiceRegisterMobileDeviceRequest> | undefined): boolean;
}
//# sourceMappingURL=users_pb.d.ts.map