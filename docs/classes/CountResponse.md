[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / CountResponse

# Class: CountResponse

Describes the count response

**`Generated`**

from message Genesis.CountResponse

## Hierarchy

- `Message`<[`CountResponse`](CountResponse.md)\>

  ↳ **`CountResponse`**

## Table of contents

### Constructors

- [constructor](CountResponse.md#constructor)

### Properties

- [count](CountResponse.md#count)
- [fields](CountResponse.md#fields)
- [runtime](CountResponse.md#runtime)
- [typeName](CountResponse.md#typename)

### Methods

- [clone](CountResponse.md#clone)
- [equals](CountResponse.md#equals)
- [fromBinary](CountResponse.md#frombinary)
- [fromJson](CountResponse.md#fromjson)
- [fromJsonString](CountResponse.md#fromjsonstring)
- [getType](CountResponse.md#gettype)
- [toBinary](CountResponse.md#tobinary)
- [toJSON](CountResponse.md#tojson)
- [toJson](CountResponse.md#tojson-1)
- [toJsonString](CountResponse.md#tojsonstring)
- [equals](CountResponse.md#equals-1)
- [fromBinary](CountResponse.md#frombinary-1)
- [fromJson](CountResponse.md#fromjson-1)
- [fromJsonString](CountResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new CountResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CountResponse`](CountResponse.md)\> |

#### Overrides

Message&lt;CountResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L544)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/base_pb.ts:542](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L542)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:551](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L551)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:549](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L549)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.CountResponse"``

#### Defined in

[src/base_pb.ts:550](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L550)

## Methods

### clone

▸ **clone**(): [`CountResponse`](CountResponse.md)

Create a deep copy.

#### Returns

[`CountResponse`](CountResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`CountResponse`](CountResponse.md) \| `PlainMessage`<[`CountResponse`](CountResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CountResponse`](CountResponse.md)

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

[`CountResponse`](CountResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CountResponse`](CountResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountResponse`](CountResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CountResponse`](CountResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountResponse`](CountResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CountResponse`](CountResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CountResponse`](CountResponse.md)\>

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
| `a` | `undefined` \| [`CountResponse`](CountResponse.md) \| `PlainMessage`<[`CountResponse`](CountResponse.md)\> |
| `b` | `undefined` \| [`CountResponse`](CountResponse.md) \| `PlainMessage`<[`CountResponse`](CountResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:567](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L567)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CountResponse`](CountResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CountResponse`](CountResponse.md)

#### Defined in

[src/base_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L555)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CountResponse`](CountResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountResponse`](CountResponse.md)

#### Defined in

[src/base_pb.ts:559](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L559)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CountResponse`](CountResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountResponse`](CountResponse.md)

#### Defined in

[src/base_pb.ts:563](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L563)
