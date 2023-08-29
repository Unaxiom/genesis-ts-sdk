[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsServiceFilterReq

# Class: SkillsParamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.SkillsParamsServiceFilterReq

## Hierarchy

- `Message`<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\>

  ↳ **`SkillsParamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SkillsParamsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SkillsParamsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SkillsParamsServiceFilterReq.md#approvedonend)
- [approvedOnStart](SkillsParamsServiceFilterReq.md#approvedonstart)
- [approverRoleId](SkillsParamsServiceFilterReq.md#approverroleid)
- [code](SkillsParamsServiceFilterReq.md#code)
- [completedOnEnd](SkillsParamsServiceFilterReq.md#completedonend)
- [completedOnStart](SkillsParamsServiceFilterReq.md#completedonstart)
- [count](SkillsParamsServiceFilterReq.md#count)
- [creationTimestampEnd](SkillsParamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SkillsParamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](SkillsParamsServiceFilterReq.md#entityuuid)
- [isActive](SkillsParamsServiceFilterReq.md#isactive)
- [name](SkillsParamsServiceFilterReq.md#name)
- [offset](SkillsParamsServiceFilterReq.md#offset)
- [sortKey](SkillsParamsServiceFilterReq.md#sortkey)
- [sortOrder](SkillsParamsServiceFilterReq.md#sortorder)
- [status](SkillsParamsServiceFilterReq.md#status)
- [fields](SkillsParamsServiceFilterReq.md#fields)
- [runtime](SkillsParamsServiceFilterReq.md#runtime)
- [typeName](SkillsParamsServiceFilterReq.md#typename)

### Methods

- [clone](SkillsParamsServiceFilterReq.md#clone)
- [equals](SkillsParamsServiceFilterReq.md#equals)
- [fromBinary](SkillsParamsServiceFilterReq.md#frombinary)
- [fromJson](SkillsParamsServiceFilterReq.md#fromjson)
- [fromJsonString](SkillsParamsServiceFilterReq.md#fromjsonstring)
- [getType](SkillsParamsServiceFilterReq.md#gettype)
- [toBinary](SkillsParamsServiceFilterReq.md#tobinary)
- [toJSON](SkillsParamsServiceFilterReq.md#tojson)
- [toJson](SkillsParamsServiceFilterReq.md#tojson-1)
- [toJsonString](SkillsParamsServiceFilterReq.md#tojsonstring)
- [equals](SkillsParamsServiceFilterReq.md#equals-1)
- [fromBinary](SkillsParamsServiceFilterReq.md#frombinary-1)
- [fromJson](SkillsParamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SkillsParamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\> |

#### Overrides

Message&lt;SkillsParamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/skills_params_pb.ts:802](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L802)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/skills_params_pb.ts:765](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L765)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/skills_params_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L758)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/skills_params_pb.ts:751](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L751)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/skills_params_pb.ts:772](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L772)

___

### code

• **code**: `string` = `""`

The skill param code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/skills_params_pb.ts:800](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L800)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/skills_params_pb.ts:786](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L786)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/skills_params_pb.ts:779](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L779)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/skills_params_pb.ts:695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L695)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/skills_params_pb.ts:730](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L730)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/skills_params_pb.ts:723](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L723)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/skills_params_pb.ts:737](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L737)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/skills_params_pb.ts:688](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L688)

___

### name

• **name**: `string` = `""`

The name of the skill param

**`Generated`**

from field: string name = 20;

#### Defined in

[src/skills_params_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L793)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/skills_params_pb.ts:702](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L702)

___

### sortKey

• **sortKey**: [`SKILL_PARAM_SORT_KEY`](../enums/SKILL_PARAM_SORT_KEY.md) = `SKILL_PARAM_SORT_KEY.SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SKILL_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_params_pb.ts:716](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L716)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/skills_params_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L709)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this skill param

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/skills_params_pb.ts:744](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L744)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params_pb.ts:809](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L809)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params_pb.ts:807](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L807)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsParamsServiceFilterReq"``

#### Defined in

[src/skills_params_pb.ts:808](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L808)

## Methods

### clone

▸ **clone**(): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md) \| `PlainMessage`<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

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

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md) \| `PlainMessage`<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md) \| `PlainMessage`<[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_params_pb.ts:841](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L841)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Defined in

[src/skills_params_pb.ts:829](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L829)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Defined in

[src/skills_params_pb.ts:833](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L833)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceFilterReq`](SkillsParamsServiceFilterReq.md)

#### Defined in

[src/skills_params_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L837)
