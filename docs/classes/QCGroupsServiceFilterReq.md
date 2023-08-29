[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceFilterReq

# Class: QCGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.QCGroupsServiceFilterReq

## Hierarchy

- `Message`<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

  ↳ **`QCGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QCGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QCGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QCGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QCGroupsServiceFilterReq.md#approverroleid)
- [completedOnEnd](QCGroupsServiceFilterReq.md#completedonend)
- [completedOnStart](QCGroupsServiceFilterReq.md#completedonstart)
- [count](QCGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](QCGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QCGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QCGroupsServiceFilterReq.md#entityuuid)
- [isActive](QCGroupsServiceFilterReq.md#isactive)
- [name](QCGroupsServiceFilterReq.md#name)
- [offset](QCGroupsServiceFilterReq.md#offset)
- [sortKey](QCGroupsServiceFilterReq.md#sortkey)
- [sortOrder](QCGroupsServiceFilterReq.md#sortorder)
- [status](QCGroupsServiceFilterReq.md#status)
- [fields](QCGroupsServiceFilterReq.md#fields)
- [runtime](QCGroupsServiceFilterReq.md#runtime)
- [typeName](QCGroupsServiceFilterReq.md#typename)

### Methods

- [clone](QCGroupsServiceFilterReq.md#clone)
- [equals](QCGroupsServiceFilterReq.md#equals)
- [fromBinary](QCGroupsServiceFilterReq.md#frombinary)
- [fromJson](QCGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](QCGroupsServiceFilterReq.md#fromjsonstring)
- [getType](QCGroupsServiceFilterReq.md#gettype)
- [toBinary](QCGroupsServiceFilterReq.md#tobinary)
- [toJSON](QCGroupsServiceFilterReq.md#tojson)
- [toJson](QCGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](QCGroupsServiceFilterReq.md#tojsonstring)
- [equals](QCGroupsServiceFilterReq.md#equals-1)
- [fromBinary](QCGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](QCGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QCGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

#### Overrides

Message&lt;QCGroupsServiceFilterReq\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:1336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1336)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/qc_groups_pb.ts:1306](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1306)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/qc_groups_pb.ts:1299](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1299)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/qc_groups_pb.ts:1292](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1292)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/qc_groups_pb.ts:1313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1313)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/qc_groups_pb.ts:1327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1327)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/qc_groups_pb.ts:1320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1320)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_groups_pb.ts:1236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1236)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/qc_groups_pb.ts:1271](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1271)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/qc_groups_pb.ts:1264](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1264)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/qc_groups_pb.ts:1278](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1278)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/qc_groups_pb.ts:1229](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1229)

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/qc_groups_pb.ts:1334](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1334)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/qc_groups_pb.ts:1243](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1243)

___

### sortKey

• **sortKey**: [`QC_GROUP_SORT_KEY`](../enums/QC_GROUP_SORT_KEY.md) = `QC_GROUP_SORT_KEY.QC_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QC_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_groups_pb.ts:1257](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1257)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_groups_pb.ts:1250](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1250)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this qc group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/qc_groups_pb.ts:1285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1285)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:1343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1343)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:1341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1341)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroupsServiceFilterReq"``

#### Defined in

[src/qc_groups_pb.ts:1342](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1342)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

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

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:1374](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1374)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups_pb.ts:1362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1362)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups_pb.ts:1366](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1366)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups_pb.ts:1370](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1370)
