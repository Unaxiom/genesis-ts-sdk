[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsShiftsList

# Class: ShiftsGroupsShiftsList

Describes the message consisting of the list of shift group shifts

**`Generated`**

from message Genesis.ShiftsGroupsShiftsList

## Hierarchy

- `Message`<[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)\>

  ↳ **`ShiftsGroupsShiftsList`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsShiftsList.md#constructor)

### Properties

- [list](ShiftsGroupsShiftsList.md#list)
- [fields](ShiftsGroupsShiftsList.md#fields)
- [runtime](ShiftsGroupsShiftsList.md#runtime)
- [typeName](ShiftsGroupsShiftsList.md#typename)

### Methods

- [clone](ShiftsGroupsShiftsList.md#clone)
- [equals](ShiftsGroupsShiftsList.md#equals)
- [fromBinary](ShiftsGroupsShiftsList.md#frombinary)
- [fromJson](ShiftsGroupsShiftsList.md#fromjson)
- [fromJsonString](ShiftsGroupsShiftsList.md#fromjsonstring)
- [getType](ShiftsGroupsShiftsList.md#gettype)
- [toBinary](ShiftsGroupsShiftsList.md#tobinary)
- [toJSON](ShiftsGroupsShiftsList.md#tojson)
- [toJson](ShiftsGroupsShiftsList.md#tojson-1)
- [toJsonString](ShiftsGroupsShiftsList.md#tojsonstring)
- [equals](ShiftsGroupsShiftsList.md#equals-1)
- [fromBinary](ShiftsGroupsShiftsList.md#frombinary-1)
- [fromJson](ShiftsGroupsShiftsList.md#fromjson-1)
- [fromJsonString](ShiftsGroupsShiftsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsShiftsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)\> |

#### Overrides

Message&lt;ShiftsGroupsShiftsList\&gt;.constructor

#### Defined in

[src/shifts_groups_pb.ts:663](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L663)

## Properties

### list

• **list**: [`ShiftGroupShift`](ShiftGroupShift.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.ShiftGroupShift list = 1;

#### Defined in

[src/shifts_groups_pb.ts:661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L661)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups_pb.ts:670](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L670)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups_pb.ts:668](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L668)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsGroupsShiftsList"``

#### Defined in

[src/shifts_groups_pb.ts:669](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L669)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md) \| `PlainMessage`<[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

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

[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md) \| `PlainMessage`<[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md) \| `PlainMessage`<[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L686)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Defined in

[src/shifts_groups_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L674)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Defined in

[src/shifts_groups_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L678)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsShiftsList`](ShiftsGroupsShiftsList.md)

#### Defined in

[src/shifts_groups_pb.ts:682](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L682)
