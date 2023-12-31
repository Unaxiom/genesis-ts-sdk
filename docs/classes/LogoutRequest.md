[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LogoutRequest

# Class: LogoutRequest

Describes the data structure required to logout a user

**`Generated`**

from message Genesis.LogoutRequest

## Hierarchy

- `Message`<[`LogoutRequest`](LogoutRequest.md)\>

  ↳ **`LogoutRequest`**

## Table of contents

### Constructors

- [constructor](LogoutRequest.md#constructor)

### Properties

- [fields](LogoutRequest.md#fields)
- [runtime](LogoutRequest.md#runtime)
- [typeName](LogoutRequest.md#typename)

### Methods

- [clone](LogoutRequest.md#clone)
- [equals](LogoutRequest.md#equals)
- [fromBinary](LogoutRequest.md#frombinary)
- [fromJson](LogoutRequest.md#fromjson)
- [fromJsonString](LogoutRequest.md#fromjsonstring)
- [getType](LogoutRequest.md#gettype)
- [toBinary](LogoutRequest.md#tobinary)
- [toJSON](LogoutRequest.md#tojson)
- [toJson](LogoutRequest.md#tojson-1)
- [toJsonString](LogoutRequest.md#tojsonstring)
- [equals](LogoutRequest.md#equals-1)
- [fromBinary](LogoutRequest.md#frombinary-1)
- [fromJson](LogoutRequest.md#fromjson-1)
- [fromJsonString](LogoutRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LogoutRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LogoutRequest`](LogoutRequest.md)\> |

#### Overrides

Message&lt;LogoutRequest\&gt;.constructor

#### Defined in

[src/logins_pb.ts:174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L174)

## Properties

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/logins_pb.ts:181](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L181)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/logins_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L179)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LogoutRequest"``

#### Defined in

[src/logins_pb.ts:180](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L180)

## Methods

### clone

▸ **clone**(): [`LogoutRequest`](LogoutRequest.md)

Create a deep copy.

#### Returns

[`LogoutRequest`](LogoutRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LogoutRequest`](LogoutRequest.md) \| `PlainMessage`<[`LogoutRequest`](LogoutRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LogoutRequest`](LogoutRequest.md)

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

[`LogoutRequest`](LogoutRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LogoutRequest`](LogoutRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogoutRequest`](LogoutRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LogoutRequest`](LogoutRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogoutRequest`](LogoutRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LogoutRequest`](LogoutRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LogoutRequest`](LogoutRequest.md)\>

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
| `a` | `undefined` \| [`LogoutRequest`](LogoutRequest.md) \| `PlainMessage`<[`LogoutRequest`](LogoutRequest.md)\> |
| `b` | `undefined` \| [`LogoutRequest`](LogoutRequest.md) \| `PlainMessage`<[`LogoutRequest`](LogoutRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/logins_pb.ts:196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L196)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LogoutRequest`](LogoutRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LogoutRequest`](LogoutRequest.md)

#### Defined in

[src/logins_pb.ts:184](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L184)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LogoutRequest`](LogoutRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogoutRequest`](LogoutRequest.md)

#### Defined in

[src/logins_pb.ts:188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L188)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LogoutRequest`](LogoutRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogoutRequest`](LogoutRequest.md)

#### Defined in

[src/logins_pb.ts:192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/logins_pb.ts#L192)
