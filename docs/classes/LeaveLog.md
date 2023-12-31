[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeaveLog

# Class: LeaveLog

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.LeaveLog

## Hierarchy

- `Message`<[`LeaveLog`](LeaveLog.md)\>

  ↳ **`LeaveLog`**

## Table of contents

### Constructors

- [constructor](LeaveLog.md#constructor)

### Properties

- [entityUuid](LeaveLog.md#entityuuid)
- [leaveTypeId](LeaveLog.md#leavetypeid)
- [metadata](LeaveLog.md#metadata)
- [quantity](LeaveLog.md#quantity)
- [refFrom](LeaveLog.md#reffrom)
- [refId](LeaveLog.md#refid)
- [uomId](LeaveLog.md#uomid)
- [userId](LeaveLog.md#userid)
- [fields](LeaveLog.md#fields)
- [runtime](LeaveLog.md#runtime)
- [typeName](LeaveLog.md#typename)

### Methods

- [clone](LeaveLog.md#clone)
- [equals](LeaveLog.md#equals)
- [fromBinary](LeaveLog.md#frombinary)
- [fromJson](LeaveLog.md#fromjson)
- [fromJsonString](LeaveLog.md#fromjsonstring)
- [getType](LeaveLog.md#gettype)
- [toBinary](LeaveLog.md#tobinary)
- [toJSON](LeaveLog.md#tojson)
- [toJson](LeaveLog.md#tojson-1)
- [toJsonString](LeaveLog.md#tojsonstring)
- [equals](LeaveLog.md#equals-1)
- [fromBinary](LeaveLog.md#frombinary-1)
- [fromJson](LeaveLog.md#fromjson-1)
- [fromJsonString](LeaveLog.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveLog**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeaveLog`](LeaveLog.md)\> |

#### Overrides

Message&lt;LeaveLog\&gt;.constructor

#### Defined in

[src/leaves_logs_pb.ts:238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L238)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_logs_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L187)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The leave type ID

**`Generated`**

from field: int64 leave_type_id = 14;

#### Defined in

[src/leaves_logs_pb.ts:229](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L229)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this record

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/leaves_logs_pb.ts:194](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L194)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of leaves (in cents)

**`Generated`**

from field: int64 quantity = 15;

#### Defined in

[src/leaves_logs_pb.ts:236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L236)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on the basis of which this record is created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/leaves_logs_pb.ts:215](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L215)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The corresponding reference ID

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/leaves_logs_pb.ts:222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L222)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the uom

**`Generated`**

from field: int64 uom_id = 11;

#### Defined in

[src/leaves_logs_pb.ts:208](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L208)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this log needs to be made

**`Generated`**

from field: int64 user_id = 10;

#### Defined in

[src/leaves_logs_pb.ts:201](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L201)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_logs_pb.ts:245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L245)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_logs_pb.ts:243](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L243)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeaveLog"``

#### Defined in

[src/leaves_logs_pb.ts:244](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L244)

## Methods

### clone

▸ **clone**(): [`LeaveLog`](LeaveLog.md)

Create a deep copy.

#### Returns

[`LeaveLog`](LeaveLog.md)

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
| `other` | `undefined` \| ``null`` \| [`LeaveLog`](LeaveLog.md) \| `PlainMessage`<[`LeaveLog`](LeaveLog.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveLog`](LeaveLog.md)

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

[`LeaveLog`](LeaveLog.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveLog`](LeaveLog.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveLog`](LeaveLog.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeaveLog`](LeaveLog.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeaveLog`](LeaveLog.md)\>

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
| `a` | `undefined` \| [`LeaveLog`](LeaveLog.md) \| `PlainMessage`<[`LeaveLog`](LeaveLog.md)\> |
| `b` | `undefined` \| [`LeaveLog`](LeaveLog.md) \| `PlainMessage`<[`LeaveLog`](LeaveLog.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_logs_pb.ts:268](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L268)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeaveLog`](LeaveLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Defined in

[src/leaves_logs_pb.ts:256](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L256)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeaveLog`](LeaveLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Defined in

[src/leaves_logs_pb.ts:260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L260)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeaveLog`](LeaveLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Defined in

[src/leaves_logs_pb.ts:264](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_logs_pb.ts#L264)
