[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceSearchAllReq

# Class: GoalsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.GoalsServiceSearchAllReq

## Hierarchy

- `Message`<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\>

  ↳ **`GoalsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](GoalsServiceSearchAllReq.md#constructor)

### Properties

- [count](GoalsServiceSearchAllReq.md#count)
- [entityUuid](GoalsServiceSearchAllReq.md#entityuuid)
- [isActive](GoalsServiceSearchAllReq.md#isactive)
- [offset](GoalsServiceSearchAllReq.md#offset)
- [searchKey](GoalsServiceSearchAllReq.md#searchkey)
- [sortKey](GoalsServiceSearchAllReq.md#sortkey)
- [sortOrder](GoalsServiceSearchAllReq.md#sortorder)
- [status](GoalsServiceSearchAllReq.md#status)
- [userId](GoalsServiceSearchAllReq.md#userid)
- [fields](GoalsServiceSearchAllReq.md#fields)
- [runtime](GoalsServiceSearchAllReq.md#runtime)
- [typeName](GoalsServiceSearchAllReq.md#typename)

### Methods

- [clone](GoalsServiceSearchAllReq.md#clone)
- [equals](GoalsServiceSearchAllReq.md#equals)
- [fromBinary](GoalsServiceSearchAllReq.md#frombinary)
- [fromJson](GoalsServiceSearchAllReq.md#fromjson)
- [fromJsonString](GoalsServiceSearchAllReq.md#fromjsonstring)
- [getType](GoalsServiceSearchAllReq.md#gettype)
- [toBinary](GoalsServiceSearchAllReq.md#tobinary)
- [toJSON](GoalsServiceSearchAllReq.md#tojson)
- [toJson](GoalsServiceSearchAllReq.md#tojson-1)
- [toJsonString](GoalsServiceSearchAllReq.md#tojsonstring)
- [equals](GoalsServiceSearchAllReq.md#equals-1)
- [fromBinary](GoalsServiceSearchAllReq.md#frombinary-1)
- [fromJson](GoalsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](GoalsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;GoalsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/goals_pb.ts:1513](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1513)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goals_pb.ts:1462](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1462)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/goals_pb.ts:1490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1490)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goals_pb.ts:1455](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1455)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goals_pb.ts:1469](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1469)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/goals_pb.ts:1504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1504)

___

### sortKey

• **sortKey**: [`GOAL_SORT_KEY`](../enums/GOAL_SORT_KEY.md) = `GOAL_SORT_KEY.GOAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOAL_SORT_KEY sort_key = 5;

#### Defined in

[src/goals_pb.ts:1483](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1483)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goals_pb.ts:1476](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1476)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/goals_pb.ts:1497](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1497)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/goals_pb.ts:1511](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1511)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:1520](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1520)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:1518](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1518)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalsServiceSearchAllReq"``

#### Defined in

[src/goals_pb.ts:1519](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1519)

## Methods

### clone

▸ **clone**(): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md) \| `PlainMessage`<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

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

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md) \| `PlainMessage`<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md) \| `PlainMessage`<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:1544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1544)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Defined in

[src/goals_pb.ts:1532](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1532)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Defined in

[src/goals_pb.ts:1536](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1536)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Defined in

[src/goals_pb.ts:1540](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L1540)
