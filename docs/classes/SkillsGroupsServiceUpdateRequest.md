[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceUpdateRequest

# Class: SkillsGroupsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.SkillsGroupsServiceUpdateRequest

## Hierarchy

- `Message`<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\>

  ↳ **`SkillsGroupsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceUpdateRequest.md#constructor)

### Properties

- [code](SkillsGroupsServiceUpdateRequest.md#code)
- [description](SkillsGroupsServiceUpdateRequest.md#description)
- [formData](SkillsGroupsServiceUpdateRequest.md#formdata)
- [id](SkillsGroupsServiceUpdateRequest.md#id)
- [name](SkillsGroupsServiceUpdateRequest.md#name)
- [notifyUsers](SkillsGroupsServiceUpdateRequest.md#notifyusers)
- [roleId](SkillsGroupsServiceUpdateRequest.md#roleid)
- [userComment](SkillsGroupsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SkillsGroupsServiceUpdateRequest.md#vaultfolderid)
- [fields](SkillsGroupsServiceUpdateRequest.md#fields)
- [runtime](SkillsGroupsServiceUpdateRequest.md#runtime)
- [typeName](SkillsGroupsServiceUpdateRequest.md#typename)

### Methods

- [clone](SkillsGroupsServiceUpdateRequest.md#clone)
- [equals](SkillsGroupsServiceUpdateRequest.md#equals)
- [fromBinary](SkillsGroupsServiceUpdateRequest.md#frombinary)
- [fromJson](SkillsGroupsServiceUpdateRequest.md#fromjson)
- [fromJsonString](SkillsGroupsServiceUpdateRequest.md#fromjsonstring)
- [getType](SkillsGroupsServiceUpdateRequest.md#gettype)
- [toBinary](SkillsGroupsServiceUpdateRequest.md#tobinary)
- [toJSON](SkillsGroupsServiceUpdateRequest.md#tojson)
- [toJson](SkillsGroupsServiceUpdateRequest.md#tojson-1)
- [toJsonString](SkillsGroupsServiceUpdateRequest.md#tojsonstring)
- [equals](SkillsGroupsServiceUpdateRequest.md#equals-1)
- [fromBinary](SkillsGroupsServiceUpdateRequest.md#frombinary-1)
- [fromJson](SkillsGroupsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;SkillsGroupsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/skills_groups_pb.ts:305](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L305)

## Properties

### code

• **code**: `string` = `""`

The skill group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_groups_pb.ts:282](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L282)

___

### description

• **description**: `string` = `""`

The description of the skill group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/skills_groups_pb.ts:296](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L296)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/skills_groups_pb.ts:303](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L303)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/skills_groups_pb.ts:254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L254)

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_groups_pb.ts:275](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L275)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/skills_groups_pb.ts:261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L261)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: int64 role_id = 12;

#### Defined in

[src/skills_groups_pb.ts:289](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L289)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/skills_groups_pb.ts:247](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L247)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/skills_groups_pb.ts:268](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L268)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups_pb.ts:312](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L312)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups_pb.ts:310](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L310)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsGroupsServiceUpdateRequest"``

#### Defined in

[src/skills_groups_pb.ts:311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L311)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

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

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md) \| `PlainMessage`<[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L336)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:324](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L324)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:328](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L328)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceUpdateRequest`](SkillsGroupsServiceUpdateRequest.md)

#### Defined in

[src/skills_groups_pb.ts:332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_groups_pb.ts#L332)
