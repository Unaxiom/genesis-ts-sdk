[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsItemsList

# Class: ReplaceableIndentsItemsList

Describes the message consisting of the list of replaceable indent items

**`Generated`**

from message Genesis.ReplaceableIndentsItemsList

## Hierarchy

- `Message`<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\>

  ↳ **`ReplaceableIndentsItemsList`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsItemsList.md#constructor)

### Properties

- [list](ReplaceableIndentsItemsList.md#list)
- [fields](ReplaceableIndentsItemsList.md#fields)
- [runtime](ReplaceableIndentsItemsList.md#runtime)
- [typeName](ReplaceableIndentsItemsList.md#typename)

### Methods

- [clone](ReplaceableIndentsItemsList.md#clone)
- [equals](ReplaceableIndentsItemsList.md#equals)
- [fromBinary](ReplaceableIndentsItemsList.md#frombinary)
- [fromJson](ReplaceableIndentsItemsList.md#fromjson)
- [fromJsonString](ReplaceableIndentsItemsList.md#fromjsonstring)
- [getType](ReplaceableIndentsItemsList.md#gettype)
- [toBinary](ReplaceableIndentsItemsList.md#tobinary)
- [toJSON](ReplaceableIndentsItemsList.md#tojson)
- [toJson](ReplaceableIndentsItemsList.md#tojson-1)
- [toJsonString](ReplaceableIndentsItemsList.md#tojsonstring)
- [equals](ReplaceableIndentsItemsList.md#equals-1)
- [fromBinary](ReplaceableIndentsItemsList.md#frombinary-1)
- [fromJson](ReplaceableIndentsItemsList.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsItemsList\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:812](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L812)

## Properties

### list

• **list**: [`ReplaceableIndentItem`](ReplaceableIndentItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.ReplaceableIndentItem list = 1;

#### Defined in

[src/replaceable_indents_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L810)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:819](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L819)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:817](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L817)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsItemsList"``

#### Defined in

[src/replaceable_indents_pb.ts:818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L818)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md) \| `PlainMessage`<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

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

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md) \| `PlainMessage`<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md) \| `PlainMessage`<[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L835)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Defined in

[src/replaceable_indents_pb.ts:823](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L823)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Defined in

[src/replaceable_indents_pb.ts:827](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L827)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsItemsList`](ReplaceableIndentsItemsList.md)

#### Defined in

[src/replaceable_indents_pb.ts:831](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L831)
