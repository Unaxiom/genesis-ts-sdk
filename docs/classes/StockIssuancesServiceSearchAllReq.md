[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceSearchAllReq

# Class: StockIssuancesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.StockIssuancesServiceSearchAllReq

## Hierarchy

- `Message`<[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)\>

  ↳ **`StockIssuancesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceSearchAllReq.md#constructor)

### Properties

- [count](StockIssuancesServiceSearchAllReq.md#count)
- [entityUuid](StockIssuancesServiceSearchAllReq.md#entityuuid)
- [isActive](StockIssuancesServiceSearchAllReq.md#isactive)
- [offset](StockIssuancesServiceSearchAllReq.md#offset)
- [refFrom](StockIssuancesServiceSearchAllReq.md#reffrom)
- [refId](StockIssuancesServiceSearchAllReq.md#refid)
- [searchKey](StockIssuancesServiceSearchAllReq.md#searchkey)
- [sortKey](StockIssuancesServiceSearchAllReq.md#sortkey)
- [sortOrder](StockIssuancesServiceSearchAllReq.md#sortorder)
- [status](StockIssuancesServiceSearchAllReq.md#status)
- [fields](StockIssuancesServiceSearchAllReq.md#fields)
- [runtime](StockIssuancesServiceSearchAllReq.md#runtime)
- [typeName](StockIssuancesServiceSearchAllReq.md#typename)

### Methods

- [clone](StockIssuancesServiceSearchAllReq.md#clone)
- [equals](StockIssuancesServiceSearchAllReq.md#equals)
- [fromBinary](StockIssuancesServiceSearchAllReq.md#frombinary)
- [fromJson](StockIssuancesServiceSearchAllReq.md#fromjson)
- [fromJsonString](StockIssuancesServiceSearchAllReq.md#fromjsonstring)
- [getType](StockIssuancesServiceSearchAllReq.md#gettype)
- [toBinary](StockIssuancesServiceSearchAllReq.md#tobinary)
- [toJSON](StockIssuancesServiceSearchAllReq.md#tojson)
- [toJson](StockIssuancesServiceSearchAllReq.md#tojson-1)
- [toJsonString](StockIssuancesServiceSearchAllReq.md#tojsonstring)
- [equals](StockIssuancesServiceSearchAllReq.md#equals-1)
- [fromBinary](StockIssuancesServiceSearchAllReq.md#frombinary-1)
- [fromJson](StockIssuancesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;StockIssuancesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:1443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1443)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/stock_issuances_pb.ts:1385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1385)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/stock_issuances_pb.ts:1413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1413)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/stock_issuances_pb.ts:1378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1378)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/stock_issuances_pb.ts:1392](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1392)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/stock_issuances_pb.ts:1434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1434)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/stock_issuances_pb.ts:1441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1441)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/stock_issuances_pb.ts:1427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1427)

___

### sortKey

• **sortKey**: [`STOCK_ISSUANCE_SORT_KEY`](../enums/STOCK_ISSUANCE_SORT_KEY.md) = `STOCK_ISSUANCE_SORT_KEY.STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.STOCK_ISSUANCE_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_issuances_pb.ts:1406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1406)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/stock_issuances_pb.ts:1399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1399)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/stock_issuances_pb.ts:1420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1420)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:1450](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1450)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:1448](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1448)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesServiceSearchAllReq"``

#### Defined in

[src/stock_issuances_pb.ts:1449](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1449)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md) \| `PlainMessage`<[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

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

[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md) \| `PlainMessage`<[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md) \| `PlainMessage`<[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:1475](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1475)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1463](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1463)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1467](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1467)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceSearchAllReq`](StockIssuancesServiceSearchAllReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1471](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1471)
