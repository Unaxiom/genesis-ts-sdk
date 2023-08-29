[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsList

# Class: PurchasesPaymentsList

Describes the message consisting of the list of records

**`Generated`**

from message Genesis.PurchasesPaymentsList

## Hierarchy

- `Message`<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\>

  ↳ **`PurchasesPaymentsList`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsList.md#constructor)

### Properties

- [list](PurchasesPaymentsList.md#list)
- [fields](PurchasesPaymentsList.md#fields)
- [runtime](PurchasesPaymentsList.md#runtime)
- [typeName](PurchasesPaymentsList.md#typename)

### Methods

- [clone](PurchasesPaymentsList.md#clone)
- [equals](PurchasesPaymentsList.md#equals)
- [fromBinary](PurchasesPaymentsList.md#frombinary)
- [fromJson](PurchasesPaymentsList.md#fromjson)
- [fromJsonString](PurchasesPaymentsList.md#fromjsonstring)
- [getType](PurchasesPaymentsList.md#gettype)
- [toBinary](PurchasesPaymentsList.md#tobinary)
- [toJSON](PurchasesPaymentsList.md#tojson)
- [toJson](PurchasesPaymentsList.md#tojson-1)
- [toJsonString](PurchasesPaymentsList.md#tojsonstring)
- [equals](PurchasesPaymentsList.md#equals-1)
- [fromBinary](PurchasesPaymentsList.md#frombinary-1)
- [fromJson](PurchasesPaymentsList.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\> |

#### Overrides

Message&lt;PurchasesPaymentsList\&gt;.constructor

#### Defined in

[src/purchases_payments_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L569)

## Properties

### list

• **list**: [`PurchasePayment`](PurchasePayment.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.PurchasePayment list = 1;

#### Defined in

[src/purchases_payments_pb.ts:567](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L567)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L576)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments_pb.ts:574](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L574)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesPaymentsList"``

#### Defined in

[src/purchases_payments_pb.ts:575](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L575)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsList`](PurchasesPaymentsList.md) \| `PlainMessage`<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

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

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsList`](PurchasesPaymentsList.md) \| `PlainMessage`<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsList`](PurchasesPaymentsList.md) \| `PlainMessage`<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments_pb.ts:592](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L592)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Defined in

[src/purchases_payments_pb.ts:580](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L580)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Defined in

[src/purchases_payments_pb.ts:584](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L584)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Defined in

[src/purchases_payments_pb.ts:588](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L588)
