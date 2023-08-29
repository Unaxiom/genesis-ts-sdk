[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UserLoginResponse

# Class: UserLoginResponse

Describes the response to a user login request

**`Generated`**

from message Genesis.UserLoginResponse

## Hierarchy

- `Message`<[`UserLoginResponse`](UserLoginResponse.md)\>

  ↳ **`UserLoginResponse`**

## Table of contents

### Constructors

- [constructor](UserLoginResponse.md#constructor)

### Properties

- [authToken](UserLoginResponse.md#authtoken)
- [expiresAt](UserLoginResponse.md#expiresat)
- [username](UserLoginResponse.md#username)
- [fields](UserLoginResponse.md#fields)
- [runtime](UserLoginResponse.md#runtime)
- [typeName](UserLoginResponse.md#typename)

### Methods

- [clone](UserLoginResponse.md#clone)
- [equals](UserLoginResponse.md#equals)
- [fromBinary](UserLoginResponse.md#frombinary)
- [fromJson](UserLoginResponse.md#fromjson)
- [fromJsonString](UserLoginResponse.md#fromjsonstring)
- [getType](UserLoginResponse.md#gettype)
- [toBinary](UserLoginResponse.md#tobinary)
- [toJSON](UserLoginResponse.md#tojson)
- [toJson](UserLoginResponse.md#tojson-1)
- [toJsonString](UserLoginResponse.md#tojsonstring)
- [equals](UserLoginResponse.md#equals-1)
- [fromBinary](UserLoginResponse.md#frombinary-1)
- [fromJson](UserLoginResponse.md#fromjson-1)
- [fromJsonString](UserLoginResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new UserLoginResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UserLoginResponse`](UserLoginResponse.md)\> |

#### Overrides

Message&lt;UserLoginResponse\&gt;.constructor

#### Defined in

[src/logins_pb.ts:95](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L95)

## Properties

### authToken

• **authToken**: `string` = `""`

The token that needs to be used as part of every request

**`Generated`**

from field: string auth_token = 2;

#### Defined in

[src/logins_pb.ts:86](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L86)

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

The unix timestamp after which the auth_token is invalid

**`Generated`**

from field: int64 expires_at = 3;

#### Defined in

[src/logins_pb.ts:93](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L93)

___

### username

• **username**: `string` = `""`

Username of the user that just logged in

**`Generated`**

from field: string username = 1;

#### Defined in

[src/logins_pb.ts:79](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L79)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/logins_pb.ts:102](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L102)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/logins_pb.ts:100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L100)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UserLoginResponse"``

#### Defined in

[src/logins_pb.ts:101](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L101)

## Methods

### clone

▸ **clone**(): [`UserLoginResponse`](UserLoginResponse.md)

Create a deep copy.

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`UserLoginResponse`](UserLoginResponse.md) \| `PlainMessage`<[`UserLoginResponse`](UserLoginResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

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

[`UserLoginResponse`](UserLoginResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UserLoginResponse`](UserLoginResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UserLoginResponse`](UserLoginResponse.md)\>

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
| `a` | `undefined` \| [`UserLoginResponse`](UserLoginResponse.md) \| `PlainMessage`<[`UserLoginResponse`](UserLoginResponse.md)\> |
| `b` | `undefined` \| [`UserLoginResponse`](UserLoginResponse.md) \| `PlainMessage`<[`UserLoginResponse`](UserLoginResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/logins_pb.ts:120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L120)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Defined in

[src/logins_pb.ts:108](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L108)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Defined in

[src/logins_pb.ts:112](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L112)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Defined in

[src/logins_pb.ts:116](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L116)
