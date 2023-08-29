[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ActiveStatus

# Class: ActiveStatus

Describes the status of the records returned to a request

**`Generated`**

from message Genesis.ActiveStatus

## Hierarchy

- `Message`<[`ActiveStatus`](ActiveStatus.md)\>

  ↳ **`ActiveStatus`**

## Table of contents

### Constructors

- [constructor](ActiveStatus.md#constructor)

### Properties

- [isActive](ActiveStatus.md#isactive)
- [fields](ActiveStatus.md#fields)
- [runtime](ActiveStatus.md#runtime)
- [typeName](ActiveStatus.md#typename)

### Methods

- [clone](ActiveStatus.md#clone)
- [equals](ActiveStatus.md#equals)
- [fromBinary](ActiveStatus.md#frombinary)
- [fromJson](ActiveStatus.md#fromjson)
- [fromJsonString](ActiveStatus.md#fromjsonstring)
- [getType](ActiveStatus.md#gettype)
- [toBinary](ActiveStatus.md#tobinary)
- [toJSON](ActiveStatus.md#tojson)
- [toJson](ActiveStatus.md#tojson-1)
- [toJsonString](ActiveStatus.md#tojsonstring)
- [equals](ActiveStatus.md#equals-1)
- [fromBinary](ActiveStatus.md#frombinary-1)
- [fromJson](ActiveStatus.md#fromjson-1)
- [fromJsonString](ActiveStatus.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActiveStatus**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ActiveStatus`](ActiveStatus.md)\> |

#### Overrides

Message&lt;ActiveStatus\&gt;.constructor

#### Defined in

[src/base_pb.ts:818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L818)

## Properties

### isActive

• **isActive**: `boolean` = `false`

Used in ViewAll procedural calls, to denote if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:816](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L816)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:825](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L825)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:823](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L823)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ActiveStatus"``

#### Defined in

[src/base_pb.ts:824](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L824)

## Methods

### clone

▸ **clone**(): [`ActiveStatus`](ActiveStatus.md)

Create a deep copy.

#### Returns

[`ActiveStatus`](ActiveStatus.md)

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
| `other` | `undefined` \| ``null`` \| [`ActiveStatus`](ActiveStatus.md) \| `PlainMessage`<[`ActiveStatus`](ActiveStatus.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActiveStatus`](ActiveStatus.md)

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

[`ActiveStatus`](ActiveStatus.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActiveStatus`](ActiveStatus.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveStatus`](ActiveStatus.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActiveStatus`](ActiveStatus.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveStatus`](ActiveStatus.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ActiveStatus`](ActiveStatus.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ActiveStatus`](ActiveStatus.md)\>

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
| `a` | `undefined` \| [`ActiveStatus`](ActiveStatus.md) \| `PlainMessage`<[`ActiveStatus`](ActiveStatus.md)\> |
| `b` | `undefined` \| [`ActiveStatus`](ActiveStatus.md) \| `PlainMessage`<[`ActiveStatus`](ActiveStatus.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:841](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L841)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ActiveStatus`](ActiveStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ActiveStatus`](ActiveStatus.md)

#### Defined in

[src/base_pb.ts:829](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L829)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ActiveStatus`](ActiveStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveStatus`](ActiveStatus.md)

#### Defined in

[src/base_pb.ts:833](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L833)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ActiveStatus`](ActiveStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveStatus`](ActiveStatus.md)

#### Defined in

[src/base_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L837)
