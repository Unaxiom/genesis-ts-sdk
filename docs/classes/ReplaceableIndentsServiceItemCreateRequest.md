[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceItemCreateRequest

# Class: ReplaceableIndentsServiceItemCreateRequest

Describes the parameters required to add an item to a replaceable indent

**`Generated`**

from message Genesis.ReplaceableIndentsServiceItemCreateRequest

## Hierarchy

- `Message`<[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)\>

  ↳ **`ReplaceableIndentsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](ReplaceableIndentsServiceItemCreateRequest.md#familyid)
- [internalQuantity](ReplaceableIndentsServiceItemCreateRequest.md#internalquantity)
- [replaceableIndentId](ReplaceableIndentsServiceItemCreateRequest.md#replaceableindentid)
- [userComment](ReplaceableIndentsServiceItemCreateRequest.md#usercomment)
- [fields](ReplaceableIndentsServiceItemCreateRequest.md#fields)
- [runtime](ReplaceableIndentsServiceItemCreateRequest.md#runtime)
- [typeName](ReplaceableIndentsServiceItemCreateRequest.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceItemCreateRequest.md#clone)
- [equals](ReplaceableIndentsServiceItemCreateRequest.md#equals)
- [fromBinary](ReplaceableIndentsServiceItemCreateRequest.md#frombinary)
- [fromJson](ReplaceableIndentsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceItemCreateRequest.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceItemCreateRequest.md#gettype)
- [toBinary](ReplaceableIndentsServiceItemCreateRequest.md#tobinary)
- [toJSON](ReplaceableIndentsServiceItemCreateRequest.md#tojson)
- [toJson](ReplaceableIndentsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceItemCreateRequest.md#tojsonstring)
- [equals](ReplaceableIndentsServiceItemCreateRequest.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L569)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/replaceable_indents_pb.ts:560](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L560)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity required

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/replaceable_indents_pb.ts:567](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L567)

___

### replaceableIndentId

• **replaceableIndentId**: `bigint` = `protoInt64.zero`

Stores the replaceable indent ID

**`Generated`**

from field: int64 replaceable_indent_id = 10;

#### Defined in

[src/replaceable_indents_pb.ts:553](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L553)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/replaceable_indents_pb.ts:546](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L546)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L576)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:574](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L574)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServiceItemCreateRequest"``

#### Defined in

[src/replaceable_indents_pb.ts:575](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L575)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

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

[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:595](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L595)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L583)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:587](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L587)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceItemCreateRequest`](ReplaceableIndentsServiceItemCreateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:591](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L591)
