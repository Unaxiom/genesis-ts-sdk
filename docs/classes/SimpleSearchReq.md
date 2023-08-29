[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SimpleSearchReq

# Class: SimpleSearchReq

Describes a simple search request

**`Generated`**

from message Genesis.SimpleSearchReq

## Hierarchy

- `Message`<[`SimpleSearchReq`](SimpleSearchReq.md)\>

  ↳ **`SimpleSearchReq`**

## Table of contents

### Constructors

- [constructor](SimpleSearchReq.md#constructor)

### Properties

- [searchKey](SimpleSearchReq.md#searchkey)
- [fields](SimpleSearchReq.md#fields)
- [runtime](SimpleSearchReq.md#runtime)
- [typeName](SimpleSearchReq.md#typename)

### Methods

- [clone](SimpleSearchReq.md#clone)
- [equals](SimpleSearchReq.md#equals)
- [fromBinary](SimpleSearchReq.md#frombinary)
- [fromJson](SimpleSearchReq.md#fromjson)
- [fromJsonString](SimpleSearchReq.md#fromjsonstring)
- [getType](SimpleSearchReq.md#gettype)
- [toBinary](SimpleSearchReq.md#tobinary)
- [toJSON](SimpleSearchReq.md#tojson)
- [toJson](SimpleSearchReq.md#tojson-1)
- [toJsonString](SimpleSearchReq.md#tojsonstring)
- [equals](SimpleSearchReq.md#equals-1)
- [fromBinary](SimpleSearchReq.md#frombinary-1)
- [fromJson](SimpleSearchReq.md#fromjson-1)
- [fromJsonString](SimpleSearchReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SimpleSearchReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SimpleSearchReq`](SimpleSearchReq.md)\> |

#### Overrides

Message&lt;SimpleSearchReq\&gt;.constructor

#### Defined in

[src/base_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1040)

## Properties

### searchKey

• **searchKey**: `string` = `""`

**`Generated`**

from field: string search_key = 1;

#### Defined in

[src/base_pb.ts:1038](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1038)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1047](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1047)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1045](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1045)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SimpleSearchReq"``

#### Defined in

[src/base_pb.ts:1046](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1046)

## Methods

### clone

▸ **clone**(): [`SimpleSearchReq`](SimpleSearchReq.md)

Create a deep copy.

#### Returns

[`SimpleSearchReq`](SimpleSearchReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SimpleSearchReq`](SimpleSearchReq.md) \| `PlainMessage`<[`SimpleSearchReq`](SimpleSearchReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SimpleSearchReq`](SimpleSearchReq.md)

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

[`SimpleSearchReq`](SimpleSearchReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SimpleSearchReq`](SimpleSearchReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SimpleSearchReq`](SimpleSearchReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SimpleSearchReq`](SimpleSearchReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SimpleSearchReq`](SimpleSearchReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SimpleSearchReq`](SimpleSearchReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SimpleSearchReq`](SimpleSearchReq.md)\>

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
| `a` | `undefined` \| [`SimpleSearchReq`](SimpleSearchReq.md) \| `PlainMessage`<[`SimpleSearchReq`](SimpleSearchReq.md)\> |
| `b` | `undefined` \| [`SimpleSearchReq`](SimpleSearchReq.md) \| `PlainMessage`<[`SimpleSearchReq`](SimpleSearchReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1063](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1063)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SimpleSearchReq`](SimpleSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SimpleSearchReq`](SimpleSearchReq.md)

#### Defined in

[src/base_pb.ts:1051](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1051)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SimpleSearchReq`](SimpleSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SimpleSearchReq`](SimpleSearchReq.md)

#### Defined in

[src/base_pb.ts:1055](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1055)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SimpleSearchReq`](SimpleSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SimpleSearchReq`](SimpleSearchReq.md)

#### Defined in

[src/base_pb.ts:1059](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1059)
