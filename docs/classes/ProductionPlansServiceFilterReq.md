[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceFilterReq

# Class: ProductionPlansServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.ProductionPlansServiceFilterReq

## Hierarchy

- `Message`<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

  ↳ **`ProductionPlansServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProductionPlansServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProductionPlansServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProductionPlansServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProductionPlansServiceFilterReq.md#approverroleid)
- [completedOnEnd](ProductionPlansServiceFilterReq.md#completedonend)
- [completedOnStart](ProductionPlansServiceFilterReq.md#completedonstart)
- [count](ProductionPlansServiceFilterReq.md#count)
- [creationTimestampEnd](ProductionPlansServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProductionPlansServiceFilterReq.md#creationtimestampstart)
- [endDateEnd](ProductionPlansServiceFilterReq.md#enddateend)
- [endDateStart](ProductionPlansServiceFilterReq.md#enddatestart)
- [endTimeEnd](ProductionPlansServiceFilterReq.md#endtimeend)
- [endTimeStart](ProductionPlansServiceFilterReq.md#endtimestart)
- [entityUuid](ProductionPlansServiceFilterReq.md#entityuuid)
- [finalRefNumber](ProductionPlansServiceFilterReq.md#finalrefnumber)
- [isActive](ProductionPlansServiceFilterReq.md#isactive)
- [locationId](ProductionPlansServiceFilterReq.md#locationid)
- [offset](ProductionPlansServiceFilterReq.md#offset)
- [projectId](ProductionPlansServiceFilterReq.md#projectid)
- [refFrom](ProductionPlansServiceFilterReq.md#reffrom)
- [refId](ProductionPlansServiceFilterReq.md#refid)
- [referenceId](ProductionPlansServiceFilterReq.md#referenceid)
- [sortKey](ProductionPlansServiceFilterReq.md#sortkey)
- [sortOrder](ProductionPlansServiceFilterReq.md#sortorder)
- [startDateEnd](ProductionPlansServiceFilterReq.md#startdateend)
- [startDateStart](ProductionPlansServiceFilterReq.md#startdatestart)
- [startTimeEnd](ProductionPlansServiceFilterReq.md#starttimeend)
- [startTimeStart](ProductionPlansServiceFilterReq.md#starttimestart)
- [status](ProductionPlansServiceFilterReq.md#status)
- [supervisor](ProductionPlansServiceFilterReq.md#supervisor)
- [fields](ProductionPlansServiceFilterReq.md#fields)
- [runtime](ProductionPlansServiceFilterReq.md#runtime)
- [typeName](ProductionPlansServiceFilterReq.md#typename)

### Methods

- [clone](ProductionPlansServiceFilterReq.md#clone)
- [equals](ProductionPlansServiceFilterReq.md#equals)
- [fromBinary](ProductionPlansServiceFilterReq.md#frombinary)
- [fromJson](ProductionPlansServiceFilterReq.md#fromjson)
- [fromJsonString](ProductionPlansServiceFilterReq.md#fromjsonstring)
- [getType](ProductionPlansServiceFilterReq.md#gettype)
- [toBinary](ProductionPlansServiceFilterReq.md#tobinary)
- [toJSON](ProductionPlansServiceFilterReq.md#tojson)
- [toJson](ProductionPlansServiceFilterReq.md#tojson-1)
- [toJsonString](ProductionPlansServiceFilterReq.md#tojsonstring)
- [equals](ProductionPlansServiceFilterReq.md#equals-1)
- [fromBinary](ProductionPlansServiceFilterReq.md#frombinary-1)
- [fromJson](ProductionPlansServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

#### Overrides

Message&lt;ProductionPlansServiceFilterReq\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:1499](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1499)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/production_plans_pb.ts:1371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1371)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/production_plans_pb.ts:1364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1364)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/production_plans_pb.ts:1357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1357)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/production_plans_pb.ts:1378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1378)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/production_plans_pb.ts:1392](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1392)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/production_plans_pb.ts:1385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1385)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_plans_pb.ts:1301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1301)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/production_plans_pb.ts:1336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1336)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/production_plans_pb.ts:1329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1329)

___

### endDateEnd

• **endDateEnd**: `string` = `""`

The max end date of the plan (in string)

**`Generated`**

from field: string end_date_end = 35;

#### Defined in

[src/production_plans_pb.ts:1476](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1476)

___

### endDateStart

• **endDateStart**: `string` = `""`

The min end date of the plan (in string)

**`Generated`**

from field: string end_date_start = 34;

#### Defined in

[src/production_plans_pb.ts:1469](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1469)

___

### endTimeEnd

• **endTimeEnd**: `string` = `""`

The max end time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string end_time_end = 37;

#### Defined in

[src/production_plans_pb.ts:1490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1490)

___

### endTimeStart

• **endTimeStart**: `string` = `""`

The min end time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string end_time_start = 36;

#### Defined in

[src/production_plans_pb.ts:1483](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1483)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/production_plans_pb.ts:1343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1343)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/production_plans_pb.ts:1406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1406)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/production_plans_pb.ts:1294](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1294)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 24;

#### Defined in

[src/production_plans_pb.ts:1427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1427)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/production_plans_pb.ts:1308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1308)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 50;

#### Defined in

[src/production_plans_pb.ts:1497](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1497)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/production_plans_pb.ts:1413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1413)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/production_plans_pb.ts:1420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1420)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production plan

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/production_plans_pb.ts:1399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1399)

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_SORT_KEY`](../enums/PRODUCTION_PLAN_SORT_KEY.md) = `PRODUCTION_PLAN_SORT_KEY.PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PRODUCTION_PLAN_SORT_KEY sort_key = 5;

#### Defined in

[src/production_plans_pb.ts:1322](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1322)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_plans_pb.ts:1315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1315)

___

### startDateEnd

• **startDateEnd**: `string` = `""`

The max start date of the plan (in string)

**`Generated`**

from field: string start_date_end = 31;

#### Defined in

[src/production_plans_pb.ts:1448](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1448)

___

### startDateStart

• **startDateStart**: `string` = `""`

The min start date of the plan (in string)

**`Generated`**

from field: string start_date_start = 30;

#### Defined in

[src/production_plans_pb.ts:1441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1441)

___

### startTimeEnd

• **startTimeEnd**: `string` = `""`

The max start time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string start_time_end = 33;

#### Defined in

[src/production_plans_pb.ts:1462](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1462)

___

### startTimeStart

• **startTimeStart**: `string` = `""`

The min start time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string start_time_start = 32;

#### Defined in

[src/production_plans_pb.ts:1455](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1455)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this production plan

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/production_plans_pb.ts:1350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1350)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_plans_pb.ts:1434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1434)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:1506](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1506)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:1504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1504)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServiceFilterReq"``

#### Defined in

[src/production_plans_pb.ts:1505](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1505)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

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

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:1551](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1551)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

[src/production_plans_pb.ts:1539](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1539)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

[src/production_plans_pb.ts:1543](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1543)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

[src/production_plans_pb.ts:1547](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1547)
