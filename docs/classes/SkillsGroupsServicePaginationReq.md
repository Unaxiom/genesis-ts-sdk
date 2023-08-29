[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServicePaginationReq

# Class: SkillsGroupsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.SkillsGroupsServicePaginationReq

## Hierarchy

- `Message`<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\>

  ↳ **`SkillsGroupsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServicePaginationReq.md#constructor)

### Properties

- [count](SkillsGroupsServicePaginationReq.md#count)
- [isActive](SkillsGroupsServicePaginationReq.md#isactive)
- [offset](SkillsGroupsServicePaginationReq.md#offset)
- [sortKey](SkillsGroupsServicePaginationReq.md#sortkey)
- [sortOrder](SkillsGroupsServicePaginationReq.md#sortorder)
- [status](SkillsGroupsServicePaginationReq.md#status)
- [fields](SkillsGroupsServicePaginationReq.md#fields)
- [runtime](SkillsGroupsServicePaginationReq.md#runtime)
- [typeName](SkillsGroupsServicePaginationReq.md#typename)

### Methods

- [clone](SkillsGroupsServicePaginationReq.md#clone)
- [equals](SkillsGroupsServicePaginationReq.md#equals)
- [fromBinary](SkillsGroupsServicePaginationReq.md#frombinary)
- [fromJson](SkillsGroupsServicePaginationReq.md#fromjson)
- [fromJsonString](SkillsGroupsServicePaginationReq.md#fromjsonstring)
- [getType](SkillsGroupsServicePaginationReq.md#gettype)
- [toBinary](SkillsGroupsServicePaginationReq.md#tobinary)
- [toJSON](SkillsGroupsServicePaginationReq.md#tojson)
- [toJson](SkillsGroupsServicePaginationReq.md#tojson-1)
- [toJsonString](SkillsGroupsServicePaginationReq.md#tojsonstring)
- [equals](SkillsGroupsServicePaginationReq.md#equals-1)
- [fromBinary](SkillsGroupsServicePaginationReq.md#frombinary-1)
- [fromJson](SkillsGroupsServicePaginationReq.md#fromjson-1)
- [fromJsonString](SkillsGroupsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\> |

#### Overrides

Message&lt;SkillsGroupsServicePaginationReq\&gt;.constructor

#### Defined in

[src/skills_groups_pb.ts:980](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L980)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/skills_groups_pb.ts:950](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L950)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/skills_groups_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L943)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/skills_groups_pb.ts:957](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L957)

___

### sortKey

• **sortKey**: [`SKILL_GROUP_SORT_KEY`](../enums/SKILL_GROUP_SORT_KEY.md) = `SKILL_GROUP_SORT_KEY.SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SKILL_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_groups_pb.ts:971](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L971)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/skills_groups_pb.ts:964](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L964)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this skill group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/skills_groups_pb.ts:978](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L978)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L987)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups_pb.ts:985](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L985)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsGroupsServicePaginationReq"``

#### Defined in

[src/skills_groups_pb.ts:986](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L986)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md) \| `PlainMessage`<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

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

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md) \| `PlainMessage`<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md) \| `PlainMessage`<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups_pb.ts:1008](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1008)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Defined in

[src/skills_groups_pb.ts:996](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L996)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Defined in

[src/skills_groups_pb.ts:1000](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1000)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Defined in

[src/skills_groups_pb.ts:1004](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L1004)
