[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceAutofillRequest

# Class: GoodsReceiptsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Genesis.GoodsReceiptsServiceAutofillRequest

## Hierarchy

- `Message`<[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)\>

  ↳ **`GoodsReceiptsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceAutofillRequest.md#constructor)

### Properties

- [id](GoodsReceiptsServiceAutofillRequest.md#id)
- [userComment](GoodsReceiptsServiceAutofillRequest.md#usercomment)
- [fields](GoodsReceiptsServiceAutofillRequest.md#fields)
- [runtime](GoodsReceiptsServiceAutofillRequest.md#runtime)
- [typeName](GoodsReceiptsServiceAutofillRequest.md#typename)

### Methods

- [clone](GoodsReceiptsServiceAutofillRequest.md#clone)
- [equals](GoodsReceiptsServiceAutofillRequest.md#equals)
- [fromBinary](GoodsReceiptsServiceAutofillRequest.md#frombinary)
- [fromJson](GoodsReceiptsServiceAutofillRequest.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceAutofillRequest.md#fromjsonstring)
- [getType](GoodsReceiptsServiceAutofillRequest.md#gettype)
- [toBinary](GoodsReceiptsServiceAutofillRequest.md#tobinary)
- [toJSON](GoodsReceiptsServiceAutofillRequest.md#tojson)
- [toJson](GoodsReceiptsServiceAutofillRequest.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceAutofillRequest.md#tojsonstring)
- [equals](GoodsReceiptsServiceAutofillRequest.md#equals-1)
- [fromBinary](GoodsReceiptsServiceAutofillRequest.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceAutofillRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:370](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L370)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/goods_receipts_pb.ts:368](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L368)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_receipts_pb.ts:361](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L361)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:377](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L377)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:375](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L375)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServiceAutofillRequest"``

#### Defined in

[src/goods_receipts_pb.ts:376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L376)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

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

[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L394)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:382](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L382)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:386](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L386)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAutofillRequest`](GoodsReceiptsServiceAutofillRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L390)
