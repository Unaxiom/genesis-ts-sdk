[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceSearchAllReq

# Class: SkillsGroupsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.SkillsGroupsServiceSearchAllReq

## Hierarchy

- `Message`<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\>

  ↳ **`SkillsGroupsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceSearchAllReq.md#constructor)

### Properties

- [count](SkillsGroupsServiceSearchAllReq.md#count)
- [entityUuid](SkillsGroupsServiceSearchAllReq.md#entityuuid)
- [isActive](SkillsGroupsServiceSearchAllReq.md#isactive)
- [offset](SkillsGroupsServiceSearchAllReq.md#offset)
- [searchKey](SkillsGroupsServiceSearchAllReq.md#searchkey)
- [sortKey](SkillsGroupsServiceSearchAllReq.md#sortkey)
- [sortOrder](SkillsGroupsServiceSearchAllReq.md#sortorder)
- [status](SkillsGroupsServiceSearchAllReq.md#status)
- [fields](SkillsGroupsServiceSearchAllReq.md#fields)
- [runtime](SkillsGroupsServiceSearchAllReq.md#runtime)
- [typeName](SkillsGroupsServiceSearchAllReq.md#typename)

### Methods

- [clone](SkillsGroupsServiceSearchAllReq.md#clone)
- [equals](SkillsGroupsServiceSearchAllReq.md#equals)
- [fromBinary](SkillsGroupsServiceSearchAllReq.md#frombinary)
- [fromJson](SkillsGroupsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SkillsGroupsServiceSearchAllReq.md#fromjsonstring)
- [getType](SkillsGroupsServiceSearchAllReq.md#gettype)
- [toBinary](SkillsGroupsServiceSearchAllReq.md#tobinary)
- [toJSON](SkillsGroupsServiceSearchAllReq.md#tojson)
- [toJson](SkillsGroupsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SkillsGroupsServiceSearchAllReq.md#tojsonstring)
- [equals](SkillsGroupsServiceSearchAllReq.md#equals-1)
- [fromBinary](SkillsGroupsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SkillsGroupsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;SkillsGroupsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/skills_groups_pb.ts:1394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1394)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/skills_groups_pb.ts:1350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1350)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/skills_groups_pb.ts:1378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1378)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/skills_groups_pb.ts:1343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1343)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/skills_groups_pb.ts:1357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1357)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/skills_groups_pb.ts:1392](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1392)

___

### sortKey

• **sortKey**: [`SKILL_GROUP_SORT_KEY`](../enums/SKILL_GROUP_SORT_KEY.md) = `SKILL_GROUP_SORT_KEY.SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SKILL_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_groups_pb.ts:1371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1371)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/skills_groups_pb.ts:1364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1364)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/skills_groups_pb.ts:1385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1385)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups_pb.ts:1401](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1401)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups_pb.ts:1399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1399)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsGroupsServiceSearchAllReq"``

#### Defined in

[src/skills_groups_pb.ts:1400](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1400)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

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

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups_pb.ts:1424](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1424)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Defined in

[src/skills_groups_pb.ts:1412](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1412)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Defined in

[src/skills_groups_pb.ts:1416](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1416)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Defined in

[src/skills_groups_pb.ts:1420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1420)
