[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceEntityPaginationReq

# Class: ExpensesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.ExpensesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)\>

  ↳ **`ExpensesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](ExpensesServiceEntityPaginationReq.md#count)
- [entityUuid](ExpensesServiceEntityPaginationReq.md#entityuuid)
- [isActive](ExpensesServiceEntityPaginationReq.md#isactive)
- [offset](ExpensesServiceEntityPaginationReq.md#offset)
- [sortKey](ExpensesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](ExpensesServiceEntityPaginationReq.md#sortorder)
- [fields](ExpensesServiceEntityPaginationReq.md#fields)
- [runtime](ExpensesServiceEntityPaginationReq.md#runtime)
- [typeName](ExpensesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](ExpensesServiceEntityPaginationReq.md#clone)
- [equals](ExpensesServiceEntityPaginationReq.md#equals)
- [fromBinary](ExpensesServiceEntityPaginationReq.md#frombinary)
- [fromJson](ExpensesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](ExpensesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](ExpensesServiceEntityPaginationReq.md#gettype)
- [toBinary](ExpensesServiceEntityPaginationReq.md#tobinary)
- [toJSON](ExpensesServiceEntityPaginationReq.md#tojson)
- [toJson](ExpensesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](ExpensesServiceEntityPaginationReq.md#tojsonstring)
- [equals](ExpensesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](ExpensesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](ExpensesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](ExpensesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;ExpensesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:1197](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1197)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/expenses_pb.ts:1167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1167)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/expenses_pb.ts:1195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1195)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/expenses_pb.ts:1160](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1160)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/expenses_pb.ts:1174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1174)

___

### sortKey

• **sortKey**: [`EXPENSE_SORT_KEY`](../enums/EXPENSE_SORT_KEY.md) = `EXPENSE_SORT_KEY.EXPENSE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EXPENSE_SORT_KEY sort_key = 5;

#### Defined in

[src/expenses_pb.ts:1188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1188)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/expenses_pb.ts:1181](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1181)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:1204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1204)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:1202](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1202)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ExpensesServiceEntityPaginationReq"``

#### Defined in

[src/expenses_pb.ts:1203](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1203)

## Methods

### clone

▸ **clone**(): [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md) \| `PlainMessage`<[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

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

[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md) \| `PlainMessage`<[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md) \| `PlainMessage`<[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:1225](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1225)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Defined in

[src/expenses_pb.ts:1213](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1213)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Defined in

[src/expenses_pb.ts:1217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1217)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceEntityPaginationReq`](ExpensesServiceEntityPaginationReq.md)

#### Defined in

[src/expenses_pb.ts:1221](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1221)
