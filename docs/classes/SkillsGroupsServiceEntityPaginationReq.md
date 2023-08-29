[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceEntityPaginationReq

# Class: SkillsGroupsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.SkillsGroupsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)\>

  ↳ **`SkillsGroupsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](SkillsGroupsServiceEntityPaginationReq.md#count)
- [entityUuid](SkillsGroupsServiceEntityPaginationReq.md#entityuuid)
- [isActive](SkillsGroupsServiceEntityPaginationReq.md#isactive)
- [offset](SkillsGroupsServiceEntityPaginationReq.md#offset)
- [sortKey](SkillsGroupsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](SkillsGroupsServiceEntityPaginationReq.md#sortorder)
- [fields](SkillsGroupsServiceEntityPaginationReq.md#fields)
- [runtime](SkillsGroupsServiceEntityPaginationReq.md#runtime)
- [typeName](SkillsGroupsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](SkillsGroupsServiceEntityPaginationReq.md#clone)
- [equals](SkillsGroupsServiceEntityPaginationReq.md#equals)
- [fromBinary](SkillsGroupsServiceEntityPaginationReq.md#frombinary)
- [fromJson](SkillsGroupsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](SkillsGroupsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](SkillsGroupsServiceEntityPaginationReq.md#gettype)
- [toBinary](SkillsGroupsServiceEntityPaginationReq.md#tobinary)
- [toJSON](SkillsGroupsServiceEntityPaginationReq.md#tojson)
- [toJson](SkillsGroupsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](SkillsGroupsServiceEntityPaginationReq.md#tojsonstring)
- [equals](SkillsGroupsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](SkillsGroupsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](SkillsGroupsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;SkillsGroupsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/skills_groups_pb.ts:1128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1128)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/skills_groups_pb.ts:1098](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1098)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/skills_groups_pb.ts:1126](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1126)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/skills_groups_pb.ts:1091](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1091)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/skills_groups_pb.ts:1105](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1105)

___

### sortKey

• **sortKey**: [`SKILL_GROUP_SORT_KEY`](../enums/SKILL_GROUP_SORT_KEY.md) = `SKILL_GROUP_SORT_KEY.SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SKILL_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_groups_pb.ts:1119](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1119)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/skills_groups_pb.ts:1112](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1112)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups_pb.ts:1135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1135)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups_pb.ts:1133](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1133)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsGroupsServiceEntityPaginationReq"``

#### Defined in

[src/skills_groups_pb.ts:1134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1134)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

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

[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups_pb.ts:1156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1156)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/skills_groups_pb.ts:1144](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1144)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/skills_groups_pb.ts:1148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1148)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceEntityPaginationReq`](SkillsGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/skills_groups_pb.ts:1152](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1152)
