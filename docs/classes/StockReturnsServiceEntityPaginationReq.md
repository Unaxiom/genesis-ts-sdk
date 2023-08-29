[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServiceEntityPaginationReq

# Class: StockReturnsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.StockReturnsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)\>

  ↳ **`StockReturnsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](StockReturnsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](StockReturnsServiceEntityPaginationReq.md#count)
- [entityUuid](StockReturnsServiceEntityPaginationReq.md#entityuuid)
- [isActive](StockReturnsServiceEntityPaginationReq.md#isactive)
- [offset](StockReturnsServiceEntityPaginationReq.md#offset)
- [sortKey](StockReturnsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](StockReturnsServiceEntityPaginationReq.md#sortorder)
- [fields](StockReturnsServiceEntityPaginationReq.md#fields)
- [runtime](StockReturnsServiceEntityPaginationReq.md#runtime)
- [typeName](StockReturnsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](StockReturnsServiceEntityPaginationReq.md#clone)
- [equals](StockReturnsServiceEntityPaginationReq.md#equals)
- [fromBinary](StockReturnsServiceEntityPaginationReq.md#frombinary)
- [fromJson](StockReturnsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](StockReturnsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](StockReturnsServiceEntityPaginationReq.md#gettype)
- [toBinary](StockReturnsServiceEntityPaginationReq.md#tobinary)
- [toJSON](StockReturnsServiceEntityPaginationReq.md#tojson)
- [toJson](StockReturnsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](StockReturnsServiceEntityPaginationReq.md#tojsonstring)
- [equals](StockReturnsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](StockReturnsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](StockReturnsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](StockReturnsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;StockReturnsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/stock_returns_pb.ts:1113](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1113)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/stock_returns_pb.ts:1083](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1083)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/stock_returns_pb.ts:1111](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1111)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/stock_returns_pb.ts:1076](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1076)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/stock_returns_pb.ts:1090](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1090)

___

### sortKey

• **sortKey**: [`STOCK_RETURN_SORT_KEY`](../enums/STOCK_RETURN_SORT_KEY.md) = `STOCK_RETURN_SORT_KEY.STOCK_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.STOCK_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_returns_pb.ts:1104](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1104)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/stock_returns_pb.ts:1097](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1097)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns_pb.ts:1120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1120)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns_pb.ts:1118](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1118)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockReturnsServiceEntityPaginationReq"``

#### Defined in

[src/stock_returns_pb.ts:1119](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1119)

## Methods

### clone

▸ **clone**(): [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md) \| `PlainMessage`<[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

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

[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md) \| `PlainMessage`<[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md) \| `PlainMessage`<[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns_pb.ts:1141](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1141)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Defined in

[src/stock_returns_pb.ts:1129](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1129)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Defined in

[src/stock_returns_pb.ts:1133](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1133)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceEntityPaginationReq`](StockReturnsServiceEntityPaginationReq.md)

#### Defined in

[src/stock_returns_pb.ts:1137](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1137)
