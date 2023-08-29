[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UpdatePasswordReq

# Class: UpdatePasswordReq

Describes the payload that is required to update the password of a user (by an administrator)

**`Generated`**

from message Genesis.UpdatePasswordReq

## Hierarchy

- `Message`<[`UpdatePasswordReq`](UpdatePasswordReq.md)\>

  ↳ **`UpdatePasswordReq`**

## Table of contents

### Constructors

- [constructor](UpdatePasswordReq.md#constructor)

### Properties

- [id](UpdatePasswordReq.md#id)
- [plainTextPassword](UpdatePasswordReq.md#plaintextpassword)
- [userComment](UpdatePasswordReq.md#usercomment)
- [fields](UpdatePasswordReq.md#fields)
- [runtime](UpdatePasswordReq.md#runtime)
- [typeName](UpdatePasswordReq.md#typename)

### Methods

- [clone](UpdatePasswordReq.md#clone)
- [equals](UpdatePasswordReq.md#equals)
- [fromBinary](UpdatePasswordReq.md#frombinary)
- [fromJson](UpdatePasswordReq.md#fromjson)
- [fromJsonString](UpdatePasswordReq.md#fromjsonstring)
- [getType](UpdatePasswordReq.md#gettype)
- [toBinary](UpdatePasswordReq.md#tobinary)
- [toJSON](UpdatePasswordReq.md#tojson)
- [toJson](UpdatePasswordReq.md#tojson-1)
- [toJsonString](UpdatePasswordReq.md#tojsonstring)
- [equals](UpdatePasswordReq.md#equals-1)
- [fromBinary](UpdatePasswordReq.md#frombinary-1)
- [fromJson](UpdatePasswordReq.md#fromjson-1)
- [fromJsonString](UpdatePasswordReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UpdatePasswordReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UpdatePasswordReq`](UpdatePasswordReq.md)\> |

#### Overrides

Message&lt;UpdatePasswordReq\&gt;.constructor

#### Defined in

[src/base_pb.ts:874](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L874)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/base_pb.ts:865](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L865)

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

The plain text password using which the user can login

**`Generated`**

from field: string plain_text_password = 10;

#### Defined in

[src/base_pb.ts:872](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L872)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/base_pb.ts:858](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L858)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:881](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L881)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:879](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L879)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UpdatePasswordReq"``

#### Defined in

[src/base_pb.ts:880](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L880)

## Methods

### clone

▸ **clone**(): [`UpdatePasswordReq`](UpdatePasswordReq.md)

Create a deep copy.

#### Returns

[`UpdatePasswordReq`](UpdatePasswordReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UpdatePasswordReq`](UpdatePasswordReq.md) \| `PlainMessage`<[`UpdatePasswordReq`](UpdatePasswordReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UpdatePasswordReq`](UpdatePasswordReq.md)

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

[`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UpdatePasswordReq`](UpdatePasswordReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UpdatePasswordReq`](UpdatePasswordReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UpdatePasswordReq`](UpdatePasswordReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UpdatePasswordReq`](UpdatePasswordReq.md)\>

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
| `a` | `undefined` \| [`UpdatePasswordReq`](UpdatePasswordReq.md) \| `PlainMessage`<[`UpdatePasswordReq`](UpdatePasswordReq.md)\> |
| `b` | `undefined` \| [`UpdatePasswordReq`](UpdatePasswordReq.md) \| `PlainMessage`<[`UpdatePasswordReq`](UpdatePasswordReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L899)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Defined in

[src/base_pb.ts:887](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L887)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Defined in

[src/base_pb.ts:891](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L891)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UpdatePasswordReq`](UpdatePasswordReq.md)

#### Defined in

[src/base_pb.ts:895](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L895)
