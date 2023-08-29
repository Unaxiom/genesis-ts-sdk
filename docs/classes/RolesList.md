[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / RolesList

# Class: RolesList

Describes the message consisting of the list of roles

**`Generated`**

from message Genesis.RolesList

## Hierarchy

- `Message`<[`RolesList`](RolesList.md)\>

  ↳ **`RolesList`**

## Table of contents

### Constructors

- [constructor](RolesList.md#constructor)

### Properties

- [list](RolesList.md#list)
- [fields](RolesList.md#fields)
- [runtime](RolesList.md#runtime)
- [typeName](RolesList.md#typename)

### Methods

- [clone](RolesList.md#clone)
- [equals](RolesList.md#equals)
- [fromBinary](RolesList.md#frombinary)
- [fromJson](RolesList.md#fromjson)
- [fromJsonString](RolesList.md#fromjsonstring)
- [getType](RolesList.md#gettype)
- [toBinary](RolesList.md#tobinary)
- [toJSON](RolesList.md#tojson)
- [toJson](RolesList.md#tojson-1)
- [toJsonString](RolesList.md#tojsonstring)
- [equals](RolesList.md#equals-1)
- [fromBinary](RolesList.md#frombinary-1)
- [fromJson](RolesList.md#fromjson-1)
- [fromJsonString](RolesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolesList`](RolesList.md)\> |

#### Overrides

Message&lt;RolesList\&gt;.constructor

#### Defined in

[src/roles_pb.ts:629](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L629)

## Properties

### list

• **list**: [`Role`](Role.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Role list = 1;

#### Defined in

[src/roles_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L627)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:636](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L636)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L634)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.RolesList"``

#### Defined in

[src/roles_pb.ts:635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L635)

## Methods

### clone

▸ **clone**(): [`RolesList`](RolesList.md)

Create a deep copy.

#### Returns

[`RolesList`](RolesList.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesList`](RolesList.md) \| `PlainMessage`<[`RolesList`](RolesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesList`](RolesList.md)

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

[`RolesList`](RolesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesList`](RolesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesList`](RolesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolesList`](RolesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolesList`](RolesList.md)\>

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
| `a` | `undefined` \| [`RolesList`](RolesList.md) \| `PlainMessage`<[`RolesList`](RolesList.md)\> |
| `b` | `undefined` \| [`RolesList`](RolesList.md) \| `PlainMessage`<[`RolesList`](RolesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:652](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L652)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolesList`](RolesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Defined in

[src/roles_pb.ts:640](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L640)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolesList`](RolesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Defined in

[src/roles_pb.ts:644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L644)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolesList`](RolesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Defined in

[src/roles_pb.ts:648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L648)
