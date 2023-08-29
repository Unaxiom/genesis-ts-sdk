[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceFilterReq

# Class: TeamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.TeamsServiceFilterReq

## Hierarchy

- `Message`<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\>

  ↳ **`TeamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](TeamsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](TeamsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](TeamsServiceFilterReq.md#approvedonend)
- [approvedOnStart](TeamsServiceFilterReq.md#approvedonstart)
- [approverRoleId](TeamsServiceFilterReq.md#approverroleid)
- [code](TeamsServiceFilterReq.md#code)
- [completedOnEnd](TeamsServiceFilterReq.md#completedonend)
- [completedOnStart](TeamsServiceFilterReq.md#completedonstart)
- [count](TeamsServiceFilterReq.md#count)
- [creationTimestampEnd](TeamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](TeamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](TeamsServiceFilterReq.md#entityuuid)
- [isActive](TeamsServiceFilterReq.md#isactive)
- [leadUserId](TeamsServiceFilterReq.md#leaduserid)
- [name](TeamsServiceFilterReq.md#name)
- [offset](TeamsServiceFilterReq.md#offset)
- [sortKey](TeamsServiceFilterReq.md#sortkey)
- [sortOrder](TeamsServiceFilterReq.md#sortorder)
- [status](TeamsServiceFilterReq.md#status)
- [fields](TeamsServiceFilterReq.md#fields)
- [runtime](TeamsServiceFilterReq.md#runtime)
- [typeName](TeamsServiceFilterReq.md#typename)

### Methods

- [clone](TeamsServiceFilterReq.md#clone)
- [equals](TeamsServiceFilterReq.md#equals)
- [fromBinary](TeamsServiceFilterReq.md#frombinary)
- [fromJson](TeamsServiceFilterReq.md#fromjson)
- [fromJsonString](TeamsServiceFilterReq.md#fromjsonstring)
- [getType](TeamsServiceFilterReq.md#gettype)
- [toBinary](TeamsServiceFilterReq.md#tobinary)
- [toJSON](TeamsServiceFilterReq.md#tojson)
- [toJson](TeamsServiceFilterReq.md#tojson-1)
- [toJsonString](TeamsServiceFilterReq.md#tojsonstring)
- [equals](TeamsServiceFilterReq.md#equals-1)
- [fromBinary](TeamsServiceFilterReq.md#frombinary-1)
- [fromJson](TeamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](TeamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\> |

#### Overrides

Message&lt;TeamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/teams_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1114)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/teams_pb.ts:1070](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1070)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/teams_pb.ts:1063](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1063)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/teams_pb.ts:1056](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1056)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/teams_pb.ts:1077](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1077)

___

### code

• **code**: `string` = `""`

The code of the team

**`Generated`**

from field: string code = 21;

#### Defined in

[src/teams_pb.ts:1105](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1105)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/teams_pb.ts:1091](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1091)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/teams_pb.ts:1084](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1084)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/teams_pb.ts:1000](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1000)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/teams_pb.ts:1035](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1035)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/teams_pb.ts:1028](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1028)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/teams_pb.ts:1042](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1042)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/teams_pb.ts:993](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L993)

___

### leadUserId

• **leadUserId**: `bigint` = `protoInt64.zero`

The ID of the leader

**`Generated`**

from field: int64 lead_user_id = 22;

#### Defined in

[src/teams_pb.ts:1112](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1112)

___

### name

• **name**: `string` = `""`

The name of the team

**`Generated`**

from field: string name = 20;

#### Defined in

[src/teams_pb.ts:1098](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1098)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/teams_pb.ts:1007](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1007)

___

### sortKey

• **sortKey**: [`TEAM_SORT_KEY`](../enums/TEAM_SORT_KEY.md) = `TEAM_SORT_KEY.TEAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.TEAM_SORT_KEY sort_key = 5;

#### Defined in

[src/teams_pb.ts:1021](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1021)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/teams_pb.ts:1014](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1014)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this team

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/teams_pb.ts:1049](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1049)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:1121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1121)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:1119](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1119)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamsServiceFilterReq"``

#### Defined in

[src/teams_pb.ts:1120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1120)

## Methods

### clone

▸ **clone**(): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md) \| `PlainMessage`<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

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

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md) \| `PlainMessage`<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md) \| `PlainMessage`<[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:1154](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1154)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Defined in

[src/teams_pb.ts:1142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1142)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Defined in

[src/teams_pb.ts:1146](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1146)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceFilterReq`](TeamsServiceFilterReq.md)

#### Defined in

[src/teams_pb.ts:1150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1150)
