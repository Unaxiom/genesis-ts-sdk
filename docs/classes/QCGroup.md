[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroup

# Class: QCGroup

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.QCGroup

## Hierarchy

- `Message`<[`QCGroup`](QCGroup.md)\>

  ↳ **`QCGroup`**

## Table of contents

### Constructors

- [constructor](QCGroup.md#constructor)

### Properties

- [approvalMetadata](QCGroup.md#approvalmetadata)
- [code](QCGroup.md#code)
- [completedOn](QCGroup.md#completedon)
- [description](QCGroup.md#description)
- [entityUuid](QCGroup.md#entityuuid)
- [formData](QCGroup.md#formdata)
- [list](QCGroup.md#list)
- [logs](QCGroup.md#logs)
- [metadata](QCGroup.md#metadata)
- [name](QCGroup.md#name)
- [status](QCGroup.md#status)
- [vaultFolderId](QCGroup.md#vaultfolderid)
- [fields](QCGroup.md#fields)
- [runtime](QCGroup.md#runtime)
- [typeName](QCGroup.md#typename)

### Methods

- [clone](QCGroup.md#clone)
- [equals](QCGroup.md#equals)
- [fromBinary](QCGroup.md#frombinary)
- [fromJson](QCGroup.md#fromjson)
- [fromJsonString](QCGroup.md#fromjsonstring)
- [getType](QCGroup.md#gettype)
- [toBinary](QCGroup.md#tobinary)
- [toJSON](QCGroup.md#tojson)
- [toJson](QCGroup.md#tojson-1)
- [toJsonString](QCGroup.md#tojsonstring)
- [equals](QCGroup.md#equals-1)
- [fromBinary](QCGroup.md#frombinary-1)
- [fromJson](QCGroup.md#fromjson-1)
- [fromJsonString](QCGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroup**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroup`](QCGroup.md)\> |

#### Overrides

Message&lt;QCGroup\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:408](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L408)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/qc_groups_pb.ts:343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L343)

___

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_groups_pb.ts:385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L385)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this qc group was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/qc_groups_pb.ts:364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L364)

___

### description

• **description**: `string` = `""`

The description of the qc group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/qc_groups_pb.ts:392](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L392)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/qc_groups_pb.ts:329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L329)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/qc_groups_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L406)

___

### list

• **list**: [`QCGroupItem`](QCGroupItem.md)[] = `[]`

The list of associated qc group params

**`Generated`**

from field: repeated Genesis.QCGroupItem list = 20;

#### Defined in

[src/qc_groups_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L399)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this qc group

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/qc_groups_pb.ts:357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L357)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this qc group

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/qc_groups_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L336)

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_groups_pb.ts:378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L378)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this qc group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/qc_groups_pb.ts:350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L350)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/qc_groups_pb.ts:371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L371)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:415](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L415)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L413)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroup"``

#### Defined in

[src/qc_groups_pb.ts:414](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L414)

## Methods

### clone

▸ **clone**(): [`QCGroup`](QCGroup.md)

Create a deep copy.

#### Returns

[`QCGroup`](QCGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroup`](QCGroup.md) \| `PlainMessage`<[`QCGroup`](QCGroup.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroup`](QCGroup.md)

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

[`QCGroup`](QCGroup.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroup`](QCGroup.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroup`](QCGroup.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroup`](QCGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroup`](QCGroup.md)\>

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
| `a` | `undefined` \| [`QCGroup`](QCGroup.md) \| `PlainMessage`<[`QCGroup`](QCGroup.md)\> |
| `b` | `undefined` \| [`QCGroup`](QCGroup.md) \| `PlainMessage`<[`QCGroup`](QCGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:442](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L442)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroup`](QCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Defined in

[src/qc_groups_pb.ts:430](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L430)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroup`](QCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Defined in

[src/qc_groups_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L434)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroup`](QCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Defined in

[src/qc_groups_pb.ts:438](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L438)
