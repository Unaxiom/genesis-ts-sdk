[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReceiptsServiceSearchAllReq

# Class: SalesReceiptsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.SalesReceiptsServiceSearchAllReq

## Hierarchy

- `Message`<[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)\>

  ↳ **`SalesReceiptsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesReceiptsServiceSearchAllReq.md#constructor)

### Properties

- [count](SalesReceiptsServiceSearchAllReq.md#count)
- [entityUuid](SalesReceiptsServiceSearchAllReq.md#entityuuid)
- [isActive](SalesReceiptsServiceSearchAllReq.md#isactive)
- [offset](SalesReceiptsServiceSearchAllReq.md#offset)
- [searchKey](SalesReceiptsServiceSearchAllReq.md#searchkey)
- [sortKey](SalesReceiptsServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesReceiptsServiceSearchAllReq.md#sortorder)
- [status](SalesReceiptsServiceSearchAllReq.md#status)
- [fields](SalesReceiptsServiceSearchAllReq.md#fields)
- [runtime](SalesReceiptsServiceSearchAllReq.md#runtime)
- [typeName](SalesReceiptsServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesReceiptsServiceSearchAllReq.md#clone)
- [equals](SalesReceiptsServiceSearchAllReq.md#equals)
- [fromBinary](SalesReceiptsServiceSearchAllReq.md#frombinary)
- [fromJson](SalesReceiptsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesReceiptsServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesReceiptsServiceSearchAllReq.md#gettype)
- [toBinary](SalesReceiptsServiceSearchAllReq.md#tobinary)
- [toJSON](SalesReceiptsServiceSearchAllReq.md#tojson)
- [toJson](SalesReceiptsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesReceiptsServiceSearchAllReq.md#tojsonstring)
- [equals](SalesReceiptsServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesReceiptsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesReceiptsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesReceiptsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceiptsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;SalesReceiptsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/sales_receipts_pb.ts:1124](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1124)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_receipts_pb.ts:1080](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1080)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/sales_receipts_pb.ts:1108](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1108)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_receipts_pb.ts:1073](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1073)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_receipts_pb.ts:1087](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1087)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/sales_receipts_pb.ts:1122](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1122)

___

### sortKey

• **sortKey**: [`SALE_RECEIPT_SORT_KEY`](../enums/SALE_RECEIPT_SORT_KEY.md) = `SALE_RECEIPT_SORT_KEY.SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_receipts_pb.ts:1101](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1101)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_receipts_pb.ts:1094](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1094)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_receipts_pb.ts:1115](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1115)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts_pb.ts:1131](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1131)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts_pb.ts:1129](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1129)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReceiptsServiceSearchAllReq"``

#### Defined in

[src/sales_receipts_pb.ts:1130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1130)

## Methods

### clone

▸ **clone**(): [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md) \| `PlainMessage`<[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

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

[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md) \| `PlainMessage`<[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md) \| `PlainMessage`<[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts_pb.ts:1154](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1154)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Defined in

[src/sales_receipts_pb.ts:1142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1142)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Defined in

[src/sales_receipts_pb.ts:1146](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1146)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceSearchAllReq`](SalesReceiptsServiceSearchAllReq.md)

#### Defined in

[src/sales_receipts_pb.ts:1150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1150)
