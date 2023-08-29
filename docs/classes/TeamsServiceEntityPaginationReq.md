[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceEntityPaginationReq

# Class: TeamsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.TeamsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)\>

  ↳ **`TeamsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](TeamsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](TeamsServiceEntityPaginationReq.md#count)
- [entityUuid](TeamsServiceEntityPaginationReq.md#entityuuid)
- [isActive](TeamsServiceEntityPaginationReq.md#isactive)
- [offset](TeamsServiceEntityPaginationReq.md#offset)
- [sortKey](TeamsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](TeamsServiceEntityPaginationReq.md#sortorder)
- [fields](TeamsServiceEntityPaginationReq.md#fields)
- [runtime](TeamsServiceEntityPaginationReq.md#runtime)
- [typeName](TeamsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](TeamsServiceEntityPaginationReq.md#clone)
- [equals](TeamsServiceEntityPaginationReq.md#equals)
- [fromBinary](TeamsServiceEntityPaginationReq.md#frombinary)
- [fromJson](TeamsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](TeamsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](TeamsServiceEntityPaginationReq.md#gettype)
- [toBinary](TeamsServiceEntityPaginationReq.md#tobinary)
- [toJSON](TeamsServiceEntityPaginationReq.md#tojson)
- [toJson](TeamsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](TeamsServiceEntityPaginationReq.md#tojsonstring)
- [equals](TeamsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](TeamsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](TeamsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](TeamsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;TeamsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/teams_pb.ts:948](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L948)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/teams_pb.ts:918](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L918)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/teams_pb.ts:946](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L946)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/teams_pb.ts:911](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L911)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/teams_pb.ts:925](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L925)

___

### sortKey

• **sortKey**: [`TEAM_SORT_KEY`](../enums/TEAM_SORT_KEY.md) = `TEAM_SORT_KEY.TEAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.TEAM_SORT_KEY sort_key = 5;

#### Defined in

[src/teams_pb.ts:939](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L939)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/teams_pb.ts:932](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L932)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L955)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:953](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L953)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamsServiceEntityPaginationReq"``

#### Defined in

[src/teams_pb.ts:954](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L954)

## Methods

### clone

▸ **clone**(): [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md) \| `PlainMessage`<[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

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

[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md) \| `PlainMessage`<[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md) \| `PlainMessage`<[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L976)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Defined in

[src/teams_pb.ts:964](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L964)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Defined in

[src/teams_pb.ts:968](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L968)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceEntityPaginationReq`](TeamsServiceEntityPaginationReq.md)

#### Defined in

[src/teams_pb.ts:972](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L972)
