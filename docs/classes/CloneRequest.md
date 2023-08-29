[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / CloneRequest

# Class: CloneRequest

Describes the data model to handle cloning of properties of a source record (denoted by source ID) into a target record (denoted by the target ID)

**`Generated`**

from message Genesis.CloneRequest

## Hierarchy

- `Message`<[`CloneRequest`](CloneRequest.md)\>

  ↳ **`CloneRequest`**

## Table of contents

### Constructors

- [constructor](CloneRequest.md#constructor)

### Properties

- [deleteExisting](CloneRequest.md#deleteexisting)
- [sourceId](CloneRequest.md#sourceid)
- [targetId](CloneRequest.md#targetid)
- [userComment](CloneRequest.md#usercomment)
- [fields](CloneRequest.md#fields)
- [runtime](CloneRequest.md#runtime)
- [typeName](CloneRequest.md#typename)

### Methods

- [clone](CloneRequest.md#clone)
- [equals](CloneRequest.md#equals)
- [fromBinary](CloneRequest.md#frombinary)
- [fromJson](CloneRequest.md#fromjson)
- [fromJsonString](CloneRequest.md#fromjsonstring)
- [getType](CloneRequest.md#gettype)
- [toBinary](CloneRequest.md#tobinary)
- [toJSON](CloneRequest.md#tojson)
- [toJson](CloneRequest.md#tojson-1)
- [toJsonString](CloneRequest.md#tojsonstring)
- [equals](CloneRequest.md#equals-1)
- [fromBinary](CloneRequest.md#frombinary-1)
- [fromJson](CloneRequest.md#fromjson-1)
- [fromJsonString](CloneRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CloneRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CloneRequest`](CloneRequest.md)\> |

#### Overrides

Message&lt;CloneRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:1905](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1905)

## Properties

### deleteExisting

• **deleteExisting**: `boolean` = `false`

Stores if the existing items in the target resource need to be deleted before cloning from the source resource

**`Generated`**

from field: bool delete_existing = 3;

#### Defined in

[src/base_pb.ts:1896](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1896)

___

### sourceId

• **sourceId**: `bigint` = `protoInt64.zero`

The ID of the source record whose properties need to be cloned into the target record

**`Generated`**

from field: int64 source_id = 1;

#### Defined in

[src/base_pb.ts:1882](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1882)

___

### targetId

• **targetId**: `bigint` = `protoInt64.zero`

The ID of the target record that will store the cloned properties from the source

**`Generated`**

from field: int64 target_id = 2;

#### Defined in

[src/base_pb.ts:1889](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1889)

___

### userComment

• **userComment**: `string` = `""`

The comment entered by the user

**`Generated`**

from field: string user_comment = 4;

#### Defined in

[src/base_pb.ts:1903](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1903)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1912](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1912)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1910](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1910)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.CloneRequest"``

#### Defined in

[src/base_pb.ts:1911](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1911)

## Methods

### clone

▸ **clone**(): [`CloneRequest`](CloneRequest.md)

Create a deep copy.

#### Returns

[`CloneRequest`](CloneRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CloneRequest`](CloneRequest.md) \| `PlainMessage`<[`CloneRequest`](CloneRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CloneRequest`](CloneRequest.md)

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

[`CloneRequest`](CloneRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CloneRequest`](CloneRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CloneRequest`](CloneRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CloneRequest`](CloneRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CloneRequest`](CloneRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CloneRequest`](CloneRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CloneRequest`](CloneRequest.md)\>

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
| `a` | `undefined` \| [`CloneRequest`](CloneRequest.md) \| `PlainMessage`<[`CloneRequest`](CloneRequest.md)\> |
| `b` | `undefined` \| [`CloneRequest`](CloneRequest.md) \| `PlainMessage`<[`CloneRequest`](CloneRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1931](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1931)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CloneRequest`](CloneRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CloneRequest`](CloneRequest.md)

#### Defined in

[src/base_pb.ts:1919](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1919)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CloneRequest`](CloneRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CloneRequest`](CloneRequest.md)

#### Defined in

[src/base_pb.ts:1923](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1923)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CloneRequest`](CloneRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CloneRequest`](CloneRequest.md)

#### Defined in

[src/base_pb.ts:1927](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1927)
