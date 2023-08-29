[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlan

# Class: ProductionPlan

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.ProductionPlan

## Hierarchy

- `Message`<[`ProductionPlan`](ProductionPlan.md)\>

  ↳ **`ProductionPlan`**

## Table of contents

### Constructors

- [constructor](ProductionPlan.md#constructor)

### Properties

- [approvalMetadata](ProductionPlan.md#approvalmetadata)
- [completedOn](ProductionPlan.md#completedon)
- [endDate](ProductionPlan.md#enddate)
- [endTime](ProductionPlan.md#endtime)
- [entityUuid](ProductionPlan.md#entityuuid)
- [finalRefNumber](ProductionPlan.md#finalrefnumber)
- [formData](ProductionPlan.md#formdata)
- [list](ProductionPlan.md#list)
- [locationId](ProductionPlan.md#locationid)
- [logs](ProductionPlan.md#logs)
- [metadata](ProductionPlan.md#metadata)
- [projectId](ProductionPlan.md#projectid)
- [refFrom](ProductionPlan.md#reffrom)
- [refId](ProductionPlan.md#refid)
- [referenceId](ProductionPlan.md#referenceid)
- [startDate](ProductionPlan.md#startdate)
- [startTime](ProductionPlan.md#starttime)
- [status](ProductionPlan.md#status)
- [supervisor](ProductionPlan.md#supervisor)
- [vaultFolderId](ProductionPlan.md#vaultfolderid)
- [fields](ProductionPlan.md#fields)
- [runtime](ProductionPlan.md#runtime)
- [typeName](ProductionPlan.md#typename)

### Methods

- [clone](ProductionPlan.md#clone)
- [equals](ProductionPlan.md#equals)
- [fromBinary](ProductionPlan.md#frombinary)
- [fromJson](ProductionPlan.md#fromjson)
- [fromJsonString](ProductionPlan.md#fromjsonstring)
- [getType](ProductionPlan.md#gettype)
- [toBinary](ProductionPlan.md#tobinary)
- [toJSON](ProductionPlan.md#tojson)
- [toJson](ProductionPlan.md#tojson-1)
- [toJsonString](ProductionPlan.md#tojsonstring)
- [equals](ProductionPlan.md#equals-1)
- [fromBinary](ProductionPlan.md#frombinary-1)
- [fromJson](ProductionPlan.md#fromjson-1)
- [fromJsonString](ProductionPlan.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlan**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlan`](ProductionPlan.md)\> |

#### Overrides

Message&lt;ProductionPlan\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:599](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L599)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/production_plans_pb.ts:478](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L478)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this production plan was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/production_plans_pb.ts:499](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L499)

___

### endDate

• **endDate**: `string` = `""`

The end date of the plan

**`Generated`**

from field: string end_date = 18;

#### Defined in

[src/production_plans_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L576)

___

### endTime

• **endTime**: `string` = `""`

The end time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string end_time = 19;

#### Defined in

[src/production_plans_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L583)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/production_plans_pb.ts:464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L464)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/production_plans_pb.ts:527](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L527)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/production_plans_pb.ts:597](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L597)

___

### list

• **list**: [`ProductionPlanItem`](ProductionPlanItem.md)[] = `[]`

The list of associated production plan items

**`Generated`**

from field: repeated Genesis.ProductionPlanItem list = 20;

#### Defined in

[src/production_plans_pb.ts:590](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L590)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 14;

#### Defined in

[src/production_plans_pb.ts:548](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L548)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this production plan

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/production_plans_pb.ts:492](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L492)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this production plan

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/production_plans_pb.ts:471](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L471)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 8;

#### Defined in

[src/production_plans_pb.ts:506](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L506)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/production_plans_pb.ts:534](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L534)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/production_plans_pb.ts:541](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L541)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production plan

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/production_plans_pb.ts:520](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L520)

___

### startDate

• **startDate**: `string` = `""`

The start date of the plan (in string)

**`Generated`**

from field: string start_date = 16;

#### Defined in

[src/production_plans_pb.ts:562](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L562)

___

### startTime

• **startTime**: `string` = `""`

The start time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string start_time = 17;

#### Defined in

[src/production_plans_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L569)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this production plan

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/production_plans_pb.ts:485](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L485)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_plans_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L555)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/production_plans_pb.ts:513](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L513)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:606](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L606)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:604](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L604)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlan"``

#### Defined in

[src/production_plans_pb.ts:605](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L605)

## Methods

### clone

▸ **clone**(): [`ProductionPlan`](ProductionPlan.md)

Create a deep copy.

#### Returns

[`ProductionPlan`](ProductionPlan.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlan`](ProductionPlan.md) \| `PlainMessage`<[`ProductionPlan`](ProductionPlan.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlan`](ProductionPlan.md)

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

[`ProductionPlan`](ProductionPlan.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlan`](ProductionPlan.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlan`](ProductionPlan.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlan`](ProductionPlan.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlan`](ProductionPlan.md)\>

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
| `a` | `undefined` \| [`ProductionPlan`](ProductionPlan.md) \| `PlainMessage`<[`ProductionPlan`](ProductionPlan.md)\> |
| `b` | `undefined` \| [`ProductionPlan`](ProductionPlan.md) \| `PlainMessage`<[`ProductionPlan`](ProductionPlan.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:641](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L641)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlan`](ProductionPlan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Defined in

[src/production_plans_pb.ts:629](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L629)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlan`](ProductionPlan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Defined in

[src/production_plans_pb.ts:633](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L633)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlan`](ProductionPlan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlan`](ProductionPlan.md)

#### Defined in

[src/production_plans_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L637)
