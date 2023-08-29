[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / RolesServiceFilterReq

# Class: RolesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.RolesServiceFilterReq

## Hierarchy

- `Message`<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

  ↳ **`RolesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](RolesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](RolesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](RolesServiceFilterReq.md#approvedonend)
- [approvedOnStart](RolesServiceFilterReq.md#approvedonstart)
- [approverRoleId](RolesServiceFilterReq.md#approverroleid)
- [code](RolesServiceFilterReq.md#code)
- [completedOnEnd](RolesServiceFilterReq.md#completedonend)
- [completedOnStart](RolesServiceFilterReq.md#completedonstart)
- [count](RolesServiceFilterReq.md#count)
- [creationTimestampEnd](RolesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](RolesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](RolesServiceFilterReq.md#entityuuid)
- [isActive](RolesServiceFilterReq.md#isactive)
- [name](RolesServiceFilterReq.md#name)
- [offset](RolesServiceFilterReq.md#offset)
- [sortKey](RolesServiceFilterReq.md#sortkey)
- [sortOrder](RolesServiceFilterReq.md#sortorder)
- [status](RolesServiceFilterReq.md#status)
- [fields](RolesServiceFilterReq.md#fields)
- [runtime](RolesServiceFilterReq.md#runtime)
- [typeName](RolesServiceFilterReq.md#typename)

### Methods

- [clone](RolesServiceFilterReq.md#clone)
- [equals](RolesServiceFilterReq.md#equals)
- [fromBinary](RolesServiceFilterReq.md#frombinary)
- [fromJson](RolesServiceFilterReq.md#fromjson)
- [fromJsonString](RolesServiceFilterReq.md#fromjsonstring)
- [getType](RolesServiceFilterReq.md#gettype)
- [toBinary](RolesServiceFilterReq.md#tobinary)
- [toJSON](RolesServiceFilterReq.md#tojson)
- [toJson](RolesServiceFilterReq.md#tojson-1)
- [toJsonString](RolesServiceFilterReq.md#tojsonstring)
- [equals](RolesServiceFilterReq.md#equals-1)
- [fromBinary](RolesServiceFilterReq.md#frombinary-1)
- [fromJson](RolesServiceFilterReq.md#fromjson-1)
- [fromJsonString](RolesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

#### Overrides

Message&lt;RolesServiceFilterReq\&gt;.constructor

#### Defined in

[src/roles_pb.ts:1013](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1013)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/roles_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L976)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/roles_pb.ts:969](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L969)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/roles_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L962)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/roles_pb.ts:983](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L983)

___

### code

• **code**: `string` = `""`

The name of the code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/roles_pb.ts:1011](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1011)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/roles_pb.ts:997](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L997)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/roles_pb.ts:990](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L990)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/roles_pb.ts:906](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L906)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/roles_pb.ts:941](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L941)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/roles_pb.ts:934](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L934)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/roles_pb.ts:948](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L948)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/roles_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L899)

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 20;

#### Defined in

[src/roles_pb.ts:1004](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1004)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/roles_pb.ts:913](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L913)

___

### sortKey

• **sortKey**: [`ROLE_SORT_KEY`](../enums/ROLE_SORT_KEY.md) = `ROLE_SORT_KEY.ROLE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ROLE_SORT_KEY sort_key = 5;

#### Defined in

[src/roles_pb.ts:927](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L927)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/roles_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L920)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this role

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/roles_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L955)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:1020](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1020)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:1018](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1018)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.RolesServiceFilterReq"``

#### Defined in

[src/roles_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1019)

## Methods

### clone

▸ **clone**(): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

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

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1052)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1040)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1044)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles_pb.ts:1048](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1048)
