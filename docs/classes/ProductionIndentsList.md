[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsList

# Class: ProductionIndentsList

Describes the message consisting of the list of production indents

**`Generated`**

from message Genesis.ProductionIndentsList

## Hierarchy

- `Message`<[`ProductionIndentsList`](ProductionIndentsList.md)\>

  ↳ **`ProductionIndentsList`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsList.md#constructor)

### Properties

- [list](ProductionIndentsList.md#list)
- [fields](ProductionIndentsList.md#fields)
- [runtime](ProductionIndentsList.md#runtime)
- [typeName](ProductionIndentsList.md#typename)

### Methods

- [clone](ProductionIndentsList.md#clone)
- [equals](ProductionIndentsList.md#equals)
- [fromBinary](ProductionIndentsList.md#frombinary)
- [fromJson](ProductionIndentsList.md#fromjson)
- [fromJsonString](ProductionIndentsList.md#fromjsonstring)
- [getType](ProductionIndentsList.md#gettype)
- [toBinary](ProductionIndentsList.md#tobinary)
- [toJSON](ProductionIndentsList.md#tojson)
- [toJson](ProductionIndentsList.md#tojson-1)
- [toJsonString](ProductionIndentsList.md#tojsonstring)
- [equals](ProductionIndentsList.md#equals-1)
- [fromBinary](ProductionIndentsList.md#frombinary-1)
- [fromJson](ProductionIndentsList.md#fromjson-1)
- [fromJsonString](ProductionIndentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsList`](ProductionIndentsList.md)\> |

#### Overrides

Message&lt;ProductionIndentsList\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:778](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L778)

## Properties

### list

• **list**: [`ProductionIndent`](ProductionIndent.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.ProductionIndent list = 1;

#### Defined in

[src/production_indents_pb.ts:776](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L776)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:785](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L785)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:783](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L783)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsList"``

#### Defined in

[src/production_indents_pb.ts:784](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L784)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsList`](ProductionIndentsList.md)

Create a deep copy.

#### Returns

[`ProductionIndentsList`](ProductionIndentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsList`](ProductionIndentsList.md) \| `PlainMessage`<[`ProductionIndentsList`](ProductionIndentsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsList`](ProductionIndentsList.md)

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

[`ProductionIndentsList`](ProductionIndentsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsList`](ProductionIndentsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsList`](ProductionIndentsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsList`](ProductionIndentsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsList`](ProductionIndentsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsList`](ProductionIndentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsList`](ProductionIndentsList.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsList`](ProductionIndentsList.md) \| `PlainMessage`<[`ProductionIndentsList`](ProductionIndentsList.md)\> |
| `b` | `undefined` \| [`ProductionIndentsList`](ProductionIndentsList.md) \| `PlainMessage`<[`ProductionIndentsList`](ProductionIndentsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:801](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L801)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsList`](ProductionIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsList`](ProductionIndentsList.md)

#### Defined in

[src/production_indents_pb.ts:789](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L789)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsList`](ProductionIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsList`](ProductionIndentsList.md)

#### Defined in

[src/production_indents_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L793)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsList`](ProductionIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsList`](ProductionIndentsList.md)

#### Defined in

[src/production_indents_pb.ts:797](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L797)
