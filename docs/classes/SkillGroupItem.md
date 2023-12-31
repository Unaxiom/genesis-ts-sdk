[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillGroupItem

# Class: SkillGroupItem

Describes the parameters that constitute a param associated to a skill group

**`Generated`**

from message Genesis.SkillGroupItem

## Hierarchy

- `Message`<[`SkillGroupItem`](SkillGroupItem.md)\>

  ↳ **`SkillGroupItem`**

## Table of contents

### Constructors

- [constructor](SkillGroupItem.md#constructor)

### Properties

- [approvalMetadata](SkillGroupItem.md#approvalmetadata)
- [description](SkillGroupItem.md#description)
- [entityUuid](SkillGroupItem.md#entityuuid)
- [inputValueType](SkillGroupItem.md#inputvaluetype)
- [metadata](SkillGroupItem.md#metadata)
- [needApproval](SkillGroupItem.md#needapproval)
- [numberMaxValue](SkillGroupItem.md#numbermaxvalue)
- [numberMinValue](SkillGroupItem.md#numberminvalue)
- [skillGroupId](SkillGroupItem.md#skillgroupid)
- [skillParamId](SkillGroupItem.md#skillparamid)
- [textValues](SkillGroupItem.md#textvalues)
- [userComment](SkillGroupItem.md#usercomment)
- [fields](SkillGroupItem.md#fields)
- [runtime](SkillGroupItem.md#runtime)
- [typeName](SkillGroupItem.md#typename)

### Methods

- [clone](SkillGroupItem.md#clone)
- [equals](SkillGroupItem.md#equals)
- [fromBinary](SkillGroupItem.md#frombinary)
- [fromJson](SkillGroupItem.md#fromjson)
- [fromJsonString](SkillGroupItem.md#fromjsonstring)
- [getType](SkillGroupItem.md#gettype)
- [toBinary](SkillGroupItem.md#tobinary)
- [toJSON](SkillGroupItem.md#tojson)
- [toJson](SkillGroupItem.md#tojson-1)
- [toJsonString](SkillGroupItem.md#tojsonstring)
- [equals](SkillGroupItem.md#equals-1)
- [fromBinary](SkillGroupItem.md#frombinary-1)
- [fromJson](SkillGroupItem.md#fromjson-1)
- [fromJsonString](SkillGroupItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillGroupItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillGroupItem`](SkillGroupItem.md)\> |

#### Overrides

Message&lt;SkillGroupItem\&gt;.constructor

#### Defined in

[src/skills_groups_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L758)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/skills_groups_pb.ts:693](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L693)

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 20;

#### Defined in

[src/skills_groups_pb.ts:756](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L756)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/skills_groups_pb.ts:679](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L679)

___

### inputValueType

• **inputValueType**: [`SKILL_GROUP_ITEM_INPUT_VALUE_TYPE`](../enums/SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.md) = `SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED`

The input value type of the item

**`Generated`**

from field: Genesis.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE input_value_type = 12;

#### Defined in

[src/skills_groups_pb.ts:728](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L728)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this skill group

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/skills_groups_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L686)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/skills_groups_pb.ts:700](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L700)

___

### numberMaxValue

• **numberMaxValue**: `bigint` = `protoInt64.zero`

The maximum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_max_value = 14;

#### Defined in

[src/skills_groups_pb.ts:742](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L742)

___

### numberMinValue

• **numberMinValue**: `bigint` = `protoInt64.zero`

The minimum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_min_value = 13;

#### Defined in

[src/skills_groups_pb.ts:735](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L735)

___

### skillGroupId

• **skillGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the skill group

**`Generated`**

from field: int64 skill_group_id = 10;

#### Defined in

[src/skills_groups_pb.ts:714](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L714)

___

### skillParamId

• **skillParamId**: `bigint` = `protoInt64.zero`

The ID of the skill param that is a part of the skill group

**`Generated`**

from field: int64 skill_param_id = 11;

#### Defined in

[src/skills_groups_pb.ts:721](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L721)

___

### textValues

• **textValues**: `string`[] = `[]`

The possible values from which a user can choose in case the input type is text-dropdown

**`Generated`**

from field: repeated string text_values = 15;

#### Defined in

[src/skills_groups_pb.ts:749](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L749)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/skills_groups_pb.ts:707](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L707)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups_pb.ts:765](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L765)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups_pb.ts:763](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L763)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillGroupItem"``

#### Defined in

[src/skills_groups_pb.ts:764](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L764)

## Methods

### clone

▸ **clone**(): [`SkillGroupItem`](SkillGroupItem.md)

Create a deep copy.

#### Returns

[`SkillGroupItem`](SkillGroupItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillGroupItem`](SkillGroupItem.md) \| `PlainMessage`<[`SkillGroupItem`](SkillGroupItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillGroupItem`](SkillGroupItem.md)

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

[`SkillGroupItem`](SkillGroupItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillGroupItem`](SkillGroupItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillGroupItem`](SkillGroupItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillGroupItem`](SkillGroupItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillGroupItem`](SkillGroupItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillGroupItem`](SkillGroupItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillGroupItem`](SkillGroupItem.md)\>

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
| `a` | `undefined` \| [`SkillGroupItem`](SkillGroupItem.md) \| `PlainMessage`<[`SkillGroupItem`](SkillGroupItem.md)\> |
| `b` | `undefined` \| [`SkillGroupItem`](SkillGroupItem.md) \| `PlainMessage`<[`SkillGroupItem`](SkillGroupItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups_pb.ts:792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L792)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillGroupItem`](SkillGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillGroupItem`](SkillGroupItem.md)

#### Defined in

[src/skills_groups_pb.ts:780](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L780)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillGroupItem`](SkillGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillGroupItem`](SkillGroupItem.md)

#### Defined in

[src/skills_groups_pb.ts:784](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L784)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillGroupItem`](SkillGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillGroupItem`](SkillGroupItem.md)

#### Defined in

[src/skills_groups_pb.ts:788](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L788)
