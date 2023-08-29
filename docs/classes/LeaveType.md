[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeaveType

# Class: LeaveType

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.LeaveType

## Hierarchy

- `Message`<[`LeaveType`](LeaveType.md)\>

  ↳ **`LeaveType`**

## Table of contents

### Constructors

- [constructor](LeaveType.md#constructor)

### Properties

- [approvalMetadata](LeaveType.md#approvalmetadata)
- [code](LeaveType.md#code)
- [completedOn](LeaveType.md#completedon)
- [description](LeaveType.md#description)
- [entityUuid](LeaveType.md#entityuuid)
- [logs](LeaveType.md#logs)
- [metadata](LeaveType.md#metadata)
- [name](LeaveType.md#name)
- [payrollPercentage](LeaveType.md#payrollpercentage)
- [status](LeaveType.md#status)
- [fields](LeaveType.md#fields)
- [runtime](LeaveType.md#runtime)
- [typeName](LeaveType.md#typename)

### Methods

- [clone](LeaveType.md#clone)
- [equals](LeaveType.md#equals)
- [fromBinary](LeaveType.md#frombinary)
- [fromJson](LeaveType.md#fromjson)
- [fromJsonString](LeaveType.md#fromjsonstring)
- [getType](LeaveType.md#gettype)
- [toBinary](LeaveType.md#tobinary)
- [toJSON](LeaveType.md#tojson)
- [toJson](LeaveType.md#tojson-1)
- [toJsonString](LeaveType.md#tojsonstring)
- [equals](LeaveType.md#equals-1)
- [fromBinary](LeaveType.md#frombinary-1)
- [fromJson](LeaveType.md#fromjson-1)
- [fromJsonString](LeaveType.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveType**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeaveType`](LeaveType.md)\> |

#### Overrides

Message&lt;LeaveType\&gt;.constructor

#### Defined in

[src/leaves_types_pb.ts:342](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L342)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/leaves_types_pb.ts:291](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L291)

___

### code

• **code**: `string` = `""`

The leave type code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/leaves_types_pb.ts:326](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L326)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this leave type was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/leaves_types_pb.ts:312](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L312)

___

### description

• **description**: `string` = `""`

The description of the leave type

**`Generated`**

from field: string description = 12;

#### Defined in

[src/leaves_types_pb.ts:333](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L333)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_types_pb.ts:277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L277)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this leave type

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/leaves_types_pb.ts:305](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L305)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this leave type

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/leaves_types_pb.ts:284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L284)

___

### name

• **name**: `string` = `""`

The name of the leave type

**`Generated`**

from field: string name = 10;

#### Defined in

[src/leaves_types_pb.ts:319](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L319)

___

### payrollPercentage

• **payrollPercentage**: `bigint` = `protoInt64.zero`

The percentage of the applicable payroll on use of this leave type (in cents)

**`Generated`**

from field: int64 payroll_percentage = 13;

#### Defined in

[src/leaves_types_pb.ts:340](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L340)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this leave type

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/leaves_types_pb.ts:298](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L298)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types_pb.ts:349](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L349)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types_pb.ts:347](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L347)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeaveType"``

#### Defined in

[src/leaves_types_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L348)

## Methods

### clone

▸ **clone**(): [`LeaveType`](LeaveType.md)

Create a deep copy.

#### Returns

[`LeaveType`](LeaveType.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveType`](LeaveType.md) \| `PlainMessage`<[`LeaveType`](LeaveType.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveType`](LeaveType.md)

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

[`LeaveType`](LeaveType.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveType`](LeaveType.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveType`](LeaveType.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeaveType`](LeaveType.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeaveType`](LeaveType.md)\>

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
| `a` | `undefined` \| [`LeaveType`](LeaveType.md) \| `PlainMessage`<[`LeaveType`](LeaveType.md)\> |
| `b` | `undefined` \| [`LeaveType`](LeaveType.md) \| `PlainMessage`<[`LeaveType`](LeaveType.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types_pb.ts:374](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L374)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeaveType`](LeaveType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Defined in

[src/leaves_types_pb.ts:362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L362)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeaveType`](LeaveType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Defined in

[src/leaves_types_pb.ts:366](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L366)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeaveType`](LeaveType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveType`](LeaveType.md)

#### Defined in

[src/leaves_types_pb.ts:370](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L370)
