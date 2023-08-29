[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsList

# Class: ReplaceableIndentsList

Describes the message consisting of the list of replaceable indents

**`Generated`**

from message Genesis.ReplaceableIndentsList

## Hierarchy

- `Message`<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\>

  ↳ **`ReplaceableIndentsList`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsList.md#constructor)

### Properties

- [list](ReplaceableIndentsList.md#list)
- [fields](ReplaceableIndentsList.md#fields)
- [runtime](ReplaceableIndentsList.md#runtime)
- [typeName](ReplaceableIndentsList.md#typename)

### Methods

- [clone](ReplaceableIndentsList.md#clone)
- [equals](ReplaceableIndentsList.md#equals)
- [fromBinary](ReplaceableIndentsList.md#frombinary)
- [fromJson](ReplaceableIndentsList.md#fromjson)
- [fromJsonString](ReplaceableIndentsList.md#fromjsonstring)
- [getType](ReplaceableIndentsList.md#gettype)
- [toBinary](ReplaceableIndentsList.md#tobinary)
- [toJSON](ReplaceableIndentsList.md#tojson)
- [toJson](ReplaceableIndentsList.md#tojson-1)
- [toJsonString](ReplaceableIndentsList.md#tojsonstring)
- [equals](ReplaceableIndentsList.md#equals-1)
- [fromBinary](ReplaceableIndentsList.md#frombinary-1)
- [fromJson](ReplaceableIndentsList.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsList\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:770](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L770)

## Properties

### list

• **list**: [`ReplaceableIndent`](ReplaceableIndent.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.ReplaceableIndent list = 1;

#### Defined in

[src/replaceable_indents_pb.ts:768](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L768)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:777](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L777)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:775](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L775)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsList"``

#### Defined in

[src/replaceable_indents_pb.ts:776](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L776)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsList`](ReplaceableIndentsList.md) \| `PlainMessage`<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

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

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsList`](ReplaceableIndentsList.md) \| `PlainMessage`<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsList`](ReplaceableIndentsList.md) \| `PlainMessage`<[`ReplaceableIndentsList`](ReplaceableIndentsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L793)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Defined in

[src/replaceable_indents_pb.ts:781](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L781)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Defined in

[src/replaceable_indents_pb.ts:785](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L785)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsList`](ReplaceableIndentsList.md)

#### Defined in

[src/replaceable_indents_pb.ts:789](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L789)
