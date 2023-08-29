[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamMemberHistoryRequest

# Class: TeamMemberHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.TeamMemberHistoryRequest

## Hierarchy

- `Message`<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\>

  ↳ **`TeamMemberHistoryRequest`**

## Table of contents

### Constructors

- [constructor](TeamMemberHistoryRequest.md#constructor)

### Properties

- [teamId](TeamMemberHistoryRequest.md#teamid)
- [userId](TeamMemberHistoryRequest.md#userid)
- [fields](TeamMemberHistoryRequest.md#fields)
- [runtime](TeamMemberHistoryRequest.md#runtime)
- [typeName](TeamMemberHistoryRequest.md#typename)

### Methods

- [clone](TeamMemberHistoryRequest.md#clone)
- [equals](TeamMemberHistoryRequest.md#equals)
- [fromBinary](TeamMemberHistoryRequest.md#frombinary)
- [fromJson](TeamMemberHistoryRequest.md#fromjson)
- [fromJsonString](TeamMemberHistoryRequest.md#fromjsonstring)
- [getType](TeamMemberHistoryRequest.md#gettype)
- [toBinary](TeamMemberHistoryRequest.md#tobinary)
- [toJSON](TeamMemberHistoryRequest.md#tojson)
- [toJson](TeamMemberHistoryRequest.md#tojson-1)
- [toJsonString](TeamMemberHistoryRequest.md#tojsonstring)
- [equals](TeamMemberHistoryRequest.md#equals-1)
- [fromBinary](TeamMemberHistoryRequest.md#frombinary-1)
- [fromJson](TeamMemberHistoryRequest.md#fromjson-1)
- [fromJsonString](TeamMemberHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamMemberHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\> |

#### Overrides

Message&lt;TeamMemberHistoryRequest\&gt;.constructor

#### Defined in

[src/teams_pb.ts:722](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L722)

## Properties

### teamId

• **teamId**: `bigint` = `protoInt64.zero`

Stores the ID of the team

**`Generated`**

from field: int64 team_id = 10;

#### Defined in

[src/teams_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L713)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user that is part of the team

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/teams_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L720)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:729](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L729)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L727)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamMemberHistoryRequest"``

#### Defined in

[src/teams_pb.ts:728](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L728)

## Methods

### clone

▸ **clone**(): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

Create a deep copy.

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md) \| `PlainMessage`<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

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

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\>

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
| `a` | `undefined` \| [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md) \| `PlainMessage`<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\> |
| `b` | `undefined` \| [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md) \| `PlainMessage`<[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:746](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L746)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Defined in

[src/teams_pb.ts:734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L734)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Defined in

[src/teams_pb.ts:738](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L738)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamMemberHistoryRequest`](TeamMemberHistoryRequest.md)

#### Defined in

[src/teams_pb.ts:742](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L742)
