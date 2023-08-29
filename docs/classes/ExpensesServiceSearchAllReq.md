[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceSearchAllReq

# Class: ExpensesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.ExpensesServiceSearchAllReq

## Hierarchy

- `Message`<[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)\>

  ↳ **`ExpensesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceSearchAllReq.md#constructor)

### Properties

- [count](ExpensesServiceSearchAllReq.md#count)
- [entityUuid](ExpensesServiceSearchAllReq.md#entityuuid)
- [isActive](ExpensesServiceSearchAllReq.md#isactive)
- [offset](ExpensesServiceSearchAllReq.md#offset)
- [searchKey](ExpensesServiceSearchAllReq.md#searchkey)
- [sortKey](ExpensesServiceSearchAllReq.md#sortkey)
- [sortOrder](ExpensesServiceSearchAllReq.md#sortorder)
- [status](ExpensesServiceSearchAllReq.md#status)
- [fields](ExpensesServiceSearchAllReq.md#fields)
- [runtime](ExpensesServiceSearchAllReq.md#runtime)
- [typeName](ExpensesServiceSearchAllReq.md#typename)

### Methods

- [clone](ExpensesServiceSearchAllReq.md#clone)
- [equals](ExpensesServiceSearchAllReq.md#equals)
- [fromBinary](ExpensesServiceSearchAllReq.md#frombinary)
- [fromJson](ExpensesServiceSearchAllReq.md#fromjson)
- [fromJsonString](ExpensesServiceSearchAllReq.md#fromjsonstring)
- [getType](ExpensesServiceSearchAllReq.md#gettype)
- [toBinary](ExpensesServiceSearchAllReq.md#tobinary)
- [toJSON](ExpensesServiceSearchAllReq.md#tojson)
- [toJson](ExpensesServiceSearchAllReq.md#tojson-1)
- [toJsonString](ExpensesServiceSearchAllReq.md#tojsonstring)
- [equals](ExpensesServiceSearchAllReq.md#equals-1)
- [fromBinary](ExpensesServiceSearchAllReq.md#frombinary-1)
- [fromJson](ExpensesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ExpensesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ExpensesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:1487](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1487)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/expenses_pb.ts:1443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1443)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/expenses_pb.ts:1471](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1471)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/expenses_pb.ts:1436](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1436)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/expenses_pb.ts:1450](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1450)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/expenses_pb.ts:1485](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1485)

___

### sortKey

• **sortKey**: [`EXPENSE_SORT_KEY`](../enums/EXPENSE_SORT_KEY.md) = `EXPENSE_SORT_KEY.EXPENSE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EXPENSE_SORT_KEY sort_key = 5;

#### Defined in

[src/expenses_pb.ts:1464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1464)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/expenses_pb.ts:1457](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1457)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/expenses_pb.ts:1478](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1478)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:1494](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1494)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:1492](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1492)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ExpensesServiceSearchAllReq"``

#### Defined in

[src/expenses_pb.ts:1493](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1493)

## Methods

### clone

▸ **clone**(): [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md) \| `PlainMessage`<[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

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

[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md) \| `PlainMessage`<[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md) \| `PlainMessage`<[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:1517](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1517)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Defined in

[src/expenses_pb.ts:1505](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1505)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Defined in

[src/expenses_pb.ts:1509](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1509)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceSearchAllReq`](ExpensesServiceSearchAllReq.md)

#### Defined in

[src/expenses_pb.ts:1513](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L1513)
