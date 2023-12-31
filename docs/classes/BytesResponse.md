[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / BytesResponse

# Class: BytesResponse

Describes a generic response that consists of bytes as payload

**`Generated`**

from message Genesis.BytesResponse

## Hierarchy

- `Message`<[`BytesResponse`](BytesResponse.md)\>

  ↳ **`BytesResponse`**

## Table of contents

### Constructors

- [constructor](BytesResponse.md#constructor)

### Properties

- [value](BytesResponse.md#value)
- [fields](BytesResponse.md#fields)
- [runtime](BytesResponse.md#runtime)
- [typeName](BytesResponse.md#typename)

### Methods

- [clone](BytesResponse.md#clone)
- [equals](BytesResponse.md#equals)
- [fromBinary](BytesResponse.md#frombinary)
- [fromJson](BytesResponse.md#fromjson)
- [fromJsonString](BytesResponse.md#fromjsonstring)
- [getType](BytesResponse.md#gettype)
- [toBinary](BytesResponse.md#tobinary)
- [toJSON](BytesResponse.md#tojson)
- [toJson](BytesResponse.md#tojson-1)
- [toJsonString](BytesResponse.md#tojsonstring)
- [equals](BytesResponse.md#equals-1)
- [fromBinary](BytesResponse.md#frombinary-1)
- [fromJson](BytesResponse.md#fromjson-1)
- [fromJsonString](BytesResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new BytesResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BytesResponse`](BytesResponse.md)\> |

#### Overrides

Message&lt;BytesResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L252)

## Properties

### value

• **value**: `Uint8Array`

Stores the response content in bytes

**`Generated`**

from field: bytes value = 1;

#### Defined in

[src/base_pb.ts:250](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L250)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L259)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:257](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L257)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.BytesResponse"``

#### Defined in

[src/base_pb.ts:258](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L258)

## Methods

### clone

▸ **clone**(): [`BytesResponse`](BytesResponse.md)

Create a deep copy.

#### Returns

[`BytesResponse`](BytesResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`BytesResponse`](BytesResponse.md) \| `PlainMessage`<[`BytesResponse`](BytesResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BytesResponse`](BytesResponse.md)

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

[`BytesResponse`](BytesResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BytesResponse`](BytesResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BytesResponse`](BytesResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BytesResponse`](BytesResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BytesResponse`](BytesResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BytesResponse`](BytesResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BytesResponse`](BytesResponse.md)\>

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
| `a` | `undefined` \| [`BytesResponse`](BytesResponse.md) \| `PlainMessage`<[`BytesResponse`](BytesResponse.md)\> |
| `b` | `undefined` \| [`BytesResponse`](BytesResponse.md) \| `PlainMessage`<[`BytesResponse`](BytesResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:275](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L275)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BytesResponse`](BytesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BytesResponse`](BytesResponse.md)

#### Defined in

[src/base_pb.ts:263](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L263)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BytesResponse`](BytesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BytesResponse`](BytesResponse.md)

#### Defined in

[src/base_pb.ts:267](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L267)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BytesResponse`](BytesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BytesResponse`](BytesResponse.md)

#### Defined in

[src/base_pb.ts:271](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L271)
