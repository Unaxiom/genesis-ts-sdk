[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsRecordsList

# Class: LeavesAdjustmentsRecordsList

Describes the message consisting of the list of leave adjustment records

**`Generated`**

from message Genesis.LeavesAdjustmentsRecordsList

## Hierarchy

- `Message`<[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)\>

  ↳ **`LeavesAdjustmentsRecordsList`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsRecordsList.md#constructor)

### Properties

- [list](LeavesAdjustmentsRecordsList.md#list)
- [fields](LeavesAdjustmentsRecordsList.md#fields)
- [runtime](LeavesAdjustmentsRecordsList.md#runtime)
- [typeName](LeavesAdjustmentsRecordsList.md#typename)

### Methods

- [clone](LeavesAdjustmentsRecordsList.md#clone)
- [equals](LeavesAdjustmentsRecordsList.md#equals)
- [fromBinary](LeavesAdjustmentsRecordsList.md#frombinary)
- [fromJson](LeavesAdjustmentsRecordsList.md#fromjson)
- [fromJsonString](LeavesAdjustmentsRecordsList.md#fromjsonstring)
- [getType](LeavesAdjustmentsRecordsList.md#gettype)
- [toBinary](LeavesAdjustmentsRecordsList.md#tobinary)
- [toJSON](LeavesAdjustmentsRecordsList.md#tojson)
- [toJson](LeavesAdjustmentsRecordsList.md#tojson-1)
- [toJsonString](LeavesAdjustmentsRecordsList.md#tojsonstring)
- [equals](LeavesAdjustmentsRecordsList.md#equals-1)
- [fromBinary](LeavesAdjustmentsRecordsList.md#frombinary-1)
- [fromJson](LeavesAdjustmentsRecordsList.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsRecordsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsRecordsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsRecordsList\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:719](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L719)

## Properties

### list

• **list**: [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.LeaveAdjustmentRecord list = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:717](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L717)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:726](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L726)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:724](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L724)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsRecordsList"``

#### Defined in

[src/leaves_adjustments_pb.ts:725](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L725)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md) \| `PlainMessage`<[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

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

[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md) \| `PlainMessage`<[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md) \| `PlainMessage`<[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:742](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L742)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Defined in

[src/leaves_adjustments_pb.ts:730](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L730)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Defined in

[src/leaves_adjustments_pb.ts:734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L734)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsRecordsList`](LeavesAdjustmentsRecordsList.md)

#### Defined in

[src/leaves_adjustments_pb.ts:738](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L738)
