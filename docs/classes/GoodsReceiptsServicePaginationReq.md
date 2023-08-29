[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServicePaginationReq

# Class: GoodsReceiptsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.GoodsReceiptsServicePaginationReq

## Hierarchy

- `Message`<[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)\>

  ↳ **`GoodsReceiptsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServicePaginationReq.md#constructor)

### Properties

- [count](GoodsReceiptsServicePaginationReq.md#count)
- [isActive](GoodsReceiptsServicePaginationReq.md#isactive)
- [offset](GoodsReceiptsServicePaginationReq.md#offset)
- [sortKey](GoodsReceiptsServicePaginationReq.md#sortkey)
- [sortOrder](GoodsReceiptsServicePaginationReq.md#sortorder)
- [status](GoodsReceiptsServicePaginationReq.md#status)
- [fields](GoodsReceiptsServicePaginationReq.md#fields)
- [runtime](GoodsReceiptsServicePaginationReq.md#runtime)
- [typeName](GoodsReceiptsServicePaginationReq.md#typename)

### Methods

- [clone](GoodsReceiptsServicePaginationReq.md#clone)
- [equals](GoodsReceiptsServicePaginationReq.md#equals)
- [fromBinary](GoodsReceiptsServicePaginationReq.md#frombinary)
- [fromJson](GoodsReceiptsServicePaginationReq.md#fromjson)
- [fromJsonString](GoodsReceiptsServicePaginationReq.md#fromjsonstring)
- [getType](GoodsReceiptsServicePaginationReq.md#gettype)
- [toBinary](GoodsReceiptsServicePaginationReq.md#tobinary)
- [toJSON](GoodsReceiptsServicePaginationReq.md#tojson)
- [toJson](GoodsReceiptsServicePaginationReq.md#tojson-1)
- [toJsonString](GoodsReceiptsServicePaginationReq.md#tojsonstring)
- [equals](GoodsReceiptsServicePaginationReq.md#equals-1)
- [fromBinary](GoodsReceiptsServicePaginationReq.md#frombinary-1)
- [fromJson](GoodsReceiptsServicePaginationReq.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServicePaginationReq\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1114)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_receipts_pb.ts:1084](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1084)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goods_receipts_pb.ts:1077](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1077)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goods_receipts_pb.ts:1091](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1091)

___

### sortKey

• **sortKey**: [`GOODS_RECEIPT_SORT_KEY`](../enums/GOODS_RECEIPT_SORT_KEY.md) = `GOODS_RECEIPT_SORT_KEY.GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOODS_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_receipts_pb.ts:1105](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1105)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_receipts_pb.ts:1098](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1098)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this goods receipt

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/goods_receipts_pb.ts:1112](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1112)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:1121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1121)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:1119](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1119)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServicePaginationReq"``

#### Defined in

[src/goods_receipts_pb.ts:1120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1120)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md) \| `PlainMessage`<[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

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

[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md) \| `PlainMessage`<[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md) \| `PlainMessage`<[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:1142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1142)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1130)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1134)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationReq`](GoodsReceiptsServicePaginationReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1138](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1138)
