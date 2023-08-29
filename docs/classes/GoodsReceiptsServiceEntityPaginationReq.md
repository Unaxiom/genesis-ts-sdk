[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceEntityPaginationReq

# Class: GoodsReceiptsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.GoodsReceiptsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)\>

  ↳ **`GoodsReceiptsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](GoodsReceiptsServiceEntityPaginationReq.md#count)
- [entityUuid](GoodsReceiptsServiceEntityPaginationReq.md#entityuuid)
- [isActive](GoodsReceiptsServiceEntityPaginationReq.md#isactive)
- [offset](GoodsReceiptsServiceEntityPaginationReq.md#offset)
- [sortKey](GoodsReceiptsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](GoodsReceiptsServiceEntityPaginationReq.md#sortorder)
- [fields](GoodsReceiptsServiceEntityPaginationReq.md#fields)
- [runtime](GoodsReceiptsServiceEntityPaginationReq.md#runtime)
- [typeName](GoodsReceiptsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](GoodsReceiptsServiceEntityPaginationReq.md#clone)
- [equals](GoodsReceiptsServiceEntityPaginationReq.md#equals)
- [fromBinary](GoodsReceiptsServiceEntityPaginationReq.md#frombinary)
- [fromJson](GoodsReceiptsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](GoodsReceiptsServiceEntityPaginationReq.md#gettype)
- [toBinary](GoodsReceiptsServiceEntityPaginationReq.md#tobinary)
- [toJSON](GoodsReceiptsServiceEntityPaginationReq.md#tojson)
- [toJson](GoodsReceiptsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceEntityPaginationReq.md#tojsonstring)
- [equals](GoodsReceiptsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](GoodsReceiptsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:1262](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1262)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_receipts_pb.ts:1232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1232)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/goods_receipts_pb.ts:1260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1260)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goods_receipts_pb.ts:1225](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1225)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goods_receipts_pb.ts:1239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1239)

___

### sortKey

• **sortKey**: [`GOODS_RECEIPT_SORT_KEY`](../enums/GOODS_RECEIPT_SORT_KEY.md) = `GOODS_RECEIPT_SORT_KEY.GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOODS_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_receipts_pb.ts:1253](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1253)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_receipts_pb.ts:1246](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1246)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:1269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1269)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:1267](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1267)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServiceEntityPaginationReq"``

#### Defined in

[src/goods_receipts_pb.ts:1268](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1268)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

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

[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:1290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1290)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1278](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1278)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1282](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1282)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceEntityPaginationReq`](GoodsReceiptsServiceEntityPaginationReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1286](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1286)
