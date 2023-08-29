[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceSearchAllReq

# Class: OvertimesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.OvertimesServiceSearchAllReq

## Hierarchy

- `Message`<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\>

  ↳ **`OvertimesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceSearchAllReq.md#constructor)

### Properties

- [count](OvertimesServiceSearchAllReq.md#count)
- [entityUuid](OvertimesServiceSearchAllReq.md#entityuuid)
- [isActive](OvertimesServiceSearchAllReq.md#isactive)
- [offset](OvertimesServiceSearchAllReq.md#offset)
- [searchKey](OvertimesServiceSearchAllReq.md#searchkey)
- [sortKey](OvertimesServiceSearchAllReq.md#sortkey)
- [sortOrder](OvertimesServiceSearchAllReq.md#sortorder)
- [status](OvertimesServiceSearchAllReq.md#status)
- [userId](OvertimesServiceSearchAllReq.md#userid)
- [fields](OvertimesServiceSearchAllReq.md#fields)
- [runtime](OvertimesServiceSearchAllReq.md#runtime)
- [typeName](OvertimesServiceSearchAllReq.md#typename)

### Methods

- [clone](OvertimesServiceSearchAllReq.md#clone)
- [equals](OvertimesServiceSearchAllReq.md#equals)
- [fromBinary](OvertimesServiceSearchAllReq.md#frombinary)
- [fromJson](OvertimesServiceSearchAllReq.md#fromjson)
- [fromJsonString](OvertimesServiceSearchAllReq.md#fromjsonstring)
- [getType](OvertimesServiceSearchAllReq.md#gettype)
- [toBinary](OvertimesServiceSearchAllReq.md#tobinary)
- [toJSON](OvertimesServiceSearchAllReq.md#tojson)
- [toJson](OvertimesServiceSearchAllReq.md#tojson-1)
- [toJsonString](OvertimesServiceSearchAllReq.md#tojsonstring)
- [equals](OvertimesServiceSearchAllReq.md#equals-1)
- [fromBinary](OvertimesServiceSearchAllReq.md#frombinary-1)
- [fromJson](OvertimesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](OvertimesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;OvertimesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/overtimes_pb.ts:1028](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1028)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/overtimes_pb.ts:977](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L977)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/overtimes_pb.ts:1005](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1005)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/overtimes_pb.ts:970](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L970)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/overtimes_pb.ts:984](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L984)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/overtimes_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1019)

___

### sortKey

• **sortKey**: [`OVERTIME_SORT_KEY`](../enums/OVERTIME_SORT_KEY.md) = `OVERTIME_SORT_KEY.OVERTIME_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.OVERTIME_SORT_KEY sort_key = 5;

#### Defined in

[src/overtimes_pb.ts:998](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L998)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/overtimes_pb.ts:991](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L991)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/overtimes_pb.ts:1012](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1012)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/overtimes_pb.ts:1026](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1026)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes_pb.ts:1035](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1035)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes_pb.ts:1033](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1033)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OvertimesServiceSearchAllReq"``

#### Defined in

[src/overtimes_pb.ts:1034](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1034)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md) \| `PlainMessage`<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

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

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md) \| `PlainMessage`<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md) \| `PlainMessage`<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes_pb.ts:1059](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1059)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Defined in

[src/overtimes_pb.ts:1047](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1047)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Defined in

[src/overtimes_pb.ts:1051](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1051)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Defined in

[src/overtimes_pb.ts:1055](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L1055)
