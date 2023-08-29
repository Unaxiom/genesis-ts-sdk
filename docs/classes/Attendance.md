[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Attendance

# Class: Attendance

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Attendance

## Hierarchy

- `Message`<[`Attendance`](Attendance.md)\>

  ↳ **`Attendance`**

## Table of contents

### Constructors

- [constructor](Attendance.md#constructor)

### Properties

- [approvalMetadata](Attendance.md#approvalmetadata)
- [completedOn](Attendance.md#completedon)
- [description](Attendance.md#description)
- [entityUuid](Attendance.md#entityuuid)
- [entryTimestamp](Attendance.md#entrytimestamp)
- [exitTimestamp](Attendance.md#exittimestamp)
- [finalRefNumber](Attendance.md#finalrefnumber)
- [formData](Attendance.md#formdata)
- [logs](Attendance.md#logs)
- [metadata](Attendance.md#metadata)
- [referenceId](Attendance.md#referenceid)
- [status](Attendance.md#status)
- [userId](Attendance.md#userid)
- [vaultFolderId](Attendance.md#vaultfolderid)
- [fields](Attendance.md#fields)
- [runtime](Attendance.md#runtime)
- [typeName](Attendance.md#typename)

### Methods

- [clone](Attendance.md#clone)
- [equals](Attendance.md#equals)
- [fromBinary](Attendance.md#frombinary)
- [fromJson](Attendance.md#fromjson)
- [fromJsonString](Attendance.md#fromjsonstring)
- [getType](Attendance.md#gettype)
- [toBinary](Attendance.md#tobinary)
- [toJSON](Attendance.md#tojson)
- [toJson](Attendance.md#tojson-1)
- [toJsonString](Attendance.md#tojsonstring)
- [equals](Attendance.md#equals-1)
- [fromBinary](Attendance.md#frombinary-1)
- [fromJson](Attendance.md#fromjson-1)
- [fromJsonString](Attendance.md#fromjsonstring-1)

## Constructors

### constructor

• **new Attendance**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Attendance`](Attendance.md)\> |

#### Overrides

Message&lt;Attendance\&gt;.constructor

#### Defined in

[src/attendances_pb.ts:595](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L595)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/attendances_pb.ts:516](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L516)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this attendance was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/attendances_pb.ts:537](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L537)

___

### description

• **description**: `string` = `""`

The description of the attendance

**`Generated`**

from field: string description = 15;

#### Defined in

[src/attendances_pb.ts:586](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L586)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/attendances_pb.ts:502](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L502)

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the attendance begins

**`Generated`**

from field: int64 entry_timestamp = 13;

#### Defined in

[src/attendances_pb.ts:572](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L572)

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the attendance ends

**`Generated`**

from field: int64 exit_timestamp = 14;

#### Defined in

[src/attendances_pb.ts:579](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L579)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/attendances_pb.ts:558](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L558)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/attendances_pb.ts:593](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L593)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this attendance

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/attendances_pb.ts:530](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L530)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this attendance

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/attendances_pb.ts:509](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L509)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the attendance

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/attendances_pb.ts:551](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L551)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this attendance

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/attendances_pb.ts:523](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L523)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user that this attendance belongs to

**`Generated`**

from field: int64 user_id = 12;

#### Defined in

[src/attendances_pb.ts:565](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L565)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/attendances_pb.ts:544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L544)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_pb.ts:602](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L602)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_pb.ts:600](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L600)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Attendance"``

#### Defined in

[src/attendances_pb.ts:601](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L601)

## Methods

### clone

▸ **clone**(): [`Attendance`](Attendance.md)

Create a deep copy.

#### Returns

[`Attendance`](Attendance.md)

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
| `other` | `undefined` \| ``null`` \| [`Attendance`](Attendance.md) \| `PlainMessage`<[`Attendance`](Attendance.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Attendance`](Attendance.md)

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

[`Attendance`](Attendance.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Attendance`](Attendance.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Attendance`](Attendance.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Attendance`](Attendance.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Attendance`](Attendance.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Attendance`](Attendance.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Attendance`](Attendance.md)\>

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
| `a` | `undefined` \| [`Attendance`](Attendance.md) \| `PlainMessage`<[`Attendance`](Attendance.md)\> |
| `b` | `undefined` \| [`Attendance`](Attendance.md) \| `PlainMessage`<[`Attendance`](Attendance.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_pb.ts:631](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L631)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Attendance`](Attendance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Attendance`](Attendance.md)

#### Defined in

[src/attendances_pb.ts:619](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L619)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Attendance`](Attendance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Attendance`](Attendance.md)

#### Defined in

[src/attendances_pb.ts:623](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L623)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Attendance`](Attendance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Attendance`](Attendance.md)

#### Defined in

[src/attendances_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L627)
