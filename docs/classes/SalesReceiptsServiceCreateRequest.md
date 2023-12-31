[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReceiptsServiceCreateRequest

# Class: SalesReceiptsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.SalesReceiptsServiceCreateRequest

## Hierarchy

- `Message`<[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)\>

  ↳ **`SalesReceiptsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesReceiptsServiceCreateRequest.md#constructor)

### Properties

- [amountBase](SalesReceiptsServiceCreateRequest.md#amountbase)
- [amountNet](SalesReceiptsServiceCreateRequest.md#amountnet)
- [bankAccountId](SalesReceiptsServiceCreateRequest.md#bankaccountid)
- [currencyId](SalesReceiptsServiceCreateRequest.md#currencyid)
- [description](SalesReceiptsServiceCreateRequest.md#description)
- [entityUuid](SalesReceiptsServiceCreateRequest.md#entityuuid)
- [paymentTimestamp](SalesReceiptsServiceCreateRequest.md#paymenttimestamp)
- [refFrom](SalesReceiptsServiceCreateRequest.md#reffrom)
- [refId](SalesReceiptsServiceCreateRequest.md#refid)
- [referenceId](SalesReceiptsServiceCreateRequest.md#referenceid)
- [transactionType](SalesReceiptsServiceCreateRequest.md#transactiontype)
- [userComment](SalesReceiptsServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesReceiptsServiceCreateRequest.md#vaultfolderid)
- [fields](SalesReceiptsServiceCreateRequest.md#fields)
- [runtime](SalesReceiptsServiceCreateRequest.md#runtime)
- [typeName](SalesReceiptsServiceCreateRequest.md#typename)

### Methods

- [clone](SalesReceiptsServiceCreateRequest.md#clone)
- [equals](SalesReceiptsServiceCreateRequest.md#equals)
- [fromBinary](SalesReceiptsServiceCreateRequest.md#frombinary)
- [fromJson](SalesReceiptsServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesReceiptsServiceCreateRequest.md#fromjsonstring)
- [getType](SalesReceiptsServiceCreateRequest.md#gettype)
- [toBinary](SalesReceiptsServiceCreateRequest.md#tobinary)
- [toJSON](SalesReceiptsServiceCreateRequest.md#tojson)
- [toJson](SalesReceiptsServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesReceiptsServiceCreateRequest.md#tojsonstring)
- [equals](SalesReceiptsServiceCreateRequest.md#equals-1)
- [fromBinary](SalesReceiptsServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesReceiptsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesReceiptsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceiptsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;SalesReceiptsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_receipts_pb.ts:199](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L199)

## Properties

### amountBase

• **amountBase**: `bigint` = `protoInt64.zero`

The initial amount in cents, without any deductions

**`Generated`**

from field: int64 amount_base = 18;

#### Defined in

[src/sales_receipts_pb.ts:176](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L176)

___

### amountNet

• **amountNet**: `bigint` = `protoInt64.zero`

The final amount in cents, after all the deductions

**`Generated`**

from field: int64 amount_net = 19;

#### Defined in

[src/sales_receipts_pb.ts:183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L183)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: int64 bank_account_id = 15;

#### Defined in

[src/sales_receipts_pb.ts:155](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L155)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 16;

#### Defined in

[src/sales_receipts_pb.ts:162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L162)

___

### description

• **description**: `string` = `""`

The description of the sales receipt

**`Generated`**

from field: string description = 21;

#### Defined in

[src/sales_receipts_pb.ts:197](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L197)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_receipts_pb.ts:113](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L113)

___

### paymentTimestamp

• **paymentTimestamp**: `bigint` = `protoInt64.zero`

The date & time of when the payment needs to be made

**`Generated`**

from field: int64 payment_timestamp = 20;

#### Defined in

[src/sales_receipts_pb.ts:190](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L190)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the sales receipt has been created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/sales_receipts_pb.ts:141](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L141)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/sales_receipts_pb.ts:148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L148)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales receipt

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_receipts_pb.ts:134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L134)

___

### transactionType

• **transactionType**: `string` = `""`

The type of the transaction

**`Generated`**

from field: string transaction_type = 17;

#### Defined in

[src/sales_receipts_pb.ts:169](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L169)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/sales_receipts_pb.ts:120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L120)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/sales_receipts_pb.ts:127](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L127)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts_pb.ts:206](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L206)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts_pb.ts:204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L204)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReceiptsServiceCreateRequest"``

#### Defined in

[src/sales_receipts_pb.ts:205](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L205)

## Methods

### clone

▸ **clone**(): [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md) \| `PlainMessage`<[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

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

[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md) \| `PlainMessage`<[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md) \| `PlainMessage`<[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts_pb.ts:234](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L234)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Defined in

[src/sales_receipts_pb.ts:222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L222)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Defined in

[src/sales_receipts_pb.ts:226](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L226)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceCreateRequest`](SalesReceiptsServiceCreateRequest.md)

#### Defined in

[src/sales_receipts_pb.ts:230](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L230)
