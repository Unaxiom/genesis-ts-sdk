[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Absence

# Class: Absence

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Absence

## Hierarchy

- `Message`<[`Absence`](Absence.md)\>

  ↳ **`Absence`**

## Table of contents

### Constructors

- [constructor](Absence.md#constructor)

### Properties

- [approvalMetadata](Absence.md#approvalmetadata)
- [completedOn](Absence.md#completedon)
- [description](Absence.md#description)
- [entityUuid](Absence.md#entityuuid)
- [finalRefNumber](Absence.md#finalrefnumber)
- [formData](Absence.md#formdata)
- [fromTimestamp](Absence.md#fromtimestamp)
- [leaveRequestId](Absence.md#leaverequestid)
- [logs](Absence.md#logs)
- [metadata](Absence.md#metadata)
- [quantity](Absence.md#quantity)
- [referenceId](Absence.md#referenceid)
- [status](Absence.md#status)
- [toTimestamp](Absence.md#totimestamp)
- [uomId](Absence.md#uomid)
- [userId](Absence.md#userid)
- [vaultFolderId](Absence.md#vaultfolderid)
- [fields](Absence.md#fields)
- [runtime](Absence.md#runtime)
- [typeName](Absence.md#typename)

### Methods

- [clone](Absence.md#clone)
- [equals](Absence.md#equals)
- [fromBinary](Absence.md#frombinary)
- [fromJson](Absence.md#fromjson)
- [fromJsonString](Absence.md#fromjsonstring)
- [getType](Absence.md#gettype)
- [toBinary](Absence.md#tobinary)
- [toJSON](Absence.md#tojson)
- [toJson](Absence.md#tojson-1)
- [toJsonString](Absence.md#tojsonstring)
- [equals](Absence.md#equals-1)
- [fromBinary](Absence.md#frombinary-1)
- [fromJson](Absence.md#fromjson-1)
- [fromJsonString](Absence.md#fromjsonstring-1)

## Constructors

### constructor

• **new Absence**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Absence`](Absence.md)\> |

#### Overrides

Message&lt;Absence\&gt;.constructor

#### Defined in

[src/absences_pb.ts:506](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L506)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/absences_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L406)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this absence was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/absences_pb.ts:427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L427)

___

### description

• **description**: `string` = `""`

The description of the absence

**`Generated`**

from field: string description = 18;

#### Defined in

[src/absences_pb.ts:497](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L497)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/absences_pb.ts:392](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L392)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/absences_pb.ts:448](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L448)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/absences_pb.ts:504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L504)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the user is absent

**`Generated`**

from field: int64 from_timestamp = 14;

#### Defined in

[src/absences_pb.ts:469](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L469)

___

### leaveRequestId

• **leaveRequestId**: `bigint` = `protoInt64.zero`

The ID of the optional associated leave request

**`Generated`**

from field: int64 leave_request_id = 13;

#### Defined in

[src/absences_pb.ts:462](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L462)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this absence

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/absences_pb.ts:420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L420)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this absence

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/absences_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L399)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity of absence (in cents)

**`Generated`**

from field: int64 quantity = 17;

#### Defined in

[src/absences_pb.ts:490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L490)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the absence

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/absences_pb.ts:441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L441)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this absence

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/absences_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L413)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp until when the user is absent

**`Generated`**

from field: int64 to_timestamp = 15;

#### Defined in

[src/absences_pb.ts:476](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L476)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: int64 uom_id = 16;

#### Defined in

[src/absences_pb.ts:483](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L483)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has been marked as absent

**`Generated`**

from field: int64 user_id = 12;

#### Defined in

[src/absences_pb.ts:455](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L455)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/absences_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L434)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences_pb.ts:513](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L513)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences_pb.ts:511](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L511)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Absence"``

#### Defined in

[src/absences_pb.ts:512](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L512)

## Methods

### clone

▸ **clone**(): [`Absence`](Absence.md)

Create a deep copy.

#### Returns

[`Absence`](Absence.md)

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
| `other` | `undefined` \| ``null`` \| [`Absence`](Absence.md) \| `PlainMessage`<[`Absence`](Absence.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Absence`](Absence.md)

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

[`Absence`](Absence.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Absence`](Absence.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Absence`](Absence.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Absence`](Absence.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Absence`](Absence.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Absence`](Absence.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Absence`](Absence.md)\>

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
| `a` | `undefined` \| [`Absence`](Absence.md) \| `PlainMessage`<[`Absence`](Absence.md)\> |
| `b` | `undefined` \| [`Absence`](Absence.md) \| `PlainMessage`<[`Absence`](Absence.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences_pb.ts:545](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L545)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Absence`](Absence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Absence`](Absence.md)

#### Defined in

[src/absences_pb.ts:533](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L533)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Absence`](Absence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Absence`](Absence.md)

#### Defined in

[src/absences_pb.ts:537](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L537)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Absence`](Absence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Absence`](Absence.md)

#### Defined in

[src/absences_pb.ts:541](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L541)
