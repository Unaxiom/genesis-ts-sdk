[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsServiceCreateRequest

# Class: SkillsParamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.SkillsParamsServiceCreateRequest

## Hierarchy

- `Message`<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\>

  ↳ **`SkillsParamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsParamsServiceCreateRequest.md#constructor)

### Properties

- [code](SkillsParamsServiceCreateRequest.md#code)
- [description](SkillsParamsServiceCreateRequest.md#description)
- [entityUuid](SkillsParamsServiceCreateRequest.md#entityuuid)
- [formData](SkillsParamsServiceCreateRequest.md#formdata)
- [name](SkillsParamsServiceCreateRequest.md#name)
- [userComment](SkillsParamsServiceCreateRequest.md#usercomment)
- [vaultFolderId](SkillsParamsServiceCreateRequest.md#vaultfolderid)
- [fields](SkillsParamsServiceCreateRequest.md#fields)
- [runtime](SkillsParamsServiceCreateRequest.md#runtime)
- [typeName](SkillsParamsServiceCreateRequest.md#typename)

### Methods

- [clone](SkillsParamsServiceCreateRequest.md#clone)
- [equals](SkillsParamsServiceCreateRequest.md#equals)
- [fromBinary](SkillsParamsServiceCreateRequest.md#frombinary)
- [fromJson](SkillsParamsServiceCreateRequest.md#fromjson)
- [fromJsonString](SkillsParamsServiceCreateRequest.md#fromjsonstring)
- [getType](SkillsParamsServiceCreateRequest.md#gettype)
- [toBinary](SkillsParamsServiceCreateRequest.md#tobinary)
- [toJSON](SkillsParamsServiceCreateRequest.md#tojson)
- [toJson](SkillsParamsServiceCreateRequest.md#tojson-1)
- [toJsonString](SkillsParamsServiceCreateRequest.md#tojsonstring)
- [equals](SkillsParamsServiceCreateRequest.md#equals-1)
- [fromBinary](SkillsParamsServiceCreateRequest.md#frombinary-1)
- [fromJson](SkillsParamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SkillsParamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;SkillsParamsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/skills_params_pb.ts:150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L150)

## Properties

### code

• **code**: `string` = `""`

The skill param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_params_pb.ts:134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L134)

___

### description

• **description**: `string` = `""`

The description of the skill param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/skills_params_pb.ts:141](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L141)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/skills_params_pb.ts:106](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L106)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/skills_params_pb.ts:148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L148)

___

### name

• **name**: `string` = `""`

The name of the skill param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_params_pb.ts:127](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L127)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/skills_params_pb.ts:113](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L113)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/skills_params_pb.ts:120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L120)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params_pb.ts:157](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L157)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params_pb.ts:155](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L155)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsParamsServiceCreateRequest"``

#### Defined in

[src/skills_params_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L156)

## Methods

### clone

▸ **clone**(): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md) \| `PlainMessage`<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

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

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md) \| `PlainMessage`<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md) \| `PlainMessage`<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_params_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L179)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Defined in

[src/skills_params_pb.ts:167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L167)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Defined in

[src/skills_params_pb.ts:171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L171)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Defined in

[src/skills_params_pb.ts:175](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L175)
