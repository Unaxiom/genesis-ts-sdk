[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceItemUpdateRequest

# Class: ProductionIndentsServiceItemUpdateRequest

Describes the parameters required to update an item in a production indent

**`Generated`**

from message Genesis.ProductionIndentsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)\>

  ↳ **`ProductionIndentsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](ProductionIndentsServiceItemUpdateRequest.md#id)
- [internalQuantity](ProductionIndentsServiceItemUpdateRequest.md#internalquantity)
- [userComment](ProductionIndentsServiceItemUpdateRequest.md#usercomment)
- [fields](ProductionIndentsServiceItemUpdateRequest.md#fields)
- [runtime](ProductionIndentsServiceItemUpdateRequest.md#runtime)
- [typeName](ProductionIndentsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](ProductionIndentsServiceItemUpdateRequest.md#clone)
- [equals](ProductionIndentsServiceItemUpdateRequest.md#equals)
- [fromBinary](ProductionIndentsServiceItemUpdateRequest.md#frombinary)
- [fromJson](ProductionIndentsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](ProductionIndentsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](ProductionIndentsServiceItemUpdateRequest.md#gettype)
- [toBinary](ProductionIndentsServiceItemUpdateRequest.md#tobinary)
- [toJSON](ProductionIndentsServiceItemUpdateRequest.md#tojson)
- [toJson](ProductionIndentsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](ProductionIndentsServiceItemUpdateRequest.md#tojsonstring)
- [equals](ProductionIndentsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](ProductionIndentsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](ProductionIndentsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;ProductionIndentsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:636](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L636)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/production_indents_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L627)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity required

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/production_indents_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L634)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_indents_pb.ts:620](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L620)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:643](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L643)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:641](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L641)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsServiceItemUpdateRequest"``

#### Defined in

[src/production_indents_pb.ts:642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L642)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

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

[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L661)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/production_indents_pb.ts:649](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L649)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/production_indents_pb.ts:653](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L653)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemUpdateRequest`](ProductionIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/production_indents_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L657)
