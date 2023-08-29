[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OvertimesServicePaginationReq

# Class: OvertimesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.OvertimesServicePaginationReq

## Hierarchy

- `Message`<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\>

  ↳ **`OvertimesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServicePaginationReq.md#constructor)

### Properties

- [count](OvertimesServicePaginationReq.md#count)
- [isActive](OvertimesServicePaginationReq.md#isactive)
- [offset](OvertimesServicePaginationReq.md#offset)
- [sortKey](OvertimesServicePaginationReq.md#sortkey)
- [sortOrder](OvertimesServicePaginationReq.md#sortorder)
- [status](OvertimesServicePaginationReq.md#status)
- [fields](OvertimesServicePaginationReq.md#fields)
- [runtime](OvertimesServicePaginationReq.md#runtime)
- [typeName](OvertimesServicePaginationReq.md#typename)

### Methods

- [clone](OvertimesServicePaginationReq.md#clone)
- [equals](OvertimesServicePaginationReq.md#equals)
- [fromBinary](OvertimesServicePaginationReq.md#frombinary)
- [fromJson](OvertimesServicePaginationReq.md#fromjson)
- [fromJsonString](OvertimesServicePaginationReq.md#fromjsonstring)
- [getType](OvertimesServicePaginationReq.md#gettype)
- [toBinary](OvertimesServicePaginationReq.md#tobinary)
- [toJSON](OvertimesServicePaginationReq.md#tojson)
- [toJson](OvertimesServicePaginationReq.md#tojson-1)
- [toJsonString](OvertimesServicePaginationReq.md#tojsonstring)
- [equals](OvertimesServicePaginationReq.md#equals-1)
- [fromBinary](OvertimesServicePaginationReq.md#frombinary-1)
- [fromJson](OvertimesServicePaginationReq.md#fromjson-1)
- [fromJsonString](OvertimesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\> |

#### Overrides

Message&lt;OvertimesServicePaginationReq\&gt;.constructor

#### Defined in

[src/overtimes_pb.ts:567](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L567)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/overtimes_pb.ts:537](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L537)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/overtimes_pb.ts:530](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L530)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/overtimes_pb.ts:544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L544)

___

### sortKey

• **sortKey**: [`OVERTIME_SORT_KEY`](../enums/OVERTIME_SORT_KEY.md) = `OVERTIME_SORT_KEY.OVERTIME_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.OVERTIME_SORT_KEY sort_key = 5;

#### Defined in

[src/overtimes_pb.ts:558](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L558)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/overtimes_pb.ts:551](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L551)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this overtime

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/overtimes_pb.ts:565](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L565)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes_pb.ts:574](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L574)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes_pb.ts:572](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L572)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OvertimesServicePaginationReq"``

#### Defined in

[src/overtimes_pb.ts:573](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L573)

## Methods

### clone

▸ **clone**(): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md) \| `PlainMessage`<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

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

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md) \| `PlainMessage`<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md) \| `PlainMessage`<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes_pb.ts:595](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L595)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Defined in

[src/overtimes_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L583)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Defined in

[src/overtimes_pb.ts:587](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L587)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Defined in

[src/overtimes_pb.ts:591](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L591)
