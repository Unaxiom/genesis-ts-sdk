[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceFilterReq

# Class: VisitationsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.VisitationsServiceFilterReq

## Hierarchy

- `Message`<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

  ↳ **`VisitationsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](VisitationsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](VisitationsServiceFilterReq.md#approvedonend)
- [approvedOnStart](VisitationsServiceFilterReq.md#approvedonstart)
- [approverRoleId](VisitationsServiceFilterReq.md#approverroleid)
- [associateId](VisitationsServiceFilterReq.md#associateid)
- [completedOnEnd](VisitationsServiceFilterReq.md#completedonend)
- [completedOnStart](VisitationsServiceFilterReq.md#completedonstart)
- [count](VisitationsServiceFilterReq.md#count)
- [creationTimestampEnd](VisitationsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VisitationsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](VisitationsServiceFilterReq.md#entityuuid)
- [entryTimestampEnd](VisitationsServiceFilterReq.md#entrytimestampend)
- [entryTimestampStart](VisitationsServiceFilterReq.md#entrytimestampstart)
- [exitTimestampEnd](VisitationsServiceFilterReq.md#exittimestampend)
- [exitTimestampStart](VisitationsServiceFilterReq.md#exittimestampstart)
- [finalRefNumber](VisitationsServiceFilterReq.md#finalrefnumber)
- [isActive](VisitationsServiceFilterReq.md#isactive)
- [offset](VisitationsServiceFilterReq.md#offset)
- [referenceId](VisitationsServiceFilterReq.md#referenceid)
- [sortKey](VisitationsServiceFilterReq.md#sortkey)
- [sortOrder](VisitationsServiceFilterReq.md#sortorder)
- [status](VisitationsServiceFilterReq.md#status)
- [userId](VisitationsServiceFilterReq.md#userid)
- [fields](VisitationsServiceFilterReq.md#fields)
- [runtime](VisitationsServiceFilterReq.md#runtime)
- [typeName](VisitationsServiceFilterReq.md#typename)

### Methods

- [clone](VisitationsServiceFilterReq.md#clone)
- [equals](VisitationsServiceFilterReq.md#equals)
- [fromBinary](VisitationsServiceFilterReq.md#frombinary)
- [fromJson](VisitationsServiceFilterReq.md#fromjson)
- [fromJsonString](VisitationsServiceFilterReq.md#fromjsonstring)
- [getType](VisitationsServiceFilterReq.md#gettype)
- [toBinary](VisitationsServiceFilterReq.md#tobinary)
- [toJSON](VisitationsServiceFilterReq.md#tojson)
- [toJson](VisitationsServiceFilterReq.md#tojson-1)
- [toJsonString](VisitationsServiceFilterReq.md#tojsonstring)
- [equals](VisitationsServiceFilterReq.md#equals-1)
- [fromBinary](VisitationsServiceFilterReq.md#frombinary-1)
- [fromJson](VisitationsServiceFilterReq.md#fromjson-1)
- [fromJsonString](VisitationsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

#### Overrides

Message&lt;VisitationsServiceFilterReq\&gt;.constructor

#### Defined in

[src/visitations_pb.ts:1116](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1116)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/visitations_pb.ts:1037](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1037)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/visitations_pb.ts:1030](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1030)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/visitations_pb.ts:1023](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1023)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/visitations_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1044)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

The ID of the associate who has requested for visitation

**`Generated`**

from field: int64 associate_id = 23;

#### Defined in

[src/visitations_pb.ts:1086](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1086)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/visitations_pb.ts:1058](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1058)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/visitations_pb.ts:1051](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1051)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/visitations_pb.ts:967](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L967)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/visitations_pb.ts:1002](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1002)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/visitations_pb.ts:995](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L995)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/visitations_pb.ts:1009](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1009)

___

### entryTimestampEnd

• **entryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: int64 entry_timestamp_end = 25;

#### Defined in

[src/visitations_pb.ts:1100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1100)

___

### entryTimestampStart

• **entryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: int64 entry_timestamp_start = 24;

#### Defined in

[src/visitations_pb.ts:1093](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1093)

___

### exitTimestampEnd

• **exitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: int64 exit_timestamp_end = 27;

#### Defined in

[src/visitations_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1114)

___

### exitTimestampStart

• **exitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: int64 exit_timestamp_start = 26;

#### Defined in

[src/visitations_pb.ts:1107](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1107)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/visitations_pb.ts:1072](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1072)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/visitations_pb.ts:960](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L960)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/visitations_pb.ts:974](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L974)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the visitation

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/visitations_pb.ts:1065](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1065)

___

### sortKey

• **sortKey**: [`VISITATION_SORT_KEY`](../enums/VISITATION_SORT_KEY.md) = `VISITATION_SORT_KEY.VISITATION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.VISITATION_SORT_KEY sort_key = 5;

#### Defined in

[src/visitations_pb.ts:988](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L988)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/visitations_pb.ts:981](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L981)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this visitation

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/visitations_pb.ts:1016](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1016)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who is being visited

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/visitations_pb.ts:1079](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1079)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations_pb.ts:1123](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1123)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations_pb.ts:1121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1121)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.VisitationsServiceFilterReq"``

#### Defined in

[src/visitations_pb.ts:1122](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1122)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

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

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations_pb.ts:1161](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1161)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations_pb.ts:1149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1149)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations_pb.ts:1153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1153)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations_pb.ts:1157](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L1157)
