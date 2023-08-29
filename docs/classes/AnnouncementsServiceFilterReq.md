[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceFilterReq

# Class: AnnouncementsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.AnnouncementsServiceFilterReq

## Hierarchy

- `Message`<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

  ↳ **`AnnouncementsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AnnouncementsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AnnouncementsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AnnouncementsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AnnouncementsServiceFilterReq.md#approverroleid)
- [completedOnEnd](AnnouncementsServiceFilterReq.md#completedonend)
- [completedOnStart](AnnouncementsServiceFilterReq.md#completedonstart)
- [count](AnnouncementsServiceFilterReq.md#count)
- [creationTimestampEnd](AnnouncementsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AnnouncementsServiceFilterReq.md#creationtimestampstart)
- [description](AnnouncementsServiceFilterReq.md#description)
- [endOnEnd](AnnouncementsServiceFilterReq.md#endonend)
- [endOnStart](AnnouncementsServiceFilterReq.md#endonstart)
- [entityUuid](AnnouncementsServiceFilterReq.md#entityuuid)
- [isActive](AnnouncementsServiceFilterReq.md#isactive)
- [offset](AnnouncementsServiceFilterReq.md#offset)
- [sortKey](AnnouncementsServiceFilterReq.md#sortkey)
- [sortOrder](AnnouncementsServiceFilterReq.md#sortorder)
- [startOnEnd](AnnouncementsServiceFilterReq.md#startonend)
- [startOnStart](AnnouncementsServiceFilterReq.md#startonstart)
- [status](AnnouncementsServiceFilterReq.md#status)
- [title](AnnouncementsServiceFilterReq.md#title)
- [fields](AnnouncementsServiceFilterReq.md#fields)
- [runtime](AnnouncementsServiceFilterReq.md#runtime)
- [typeName](AnnouncementsServiceFilterReq.md#typename)

### Methods

- [clone](AnnouncementsServiceFilterReq.md#clone)
- [equals](AnnouncementsServiceFilterReq.md#equals)
- [fromBinary](AnnouncementsServiceFilterReq.md#frombinary)
- [fromJson](AnnouncementsServiceFilterReq.md#fromjson)
- [fromJsonString](AnnouncementsServiceFilterReq.md#fromjsonstring)
- [getType](AnnouncementsServiceFilterReq.md#gettype)
- [toBinary](AnnouncementsServiceFilterReq.md#tobinary)
- [toJSON](AnnouncementsServiceFilterReq.md#tojson)
- [toJson](AnnouncementsServiceFilterReq.md#tojson-1)
- [toJsonString](AnnouncementsServiceFilterReq.md#tojsonstring)
- [equals](AnnouncementsServiceFilterReq.md#equals-1)
- [fromBinary](AnnouncementsServiceFilterReq.md#frombinary-1)
- [fromJson](AnnouncementsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Overrides

Message&lt;AnnouncementsServiceFilterReq\&gt;.constructor

#### Defined in

[src/announcements_pb.ts:845](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L845)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/announcements_pb.ts:780](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L780)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/announcements_pb.ts:773](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L773)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/announcements_pb.ts:766](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L766)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/announcements_pb.ts:787](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L787)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/announcements_pb.ts:801](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L801)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/announcements_pb.ts:794](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L794)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/announcements_pb.ts:710](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L710)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/announcements_pb.ts:745](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L745)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/announcements_pb.ts:738](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L738)

___

### description

• **description**: `string` = `""`

The description of the announcement

**`Generated`**

from field: string description = 21;

#### Defined in

[src/announcements_pb.ts:815](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L815)

___

### endOnEnd

• **endOnEnd**: `bigint` = `protoInt64.zero`

The end range of end timestamp

**`Generated`**

from field: int64 end_on_end = 25;

#### Defined in

[src/announcements_pb.ts:843](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L843)

___

### endOnStart

• **endOnStart**: `bigint` = `protoInt64.zero`

The start range of end timestamp

**`Generated`**

from field: int64 end_on_start = 24;

#### Defined in

[src/announcements_pb.ts:836](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L836)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/announcements_pb.ts:752](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L752)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/announcements_pb.ts:703](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L703)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/announcements_pb.ts:717](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L717)

___

### sortKey

• **sortKey**: [`ANNOUNCEMENT_SORT_KEY`](../enums/ANNOUNCEMENT_SORT_KEY.md) = `ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ANNOUNCEMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/announcements_pb.ts:731](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L731)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/announcements_pb.ts:724](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L724)

___

### startOnEnd

• **startOnEnd**: `bigint` = `protoInt64.zero`

The end range of start timestamp

**`Generated`**

from field: int64 start_on_end = 23;

#### Defined in

[src/announcements_pb.ts:829](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L829)

___

### startOnStart

• **startOnStart**: `bigint` = `protoInt64.zero`

The start range of start timestamp

**`Generated`**

from field: int64 start_on_start = 22;

#### Defined in

[src/announcements_pb.ts:822](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L822)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this announcement

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/announcements_pb.ts:759](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L759)

___

### title

• **title**: `string` = `""`

The title of the announcement

**`Generated`**

from field: string title = 20;

#### Defined in

[src/announcements_pb.ts:808](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L808)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L852)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements_pb.ts:850](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L850)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AnnouncementsServiceFilterReq"``

#### Defined in

[src/announcements_pb.ts:851](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L851)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

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

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements_pb.ts:888](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L888)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements_pb.ts:876](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L876)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements_pb.ts:880](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L880)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements_pb.ts:884](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L884)
