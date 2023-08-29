[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsItemsList

# Class: SkillsGroupsItemsList

Describes the message consisting of the list of skill group params

**`Generated`**

from message Genesis.SkillsGroupsItemsList

## Hierarchy

- `Message`<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\>

  ↳ **`SkillsGroupsItemsList`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsItemsList.md#constructor)

### Properties

- [list](SkillsGroupsItemsList.md#list)
- [fields](SkillsGroupsItemsList.md#fields)
- [runtime](SkillsGroupsItemsList.md#runtime)
- [typeName](SkillsGroupsItemsList.md#typename)

### Methods

- [clone](SkillsGroupsItemsList.md#clone)
- [equals](SkillsGroupsItemsList.md#equals)
- [fromBinary](SkillsGroupsItemsList.md#frombinary)
- [fromJson](SkillsGroupsItemsList.md#fromjson)
- [fromJsonString](SkillsGroupsItemsList.md#fromjsonstring)
- [getType](SkillsGroupsItemsList.md#gettype)
- [toBinary](SkillsGroupsItemsList.md#tobinary)
- [toJSON](SkillsGroupsItemsList.md#tojson)
- [toJson](SkillsGroupsItemsList.md#tojson-1)
- [toJsonString](SkillsGroupsItemsList.md#tojsonstring)
- [equals](SkillsGroupsItemsList.md#equals-1)
- [fromBinary](SkillsGroupsItemsList.md#frombinary-1)
- [fromJson](SkillsGroupsItemsList.md#fromjson-1)
- [fromJsonString](SkillsGroupsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\> |

#### Overrides

Message&lt;SkillsGroupsItemsList\&gt;.constructor

#### Defined in

[src/skills_groups_pb.ts:853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L853)

## Properties

### list

• **list**: [`SkillGroupItem`](SkillGroupItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.SkillGroupItem list = 1;

#### Defined in

[src/skills_groups_pb.ts:851](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L851)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups_pb.ts:860](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L860)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups_pb.ts:858](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L858)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsGroupsItemsList"``

#### Defined in

[src/skills_groups_pb.ts:859](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L859)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

Create a deep copy.

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md) \| `PlainMessage`<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

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

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md) \| `PlainMessage`<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\> |
| `b` | `undefined` \| [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md) \| `PlainMessage`<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups_pb.ts:876](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L876)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Defined in

[src/skills_groups_pb.ts:864](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L864)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Defined in

[src/skills_groups_pb.ts:868](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L868)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Defined in

[src/skills_groups_pb.ts:872](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L872)
