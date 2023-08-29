[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceEntityPaginationReq

# Class: OvertimesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.OvertimesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)\>

  ↳ **`OvertimesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](OvertimesServiceEntityPaginationReq.md#count)
- [entityUuid](OvertimesServiceEntityPaginationReq.md#entityuuid)
- [isActive](OvertimesServiceEntityPaginationReq.md#isactive)
- [offset](OvertimesServiceEntityPaginationReq.md#offset)
- [sortKey](OvertimesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](OvertimesServiceEntityPaginationReq.md#sortorder)
- [fields](OvertimesServiceEntityPaginationReq.md#fields)
- [runtime](OvertimesServiceEntityPaginationReq.md#runtime)
- [typeName](OvertimesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](OvertimesServiceEntityPaginationReq.md#clone)
- [equals](OvertimesServiceEntityPaginationReq.md#equals)
- [fromBinary](OvertimesServiceEntityPaginationReq.md#frombinary)
- [fromJson](OvertimesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](OvertimesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](OvertimesServiceEntityPaginationReq.md#gettype)
- [toBinary](OvertimesServiceEntityPaginationReq.md#tobinary)
- [toJSON](OvertimesServiceEntityPaginationReq.md#tojson)
- [toJson](OvertimesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](OvertimesServiceEntityPaginationReq.md#tojsonstring)
- [equals](OvertimesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](OvertimesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](OvertimesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](OvertimesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;OvertimesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/overtimes_pb.ts:715](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L715)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/overtimes_pb.ts:685](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L685)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/overtimes_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L713)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/overtimes_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L678)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/overtimes_pb.ts:692](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L692)

___

### sortKey

• **sortKey**: [`OVERTIME_SORT_KEY`](../enums/OVERTIME_SORT_KEY.md) = `OVERTIME_SORT_KEY.OVERTIME_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.OVERTIME_SORT_KEY sort_key = 5;

#### Defined in

[src/overtimes_pb.ts:706](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L706)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/overtimes_pb.ts:699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L699)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes_pb.ts:722](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L722)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L720)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OvertimesServiceEntityPaginationReq"``

#### Defined in

[src/overtimes_pb.ts:721](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L721)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md) \| `PlainMessage`<[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

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

[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md) \| `PlainMessage`<[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md) \| `PlainMessage`<[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes_pb.ts:743](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L743)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Defined in

[src/overtimes_pb.ts:731](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L731)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Defined in

[src/overtimes_pb.ts:735](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L735)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceEntityPaginationReq`](OvertimesServiceEntityPaginationReq.md)

#### Defined in

[src/overtimes_pb.ts:739](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L739)
