[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceAutofillRequest

# Class: GoodsDispatchesServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Genesis.GoodsDispatchesServiceAutofillRequest

## Hierarchy

- `Message`<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

  ↳ **`GoodsDispatchesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceAutofillRequest.md#constructor)

### Properties

- [id](GoodsDispatchesServiceAutofillRequest.md#id)
- [splitIntoUnitQuantity](GoodsDispatchesServiceAutofillRequest.md#splitintounitquantity)
- [userComment](GoodsDispatchesServiceAutofillRequest.md#usercomment)
- [fields](GoodsDispatchesServiceAutofillRequest.md#fields)
- [runtime](GoodsDispatchesServiceAutofillRequest.md#runtime)
- [typeName](GoodsDispatchesServiceAutofillRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceAutofillRequest.md#clone)
- [equals](GoodsDispatchesServiceAutofillRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceAutofillRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceAutofillRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceAutofillRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceAutofillRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceAutofillRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceAutofillRequest.md#tojson)
- [toJson](GoodsDispatchesServiceAutofillRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceAutofillRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceAutofillRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceAutofillRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceAutofillRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

#### Overrides

Message&lt;GoodsDispatchesServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L329)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/goods_dispatches_pb.ts:320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L320)

___

### splitIntoUnitQuantity

• **splitIntoUnitQuantity**: `boolean` = `false`

Stores if the inventory needs to be split into unit quantities

**`Generated`**

from field: bool split_into_unit_quantity = 10;

#### Defined in

[src/goods_dispatches_pb.ts:327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L327)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_dispatches_pb.ts:313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L313)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L336)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:334](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L334)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesServiceAutofillRequest"``

#### Defined in

[src/goods_dispatches_pb.ts:335](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L335)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

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

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:354](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L354)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:342](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L342)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:346](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L346)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L350)
