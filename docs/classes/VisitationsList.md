[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / VisitationsList

# Class: VisitationsList

Describes the message consisting of the list of records

**`Generated`**

from message Genesis.VisitationsList

## Hierarchy

- `Message`<[`VisitationsList`](VisitationsList.md)\>

  ↳ **`VisitationsList`**

## Table of contents

### Constructors

- [constructor](VisitationsList.md#constructor)

### Properties

- [list](VisitationsList.md#list)
- [fields](VisitationsList.md#fields)
- [runtime](VisitationsList.md#runtime)
- [typeName](VisitationsList.md#typename)

### Methods

- [clone](VisitationsList.md#clone)
- [equals](VisitationsList.md#equals)
- [fromBinary](VisitationsList.md#frombinary)
- [fromJson](VisitationsList.md#fromjson)
- [fromJsonString](VisitationsList.md#fromjsonstring)
- [getType](VisitationsList.md#gettype)
- [toBinary](VisitationsList.md#tobinary)
- [toJSON](VisitationsList.md#tojson)
- [toJson](VisitationsList.md#tojson-1)
- [toJsonString](VisitationsList.md#tojsonstring)
- [equals](VisitationsList.md#equals-1)
- [fromBinary](VisitationsList.md#frombinary-1)
- [fromJson](VisitationsList.md#fromjson-1)
- [fromJsonString](VisitationsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`VisitationsList`](VisitationsList.md)\> |

#### Overrides

Message&lt;VisitationsList\&gt;.constructor

#### Defined in

[src/visitations_pb.ts:690](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L690)

## Properties

### list

• **list**: [`Visitation`](Visitation.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Visitation list = 1;

#### Defined in

[src/visitations_pb.ts:688](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L688)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations_pb.ts:697](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L697)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations_pb.ts:695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L695)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.VisitationsList"``

#### Defined in

[src/visitations_pb.ts:696](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L696)

## Methods

### clone

▸ **clone**(): [`VisitationsList`](VisitationsList.md)

Create a deep copy.

#### Returns

[`VisitationsList`](VisitationsList.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsList`](VisitationsList.md) \| `PlainMessage`<[`VisitationsList`](VisitationsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsList`](VisitationsList.md)

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

[`VisitationsList`](VisitationsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsList`](VisitationsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsList`](VisitationsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsList`](VisitationsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsList`](VisitationsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`VisitationsList`](VisitationsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`VisitationsList`](VisitationsList.md)\>

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
| `a` | `undefined` \| [`VisitationsList`](VisitationsList.md) \| `PlainMessage`<[`VisitationsList`](VisitationsList.md)\> |
| `b` | `undefined` \| [`VisitationsList`](VisitationsList.md) \| `PlainMessage`<[`VisitationsList`](VisitationsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L713)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`VisitationsList`](VisitationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`VisitationsList`](VisitationsList.md)

#### Defined in

[src/visitations_pb.ts:701](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L701)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`VisitationsList`](VisitationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsList`](VisitationsList.md)

#### Defined in

[src/visitations_pb.ts:705](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L705)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`VisitationsList`](VisitationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsList`](VisitationsList.md)

#### Defined in

[src/visitations_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L709)
