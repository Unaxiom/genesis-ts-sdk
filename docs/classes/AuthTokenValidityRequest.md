[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AuthTokenValidityRequest

# Class: AuthTokenValidityRequest

Describes the data structure required to check if the login is still valid

**`Generated`**

from message Genesis.AuthTokenValidityRequest

## Hierarchy

- `Message`<[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)\>

  ↳ **`AuthTokenValidityRequest`**

## Table of contents

### Constructors

- [constructor](AuthTokenValidityRequest.md#constructor)

### Properties

- [authToken](AuthTokenValidityRequest.md#authtoken)
- [fields](AuthTokenValidityRequest.md#fields)
- [runtime](AuthTokenValidityRequest.md#runtime)
- [typeName](AuthTokenValidityRequest.md#typename)

### Methods

- [clone](AuthTokenValidityRequest.md#clone)
- [equals](AuthTokenValidityRequest.md#equals)
- [fromBinary](AuthTokenValidityRequest.md#frombinary)
- [fromJson](AuthTokenValidityRequest.md#fromjson)
- [fromJsonString](AuthTokenValidityRequest.md#fromjsonstring)
- [getType](AuthTokenValidityRequest.md#gettype)
- [toBinary](AuthTokenValidityRequest.md#tobinary)
- [toJSON](AuthTokenValidityRequest.md#tojson)
- [toJson](AuthTokenValidityRequest.md#tojson-1)
- [toJsonString](AuthTokenValidityRequest.md#tojsonstring)
- [equals](AuthTokenValidityRequest.md#equals-1)
- [fromBinary](AuthTokenValidityRequest.md#frombinary-1)
- [fromJson](AuthTokenValidityRequest.md#fromjson-1)
- [fromJsonString](AuthTokenValidityRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AuthTokenValidityRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)\> |

#### Overrides

Message&lt;AuthTokenValidityRequest\&gt;.constructor

#### Defined in

[src/logins_pb.ts:139](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L139)

## Properties

### authToken

• **authToken**: `string` = `""`

The token whose validity needs to be determined

**`Generated`**

from field: string auth_token = 1;

#### Defined in

[src/logins_pb.ts:137](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L137)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/logins_pb.ts:146](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L146)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/logins_pb.ts:144](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L144)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AuthTokenValidityRequest"``

#### Defined in

[src/logins_pb.ts:145](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L145)

## Methods

### clone

▸ **clone**(): [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

Create a deep copy.

#### Returns

[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md) \| `PlainMessage`<[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

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

[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)\>

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
| `a` | `undefined` \| [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md) \| `PlainMessage`<[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)\> |
| `b` | `undefined` \| [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md) \| `PlainMessage`<[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/logins_pb.ts:162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L162)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Defined in

[src/logins_pb.ts:150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L150)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Defined in

[src/logins_pb.ts:154](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L154)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AuthTokenValidityRequest`](AuthTokenValidityRequest.md)

#### Defined in

[src/logins_pb.ts:158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L158)
