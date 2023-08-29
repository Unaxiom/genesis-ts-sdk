[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReceiptsServiceEntityPaginationReq

# Class: SalesReceiptsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.SalesReceiptsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)\>

  ↳ **`SalesReceiptsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](SalesReceiptsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](SalesReceiptsServiceEntityPaginationReq.md#count)
- [entityUuid](SalesReceiptsServiceEntityPaginationReq.md#entityuuid)
- [isActive](SalesReceiptsServiceEntityPaginationReq.md#isactive)
- [offset](SalesReceiptsServiceEntityPaginationReq.md#offset)
- [sortKey](SalesReceiptsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](SalesReceiptsServiceEntityPaginationReq.md#sortorder)
- [fields](SalesReceiptsServiceEntityPaginationReq.md#fields)
- [runtime](SalesReceiptsServiceEntityPaginationReq.md#runtime)
- [typeName](SalesReceiptsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](SalesReceiptsServiceEntityPaginationReq.md#clone)
- [equals](SalesReceiptsServiceEntityPaginationReq.md#equals)
- [fromBinary](SalesReceiptsServiceEntityPaginationReq.md#frombinary)
- [fromJson](SalesReceiptsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](SalesReceiptsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](SalesReceiptsServiceEntityPaginationReq.md#gettype)
- [toBinary](SalesReceiptsServiceEntityPaginationReq.md#tobinary)
- [toJSON](SalesReceiptsServiceEntityPaginationReq.md#tojson)
- [toJson](SalesReceiptsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](SalesReceiptsServiceEntityPaginationReq.md#tojsonstring)
- [equals](SalesReceiptsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](SalesReceiptsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](SalesReceiptsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](SalesReceiptsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceiptsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;SalesReceiptsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/sales_receipts_pb.ts:794](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L794)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_receipts_pb.ts:764](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L764)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/sales_receipts_pb.ts:792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L792)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_receipts_pb.ts:757](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L757)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_receipts_pb.ts:771](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L771)

___

### sortKey

• **sortKey**: [`SALE_RECEIPT_SORT_KEY`](../enums/SALE_RECEIPT_SORT_KEY.md) = `SALE_RECEIPT_SORT_KEY.SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_receipts_pb.ts:785](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L785)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_receipts_pb.ts:778](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L778)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts_pb.ts:801](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L801)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts_pb.ts:799](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L799)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReceiptsServiceEntityPaginationReq"``

#### Defined in

[src/sales_receipts_pb.ts:800](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L800)

## Methods

### clone

▸ **clone**(): [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md) \| `PlainMessage`<[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

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

[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md) \| `PlainMessage`<[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md) \| `PlainMessage`<[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts_pb.ts:822](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L822)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Defined in

[src/sales_receipts_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L810)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Defined in

[src/sales_receipts_pb.ts:814](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L814)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceEntityPaginationReq`](SalesReceiptsServiceEntityPaginationReq.md)

#### Defined in

[src/sales_receipts_pb.ts:818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L818)
