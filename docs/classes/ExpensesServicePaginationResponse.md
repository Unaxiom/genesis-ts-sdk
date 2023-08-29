[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ExpensesServicePaginationResponse

# Class: ExpensesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.ExpensesServicePaginationResponse

## Hierarchy

- `Message`<[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)\>

  ↳ **`ExpensesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ExpensesServicePaginationResponse.md#constructor)

### Properties

- [count](ExpensesServicePaginationResponse.md#count)
- [offset](ExpensesServicePaginationResponse.md#offset)
- [payload](ExpensesServicePaginationResponse.md#payload)
- [total](ExpensesServicePaginationResponse.md#total)
- [fields](ExpensesServicePaginationResponse.md#fields)
- [runtime](ExpensesServicePaginationResponse.md#runtime)
- [typeName](ExpensesServicePaginationResponse.md#typename)

### Methods

- [clone](ExpensesServicePaginationResponse.md#clone)
- [equals](ExpensesServicePaginationResponse.md#equals)
- [fromBinary](ExpensesServicePaginationResponse.md#frombinary)
- [fromJson](ExpensesServicePaginationResponse.md#fromjson)
- [fromJsonString](ExpensesServicePaginationResponse.md#fromjsonstring)
- [getType](ExpensesServicePaginationResponse.md#gettype)
- [toBinary](ExpensesServicePaginationResponse.md#tobinary)
- [toJSON](ExpensesServicePaginationResponse.md#tojson)
- [toJson](ExpensesServicePaginationResponse.md#tojson-1)
- [toJsonString](ExpensesServicePaginationResponse.md#tojsonstring)
- [equals](ExpensesServicePaginationResponse.md#equals-1)
- [fromBinary](ExpensesServicePaginationResponse.md#frombinary-1)
- [fromJson](ExpensesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ExpensesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;ExpensesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:1117](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1117)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/expenses_pb.ts:1094](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1094)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/expenses_pb.ts:1101](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1101)

___

### payload

• **payload**: [`Expense`](Expense.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Expense payload = 4;

#### Defined in

[src/expenses_pb.ts:1115](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1115)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/expenses_pb.ts:1108](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1108)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:1124](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1124)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:1122](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1122)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ExpensesServicePaginationResponse"``

#### Defined in

[src/expenses_pb.ts:1123](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1123)

## Methods

### clone

▸ **clone**(): [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md) \| `PlainMessage`<[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

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

[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md) \| `PlainMessage`<[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md) \| `PlainMessage`<[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:1143](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1143)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Defined in

[src/expenses_pb.ts:1131](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1131)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Defined in

[src/expenses_pb.ts:1135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1135)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginationResponse`](ExpensesServicePaginationResponse.md)

#### Defined in

[src/expenses_pb.ts:1139](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1139)
