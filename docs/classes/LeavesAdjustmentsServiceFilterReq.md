[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceFilterReq

# Class: LeavesAdjustmentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.LeavesAdjustmentsServiceFilterReq

## Hierarchy

- `Message`<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\>

  ↳ **`LeavesAdjustmentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LeavesAdjustmentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesAdjustmentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](LeavesAdjustmentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](LeavesAdjustmentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](LeavesAdjustmentsServiceFilterReq.md#completedonend)
- [completedOnStart](LeavesAdjustmentsServiceFilterReq.md#completedonstart)
- [count](LeavesAdjustmentsServiceFilterReq.md#count)
- [creationTimestampEnd](LeavesAdjustmentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LeavesAdjustmentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LeavesAdjustmentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](LeavesAdjustmentsServiceFilterReq.md#finalrefnumber)
- [isActive](LeavesAdjustmentsServiceFilterReq.md#isactive)
- [offset](LeavesAdjustmentsServiceFilterReq.md#offset)
- [referenceId](LeavesAdjustmentsServiceFilterReq.md#referenceid)
- [sortKey](LeavesAdjustmentsServiceFilterReq.md#sortkey)
- [sortOrder](LeavesAdjustmentsServiceFilterReq.md#sortorder)
- [status](LeavesAdjustmentsServiceFilterReq.md#status)
- [userId](LeavesAdjustmentsServiceFilterReq.md#userid)
- [fields](LeavesAdjustmentsServiceFilterReq.md#fields)
- [runtime](LeavesAdjustmentsServiceFilterReq.md#runtime)
- [typeName](LeavesAdjustmentsServiceFilterReq.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceFilterReq.md#clone)
- [equals](LeavesAdjustmentsServiceFilterReq.md#equals)
- [fromBinary](LeavesAdjustmentsServiceFilterReq.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceFilterReq.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceFilterReq.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceFilterReq.md#gettype)
- [toBinary](LeavesAdjustmentsServiceFilterReq.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceFilterReq.md#tojson)
- [toJson](LeavesAdjustmentsServiceFilterReq.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceFilterReq.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceFilterReq.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceFilterReq.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:1160](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1160)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/leaves_adjustments_pb.ts:1116](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1116)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/leaves_adjustments_pb.ts:1109](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1109)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/leaves_adjustments_pb.ts:1102](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1102)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/leaves_adjustments_pb.ts:1123](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1123)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/leaves_adjustments_pb.ts:1137](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1137)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/leaves_adjustments_pb.ts:1130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1130)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:1046](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1046)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/leaves_adjustments_pb.ts:1081](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1081)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/leaves_adjustments_pb.ts:1074](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1074)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/leaves_adjustments_pb.ts:1088](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1088)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/leaves_adjustments_pb.ts:1151](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1151)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:1039](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1039)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/leaves_adjustments_pb.ts:1053](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1053)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave adjustment

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/leaves_adjustments_pb.ts:1144](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1144)

___

### sortKey

• **sortKey**: [`LEAVE_ADJUSTMENT_SORT_KEY`](../enums/LEAVE_ADJUSTMENT_SORT_KEY.md) = `LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_adjustments_pb.ts:1067](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1067)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_adjustments_pb.ts:1060](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1060)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this record

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/leaves_adjustments_pb.ts:1095](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1095)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this adjustment needs to be made

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/leaves_adjustments_pb.ts:1158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1158)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:1167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1167)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1165)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsServiceFilterReq"``

#### Defined in

[src/leaves_adjustments_pb.ts:1166](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1166)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

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

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:1200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1200)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:1188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1188)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:1192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1192)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:1196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1196)
