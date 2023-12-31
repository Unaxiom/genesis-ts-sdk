[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsList

# Class: ShiftsGroupsList

Describes the message consisting of the list of shift groups

**`Generated`**

from message Genesis.ShiftsGroupsList

## Hierarchy

- `Message`<[`ShiftsGroupsList`](ShiftsGroupsList.md)\>

  ↳ **`ShiftsGroupsList`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsList.md#constructor)

### Properties

- [list](ShiftsGroupsList.md#list)
- [fields](ShiftsGroupsList.md#fields)
- [runtime](ShiftsGroupsList.md#runtime)
- [typeName](ShiftsGroupsList.md#typename)

### Methods

- [clone](ShiftsGroupsList.md#clone)
- [equals](ShiftsGroupsList.md#equals)
- [fromBinary](ShiftsGroupsList.md#frombinary)
- [fromJson](ShiftsGroupsList.md#fromjson)
- [fromJsonString](ShiftsGroupsList.md#fromjsonstring)
- [getType](ShiftsGroupsList.md#gettype)
- [toBinary](ShiftsGroupsList.md#tobinary)
- [toJSON](ShiftsGroupsList.md#tojson)
- [toJson](ShiftsGroupsList.md#tojson-1)
- [toJsonString](ShiftsGroupsList.md#tojsonstring)
- [equals](ShiftsGroupsList.md#equals-1)
- [fromBinary](ShiftsGroupsList.md#frombinary-1)
- [fromJson](ShiftsGroupsList.md#fromjson-1)
- [fromJsonString](ShiftsGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsGroupsList`](ShiftsGroupsList.md)\> |

#### Overrides

Message&lt;ShiftsGroupsList\&gt;.constructor

#### Defined in

[src/shifts_groups_pb.ts:621](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L621)

## Properties

### list

• **list**: [`ShiftGroup`](ShiftGroup.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.ShiftGroup list = 1;

#### Defined in

[src/shifts_groups_pb.ts:619](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L619)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups_pb.ts:628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L628)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups_pb.ts:626](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L626)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsGroupsList"``

#### Defined in

[src/shifts_groups_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L627)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsList`](ShiftsGroupsList.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsList`](ShiftsGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsList`](ShiftsGroupsList.md) \| `PlainMessage`<[`ShiftsGroupsList`](ShiftsGroupsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsList`](ShiftsGroupsList.md)

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

[`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsList`](ShiftsGroupsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsList`](ShiftsGroupsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsGroupsList`](ShiftsGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsGroupsList`](ShiftsGroupsList.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsList`](ShiftsGroupsList.md) \| `PlainMessage`<[`ShiftsGroupsList`](ShiftsGroupsList.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsList`](ShiftsGroupsList.md) \| `PlainMessage`<[`ShiftsGroupsList`](ShiftsGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups_pb.ts:644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L644)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Defined in

[src/shifts_groups_pb.ts:632](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L632)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Defined in

[src/shifts_groups_pb.ts:636](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L636)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsList`](ShiftsGroupsList.md)

#### Defined in

[src/shifts_groups_pb.ts:640](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L640)
