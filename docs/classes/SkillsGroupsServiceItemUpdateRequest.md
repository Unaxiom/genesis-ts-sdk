[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceItemUpdateRequest

# Class: SkillsGroupsServiceItemUpdateRequest

Describes the parameters required to update a param in a skill group

**`Generated`**

from message Genesis.SkillsGroupsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)\>

  ↳ **`SkillsGroupsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceItemUpdateRequest.md#constructor)

### Properties

- [description](SkillsGroupsServiceItemUpdateRequest.md#description)
- [id](SkillsGroupsServiceItemUpdateRequest.md#id)
- [inputValueType](SkillsGroupsServiceItemUpdateRequest.md#inputvaluetype)
- [numberMaxValue](SkillsGroupsServiceItemUpdateRequest.md#numbermaxvalue)
- [numberMinValue](SkillsGroupsServiceItemUpdateRequest.md#numberminvalue)
- [textValues](SkillsGroupsServiceItemUpdateRequest.md#textvalues)
- [userComment](SkillsGroupsServiceItemUpdateRequest.md#usercomment)
- [fields](SkillsGroupsServiceItemUpdateRequest.md#fields)
- [runtime](SkillsGroupsServiceItemUpdateRequest.md#runtime)
- [typeName](SkillsGroupsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SkillsGroupsServiceItemUpdateRequest.md#clone)
- [equals](SkillsGroupsServiceItemUpdateRequest.md#equals)
- [fromBinary](SkillsGroupsServiceItemUpdateRequest.md#frombinary)
- [fromJson](SkillsGroupsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SkillsGroupsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SkillsGroupsServiceItemUpdateRequest.md#gettype)
- [toBinary](SkillsGroupsServiceItemUpdateRequest.md#tobinary)
- [toJSON](SkillsGroupsServiceItemUpdateRequest.md#tojson)
- [toJson](SkillsGroupsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SkillsGroupsServiceItemUpdateRequest.md#tojsonstring)
- [equals](SkillsGroupsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SkillsGroupsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SkillsGroupsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;SkillsGroupsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/skills_groups_pb.ts:633](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L633)

## Properties

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 20;

#### Defined in

[src/skills_groups_pb.ts:631](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L631)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/skills_groups_pb.ts:596](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L596)

___

### inputValueType

• **inputValueType**: [`SKILL_GROUP_ITEM_INPUT_VALUE_TYPE`](../enums/SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.md) = `SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED`

The input value type of the item

**`Generated`**

from field: Genesis.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE input_value_type = 12;

#### Defined in

[src/skills_groups_pb.ts:603](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L603)

___

### numberMaxValue

• **numberMaxValue**: `bigint` = `protoInt64.zero`

The maximum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_max_value = 14;

#### Defined in

[src/skills_groups_pb.ts:617](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L617)

___

### numberMinValue

• **numberMinValue**: `bigint` = `protoInt64.zero`

The minimum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_min_value = 13;

#### Defined in

[src/skills_groups_pb.ts:610](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L610)

___

### textValues

• **textValues**: `string`[] = `[]`

The possible values from which a user can choose in case the input type is text-dropdown

**`Generated`**

from field: repeated string text_values = 15;

#### Defined in

[src/skills_groups_pb.ts:624](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L624)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/skills_groups_pb.ts:589](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L589)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups_pb.ts:640](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L640)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups_pb.ts:638](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L638)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsGroupsServiceItemUpdateRequest"``

#### Defined in

[src/skills_groups_pb.ts:639](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L639)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

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

[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups_pb.ts:662](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L662)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:650](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L650)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:654](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L654)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceItemUpdateRequest`](SkillsGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:658](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L658)
