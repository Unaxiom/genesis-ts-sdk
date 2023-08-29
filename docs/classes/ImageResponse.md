[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ImageResponse

# Class: ImageResponse

Describes a generic response that consists of info of an image

**`Generated`**

from message Genesis.ImageResponse

## Hierarchy

- `Message`<[`ImageResponse`](ImageResponse.md)\>

  ↳ **`ImageResponse`**

## Table of contents

### Constructors

- [constructor](ImageResponse.md#constructor)

### Properties

- [image](ImageResponse.md#image)
- [mimeType](ImageResponse.md#mimetype)
- [timestamp](ImageResponse.md#timestamp)
- [fields](ImageResponse.md#fields)
- [runtime](ImageResponse.md#runtime)
- [typeName](ImageResponse.md#typename)

### Methods

- [clone](ImageResponse.md#clone)
- [equals](ImageResponse.md#equals)
- [fromBinary](ImageResponse.md#frombinary)
- [fromJson](ImageResponse.md#fromjson)
- [fromJsonString](ImageResponse.md#fromjsonstring)
- [getType](ImageResponse.md#gettype)
- [toBinary](ImageResponse.md#tobinary)
- [toJSON](ImageResponse.md#tojson)
- [toJson](ImageResponse.md#tojson-1)
- [toJsonString](ImageResponse.md#tojsonstring)
- [equals](ImageResponse.md#equals-1)
- [fromBinary](ImageResponse.md#frombinary-1)
- [fromJson](ImageResponse.md#fromjson-1)
- [fromJsonString](ImageResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ImageResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ImageResponse`](ImageResponse.md)\> |

#### Overrides

Message&lt;ImageResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L308)

## Properties

### image

• **image**: `Uint8Array`

Stores the raw image content

**`Generated`**

from field: bytes image = 1;

#### Defined in

[src/base_pb.ts:292](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L292)

___

### mimeType

• **mimeType**: `string` = `""`

Stores the MIME type of the image

**`Generated`**

from field: string mime_type = 2;

#### Defined in

[src/base_pb.ts:299](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L299)

___

### timestamp

• **timestamp**: `bigint` = `protoInt64.zero`

The timestamp of when the image was captured

**`Generated`**

from field: int64 timestamp = 3;

#### Defined in

[src/base_pb.ts:306](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L306)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L315)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L313)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ImageResponse"``

#### Defined in

[src/base_pb.ts:314](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L314)

## Methods

### clone

▸ **clone**(): [`ImageResponse`](ImageResponse.md)

Create a deep copy.

#### Returns

[`ImageResponse`](ImageResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ImageResponse`](ImageResponse.md) \| `PlainMessage`<[`ImageResponse`](ImageResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ImageResponse`](ImageResponse.md)

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

[`ImageResponse`](ImageResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ImageResponse`](ImageResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ImageResponse`](ImageResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ImageResponse`](ImageResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ImageResponse`](ImageResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ImageResponse`](ImageResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ImageResponse`](ImageResponse.md)\>

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
| `a` | `undefined` \| [`ImageResponse`](ImageResponse.md) \| `PlainMessage`<[`ImageResponse`](ImageResponse.md)\> |
| `b` | `undefined` \| [`ImageResponse`](ImageResponse.md) \| `PlainMessage`<[`ImageResponse`](ImageResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:333](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L333)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ImageResponse`](ImageResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ImageResponse`](ImageResponse.md)

#### Defined in

[src/base_pb.ts:321](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L321)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ImageResponse`](ImageResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ImageResponse`](ImageResponse.md)

#### Defined in

[src/base_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L325)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ImageResponse`](ImageResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ImageResponse`](ImageResponse.md)

#### Defined in

[src/base_pb.ts:329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L329)
