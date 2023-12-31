[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptItem

# Class: GoodsReceiptItem

Describes the parameters that constitute an item associated to a goods receipt

**`Generated`**

from message Genesis.GoodsReceiptItem

## Hierarchy

- `Message`<[`GoodsReceiptItem`](GoodsReceiptItem.md)\>

  ↳ **`GoodsReceiptItem`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptItem.md#constructor)

### Properties

- [approvalMetadata](GoodsReceiptItem.md#approvalmetadata)
- [entityUuid](GoodsReceiptItem.md#entityuuid)
- [familyId](GoodsReceiptItem.md#familyid)
- [goodsReceiptId](GoodsReceiptItem.md#goodsreceiptid)
- [internalQuantity](GoodsReceiptItem.md#internalquantity)
- [metadata](GoodsReceiptItem.md#metadata)
- [needApproval](GoodsReceiptItem.md#needapproval)
- [userComment](GoodsReceiptItem.md#usercomment)
- [vendorQuantity](GoodsReceiptItem.md#vendorquantity)
- [vendorUomId](GoodsReceiptItem.md#vendoruomid)
- [fields](GoodsReceiptItem.md#fields)
- [runtime](GoodsReceiptItem.md#runtime)
- [typeName](GoodsReceiptItem.md#typename)

### Methods

- [clone](GoodsReceiptItem.md#clone)
- [equals](GoodsReceiptItem.md#equals)
- [fromBinary](GoodsReceiptItem.md#frombinary)
- [fromJson](GoodsReceiptItem.md#fromjson)
- [fromJsonString](GoodsReceiptItem.md#fromjsonstring)
- [getType](GoodsReceiptItem.md#gettype)
- [toBinary](GoodsReceiptItem.md#tobinary)
- [toJSON](GoodsReceiptItem.md#tojson)
- [toJson](GoodsReceiptItem.md#tojson-1)
- [toJsonString](GoodsReceiptItem.md#tojsonstring)
- [equals](GoodsReceiptItem.md#equals-1)
- [fromBinary](GoodsReceiptItem.md#frombinary-1)
- [fromJson](GoodsReceiptItem.md#fromjson-1)
- [fromJsonString](GoodsReceiptItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptItem`](GoodsReceiptItem.md)\> |

#### Overrides

Message&lt;GoodsReceiptItem\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:786](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L786)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/goods_receipts_pb.ts:735](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L735)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/goods_receipts_pb.ts:721](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L721)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/goods_receipts_pb.ts:763](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L763)

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: int64 goods_receipt_id = 10;

#### Defined in

[src/goods_receipts_pb.ts:756](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L756)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/goods_receipts_pb.ts:770](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L770)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this goods receipt

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/goods_receipts_pb.ts:728](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L728)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/goods_receipts_pb.ts:742](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L742)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/goods_receipts_pb.ts:749](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L749)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: int64 vendor_quantity = 14;

#### Defined in

[src/goods_receipts_pb.ts:784](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L784)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: int64 vendor_uom_id = 13;

#### Defined in

[src/goods_receipts_pb.ts:777](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L777)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L793)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:791](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L791)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptItem"``

#### Defined in

[src/goods_receipts_pb.ts:792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L792)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptItem`](GoodsReceiptItem.md)

Create a deep copy.

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptItem`](GoodsReceiptItem.md) \| `PlainMessage`<[`GoodsReceiptItem`](GoodsReceiptItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

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

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptItem`](GoodsReceiptItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptItem`](GoodsReceiptItem.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptItem`](GoodsReceiptItem.md) \| `PlainMessage`<[`GoodsReceiptItem`](GoodsReceiptItem.md)\> |
| `b` | `undefined` \| [`GoodsReceiptItem`](GoodsReceiptItem.md) \| `PlainMessage`<[`GoodsReceiptItem`](GoodsReceiptItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L818)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Defined in

[src/goods_receipts_pb.ts:806](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L806)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Defined in

[src/goods_receipts_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L810)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Defined in

[src/goods_receipts_pb.ts:814](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L814)
