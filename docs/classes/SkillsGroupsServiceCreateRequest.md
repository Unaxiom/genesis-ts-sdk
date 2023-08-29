[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceCreateRequest

# Class: SkillsGroupsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.SkillsGroupsServiceCreateRequest

## Hierarchy

- `Message`<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\>

  ↳ **`SkillsGroupsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceCreateRequest.md#constructor)

### Properties

- [code](SkillsGroupsServiceCreateRequest.md#code)
- [description](SkillsGroupsServiceCreateRequest.md#description)
- [entityUuid](SkillsGroupsServiceCreateRequest.md#entityuuid)
- [formData](SkillsGroupsServiceCreateRequest.md#formdata)
- [name](SkillsGroupsServiceCreateRequest.md#name)
- [roleId](SkillsGroupsServiceCreateRequest.md#roleid)
- [userComment](SkillsGroupsServiceCreateRequest.md#usercomment)
- [vaultFolderId](SkillsGroupsServiceCreateRequest.md#vaultfolderid)
- [fields](SkillsGroupsServiceCreateRequest.md#fields)
- [runtime](SkillsGroupsServiceCreateRequest.md#runtime)
- [typeName](SkillsGroupsServiceCreateRequest.md#typename)

### Methods

- [clone](SkillsGroupsServiceCreateRequest.md#clone)
- [equals](SkillsGroupsServiceCreateRequest.md#equals)
- [fromBinary](SkillsGroupsServiceCreateRequest.md#frombinary)
- [fromJson](SkillsGroupsServiceCreateRequest.md#fromjson)
- [fromJsonString](SkillsGroupsServiceCreateRequest.md#fromjsonstring)
- [getType](SkillsGroupsServiceCreateRequest.md#gettype)
- [toBinary](SkillsGroupsServiceCreateRequest.md#tobinary)
- [toJSON](SkillsGroupsServiceCreateRequest.md#tojson)
- [toJson](SkillsGroupsServiceCreateRequest.md#tojson-1)
- [toJsonString](SkillsGroupsServiceCreateRequest.md#tojsonstring)
- [equals](SkillsGroupsServiceCreateRequest.md#equals-1)
- [fromBinary](SkillsGroupsServiceCreateRequest.md#frombinary-1)
- [fromJson](SkillsGroupsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;SkillsGroupsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/skills_groups_pb.ts:200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L200)

## Properties

### code

• **code**: `string` = `""`

The skill group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_groups_pb.ts:177](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L177)

___

### description

• **description**: `string` = `""`

The description of the skill group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/skills_groups_pb.ts:191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L191)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/skills_groups_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L149)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/skills_groups_pb.ts:198](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L198)

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_groups_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L170)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: int64 role_id = 12;

#### Defined in

[src/skills_groups_pb.ts:184](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L184)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/skills_groups_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L156)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/skills_groups_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L163)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L207)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups_pb.ts:205](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L205)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsGroupsServiceCreateRequest"``

#### Defined in

[src/skills_groups_pb.ts:206](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L206)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

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

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups_pb.ts:230](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L230)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:218](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L218)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L222)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:226](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L226)
