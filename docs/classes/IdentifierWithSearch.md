[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / IdentifierWithSearch

# Class: IdentifierWithSearch

Describes the standard identifier along with a search key

**`Generated`**

from message Genesis.IdentifierWithSearch

## Hierarchy

- `Message`<[`IdentifierWithSearch`](IdentifierWithSearch.md)\>

  ↳ **`IdentifierWithSearch`**

## Table of contents

### Constructors

- [constructor](IdentifierWithSearch.md#constructor)

### Properties

- [id](IdentifierWithSearch.md#id)
- [searchKey](IdentifierWithSearch.md#searchkey)
- [fields](IdentifierWithSearch.md#fields)
- [runtime](IdentifierWithSearch.md#runtime)
- [typeName](IdentifierWithSearch.md#typename)

### Methods

- [clone](IdentifierWithSearch.md#clone)
- [equals](IdentifierWithSearch.md#equals)
- [fromBinary](IdentifierWithSearch.md#frombinary)
- [fromJson](IdentifierWithSearch.md#fromjson)
- [fromJsonString](IdentifierWithSearch.md#fromjsonstring)
- [getType](IdentifierWithSearch.md#gettype)
- [toBinary](IdentifierWithSearch.md#tobinary)
- [toJSON](IdentifierWithSearch.md#tojson)
- [toJson](IdentifierWithSearch.md#tojson-1)
- [toJsonString](IdentifierWithSearch.md#tojsonstring)
- [equals](IdentifierWithSearch.md#equals-1)
- [fromBinary](IdentifierWithSearch.md#frombinary-1)
- [fromJson](IdentifierWithSearch.md#fromjson-1)
- [fromJsonString](IdentifierWithSearch.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierWithSearch**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`IdentifierWithSearch`](IdentifierWithSearch.md)\> |

#### Overrides

Message&lt;IdentifierWithSearch\&gt;.constructor

#### Defined in

[src/base_pb.ts:1173](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1173)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/base_pb.ts:1164](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1164)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 2;

#### Defined in

[src/base_pb.ts:1171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1171)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1180](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1180)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1178)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.IdentifierWithSearch"``

#### Defined in

[src/base_pb.ts:1179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1179)

## Methods

### clone

▸ **clone**(): [`IdentifierWithSearch`](IdentifierWithSearch.md)

Create a deep copy.

#### Returns

[`IdentifierWithSearch`](IdentifierWithSearch.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierWithSearch`](IdentifierWithSearch.md) \| `PlainMessage`<[`IdentifierWithSearch`](IdentifierWithSearch.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierWithSearch`](IdentifierWithSearch.md)

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

[`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierWithSearch`](IdentifierWithSearch.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithSearch`](IdentifierWithSearch.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`IdentifierWithSearch`](IdentifierWithSearch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`IdentifierWithSearch`](IdentifierWithSearch.md)\>

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
| `a` | `undefined` \| [`IdentifierWithSearch`](IdentifierWithSearch.md) \| `PlainMessage`<[`IdentifierWithSearch`](IdentifierWithSearch.md)\> |
| `b` | `undefined` \| [`IdentifierWithSearch`](IdentifierWithSearch.md) \| `PlainMessage`<[`IdentifierWithSearch`](IdentifierWithSearch.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1197](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1197)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Defined in

[src/base_pb.ts:1185](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1185)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Defined in

[src/base_pb.ts:1189](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1189)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithSearch`](IdentifierWithSearch.md)

#### Defined in

[src/base_pb.ts:1193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1193)
