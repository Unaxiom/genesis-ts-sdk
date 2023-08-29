[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceRecordCreateRequest

# Class: LeavesAdjustmentsServiceRecordCreateRequest

Describes the parameters required to add a record

**`Generated`**

from message Genesis.LeavesAdjustmentsServiceRecordCreateRequest

## Hierarchy

- `Message`<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\>

  ↳ **`LeavesAdjustmentsServiceRecordCreateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceRecordCreateRequest.md#constructor)

### Properties

- [leaveAdjustmentId](LeavesAdjustmentsServiceRecordCreateRequest.md#leaveadjustmentid)
- [leaveTypeId](LeavesAdjustmentsServiceRecordCreateRequest.md#leavetypeid)
- [quantity](LeavesAdjustmentsServiceRecordCreateRequest.md#quantity)
- [uomId](LeavesAdjustmentsServiceRecordCreateRequest.md#uomid)
- [userComment](LeavesAdjustmentsServiceRecordCreateRequest.md#usercomment)
- [fields](LeavesAdjustmentsServiceRecordCreateRequest.md#fields)
- [runtime](LeavesAdjustmentsServiceRecordCreateRequest.md#runtime)
- [typeName](LeavesAdjustmentsServiceRecordCreateRequest.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceRecordCreateRequest.md#clone)
- [equals](LeavesAdjustmentsServiceRecordCreateRequest.md#equals)
- [fromBinary](LeavesAdjustmentsServiceRecordCreateRequest.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceRecordCreateRequest.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceRecordCreateRequest.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceRecordCreateRequest.md#gettype)
- [toBinary](LeavesAdjustmentsServiceRecordCreateRequest.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceRecordCreateRequest.md#tojson)
- [toJson](LeavesAdjustmentsServiceRecordCreateRequest.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceRecordCreateRequest.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceRecordCreateRequest.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceRecordCreateRequest.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceRecordCreateRequest.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceRecordCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceRecordCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsServiceRecordCreateRequest\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L443)

## Properties

### leaveAdjustmentId

• **leaveAdjustmentId**: `bigint` = `protoInt64.zero`

Stores the leave adjustment ID

**`Generated`**

from field: int64 leave_adjustment_id = 10;

#### Defined in

[src/leaves_adjustments_pb.ts:420](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L420)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

Stores the leave type ID

**`Generated`**

from field: int64 leave_type_id = 11;

#### Defined in

[src/leaves_adjustments_pb.ts:427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L427)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity of leaves (in cents)

**`Generated`**

from field: int64 quantity = 13;

#### Defined in

[src/leaves_adjustments_pb.ts:441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L441)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: int64 uom_id = 12;

#### Defined in

[src/leaves_adjustments_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L434)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L413)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:450](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L450)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:448](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L448)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsServiceRecordCreateRequest"``

#### Defined in

[src/leaves_adjustments_pb.ts:449](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L449)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

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

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:470](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L470)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:458](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L458)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:462](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L462)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordCreateRequest`](LeavesAdjustmentsServiceRecordCreateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:466](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L466)
