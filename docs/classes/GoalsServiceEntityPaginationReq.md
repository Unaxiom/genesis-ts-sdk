[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceEntityPaginationReq

# Class: GoalsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.GoalsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)\>

  ↳ **`GoalsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](GoalsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](GoalsServiceEntityPaginationReq.md#count)
- [entityUuid](GoalsServiceEntityPaginationReq.md#entityuuid)
- [isActive](GoalsServiceEntityPaginationReq.md#isactive)
- [offset](GoalsServiceEntityPaginationReq.md#offset)
- [sortKey](GoalsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](GoalsServiceEntityPaginationReq.md#sortorder)
- [fields](GoalsServiceEntityPaginationReq.md#fields)
- [runtime](GoalsServiceEntityPaginationReq.md#runtime)
- [typeName](GoalsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](GoalsServiceEntityPaginationReq.md#clone)
- [equals](GoalsServiceEntityPaginationReq.md#equals)
- [fromBinary](GoalsServiceEntityPaginationReq.md#frombinary)
- [fromJson](GoalsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](GoalsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](GoalsServiceEntityPaginationReq.md#gettype)
- [toBinary](GoalsServiceEntityPaginationReq.md#tobinary)
- [toJSON](GoalsServiceEntityPaginationReq.md#tojson)
- [toJson](GoalsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](GoalsServiceEntityPaginationReq.md#tojsonstring)
- [equals](GoalsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](GoalsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](GoalsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](GoalsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;GoalsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/goals_pb.ts:1232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1232)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goals_pb.ts:1202](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1202)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/goals_pb.ts:1230](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1230)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goals_pb.ts:1195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1195)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goals_pb.ts:1209](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1209)

___

### sortKey

• **sortKey**: [`GOAL_SORT_KEY`](../enums/GOAL_SORT_KEY.md) = `GOAL_SORT_KEY.GOAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOAL_SORT_KEY sort_key = 5;

#### Defined in

[src/goals_pb.ts:1223](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1223)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goals_pb.ts:1216](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1216)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:1239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1239)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:1237](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1237)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalsServiceEntityPaginationReq"``

#### Defined in

[src/goals_pb.ts:1238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1238)

## Methods

### clone

▸ **clone**(): [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

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

[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:1260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1260)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Defined in

[src/goals_pb.ts:1248](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1248)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Defined in

[src/goals_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1252)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceEntityPaginationReq`](GoalsServiceEntityPaginationReq.md)

#### Defined in

[src/goals_pb.ts:1256](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1256)
