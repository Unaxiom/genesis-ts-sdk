[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OvertimesList

# Class: OvertimesList

Describes the message consisting of the list of records

**`Generated`**

from message Genesis.OvertimesList

## Hierarchy

- `Message`<[`OvertimesList`](OvertimesList.md)\>

  ↳ **`OvertimesList`**

## Table of contents

### Constructors

- [constructor](OvertimesList.md#constructor)

### Properties

- [list](OvertimesList.md#list)
- [fields](OvertimesList.md#fields)
- [runtime](OvertimesList.md#runtime)
- [typeName](OvertimesList.md#typename)

### Methods

- [clone](OvertimesList.md#clone)
- [equals](OvertimesList.md#equals)
- [fromBinary](OvertimesList.md#frombinary)
- [fromJson](OvertimesList.md#fromjson)
- [fromJsonString](OvertimesList.md#fromjsonstring)
- [getType](OvertimesList.md#gettype)
- [toBinary](OvertimesList.md#tobinary)
- [toJSON](OvertimesList.md#tojson)
- [toJson](OvertimesList.md#tojson-1)
- [toJsonString](OvertimesList.md#tojsonstring)
- [equals](OvertimesList.md#equals-1)
- [fromBinary](OvertimesList.md#frombinary-1)
- [fromJson](OvertimesList.md#fromjson-1)
- [fromJsonString](OvertimesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OvertimesList`](OvertimesList.md)\> |

#### Overrides

Message&lt;OvertimesList\&gt;.constructor

#### Defined in

[src/overtimes_pb.ts:490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L490)

## Properties

### list

• **list**: [`Overtime`](Overtime.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Overtime list = 1;

#### Defined in

[src/overtimes_pb.ts:488](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L488)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes_pb.ts:497](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L497)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes_pb.ts:495](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L495)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OvertimesList"``

#### Defined in

[src/overtimes_pb.ts:496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L496)

## Methods

### clone

▸ **clone**(): [`OvertimesList`](OvertimesList.md)

Create a deep copy.

#### Returns

[`OvertimesList`](OvertimesList.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesList`](OvertimesList.md) \| `PlainMessage`<[`OvertimesList`](OvertimesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesList`](OvertimesList.md)

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

[`OvertimesList`](OvertimesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesList`](OvertimesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesList`](OvertimesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesList`](OvertimesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesList`](OvertimesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OvertimesList`](OvertimesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OvertimesList`](OvertimesList.md)\>

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
| `a` | `undefined` \| [`OvertimesList`](OvertimesList.md) \| `PlainMessage`<[`OvertimesList`](OvertimesList.md)\> |
| `b` | `undefined` \| [`OvertimesList`](OvertimesList.md) \| `PlainMessage`<[`OvertimesList`](OvertimesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes_pb.ts:513](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L513)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OvertimesList`](OvertimesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OvertimesList`](OvertimesList.md)

#### Defined in

[src/overtimes_pb.ts:501](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L501)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OvertimesList`](OvertimesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesList`](OvertimesList.md)

#### Defined in

[src/overtimes_pb.ts:505](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L505)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OvertimesList`](OvertimesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesList`](OvertimesList.md)

#### Defined in

[src/overtimes_pb.ts:509](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L509)
