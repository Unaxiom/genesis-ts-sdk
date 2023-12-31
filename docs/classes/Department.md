[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Department

# Class: Department

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Department

## Hierarchy

- `Message`<[`Department`](Department.md)\>

  ↳ **`Department`**

## Table of contents

### Constructors

- [constructor](Department.md#constructor)

### Properties

- [approvalMetadata](Department.md#approvalmetadata)
- [code](Department.md#code)
- [completedOn](Department.md#completedon)
- [description](Department.md#description)
- [entityUuid](Department.md#entityuuid)
- [headUserId](Department.md#headuserid)
- [logs](Department.md#logs)
- [metadata](Department.md#metadata)
- [name](Department.md#name)
- [status](Department.md#status)
- [vaultFolderId](Department.md#vaultfolderid)
- [fields](Department.md#fields)
- [runtime](Department.md#runtime)
- [typeName](Department.md#typename)

### Methods

- [clone](Department.md#clone)
- [equals](Department.md#equals)
- [fromBinary](Department.md#frombinary)
- [fromJson](Department.md#fromjson)
- [fromJsonString](Department.md#fromjsonstring)
- [getType](Department.md#gettype)
- [toBinary](Department.md#tobinary)
- [toJSON](Department.md#tojson)
- [toJson](Department.md#tojson-1)
- [toJsonString](Department.md#tojsonstring)
- [equals](Department.md#equals-1)
- [fromBinary](Department.md#frombinary-1)
- [fromJson](Department.md#fromjson-1)
- [fromJsonString](Department.md#fromjsonstring-1)

## Constructors

### constructor

• **new Department**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Department`](Department.md)\> |

#### Overrides

Message&lt;Department\&gt;.constructor

#### Defined in

[src/departments_pb.ts:373](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L373)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/departments_pb.ts:315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L315)

___

### code

• **code**: `string` = `""`

The code of the department

**`Generated`**

from field: string code = 11;

#### Defined in

[src/departments_pb.ts:357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L357)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this department was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/departments_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L336)

___

### description

• **description**: `string` = `""`

The description of the department

**`Generated`**

from field: string description = 13;

#### Defined in

[src/departments_pb.ts:371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L371)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/departments_pb.ts:301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L301)

___

### headUserId

• **headUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is the department head of this department

**`Generated`**

from field: int64 head_user_id = 12;

#### Defined in

[src/departments_pb.ts:364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L364)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this department

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/departments_pb.ts:329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L329)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this department

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/departments_pb.ts:308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L308)

___

### name

• **name**: `string` = `""`

The name of the department

**`Generated`**

from field: string name = 10;

#### Defined in

[src/departments_pb.ts:350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L350)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this department

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/departments_pb.ts:322](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L322)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/departments_pb.ts:343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L343)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments_pb.ts:380](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L380)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments_pb.ts:378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L378)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Department"``

#### Defined in

[src/departments_pb.ts:379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L379)

## Methods

### clone

▸ **clone**(): [`Department`](Department.md)

Create a deep copy.

#### Returns

[`Department`](Department.md)

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
| `other` | `undefined` \| ``null`` \| [`Department`](Department.md) \| `PlainMessage`<[`Department`](Department.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Department`](Department.md)

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

[`Department`](Department.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Department`](Department.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Department`](Department.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Department`](Department.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Department`](Department.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Department`](Department.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Department`](Department.md)\>

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
| `a` | `undefined` \| [`Department`](Department.md) \| `PlainMessage`<[`Department`](Department.md)\> |
| `b` | `undefined` \| [`Department`](Department.md) \| `PlainMessage`<[`Department`](Department.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L406)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Department`](Department.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Department`](Department.md)

#### Defined in

[src/departments_pb.ts:394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L394)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Department`](Department.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Department`](Department.md)

#### Defined in

[src/departments_pb.ts:398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L398)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Department`](Department.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Department`](Department.md)

#### Defined in

[src/departments_pb.ts:402](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L402)
