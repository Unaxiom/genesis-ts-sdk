[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServiceFilterReq

# Class: LeavesTypesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.LeavesTypesServiceFilterReq

## Hierarchy

- `Message`<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\>

  ↳ **`LeavesTypesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LeavesTypesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesTypesServiceFilterReq.md#approvedonend)
- [approvedOnStart](LeavesTypesServiceFilterReq.md#approvedonstart)
- [approverRoleId](LeavesTypesServiceFilterReq.md#approverroleid)
- [code](LeavesTypesServiceFilterReq.md#code)
- [completedOnEnd](LeavesTypesServiceFilterReq.md#completedonend)
- [completedOnStart](LeavesTypesServiceFilterReq.md#completedonstart)
- [count](LeavesTypesServiceFilterReq.md#count)
- [creationTimestampEnd](LeavesTypesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LeavesTypesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LeavesTypesServiceFilterReq.md#entityuuid)
- [isActive](LeavesTypesServiceFilterReq.md#isactive)
- [name](LeavesTypesServiceFilterReq.md#name)
- [offset](LeavesTypesServiceFilterReq.md#offset)
- [sortKey](LeavesTypesServiceFilterReq.md#sortkey)
- [sortOrder](LeavesTypesServiceFilterReq.md#sortorder)
- [status](LeavesTypesServiceFilterReq.md#status)
- [fields](LeavesTypesServiceFilterReq.md#fields)
- [runtime](LeavesTypesServiceFilterReq.md#runtime)
- [typeName](LeavesTypesServiceFilterReq.md#typename)

### Methods

- [clone](LeavesTypesServiceFilterReq.md#clone)
- [equals](LeavesTypesServiceFilterReq.md#equals)
- [fromBinary](LeavesTypesServiceFilterReq.md#frombinary)
- [fromJson](LeavesTypesServiceFilterReq.md#fromjson)
- [fromJsonString](LeavesTypesServiceFilterReq.md#fromjsonstring)
- [getType](LeavesTypesServiceFilterReq.md#gettype)
- [toBinary](LeavesTypesServiceFilterReq.md#tobinary)
- [toJSON](LeavesTypesServiceFilterReq.md#tojson)
- [toJson](LeavesTypesServiceFilterReq.md#tojson-1)
- [toJsonString](LeavesTypesServiceFilterReq.md#tojsonstring)
- [equals](LeavesTypesServiceFilterReq.md#equals-1)
- [fromBinary](LeavesTypesServiceFilterReq.md#frombinary-1)
- [fromJson](LeavesTypesServiceFilterReq.md#fromjson-1)
- [fromJsonString](LeavesTypesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\> |

#### Overrides

Message&lt;LeavesTypesServiceFilterReq\&gt;.constructor

#### Defined in

[src/leaves_types_pb.ts:777](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L777)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/leaves_types_pb.ts:740](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L740)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/leaves_types_pb.ts:733](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L733)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/leaves_types_pb.ts:726](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L726)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/leaves_types_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L747)

___

### code

• **code**: `string` = `""`

The leave type code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/leaves_types_pb.ts:775](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L775)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/leaves_types_pb.ts:761](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L761)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/leaves_types_pb.ts:754](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L754)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_types_pb.ts:670](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L670)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/leaves_types_pb.ts:705](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L705)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/leaves_types_pb.ts:698](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L698)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/leaves_types_pb.ts:712](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L712)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/leaves_types_pb.ts:663](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L663)

___

### name

• **name**: `string` = `""`

The name of the leave type

**`Generated`**

from field: string name = 20;

#### Defined in

[src/leaves_types_pb.ts:768](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L768)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/leaves_types_pb.ts:677](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L677)

___

### sortKey

• **sortKey**: [`LEAVE_TYPE_SORT_KEY`](../enums/LEAVE_TYPE_SORT_KEY.md) = `LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_types_pb.ts:691](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L691)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_types_pb.ts:684](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L684)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this leave type

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/leaves_types_pb.ts:719](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L719)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types_pb.ts:784](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L784)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types_pb.ts:782](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L782)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesTypesServiceFilterReq"``

#### Defined in

[src/leaves_types_pb.ts:783](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L783)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md) \| `PlainMessage`<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

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

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md) \| `PlainMessage`<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md) \| `PlainMessage`<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types_pb.ts:816](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L816)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Defined in

[src/leaves_types_pb.ts:804](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L804)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Defined in

[src/leaves_types_pb.ts:808](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L808)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Defined in

[src/leaves_types_pb.ts:812](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L812)
