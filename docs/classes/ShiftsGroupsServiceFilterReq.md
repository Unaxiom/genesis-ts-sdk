[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceFilterReq

# Class: ShiftsGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.ShiftsGroupsServiceFilterReq

## Hierarchy

- `Message`<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\>

  ↳ **`ShiftsGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ShiftsGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ShiftsGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ShiftsGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ShiftsGroupsServiceFilterReq.md#approverroleid)
- [code](ShiftsGroupsServiceFilterReq.md#code)
- [completedOnEnd](ShiftsGroupsServiceFilterReq.md#completedonend)
- [completedOnStart](ShiftsGroupsServiceFilterReq.md#completedonstart)
- [count](ShiftsGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](ShiftsGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ShiftsGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ShiftsGroupsServiceFilterReq.md#entityuuid)
- [isActive](ShiftsGroupsServiceFilterReq.md#isactive)
- [name](ShiftsGroupsServiceFilterReq.md#name)
- [offset](ShiftsGroupsServiceFilterReq.md#offset)
- [sortKey](ShiftsGroupsServiceFilterReq.md#sortkey)
- [sortOrder](ShiftsGroupsServiceFilterReq.md#sortorder)
- [status](ShiftsGroupsServiceFilterReq.md#status)
- [fields](ShiftsGroupsServiceFilterReq.md#fields)
- [runtime](ShiftsGroupsServiceFilterReq.md#runtime)
- [typeName](ShiftsGroupsServiceFilterReq.md#typename)

### Methods

- [clone](ShiftsGroupsServiceFilterReq.md#clone)
- [equals](ShiftsGroupsServiceFilterReq.md#equals)
- [fromBinary](ShiftsGroupsServiceFilterReq.md#frombinary)
- [fromJson](ShiftsGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceFilterReq.md#fromjsonstring)
- [getType](ShiftsGroupsServiceFilterReq.md#gettype)
- [toBinary](ShiftsGroupsServiceFilterReq.md#tobinary)
- [toJSON](ShiftsGroupsServiceFilterReq.md#tojson)
- [toJson](ShiftsGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceFilterReq.md#tojsonstring)
- [equals](ShiftsGroupsServiceFilterReq.md#equals-1)
- [fromBinary](ShiftsGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\> |

#### Overrides

Message&lt;ShiftsGroupsServiceFilterReq\&gt;.constructor

#### Defined in

[src/shifts_groups_pb.ts:1097](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1097)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/shifts_groups_pb.ts:1060](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1060)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/shifts_groups_pb.ts:1053](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1053)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/shifts_groups_pb.ts:1046](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1046)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/shifts_groups_pb.ts:1067](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1067)

___

### code

• **code**: `string` = `""`

The shift group code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/shifts_groups_pb.ts:1095](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1095)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/shifts_groups_pb.ts:1081](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1081)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/shifts_groups_pb.ts:1074](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1074)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts_groups_pb.ts:990](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L990)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/shifts_groups_pb.ts:1025](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1025)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/shifts_groups_pb.ts:1018](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1018)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/shifts_groups_pb.ts:1032](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1032)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shifts_groups_pb.ts:983](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L983)

___

### name

• **name**: `string` = `""`

The name of the shift group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/shifts_groups_pb.ts:1088](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1088)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shifts_groups_pb.ts:997](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L997)

___

### sortKey

• **sortKey**: [`SHIFT_GROUP_SORT_KEY`](../enums/SHIFT_GROUP_SORT_KEY.md) = `SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts_groups_pb.ts:1011](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1011)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/shifts_groups_pb.ts:1004](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1004)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/shifts_groups_pb.ts:1039](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1039)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups_pb.ts:1104](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1104)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups_pb.ts:1102](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1102)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsGroupsServiceFilterReq"``

#### Defined in

[src/shifts_groups_pb.ts:1103](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1103)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

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

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups_pb.ts:1136](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1136)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Defined in

[src/shifts_groups_pb.ts:1124](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1124)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Defined in

[src/shifts_groups_pb.ts:1128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1128)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Defined in

[src/shifts_groups_pb.ts:1132](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1132)
