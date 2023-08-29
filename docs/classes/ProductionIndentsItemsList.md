[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsItemsList

# Class: ProductionIndentsItemsList

Describes the message consisting of the list of production indent items

**`Generated`**

from message Genesis.ProductionIndentsItemsList

## Hierarchy

- `Message`<[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)\>

  ↳ **`ProductionIndentsItemsList`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsItemsList.md#constructor)

### Properties

- [list](ProductionIndentsItemsList.md#list)
- [fields](ProductionIndentsItemsList.md#fields)
- [runtime](ProductionIndentsItemsList.md#runtime)
- [typeName](ProductionIndentsItemsList.md#typename)

### Methods

- [clone](ProductionIndentsItemsList.md#clone)
- [equals](ProductionIndentsItemsList.md#equals)
- [fromBinary](ProductionIndentsItemsList.md#frombinary)
- [fromJson](ProductionIndentsItemsList.md#fromjson)
- [fromJsonString](ProductionIndentsItemsList.md#fromjsonstring)
- [getType](ProductionIndentsItemsList.md#gettype)
- [toBinary](ProductionIndentsItemsList.md#tobinary)
- [toJSON](ProductionIndentsItemsList.md#tojson)
- [toJson](ProductionIndentsItemsList.md#tojson-1)
- [toJsonString](ProductionIndentsItemsList.md#tojsonstring)
- [equals](ProductionIndentsItemsList.md#equals-1)
- [fromBinary](ProductionIndentsItemsList.md#frombinary-1)
- [fromJson](ProductionIndentsItemsList.md#fromjson-1)
- [fromJsonString](ProductionIndentsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)\> |

#### Overrides

Message&lt;ProductionIndentsItemsList\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:820](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L820)

## Properties

### list

• **list**: [`ProductionIndentItem`](ProductionIndentItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.ProductionIndentItem list = 1;

#### Defined in

[src/production_indents_pb.ts:818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L818)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:827](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L827)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:825](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L825)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsItemsList"``

#### Defined in

[src/production_indents_pb.ts:826](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L826)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

Create a deep copy.

#### Returns

[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md) \| `PlainMessage`<[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

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

[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md) \| `PlainMessage`<[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)\> |
| `b` | `undefined` \| [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md) \| `PlainMessage`<[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:843](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L843)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Defined in

[src/production_indents_pb.ts:831](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L831)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Defined in

[src/production_indents_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L835)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsItemsList`](ProductionIndentsItemsList.md)

#### Defined in

[src/production_indents_pb.ts:839](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L839)
