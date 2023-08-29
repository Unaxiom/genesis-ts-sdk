import type ***REMOVED*** BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** Message, proto3 ***REMOVED*** from "@bufbuild/protobuf";
import ***REMOVED*** ApprovalMetadata, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS ***REMOVED*** from "./base_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Genesis.TEAM_SORT_KEY
 */
export declare enum TEAM_SORT_KEY ***REMOVED***
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: TEAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TEAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: TEAM_SORT_KEY_CREATED_AT = 1;
     */
    TEAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: TEAM_SORT_KEY_MODIFIED_AT = 2;
     */
    TEAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVED_ON = 3;
     */
    TEAM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVED_BY = 4;
     */
    TEAM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    TEAM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: TEAM_SORT_KEY_COMPLETED_ON = 6;
     */
    TEAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: TEAM_SORT_KEY_NAME = 10;
     */
    TEAM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: TEAM_SORT_KEY_CODE = 11;
     */
    TEAM_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the leader ID
     *
     * @generated from enum value: TEAM_SORT_KEY_LEAD_USER_ID = 12;
     */
    TEAM_SORT_KEY_LEAD_USER_ID = 12
***REMOVED***
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Genesis.TeamsServiceCreateRequest
 */
export declare class TeamsServiceCreateRequest extends Message<TeamsServiceCreateRequest> ***REMOVED***
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
     * The name of the team
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the team lead of this team
     *
     * @generated from field: int64 lead_user_id = 12;
     */
    leadUserId: bigint;
    /**
     * The description of the team
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<TeamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceCreateRequest;
    static equals(a: TeamsServiceCreateRequest | PlainMessage<TeamsServiceCreateRequest> | undefined, b: TeamsServiceCreateRequest | PlainMessage<TeamsServiceCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Genesis.TeamsServiceUpdateRequest
 */
export declare class TeamsServiceUpdateRequest extends Message<TeamsServiceUpdateRequest> ***REMOVED***
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
     * The name of the team
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the team lead of this team
     *
     * @generated from field: int64 lead_user_id = 12;
     */
    leadUserId: bigint;
    /**
     * The description of the team
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<TeamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceUpdateRequest;
    static equals(a: TeamsServiceUpdateRequest | PlainMessage<TeamsServiceUpdateRequest> | undefined, b: TeamsServiceUpdateRequest | PlainMessage<TeamsServiceUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Genesis.Team
 */
