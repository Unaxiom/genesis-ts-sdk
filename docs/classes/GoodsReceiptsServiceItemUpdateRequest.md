[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceItemUpdateRequest

# Class: GoodsReceiptsServiceItemUpdateRequest

Describes the parameters required to update an item in a goods receipt

**`Generated`**

from message Genesis.GoodsReceiptsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)\>

  ↳ **`GoodsReceiptsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](GoodsReceiptsServiceItemUpdateRequest.md#id)
- [internalQuantity](GoodsReceiptsServiceItemUpdateRequest.md#internalquantity)
- [userComment](GoodsReceiptsServiceItemUpdateRequest.md#usercomment)
- [vendorQuantity](GoodsReceiptsServiceItemUpdateRequest.md#vendorquantity)
- [vendorUomId](GoodsReceiptsServiceItemUpdateRequest.md#vendoruomid)
- [fields](GoodsReceiptsServiceItemUpdateRequest.md#fields)
- [runtime](GoodsReceiptsServiceItemUpdateRequest.md#runtime)
- [typeName](GoodsReceiptsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](GoodsReceiptsServiceItemUpdateRequest.md#clone)
- [equals](GoodsReceiptsServiceItemUpdateRequest.md#equals)
- [fromBinary](GoodsReceiptsServiceItemUpdateRequest.md#frombinary)
- [fromJson](GoodsReceiptsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](GoodsReceiptsServiceItemUpdateRequest.md#gettype)
- [toBinary](GoodsReceiptsServiceItemUpdateRequest.md#tobinary)
- [toJSON](GoodsReceiptsServiceItemUpdateRequest.md#tojson)
- [toJson](GoodsReceiptsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceItemUpdateRequest.md#tojsonstring)
- [equals](GoodsReceiptsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](GoodsReceiptsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:677](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L677)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/goods_receipts_pb.ts:654](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L654)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/goods_receipts_pb.ts:661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L661)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_receipts_pb.ts:647](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L647)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: int64 vendor_quantity = 14;

#### Defined in

[src/goods_receipts_pb.ts:675](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L675)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: int64 vendor_uom_id = 13;

#### Defined in

[src/goods_receipts_pb.ts:668](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L668)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:684](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L684)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:682](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L682)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServiceItemUpdateRequest"``

#### Defined in

[src/goods_receipts_pb.ts:683](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L683)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

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

[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:704](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L704)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:692](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L692)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:696](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L696)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceItemUpdateRequest`](GoodsReceiptsServiceItemUpdateRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:700](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L700)
