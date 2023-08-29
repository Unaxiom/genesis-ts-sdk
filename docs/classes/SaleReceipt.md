[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SaleReceipt

# Class: SaleReceipt

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.SaleReceipt

## Hierarchy

- `Message`<[`SaleReceipt`](SaleReceipt.md)\>

  ↳ **`SaleReceipt`**

## Table of contents

### Constructors

- [constructor](SaleReceipt.md#constructor)

### Properties

- [amountBase](SaleReceipt.md#amountbase)
- [amountNet](SaleReceipt.md#amountnet)
- [approvalMetadata](SaleReceipt.md#approvalmetadata)
- [bankAccountId](SaleReceipt.md#bankaccountid)
- [clientId](SaleReceipt.md#clientid)
- [completedOn](SaleReceipt.md#completedon)
- [currencyId](SaleReceipt.md#currencyid)
- [description](SaleReceipt.md#description)
- [entityUuid](SaleReceipt.md#entityuuid)
- [finalRefNumber](SaleReceipt.md#finalrefnumber)
- [logs](SaleReceipt.md#logs)
- [metadata](SaleReceipt.md#metadata)
- [paymentTimestamp](SaleReceipt.md#paymenttimestamp)
- [refFrom](SaleReceipt.md#reffrom)
- [refId](SaleReceipt.md#refid)
- [referenceId](SaleReceipt.md#referenceid)
- [status](SaleReceipt.md#status)
- [transactionType](SaleReceipt.md#transactiontype)
- [vaultFolderId](SaleReceipt.md#vaultfolderid)
- [fields](SaleReceipt.md#fields)
- [runtime](SaleReceipt.md#runtime)
- [typeName](SaleReceipt.md#typename)

### Methods

- [clone](SaleReceipt.md#clone)
- [equals](SaleReceipt.md#equals)
- [fromBinary](SaleReceipt.md#frombinary)
- [fromJson](SaleReceipt.md#fromjson)
- [fromJsonString](SaleReceipt.md#fromjsonstring)
- [getType](SaleReceipt.md#gettype)
- [toBinary](SaleReceipt.md#tobinary)
- [toJSON](SaleReceipt.md#tojson)
- [toJson](SaleReceipt.md#tojson-1)
- [toJsonString](SaleReceipt.md#tojsonstring)
- [equals](SaleReceipt.md#equals-1)
- [fromBinary](SaleReceipt.md#frombinary-1)
- [fromJson](SaleReceipt.md#fromjson-1)
- [fromJsonString](SaleReceipt.md#fromjsonstring-1)

## Constructors

### constructor

• **new SaleReceipt**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SaleReceipt`](SaleReceipt.md)\> |

#### Overrides

Message&lt;SaleReceipt\&gt;.constructor

#### Defined in

[src/sales_receipts_pb.ts:509](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L509)

## Properties

### amountBase

• **amountBase**: `bigint` = `protoInt64.zero`

The initial amount in cents, without any deductions

**`Generated`**

from field: int64 amount_base = 18;

#### Defined in

[src/sales_receipts_pb.ts:486](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L486)

___

### amountNet

• **amountNet**: `bigint` = `protoInt64.zero`

The final amount in cents, after all the deductions

**`Generated`**

from field: int64 amount_net = 19;

#### Defined in

[src/sales_receipts_pb.ts:493](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L493)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_receipts_pb.ts:395](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L395)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: int64 bank_account_id = 15;

#### Defined in

[src/sales_receipts_pb.ts:465](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L465)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client

**`Generated`**

from field: int64 client_id = 14;

#### Defined in

[src/sales_receipts_pb.ts:458](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L458)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this sales receipt was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/sales_receipts_pb.ts:416](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L416)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 16;

#### Defined in

[src/sales_receipts_pb.ts:472](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L472)

___

### description

• **description**: `string` = `""`

The description of the sales receipt

**`Generated`**

from field: string description = 21;

#### Defined in

[src/sales_receipts_pb.ts:507](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L507)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_receipts_pb.ts:381](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L381)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/sales_receipts_pb.ts:437](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L437)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this sales receipt

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_receipts_pb.ts:409](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L409)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales receipt

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_receipts_pb.ts:388](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L388)

___

### paymentTimestamp

• **paymentTimestamp**: `bigint` = `protoInt64.zero`

The date & time of when the payment needs to be made

**`Generated`**

from field: int64 payment_timestamp = 20;

#### Defined in

[src/sales_receipts_pb.ts:500](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L500)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the sales receipt has been created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/sales_receipts_pb.ts:444](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L444)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/sales_receipts_pb.ts:451](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L451)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales receipt

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_receipts_pb.ts:430](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L430)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this sales receipt

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_receipts_pb.ts:402](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L402)

___

### transactionType

• **transactionType**: `string` = `""`

The type of the transaction

**`Generated`**

from field: string transaction_type = 17;

#### Defined in

[src/sales_receipts_pb.ts:479](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L479)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/sales_receipts_pb.ts:423](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L423)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts_pb.ts:516](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L516)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts_pb.ts:514](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L514)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SaleReceipt"``

#### Defined in

[src/sales_receipts_pb.ts:515](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L515)

## Methods

### clone

▸ **clone**(): [`SaleReceipt`](SaleReceipt.md)

Create a deep copy.

#### Returns

[`SaleReceipt`](SaleReceipt.md)

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
| `other` | `undefined` \| ``null`` \| [`SaleReceipt`](SaleReceipt.md) \| `PlainMessage`<[`SaleReceipt`](SaleReceipt.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SaleReceipt`](SaleReceipt.md)

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

[`SaleReceipt`](SaleReceipt.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SaleReceipt`](SaleReceipt.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SaleReceipt`](SaleReceipt.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SaleReceipt`](SaleReceipt.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SaleReceipt`](SaleReceipt.md)\>

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
| `a` | `undefined` \| [`SaleReceipt`](SaleReceipt.md) \| `PlainMessage`<[`SaleReceipt`](SaleReceipt.md)\> |
| `b` | `undefined` \| [`SaleReceipt`](SaleReceipt.md) \| `PlainMessage`<[`SaleReceipt`](SaleReceipt.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts_pb.ts:550](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L550)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SaleReceipt`](SaleReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Defined in

[src/sales_receipts_pb.ts:538](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L538)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SaleReceipt`](SaleReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Defined in

[src/sales_receipts_pb.ts:542](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L542)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SaleReceipt`](SaleReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Defined in

[src/sales_receipts_pb.ts:546](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L546)
