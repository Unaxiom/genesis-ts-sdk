[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GPSCoordinatesResponse

# Class: GPSCoordinatesResponse

Describes a generic response that represents a GPS coordinate

**`Generated`**

from message Genesis.GPSCoordinatesResponse

## Hierarchy

- `Message`<[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)\>

  ↳ **`GPSCoordinatesResponse`**

## Table of contents

### Constructors

- [constructor](GPSCoordinatesResponse.md#constructor)

### Properties

- [latitude](GPSCoordinatesResponse.md#latitude)
- [longitude](GPSCoordinatesResponse.md#longitude)
- [fields](GPSCoordinatesResponse.md#fields)
- [runtime](GPSCoordinatesResponse.md#runtime)
- [typeName](GPSCoordinatesResponse.md#typename)

### Methods

- [clone](GPSCoordinatesResponse.md#clone)
- [equals](GPSCoordinatesResponse.md#equals)
- [fromBinary](GPSCoordinatesResponse.md#frombinary)
- [fromJson](GPSCoordinatesResponse.md#fromjson)
- [fromJsonString](GPSCoordinatesResponse.md#fromjsonstring)
- [getType](GPSCoordinatesResponse.md#gettype)
- [toBinary](GPSCoordinatesResponse.md#tobinary)
- [toJSON](GPSCoordinatesResponse.md#tojson)
- [toJson](GPSCoordinatesResponse.md#tojson-1)
- [toJsonString](GPSCoordinatesResponse.md#tojsonstring)
- [equals](GPSCoordinatesResponse.md#equals-1)
- [fromBinary](GPSCoordinatesResponse.md#frombinary-1)
- [fromJson](GPSCoordinatesResponse.md#fromjson-1)
- [fromJsonString](GPSCoordinatesResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new GPSCoordinatesResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)\> |

#### Overrides

Message&lt;GPSCoordinatesResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:451](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L451)

## Properties

### latitude

• **latitude**: `number` = `0`

Stores the latitude

**`Generated`**

from field: double latitude = 1;

#### Defined in

[src/base_pb.ts:442](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L442)

___

### longitude

• **longitude**: `number` = `0`

Stores the longitude

**`Generated`**

from field: double longitude = 2;

#### Defined in

[src/base_pb.ts:449](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L449)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:458](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L458)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:456](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L456)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GPSCoordinatesResponse"``

#### Defined in

[src/base_pb.ts:457](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L457)

## Methods

### clone

▸ **clone**(): [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

Create a deep copy.

#### Returns

[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md) \| `PlainMessage`<[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

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

[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)\>

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
| `a` | `undefined` \| [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md) \| `PlainMessage`<[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)\> |
| `b` | `undefined` \| [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md) \| `PlainMessage`<[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:475](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L475)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Defined in

[src/base_pb.ts:463](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L463)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Defined in

[src/base_pb.ts:467](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L467)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GPSCoordinatesResponse`](GPSCoordinatesResponse.md)

#### Defined in

[src/base_pb.ts:471](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L471)
