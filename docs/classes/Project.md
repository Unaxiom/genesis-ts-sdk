[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Project

# Class: Project

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Project

## Hierarchy

- `Message`<[`Project`](Project.md)\>

  ↳ **`Project`**

## Table of contents

### Constructors

- [constructor](Project.md#constructor)

### Properties

- [approvalMetadata](Project.md#approvalmetadata)
- [clientId](Project.md#clientid)
- [completedOn](Project.md#completedon)
- [description](Project.md#description)
- [entityUuid](Project.md#entityuuid)
- [finalRefNumber](Project.md#finalrefnumber)
- [formData](Project.md#formdata)
- [logs](Project.md#logs)
- [metadata](Project.md#metadata)
- [referenceId](Project.md#referenceid)
- [status](Project.md#status)
- [vaultFolderId](Project.md#vaultfolderid)
- [fields](Project.md#fields)
- [runtime](Project.md#runtime)
- [typeName](Project.md#typename)

### Methods

- [clone](Project.md#clone)
- [equals](Project.md#equals)
- [fromBinary](Project.md#frombinary)
- [fromJson](Project.md#fromjson)
- [fromJsonString](Project.md#fromjsonstring)
- [getType](Project.md#gettype)
- [toBinary](Project.md#tobinary)
- [toJSON](Project.md#tojson)
- [toJson](Project.md#tojson-1)
- [toJsonString](Project.md#tojsonstring)
- [equals](Project.md#equals-1)
- [fromBinary](Project.md#frombinary-1)
- [fromJson](Project.md#fromjson-1)
- [fromJsonString](Project.md#fromjsonstring-1)

## Constructors

### constructor

• **new Project**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Project`](Project.md)\> |

#### Overrides

Message&lt;Project\&gt;.constructor

#### Defined in

[src/projects_pb.ts:373](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L373)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/projects_pb.ts:308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L308)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The optional ID of the associated client

**`Generated`**

from field: int64 client_id = 12;

#### Defined in

[src/projects_pb.ts:357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L357)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this project was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/projects_pb.ts:329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L329)

___

### description

• **description**: `string` = `""`

The description of the project

**`Generated`**

from field: string description = 13;

#### Defined in

[src/projects_pb.ts:364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L364)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/projects_pb.ts:294](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L294)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/projects_pb.ts:350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L350)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/projects_pb.ts:371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L371)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this project

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/projects_pb.ts:322](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L322)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this project

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/projects_pb.ts:301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L301)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the project

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/projects_pb.ts:343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L343)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this project

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/projects_pb.ts:315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L315)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/projects_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L336)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects_pb.ts:380](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L380)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects_pb.ts:378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L378)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Project"``

#### Defined in

[src/projects_pb.ts:379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L379)

## Methods

### clone

▸ **clone**(): [`Project`](Project.md)

Create a deep copy.

#### Returns

[`Project`](Project.md)

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
| `other` | `undefined` \| ``null`` \| [`Project`](Project.md) \| `PlainMessage`<[`Project`](Project.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Project`](Project.md)

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

[`Project`](Project.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Project`](Project.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Project`](Project.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Project`](Project.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Project`](Project.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Project`](Project.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Project`](Project.md)\>

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
| `a` | `undefined` \| [`Project`](Project.md) \| `PlainMessage`<[`Project`](Project.md)\> |
| `b` | `undefined` \| [`Project`](Project.md) \| `PlainMessage`<[`Project`](Project.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects_pb.ts:407](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L407)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Project`](Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Project`](Project.md)

#### Defined in

[src/projects_pb.ts:395](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L395)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Project`](Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Project`](Project.md)

#### Defined in

[src/projects_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L399)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Project`](Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Project`](Project.md)

#### Defined in

[src/projects_pb.ts:403](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L403)
