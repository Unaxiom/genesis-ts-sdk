[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServicePaginationReq

# Class: PurchasesPaymentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.PurchasesPaymentsServicePaginationReq

## Hierarchy

- `Message`<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\>

  ↳ **`PurchasesPaymentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServicePaginationReq.md#constructor)

### Properties

- [count](PurchasesPaymentsServicePaginationReq.md#count)
- [isActive](PurchasesPaymentsServicePaginationReq.md#isactive)
- [offset](PurchasesPaymentsServicePaginationReq.md#offset)
- [sortKey](PurchasesPaymentsServicePaginationReq.md#sortkey)
- [sortOrder](PurchasesPaymentsServicePaginationReq.md#sortorder)
- [status](PurchasesPaymentsServicePaginationReq.md#status)
- [fields](PurchasesPaymentsServicePaginationReq.md#fields)
- [runtime](PurchasesPaymentsServicePaginationReq.md#runtime)
- [typeName](PurchasesPaymentsServicePaginationReq.md#typename)

### Methods

- [clone](PurchasesPaymentsServicePaginationReq.md#clone)
- [equals](PurchasesPaymentsServicePaginationReq.md#equals)
- [fromBinary](PurchasesPaymentsServicePaginationReq.md#frombinary)
- [fromJson](PurchasesPaymentsServicePaginationReq.md#fromjson)
- [fromJsonString](PurchasesPaymentsServicePaginationReq.md#fromjsonstring)
- [getType](PurchasesPaymentsServicePaginationReq.md#gettype)
- [toBinary](PurchasesPaymentsServicePaginationReq.md#tobinary)
- [toJSON](PurchasesPaymentsServicePaginationReq.md#tojson)
- [toJson](PurchasesPaymentsServicePaginationReq.md#tojson-1)
- [toJsonString](PurchasesPaymentsServicePaginationReq.md#tojsonstring)
- [equals](PurchasesPaymentsServicePaginationReq.md#equals-1)
- [fromBinary](PurchasesPaymentsServicePaginationReq.md#frombinary-1)
- [fromJson](PurchasesPaymentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\> |

#### Overrides

Message&lt;PurchasesPaymentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/purchases_payments_pb.ts:646](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L646)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_payments_pb.ts:616](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L616)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_payments_pb.ts:609](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L609)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_payments_pb.ts:623](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L623)

___

### sortKey

• **sortKey**: [`PURCHASE_PAYMENT_SORT_KEY`](../enums/PURCHASE_PAYMENT_SORT_KEY.md) = `PURCHASE_PAYMENT_SORT_KEY.PURCHASE_PAYMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_payments_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L637)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_payments_pb.ts:630](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L630)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this purchase payment

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/purchases_payments_pb.ts:644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L644)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments_pb.ts:653](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L653)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments_pb.ts:651](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L651)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesPaymentsServicePaginationReq"``

#### Defined in

[src/purchases_payments_pb.ts:652](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L652)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

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

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L674)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Defined in

[src/purchases_payments_pb.ts:662](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L662)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Defined in

[src/purchases_payments_pb.ts:666](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L666)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationReq`](PurchasesPaymentsServicePaginationReq.md)

#### Defined in

[src/purchases_payments_pb.ts:670](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L670)
