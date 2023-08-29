[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceItemUpdateRequest

# Class: ProductionPlansServiceItemUpdateRequest

Describes the parameters required to update an item in a production plan

**`Generated`**

from message Genesis.ProductionPlansServiceItemUpdateRequest

## Hierarchy

- `Message`<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\>

  ↳ **`ProductionPlansServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceItemUpdateRequest.md#constructor)

### Properties

- [id](ProductionPlansServiceItemUpdateRequest.md#id)
- [quantity](ProductionPlansServiceItemUpdateRequest.md#quantity)
- [userComment](ProductionPlansServiceItemUpdateRequest.md#usercomment)
- [fields](ProductionPlansServiceItemUpdateRequest.md#fields)
- [runtime](ProductionPlansServiceItemUpdateRequest.md#runtime)
- [typeName](ProductionPlansServiceItemUpdateRequest.md#typename)

### Methods

- [clone](ProductionPlansServiceItemUpdateRequest.md#clone)
- [equals](ProductionPlansServiceItemUpdateRequest.md#equals)
- [fromBinary](ProductionPlansServiceItemUpdateRequest.md#frombinary)
- [fromJson](ProductionPlansServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](ProductionPlansServiceItemUpdateRequest.md#fromjsonstring)
- [getType](ProductionPlansServiceItemUpdateRequest.md#gettype)
- [toBinary](ProductionPlansServiceItemUpdateRequest.md#tobinary)
- [toJSON](ProductionPlansServiceItemUpdateRequest.md#tojson)
- [toJson](ProductionPlansServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](ProductionPlansServiceItemUpdateRequest.md#tojsonstring)
- [equals](ProductionPlansServiceItemUpdateRequest.md#equals-1)
- [fromBinary](ProductionPlansServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](ProductionPlansServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;ProductionPlansServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:740](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L740)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/production_plans_pb.ts:731](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L731)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/production_plans_pb.ts:738](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L738)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_plans_pb.ts:724](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L724)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L747)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:745](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L745)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServiceItemUpdateRequest"``

#### Defined in

[src/production_plans_pb.ts:746](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L746)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

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

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:765](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L765)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Defined in

[src/production_plans_pb.ts:753](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L753)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Defined in

[src/production_plans_pb.ts:757](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L757)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Defined in

[src/production_plans_pb.ts:761](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L761)
