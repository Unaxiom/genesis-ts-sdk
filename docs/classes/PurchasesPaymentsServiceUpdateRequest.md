[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServiceUpdateRequest

# Class: PurchasesPaymentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.PurchasesPaymentsServiceUpdateRequest

## Hierarchy

- `Message`<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\>

  ↳ **`PurchasesPaymentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServiceUpdateRequest.md#constructor)

### Properties

- [amountBase](PurchasesPaymentsServiceUpdateRequest.md#amountbase)
- [amountNet](PurchasesPaymentsServiceUpdateRequest.md#amountnet)
- [bankAccountId](PurchasesPaymentsServiceUpdateRequest.md#bankaccountid)
- [currencyId](PurchasesPaymentsServiceUpdateRequest.md#currencyid)
- [description](PurchasesPaymentsServiceUpdateRequest.md#description)
- [id](PurchasesPaymentsServiceUpdateRequest.md#id)
- [notifyUsers](PurchasesPaymentsServiceUpdateRequest.md#notifyusers)
- [paymentTimestamp](PurchasesPaymentsServiceUpdateRequest.md#paymenttimestamp)
- [referenceId](PurchasesPaymentsServiceUpdateRequest.md#referenceid)
- [transactionType](PurchasesPaymentsServiceUpdateRequest.md#transactiontype)
- [userComment](PurchasesPaymentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](PurchasesPaymentsServiceUpdateRequest.md#vaultfolderid)
- [fields](PurchasesPaymentsServiceUpdateRequest.md#fields)
- [runtime](PurchasesPaymentsServiceUpdateRequest.md#runtime)
- [typeName](PurchasesPaymentsServiceUpdateRequest.md#typename)

### Methods

- [clone](PurchasesPaymentsServiceUpdateRequest.md#clone)
- [equals](PurchasesPaymentsServiceUpdateRequest.md#equals)
- [fromBinary](PurchasesPaymentsServiceUpdateRequest.md#frombinary)
- [fromJson](PurchasesPaymentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesPaymentsServiceUpdateRequest.md#fromjsonstring)
- [getType](PurchasesPaymentsServiceUpdateRequest.md#gettype)
- [toBinary](PurchasesPaymentsServiceUpdateRequest.md#tobinary)
- [toJSON](PurchasesPaymentsServiceUpdateRequest.md#tojson)
- [toJson](PurchasesPaymentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesPaymentsServiceUpdateRequest.md#tojsonstring)
- [equals](PurchasesPaymentsServiceUpdateRequest.md#equals-1)
- [fromBinary](PurchasesPaymentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesPaymentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;PurchasesPaymentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/purchases_payments_pb.ts:330](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L330)

## Properties

### amountBase

• **amountBase**: `bigint` = `protoInt64.zero`

The initial amount in cents, without any deductions

**`Generated`**

from field: int64 amount_base = 18;

#### Defined in

[src/purchases_payments_pb.ts:307](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L307)

___

### amountNet

• **amountNet**: `bigint` = `protoInt64.zero`

The final amount in cents, after all the deductions

**`Generated`**

from field: int64 amount_net = 19;

#### Defined in

[src/purchases_payments_pb.ts:314](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L314)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: int64 bank_account_id = 15;

#### Defined in

[src/purchases_payments_pb.ts:286](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L286)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 16;

#### Defined in

[src/purchases_payments_pb.ts:293](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L293)

___

### description

• **description**: `string` = `""`

The description of the purchase payment

**`Generated`**

from field: string description = 21;

#### Defined in

[src/purchases_payments_pb.ts:328](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L328)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/purchases_payments_pb.ts:258](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L258)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/purchases_payments_pb.ts:265](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L265)

___

### paymentTimestamp

• **paymentTimestamp**: `bigint` = `protoInt64.zero`

The date & time of when the payment needs to be made

**`Generated`**

from field: int64 payment_timestamp = 20;

#### Defined in

[src/purchases_payments_pb.ts:321](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L321)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase payment

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_payments_pb.ts:279](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L279)

___

### transactionType

• **transactionType**: `string` = `""`

The type of the transaction

**`Generated`**

from field: string transaction_type = 17;

#### Defined in

[src/purchases_payments_pb.ts:300](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L300)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_payments_pb.ts:251](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L251)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/purchases_payments_pb.ts:272](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L272)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments_pb.ts:337](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L337)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments_pb.ts:335](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L335)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesPaymentsServiceUpdateRequest"``

#### Defined in

[src/purchases_payments_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L336)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md) \| `PlainMessage`<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

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

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md) \| `PlainMessage`<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md) \| `PlainMessage`<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments_pb.ts:364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L364)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Defined in

[src/purchases_payments_pb.ts:352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L352)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Defined in

[src/purchases_payments_pb.ts:356](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L356)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Defined in

[src/purchases_payments_pb.ts:360](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_payments_pb.ts#L360)
