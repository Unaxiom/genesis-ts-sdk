[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftGroup

# Class: ShiftGroup

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.ShiftGroup

## Hierarchy

- `Message`<[`ShiftGroup`](ShiftGroup.md)\>

  ↳ **`ShiftGroup`**

## Table of contents

### Constructors

- [constructor](ShiftGroup.md#constructor)

### Properties

- [approvalMetadata](ShiftGroup.md#approvalmetadata)
- [code](ShiftGroup.md#code)
- [completedOn](ShiftGroup.md#completedon)
- [description](ShiftGroup.md#description)
- [entityUuid](ShiftGroup.md#entityuuid)
- [list](ShiftGroup.md#list)
- [logs](ShiftGroup.md#logs)
- [metadata](ShiftGroup.md#metadata)
- [name](ShiftGroup.md#name)
- [status](ShiftGroup.md#status)
- [vaultFolderId](ShiftGroup.md#vaultfolderid)
- [fields](ShiftGroup.md#fields)
- [runtime](ShiftGroup.md#runtime)
- [typeName](ShiftGroup.md#typename)

### Methods

- [clone](ShiftGroup.md#clone)
- [equals](ShiftGroup.md#equals)
- [fromBinary](ShiftGroup.md#frombinary)
- [fromJson](ShiftGroup.md#fromjson)
- [fromJsonString](ShiftGroup.md#fromjsonstring)
- [getType](ShiftGroup.md#gettype)
- [toBinary](ShiftGroup.md#tobinary)
- [toJSON](ShiftGroup.md#tojson)
- [toJson](ShiftGroup.md#tojson-1)
- [toJsonString](ShiftGroup.md#tojsonstring)
- [equals](ShiftGroup.md#equals-1)
- [fromBinary](ShiftGroup.md#frombinary-1)
- [fromJson](ShiftGroup.md#fromjson-1)
- [fromJsonString](ShiftGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftGroup**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftGroup`](ShiftGroup.md)\> |

#### Overrides

Message&lt;ShiftGroup\&gt;.constructor

#### Defined in

[src/shifts_groups_pb.ts:355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L355)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/shifts_groups_pb.ts:297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L297)

___

### code

• **code**: `string` = `""`

The shift group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/shifts_groups_pb.ts:339](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L339)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this shift group was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/shifts_groups_pb.ts:318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L318)

___

### description

• **description**: `string` = `""`

The description of the shift group

**`Generated`**

from field: string description = 12;

#### Defined in

[src/shifts_groups_pb.ts:346](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L346)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/shifts_groups_pb.ts:283](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L283)

___

### list

• **list**: [`ShiftGroupShift`](ShiftGroupShift.md)[] = `[]`

The list of associated shift group shifts

**`Generated`**

from field: repeated Genesis.ShiftGroupShift list = 20;

#### Defined in

[src/shifts_groups_pb.ts:353](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L353)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this shift group

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/shifts_groups_pb.ts:311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L311)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this shift group

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/shifts_groups_pb.ts:290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L290)

___

### name

• **name**: `string` = `""`

The name of the shift group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/shifts_groups_pb.ts:332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L332)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/shifts_groups_pb.ts:304](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L304)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/shifts_groups_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L325)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups_pb.ts:362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L362)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups_pb.ts:360](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L360)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftGroup"``

#### Defined in

[src/shifts_groups_pb.ts:361](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L361)

## Methods

### clone

▸ **clone**(): [`ShiftGroup`](ShiftGroup.md)

Create a deep copy.

#### Returns

[`ShiftGroup`](ShiftGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftGroup`](ShiftGroup.md) \| `PlainMessage`<[`ShiftGroup`](ShiftGroup.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftGroup`](ShiftGroup.md)

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

[`ShiftGroup`](ShiftGroup.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftGroup`](ShiftGroup.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftGroup`](ShiftGroup.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftGroup`](ShiftGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftGroup`](ShiftGroup.md)\>

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
| `a` | `undefined` \| [`ShiftGroup`](ShiftGroup.md) \| `PlainMessage`<[`ShiftGroup`](ShiftGroup.md)\> |
| `b` | `undefined` \| [`ShiftGroup`](ShiftGroup.md) \| `PlainMessage`<[`ShiftGroup`](ShiftGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups_pb.ts:388](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L388)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftGroup`](ShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Defined in

[src/shifts_groups_pb.ts:376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L376)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftGroup`](ShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Defined in

[src/shifts_groups_pb.ts:380](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L380)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftGroup`](ShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Defined in

[src/shifts_groups_pb.ts:384](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L384)
