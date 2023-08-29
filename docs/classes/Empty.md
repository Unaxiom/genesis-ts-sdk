[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Empty

# Class: Empty

Describes an empty object

**`Generated`**

from message Genesis.Empty

## Hierarchy

- `Message`<[`Empty`](Empty.md)\>

  ↳ **`Empty`**

## Table of contents

### Constructors

- [constructor](Empty.md#constructor)

### Properties

- [fields](Empty.md#fields)
- [runtime](Empty.md#runtime)
- [typeName](Empty.md#typename)

### Methods

- [clone](Empty.md#clone)
- [equals](Empty.md#equals)
- [fromBinary](Empty.md#frombinary)
- [fromJson](Empty.md#fromjson)
- [fromJsonString](Empty.md#fromjsonstring)
- [getType](Empty.md#gettype)
- [toBinary](Empty.md#tobinary)
- [toJSON](Empty.md#tojson)
- [toJson](Empty.md#tojson-1)
- [toJsonString](Empty.md#tojsonstring)
- [equals](Empty.md#equals-1)
- [fromBinary](Empty.md#frombinary-1)
- [fromJson](Empty.md#fromjson-1)
- [fromJsonString](Empty.md#fromjsonstring-1)

## Constructors

### constructor

• **new Empty**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Empty`](Empty.md)\> |

#### Overrides

Message&lt;Empty\&gt;.constructor

#### Defined in

[src/base_pb.ts:169](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L169)

## Properties

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:176](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L176)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L174)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Empty"``

#### Defined in

[src/base_pb.ts:175](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L175)

## Methods

### clone

▸ **clone**(): [`Empty`](Empty.md)

Create a deep copy.

#### Returns

[`Empty`](Empty.md)

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
| `other` | `undefined` \| ``null`` \| [`Empty`](Empty.md) \| `PlainMessage`<[`Empty`](Empty.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Empty`](Empty.md)

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

[`Empty`](Empty.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Empty`](Empty.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Empty`](Empty.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Empty`](Empty.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Empty`](Empty.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Empty`](Empty.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Empty`](Empty.md)\>

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
| `a` | `undefined` \| [`Empty`](Empty.md) \| `PlainMessage`<[`Empty`](Empty.md)\> |
| `b` | `undefined` \| [`Empty`](Empty.md) \| `PlainMessage`<[`Empty`](Empty.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L191)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Empty`](Empty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Empty`](Empty.md)

#### Defined in

[src/base_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L179)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Empty`](Empty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Empty`](Empty.md)

#### Defined in

[src/base_pb.ts:183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L183)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Empty`](Empty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Empty`](Empty.md)

#### Defined in

[src/base_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L187)
