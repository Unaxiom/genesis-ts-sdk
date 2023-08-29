[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceFilterReq

# Class: OvertimesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.OvertimesServiceFilterReq

## Hierarchy

- `Message`<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\>

  ↳ **`OvertimesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OvertimesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OvertimesServiceFilterReq.md#approvedonend)
- [approvedOnStart](OvertimesServiceFilterReq.md#approvedonstart)
- [approverRoleId](OvertimesServiceFilterReq.md#approverroleid)
- [completedOnEnd](OvertimesServiceFilterReq.md#completedonend)
- [completedOnStart](OvertimesServiceFilterReq.md#completedonstart)
- [count](OvertimesServiceFilterReq.md#count)
- [creationTimestampEnd](OvertimesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OvertimesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](OvertimesServiceFilterReq.md#entityuuid)
- [finalRefNumber](OvertimesServiceFilterReq.md#finalrefnumber)
- [fromTimestampEnd](OvertimesServiceFilterReq.md#fromtimestampend)
- [fromTimestampStart](OvertimesServiceFilterReq.md#fromtimestampstart)
- [isActive](OvertimesServiceFilterReq.md#isactive)
- [offset](OvertimesServiceFilterReq.md#offset)
- [referenceId](OvertimesServiceFilterReq.md#referenceid)
- [sortKey](OvertimesServiceFilterReq.md#sortkey)
- [sortOrder](OvertimesServiceFilterReq.md#sortorder)
- [status](OvertimesServiceFilterReq.md#status)
- [toTimestampEnd](OvertimesServiceFilterReq.md#totimestampend)
- [toTimestampStart](OvertimesServiceFilterReq.md#totimestampstart)
- [userId](OvertimesServiceFilterReq.md#userid)
- [fields](OvertimesServiceFilterReq.md#fields)
- [runtime](OvertimesServiceFilterReq.md#runtime)
- [typeName](OvertimesServiceFilterReq.md#typename)

### Methods

- [clone](OvertimesServiceFilterReq.md#clone)
- [equals](OvertimesServiceFilterReq.md#equals)
- [fromBinary](OvertimesServiceFilterReq.md#frombinary)
- [fromJson](OvertimesServiceFilterReq.md#fromjson)
- [fromJsonString](OvertimesServiceFilterReq.md#fromjsonstring)
- [getType](OvertimesServiceFilterReq.md#gettype)
- [toBinary](OvertimesServiceFilterReq.md#tobinary)
- [toJSON](OvertimesServiceFilterReq.md#tojson)
- [toJson](OvertimesServiceFilterReq.md#tojson-1)
- [toJsonString](OvertimesServiceFilterReq.md#tojsonstring)
- [equals](OvertimesServiceFilterReq.md#equals-1)
- [fromBinary](OvertimesServiceFilterReq.md#frombinary-1)
- [fromJson](OvertimesServiceFilterReq.md#fromjson-1)
- [fromJsonString](OvertimesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\> |

#### Overrides

Message&lt;OvertimesServiceFilterReq\&gt;.constructor

#### Defined in

[src/overtimes_pb.ts:909](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L909)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/overtimes_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L837)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/overtimes_pb.ts:830](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L830)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/overtimes_pb.ts:823](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L823)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/overtimes_pb.ts:844](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L844)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/overtimes_pb.ts:858](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L858)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/overtimes_pb.ts:851](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L851)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/overtimes_pb.ts:767](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L767)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/overtimes_pb.ts:802](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L802)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/overtimes_pb.ts:795](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L795)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/overtimes_pb.ts:809](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L809)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/overtimes_pb.ts:872](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L872)

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: int64 from_timestamp_end = 25;

#### Defined in

[src/overtimes_pb.ts:893](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L893)

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: int64 from_timestamp_start = 24;

#### Defined in

[src/overtimes_pb.ts:886](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L886)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/overtimes_pb.ts:760](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L760)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/overtimes_pb.ts:774](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L774)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the overtime

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/overtimes_pb.ts:865](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L865)

___

### sortKey

• **sortKey**: [`OVERTIME_SORT_KEY`](../enums/OVERTIME_SORT_KEY.md) = `OVERTIME_SORT_KEY.OVERTIME_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.OVERTIME_SORT_KEY sort_key = 5;

#### Defined in

[src/overtimes_pb.ts:788](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L788)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/overtimes_pb.ts:781](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L781)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this overtime

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/overtimes_pb.ts:816](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L816)

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: int64 to_timestamp_end = 27;

#### Defined in

[src/overtimes_pb.ts:907](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L907)

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: int64 to_timestamp_start = 26;

#### Defined in

[src/overtimes_pb.ts:900](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L900)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/overtimes_pb.ts:879](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L879)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes_pb.ts:916](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L916)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes_pb.ts:914](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L914)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OvertimesServiceFilterReq"``

#### Defined in

[src/overtimes_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L915)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md) \| `PlainMessage`<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

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

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md) \| `PlainMessage`<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md) \| `PlainMessage`<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes_pb.ts:953](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L953)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Defined in

[src/overtimes_pb.ts:941](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L941)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Defined in

[src/overtimes_pb.ts:945](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L945)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Defined in

[src/overtimes_pb.ts:949](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L949)
