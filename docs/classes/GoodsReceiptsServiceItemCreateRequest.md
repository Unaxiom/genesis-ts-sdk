[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceItemCreateRequest

# Class: GoodsReceiptsServiceItemCreateRequest

Describes the parameters required to add an item to a goods receipt

**`Generated`**

from message Genesis.GoodsReceiptsServiceItemCreateRequest

## Hierarchy

- `Message`<[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)\>

  ↳ **`GoodsReceiptsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](GoodsReceiptsServiceItemCreateRequest.md#familyid)
- [goodsReceiptId](GoodsReceiptsServiceItemCreateRequest.md#goodsreceiptid)
- [internalQuantity](GoodsReceiptsServiceItemCreateRequest.md#internalquantity)
- [userComment](GoodsReceiptsServiceItemCreateRequest.md#usercomment)
- [vendorQuantity](GoodsReceiptsServiceItemCreateRequest.md#vendorquantity)
- [vendorUomId](GoodsReceiptsServiceItemCreateRequest.md#vendoruomid)
- [fields](GoodsReceiptsServiceItemCreateRequest.md#fields)
- [runtime](GoodsReceiptsServiceItemCreateRequest.md#runtime)
- [typeName](GoodsReceiptsServiceItemCreateRequest.md#typename)

### Methods

- [clone](GoodsReceiptsServiceItemCreateRequest.md#clone)
- [equals](GoodsReceiptsServiceItemCreateRequest.md#equals)
- [fromBinary](GoodsReceiptsServiceItemCreateRequest.md#frombinary)
- [fromJson](GoodsReceiptsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceItemCreateRequest.md#fromjsonstring)
- [getType](GoodsReceiptsServiceItemCreateRequest.md#gettype)
- [toBinary](GoodsReceiptsServiceItemCreateRequest.md#tobinary)
- [toJSON](GoodsReceiptsServiceItemCreateRequest.md#tojson)
- [toJson](GoodsReceiptsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceItemCreateRequest.md#tojsonstring)
- [equals](GoodsReceiptsServiceItemCreateRequest.md#equals-1)
- [fromBinary](GoodsReceiptsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:602](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L602)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/goods_receipts_pb.ts:579](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L579)

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: int64 goods_receipt_id = 10;

#### Defined in

[src/goods_receipts_pb.ts:572](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L572)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/goods_receipts_pb.ts:586](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L586)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_receipts_pb.ts:565](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L565)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: int64 vendor_quantity = 14;

#### Defined in

[src/goods_receipts_pb.ts:600](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L600)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: int64 vendor_uom_id = 13;

#### Defined in

[src/goods_receipts_pb.ts:593](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L593)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:609](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L609)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:607](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L607)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServiceItemCreateRequest"``

#### Defined in

[src/goods_receipts_pb.ts:608](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L608)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

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

[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:630](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L630)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:618](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L618)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:622](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L622)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemCreateRequest`](GoodsReceiptsServiceItemCreateRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:626](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L626)
