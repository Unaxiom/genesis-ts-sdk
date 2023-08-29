[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UserPrimaryInfo

# Class: UserPrimaryInfo

Describes the message that is used internally to validate user

**`Generated`**

from message Genesis.UserPrimaryInfo

## Hierarchy

- `Message`<[`UserPrimaryInfo`](UserPrimaryInfo.md)\>

  ↳ **`UserPrimaryInfo`**

## Table of contents

### Constructors

- [constructor](UserPrimaryInfo.md#constructor)

### Properties

- [bloodGroup](UserPrimaryInfo.md#bloodgroup)
- [mfaSecret](UserPrimaryInfo.md#mfasecret)
- [mfaStatus](UserPrimaryInfo.md#mfastatus)
- [mobileRoleId](UserPrimaryInfo.md#mobileroleid)
- [name](UserPrimaryInfo.md#name)
- [password](UserPrimaryInfo.md#password)
- [roleId](UserPrimaryInfo.md#roleid)
- [username](UserPrimaryInfo.md#username)
- [fields](UserPrimaryInfo.md#fields)
- [runtime](UserPrimaryInfo.md#runtime)
- [typeName](UserPrimaryInfo.md#typename)

### Methods

- [clone](UserPrimaryInfo.md#clone)
- [equals](UserPrimaryInfo.md#equals)
- [fromBinary](UserPrimaryInfo.md#frombinary)
- [fromJson](UserPrimaryInfo.md#fromjson)
- [fromJsonString](UserPrimaryInfo.md#fromjsonstring)
- [getType](UserPrimaryInfo.md#gettype)
- [toBinary](UserPrimaryInfo.md#tobinary)
- [toJSON](UserPrimaryInfo.md#tojson)
- [toJson](UserPrimaryInfo.md#tojson-1)
- [toJsonString](UserPrimaryInfo.md#tojsonstring)
- [equals](UserPrimaryInfo.md#equals-1)
- [fromBinary](UserPrimaryInfo.md#frombinary-1)
- [fromJson](UserPrimaryInfo.md#fromjson-1)
- [fromJsonString](UserPrimaryInfo.md#fromjsonstring-1)

## Constructors

### constructor

• **new UserPrimaryInfo**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UserPrimaryInfo`](UserPrimaryInfo.md)\> |

#### Overrides

Message&lt;UserPrimaryInfo\&gt;.constructor

#### Defined in

[src/users_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L987)

## Properties

### bloodGroup

• **bloodGroup**: `string` = `""`

THe Blood Group of the user

**`Generated`**

from field: string blood_group = 20;

#### Defined in

[src/users_pb.ts:985](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L985)

___

### mfaSecret

• **mfaSecret**: `Uint8Array`

Stores the MFA secret

**`Generated`**

from field: bytes mfa_secret = 16;

#### Defined in

[src/users_pb.ts:978](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L978)

___

### mfaStatus

• **mfaStatus**: `boolean` = `false`

Stores if MFA has been enabled by the user

**`Generated`**

from field: bool mfa_status = 15;

#### Defined in

[src/users_pb.ts:971](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L971)

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

The associated mobile role ID

**`Generated`**

from field: int64 mobile_role_id = 14;

#### Defined in

[src/users_pb.ts:964](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L964)

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 11;

#### Defined in

[src/users_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L943)

___

### password

• **password**: `Uint8Array`

Stores the hashed password

**`Generated`**

from field: bytes password = 12;

#### Defined in

[src/users_pb.ts:950](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L950)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: int64 role_id = 13;

#### Defined in

[src/users_pb.ts:957](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L957)

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users_pb.ts:936](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L936)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L994)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:992](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L992)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UserPrimaryInfo"``

#### Defined in

[src/users_pb.ts:993](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L993)

## Methods

### clone

▸ **clone**(): [`UserPrimaryInfo`](UserPrimaryInfo.md)

Create a deep copy.

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

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
| `other` | `undefined` \| ``null`` \| [`UserPrimaryInfo`](UserPrimaryInfo.md) \| `PlainMessage`<[`UserPrimaryInfo`](UserPrimaryInfo.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

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

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UserPrimaryInfo`](UserPrimaryInfo.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UserPrimaryInfo`](UserPrimaryInfo.md)\>

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
| `a` | `undefined` \| [`UserPrimaryInfo`](UserPrimaryInfo.md) \| `PlainMessage`<[`UserPrimaryInfo`](UserPrimaryInfo.md)\> |
| `b` | `undefined` \| [`UserPrimaryInfo`](UserPrimaryInfo.md) \| `PlainMessage`<[`UserPrimaryInfo`](UserPrimaryInfo.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:1017](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1017)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Defined in

[src/users_pb.ts:1005](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1005)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Defined in

[src/users_pb.ts:1009](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1009)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Defined in

[src/users_pb.ts:1013](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1013)
