[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalsServicePaginationReq

# Class: GoalsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.GoalsServicePaginationReq

## Hierarchy

- `Message`<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\>

  ↳ **`GoalsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](GoalsServicePaginationReq.md#constructor)

### Properties

- [count](GoalsServicePaginationReq.md#count)
- [isActive](GoalsServicePaginationReq.md#isactive)
- [offset](GoalsServicePaginationReq.md#offset)
- [sortKey](GoalsServicePaginationReq.md#sortkey)
- [sortOrder](GoalsServicePaginationReq.md#sortorder)
- [status](GoalsServicePaginationReq.md#status)
- [fields](GoalsServicePaginationReq.md#fields)
- [runtime](GoalsServicePaginationReq.md#runtime)
- [typeName](GoalsServicePaginationReq.md#typename)

### Methods

- [clone](GoalsServicePaginationReq.md#clone)
- [equals](GoalsServicePaginationReq.md#equals)
- [fromBinary](GoalsServicePaginationReq.md#frombinary)
- [fromJson](GoalsServicePaginationReq.md#fromjson)
- [fromJsonString](GoalsServicePaginationReq.md#fromjsonstring)
- [getType](GoalsServicePaginationReq.md#gettype)
- [toBinary](GoalsServicePaginationReq.md#tobinary)
- [toJSON](GoalsServicePaginationReq.md#tojson)
- [toJson](GoalsServicePaginationReq.md#tojson-1)
- [toJsonString](GoalsServicePaginationReq.md#tojsonstring)
- [equals](GoalsServicePaginationReq.md#equals-1)
- [fromBinary](GoalsServicePaginationReq.md#frombinary-1)
- [fromJson](GoalsServicePaginationReq.md#fromjson-1)
- [fromJsonString](GoalsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\> |

#### Overrides

Message&lt;GoalsServicePaginationReq\&gt;.constructor

#### Defined in

[src/goals_pb.ts:1084](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1084)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goals_pb.ts:1054](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1054)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goals_pb.ts:1047](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1047)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goals_pb.ts:1061](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1061)

___

### sortKey

• **sortKey**: [`GOAL_SORT_KEY`](../enums/GOAL_SORT_KEY.md) = `GOAL_SORT_KEY.GOAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOAL_SORT_KEY sort_key = 5;

#### Defined in

[src/goals_pb.ts:1075](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1075)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goals_pb.ts:1068](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1068)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this goal

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/goals_pb.ts:1082](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1082)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:1091](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1091)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:1089](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1089)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalsServicePaginationReq"``

#### Defined in

[src/goals_pb.ts:1090](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1090)

## Methods

### clone

▸ **clone**(): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md) \| `PlainMessage`<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

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

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md) \| `PlainMessage`<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md) \| `PlainMessage`<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:1112](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1112)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Defined in

[src/goals_pb.ts:1100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1100)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Defined in

[src/goals_pb.ts:1104](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1104)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Defined in

[src/goals_pb.ts:1108](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1108)
