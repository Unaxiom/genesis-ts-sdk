[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UsersServiceRegisterMobileDeviceRequest

# Class: UsersServiceRegisterMobileDeviceRequest

Describes the message that is required to register a user's device

**`Generated`**

from message Genesis.UsersServiceRegisterMobileDeviceRequest

## Hierarchy

- `Message`<[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)\>

  ↳ **`UsersServiceRegisterMobileDeviceRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceRegisterMobileDeviceRequest.md#constructor)

### Properties

- [deviceOs](UsersServiceRegisterMobileDeviceRequest.md#deviceos)
- [deviceToken](UsersServiceRegisterMobileDeviceRequest.md#devicetoken)
- [entityUuid](UsersServiceRegisterMobileDeviceRequest.md#entityuuid)
- [userId](UsersServiceRegisterMobileDeviceRequest.md#userid)
- [fields](UsersServiceRegisterMobileDeviceRequest.md#fields)
- [runtime](UsersServiceRegisterMobileDeviceRequest.md#runtime)
- [typeName](UsersServiceRegisterMobileDeviceRequest.md#typename)

### Methods

- [clone](UsersServiceRegisterMobileDeviceRequest.md#clone)
- [equals](UsersServiceRegisterMobileDeviceRequest.md#equals)
- [fromBinary](UsersServiceRegisterMobileDeviceRequest.md#frombinary)
- [fromJson](UsersServiceRegisterMobileDeviceRequest.md#fromjson)
- [fromJsonString](UsersServiceRegisterMobileDeviceRequest.md#fromjsonstring)
- [getType](UsersServiceRegisterMobileDeviceRequest.md#gettype)
- [toBinary](UsersServiceRegisterMobileDeviceRequest.md#tobinary)
- [toJSON](UsersServiceRegisterMobileDeviceRequest.md#tojson)
- [toJson](UsersServiceRegisterMobileDeviceRequest.md#tojson-1)
- [toJsonString](UsersServiceRegisterMobileDeviceRequest.md#tojsonstring)
- [equals](UsersServiceRegisterMobileDeviceRequest.md#equals-1)
- [fromBinary](UsersServiceRegisterMobileDeviceRequest.md#frombinary-1)
- [fromJson](UsersServiceRegisterMobileDeviceRequest.md#fromjson-1)
- [fromJsonString](UsersServiceRegisterMobileDeviceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceRegisterMobileDeviceRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)\> |

#### Overrides

Message&lt;UsersServiceRegisterMobileDeviceRequest\&gt;.constructor

#### Defined in

[src/users_pb.ts:1677](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1677)

## Properties

### deviceOs

• **deviceOs**: `string` = `""`

The operating system of the device

**`Generated`**

from field: string device_os = 12;

#### Defined in

[src/users_pb.ts:1668](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1668)

___

### deviceToken

• **deviceToken**: `string` = `""`

The generated FCM Token

**`Generated`**

from field: string device_token = 13;

#### Defined in

[src/users_pb.ts:1675](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1675)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/users_pb.ts:1654](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1654)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has possession of the device

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/users_pb.ts:1661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1661)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:1684](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1684)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:1682](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1682)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UsersServiceRegisterMobileDeviceRequest"``

#### Defined in

[src/users_pb.ts:1683](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1683)

## Methods

### clone

▸ **clone**(): [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md) \| `PlainMessage`<[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

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

[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)\>

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
| `a` | `undefined` \| [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md) \| `PlainMessage`<[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md) \| `PlainMessage`<[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:1703](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1703)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Defined in

[src/users_pb.ts:1691](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1691)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Defined in

[src/users_pb.ts:1695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1695)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceRegisterMobileDeviceRequest`](UsersServiceRegisterMobileDeviceRequest.md)

#### Defined in

[src/users_pb.ts:1699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1699)
