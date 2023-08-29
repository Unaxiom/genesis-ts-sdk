[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeaveAdjustmentRecord

# Class: LeaveAdjustmentRecord

Describes the parameters that constitute a record associated to a record

**`Generated`**

from message Genesis.LeaveAdjustmentRecord

## Hierarchy

- `Message`<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\>

  ↳ **`LeaveAdjustmentRecord`**

## Table of contents

### Constructors

- [constructor](LeaveAdjustmentRecord.md#constructor)

### Properties

- [approvalMetadata](LeaveAdjustmentRecord.md#approvalmetadata)
- [entityUuid](LeaveAdjustmentRecord.md#entityuuid)
- [leaveAdjustmentId](LeaveAdjustmentRecord.md#leaveadjustmentid)
- [leaveTypeId](LeaveAdjustmentRecord.md#leavetypeid)
- [metadata](LeaveAdjustmentRecord.md#metadata)
- [needApproval](LeaveAdjustmentRecord.md#needapproval)
- [quantity](LeaveAdjustmentRecord.md#quantity)
- [uomId](LeaveAdjustmentRecord.md#uomid)
- [userComment](LeaveAdjustmentRecord.md#usercomment)
- [fields](LeaveAdjustmentRecord.md#fields)
- [runtime](LeaveAdjustmentRecord.md#runtime)
- [typeName](LeaveAdjustmentRecord.md#typename)

### Methods

- [clone](LeaveAdjustmentRecord.md#clone)
- [equals](LeaveAdjustmentRecord.md#equals)
- [fromBinary](LeaveAdjustmentRecord.md#frombinary)
- [fromJson](LeaveAdjustmentRecord.md#fromjson)
- [fromJsonString](LeaveAdjustmentRecord.md#fromjsonstring)
- [getType](LeaveAdjustmentRecord.md#gettype)
- [toBinary](LeaveAdjustmentRecord.md#tobinary)
- [toJSON](LeaveAdjustmentRecord.md#tojson)
- [toJson](LeaveAdjustmentRecord.md#tojson-1)
- [toJsonString](LeaveAdjustmentRecord.md#tojsonstring)
- [equals](LeaveAdjustmentRecord.md#equals-1)
- [fromBinary](LeaveAdjustmentRecord.md#frombinary-1)
- [fromJson](LeaveAdjustmentRecord.md#fromjson-1)
- [fromJsonString](LeaveAdjustmentRecord.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveAdjustmentRecord**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\> |

#### Overrides

Message&lt;LeaveAdjustmentRecord\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L627)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/leaves_adjustments_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L583)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L569)

___

### leaveAdjustmentId

• **leaveAdjustmentId**: `bigint` = `protoInt64.zero`

Stores the leave adjustment ID

**`Generated`**

from field: int64 leave_adjustment_id = 10;

#### Defined in

[src/leaves_adjustments_pb.ts:604](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L604)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

Stores the leave type ID

**`Generated`**

from field: int64 leave_type_id = 11;

#### Defined in

[src/leaves_adjustments_pb.ts:611](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L611)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this record

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L576)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/leaves_adjustments_pb.ts:590](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L590)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity of leaves (in cents)

**`Generated`**

from field: int64 quantity = 13;

#### Defined in

[src/leaves_adjustments_pb.ts:625](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L625)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: int64 uom_id = 12;

#### Defined in

[src/leaves_adjustments_pb.ts:618](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L618)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/leaves_adjustments_pb.ts:597](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L597)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L634)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:632](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L632)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeaveAdjustmentRecord"``

#### Defined in

[src/leaves_adjustments_pb.ts:633](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L633)

## Methods

### clone

▸ **clone**(): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

Create a deep copy.

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md) \| `PlainMessage`<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

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

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\>

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
| `a` | `undefined` \| [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md) \| `PlainMessage`<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\> |
| `b` | `undefined` \| [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md) \| `PlainMessage`<[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:658](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L658)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Defined in

[src/leaves_adjustments_pb.ts:646](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L646)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Defined in

[src/leaves_adjustments_pb.ts:650](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L650)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)

#### Defined in

[src/leaves_adjustments_pb.ts:654](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L654)
