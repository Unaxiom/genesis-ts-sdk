[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsItemsList

# Class: AssetIndentsItemsList

Describes the message consisting of the list of asset indent items

**`Generated`**

from message Genesis.AssetIndentsItemsList

## Hierarchy

- `Message`<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\>

  ↳ **`AssetIndentsItemsList`**

## Table of contents

### Constructors

- [constructor](AssetIndentsItemsList.md#constructor)

### Properties

- [list](AssetIndentsItemsList.md#list)
- [fields](AssetIndentsItemsList.md#fields)
- [runtime](AssetIndentsItemsList.md#runtime)
- [typeName](AssetIndentsItemsList.md#typename)

### Methods

- [clone](AssetIndentsItemsList.md#clone)
- [equals](AssetIndentsItemsList.md#equals)
- [fromBinary](AssetIndentsItemsList.md#frombinary)
- [fromJson](AssetIndentsItemsList.md#fromjson)
- [fromJsonString](AssetIndentsItemsList.md#fromjsonstring)
- [getType](AssetIndentsItemsList.md#gettype)
- [toBinary](AssetIndentsItemsList.md#tobinary)
- [toJSON](AssetIndentsItemsList.md#tojson)
- [toJson](AssetIndentsItemsList.md#tojson-1)
- [toJsonString](AssetIndentsItemsList.md#tojsonstring)
- [equals](AssetIndentsItemsList.md#equals-1)
- [fromBinary](AssetIndentsItemsList.md#frombinary-1)
- [fromJson](AssetIndentsItemsList.md#fromjson-1)
- [fromJsonString](AssetIndentsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\> |

#### Overrides

Message&lt;AssetIndentsItemsList\&gt;.constructor

#### Defined in

[src/asset_indents_pb.ts:722](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L722)

## Properties

### list

• **list**: [`AssetIndentItem`](AssetIndentItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.AssetIndentItem list = 1;

#### Defined in

[src/asset_indents_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L720)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents_pb.ts:729](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L729)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L727)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssetIndentsItemsList"``

#### Defined in

[src/asset_indents_pb.ts:728](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L728)

## Methods

### clone

▸ **clone**(): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

Create a deep copy.

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsItemsList`](AssetIndentsItemsList.md) \| `PlainMessage`<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

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

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\>

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
| `a` | `undefined` \| [`AssetIndentsItemsList`](AssetIndentsItemsList.md) \| `PlainMessage`<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\> |
| `b` | `undefined` \| [`AssetIndentsItemsList`](AssetIndentsItemsList.md) \| `PlainMessage`<[`AssetIndentsItemsList`](AssetIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents_pb.ts:745](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L745)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Defined in

[src/asset_indents_pb.ts:733](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L733)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Defined in

[src/asset_indents_pb.ts:737](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L737)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsItemsList`](AssetIndentsItemsList.md)

#### Defined in

[src/asset_indents_pb.ts:741](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L741)
