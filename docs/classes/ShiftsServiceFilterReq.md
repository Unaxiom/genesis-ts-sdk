[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceFilterReq

# Class: ShiftsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.ShiftsServiceFilterReq

## Hierarchy

- `Message`<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\>

  ↳ **`ShiftsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ShiftsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ShiftsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ShiftsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ShiftsServiceFilterReq.md#approverroleid)
- [code](ShiftsServiceFilterReq.md#code)
- [completedOnEnd](ShiftsServiceFilterReq.md#completedonend)
- [completedOnStart](ShiftsServiceFilterReq.md#completedonstart)
- [count](ShiftsServiceFilterReq.md#count)
- [creationTimestampEnd](ShiftsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ShiftsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ShiftsServiceFilterReq.md#entityuuid)
- [isActive](ShiftsServiceFilterReq.md#isactive)
- [name](ShiftsServiceFilterReq.md#name)
- [offset](ShiftsServiceFilterReq.md#offset)
- [sortKey](ShiftsServiceFilterReq.md#sortkey)
- [sortOrder](ShiftsServiceFilterReq.md#sortorder)
- [status](ShiftsServiceFilterReq.md#status)
- [fields](ShiftsServiceFilterReq.md#fields)
- [runtime](ShiftsServiceFilterReq.md#runtime)
- [typeName](ShiftsServiceFilterReq.md#typename)

### Methods

- [clone](ShiftsServiceFilterReq.md#clone)
- [equals](ShiftsServiceFilterReq.md#equals)
- [fromBinary](ShiftsServiceFilterReq.md#frombinary)
- [fromJson](ShiftsServiceFilterReq.md#fromjson)
- [fromJsonString](ShiftsServiceFilterReq.md#fromjsonstring)
- [getType](ShiftsServiceFilterReq.md#gettype)
- [toBinary](ShiftsServiceFilterReq.md#tobinary)
- [toJSON](ShiftsServiceFilterReq.md#tojson)
- [toJson](ShiftsServiceFilterReq.md#tojson-1)
- [toJsonString](ShiftsServiceFilterReq.md#tojsonstring)
- [equals](ShiftsServiceFilterReq.md#equals-1)
- [fromBinary](ShiftsServiceFilterReq.md#frombinary-1)
- [fromJson](ShiftsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ShiftsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\> |

#### Overrides

Message&lt;ShiftsServiceFilterReq\&gt;.constructor

#### Defined in

[src/shifts_pb.ts:889](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L889)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/shifts_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L852)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/shifts_pb.ts:845](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L845)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/shifts_pb.ts:838](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L838)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/shifts_pb.ts:859](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L859)

___

### code

• **code**: `string` = `""`

The shift code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/shifts_pb.ts:887](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L887)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/shifts_pb.ts:873](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L873)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/shifts_pb.ts:866](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L866)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts_pb.ts:782](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L782)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/shifts_pb.ts:817](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L817)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/shifts_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L810)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/shifts_pb.ts:824](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L824)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shifts_pb.ts:775](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L775)

___

### name

• **name**: `string` = `""`

The name of the shift

**`Generated`**

from field: string name = 20;

#### Defined in

[src/shifts_pb.ts:880](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L880)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shifts_pb.ts:789](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L789)

___

### sortKey

• **sortKey**: [`SHIFT_SORT_KEY`](../enums/SHIFT_SORT_KEY.md) = `SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SHIFT_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts_pb.ts:803](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L803)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/shifts_pb.ts:796](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L796)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this shift

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/shifts_pb.ts:831](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L831)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_pb.ts:896](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L896)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_pb.ts:894](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L894)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsServiceFilterReq"``

#### Defined in

[src/shifts_pb.ts:895](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L895)

## Methods

### clone

▸ **clone**(): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md) \| `PlainMessage`<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

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

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md) \| `PlainMessage`<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md) \| `PlainMessage`<[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_pb.ts:928](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L928)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Defined in

[src/shifts_pb.ts:916](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L916)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Defined in

[src/shifts_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L920)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceFilterReq`](ShiftsServiceFilterReq.md)

#### Defined in

[src/shifts_pb.ts:924](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L924)
