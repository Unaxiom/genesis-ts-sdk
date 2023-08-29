[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsList

# Class: ShiftsList

Describes the message consisting of the list of records

**`Generated`**

from message Genesis.ShiftsList

## Hierarchy

- `Message`<[`ShiftsList`](ShiftsList.md)\>

  ↳ **`ShiftsList`**

## Table of contents

### Constructors

- [constructor](ShiftsList.md#constructor)

### Properties

- [list](ShiftsList.md#list)
- [fields](ShiftsList.md#fields)
- [runtime](ShiftsList.md#runtime)
- [typeName](ShiftsList.md#typename)

### Methods

- [clone](ShiftsList.md#clone)
- [equals](ShiftsList.md#equals)
- [fromBinary](ShiftsList.md#frombinary)
- [fromJson](ShiftsList.md#fromjson)
- [fromJsonString](ShiftsList.md#fromjsonstring)
- [getType](ShiftsList.md#gettype)
- [toBinary](ShiftsList.md#tobinary)
- [toJSON](ShiftsList.md#tojson)
- [toJson](ShiftsList.md#tojson-1)
- [toJsonString](ShiftsList.md#tojsonstring)
- [equals](ShiftsList.md#equals-1)
- [fromBinary](ShiftsList.md#frombinary-1)
- [fromJson](ShiftsList.md#fromjson-1)
- [fromJsonString](ShiftsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsList`](ShiftsList.md)\> |

#### Overrides

Message&lt;ShiftsList\&gt;.constructor

#### Defined in

[src/shifts_pb.ts:505](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L505)

## Properties

### list

• **list**: [`Shift`](Shift.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Shift list = 1;

#### Defined in

[src/shifts_pb.ts:503](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L503)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_pb.ts:512](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L512)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_pb.ts:510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L510)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsList"``

#### Defined in

[src/shifts_pb.ts:511](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L511)

## Methods

### clone

▸ **clone**(): [`ShiftsList`](ShiftsList.md)

Create a deep copy.

#### Returns

[`ShiftsList`](ShiftsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsList`](ShiftsList.md) \| `PlainMessage`<[`ShiftsList`](ShiftsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsList`](ShiftsList.md)

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

[`ShiftsList`](ShiftsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsList`](ShiftsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsList`](ShiftsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsList`](ShiftsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsList`](ShiftsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsList`](ShiftsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsList`](ShiftsList.md)\>

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
| `a` | `undefined` \| [`ShiftsList`](ShiftsList.md) \| `PlainMessage`<[`ShiftsList`](ShiftsList.md)\> |
| `b` | `undefined` \| [`ShiftsList`](ShiftsList.md) \| `PlainMessage`<[`ShiftsList`](ShiftsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_pb.ts:528](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L528)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsList`](ShiftsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsList`](ShiftsList.md)

#### Defined in

[src/shifts_pb.ts:516](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L516)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsList`](ShiftsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsList`](ShiftsList.md)

#### Defined in

[src/shifts_pb.ts:520](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L520)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsList`](ShiftsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsList`](ShiftsList.md)

#### Defined in

[src/shifts_pb.ts:524](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L524)
