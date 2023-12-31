[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReceiptsServiceFilterReq

# Class: SalesReceiptsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.SalesReceiptsServiceFilterReq

## Hierarchy

- `Message`<[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)\>

  ↳ **`SalesReceiptsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesReceiptsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesReceiptsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesReceiptsServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesReceiptsServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesReceiptsServiceFilterReq.md#approverroleid)
- [bankAccountId](SalesReceiptsServiceFilterReq.md#bankaccountid)
- [clientId](SalesReceiptsServiceFilterReq.md#clientid)
- [completedOnEnd](SalesReceiptsServiceFilterReq.md#completedonend)
- [completedOnStart](SalesReceiptsServiceFilterReq.md#completedonstart)
- [count](SalesReceiptsServiceFilterReq.md#count)
- [creationTimestampEnd](SalesReceiptsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesReceiptsServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesReceiptsServiceFilterReq.md#currencyid)
- [entityUuid](SalesReceiptsServiceFilterReq.md#entityuuid)
- [finalRefNumber](SalesReceiptsServiceFilterReq.md#finalrefnumber)
- [isActive](SalesReceiptsServiceFilterReq.md#isactive)
- [offset](SalesReceiptsServiceFilterReq.md#offset)
- [paymentTimestampEnd](SalesReceiptsServiceFilterReq.md#paymenttimestampend)
- [paymentTimestampStart](SalesReceiptsServiceFilterReq.md#paymenttimestampstart)
- [refFrom](SalesReceiptsServiceFilterReq.md#reffrom)
- [refId](SalesReceiptsServiceFilterReq.md#refid)
- [referenceId](SalesReceiptsServiceFilterReq.md#referenceid)
- [sortKey](SalesReceiptsServiceFilterReq.md#sortkey)
- [sortOrder](SalesReceiptsServiceFilterReq.md#sortorder)
- [status](SalesReceiptsServiceFilterReq.md#status)
- [transactionType](SalesReceiptsServiceFilterReq.md#transactiontype)
- [fields](SalesReceiptsServiceFilterReq.md#fields)
- [runtime](SalesReceiptsServiceFilterReq.md#runtime)
- [typeName](SalesReceiptsServiceFilterReq.md#typename)

### Methods

- [clone](SalesReceiptsServiceFilterReq.md#clone)
- [equals](SalesReceiptsServiceFilterReq.md#equals)
- [fromBinary](SalesReceiptsServiceFilterReq.md#frombinary)
- [fromJson](SalesReceiptsServiceFilterReq.md#fromjson)
- [fromJsonString](SalesReceiptsServiceFilterReq.md#fromjsonstring)
- [getType](SalesReceiptsServiceFilterReq.md#gettype)
- [toBinary](SalesReceiptsServiceFilterReq.md#tobinary)
- [toJSON](SalesReceiptsServiceFilterReq.md#tojson)
- [toJson](SalesReceiptsServiceFilterReq.md#tojson-1)
- [toJsonString](SalesReceiptsServiceFilterReq.md#tojsonstring)
- [equals](SalesReceiptsServiceFilterReq.md#equals-1)
- [fromBinary](SalesReceiptsServiceFilterReq.md#frombinary-1)
- [fromJson](SalesReceiptsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesReceiptsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceiptsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)\> |

#### Overrides

Message&lt;SalesReceiptsServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_receipts_pb.ts:1009](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1009)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/sales_receipts_pb.ts:916](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L916)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/sales_receipts_pb.ts:909](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L909)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/sales_receipts_pb.ts:902](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L902)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/sales_receipts_pb.ts:923](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L923)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: int64 bank_account_id = 25;

#### Defined in

[src/sales_receipts_pb.ts:979](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L979)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client

**`Generated`**

from field: int64 client_id = 24;

#### Defined in

[src/sales_receipts_pb.ts:972](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L972)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/sales_receipts_pb.ts:937](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L937)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/sales_receipts_pb.ts:930](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L930)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_receipts_pb.ts:846](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L846)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/sales_receipts_pb.ts:881](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L881)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/sales_receipts_pb.ts:874](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L874)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 26;

#### Defined in

[src/sales_receipts_pb.ts:986](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L986)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_receipts_pb.ts:888](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L888)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_receipts_pb.ts:951](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L951)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_receipts_pb.ts:839](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L839)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_receipts_pb.ts:853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L853)

___

### paymentTimestampEnd

• **paymentTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the payment timestamp

**`Generated`**

from field: int64 payment_timestamp_end = 29;

#### Defined in

[src/sales_receipts_pb.ts:1007](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1007)

___

### paymentTimestampStart

• **paymentTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the payment timestamp

**`Generated`**

from field: int64 payment_timestamp_start = 28;

#### Defined in

[src/sales_receipts_pb.ts:1000](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1000)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the sales receipt has been created

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/sales_receipts_pb.ts:958](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L958)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/sales_receipts_pb.ts:965](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L965)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the sales receipt

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_receipts_pb.ts:944](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L944)

___

### sortKey

• **sortKey**: [`SALE_RECEIPT_SORT_KEY`](../enums/SALE_RECEIPT_SORT_KEY.md) = `SALE_RECEIPT_SORT_KEY.SALE_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALE_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_receipts_pb.ts:867](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L867)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_receipts_pb.ts:860](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L860)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this sales receipt

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_receipts_pb.ts:895](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L895)

___

### transactionType

• **transactionType**: `string` = `""`

The type of the transaction

**`Generated`**

from field: string transaction_type = 27;

#### Defined in

[src/sales_receipts_pb.ts:993](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L993)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts_pb.ts:1016](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1016)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts_pb.ts:1014](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1014)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReceiptsServiceFilterReq"``

#### Defined in

[src/sales_receipts_pb.ts:1015](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1015)

## Methods

### clone

▸ **clone**(): [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md) \| `PlainMessage`<[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

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

[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md) \| `PlainMessage`<[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md) \| `PlainMessage`<[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts_pb.ts:1056](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1056)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Defined in

[src/sales_receipts_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1044)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Defined in

[src/sales_receipts_pb.ts:1048](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1048)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceFilterReq`](SalesReceiptsServiceFilterReq.md)

#### Defined in

[src/sales_receipts_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_receipts_pb.ts#L1052)
