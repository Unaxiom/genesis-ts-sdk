[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServicePaginationReq

# Class: SalesReturnsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.SalesReturnsServicePaginationReq

## Hierarchy

- `Message`<[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)\>

  ↳ **`SalesReturnsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServicePaginationReq.md#constructor)

### Properties

- [count](SalesReturnsServicePaginationReq.md#count)
- [isActive](SalesReturnsServicePaginationReq.md#isactive)
- [offset](SalesReturnsServicePaginationReq.md#offset)
- [sortKey](SalesReturnsServicePaginationReq.md#sortkey)
- [sortOrder](SalesReturnsServicePaginationReq.md#sortorder)
- [status](SalesReturnsServicePaginationReq.md#status)
- [fields](SalesReturnsServicePaginationReq.md#fields)
- [runtime](SalesReturnsServicePaginationReq.md#runtime)
- [typeName](SalesReturnsServicePaginationReq.md#typename)

### Methods

- [clone](SalesReturnsServicePaginationReq.md#clone)
- [equals](SalesReturnsServicePaginationReq.md#equals)
- [fromBinary](SalesReturnsServicePaginationReq.md#frombinary)
- [fromJson](SalesReturnsServicePaginationReq.md#fromjson)
- [fromJsonString](SalesReturnsServicePaginationReq.md#fromjsonstring)
- [getType](SalesReturnsServicePaginationReq.md#gettype)
- [toBinary](SalesReturnsServicePaginationReq.md#tobinary)
- [toJSON](SalesReturnsServicePaginationReq.md#tojson)
- [toJson](SalesReturnsServicePaginationReq.md#tojson-1)
- [toJsonString](SalesReturnsServicePaginationReq.md#tojsonstring)
- [equals](SalesReturnsServicePaginationReq.md#equals-1)
- [fromBinary](SalesReturnsServicePaginationReq.md#frombinary-1)
- [fromJson](SalesReturnsServicePaginationReq.md#fromjson-1)
- [fromJsonString](SalesReturnsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)\> |

#### Overrides

Message&lt;SalesReturnsServicePaginationReq\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:1024](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1024)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_returns_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L994)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_returns_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L987)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_returns_pb.ts:1001](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1001)

___

### sortKey

• **sortKey**: [`SALES_RETURN_SORT_KEY`](../enums/SALES_RETURN_SORT_KEY.md) = `SALES_RETURN_SORT_KEY.SALES_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALES_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_returns_pb.ts:1015](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1015)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_returns_pb.ts:1008](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1008)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this sales return

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/sales_returns_pb.ts:1022](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1022)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:1031](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1031)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:1029](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1029)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnsServicePaginationReq"``

#### Defined in

[src/sales_returns_pb.ts:1030](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1030)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md) \| `PlainMessage`<[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

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

[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md) \| `PlainMessage`<[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md) \| `PlainMessage`<[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1052)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Defined in

[src/sales_returns_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1040)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Defined in

[src/sales_returns_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1044)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationReq`](SalesReturnsServicePaginationReq.md)

#### Defined in

[src/sales_returns_pb.ts:1048](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1048)
