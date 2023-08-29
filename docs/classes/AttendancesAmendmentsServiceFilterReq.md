[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceFilterReq

# Class: AttendancesAmendmentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.AttendancesAmendmentsServiceFilterReq

## Hierarchy

- `Message`<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\>

  ↳ **`AttendancesAmendmentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceFilterReq.md#constructor)

### Properties

- [amendmentEntryTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#amendmententrytimestampend)
- [amendmentEntryTimestampStart](AttendancesAmendmentsServiceFilterReq.md#amendmententrytimestampstart)
- [amendmentExitTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#amendmentexittimestampend)
- [amendmentExitTimestampStart](AttendancesAmendmentsServiceFilterReq.md#amendmentexittimestampstart)
- [approvedByUserId](AttendancesAmendmentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AttendancesAmendmentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AttendancesAmendmentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AttendancesAmendmentsServiceFilterReq.md#approverroleid)
- [attendanceEntryTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#attendanceentrytimestampend)
- [attendanceEntryTimestampStart](AttendancesAmendmentsServiceFilterReq.md#attendanceentrytimestampstart)
- [attendanceExitTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#attendanceexittimestampend)
- [attendanceExitTimestampStart](AttendancesAmendmentsServiceFilterReq.md#attendanceexittimestampstart)
- [attendanceId](AttendancesAmendmentsServiceFilterReq.md#attendanceid)
- [completedOnEnd](AttendancesAmendmentsServiceFilterReq.md#completedonend)
- [completedOnStart](AttendancesAmendmentsServiceFilterReq.md#completedonstart)
- [count](AttendancesAmendmentsServiceFilterReq.md#count)
- [creationTimestampEnd](AttendancesAmendmentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AttendancesAmendmentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](AttendancesAmendmentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](AttendancesAmendmentsServiceFilterReq.md#finalrefnumber)
- [isActive](AttendancesAmendmentsServiceFilterReq.md#isactive)
- [offset](AttendancesAmendmentsServiceFilterReq.md#offset)
- [referenceId](AttendancesAmendmentsServiceFilterReq.md#referenceid)
- [sortKey](AttendancesAmendmentsServiceFilterReq.md#sortkey)
- [sortOrder](AttendancesAmendmentsServiceFilterReq.md#sortorder)
- [status](AttendancesAmendmentsServiceFilterReq.md#status)
- [userId](AttendancesAmendmentsServiceFilterReq.md#userid)
- [fields](AttendancesAmendmentsServiceFilterReq.md#fields)
- [runtime](AttendancesAmendmentsServiceFilterReq.md#runtime)
- [typeName](AttendancesAmendmentsServiceFilterReq.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceFilterReq.md#clone)
- [equals](AttendancesAmendmentsServiceFilterReq.md#equals)
- [fromBinary](AttendancesAmendmentsServiceFilterReq.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceFilterReq.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceFilterReq.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceFilterReq.md#gettype)
- [toBinary](AttendancesAmendmentsServiceFilterReq.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceFilterReq.md#tojson)
- [toJson](AttendancesAmendmentsServiceFilterReq.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceFilterReq.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceFilterReq.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceFilterReq.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\> |

#### Overrides

Message&lt;AttendancesAmendmentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/attendances_amendments_pb.ts:992](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L992)

## Properties

### amendmentEntryTimestampEnd

• **amendmentEntryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of amendment_entry_timestamp

**`Generated`**

from field: int64 amendment_entry_timestamp_end = 29;

#### Defined in

[src/attendances_amendments_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L976)

___

### amendmentEntryTimestampStart

• **amendmentEntryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of amendment_entry_timestamp

**`Generated`**

from field: int64 amendment_entry_timestamp_start = 28;

#### Defined in

[src/attendances_amendments_pb.ts:969](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L969)

___

### amendmentExitTimestampEnd

• **amendmentExitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of amendment_exit_timestamp

**`Generated`**

from field: int64 amendment_exit_timestamp_end = 31;

#### Defined in

[src/attendances_amendments_pb.ts:990](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L990)

___

### amendmentExitTimestampStart

• **amendmentExitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of amendment_exit_timestamp

**`Generated`**

from field: int64 amendment_exit_timestamp_start = 30;

#### Defined in

[src/attendances_amendments_pb.ts:983](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L983)

___

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/attendances_amendments_pb.ts:885](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L885)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/attendances_amendments_pb.ts:878](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L878)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/attendances_amendments_pb.ts:871](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L871)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/attendances_amendments_pb.ts:892](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L892)

___

### attendanceEntryTimestampEnd

• **attendanceEntryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of attendance_entry_timestamp

**`Generated`**

from field: int64 attendance_entry_timestamp_end = 25;

#### Defined in

[src/attendances_amendments_pb.ts:948](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L948)

___

### attendanceEntryTimestampStart

• **attendanceEntryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of attendance_entry_timestamp

**`Generated`**

from field: int64 attendance_entry_timestamp_start = 24;

#### Defined in

[src/attendances_amendments_pb.ts:941](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L941)

___

### attendanceExitTimestampEnd

• **attendanceExitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of attendance_exit_timestamp

**`Generated`**

from field: int64 attendance_exit_timestamp_end = 27;

#### Defined in

[src/attendances_amendments_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L962)

___

### attendanceExitTimestampStart

• **attendanceExitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of attendance_exit_timestamp

**`Generated`**

from field: int64 attendance_exit_timestamp_start = 26;

#### Defined in

[src/attendances_amendments_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L955)

___

### attendanceId

• **attendanceId**: `bigint` = `protoInt64.zero`

The ID of the associated attendance

**`Generated`**

from field: int64 attendance_id = 23;

#### Defined in

[src/attendances_amendments_pb.ts:934](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L934)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/attendances_amendments_pb.ts:906](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L906)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/attendances_amendments_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L899)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/attendances_amendments_pb.ts:815](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L815)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/attendances_amendments_pb.ts:850](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L850)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/attendances_amendments_pb.ts:843](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L843)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/attendances_amendments_pb.ts:857](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L857)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/attendances_amendments_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L920)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/attendances_amendments_pb.ts:808](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L808)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/attendances_amendments_pb.ts:822](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L822)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the attendance amendment

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/attendances_amendments_pb.ts:913](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L913)

___

### sortKey

• **sortKey**: [`ATTENDANCE_AMENDMENT_SORT_KEY`](../enums/ATTENDANCE_AMENDMENT_SORT_KEY.md) = `ATTENDANCE_AMENDMENT_SORT_KEY.ATTENDANCE_AMENDMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/attendances_amendments_pb.ts:836](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L836)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/attendances_amendments_pb.ts:829](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L829)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this attendance amendment

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/attendances_amendments_pb.ts:864](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L864)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for attendance amendment

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/attendances_amendments_pb.ts:927](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L927)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments_pb.ts:999](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L999)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments_pb.ts:997](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L997)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesAmendmentsServiceFilterReq"``

#### Defined in

[src/attendances_amendments_pb.ts:998](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L998)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:27

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:80

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:49

___

### toJSON

▸ `Protected` **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:74

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:54

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:58

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments_pb.ts:1041](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1041)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:1029](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1029)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:1033](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1033)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceFilterReq`](AttendancesAmendmentsServiceFilterReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:1037](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1037)
