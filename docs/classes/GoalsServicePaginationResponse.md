[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalsServicePaginationResponse

# Class: GoalsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.GoalsServicePaginationResponse

## Hierarchy

- `Message`<[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)\>

  ↳ **`GoalsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](GoalsServicePaginationResponse.md#constructor)

### Properties

- [count](GoalsServicePaginationResponse.md#count)
- [offset](GoalsServicePaginationResponse.md#offset)
- [payload](GoalsServicePaginationResponse.md#payload)
- [total](GoalsServicePaginationResponse.md#total)
- [fields](GoalsServicePaginationResponse.md#fields)
- [runtime](GoalsServicePaginationResponse.md#runtime)
- [typeName](GoalsServicePaginationResponse.md#typename)

### Methods

- [clone](GoalsServicePaginationResponse.md#clone)
- [equals](GoalsServicePaginationResponse.md#equals)
- [fromBinary](GoalsServicePaginationResponse.md#frombinary)
- [fromJson](GoalsServicePaginationResponse.md#fromjson)
- [fromJsonString](GoalsServicePaginationResponse.md#fromjsonstring)
- [getType](GoalsServicePaginationResponse.md#gettype)
- [toBinary](GoalsServicePaginationResponse.md#tobinary)
- [toJSON](GoalsServicePaginationResponse.md#tojson)
- [toJson](GoalsServicePaginationResponse.md#tojson-1)
- [toJsonString](GoalsServicePaginationResponse.md#tojsonstring)
- [equals](GoalsServicePaginationResponse.md#equals-1)
- [fromBinary](GoalsServicePaginationResponse.md#frombinary-1)
- [fromJson](GoalsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](GoalsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;GoalsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/goals_pb.ts:1152](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1152)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/goals_pb.ts:1129](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1129)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/goals_pb.ts:1136](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1136)

___

### payload

• **payload**: [`Goal`](Goal.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Goal payload = 4;

#### Defined in

[src/goals_pb.ts:1150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1150)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/goals_pb.ts:1143](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1143)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:1159](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1159)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:1157](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1157)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalsServicePaginationResponse"``

#### Defined in

[src/goals_pb.ts:1158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1158)

## Methods

### clone

▸ **clone**(): [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md) \| `PlainMessage`<[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

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

[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md) \| `PlainMessage`<[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md) \| `PlainMessage`<[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:1178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1178)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Defined in

[src/goals_pb.ts:1166](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1166)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Defined in

[src/goals_pb.ts:1170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1170)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationResponse`](GoalsServicePaginationResponse.md)

#### Defined in

[src/goals_pb.ts:1174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1174)
