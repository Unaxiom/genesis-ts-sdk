[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceSearchAllReq

# Class: TeamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.TeamsServiceSearchAllReq

## Hierarchy

- `Message`<[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)\>

  ↳ **`TeamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](TeamsServiceSearchAllReq.md#constructor)

### Properties

- [count](TeamsServiceSearchAllReq.md#count)
- [entityUuid](TeamsServiceSearchAllReq.md#entityuuid)
- [isActive](TeamsServiceSearchAllReq.md#isactive)
- [offset](TeamsServiceSearchAllReq.md#offset)
- [searchKey](TeamsServiceSearchAllReq.md#searchkey)
- [sortKey](TeamsServiceSearchAllReq.md#sortkey)
- [sortOrder](TeamsServiceSearchAllReq.md#sortorder)
- [status](TeamsServiceSearchAllReq.md#status)
- [fields](TeamsServiceSearchAllReq.md#fields)
- [runtime](TeamsServiceSearchAllReq.md#runtime)
- [typeName](TeamsServiceSearchAllReq.md#typename)

### Methods

- [clone](TeamsServiceSearchAllReq.md#clone)
- [equals](TeamsServiceSearchAllReq.md#equals)
- [fromBinary](TeamsServiceSearchAllReq.md#frombinary)
- [fromJson](TeamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](TeamsServiceSearchAllReq.md#fromjsonstring)
- [getType](TeamsServiceSearchAllReq.md#gettype)
- [toBinary](TeamsServiceSearchAllReq.md#tobinary)
- [toJSON](TeamsServiceSearchAllReq.md#tojson)
- [toJson](TeamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](TeamsServiceSearchAllReq.md#tojsonstring)
- [equals](TeamsServiceSearchAllReq.md#equals-1)
- [fromBinary](TeamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](TeamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](TeamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;TeamsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/teams_pb.ts:1222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1222)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/teams_pb.ts:1178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1178)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/teams_pb.ts:1206](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1206)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/teams_pb.ts:1171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1171)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/teams_pb.ts:1185](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1185)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/teams_pb.ts:1220](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1220)

___

### sortKey

• **sortKey**: [`TEAM_SORT_KEY`](../enums/TEAM_SORT_KEY.md) = `TEAM_SORT_KEY.TEAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.TEAM_SORT_KEY sort_key = 5;

#### Defined in

[src/teams_pb.ts:1199](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1199)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/teams_pb.ts:1192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1192)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/teams_pb.ts:1213](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1213)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:1229](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1229)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:1227](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1227)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamsServiceSearchAllReq"``

#### Defined in

[src/teams_pb.ts:1228](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1228)

## Methods

### clone

▸ **clone**(): [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md) \| `PlainMessage`<[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

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

[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md) \| `PlainMessage`<[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md) \| `PlainMessage`<[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1252)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Defined in

[src/teams_pb.ts:1240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1240)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Defined in

[src/teams_pb.ts:1244](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1244)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceSearchAllReq`](TeamsServiceSearchAllReq.md)

#### Defined in

[src/teams_pb.ts:1248](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L1248)
