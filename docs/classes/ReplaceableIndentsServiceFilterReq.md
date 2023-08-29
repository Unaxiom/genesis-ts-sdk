[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceFilterReq

# Class: ReplaceableIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.ReplaceableIndentsServiceFilterReq

## Hierarchy

- `Message`<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\>

  ↳ **`ReplaceableIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ReplaceableIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ReplaceableIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ReplaceableIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ReplaceableIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](ReplaceableIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](ReplaceableIndentsServiceFilterReq.md#completedonstart)
- [count](ReplaceableIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](ReplaceableIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ReplaceableIndentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ReplaceableIndentsServiceFilterReq.md#entityuuid)
- [familyId](ReplaceableIndentsServiceFilterReq.md#familyid)
- [finalRefNumber](ReplaceableIndentsServiceFilterReq.md#finalrefnumber)
- [isActive](ReplaceableIndentsServiceFilterReq.md#isactive)
- [itemHash](ReplaceableIndentsServiceFilterReq.md#itemhash)
- [locationId](ReplaceableIndentsServiceFilterReq.md#locationid)
- [offset](ReplaceableIndentsServiceFilterReq.md#offset)
- [referenceId](ReplaceableIndentsServiceFilterReq.md#referenceid)
- [sortKey](ReplaceableIndentsServiceFilterReq.md#sortkey)
- [sortOrder](ReplaceableIndentsServiceFilterReq.md#sortorder)
- [status](ReplaceableIndentsServiceFilterReq.md#status)
- [supervisor](ReplaceableIndentsServiceFilterReq.md#supervisor)
- [fields](ReplaceableIndentsServiceFilterReq.md#fields)
- [runtime](ReplaceableIndentsServiceFilterReq.md#runtime)
- [typeName](ReplaceableIndentsServiceFilterReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceFilterReq.md#clone)
- [equals](ReplaceableIndentsServiceFilterReq.md#equals)
- [fromBinary](ReplaceableIndentsServiceFilterReq.md#frombinary)
- [fromJson](ReplaceableIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceFilterReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceFilterReq.md#gettype)
- [toBinary](ReplaceableIndentsServiceFilterReq.md#tobinary)
- [toJSON](ReplaceableIndentsServiceFilterReq.md#tojson)
- [toJson](ReplaceableIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceFilterReq.md#tojsonstring)
- [equals](ReplaceableIndentsServiceFilterReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:1324](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1324)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/replaceable_indents_pb.ts:1259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1259)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/replaceable_indents_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1252)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/replaceable_indents_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1245)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/replaceable_indents_pb.ts:1266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1266)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/replaceable_indents_pb.ts:1280](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1280)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/replaceable_indents_pb.ts:1273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1273)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/replaceable_indents_pb.ts:1189](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1189)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/replaceable_indents_pb.ts:1224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1224)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/replaceable_indents_pb.ts:1217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1217)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/replaceable_indents_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1231)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: int64 family_id = 25;

#### Defined in

[src/replaceable_indents_pb.ts:1315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1315)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/replaceable_indents_pb.ts:1294](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1294)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/replaceable_indents_pb.ts:1182](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1182)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 26;

#### Defined in

[src/replaceable_indents_pb.ts:1322](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1322)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 23;

#### Defined in

[src/replaceable_indents_pb.ts:1301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1301)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/replaceable_indents_pb.ts:1196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1196)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the replaceable indent

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/replaceable_indents_pb.ts:1287](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1287)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_SORT_KEY`](../enums/REPLACEABLE_INDENT_SORT_KEY.md) = `REPLACEABLE_INDENT_SORT_KEY.REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents_pb.ts:1210](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1210)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/replaceable_indents_pb.ts:1203](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1203)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this replaceable indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/replaceable_indents_pb.ts:1238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1238)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 24;

#### Defined in

[src/replaceable_indents_pb.ts:1308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1308)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:1331](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1331)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:1329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1329)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServiceFilterReq"``

#### Defined in

[src/replaceable_indents_pb.ts:1330](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1330)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

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

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:1367](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1367)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1355)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1359)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1363](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1363)
