[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ExpenseItem

# Class: ExpenseItem

Describes the parameters that constitute an item associated to a expense

**`Generated`**

from message Genesis.ExpenseItem

## Hierarchy

- `Message`<[`ExpenseItem`](ExpenseItem.md)\>

  ↳ **`ExpenseItem`**

## Table of contents

### Constructors

- [constructor](ExpenseItem.md#constructor)

### Properties

- [amount](ExpenseItem.md#amount)
- [approvalMetadata](ExpenseItem.md#approvalmetadata)
- [billNo](ExpenseItem.md#billno)
- [dateOfExpense](ExpenseItem.md#dateofexpense)
- [description](ExpenseItem.md#description)
- [entityUuid](ExpenseItem.md#entityuuid)
- [expenseId](ExpenseItem.md#expenseid)
- [ledgerId](ExpenseItem.md#ledgerid)
- [metadata](ExpenseItem.md#metadata)
- [name](ExpenseItem.md#name)
- [needApproval](ExpenseItem.md#needapproval)
- [taxGroupId](ExpenseItem.md#taxgroupid)
- [userComment](ExpenseItem.md#usercomment)
- [fields](ExpenseItem.md#fields)
- [runtime](ExpenseItem.md#runtime)
- [typeName](ExpenseItem.md#typename)

### Methods

- [clone](ExpenseItem.md#clone)
- [equals](ExpenseItem.md#equals)
- [fromBinary](ExpenseItem.md#frombinary)
- [fromJson](ExpenseItem.md#fromjson)
- [fromJsonString](ExpenseItem.md#fromjsonstring)
- [getType](ExpenseItem.md#gettype)
- [toBinary](ExpenseItem.md#tobinary)
- [toJSON](ExpenseItem.md#tojson)
- [toJson](ExpenseItem.md#tojson-1)
- [toJsonString](ExpenseItem.md#tojsonstring)
- [equals](ExpenseItem.md#equals-1)
- [fromBinary](ExpenseItem.md#frombinary-1)
- [fromJson](ExpenseItem.md#fromjson-1)
- [fromJsonString](ExpenseItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpenseItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ExpenseItem`](ExpenseItem.md)\> |

#### Overrides

Message&lt;ExpenseItem\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:826](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L826)

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The total amount of this item (in cents)

**`Generated`**

from field: int64 amount = 17;

#### Defined in

[src/expenses_pb.ts:817](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L817)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/expenses_pb.ts:754](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L754)

___

### billNo

• **billNo**: `string` = `""`

The associated bill number

**`Generated`**

from field: string bill_no = 12;

#### Defined in

[src/expenses_pb.ts:789](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L789)

___

### dateOfExpense

• **dateOfExpense**: `string` = `""`

The date on which this expense was incurred

**`Generated`**

from field: string date_of_expense = 18;

#### Defined in

[src/expenses_pb.ts:824](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L824)

___

### description

• **description**: `string` = `""`

The description of the item

**`Generated`**

from field: string description = 13;

#### Defined in

[src/expenses_pb.ts:796](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L796)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/expenses_pb.ts:740](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L740)

___

### expenseId

• **expenseId**: `bigint` = `protoInt64.zero`

Stores the expense ID

**`Generated`**

from field: int64 expense_id = 10;

#### Defined in

[src/expenses_pb.ts:775](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L775)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

The ID of the associated ledger account (can be 0 temporarily)

**`Generated`**

from field: int64 ledger_id = 15;

#### Defined in

[src/expenses_pb.ts:803](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L803)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this expense

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/expenses_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L747)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/expenses_pb.ts:782](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L782)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/expenses_pb.ts:761](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L761)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 16;

#### Defined in

[src/expenses_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L810)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/expenses_pb.ts:768](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L768)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:833](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L833)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:831](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L831)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ExpenseItem"``

#### Defined in

[src/expenses_pb.ts:832](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L832)

## Methods

### clone

▸ **clone**(): [`ExpenseItem`](ExpenseItem.md)

Create a deep copy.

#### Returns

[`ExpenseItem`](ExpenseItem.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpenseItem`](ExpenseItem.md) \| `PlainMessage`<[`ExpenseItem`](ExpenseItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpenseItem`](ExpenseItem.md)

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

[`ExpenseItem`](ExpenseItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpenseItem`](ExpenseItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpenseItem`](ExpenseItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExpenseItem`](ExpenseItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExpenseItem`](ExpenseItem.md)\>

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
| `a` | `undefined` \| [`ExpenseItem`](ExpenseItem.md) \| `PlainMessage`<[`ExpenseItem`](ExpenseItem.md)\> |
| `b` | `undefined` \| [`ExpenseItem`](ExpenseItem.md) \| `PlainMessage`<[`ExpenseItem`](ExpenseItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:861](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L861)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExpenseItem`](ExpenseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Defined in

[src/expenses_pb.ts:849](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L849)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExpenseItem`](ExpenseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Defined in

[src/expenses_pb.ts:853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L853)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExpenseItem`](ExpenseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Defined in

[src/expenses_pb.ts:857](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L857)
