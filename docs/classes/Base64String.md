[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Base64String

# Class: Base64String

Describes the message that consists of a base64 string. Useful for relaying an image as a base64 string.

**`Generated`**

from message Genesis.Base64String

## Hierarchy

- `Message`<[`Base64String`](Base64String.md)\>

  ↳ **`Base64String`**

## Table of contents

### Constructors

- [constructor](Base64String.md#constructor)

### Properties

- [image](Base64String.md#image)
- [fields](Base64String.md#fields)
- [runtime](Base64String.md#runtime)
- [typeName](Base64String.md#typename)

### Methods

- [clone](Base64String.md#clone)
- [equals](Base64String.md#equals)
- [fromBinary](Base64String.md#frombinary)
- [fromJson](Base64String.md#fromjson)
- [fromJsonString](Base64String.md#fromjsonstring)
- [getType](Base64String.md#gettype)
- [toBinary](Base64String.md#tobinary)
- [toJSON](Base64String.md#tojson)
- [toJson](Base64String.md#tojson-1)
- [toJsonString](Base64String.md#tojsonstring)
- [equals](Base64String.md#equals-1)
- [fromBinary](Base64String.md#frombinary-1)
- [fromJson](Base64String.md#fromjson-1)
- [fromJsonString](Base64String.md#fromjsonstring-1)

## Constructors

### constructor

• **new Base64String**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Base64String`](Base64String.md)\> |

#### Overrides

Message&lt;Base64String\&gt;.constructor

#### Defined in

[src/base_pb.ts:352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L352)

## Properties

### image

• **image**: `string` = `""`

Stores the image as a base64 string

**`Generated`**

from field: string image = 1;

#### Defined in

[src/base_pb.ts:350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L350)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L359)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L357)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Base64String"``

#### Defined in

[src/base_pb.ts:358](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L358)

## Methods

### clone

▸ **clone**(): [`Base64String`](Base64String.md)

Create a deep copy.

#### Returns

[`Base64String`](Base64String.md)

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
| `other` | `undefined` \| ``null`` \| [`Base64String`](Base64String.md) \| `PlainMessage`<[`Base64String`](Base64String.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Base64String`](Base64String.md)

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

[`Base64String`](Base64String.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Base64String`](Base64String.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Base64String`](Base64String.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Base64String`](Base64String.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Base64String`](Base64String.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Base64String`](Base64String.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Base64String`](Base64String.md)\>

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
| `a` | `undefined` \| [`Base64String`](Base64String.md) \| `PlainMessage`<[`Base64String`](Base64String.md)\> |
| `b` | `undefined` \| [`Base64String`](Base64String.md) \| `PlainMessage`<[`Base64String`](Base64String.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:375](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L375)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Base64String`](Base64String.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Base64String`](Base64String.md)

#### Defined in

[src/base_pb.ts:363](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L363)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Base64String`](Base64String.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Base64String`](Base64String.md)

#### Defined in

[src/base_pb.ts:367](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L367)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Base64String`](Base64String.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Base64String`](Base64String.md)

#### Defined in

[src/base_pb.ts:371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L371)
