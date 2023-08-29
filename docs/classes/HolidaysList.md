[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysList

# Class: HolidaysList

Describes the message consisting of the list of shift groups

**`Generated`**

from message Genesis.HolidaysList

## Hierarchy

- `Message`<[`HolidaysList`](HolidaysList.md)\>

  ↳ **`HolidaysList`**

## Table of contents

### Constructors

- [constructor](HolidaysList.md#constructor)

### Properties

- [list](HolidaysList.md#list)
- [fields](HolidaysList.md#fields)
- [runtime](HolidaysList.md#runtime)
- [typeName](HolidaysList.md#typename)

### Methods

- [clone](HolidaysList.md#clone)
- [equals](HolidaysList.md#equals)
- [fromBinary](HolidaysList.md#frombinary)
- [fromJson](HolidaysList.md#fromjson)
- [fromJsonString](HolidaysList.md#fromjsonstring)
- [getType](HolidaysList.md#gettype)
- [toBinary](HolidaysList.md#tobinary)
- [toJSON](HolidaysList.md#tojson)
- [toJson](HolidaysList.md#tojson-1)
- [toJsonString](HolidaysList.md#tojsonstring)
- [equals](HolidaysList.md#equals-1)
- [fromBinary](HolidaysList.md#frombinary-1)
- [fromJson](HolidaysList.md#fromjson-1)
- [fromJsonString](HolidaysList.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysList`](HolidaysList.md)\> |

#### Overrides

Message&lt;HolidaysList\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L661)

## Properties

### list

• **list**: [`Holiday`](Holiday.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Holiday list = 1;

#### Defined in

[src/holidays_pb.ts:659](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L659)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:668](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L668)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:666](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L666)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysList"``

#### Defined in

[src/holidays_pb.ts:667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L667)

## Methods

### clone

▸ **clone**(): [`HolidaysList`](HolidaysList.md)

Create a deep copy.

#### Returns

[`HolidaysList`](HolidaysList.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysList`](HolidaysList.md) \| `PlainMessage`<[`HolidaysList`](HolidaysList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysList`](HolidaysList.md)

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

[`HolidaysList`](HolidaysList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysList`](HolidaysList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysList`](HolidaysList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysList`](HolidaysList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysList`](HolidaysList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysList`](HolidaysList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysList`](HolidaysList.md)\>

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
| `a` | `undefined` \| [`HolidaysList`](HolidaysList.md) \| `PlainMessage`<[`HolidaysList`](HolidaysList.md)\> |
| `b` | `undefined` \| [`HolidaysList`](HolidaysList.md) \| `PlainMessage`<[`HolidaysList`](HolidaysList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:684](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L684)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysList`](HolidaysList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysList`](HolidaysList.md)

#### Defined in

[src/holidays_pb.ts:672](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L672)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysList`](HolidaysList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysList`](HolidaysList.md)

#### Defined in

[src/holidays_pb.ts:676](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L676)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysList`](HolidaysList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysList`](HolidaysList.md)

#### Defined in

[src/holidays_pb.ts:680](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L680)
