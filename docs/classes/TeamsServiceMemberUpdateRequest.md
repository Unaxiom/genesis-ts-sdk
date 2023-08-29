[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceMemberUpdateRequest

# Class: TeamsServiceMemberUpdateRequest

Describes the parameters required to update a member in a team

**`Generated`**

from message Genesis.TeamsServiceMemberUpdateRequest

## Hierarchy

- `Message`<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\>

  ↳ **`TeamsServiceMemberUpdateRequest`**

## Table of contents

### Constructors

- [constructor](TeamsServiceMemberUpdateRequest.md#constructor)

### Properties

- [id](TeamsServiceMemberUpdateRequest.md#id)
- [userComment](TeamsServiceMemberUpdateRequest.md#usercomment)
- [fields](TeamsServiceMemberUpdateRequest.md#fields)
- [runtime](TeamsServiceMemberUpdateRequest.md#runtime)
- [typeName](TeamsServiceMemberUpdateRequest.md#typename)

### Methods

- [clone](TeamsServiceMemberUpdateRequest.md#clone)
- [equals](TeamsServiceMemberUpdateRequest.md#equals)
- [fromBinary](TeamsServiceMemberUpdateRequest.md#frombinary)
- [fromJson](TeamsServiceMemberUpdateRequest.md#fromjson)
- [fromJsonString](TeamsServiceMemberUpdateRequest.md#fromjsonstring)
- [getType](TeamsServiceMemberUpdateRequest.md#gettype)
- [toBinary](TeamsServiceMemberUpdateRequest.md#tobinary)
- [toJSON](TeamsServiceMemberUpdateRequest.md#tojson)
- [toJson](TeamsServiceMemberUpdateRequest.md#tojson-1)
- [toJsonString](TeamsServiceMemberUpdateRequest.md#tojsonstring)
- [equals](TeamsServiceMemberUpdateRequest.md#equals-1)
- [fromBinary](TeamsServiceMemberUpdateRequest.md#frombinary-1)
- [fromJson](TeamsServiceMemberUpdateRequest.md#fromjson-1)
- [fromJsonString](TeamsServiceMemberUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceMemberUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\> |

#### Overrides

Message&lt;TeamsServiceMemberUpdateRequest\&gt;.constructor

#### Defined in

[src/teams_pb.ts:498](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L498)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/teams_pb.ts:496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L496)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/teams_pb.ts:489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L489)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:505](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L505)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:503](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L503)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamsServiceMemberUpdateRequest"``

#### Defined in

[src/teams_pb.ts:504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L504)

## Methods

### clone

▸ **clone**(): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

Create a deep copy.

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md) \| `PlainMessage`<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

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

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\>

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
| `a` | `undefined` \| [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md) \| `PlainMessage`<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\> |
| `b` | `undefined` \| [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md) \| `PlainMessage`<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:522](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L522)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Defined in

[src/teams_pb.ts:510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L510)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Defined in

[src/teams_pb.ts:514](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L514)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Defined in

[src/teams_pb.ts:518](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L518)
