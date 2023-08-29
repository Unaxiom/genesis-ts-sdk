[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ExpenseItemHistoryRequest

# Class: ExpenseItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.ExpenseItemHistoryRequest

## Hierarchy

- `Message`<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\>

  ↳ **`ExpenseItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](ExpenseItemHistoryRequest.md#constructor)

### Properties

- [expenseId](ExpenseItemHistoryRequest.md#expenseid)
- [name](ExpenseItemHistoryRequest.md#name)
- [fields](ExpenseItemHistoryRequest.md#fields)
- [runtime](ExpenseItemHistoryRequest.md#runtime)
- [typeName](ExpenseItemHistoryRequest.md#typename)

### Methods

- [clone](ExpenseItemHistoryRequest.md#clone)
- [equals](ExpenseItemHistoryRequest.md#equals)
- [fromBinary](ExpenseItemHistoryRequest.md#frombinary)
- [fromJson](ExpenseItemHistoryRequest.md#fromjson)
- [fromJsonString](ExpenseItemHistoryRequest.md#fromjsonstring)
- [getType](ExpenseItemHistoryRequest.md#gettype)
- [toBinary](ExpenseItemHistoryRequest.md#tobinary)
- [toJSON](ExpenseItemHistoryRequest.md#tojson)
- [toJson](ExpenseItemHistoryRequest.md#tojson-1)
- [toJsonString](ExpenseItemHistoryRequest.md#tojsonstring)
- [equals](ExpenseItemHistoryRequest.md#equals-1)
- [fromBinary](ExpenseItemHistoryRequest.md#frombinary-1)
- [fromJson](ExpenseItemHistoryRequest.md#fromjson-1)
- [fromJsonString](ExpenseItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpenseItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\> |

#### Overrides

Message&lt;ExpenseItemHistoryRequest\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:971](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L971)

## Properties

### expenseId

• **expenseId**: `bigint` = `protoInt64.zero`

Stores the expense ID

**`Generated`**

from field: int64 expense_id = 10;

#### Defined in

[src/expenses_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L962)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/expenses_pb.ts:969](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L969)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:978](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L978)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L976)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ExpenseItemHistoryRequest"``

#### Defined in

[src/expenses_pb.ts:977](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L977)

## Methods

### clone

▸ **clone**(): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md) \| `PlainMessage`<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

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

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md) \| `PlainMessage`<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md) \| `PlainMessage`<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:995](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L995)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Defined in

[src/expenses_pb.ts:983](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L983)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Defined in

[src/expenses_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L987)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Defined in

[src/expenses_pb.ts:991](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L991)
