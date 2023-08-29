[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceRecordUpdateRequest

# Class: LeavesAdjustmentsServiceRecordUpdateRequest

Describes the parameters required to update a record

**`Generated`**

from message Genesis.LeavesAdjustmentsServiceRecordUpdateRequest

## Hierarchy

- `Message`<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\>

  ↳ **`LeavesAdjustmentsServiceRecordUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceRecordUpdateRequest.md#constructor)

### Properties

- [id](LeavesAdjustmentsServiceRecordUpdateRequest.md#id)
- [leaveAdjustmentId](LeavesAdjustmentsServiceRecordUpdateRequest.md#leaveadjustmentid)
- [leaveTypeId](LeavesAdjustmentsServiceRecordUpdateRequest.md#leavetypeid)
- [quantity](LeavesAdjustmentsServiceRecordUpdateRequest.md#quantity)
- [uomId](LeavesAdjustmentsServiceRecordUpdateRequest.md#uomid)
- [userComment](LeavesAdjustmentsServiceRecordUpdateRequest.md#usercomment)
- [fields](LeavesAdjustmentsServiceRecordUpdateRequest.md#fields)
- [runtime](LeavesAdjustmentsServiceRecordUpdateRequest.md#runtime)
- [typeName](LeavesAdjustmentsServiceRecordUpdateRequest.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceRecordUpdateRequest.md#clone)
- [equals](LeavesAdjustmentsServiceRecordUpdateRequest.md#equals)
- [fromBinary](LeavesAdjustmentsServiceRecordUpdateRequest.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceRecordUpdateRequest.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceRecordUpdateRequest.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceRecordUpdateRequest.md#gettype)
- [toBinary](LeavesAdjustmentsServiceRecordUpdateRequest.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceRecordUpdateRequest.md#tojson)
- [toJson](LeavesAdjustmentsServiceRecordUpdateRequest.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceRecordUpdateRequest.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceRecordUpdateRequest.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceRecordUpdateRequest.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceRecordUpdateRequest.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceRecordUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceRecordUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsServiceRecordUpdateRequest\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:524](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L524)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:494](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L494)

___

### leaveAdjustmentId

• **leaveAdjustmentId**: `bigint` = `protoInt64.zero`

Stores the leave adjustment ID

**`Generated`**

from field: int64 leave_adjustment_id = 10;

#### Defined in

[src/leaves_adjustments_pb.ts:501](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L501)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

Stores the leave type ID

**`Generated`**

from field: int64 leave_type_id = 11;

#### Defined in

[src/leaves_adjustments_pb.ts:508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L508)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity of leaves (in cents)

**`Generated`**

from field: int64 quantity = 13;

#### Defined in

[src/leaves_adjustments_pb.ts:522](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L522)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: int64 uom_id = 12;

#### Defined in

[src/leaves_adjustments_pb.ts:515](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L515)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:487](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L487)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:531](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L531)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L529)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsServiceRecordUpdateRequest"``

#### Defined in

[src/leaves_adjustments_pb.ts:530](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L530)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

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

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:552](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L552)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:540](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L540)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L544)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceRecordUpdateRequest`](LeavesAdjustmentsServiceRecordUpdateRequest.md)

#### Defined in

[src/leaves_adjustments_pb.ts:548](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L548)
