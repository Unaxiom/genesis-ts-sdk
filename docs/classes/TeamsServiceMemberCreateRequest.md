[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceMemberCreateRequest

# Class: TeamsServiceMemberCreateRequest

Describes the parameters required to add a member to a team

**`Generated`**

from message Genesis.TeamsServiceMemberCreateRequest

## Hierarchy

- `Message`<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\>

  ↳ **`TeamsServiceMemberCreateRequest`**

## Table of contents

### Constructors

- [constructor](TeamsServiceMemberCreateRequest.md#constructor)

### Properties

- [teamId](TeamsServiceMemberCreateRequest.md#teamid)
- [userComment](TeamsServiceMemberCreateRequest.md#usercomment)
- [userId](TeamsServiceMemberCreateRequest.md#userid)
- [fields](TeamsServiceMemberCreateRequest.md#fields)
- [runtime](TeamsServiceMemberCreateRequest.md#runtime)
- [typeName](TeamsServiceMemberCreateRequest.md#typename)

### Methods

- [clone](TeamsServiceMemberCreateRequest.md#clone)
- [equals](TeamsServiceMemberCreateRequest.md#equals)
- [fromBinary](TeamsServiceMemberCreateRequest.md#frombinary)
- [fromJson](TeamsServiceMemberCreateRequest.md#fromjson)
- [fromJsonString](TeamsServiceMemberCreateRequest.md#fromjsonstring)
- [getType](TeamsServiceMemberCreateRequest.md#gettype)
- [toBinary](TeamsServiceMemberCreateRequest.md#tobinary)
- [toJSON](TeamsServiceMemberCreateRequest.md#tojson)
- [toJson](TeamsServiceMemberCreateRequest.md#tojson-1)
- [toJsonString](TeamsServiceMemberCreateRequest.md#tojsonstring)
- [equals](TeamsServiceMemberCreateRequest.md#equals-1)
- [fromBinary](TeamsServiceMemberCreateRequest.md#frombinary-1)
- [fromJson](TeamsServiceMemberCreateRequest.md#fromjson-1)
- [fromJsonString](TeamsServiceMemberCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceMemberCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\> |

#### Overrides

Message&lt;TeamsServiceMemberCreateRequest\&gt;.constructor

#### Defined in

[src/teams_pb.ts:447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L447)

## Properties

### teamId

• **teamId**: `bigint` = `protoInt64.zero`

Stores the ID of the team

**`Generated`**

from field: int64 team_id = 10;

#### Defined in

[src/teams_pb.ts:438](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L438)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/teams_pb.ts:431](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L431)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user that is part of the team

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/teams_pb.ts:445](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L445)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:454](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L454)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L452)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamsServiceMemberCreateRequest"``

#### Defined in

[src/teams_pb.ts:453](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L453)

## Methods

### clone

▸ **clone**(): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

Create a deep copy.

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md) \| `PlainMessage`<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

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

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\>

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
| `a` | `undefined` \| [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md) \| `PlainMessage`<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\> |
| `b` | `undefined` \| [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md) \| `PlainMessage`<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:472](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L472)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Defined in

[src/teams_pb.ts:460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L460)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Defined in

[src/teams_pb.ts:464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L464)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Defined in

[src/teams_pb.ts:468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L468)
