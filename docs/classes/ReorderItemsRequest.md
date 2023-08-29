[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReorderItemsRequest

# Class: ReorderItemsRequest

Describes the data model to handle reordering of items

**`Generated`**

from message Genesis.ReorderItemsRequest

## Hierarchy

- `Message`<[`ReorderItemsRequest`](ReorderItemsRequest.md)\>

  ↳ **`ReorderItemsRequest`**

## Table of contents

### Constructors

- [constructor](ReorderItemsRequest.md#constructor)

### Properties

- [id](ReorderItemsRequest.md#id)
- [sequence](ReorderItemsRequest.md#sequence)
- [fields](ReorderItemsRequest.md#fields)
- [runtime](ReorderItemsRequest.md#runtime)
- [typeName](ReorderItemsRequest.md#typename)

### Methods

- [clone](ReorderItemsRequest.md#clone)
- [equals](ReorderItemsRequest.md#equals)
- [fromBinary](ReorderItemsRequest.md#frombinary)
- [fromJson](ReorderItemsRequest.md#fromjson)
- [fromJsonString](ReorderItemsRequest.md#fromjsonstring)
- [getType](ReorderItemsRequest.md#gettype)
- [toBinary](ReorderItemsRequest.md#tobinary)
- [toJSON](ReorderItemsRequest.md#tojson)
- [toJson](ReorderItemsRequest.md#tojson-1)
- [toJsonString](ReorderItemsRequest.md#tojsonstring)
- [equals](ReorderItemsRequest.md#equals-1)
- [fromBinary](ReorderItemsRequest.md#frombinary-1)
- [fromJson](ReorderItemsRequest.md#fromjson-1)
- [fromJsonString](ReorderItemsRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReorderItemsRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReorderItemsRequest`](ReorderItemsRequest.md)\> |

#### Overrides

Message&lt;ReorderItemsRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:1841](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1841)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/base_pb.ts:1832](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1832)

___

### sequence

• **sequence**: `bigint`[] = `[]`

The list of IDs to be stored in the given sequence

**`Generated`**

from field: repeated int64 sequence = 2;

#### Defined in

[src/base_pb.ts:1839](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1839)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1848](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1848)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1846](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1846)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReorderItemsRequest"``

#### Defined in

[src/base_pb.ts:1847](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1847)

## Methods

### clone

▸ **clone**(): [`ReorderItemsRequest`](ReorderItemsRequest.md)

Create a deep copy.

#### Returns

[`ReorderItemsRequest`](ReorderItemsRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReorderItemsRequest`](ReorderItemsRequest.md) \| `PlainMessage`<[`ReorderItemsRequest`](ReorderItemsRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReorderItemsRequest`](ReorderItemsRequest.md)

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

[`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReorderItemsRequest`](ReorderItemsRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReorderItemsRequest`](ReorderItemsRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReorderItemsRequest`](ReorderItemsRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReorderItemsRequest`](ReorderItemsRequest.md)\>

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
| `a` | `undefined` \| [`ReorderItemsRequest`](ReorderItemsRequest.md) \| `PlainMessage`<[`ReorderItemsRequest`](ReorderItemsRequest.md)\> |
| `b` | `undefined` \| [`ReorderItemsRequest`](ReorderItemsRequest.md) \| `PlainMessage`<[`ReorderItemsRequest`](ReorderItemsRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1865](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1865)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Defined in

[src/base_pb.ts:1853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1853)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Defined in

[src/base_pb.ts:1857](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1857)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReorderItemsRequest`](ReorderItemsRequest.md)

#### Defined in

[src/base_pb.ts:1861](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1861)
