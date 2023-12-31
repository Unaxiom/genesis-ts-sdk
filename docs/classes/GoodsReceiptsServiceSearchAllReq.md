[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceSearchAllReq

# Class: GoodsReceiptsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.GoodsReceiptsServiceSearchAllReq

## Hierarchy

- `Message`<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\>

  ↳ **`GoodsReceiptsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](GoodsReceiptsServiceSearchAllReq.md#billingstatus)
- [count](GoodsReceiptsServiceSearchAllReq.md#count)
- [entityUuid](GoodsReceiptsServiceSearchAllReq.md#entityuuid)
- [isActive](GoodsReceiptsServiceSearchAllReq.md#isactive)
- [offset](GoodsReceiptsServiceSearchAllReq.md#offset)
- [refFrom](GoodsReceiptsServiceSearchAllReq.md#reffrom)
- [refId](GoodsReceiptsServiceSearchAllReq.md#refid)
- [searchKey](GoodsReceiptsServiceSearchAllReq.md#searchkey)
- [sortKey](GoodsReceiptsServiceSearchAllReq.md#sortkey)
- [sortOrder](GoodsReceiptsServiceSearchAllReq.md#sortorder)
- [status](GoodsReceiptsServiceSearchAllReq.md#status)
- [fields](GoodsReceiptsServiceSearchAllReq.md#fields)
- [runtime](GoodsReceiptsServiceSearchAllReq.md#runtime)
- [typeName](GoodsReceiptsServiceSearchAllReq.md#typename)

### Methods

- [clone](GoodsReceiptsServiceSearchAllReq.md#clone)
- [equals](GoodsReceiptsServiceSearchAllReq.md#equals)
- [fromBinary](GoodsReceiptsServiceSearchAllReq.md#frombinary)
- [fromJson](GoodsReceiptsServiceSearchAllReq.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceSearchAllReq.md#fromjsonstring)
- [getType](GoodsReceiptsServiceSearchAllReq.md#gettype)
- [toBinary](GoodsReceiptsServiceSearchAllReq.md#tobinary)
- [toJSON](GoodsReceiptsServiceSearchAllReq.md#tojson)
- [toJson](GoodsReceiptsServiceSearchAllReq.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceSearchAllReq.md#tojsonstring)
- [equals](GoodsReceiptsServiceSearchAllReq.md#equals-1)
- [fromBinary](GoodsReceiptsServiceSearchAllReq.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:1597](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1597)

## Properties

### billingStatus

• **billingStatus**: [`GOODS_RECEIPT_BILLING_STATUS`](../enums/GOODS_RECEIPT_BILLING_STATUS.md) = `GOODS_RECEIPT_BILLING_STATUS.GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods receipt bill

**`Generated`**

from field: Genesis.GOODS_RECEIPT_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_receipts_pb.ts:1595](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1595)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_receipts_pb.ts:1532](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1532)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/goods_receipts_pb.ts:1560](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1560)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goods_receipts_pb.ts:1525](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1525)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goods_receipts_pb.ts:1539](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1539)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/goods_receipts_pb.ts:1581](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1581)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/goods_receipts_pb.ts:1588](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1588)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/goods_receipts_pb.ts:1574](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1574)

___

### sortKey

• **sortKey**: [`GOODS_RECEIPT_SORT_KEY`](../enums/GOODS_RECEIPT_SORT_KEY.md) = `GOODS_RECEIPT_SORT_KEY.GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOODS_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_receipts_pb.ts:1553](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1553)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_receipts_pb.ts:1546](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1546)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/goods_receipts_pb.ts:1567](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1567)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:1604](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1604)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:1602](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1602)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServiceSearchAllReq"``

#### Defined in

[src/goods_receipts_pb.ts:1603](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1603)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

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

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:1630](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1630)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1618](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1618)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1622](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1622)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1626](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1626)