export declare class Team extends Message<Team> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this team
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
     * The status of this team
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this team
     *
     * @generated from field: repeated Genesis.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this team was marked as completed
     *
     * @generated from field: int64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: int64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The name of the team
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the team lead of this team
     *
     * @generated from field: int64 lead_user_id = 12;
     */
    leadUserId: bigint;
    /**
     * The description of the team
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated team members
     *
     * @generated from field: repeated Genesis.TeamMember list = 20;
     */
    list: TeamMember[];
    constructor(data?: PartialMessage<Team>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.Team";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Team;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Team;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Team;
    static equals(a: Team | PlainMessage<Team> | undefined, b: Team | PlainMessage<Team> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to add a member to a team
 *
 * @generated from message Genesis.TeamsServiceMemberCreateRequest
 */
export declare class TeamsServiceMemberCreateRequest extends Message<TeamsServiceMemberCreateRequest> ***REMOVED***
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the team
     *
     * @generated from field: int64 team_id = 10;
     */
    teamId: bigint;
    /**
     * The ID of the user that is part of the team
     *
     * @generated from field: int64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<TeamsServiceMemberCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServiceMemberCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceMemberCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceMemberCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceMemberCreateRequest;
    static equals(a: TeamsServiceMemberCreateRequest | PlainMessage<TeamsServiceMemberCreateRequest> | undefined, b: TeamsServiceMemberCreateRequest | PlainMessage<TeamsServiceMemberCreateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters required to update a member in a team
 *
 * @generated from message Genesis.TeamsServiceMemberUpdateRequest
 */
export declare class TeamsServiceMemberUpdateRequest extends Message<TeamsServiceMemberUpdateRequest> ***REMOVED***
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
    constructor(data?: PartialMessage<TeamsServiceMemberUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServiceMemberUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceMemberUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceMemberUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceMemberUpdateRequest;
    static equals(a: TeamsServiceMemberUpdateRequest | PlainMessage<TeamsServiceMemberUpdateRequest> | undefined, b: TeamsServiceMemberUpdateRequest | PlainMessage<TeamsServiceMemberUpdateRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that constitute a member associated to a team
 *
 * @generated from message Genesis.TeamMember
 */
export declare class TeamMember extends Message<TeamMember> ***REMOVED***
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this team
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
     * Stores the ID of the team
     *
     * @generated from field: int64 team_id = 10;
     */
    teamId: bigint;
    /**
     * The ID of the user that is part of the team
     *
     * @generated from field: int64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<TeamMember>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamMember";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamMember;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamMember;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamMember;
    static equals(a: TeamMember | PlainMessage<TeamMember> | undefined, b: TeamMember | PlainMessage<TeamMember> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of teams
 *
 * @generated from message Genesis.TeamsList
 */
export declare class TeamsList extends Message<TeamsList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.Team list = 1;
     */
    list: Team[];
    constructor(data?: PartialMessage<TeamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsList;
    static equals(a: TeamsList | PlainMessage<TeamsList> | undefined, b: TeamsList | PlainMessage<TeamsList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the message consisting of the list of team members
 *
 * @generated from message Genesis.TeamsMembersList
 */
export declare class TeamsMembersList extends Message<TeamsMembersList> ***REMOVED***
    /**
     * List of records
     *
     * @generated from field: repeated Genesis.TeamMember list = 1;
     */
    list: TeamMember[];
    constructor(data?: PartialMessage<TeamsMembersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsMembersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsMembersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsMembersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsMembersList;
    static equals(a: TeamsMembersList | PlainMessage<TeamsMembersList> | undefined, b: TeamsMembersList | PlainMessage<TeamsMembersList> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Genesis.TeamMemberHistoryRequest
 */
export declare class TeamMemberHistoryRequest extends Message<TeamMemberHistoryRequest> ***REMOVED***
    /**
     * Stores the ID of the team
     *
     * @generated from field: int64 team_id = 10;
     */
    teamId: bigint;
    /**
     * The ID of the user that is part of the team
     *
     * @generated from field: int64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<TeamMemberHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamMemberHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamMemberHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamMemberHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamMemberHistoryRequest;
    static equals(a: TeamMemberHistoryRequest | PlainMessage<TeamMemberHistoryRequest> | undefined, b: TeamMemberHistoryRequest | PlainMessage<TeamMemberHistoryRequest> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Genesis.TeamsServicePaginationReq
 */
export declare class TeamsServicePaginationReq extends Message<TeamsServicePaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
    /**
     * The status of this team
     *
     * @generated from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<TeamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServicePaginationReq;
    static equals(a: TeamsServicePaginationReq | PlainMessage<TeamsServicePaginationReq> | undefined, b: TeamsServicePaginationReq | PlainMessage<TeamsServicePaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Genesis.TeamsServicePaginationResponse
 */
export declare class TeamsServicePaginationResponse extends Message<TeamsServicePaginationResponse> ***REMOVED***
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
     * @generated from field: repeated Genesis.Team payload = 4;
     */
    payload: Team[];
    constructor(data?: PartialMessage<TeamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServicePaginationResponse;
    static equals(a: TeamsServicePaginationResponse | PlainMessage<TeamsServicePaginationResponse> | undefined, b: TeamsServicePaginationResponse | PlainMessage<TeamsServicePaginationResponse> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes a pagination request to retrieve records associated with an entity UUID
 *
 * @generated from message Genesis.TeamsServiceEntityPaginationReq
 */
export declare class TeamsServiceEntityPaginationReq extends Message<TeamsServiceEntityPaginationReq> ***REMOVED***
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
     * @generated from field: Genesis.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<TeamsServiceEntityPaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServiceEntityPaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceEntityPaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceEntityPaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceEntityPaginationReq;
    static equals(a: TeamsServiceEntityPaginationReq | PlainMessage<TeamsServiceEntityPaginationReq> | undefined, b: TeamsServiceEntityPaginationReq | PlainMessage<TeamsServiceEntityPaginationReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Genesis.TeamsServiceFilterReq
 */
export declare class TeamsServiceFilterReq extends Message<TeamsServiceFilterReq> ***REMOVED***
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
     * @generated from field: Genesis.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
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
     * The status of this team
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
     * The name of the team
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the leader
     *
     * @generated from field: int64 lead_user_id = 22;
     */
    leadUserId: bigint;
    constructor(data?: PartialMessage<TeamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceFilterReq;
    static equals(a: TeamsServiceFilterReq | PlainMessage<TeamsServiceFilterReq> | undefined, b: TeamsServiceFilterReq | PlainMessage<TeamsServiceFilterReq> | undefined): boolean;
***REMOVED***
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Genesis.TeamsServiceSearchAllReq
 */
export declare class TeamsServiceSearchAllReq extends Message<TeamsServiceSearchAllReq> ***REMOVED***
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
     * @generated from field: Genesis.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
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
    constructor(data?: PartialMessage<TeamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Genesis.TeamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceSearchAllReq;
    static equals(a: TeamsServiceSearchAllReq | PlainMessage<TeamsServiceSearchAllReq> | undefined, b: TeamsServiceSearchAllReq | PlainMessage<TeamsServiceSearchAllReq> | undefined): boolean;
***REMOVED***
//# sourceMappingURL=teams_pb.d.ts.map