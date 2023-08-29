[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServiceEntityPaginationReq

# Class: PurchasesPaymentsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.PurchasesPaymentsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)\>

  ↳ **`PurchasesPaymentsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](PurchasesPaymentsServiceEntityPaginationReq.md#count)
- [entityUuid](PurchasesPaymentsServiceEntityPaginationReq.md#entityuuid)
- [isActive](PurchasesPaymentsServiceEntityPaginationReq.md#isactive)
- [offset](PurchasesPaymentsServiceEntityPaginationReq.md#offset)
- [sortKey](PurchasesPaymentsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](PurchasesPaymentsServiceEntityPaginationReq.md#sortorder)
- [fields](PurchasesPaymentsServiceEntityPaginationReq.md#fields)
- [runtime](PurchasesPaymentsServiceEntityPaginationReq.md#runtime)
- [typeName](PurchasesPaymentsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](PurchasesPaymentsServiceEntityPaginationReq.md#clone)
- [equals](PurchasesPaymentsServiceEntityPaginationReq.md#equals)
- [fromBinary](PurchasesPaymentsServiceEntityPaginationReq.md#frombinary)
- [fromJson](PurchasesPaymentsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](PurchasesPaymentsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](PurchasesPaymentsServiceEntityPaginationReq.md#gettype)
- [toBinary](PurchasesPaymentsServiceEntityPaginationReq.md#tobinary)
- [toJSON](PurchasesPaymentsServiceEntityPaginationReq.md#tojson)
- [toJson](PurchasesPaymentsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](PurchasesPaymentsServiceEntityPaginationReq.md#tojsonstring)
- [equals](PurchasesPaymentsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](PurchasesPaymentsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](PurchasesPaymentsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;PurchasesPaymentsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/purchases_payments_pb.ts:794](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L794)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_payments_pb.ts:764](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L764)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/purchases_payments_pb.ts:792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L792)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_payments_pb.ts:757](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L757)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_payments_pb.ts:771](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L771)

___

### sortKey

• **sortKey**: [`PURCHASE_PAYMENT_SORT_KEY`](../enums/PURCHASE_PAYMENT_SORT_KEY.md) = `PURCHASE_PAYMENT_SORT_KEY.PURCHASE_PAYMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_payments_pb.ts:785](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L785)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_payments_pb.ts:778](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L778)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments_pb.ts:801](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L801)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments_pb.ts:799](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L799)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesPaymentsServiceEntityPaginationReq"``

#### Defined in

[src/purchases_payments_pb.ts:800](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L800)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

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

[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments_pb.ts:822](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L822)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_payments_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L810)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_payments_pb.ts:814](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L814)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceEntityPaginationReq`](PurchasesPaymentsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_payments_pb.ts:818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L818)
