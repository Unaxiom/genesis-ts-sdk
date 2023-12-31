[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuantityResponse

# Class: QuantityResponse

Describes the quantity response

**`Generated`**

from message Genesis.QuantityResponse

## Hierarchy

- `Message`<[`QuantityResponse`](QuantityResponse.md)\>

  ↳ **`QuantityResponse`**

## Table of contents

### Constructors

- [constructor](QuantityResponse.md#constructor)

### Properties

- [quantity](QuantityResponse.md#quantity)
- [fields](QuantityResponse.md#fields)
- [runtime](QuantityResponse.md#runtime)
- [typeName](QuantityResponse.md#typename)

### Methods

- [clone](QuantityResponse.md#clone)
- [equals](QuantityResponse.md#equals)
- [fromBinary](QuantityResponse.md#frombinary)
- [fromJson](QuantityResponse.md#fromjson)
- [fromJsonString](QuantityResponse.md#fromjsonstring)
- [getType](QuantityResponse.md#gettype)
- [toBinary](QuantityResponse.md#tobinary)
- [toJSON](QuantityResponse.md#tojson)
- [toJson](QuantityResponse.md#tojson-1)
- [toJsonString](QuantityResponse.md#tojsonstring)
- [equals](QuantityResponse.md#equals-1)
- [fromBinary](QuantityResponse.md#frombinary-1)
- [fromJson](QuantityResponse.md#fromjson-1)
- [fromJsonString](QuantityResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuantityResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuantityResponse`](QuantityResponse.md)\> |

#### Overrides

Message&lt;QuantityResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:586](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L586)

## Properties

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity

**`Generated`**

from field: int64 quantity = 1;

#### Defined in

[src/base_pb.ts:584](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L584)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:593](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L593)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:591](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L591)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuantityResponse"``

#### Defined in

[src/base_pb.ts:592](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L592)

## Methods

### clone

▸ **clone**(): [`QuantityResponse`](QuantityResponse.md)

Create a deep copy.

#### Returns

[`QuantityResponse`](QuantityResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuantityResponse`](QuantityResponse.md) \| `PlainMessage`<[`QuantityResponse`](QuantityResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuantityResponse`](QuantityResponse.md)

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

[`QuantityResponse`](QuantityResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuantityResponse`](QuantityResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuantityResponse`](QuantityResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuantityResponse`](QuantityResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuantityResponse`](QuantityResponse.md)\>

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
| `a` | `undefined` \| [`QuantityResponse`](QuantityResponse.md) \| `PlainMessage`<[`QuantityResponse`](QuantityResponse.md)\> |
| `b` | `undefined` \| [`QuantityResponse`](QuantityResponse.md) \| `PlainMessage`<[`QuantityResponse`](QuantityResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:609](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L609)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuantityResponse`](QuantityResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Defined in

[src/base_pb.ts:597](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L597)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuantityResponse`](QuantityResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Defined in

[src/base_pb.ts:601](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L601)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuantityResponse`](QuantityResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Defined in

[src/base_pb.ts:605](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L605)
