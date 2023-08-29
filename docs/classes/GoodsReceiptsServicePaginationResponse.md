[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServicePaginationResponse

# Class: GoodsReceiptsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.GoodsReceiptsServicePaginationResponse

## Hierarchy

- `Message`<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\>

  ↳ **`GoodsReceiptsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServicePaginationResponse.md#constructor)

### Properties

- [count](GoodsReceiptsServicePaginationResponse.md#count)
- [offset](GoodsReceiptsServicePaginationResponse.md#offset)
- [payload](GoodsReceiptsServicePaginationResponse.md#payload)
- [total](GoodsReceiptsServicePaginationResponse.md#total)
- [fields](GoodsReceiptsServicePaginationResponse.md#fields)
- [runtime](GoodsReceiptsServicePaginationResponse.md#runtime)
- [typeName](GoodsReceiptsServicePaginationResponse.md#typename)

### Methods

- [clone](GoodsReceiptsServicePaginationResponse.md#clone)
- [equals](GoodsReceiptsServicePaginationResponse.md#equals)
- [fromBinary](GoodsReceiptsServicePaginationResponse.md#frombinary)
- [fromJson](GoodsReceiptsServicePaginationResponse.md#fromjson)
- [fromJsonString](GoodsReceiptsServicePaginationResponse.md#fromjsonstring)
- [getType](GoodsReceiptsServicePaginationResponse.md#gettype)
- [toBinary](GoodsReceiptsServicePaginationResponse.md#tobinary)
- [toJSON](GoodsReceiptsServicePaginationResponse.md#tojson)
- [toJson](GoodsReceiptsServicePaginationResponse.md#tojson-1)
- [toJsonString](GoodsReceiptsServicePaginationResponse.md#tojsonstring)
- [equals](GoodsReceiptsServicePaginationResponse.md#equals-1)
- [fromBinary](GoodsReceiptsServicePaginationResponse.md#frombinary-1)
- [fromJson](GoodsReceiptsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:1182](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1182)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/goods_receipts_pb.ts:1159](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1159)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/goods_receipts_pb.ts:1166](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1166)

___

### payload

• **payload**: [`GoodsReceipt`](GoodsReceipt.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.GoodsReceipt payload = 4;

#### Defined in

[src/goods_receipts_pb.ts:1180](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1180)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/goods_receipts_pb.ts:1173](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1173)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:1189](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1189)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:1187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1187)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServicePaginationResponse"``

#### Defined in

[src/goods_receipts_pb.ts:1188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1188)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md) \| `PlainMessage`<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

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

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md) \| `PlainMessage`<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md) \| `PlainMessage`<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:1208](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1208)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Defined in

[src/goods_receipts_pb.ts:1196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1196)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Defined in

[src/goods_receipts_pb.ts:1200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1200)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Defined in

[src/goods_receipts_pb.ts:1204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1204)
