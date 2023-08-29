[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamMember

# Class: TeamMember

Describes the parameters that constitute a member associated to a team

**`Generated`**

from message Genesis.TeamMember

## Hierarchy

- `Message`<[`TeamMember`](TeamMember.md)\>

  ↳ **`TeamMember`**

## Table of contents

### Constructors

- [constructor](TeamMember.md#constructor)

### Properties

- [approvalMetadata](TeamMember.md#approvalmetadata)
- [entityUuid](TeamMember.md#entityuuid)
- [metadata](TeamMember.md#metadata)
- [needApproval](TeamMember.md#needapproval)
- [teamId](TeamMember.md#teamid)
- [userComment](TeamMember.md#usercomment)
- [userId](TeamMember.md#userid)
- [fields](TeamMember.md#fields)
- [runtime](TeamMember.md#runtime)
- [typeName](TeamMember.md#typename)

### Methods

- [clone](TeamMember.md#clone)
- [equals](TeamMember.md#equals)
- [fromBinary](TeamMember.md#frombinary)
- [fromJson](TeamMember.md#fromjson)
- [fromJsonString](TeamMember.md#fromjsonstring)
- [getType](TeamMember.md#gettype)
- [toBinary](TeamMember.md#tobinary)
- [toJSON](TeamMember.md#tojson)
- [toJson](TeamMember.md#tojson-1)
- [toJsonString](TeamMember.md#tojsonstring)
- [equals](TeamMember.md#equals-1)
- [fromBinary](TeamMember.md#frombinary-1)
- [fromJson](TeamMember.md#fromjson-1)
- [fromJsonString](TeamMember.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamMember**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamMember`](TeamMember.md)\> |

#### Overrides

Message&lt;TeamMember\&gt;.constructor

#### Defined in

[src/teams_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L583)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/teams_pb.ts:553](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L553)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/teams_pb.ts:539](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L539)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this team

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/teams_pb.ts:546](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L546)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/teams_pb.ts:560](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L560)

___

### teamId

• **teamId**: `bigint` = `protoInt64.zero`

Stores the ID of the team

**`Generated`**

from field: int64 team_id = 10;

#### Defined in

[src/teams_pb.ts:574](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L574)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/teams_pb.ts:567](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L567)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user that is part of the team

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/teams_pb.ts:581](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L581)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:590](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L590)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:588](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L588)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamMember"``

#### Defined in

[src/teams_pb.ts:589](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L589)

## Methods

### clone

▸ **clone**(): [`TeamMember`](TeamMember.md)

Create a deep copy.

#### Returns

[`TeamMember`](TeamMember.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamMember`](TeamMember.md) \| `PlainMessage`<[`TeamMember`](TeamMember.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamMember`](TeamMember.md)

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

[`TeamMember`](TeamMember.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamMember`](TeamMember.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamMember`](TeamMember.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamMember`](TeamMember.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamMember`](TeamMember.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamMember`](TeamMember.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamMember`](TeamMember.md)\>

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
| `a` | `undefined` \| [`TeamMember`](TeamMember.md) \| `PlainMessage`<[`TeamMember`](TeamMember.md)\> |
| `b` | `undefined` \| [`TeamMember`](TeamMember.md) \| `PlainMessage`<[`TeamMember`](TeamMember.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:612](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L612)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamMember`](TeamMember.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamMember`](TeamMember.md)

#### Defined in

[src/teams_pb.ts:600](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L600)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamMember`](TeamMember.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamMember`](TeamMember.md)

#### Defined in

[src/teams_pb.ts:604](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L604)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamMember`](TeamMember.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamMember`](TeamMember.md)

#### Defined in

[src/teams_pb.ts:608](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L608)
