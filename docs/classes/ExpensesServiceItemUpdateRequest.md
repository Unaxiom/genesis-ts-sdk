[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceItemUpdateRequest

# Class: ExpensesServiceItemUpdateRequest

Describes the parameters required to update an item in a expense

**`Generated`**

from message Genesis.ExpensesServiceItemUpdateRequest

## Hierarchy

- `Message`<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\>

  ↳ **`ExpensesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceItemUpdateRequest.md#constructor)

### Properties

- [amount](ExpensesServiceItemUpdateRequest.md#amount)
- [billNo](ExpensesServiceItemUpdateRequest.md#billno)
- [dateOfExpense](ExpensesServiceItemUpdateRequest.md#dateofexpense)
- [description](ExpensesServiceItemUpdateRequest.md#description)
- [id](ExpensesServiceItemUpdateRequest.md#id)
- [ledgerId](ExpensesServiceItemUpdateRequest.md#ledgerid)
- [name](ExpensesServiceItemUpdateRequest.md#name)
- [taxGroupId](ExpensesServiceItemUpdateRequest.md#taxgroupid)
- [userComment](ExpensesServiceItemUpdateRequest.md#usercomment)
- [fields](ExpensesServiceItemUpdateRequest.md#fields)
- [runtime](ExpensesServiceItemUpdateRequest.md#runtime)
- [typeName](ExpensesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](ExpensesServiceItemUpdateRequest.md#clone)
- [equals](ExpensesServiceItemUpdateRequest.md#equals)
- [fromBinary](ExpensesServiceItemUpdateRequest.md#frombinary)
- [fromJson](ExpensesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](ExpensesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](ExpensesServiceItemUpdateRequest.md#gettype)
- [toBinary](ExpensesServiceItemUpdateRequest.md#tobinary)
- [toJSON](ExpensesServiceItemUpdateRequest.md#tojson)
- [toJson](ExpensesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](ExpensesServiceItemUpdateRequest.md#tojsonstring)
- [equals](ExpensesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](ExpensesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](ExpensesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](ExpensesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;ExpensesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:692](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L692)

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The total amount of this item (in cents)

**`Generated`**

from field: int64 amount = 17;

#### Defined in

[src/expenses_pb.ts:683](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L683)

___

### billNo

• **billNo**: `string` = `""`

The associated bill number

**`Generated`**

from field: string bill_no = 12;

#### Defined in

[src/expenses_pb.ts:655](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L655)

___

### dateOfExpense

• **dateOfExpense**: `string` = `""`

The date on which this expense was incurred

**`Generated`**

from field: string date_of_expense = 18;

#### Defined in

[src/expenses_pb.ts:690](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L690)

___

### description

• **description**: `string` = `""`

The description of the item

**`Generated`**

from field: string description = 13;

#### Defined in

[src/expenses_pb.ts:662](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L662)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/expenses_pb.ts:641](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L641)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

The ID of the associated ledger account (can be 0 temporarily)

**`Generated`**

from field: int64 ledger_id = 15;

#### Defined in

[src/expenses_pb.ts:669](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L669)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/expenses_pb.ts:648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L648)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 16;

#### Defined in

[src/expenses_pb.ts:676](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L676)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/expenses_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L634)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L699)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:697](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L697)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ExpensesServiceItemUpdateRequest"``

#### Defined in

[src/expenses_pb.ts:698](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L698)

## Methods

### clone

▸ **clone**(): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md) \| `PlainMessage`<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

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

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md) \| `PlainMessage`<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md) \| `PlainMessage`<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:723](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L723)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Defined in

[src/expenses_pb.ts:711](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L711)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Defined in

[src/expenses_pb.ts:715](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L715)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Defined in

[src/expenses_pb.ts:719](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L719)
