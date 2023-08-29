[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Team

# Class: Team

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Team

## Hierarchy

- `Message`<[`Team`](Team.md)\>

  ↳ **`Team`**

## Table of contents

### Constructors

- [constructor](Team.md#constructor)

### Properties

- [approvalMetadata](Team.md#approvalmetadata)
- [code](Team.md#code)
- [completedOn](Team.md#completedon)
- [description](Team.md#description)
- [entityUuid](Team.md#entityuuid)
- [leadUserId](Team.md#leaduserid)
- [list](Team.md#list)
- [logs](Team.md#logs)
- [metadata](Team.md#metadata)
- [name](Team.md#name)
- [status](Team.md#status)
- [vaultFolderId](Team.md#vaultfolderid)
- [fields](Team.md#fields)
- [runtime](Team.md#runtime)
- [typeName](Team.md#typename)

### Methods

- [clone](Team.md#clone)
- [equals](Team.md#equals)
- [fromBinary](Team.md#frombinary)
- [fromJson](Team.md#fromjson)
- [fromJsonString](Team.md#fromjsonstring)
- [getType](Team.md#gettype)
- [toBinary](Team.md#tobinary)
- [toJSON](Team.md#tojson)
- [toJson](Team.md#tojson-1)
- [toJsonString](Team.md#tojsonstring)
- [equals](Team.md#equals-1)
- [fromBinary](Team.md#frombinary-1)
- [fromJson](Team.md#fromjson-1)
- [fromJsonString](Team.md#fromjsonstring-1)

## Constructors

### constructor

• **new Team**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Team`](Team.md)\> |

#### Overrides

Message&lt;Team\&gt;.constructor

#### Defined in

[src/teams_pb.ts:380](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L380)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/teams_pb.ts:315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L315)

___

### code

• **code**: `string` = `""`

The code of the team

**`Generated`**

from field: string code = 11;

#### Defined in

[src/teams_pb.ts:357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L357)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this team was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/teams_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L336)

___

### description

• **description**: `string` = `""`

The description of the team

**`Generated`**

from field: string description = 13;

#### Defined in

[src/teams_pb.ts:371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L371)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/teams_pb.ts:301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L301)

___

### leadUserId

• **leadUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is the team lead of this team

**`Generated`**

from field: int64 lead_user_id = 12;

#### Defined in

[src/teams_pb.ts:364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L364)

___

### list

• **list**: [`TeamMember`](TeamMember.md)[] = `[]`

The list of associated team members

**`Generated`**

from field: repeated Genesis.TeamMember list = 20;

#### Defined in

[src/teams_pb.ts:378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L378)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this team

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/teams_pb.ts:329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L329)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this team

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/teams_pb.ts:308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L308)

___

### name

• **name**: `string` = `""`

The name of the team

**`Generated`**

from field: string name = 10;

#### Defined in

[src/teams_pb.ts:350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L350)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this team

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/teams_pb.ts:322](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L322)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/teams_pb.ts:343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L343)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:387](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L387)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L385)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Team"``

#### Defined in

[src/teams_pb.ts:386](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L386)

## Methods

### clone

▸ **clone**(): [`Team`](Team.md)

Create a deep copy.

#### Returns

[`Team`](Team.md)

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
| `other` | `undefined` \| ``null`` \| [`Team`](Team.md) \| `PlainMessage`<[`Team`](Team.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Team`](Team.md)

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

[`Team`](Team.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Team`](Team.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Team`](Team.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Team`](Team.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Team`](Team.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Team`](Team.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Team`](Team.md)\>

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
| `a` | `undefined` \| [`Team`](Team.md) \| `PlainMessage`<[`Team`](Team.md)\> |
| `b` | `undefined` \| [`Team`](Team.md) \| `PlainMessage`<[`Team`](Team.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:414](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L414)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Team`](Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Team`](Team.md)

#### Defined in

[src/teams_pb.ts:402](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L402)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Team`](Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Team`](Team.md)

#### Defined in

[src/teams_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L406)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Team`](Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Team`](Team.md)

#### Defined in

[src/teams_pb.ts:410](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L410)
