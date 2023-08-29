[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsList

# Class: GoodsReceiptsList

Describes the message consisting of the list of goods receipts

**`Generated`**

from message Genesis.GoodsReceiptsList

## Hierarchy

- `Message`<[`GoodsReceiptsList`](GoodsReceiptsList.md)\>

  ↳ **`GoodsReceiptsList`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsList.md#constructor)

### Properties

- [list](GoodsReceiptsList.md#list)
- [fields](GoodsReceiptsList.md#fields)
- [runtime](GoodsReceiptsList.md#runtime)
- [typeName](GoodsReceiptsList.md#typename)

### Methods

- [clone](GoodsReceiptsList.md#clone)
- [equals](GoodsReceiptsList.md#equals)
- [fromBinary](GoodsReceiptsList.md#frombinary)
- [fromJson](GoodsReceiptsList.md#fromjson)
- [fromJsonString](GoodsReceiptsList.md#fromjsonstring)
- [getType](GoodsReceiptsList.md#gettype)
- [toBinary](GoodsReceiptsList.md#tobinary)
- [toJSON](GoodsReceiptsList.md#tojson)
- [toJson](GoodsReceiptsList.md#tojson-1)
- [toJsonString](GoodsReceiptsList.md#tojsonstring)
- [equals](GoodsReceiptsList.md#equals-1)
- [fromBinary](GoodsReceiptsList.md#frombinary-1)
- [fromJson](GoodsReceiptsList.md#fromjson-1)
- [fromJsonString](GoodsReceiptsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsList`](GoodsReceiptsList.md)\> |

#### Overrides

Message&lt;GoodsReceiptsList\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L837)

## Properties

### list

• **list**: [`GoodsReceipt`](GoodsReceipt.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.GoodsReceipt list = 1;

#### Defined in

[src/goods_receipts_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L835)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:844](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L844)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:842](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L842)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsList"``

#### Defined in

[src/goods_receipts_pb.ts:843](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L843)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsList`](GoodsReceiptsList.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsList`](GoodsReceiptsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsList`](GoodsReceiptsList.md) \| `PlainMessage`<[`GoodsReceiptsList`](GoodsReceiptsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsList`](GoodsReceiptsList.md)

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

[`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsList`](GoodsReceiptsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsList`](GoodsReceiptsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsList`](GoodsReceiptsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsList`](GoodsReceiptsList.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsList`](GoodsReceiptsList.md) \| `PlainMessage`<[`GoodsReceiptsList`](GoodsReceiptsList.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsList`](GoodsReceiptsList.md) \| `PlainMessage`<[`GoodsReceiptsList`](GoodsReceiptsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:860](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L860)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Defined in

[src/goods_receipts_pb.ts:848](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L848)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Defined in

[src/goods_receipts_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L852)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsList`](GoodsReceiptsList.md)

#### Defined in

[src/goods_receipts_pb.ts:856](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L856)
