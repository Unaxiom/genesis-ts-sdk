[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServicePaginationResponse

# Class: PurchasesPaymentsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.PurchasesPaymentsServicePaginationResponse

## Hierarchy

- `Message`<[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)\>

  ↳ **`PurchasesPaymentsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServicePaginationResponse.md#constructor)

### Properties

- [count](PurchasesPaymentsServicePaginationResponse.md#count)
- [offset](PurchasesPaymentsServicePaginationResponse.md#offset)
- [payload](PurchasesPaymentsServicePaginationResponse.md#payload)
- [total](PurchasesPaymentsServicePaginationResponse.md#total)
- [fields](PurchasesPaymentsServicePaginationResponse.md#fields)
- [runtime](PurchasesPaymentsServicePaginationResponse.md#runtime)
- [typeName](PurchasesPaymentsServicePaginationResponse.md#typename)

### Methods

- [clone](PurchasesPaymentsServicePaginationResponse.md#clone)
- [equals](PurchasesPaymentsServicePaginationResponse.md#equals)
- [fromBinary](PurchasesPaymentsServicePaginationResponse.md#frombinary)
- [fromJson](PurchasesPaymentsServicePaginationResponse.md#fromjson)
- [fromJsonString](PurchasesPaymentsServicePaginationResponse.md#fromjsonstring)
- [getType](PurchasesPaymentsServicePaginationResponse.md#gettype)
- [toBinary](PurchasesPaymentsServicePaginationResponse.md#tobinary)
- [toJSON](PurchasesPaymentsServicePaginationResponse.md#tojson)
- [toJson](PurchasesPaymentsServicePaginationResponse.md#tojson-1)
- [toJsonString](PurchasesPaymentsServicePaginationResponse.md#tojsonstring)
- [equals](PurchasesPaymentsServicePaginationResponse.md#equals-1)
- [fromBinary](PurchasesPaymentsServicePaginationResponse.md#frombinary-1)
- [fromJson](PurchasesPaymentsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;PurchasesPaymentsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/purchases_payments_pb.ts:714](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L714)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/purchases_payments_pb.ts:691](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L691)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/purchases_payments_pb.ts:698](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L698)

___

### payload

• **payload**: [`PurchasePayment`](PurchasePayment.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.PurchasePayment payload = 4;

#### Defined in

[src/purchases_payments_pb.ts:712](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L712)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/purchases_payments_pb.ts:705](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L705)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments_pb.ts:721](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L721)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments_pb.ts:719](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L719)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesPaymentsServicePaginationResponse"``

#### Defined in

[src/purchases_payments_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L720)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md) \| `PlainMessage`<[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

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

[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md) \| `PlainMessage`<[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md) \| `PlainMessage`<[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments_pb.ts:740](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L740)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Defined in

[src/purchases_payments_pb.ts:728](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L728)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Defined in

[src/purchases_payments_pb.ts:732](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L732)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServicePaginationResponse`](PurchasesPaymentsServicePaginationResponse.md)

#### Defined in

[src/purchases_payments_pb.ts:736](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L736)
