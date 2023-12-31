[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysShiftsGroupsList

# Class: HolidaysShiftsGroupsList

Describes the message consisting of the list of holiday shift groups

**`Generated`**

from message Genesis.HolidaysShiftsGroupsList

## Hierarchy

- `Message`<[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)\>

  ↳ **`HolidaysShiftsGroupsList`**

## Table of contents

### Constructors

- [constructor](HolidaysShiftsGroupsList.md#constructor)

### Properties

- [list](HolidaysShiftsGroupsList.md#list)
- [fields](HolidaysShiftsGroupsList.md#fields)
- [runtime](HolidaysShiftsGroupsList.md#runtime)
- [typeName](HolidaysShiftsGroupsList.md#typename)

### Methods

- [clone](HolidaysShiftsGroupsList.md#clone)
- [equals](HolidaysShiftsGroupsList.md#equals)
- [fromBinary](HolidaysShiftsGroupsList.md#frombinary)
- [fromJson](HolidaysShiftsGroupsList.md#fromjson)
- [fromJsonString](HolidaysShiftsGroupsList.md#fromjsonstring)
- [getType](HolidaysShiftsGroupsList.md#gettype)
- [toBinary](HolidaysShiftsGroupsList.md#tobinary)
- [toJSON](HolidaysShiftsGroupsList.md#tojson)
- [toJson](HolidaysShiftsGroupsList.md#tojson-1)
- [toJsonString](HolidaysShiftsGroupsList.md#tojsonstring)
- [equals](HolidaysShiftsGroupsList.md#equals-1)
- [fromBinary](HolidaysShiftsGroupsList.md#frombinary-1)
- [fromJson](HolidaysShiftsGroupsList.md#fromjson-1)
- [fromJsonString](HolidaysShiftsGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysShiftsGroupsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)\> |

#### Overrides

Message&lt;HolidaysShiftsGroupsList\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:703](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L703)

## Properties

### list

• **list**: [`HolidayShiftGroup`](HolidayShiftGroup.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.HolidayShiftGroup list = 1;

#### Defined in

[src/holidays_pb.ts:701](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L701)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:710](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L710)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:708](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L708)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysShiftsGroupsList"``

#### Defined in

[src/holidays_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L709)

## Methods

### clone

▸ **clone**(): [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

Create a deep copy.

#### Returns

[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md) \| `PlainMessage`<[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

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

[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)\>

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
| `a` | `undefined` \| [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md) \| `PlainMessage`<[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)\> |
| `b` | `undefined` \| [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md) \| `PlainMessage`<[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:726](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L726)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Defined in

[src/holidays_pb.ts:714](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L714)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Defined in

[src/holidays_pb.ts:718](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L718)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysShiftsGroupsList`](HolidaysShiftsGroupsList.md)

#### Defined in

[src/holidays_pb.ts:722](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L722)
