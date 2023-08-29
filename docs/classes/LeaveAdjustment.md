[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeaveAdjustment

# Class: LeaveAdjustment

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.LeaveAdjustment

## Hierarchy

- `Message`<[`LeaveAdjustment`](LeaveAdjustment.md)\>

  ↳ **`LeaveAdjustment`**

## Table of contents

### Constructors

- [constructor](LeaveAdjustment.md#constructor)

### Properties

- [approvalMetadata](LeaveAdjustment.md#approvalmetadata)
- [completedOn](LeaveAdjustment.md#completedon)
- [description](LeaveAdjustment.md#description)
- [entityUuid](LeaveAdjustment.md#entityuuid)
- [finalRefNumber](LeaveAdjustment.md#finalrefnumber)
- [list](LeaveAdjustment.md#list)
- [logs](LeaveAdjustment.md#logs)
- [metadata](LeaveAdjustment.md#metadata)
- [referenceId](LeaveAdjustment.md#referenceid)
- [status](LeaveAdjustment.md#status)
- [userId](LeaveAdjustment.md#userid)
- [vaultFolderId](LeaveAdjustment.md#vaultfolderid)
- [fields](LeaveAdjustment.md#fields)
- [runtime](LeaveAdjustment.md#runtime)
- [typeName](LeaveAdjustment.md#typename)

### Methods

- [clone](LeaveAdjustment.md#clone)
- [equals](LeaveAdjustment.md#equals)
- [fromBinary](LeaveAdjustment.md#frombinary)
- [fromJson](LeaveAdjustment.md#fromjson)
- [fromJsonString](LeaveAdjustment.md#fromjsonstring)
- [getType](LeaveAdjustment.md#gettype)
- [toBinary](LeaveAdjustment.md#tobinary)
- [toJSON](LeaveAdjustment.md#tojson)
- [toJson](LeaveAdjustment.md#tojson-1)
- [toJsonString](LeaveAdjustment.md#tojsonstring)
- [equals](LeaveAdjustment.md#equals-1)
- [fromBinary](LeaveAdjustment.md#frombinary-1)
- [fromJson](LeaveAdjustment.md#fromjson-1)
- [fromJsonString](LeaveAdjustment.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveAdjustment**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

#### Overrides

Message&lt;LeaveAdjustment\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L362)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/leaves_adjustments_pb.ts:297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L297)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this record was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/leaves_adjustments_pb.ts:318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L318)

___

### description

• **description**: `string` = `""`

The description of the leave adjustment

**`Generated`**

from field: string description = 13;

#### Defined in

[src/leaves_adjustments_pb.ts:353](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L353)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:283](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L283)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/leaves_adjustments_pb.ts:339](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L339)

___

### list

• **list**: [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)[] = `[]`

The list of associated leave adjustment records

**`Generated`**

from field: repeated Genesis.LeaveAdjustmentRecord list = 20;

#### Defined in

[src/leaves_adjustments_pb.ts:360](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L360)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this record

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/leaves_adjustments_pb.ts:311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L311)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this record

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L290)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave adjustment

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/leaves_adjustments_pb.ts:332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L332)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this record

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/leaves_adjustments_pb.ts:304](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L304)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this adjustment needs to be made

**`Generated`**

from field: int64 user_id = 12;

#### Defined in

[src/leaves_adjustments_pb.ts:346](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L346)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/leaves_adjustments_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L325)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:369](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L369)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:367](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L367)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeaveAdjustment"``

#### Defined in

[src/leaves_adjustments_pb.ts:368](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L368)

## Methods

### clone

▸ **clone**(): [`LeaveAdjustment`](LeaveAdjustment.md)

Create a deep copy.

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

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

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeaveAdjustment`](LeaveAdjustment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeaveAdjustment`](LeaveAdjustment.md)\>

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
| `a` | `undefined` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`<[`LeaveAdjustment`](LeaveAdjustment.md)\> |
| `b` | `undefined` \| [`LeaveAdjustment`](LeaveAdjustment.md) \| `PlainMessage`<[`LeaveAdjustment`](LeaveAdjustment.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:396](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L396)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

[src/leaves_adjustments_pb.ts:384](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L384)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

[src/leaves_adjustments_pb.ts:388](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L388)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeaveAdjustment`](LeaveAdjustment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustment`](LeaveAdjustment.md)

#### Defined in

[src/leaves_adjustments_pb.ts:392](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L392)
