[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceItemUpdateRequest

# Class: ReplaceableIndentsServiceItemUpdateRequest

Describes the parameters required to update an item in a replaceable indent

**`Generated`**

from message Genesis.ReplaceableIndentsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)\>

  ↳ **`ReplaceableIndentsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](ReplaceableIndentsServiceItemUpdateRequest.md#id)
- [internalQuantity](ReplaceableIndentsServiceItemUpdateRequest.md#internalquantity)
- [userComment](ReplaceableIndentsServiceItemUpdateRequest.md#usercomment)
- [fields](ReplaceableIndentsServiceItemUpdateRequest.md#fields)
- [runtime](ReplaceableIndentsServiceItemUpdateRequest.md#runtime)
- [typeName](ReplaceableIndentsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceItemUpdateRequest.md#clone)
- [equals](ReplaceableIndentsServiceItemUpdateRequest.md#equals)
- [fromBinary](ReplaceableIndentsServiceItemUpdateRequest.md#frombinary)
- [fromJson](ReplaceableIndentsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceItemUpdateRequest.md#gettype)
- [toBinary](ReplaceableIndentsServiceItemUpdateRequest.md#tobinary)
- [toJSON](ReplaceableIndentsServiceItemUpdateRequest.md#tojson)
- [toJson](ReplaceableIndentsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceItemUpdateRequest.md#tojsonstring)
- [equals](ReplaceableIndentsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L628)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/replaceable_indents_pb.ts:619](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L619)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity required

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/replaceable_indents_pb.ts:626](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L626)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/replaceable_indents_pb.ts:612](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L612)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L635)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:633](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L633)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServiceItemUpdateRequest"``

#### Defined in

[src/replaceable_indents_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L634)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

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

[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:653](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L653)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:641](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L641)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:645](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L645)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemUpdateRequest`](ReplaceableIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:649](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L649)
