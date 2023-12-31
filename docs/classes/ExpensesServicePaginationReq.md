[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ExpensesServicePaginationReq

# Class: ExpensesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.ExpensesServicePaginationReq

## Hierarchy

- `Message`<[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)\>

  ↳ **`ExpensesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ExpensesServicePaginationReq.md#constructor)

### Properties

- [count](ExpensesServicePaginationReq.md#count)
- [isActive](ExpensesServicePaginationReq.md#isactive)
- [offset](ExpensesServicePaginationReq.md#offset)
- [sortKey](ExpensesServicePaginationReq.md#sortkey)
- [sortOrder](ExpensesServicePaginationReq.md#sortorder)
- [status](ExpensesServicePaginationReq.md#status)
- [fields](ExpensesServicePaginationReq.md#fields)
- [runtime](ExpensesServicePaginationReq.md#runtime)
- [typeName](ExpensesServicePaginationReq.md#typename)

### Methods

- [clone](ExpensesServicePaginationReq.md#clone)
- [equals](ExpensesServicePaginationReq.md#equals)
- [fromBinary](ExpensesServicePaginationReq.md#frombinary)
- [fromJson](ExpensesServicePaginationReq.md#fromjson)
- [fromJsonString](ExpensesServicePaginationReq.md#fromjsonstring)
- [getType](ExpensesServicePaginationReq.md#gettype)
- [toBinary](ExpensesServicePaginationReq.md#tobinary)
- [toJSON](ExpensesServicePaginationReq.md#tojson)
- [toJson](ExpensesServicePaginationReq.md#tojson-1)
- [toJsonString](ExpensesServicePaginationReq.md#tojsonstring)
- [equals](ExpensesServicePaginationReq.md#equals-1)
- [fromBinary](ExpensesServicePaginationReq.md#frombinary-1)
- [fromJson](ExpensesServicePaginationReq.md#fromjson-1)
- [fromJsonString](ExpensesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)\> |

#### Overrides

Message&lt;ExpensesServicePaginationReq\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:1049](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1049)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/expenses_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1019)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/expenses_pb.ts:1012](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1012)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/expenses_pb.ts:1026](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1026)

___

### sortKey

• **sortKey**: [`EXPENSE_SORT_KEY`](../enums/EXPENSE_SORT_KEY.md) = `EXPENSE_SORT_KEY.EXPENSE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EXPENSE_SORT_KEY sort_key = 5;

#### Defined in

[src/expenses_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1040)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/expenses_pb.ts:1033](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1033)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this expense

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/expenses_pb.ts:1047](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1047)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:1056](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1056)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:1054](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1054)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ExpensesServicePaginationReq"``

#### Defined in

[src/expenses_pb.ts:1055](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1055)

## Methods

### clone

▸ **clone**(): [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md) \| `PlainMessage`<[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

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

[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md) \| `PlainMessage`<[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md) \| `PlainMessage`<[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:1077](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1077)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Defined in

[src/expenses_pb.ts:1065](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1065)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Defined in

[src/expenses_pb.ts:1069](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1069)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginationReq`](ExpensesServicePaginationReq.md)

#### Defined in

[src/expenses_pb.ts:1073](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1073)
