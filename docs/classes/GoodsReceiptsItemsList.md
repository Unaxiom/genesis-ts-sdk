[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsItemsList

# Class: GoodsReceiptsItemsList

Describes the message consisting of the list of goods receipt items

**`Generated`**

from message Genesis.GoodsReceiptsItemsList

## Hierarchy

- `Message`<[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)\>

  ↳ **`GoodsReceiptsItemsList`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsItemsList.md#constructor)

### Properties

- [list](GoodsReceiptsItemsList.md#list)
- [fields](GoodsReceiptsItemsList.md#fields)
- [runtime](GoodsReceiptsItemsList.md#runtime)
- [typeName](GoodsReceiptsItemsList.md#typename)

### Methods

- [clone](GoodsReceiptsItemsList.md#clone)
- [equals](GoodsReceiptsItemsList.md#equals)
- [fromBinary](GoodsReceiptsItemsList.md#frombinary)
- [fromJson](GoodsReceiptsItemsList.md#fromjson)
- [fromJsonString](GoodsReceiptsItemsList.md#fromjsonstring)
- [getType](GoodsReceiptsItemsList.md#gettype)
- [toBinary](GoodsReceiptsItemsList.md#tobinary)
- [toJSON](GoodsReceiptsItemsList.md#tojson)
- [toJson](GoodsReceiptsItemsList.md#tojson-1)
- [toJsonString](GoodsReceiptsItemsList.md#tojsonstring)
- [equals](GoodsReceiptsItemsList.md#equals-1)
- [fromBinary](GoodsReceiptsItemsList.md#frombinary-1)
- [fromJson](GoodsReceiptsItemsList.md#fromjson-1)
- [fromJsonString](GoodsReceiptsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)\> |

#### Overrides

Message&lt;GoodsReceiptsItemsList\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:879](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L879)

## Properties

### list

• **list**: [`GoodsReceiptItem`](GoodsReceiptItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.GoodsReceiptItem list = 1;

#### Defined in

[src/goods_receipts_pb.ts:877](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L877)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:886](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L886)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:884](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L884)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsItemsList"``

#### Defined in

[src/goods_receipts_pb.ts:885](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L885)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md) \| `PlainMessage`<[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

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

[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md) \| `PlainMessage`<[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md) \| `PlainMessage`<[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:902](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L902)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Defined in

[src/goods_receipts_pb.ts:890](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L890)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Defined in

[src/goods_receipts_pb.ts:894](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L894)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsItemsList`](GoodsReceiptsItemsList.md)

#### Defined in

[src/goods_receipts_pb.ts:898](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L898)
