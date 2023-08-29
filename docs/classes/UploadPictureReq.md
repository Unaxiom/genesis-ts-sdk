[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UploadPictureReq

# Class: UploadPictureReq

Describes the payload that is required to upload a picture associated to a resource (such as profile picture or signature)

**`Generated`**

from message Genesis.UploadPictureReq

## Hierarchy

- `Message`<[`UploadPictureReq`](UploadPictureReq.md)\>

  ↳ **`UploadPictureReq`**

## Table of contents

### Constructors

- [constructor](UploadPictureReq.md#constructor)

### Properties

- [id](UploadPictureReq.md#id)
- [img](UploadPictureReq.md#img)
- [mimeType](UploadPictureReq.md#mimetype)
- [userComment](UploadPictureReq.md#usercomment)
- [fields](UploadPictureReq.md#fields)
- [runtime](UploadPictureReq.md#runtime)
- [typeName](UploadPictureReq.md#typename)

### Methods

- [clone](UploadPictureReq.md#clone)
- [equals](UploadPictureReq.md#equals)
- [fromBinary](UploadPictureReq.md#frombinary)
- [fromJson](UploadPictureReq.md#fromjson)
- [fromJsonString](UploadPictureReq.md#fromjsonstring)
- [getType](UploadPictureReq.md#gettype)
- [toBinary](UploadPictureReq.md#tobinary)
- [toJSON](UploadPictureReq.md#tojson)
- [toJson](UploadPictureReq.md#tojson-1)
- [toJsonString](UploadPictureReq.md#tojsonstring)
- [equals](UploadPictureReq.md#equals-1)
- [fromBinary](UploadPictureReq.md#frombinary-1)
- [fromJson](UploadPictureReq.md#fromjson-1)
- [fromJsonString](UploadPictureReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UploadPictureReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UploadPictureReq`](UploadPictureReq.md)\> |

#### Overrides

Message&lt;UploadPictureReq\&gt;.constructor

#### Defined in

[src/base_pb.ts:997](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L997)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/base_pb.ts:981](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L981)

___

### img

• **img**: `string` = `""`

The base64 encoded image that is to be set as the profile picture

**`Generated`**

from field: string img = 10;

#### Defined in

[src/base_pb.ts:988](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L988)

___

### mimeType

• **mimeType**: `string` = `""`

The MIME type of the profile picture

**`Generated`**

from field: string mime_type = 11;

#### Defined in

[src/base_pb.ts:995](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L995)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/base_pb.ts:974](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L974)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1004](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1004)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1002](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1002)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UploadPictureReq"``

#### Defined in

[src/base_pb.ts:1003](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1003)

## Methods

### clone

▸ **clone**(): [`UploadPictureReq`](UploadPictureReq.md)

Create a deep copy.

#### Returns

[`UploadPictureReq`](UploadPictureReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UploadPictureReq`](UploadPictureReq.md) \| `PlainMessage`<[`UploadPictureReq`](UploadPictureReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UploadPictureReq`](UploadPictureReq.md)

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

[`UploadPictureReq`](UploadPictureReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UploadPictureReq`](UploadPictureReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UploadPictureReq`](UploadPictureReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UploadPictureReq`](UploadPictureReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UploadPictureReq`](UploadPictureReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UploadPictureReq`](UploadPictureReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UploadPictureReq`](UploadPictureReq.md)\>

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
| `a` | `undefined` \| [`UploadPictureReq`](UploadPictureReq.md) \| `PlainMessage`<[`UploadPictureReq`](UploadPictureReq.md)\> |
| `b` | `undefined` \| [`UploadPictureReq`](UploadPictureReq.md) \| `PlainMessage`<[`UploadPictureReq`](UploadPictureReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1023](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1023)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UploadPictureReq`](UploadPictureReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UploadPictureReq`](UploadPictureReq.md)

#### Defined in

[src/base_pb.ts:1011](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1011)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UploadPictureReq`](UploadPictureReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UploadPictureReq`](UploadPictureReq.md)

#### Defined in

[src/base_pb.ts:1015](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1015)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UploadPictureReq`](UploadPictureReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UploadPictureReq`](UploadPictureReq.md)

#### Defined in

[src/base_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1019)
