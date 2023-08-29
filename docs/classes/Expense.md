[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Expense

# Class: Expense

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Expense

## Hierarchy

- `Message`<[`Expense`](Expense.md)\>

  ↳ **`Expense`**

## Table of contents

### Constructors

- [constructor](Expense.md#constructor)

### Properties

- [approvalMetadata](Expense.md#approvalmetadata)
- [completedOn](Expense.md#completedon)
- [currencyId](Expense.md#currencyid)
- [entityUuid](Expense.md#entityuuid)
- [finalRefNumber](Expense.md#finalrefnumber)
- [formData](Expense.md#formdata)
- [list](Expense.md#list)
- [logs](Expense.md#logs)
- [metadata](Expense.md#metadata)
- [paidByUserId](Expense.md#paidbyuserid)
- [projectId](Expense.md#projectid)
- [refFrom](Expense.md#reffrom)
- [refId](Expense.md#refid)
- [referenceId](Expense.md#referenceid)
- [status](Expense.md#status)
- [totalAmount](Expense.md#totalamount)
- [vaultFolderId](Expense.md#vaultfolderid)
- [fields](Expense.md#fields)
- [runtime](Expense.md#runtime)
- [typeName](Expense.md#typename)

### Methods

- [clone](Expense.md#clone)
- [equals](Expense.md#equals)
- [fromBinary](Expense.md#frombinary)
- [fromJson](Expense.md#fromjson)
- [fromJsonString](Expense.md#fromjsonstring)
- [getType](Expense.md#gettype)
- [toBinary](Expense.md#tobinary)
- [toJSON](Expense.md#tojson)
- [toJson](Expense.md#tojson-1)
- [toJsonString](Expense.md#tojsonstring)
- [equals](Expense.md#equals-1)
- [fromBinary](Expense.md#frombinary-1)
- [fromJson](Expense.md#fromjson-1)
- [fromJsonString](Expense.md#fromjsonstring-1)

## Constructors

### constructor

• **new Expense**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Expense`](Expense.md)\> |

#### Overrides

Message&lt;Expense\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:472](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L472)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/expenses_pb.ts:372](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L372)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this expense was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/expenses_pb.ts:393](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L393)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 14;

#### Defined in

[src/expenses_pb.ts:442](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L442)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/expenses_pb.ts:358](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L358)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/expenses_pb.ts:421](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L421)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/expenses_pb.ts:463](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L463)

___

### list

• **list**: [`ExpenseItem`](ExpenseItem.md)[] = `[]`

The list of associated expense items

**`Generated`**

from field: repeated Genesis.ExpenseItem list = 20;

#### Defined in

[src/expenses_pb.ts:456](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L456)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this expense

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/expenses_pb.ts:386](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L386)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this expense

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/expenses_pb.ts:365](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L365)

___

### paidByUserId

• **paidByUserId**: `bigint` = `protoInt64.zero`

The ID of the user who paid for this expense (if paid by organization, then this will be 0)

**`Generated`**

from field: int64 paid_by_user_id = 15;

#### Defined in

[src/expenses_pb.ts:449](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L449)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 8;

#### Defined in

[src/expenses_pb.ts:400](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L400)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the expense has been created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/expenses_pb.ts:428](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L428)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference (can be 0 in case ref_from is "not-applicable")

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/expenses_pb.ts:435](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L435)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the expense

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/expenses_pb.ts:414](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L414)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this expense

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/expenses_pb.ts:379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L379)

___

### totalAmount

• **totalAmount**: `number` = `0`

The total amount of the expense

**`Generated`**

from field: double total_amount = 40;

#### Defined in

[src/expenses_pb.ts:470](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L470)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/expenses_pb.ts:407](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L407)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:479](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L479)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:477](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L477)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Expense"``

#### Defined in

[src/expenses_pb.ts:478](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L478)

## Methods

### clone

▸ **clone**(): [`Expense`](Expense.md)

Create a deep copy.

#### Returns

[`Expense`](Expense.md)

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
| `other` | `undefined` \| ``null`` \| [`Expense`](Expense.md) \| `PlainMessage`<[`Expense`](Expense.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Expense`](Expense.md)

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

[`Expense`](Expense.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Expense`](Expense.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Expense`](Expense.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Expense`](Expense.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Expense`](Expense.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Expense`](Expense.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Expense`](Expense.md)\>

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
| `a` | `undefined` \| [`Expense`](Expense.md) \| `PlainMessage`<[`Expense`](Expense.md)\> |
| `b` | `undefined` \| [`Expense`](Expense.md) \| `PlainMessage`<[`Expense`](Expense.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:511](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L511)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Expense`](Expense.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Expense`](Expense.md)

#### Defined in

[src/expenses_pb.ts:499](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L499)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Expense`](Expense.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Expense`](Expense.md)

#### Defined in

[src/expenses_pb.ts:503](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L503)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Expense`](Expense.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Expense`](Expense.md)

#### Defined in

[src/expenses_pb.ts:507](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L507)
