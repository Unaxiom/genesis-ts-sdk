[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceFilterReq

# Class: HolidaysServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.HolidaysServiceFilterReq

## Hierarchy

- `Message`<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\>

  ↳ **`HolidaysServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](HolidaysServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](HolidaysServiceFilterReq.md#approvedonend)
- [approvedOnStart](HolidaysServiceFilterReq.md#approvedonstart)
- [approverRoleId](HolidaysServiceFilterReq.md#approverroleid)
- [completedOnEnd](HolidaysServiceFilterReq.md#completedonend)
- [completedOnStart](HolidaysServiceFilterReq.md#completedonstart)
- [count](HolidaysServiceFilterReq.md#count)
- [creationTimestampEnd](HolidaysServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](HolidaysServiceFilterReq.md#creationtimestampstart)
- [description](HolidaysServiceFilterReq.md#description)
- [endOnEnd](HolidaysServiceFilterReq.md#endonend)
- [endOnStart](HolidaysServiceFilterReq.md#endonstart)
- [entityUuid](HolidaysServiceFilterReq.md#entityuuid)
- [isActive](HolidaysServiceFilterReq.md#isactive)
- [offset](HolidaysServiceFilterReq.md#offset)
- [sortKey](HolidaysServiceFilterReq.md#sortkey)
- [sortOrder](HolidaysServiceFilterReq.md#sortorder)
- [startOnEnd](HolidaysServiceFilterReq.md#startonend)
- [startOnStart](HolidaysServiceFilterReq.md#startonstart)
- [status](HolidaysServiceFilterReq.md#status)
- [title](HolidaysServiceFilterReq.md#title)
- [fields](HolidaysServiceFilterReq.md#fields)
- [runtime](HolidaysServiceFilterReq.md#runtime)
- [typeName](HolidaysServiceFilterReq.md#typename)

### Methods

- [clone](HolidaysServiceFilterReq.md#clone)
- [equals](HolidaysServiceFilterReq.md#equals)
- [fromBinary](HolidaysServiceFilterReq.md#frombinary)
- [fromJson](HolidaysServiceFilterReq.md#fromjson)
- [fromJsonString](HolidaysServiceFilterReq.md#fromjsonstring)
- [getType](HolidaysServiceFilterReq.md#gettype)
- [toBinary](HolidaysServiceFilterReq.md#tobinary)
- [toJSON](HolidaysServiceFilterReq.md#tojson)
- [toJson](HolidaysServiceFilterReq.md#tojson-1)
- [toJsonString](HolidaysServiceFilterReq.md#tojsonstring)
- [equals](HolidaysServiceFilterReq.md#equals-1)
- [fromBinary](HolidaysServiceFilterReq.md#frombinary-1)
- [fromJson](HolidaysServiceFilterReq.md#fromjson-1)
- [fromJsonString](HolidaysServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\> |

#### Overrides

Message&lt;HolidaysServiceFilterReq\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1165)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/holidays_pb.ts:1100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1100)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/holidays_pb.ts:1093](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1093)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/holidays_pb.ts:1086](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1086)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/holidays_pb.ts:1107](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1107)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/holidays_pb.ts:1121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1121)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/holidays_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1114)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/holidays_pb.ts:1030](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1030)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/holidays_pb.ts:1065](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1065)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/holidays_pb.ts:1058](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1058)

___

### description

• **description**: `string` = `""`

The description of the holiday

**`Generated`**

from field: string description = 21;

#### Defined in

[src/holidays_pb.ts:1135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1135)

___

### endOnEnd

• **endOnEnd**: `bigint` = `protoInt64.zero`

The end range of end timestamp

**`Generated`**

from field: int64 end_on_end = 25;

#### Defined in

[src/holidays_pb.ts:1163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1163)

___

### endOnStart

• **endOnStart**: `bigint` = `protoInt64.zero`

The start range of end timestamp

**`Generated`**

from field: int64 end_on_start = 24;

#### Defined in

[src/holidays_pb.ts:1156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1156)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/holidays_pb.ts:1072](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1072)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/holidays_pb.ts:1023](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1023)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/holidays_pb.ts:1037](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1037)

___

### sortKey

• **sortKey**: [`HOLIDAY_SORT_KEY`](../enums/HOLIDAY_SORT_KEY.md) = `HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.HOLIDAY_SORT_KEY sort_key = 5;

#### Defined in

[src/holidays_pb.ts:1051](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1051)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/holidays_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1044)

___

### startOnEnd

• **startOnEnd**: `bigint` = `protoInt64.zero`

The end range of start timestamp

**`Generated`**

from field: int64 start_on_end = 23;

#### Defined in

[src/holidays_pb.ts:1149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1149)

___

### startOnStart

• **startOnStart**: `bigint` = `protoInt64.zero`

The start range of start timestamp

**`Generated`**

from field: int64 start_on_start = 22;

#### Defined in

[src/holidays_pb.ts:1142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1142)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/holidays_pb.ts:1079](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1079)

___

### title

• **title**: `string` = `""`

The title of the holiday

**`Generated`**

from field: string title = 20;

#### Defined in

[src/holidays_pb.ts:1128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1128)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:1172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1172)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:1170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1170)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysServiceFilterReq"``

#### Defined in

[src/holidays_pb.ts:1171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1171)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

Create a deep copy.

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md) \| `PlainMessage`<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

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

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md) \| `PlainMessage`<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\> |
| `b` | `undefined` \| [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md) \| `PlainMessage`<[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:1208](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1208)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Defined in

[src/holidays_pb.ts:1196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1196)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Defined in

[src/holidays_pb.ts:1200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1200)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceFilterReq`](HolidaysServiceFilterReq.md)

#### Defined in

[src/holidays_pb.ts:1204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1204)
