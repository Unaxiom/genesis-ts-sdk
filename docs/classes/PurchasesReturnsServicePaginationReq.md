[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServicePaginationReq

# Class: PurchasesReturnsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.PurchasesReturnsServicePaginationReq

## Hierarchy

- `Message`<[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)\>

  ↳ **`PurchasesReturnsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServicePaginationReq.md#constructor)

### Properties

- [count](PurchasesReturnsServicePaginationReq.md#count)
- [isActive](PurchasesReturnsServicePaginationReq.md#isactive)
- [offset](PurchasesReturnsServicePaginationReq.md#offset)
- [sortKey](PurchasesReturnsServicePaginationReq.md#sortkey)
- [sortOrder](PurchasesReturnsServicePaginationReq.md#sortorder)
- [status](PurchasesReturnsServicePaginationReq.md#status)
- [fields](PurchasesReturnsServicePaginationReq.md#fields)
- [runtime](PurchasesReturnsServicePaginationReq.md#runtime)
- [typeName](PurchasesReturnsServicePaginationReq.md#typename)

### Methods

- [clone](PurchasesReturnsServicePaginationReq.md#clone)
- [equals](PurchasesReturnsServicePaginationReq.md#equals)
- [fromBinary](PurchasesReturnsServicePaginationReq.md#frombinary)
- [fromJson](PurchasesReturnsServicePaginationReq.md#fromjson)
- [fromJsonString](PurchasesReturnsServicePaginationReq.md#fromjsonstring)
- [getType](PurchasesReturnsServicePaginationReq.md#gettype)
- [toBinary](PurchasesReturnsServicePaginationReq.md#tobinary)
- [toJSON](PurchasesReturnsServicePaginationReq.md#tojson)
- [toJson](PurchasesReturnsServicePaginationReq.md#tojson-1)
- [toJsonString](PurchasesReturnsServicePaginationReq.md#tojsonstring)
- [equals](PurchasesReturnsServicePaginationReq.md#equals-1)
- [fromBinary](PurchasesReturnsServicePaginationReq.md#frombinary-1)
- [fromJson](PurchasesReturnsServicePaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)\> |

#### Overrides

Message&lt;PurchasesReturnsServicePaginationReq\&gt;.constructor

#### Defined in

[src/purchases_returns_pb.ts:1024](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1024)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_returns_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L994)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_returns_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L987)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_returns_pb.ts:1001](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1001)

___

### sortKey

• **sortKey**: [`PURCHASE_RETURN_SORT_KEY`](../enums/PURCHASE_RETURN_SORT_KEY.md) = `PURCHASE_RETURN_SORT_KEY.PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_returns_pb.ts:1015](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1015)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_returns_pb.ts:1008](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1008)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this purchase return

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/purchases_returns_pb.ts:1022](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1022)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns_pb.ts:1031](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1031)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns_pb.ts:1029](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1029)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesReturnsServicePaginationReq"``

#### Defined in

[src/purchases_returns_pb.ts:1030](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1030)

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

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

[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1052)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Defined in

[src/purchases_returns_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1040)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Defined in

[src/purchases_returns_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1044)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServicePaginationReq`](PurchasesReturnsServicePaginationReq.md)

#### Defined in

[src/purchases_returns_pb.ts:1048](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1048)
