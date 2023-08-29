[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / IdentifierWithSearchKey

# Class: IdentifierWithSearchKey

Describes the standard identifier with a search key. Useful when searching within sub records of a parent item (such as shift group shifts, etc)

**`Generated`**

from message Genesis.IdentifierWithSearchKey

## Hierarchy

- `Message`<[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)\>

  ↳ **`IdentifierWithSearchKey`**

## Table of contents

### Constructors

- [constructor](IdentifierWithSearchKey.md#constructor)

### Properties

- [id](IdentifierWithSearchKey.md#id)
- [searchKey](IdentifierWithSearchKey.md#searchkey)
- [fields](IdentifierWithSearchKey.md#fields)
- [runtime](IdentifierWithSearchKey.md#runtime)
- [typeName](IdentifierWithSearchKey.md#typename)

### Methods

- [clone](IdentifierWithSearchKey.md#clone)
- [equals](IdentifierWithSearchKey.md#equals)
- [fromBinary](IdentifierWithSearchKey.md#frombinary)
- [fromJson](IdentifierWithSearchKey.md#fromjson)
- [fromJsonString](IdentifierWithSearchKey.md#fromjsonstring)
- [getType](IdentifierWithSearchKey.md#gettype)
- [toBinary](IdentifierWithSearchKey.md#tobinary)
- [toJSON](IdentifierWithSearchKey.md#tojson)
- [toJson](IdentifierWithSearchKey.md#tojson-1)
- [toJsonString](IdentifierWithSearchKey.md#tojsonstring)
- [equals](IdentifierWithSearchKey.md#equals-1)
- [fromBinary](IdentifierWithSearchKey.md#frombinary-1)
- [fromJson](IdentifierWithSearchKey.md#fromjson-1)
- [fromJsonString](IdentifierWithSearchKey.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierWithSearchKey**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)\> |

#### Overrides

Message&lt;IdentifierWithSearchKey\&gt;.constructor

#### Defined in

[src/base_pb.ts:1381](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1381)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/base_pb.ts:1372](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1372)

___

### searchKey

• **searchKey**: `string` = `""`

The search key

**`Generated`**

from field: string search_key = 2;

#### Defined in

[src/base_pb.ts:1379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1379)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1388](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1388)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1386](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1386)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.IdentifierWithSearchKey"``

#### Defined in

[src/base_pb.ts:1387](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1387)

## Methods

### clone

▸ **clone**(): [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

Create a deep copy.

#### Returns

[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md) \| `PlainMessage`<[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

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

[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)\>

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
| `a` | `undefined` \| [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md) \| `PlainMessage`<[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)\> |
| `b` | `undefined` \| [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md) \| `PlainMessage`<[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1405)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Defined in

[src/base_pb.ts:1393](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1393)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Defined in

[src/base_pb.ts:1397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1397)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithSearchKey`](IdentifierWithSearchKey.md)

#### Defined in

[src/base_pb.ts:1401](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1401)
