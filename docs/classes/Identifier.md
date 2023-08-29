[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Identifier

# Class: Identifier

Describes the standard identifier

**`Generated`**

from message Genesis.Identifier

## Hierarchy

- `Message`<[`Identifier`](Identifier.md)\>

  ↳ **`Identifier`**

## Table of contents

### Constructors

- [constructor](Identifier.md#constructor)

### Properties

- [id](Identifier.md#id)
- [fields](Identifier.md#fields)
- [runtime](Identifier.md#runtime)
- [typeName](Identifier.md#typename)

### Methods

- [clone](Identifier.md#clone)
- [equals](Identifier.md#equals)
- [fromBinary](Identifier.md#frombinary)
- [fromJson](Identifier.md#fromjson)
- [fromJsonString](Identifier.md#fromjsonstring)
- [getType](Identifier.md#gettype)
- [toBinary](Identifier.md#tobinary)
- [toJSON](Identifier.md#tojson)
- [toJson](Identifier.md#tojson-1)
- [toJsonString](Identifier.md#tojsonstring)
- [equals](Identifier.md#equals-1)
- [fromBinary](Identifier.md#frombinary-1)
- [fromJson](Identifier.md#fromjson-1)
- [fromJsonString](Identifier.md#fromjsonstring-1)

## Constructors

### constructor

• **new Identifier**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Identifier`](Identifier.md)\> |

#### Overrides

Message&lt;Identifier\&gt;.constructor

#### Defined in

[src/base_pb.ts:1082](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1082)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/base_pb.ts:1080](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1080)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1089](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1089)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1087](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1087)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Identifier"``

#### Defined in

[src/base_pb.ts:1088](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1088)

## Methods

### clone

▸ **clone**(): [`Identifier`](Identifier.md)

Create a deep copy.

#### Returns

[`Identifier`](Identifier.md)

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
| `other` | `undefined` \| ``null`` \| [`Identifier`](Identifier.md) \| `PlainMessage`<[`Identifier`](Identifier.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Identifier`](Identifier.md)

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

[`Identifier`](Identifier.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Identifier`](Identifier.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Identifier`](Identifier.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Identifier`](Identifier.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Identifier`](Identifier.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Identifier`](Identifier.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Identifier`](Identifier.md)\>

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
| `a` | `undefined` \| [`Identifier`](Identifier.md) \| `PlainMessage`<[`Identifier`](Identifier.md)\> |
| `b` | `undefined` \| [`Identifier`](Identifier.md) \| `PlainMessage`<[`Identifier`](Identifier.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1105](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1105)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Identifier`](Identifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Identifier`](Identifier.md)

#### Defined in

[src/base_pb.ts:1093](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1093)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Identifier`](Identifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Identifier`](Identifier.md)

#### Defined in

[src/base_pb.ts:1097](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1097)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Identifier`](Identifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Identifier`](Identifier.md)

#### Defined in

[src/base_pb.ts:1101](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1101)
