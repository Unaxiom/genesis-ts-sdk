[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / CountInSLCStatusRequest

# Class: CountInSLCStatusRequest

Describes the payload for a request to determine the count of records in the given status

**`Generated`**

from message Genesis.CountInSLCStatusRequest

## Hierarchy

- `Message`<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\>

  ↳ **`CountInSLCStatusRequest`**

## Table of contents

### Constructors

- [constructor](CountInSLCStatusRequest.md#constructor)

### Properties

- [isActive](CountInSLCStatusRequest.md#isactive)
- [status](CountInSLCStatusRequest.md#status)
- [fields](CountInSLCStatusRequest.md#fields)
- [runtime](CountInSLCStatusRequest.md#runtime)
- [typeName](CountInSLCStatusRequest.md#typename)

### Methods

- [clone](CountInSLCStatusRequest.md#clone)
- [equals](CountInSLCStatusRequest.md#equals)
- [fromBinary](CountInSLCStatusRequest.md#frombinary)
- [fromJson](CountInSLCStatusRequest.md#fromjson)
- [fromJsonString](CountInSLCStatusRequest.md#fromjsonstring)
- [getType](CountInSLCStatusRequest.md#gettype)
- [toBinary](CountInSLCStatusRequest.md#tobinary)
- [toJSON](CountInSLCStatusRequest.md#tojson)
- [toJson](CountInSLCStatusRequest.md#tojson-1)
- [toJsonString](CountInSLCStatusRequest.md#tojsonstring)
- [equals](CountInSLCStatusRequest.md#equals-1)
- [fromBinary](CountInSLCStatusRequest.md#frombinary-1)
- [fromJson](CountInSLCStatusRequest.md#fromjson-1)
- [fromJsonString](CountInSLCStatusRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CountInSLCStatusRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\> |

#### Overrides

Message&lt;CountInSLCStatusRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:501](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L501)

## Properties

### isActive

• **isActive**: `boolean` = `false`

Denote if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:492](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L492)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The standard lifecycle status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 2;

#### Defined in

[src/base_pb.ts:499](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L499)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L508)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:506](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L506)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.CountInSLCStatusRequest"``

#### Defined in

[src/base_pb.ts:507](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L507)

## Methods

### clone

▸ **clone**(): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

Create a deep copy.

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md) \| `PlainMessage`<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

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

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\>

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
| `a` | `undefined` \| [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md) \| `PlainMessage`<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\> |
| `b` | `undefined` \| [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md) \| `PlainMessage`<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:525](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L525)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Defined in

[src/base_pb.ts:513](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L513)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Defined in

[src/base_pb.ts:517](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L517)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Defined in

[src/base_pb.ts:521](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L521)
