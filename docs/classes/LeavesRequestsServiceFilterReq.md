[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServiceFilterReq

# Class: LeavesRequestsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.LeavesRequestsServiceFilterReq

## Hierarchy

- `Message`<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\>

  ↳ **`LeavesRequestsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LeavesRequestsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesRequestsServiceFilterReq.md#approvedonend)
- [approvedOnStart](LeavesRequestsServiceFilterReq.md#approvedonstart)
- [approverRoleId](LeavesRequestsServiceFilterReq.md#approverroleid)
- [completedOnEnd](LeavesRequestsServiceFilterReq.md#completedonend)
- [completedOnStart](LeavesRequestsServiceFilterReq.md#completedonstart)
- [count](LeavesRequestsServiceFilterReq.md#count)
- [creationTimestampEnd](LeavesRequestsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LeavesRequestsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LeavesRequestsServiceFilterReq.md#entityuuid)
- [finalRefNumber](LeavesRequestsServiceFilterReq.md#finalrefnumber)
- [fromTimestampEnd](LeavesRequestsServiceFilterReq.md#fromtimestampend)
- [fromTimestampStart](LeavesRequestsServiceFilterReq.md#fromtimestampstart)
- [isActive](LeavesRequestsServiceFilterReq.md#isactive)
- [leaveTypeId](LeavesRequestsServiceFilterReq.md#leavetypeid)
- [offset](LeavesRequestsServiceFilterReq.md#offset)
- [referenceId](LeavesRequestsServiceFilterReq.md#referenceid)
- [sortKey](LeavesRequestsServiceFilterReq.md#sortkey)
- [sortOrder](LeavesRequestsServiceFilterReq.md#sortorder)
- [status](LeavesRequestsServiceFilterReq.md#status)
- [toTimestampEnd](LeavesRequestsServiceFilterReq.md#totimestampend)
- [toTimestampStart](LeavesRequestsServiceFilterReq.md#totimestampstart)
- [userId](LeavesRequestsServiceFilterReq.md#userid)
- [fields](LeavesRequestsServiceFilterReq.md#fields)
- [runtime](LeavesRequestsServiceFilterReq.md#runtime)
- [typeName](LeavesRequestsServiceFilterReq.md#typename)

### Methods

- [clone](LeavesRequestsServiceFilterReq.md#clone)
- [equals](LeavesRequestsServiceFilterReq.md#equals)
- [fromBinary](LeavesRequestsServiceFilterReq.md#frombinary)
- [fromJson](LeavesRequestsServiceFilterReq.md#fromjson)
- [fromJsonString](LeavesRequestsServiceFilterReq.md#fromjsonstring)
- [getType](LeavesRequestsServiceFilterReq.md#gettype)
- [toBinary](LeavesRequestsServiceFilterReq.md#tobinary)
- [toJSON](LeavesRequestsServiceFilterReq.md#tojson)
- [toJson](LeavesRequestsServiceFilterReq.md#tojson-1)
- [toJsonString](LeavesRequestsServiceFilterReq.md#tojsonstring)
- [equals](LeavesRequestsServiceFilterReq.md#equals-1)
- [fromBinary](LeavesRequestsServiceFilterReq.md#frombinary-1)
- [fromJson](LeavesRequestsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LeavesRequestsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\> |

#### Overrides

Message&lt;LeavesRequestsServiceFilterReq\&gt;.constructor

#### Defined in

[src/leaves_requests_pb.ts:948](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L948)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/leaves_requests_pb.ts:869](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L869)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/leaves_requests_pb.ts:862](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L862)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/leaves_requests_pb.ts:855](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L855)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/leaves_requests_pb.ts:876](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L876)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/leaves_requests_pb.ts:890](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L890)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/leaves_requests_pb.ts:883](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L883)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_requests_pb.ts:799](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L799)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/leaves_requests_pb.ts:834](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L834)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/leaves_requests_pb.ts:827](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L827)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/leaves_requests_pb.ts:841](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L841)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/leaves_requests_pb.ts:904](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L904)

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: int64 from_timestamp_end = 25;

#### Defined in

[src/leaves_requests_pb.ts:932](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L932)

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: int64 from_timestamp_start = 24;

#### Defined in

[src/leaves_requests_pb.ts:925](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L925)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/leaves_requests_pb.ts:792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L792)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the corresponding leave type

**`Generated`**

from field: int64 leave_type_id = 23;

#### Defined in

[src/leaves_requests_pb.ts:918](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L918)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/leaves_requests_pb.ts:806](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L806)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave request

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/leaves_requests_pb.ts:897](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L897)

___

### sortKey

• **sortKey**: [`LEAVE_REQUEST_SORT_KEY`](../enums/LEAVE_REQUEST_SORT_KEY.md) = `LEAVE_REQUEST_SORT_KEY.LEAVE_REQUEST_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.LEAVE_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_requests_pb.ts:820](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L820)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_requests_pb.ts:813](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L813)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this leave request

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/leaves_requests_pb.ts:848](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L848)

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: int64 to_timestamp_end = 27;

#### Defined in

[src/leaves_requests_pb.ts:946](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L946)

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: int64 to_timestamp_start = 26;

#### Defined in

[src/leaves_requests_pb.ts:939](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L939)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for leave

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/leaves_requests_pb.ts:911](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L911)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L955)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests_pb.ts:953](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L953)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesRequestsServiceFilterReq"``

#### Defined in

[src/leaves_requests_pb.ts:954](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L954)

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md) \| `PlainMessage`<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

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

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md) \| `PlainMessage`<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md) \| `PlainMessage`<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests_pb.ts:993](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L993)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Defined in

[src/leaves_requests_pb.ts:981](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L981)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Defined in

[src/leaves_requests_pb.ts:985](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L985)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Defined in

[src/leaves_requests_pb.ts:989](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L989)
