[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UpdateOwnPasswordReq

# Class: UpdateOwnPasswordReq

Describes the payload that is requred to update the user's own password

**`Generated`**

from message Genesis.UpdateOwnPasswordReq

## Hierarchy

- `Message`<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\>

  ↳ **`UpdateOwnPasswordReq`**

## Table of contents

### Constructors

- [constructor](UpdateOwnPasswordReq.md#constructor)

### Properties

- [oldPlainTextPassword](UpdateOwnPasswordReq.md#oldplaintextpassword)
- [plainTextPassword](UpdateOwnPasswordReq.md#plaintextpassword)
- [userComment](UpdateOwnPasswordReq.md#usercomment)
- [fields](UpdateOwnPasswordReq.md#fields)
- [runtime](UpdateOwnPasswordReq.md#runtime)
- [typeName](UpdateOwnPasswordReq.md#typename)

### Methods

- [clone](UpdateOwnPasswordReq.md#clone)
- [equals](UpdateOwnPasswordReq.md#equals)
- [fromBinary](UpdateOwnPasswordReq.md#frombinary)
- [fromJson](UpdateOwnPasswordReq.md#fromjson)
- [fromJsonString](UpdateOwnPasswordReq.md#fromjsonstring)
- [getType](UpdateOwnPasswordReq.md#gettype)
- [toBinary](UpdateOwnPasswordReq.md#tobinary)
- [toJSON](UpdateOwnPasswordReq.md#tojson)
- [toJson](UpdateOwnPasswordReq.md#tojson-1)
- [toJsonString](UpdateOwnPasswordReq.md#tojsonstring)
- [equals](UpdateOwnPasswordReq.md#equals-1)
- [fromBinary](UpdateOwnPasswordReq.md#frombinary-1)
- [fromJson](UpdateOwnPasswordReq.md#fromjson-1)
- [fromJsonString](UpdateOwnPasswordReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UpdateOwnPasswordReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\> |

#### Overrides

Message&lt;UpdateOwnPasswordReq\&gt;.constructor

#### Defined in

[src/base_pb.ts:932](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L932)

## Properties

### oldPlainTextPassword

• **oldPlainTextPassword**: `string` = `""`

The old login password

**`Generated`**

from field: string old_plain_text_password = 3;

#### Defined in

[src/base_pb.ts:923](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L923)

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

The new password

**`Generated`**

from field: string plain_text_password = 4;

#### Defined in

[src/base_pb.ts:930](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L930)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/base_pb.ts:916](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L916)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:939](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L939)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:937](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L937)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UpdateOwnPasswordReq"``

#### Defined in

[src/base_pb.ts:938](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L938)

## Methods

### clone

▸ **clone**(): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

Create a deep copy.

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md) \| `PlainMessage`<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

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

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\>

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
| `a` | `undefined` \| [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md) \| `PlainMessage`<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\> |
| `b` | `undefined` \| [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md) \| `PlainMessage`<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:957](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L957)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Defined in

[src/base_pb.ts:945](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L945)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Defined in

[src/base_pb.ts:949](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L949)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Defined in

[src/base_pb.ts:953](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L953)
