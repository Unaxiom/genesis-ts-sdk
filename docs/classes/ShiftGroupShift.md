[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftGroupShift

# Class: ShiftGroupShift

Describes the parameters that constitute a shift associated to a shift group

**`Generated`**

from message Genesis.ShiftGroupShift

## Hierarchy

- `Message`<[`ShiftGroupShift`](ShiftGroupShift.md)\>

  ↳ **`ShiftGroupShift`**

## Table of contents

### Constructors

- [constructor](ShiftGroupShift.md#constructor)

### Properties

- [approvalMetadata](ShiftGroupShift.md#approvalmetadata)
- [entityUuid](ShiftGroupShift.md#entityuuid)
- [metadata](ShiftGroupShift.md#metadata)
- [needApproval](ShiftGroupShift.md#needapproval)
- [shiftGroupId](ShiftGroupShift.md#shiftgroupid)
- [shiftId](ShiftGroupShift.md#shiftid)
- [userComment](ShiftGroupShift.md#usercomment)
- [fields](ShiftGroupShift.md#fields)
- [runtime](ShiftGroupShift.md#runtime)
- [typeName](ShiftGroupShift.md#typename)

### Methods

- [clone](ShiftGroupShift.md#clone)
- [equals](ShiftGroupShift.md#equals)
- [fromBinary](ShiftGroupShift.md#frombinary)
- [fromJson](ShiftGroupShift.md#fromjson)
- [fromJsonString](ShiftGroupShift.md#fromjsonstring)
- [getType](ShiftGroupShift.md#gettype)
- [toBinary](ShiftGroupShift.md#tobinary)
- [toJSON](ShiftGroupShift.md#tojson)
- [toJson](ShiftGroupShift.md#tojson-1)
- [toJsonString](ShiftGroupShift.md#tojsonstring)
- [equals](ShiftGroupShift.md#equals-1)
- [fromBinary](ShiftGroupShift.md#frombinary-1)
- [fromJson](ShiftGroupShift.md#fromjson-1)
- [fromJsonString](ShiftGroupShift.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftGroupShift**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftGroupShift`](ShiftGroupShift.md)\> |

#### Overrides

Message&lt;ShiftGroupShift\&gt;.constructor

#### Defined in

[src/shifts_groups_pb.ts:573](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L573)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/shifts_groups_pb.ts:543](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L543)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/shifts_groups_pb.ts:529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L529)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this shift group

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/shifts_groups_pb.ts:536](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L536)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/shifts_groups_pb.ts:550](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L550)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: int64 shift_group_id = 10;

#### Defined in

[src/shifts_groups_pb.ts:564](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L564)

___

### shiftId

• **shiftId**: `bigint` = `protoInt64.zero`

Stores the shift ID

**`Generated`**

from field: int64 shift_id = 11;

#### Defined in

[src/shifts_groups_pb.ts:571](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L571)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/shifts_groups_pb.ts:557](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L557)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups_pb.ts:580](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L580)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L578)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftGroupShift"``

#### Defined in

[src/shifts_groups_pb.ts:579](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L579)

## Methods

### clone

▸ **clone**(): [`ShiftGroupShift`](ShiftGroupShift.md)

Create a deep copy.

#### Returns

[`ShiftGroupShift`](ShiftGroupShift.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftGroupShift`](ShiftGroupShift.md) \| `PlainMessage`<[`ShiftGroupShift`](ShiftGroupShift.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftGroupShift`](ShiftGroupShift.md)

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

[`ShiftGroupShift`](ShiftGroupShift.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftGroupShift`](ShiftGroupShift.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftGroupShift`](ShiftGroupShift.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftGroupShift`](ShiftGroupShift.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftGroupShift`](ShiftGroupShift.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftGroupShift`](ShiftGroupShift.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftGroupShift`](ShiftGroupShift.md)\>

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
| `a` | `undefined` \| [`ShiftGroupShift`](ShiftGroupShift.md) \| `PlainMessage`<[`ShiftGroupShift`](ShiftGroupShift.md)\> |
| `b` | `undefined` \| [`ShiftGroupShift`](ShiftGroupShift.md) \| `PlainMessage`<[`ShiftGroupShift`](ShiftGroupShift.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups_pb.ts:602](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L602)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftGroupShift`](ShiftGroupShift.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftGroupShift`](ShiftGroupShift.md)

#### Defined in

[src/shifts_groups_pb.ts:590](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L590)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftGroupShift`](ShiftGroupShift.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftGroupShift`](ShiftGroupShift.md)

#### Defined in

[src/shifts_groups_pb.ts:594](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L594)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftGroupShift`](ShiftGroupShift.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftGroupShift`](ShiftGroupShift.md)

#### Defined in

[src/shifts_groups_pb.ts:598](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L598)
