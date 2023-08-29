[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceFilterReq

# Class: WorkOrdersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.WorkOrdersServiceFilterReq

## Hierarchy

- `Message`<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

  ↳ **`WorkOrdersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](WorkOrdersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](WorkOrdersServiceFilterReq.md#approvedonend)
- [approvedOnStart](WorkOrdersServiceFilterReq.md#approvedonstart)
- [approverRoleId](WorkOrdersServiceFilterReq.md#approverroleid)
- [completedOnEnd](WorkOrdersServiceFilterReq.md#completedonend)
- [completedOnStart](WorkOrdersServiceFilterReq.md#completedonstart)
- [count](WorkOrdersServiceFilterReq.md#count)
- [creationTimestampEnd](WorkOrdersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](WorkOrdersServiceFilterReq.md#creationtimestampstart)
- [deliveryDateEnd](WorkOrdersServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](WorkOrdersServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](WorkOrdersServiceFilterReq.md#deliverydatestart)
- [entityUuid](WorkOrdersServiceFilterReq.md#entityuuid)
- [finalRefNumber](WorkOrdersServiceFilterReq.md#finalrefnumber)
- [isActive](WorkOrdersServiceFilterReq.md#isactive)
- [locationId](WorkOrdersServiceFilterReq.md#locationid)
- [offset](WorkOrdersServiceFilterReq.md#offset)
- [refFrom](WorkOrdersServiceFilterReq.md#reffrom)
- [refId](WorkOrdersServiceFilterReq.md#refid)
- [referenceId](WorkOrdersServiceFilterReq.md#referenceid)
- [sortKey](WorkOrdersServiceFilterReq.md#sortkey)
- [sortOrder](WorkOrdersServiceFilterReq.md#sortorder)
- [status](WorkOrdersServiceFilterReq.md#status)
- [fields](WorkOrdersServiceFilterReq.md#fields)
- [runtime](WorkOrdersServiceFilterReq.md#runtime)
- [typeName](WorkOrdersServiceFilterReq.md#typename)

### Methods

- [clone](WorkOrdersServiceFilterReq.md#clone)
- [equals](WorkOrdersServiceFilterReq.md#equals)
- [fromBinary](WorkOrdersServiceFilterReq.md#frombinary)
- [fromJson](WorkOrdersServiceFilterReq.md#fromjson)
- [fromJsonString](WorkOrdersServiceFilterReq.md#fromjsonstring)
- [getType](WorkOrdersServiceFilterReq.md#gettype)
- [toBinary](WorkOrdersServiceFilterReq.md#tobinary)
- [toJSON](WorkOrdersServiceFilterReq.md#tojson)
- [toJson](WorkOrdersServiceFilterReq.md#tojson-1)
- [toJsonString](WorkOrdersServiceFilterReq.md#tojsonstring)
- [equals](WorkOrdersServiceFilterReq.md#equals-1)
- [fromBinary](WorkOrdersServiceFilterReq.md#frombinary-1)
- [fromJson](WorkOrdersServiceFilterReq.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

#### Overrides

Message&lt;WorkOrdersServiceFilterReq\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:1314](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1314)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/work_orders_pb.ts:1235](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1235)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/work_orders_pb.ts:1228](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1228)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/work_orders_pb.ts:1221](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1221)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/work_orders_pb.ts:1242](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1242)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/work_orders_pb.ts:1256](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1256)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/work_orders_pb.ts:1249](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1249)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/work_orders_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1165)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/work_orders_pb.ts:1200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1200)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/work_orders_pb.ts:1193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1193)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

[src/work_orders_pb.ts:1277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1277)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

[src/work_orders_pb.ts:1263](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1263)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

[src/work_orders_pb.ts:1270](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1270)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/work_orders_pb.ts:1207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1207)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/work_orders_pb.ts:1291](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1291)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/work_orders_pb.ts:1158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1158)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 24;

#### Defined in

[src/work_orders_pb.ts:1312](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1312)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/work_orders_pb.ts:1172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1172)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/work_orders_pb.ts:1298](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1298)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/work_orders_pb.ts:1305](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1305)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the work order

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/work_orders_pb.ts:1284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1284)

___

### sortKey

• **sortKey**: [`WORK_ORDER_SORT_KEY`](../enums/WORK_ORDER_SORT_KEY.md) = `WORK_ORDER_SORT_KEY.WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/work_orders_pb.ts:1186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1186)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/work_orders_pb.ts:1179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1179)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this work order

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/work_orders_pb.ts:1214](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1214)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:1321](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1321)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:1319](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1319)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrdersServiceFilterReq"``

#### Defined in

[src/work_orders_pb.ts:1320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1320)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

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

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:1359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1359)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders_pb.ts:1347](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1347)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders_pb.ts:1351](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1351)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders_pb.ts:1355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1355)
