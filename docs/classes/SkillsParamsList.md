[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsList

# Class: SkillsParamsList

Describes the message consisting of the list of records

**`Generated`**

from message Genesis.SkillsParamsList

## Hierarchy

- `Message`<[`SkillsParamsList`](SkillsParamsList.md)\>

  ↳ **`SkillsParamsList`**

## Table of contents

### Constructors

- [constructor](SkillsParamsList.md#constructor)

### Properties

- [list](SkillsParamsList.md#list)
- [fields](SkillsParamsList.md#fields)
- [runtime](SkillsParamsList.md#runtime)
- [typeName](SkillsParamsList.md#typename)

### Methods

- [clone](SkillsParamsList.md#clone)
- [equals](SkillsParamsList.md#equals)
- [fromBinary](SkillsParamsList.md#frombinary)
- [fromJson](SkillsParamsList.md#fromjson)
- [fromJsonString](SkillsParamsList.md#fromjsonstring)
- [getType](SkillsParamsList.md#gettype)
- [toBinary](SkillsParamsList.md#tobinary)
- [toJSON](SkillsParamsList.md#tojson)
- [toJson](SkillsParamsList.md#tojson-1)
- [toJsonString](SkillsParamsList.md#tojsonstring)
- [equals](SkillsParamsList.md#equals-1)
- [fromBinary](SkillsParamsList.md#frombinary-1)
- [fromJson](SkillsParamsList.md#fromjson-1)
- [fromJsonString](SkillsParamsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SkillsParamsList`](SkillsParamsList.md)\> |

#### Overrides

Message&lt;SkillsParamsList\&gt;.constructor

#### Defined in

[src/skills_params_pb.ts:418](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L418)

## Properties

### list

• **list**: [`SkillParam`](SkillParam.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.SkillParam list = 1;

#### Defined in

[src/skills_params_pb.ts:416](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L416)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params_pb.ts:425](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L425)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params_pb.ts:423](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L423)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SkillsParamsList"``

#### Defined in

[src/skills_params_pb.ts:424](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L424)

## Methods

### clone

▸ **clone**(): [`SkillsParamsList`](SkillsParamsList.md)

Create a deep copy.

#### Returns

[`SkillsParamsList`](SkillsParamsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsList`](SkillsParamsList.md) \| `PlainMessage`<[`SkillsParamsList`](SkillsParamsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsList`](SkillsParamsList.md)

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

[`SkillsParamsList`](SkillsParamsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsList`](SkillsParamsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsList`](SkillsParamsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsList`](SkillsParamsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsList`](SkillsParamsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SkillsParamsList`](SkillsParamsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SkillsParamsList`](SkillsParamsList.md)\>

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
| `a` | `undefined` \| [`SkillsParamsList`](SkillsParamsList.md) \| `PlainMessage`<[`SkillsParamsList`](SkillsParamsList.md)\> |
| `b` | `undefined` \| [`SkillsParamsList`](SkillsParamsList.md) \| `PlainMessage`<[`SkillsParamsList`](SkillsParamsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_params_pb.ts:441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L441)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SkillsParamsList`](SkillsParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsList`](SkillsParamsList.md)

#### Defined in

[src/skills_params_pb.ts:429](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L429)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SkillsParamsList`](SkillsParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsList`](SkillsParamsList.md)

#### Defined in

[src/skills_params_pb.ts:433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L433)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsList`](SkillsParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsList`](SkillsParamsList.md)

#### Defined in

[src/skills_params_pb.ts:437](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/skills_params_pb.ts#L437)
