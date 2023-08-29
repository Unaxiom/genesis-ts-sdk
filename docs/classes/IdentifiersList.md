[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / IdentifiersList

# Class: IdentifiersList

Describes the list of standard identifiers, used for identifying associated items

**`Generated`**

from message Genesis.IdentifiersList

## Hierarchy

- `Message`<[`IdentifiersList`](IdentifiersList.md)\>

  ↳ **`IdentifiersList`**

## Table of contents

### Constructors

- [constructor](IdentifiersList.md#constructor)

### Properties

- [list](IdentifiersList.md#list)
- [fields](IdentifiersList.md#fields)
- [runtime](IdentifiersList.md#runtime)
- [typeName](IdentifiersList.md#typename)

### Methods

- [clone](IdentifiersList.md#clone)
- [equals](IdentifiersList.md#equals)
- [fromBinary](IdentifiersList.md#frombinary)
- [fromJson](IdentifiersList.md#fromjson)
- [fromJsonString](IdentifiersList.md#fromjsonstring)
- [getType](IdentifiersList.md#gettype)
- [toBinary](IdentifiersList.md#tobinary)
- [toJSON](IdentifiersList.md#tojson)
- [toJson](IdentifiersList.md#tojson-1)
- [toJsonString](IdentifiersList.md#tojsonstring)
- [equals](IdentifiersList.md#equals-1)
- [fromBinary](IdentifiersList.md#frombinary-1)
- [fromJson](IdentifiersList.md#fromjson-1)
- [fromJsonString](IdentifiersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifiersList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`IdentifiersList`](IdentifiersList.md)\> |

#### Overrides

Message&lt;IdentifiersList\&gt;.constructor

#### Defined in

[src/base_pb.ts:1216](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1216)

## Properties

### list

• **list**: `bigint`[] = `[]`

List of identifiers

**`Generated`**

from field: repeated int64 list = 1;

#### Defined in

[src/base_pb.ts:1214](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1214)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1223](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1223)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1221](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1221)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.IdentifiersList"``

#### Defined in

[src/base_pb.ts:1222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1222)

## Methods

### clone

▸ **clone**(): [`IdentifiersList`](IdentifiersList.md)

Create a deep copy.

#### Returns

[`IdentifiersList`](IdentifiersList.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifiersList`](IdentifiersList.md) \| `PlainMessage`<[`IdentifiersList`](IdentifiersList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifiersList`](IdentifiersList.md)

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

[`IdentifiersList`](IdentifiersList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifiersList`](IdentifiersList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifiersList`](IdentifiersList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`IdentifiersList`](IdentifiersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`IdentifiersList`](IdentifiersList.md)\>

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
| `a` | `undefined` \| [`IdentifiersList`](IdentifiersList.md) \| `PlainMessage`<[`IdentifiersList`](IdentifiersList.md)\> |
| `b` | `undefined` \| [`IdentifiersList`](IdentifiersList.md) \| `PlainMessage`<[`IdentifiersList`](IdentifiersList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1239)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`IdentifiersList`](IdentifiersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Defined in

[src/base_pb.ts:1227](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1227)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`IdentifiersList`](IdentifiersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Defined in

[src/base_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1231)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`IdentifiersList`](IdentifiersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Defined in

[src/base_pb.ts:1235](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1235)
