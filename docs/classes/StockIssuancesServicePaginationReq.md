[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServicePaginationReq

# Class: StockIssuancesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.StockIssuancesServicePaginationReq

## Hierarchy

- `Message`<[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)\>

  ↳ **`StockIssuancesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServicePaginationReq.md#constructor)

### Properties

- [count](StockIssuancesServicePaginationReq.md#count)
- [isActive](StockIssuancesServicePaginationReq.md#isactive)
- [offset](StockIssuancesServicePaginationReq.md#offset)
- [sortKey](StockIssuancesServicePaginationReq.md#sortkey)
- [sortOrder](StockIssuancesServicePaginationReq.md#sortorder)
- [status](StockIssuancesServicePaginationReq.md#status)
- [fields](StockIssuancesServicePaginationReq.md#fields)
- [runtime](StockIssuancesServicePaginationReq.md#runtime)
- [typeName](StockIssuancesServicePaginationReq.md#typename)

### Methods

- [clone](StockIssuancesServicePaginationReq.md#clone)
- [equals](StockIssuancesServicePaginationReq.md#equals)
- [fromBinary](StockIssuancesServicePaginationReq.md#frombinary)
- [fromJson](StockIssuancesServicePaginationReq.md#fromjson)
- [fromJsonString](StockIssuancesServicePaginationReq.md#fromjsonstring)
- [getType](StockIssuancesServicePaginationReq.md#gettype)
- [toBinary](StockIssuancesServicePaginationReq.md#tobinary)
- [toJSON](StockIssuancesServicePaginationReq.md#tojson)
- [toJson](StockIssuancesServicePaginationReq.md#tojson-1)
- [toJsonString](StockIssuancesServicePaginationReq.md#tojsonstring)
- [equals](StockIssuancesServicePaginationReq.md#equals-1)
- [fromBinary](StockIssuancesServicePaginationReq.md#frombinary-1)
- [fromJson](StockIssuancesServicePaginationReq.md#fromjson-1)
- [fromJsonString](StockIssuancesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)\> |

#### Overrides

Message&lt;StockIssuancesServicePaginationReq\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:999](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L999)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/stock_issuances_pb.ts:969](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L969)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/stock_issuances_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L962)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/stock_issuances_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L976)

___

### sortKey

• **sortKey**: [`STOCK_ISSUANCE_SORT_KEY`](../enums/STOCK_ISSUANCE_SORT_KEY.md) = `STOCK_ISSUANCE_SORT_KEY.STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.STOCK_ISSUANCE_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_issuances_pb.ts:990](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L990)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/stock_issuances_pb.ts:983](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L983)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this stock issuance

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/stock_issuances_pb.ts:997](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L997)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:1006](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1006)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:1004](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1004)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesServicePaginationReq"``

#### Defined in

[src/stock_issuances_pb.ts:1005](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1005)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md) \| `PlainMessage`<[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

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

[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md) \| `PlainMessage`<[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md) \| `PlainMessage`<[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:1027](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1027)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1015](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1015)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1019)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationReq`](StockIssuancesServicePaginationReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1023](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1023)
