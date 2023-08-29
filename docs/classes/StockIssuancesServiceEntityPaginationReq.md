[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceEntityPaginationReq

# Class: StockIssuancesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.StockIssuancesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)\>

  ↳ **`StockIssuancesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](StockIssuancesServiceEntityPaginationReq.md#count)
- [entityUuid](StockIssuancesServiceEntityPaginationReq.md#entityuuid)
- [isActive](StockIssuancesServiceEntityPaginationReq.md#isactive)
- [offset](StockIssuancesServiceEntityPaginationReq.md#offset)
- [sortKey](StockIssuancesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](StockIssuancesServiceEntityPaginationReq.md#sortorder)
- [fields](StockIssuancesServiceEntityPaginationReq.md#fields)
- [runtime](StockIssuancesServiceEntityPaginationReq.md#runtime)
- [typeName](StockIssuancesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](StockIssuancesServiceEntityPaginationReq.md#clone)
- [equals](StockIssuancesServiceEntityPaginationReq.md#equals)
- [fromBinary](StockIssuancesServiceEntityPaginationReq.md#frombinary)
- [fromJson](StockIssuancesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](StockIssuancesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](StockIssuancesServiceEntityPaginationReq.md#gettype)
- [toBinary](StockIssuancesServiceEntityPaginationReq.md#tobinary)
- [toJSON](StockIssuancesServiceEntityPaginationReq.md#tojson)
- [toJson](StockIssuancesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](StockIssuancesServiceEntityPaginationReq.md#tojsonstring)
- [equals](StockIssuancesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](StockIssuancesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](StockIssuancesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;StockIssuancesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:1147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1147)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/stock_issuances_pb.ts:1117](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1117)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/stock_issuances_pb.ts:1145](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1145)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/stock_issuances_pb.ts:1110](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1110)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/stock_issuances_pb.ts:1124](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1124)

___

### sortKey

• **sortKey**: [`STOCK_ISSUANCE_SORT_KEY`](../enums/STOCK_ISSUANCE_SORT_KEY.md) = `STOCK_ISSUANCE_SORT_KEY.STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.STOCK_ISSUANCE_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_issuances_pb.ts:1138](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1138)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/stock_issuances_pb.ts:1131](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1131)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:1154](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1154)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:1152](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1152)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesServiceEntityPaginationReq"``

#### Defined in

[src/stock_issuances_pb.ts:1153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1153)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md) \| `PlainMessage`<[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

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

[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md) \| `PlainMessage`<[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md) \| `PlainMessage`<[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:1175](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1175)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1163)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1167)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceEntityPaginationReq`](StockIssuancesServiceEntityPaginationReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1171)
