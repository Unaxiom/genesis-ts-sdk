[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / DepartmentsList

# Class: DepartmentsList

Describes the message consisting of the list of departments

**`Generated`**

from message Genesis.DepartmentsList

## Hierarchy

- `Message`<[`DepartmentsList`](DepartmentsList.md)\>

  ↳ **`DepartmentsList`**

## Table of contents

### Constructors

- [constructor](DepartmentsList.md#constructor)

### Properties

- [list](DepartmentsList.md#list)
- [fields](DepartmentsList.md#fields)
- [runtime](DepartmentsList.md#runtime)
- [typeName](DepartmentsList.md#typename)

### Methods

- [clone](DepartmentsList.md#clone)
- [equals](DepartmentsList.md#equals)
- [fromBinary](DepartmentsList.md#frombinary)
- [fromJson](DepartmentsList.md#fromjson)
- [fromJsonString](DepartmentsList.md#fromjsonstring)
- [getType](DepartmentsList.md#gettype)
- [toBinary](DepartmentsList.md#tobinary)
- [toJSON](DepartmentsList.md#tojson)
- [toJson](DepartmentsList.md#tojson-1)
- [toJsonString](DepartmentsList.md#tojsonstring)
- [equals](DepartmentsList.md#equals-1)
- [fromBinary](DepartmentsList.md#frombinary-1)
- [fromJson](DepartmentsList.md#fromjson-1)
- [fromJsonString](DepartmentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`DepartmentsList`](DepartmentsList.md)\> |

#### Overrides

Message&lt;DepartmentsList\&gt;.constructor

#### Defined in

[src/departments_pb.ts:425](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L425)

## Properties

### list

• **list**: [`Department`](Department.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Department list = 1;

#### Defined in

[src/departments_pb.ts:423](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L423)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments_pb.ts:432](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L432)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments_pb.ts:430](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L430)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.DepartmentsList"``

#### Defined in

[src/departments_pb.ts:431](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L431)

## Methods

### clone

▸ **clone**(): [`DepartmentsList`](DepartmentsList.md)

Create a deep copy.

#### Returns

[`DepartmentsList`](DepartmentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsList`](DepartmentsList.md) \| `PlainMessage`<[`DepartmentsList`](DepartmentsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsList`](DepartmentsList.md)

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

[`DepartmentsList`](DepartmentsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsList`](DepartmentsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsList`](DepartmentsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsList`](DepartmentsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsList`](DepartmentsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`DepartmentsList`](DepartmentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`DepartmentsList`](DepartmentsList.md)\>

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
| `a` | `undefined` \| [`DepartmentsList`](DepartmentsList.md) \| `PlainMessage`<[`DepartmentsList`](DepartmentsList.md)\> |
| `b` | `undefined` \| [`DepartmentsList`](DepartmentsList.md) \| `PlainMessage`<[`DepartmentsList`](DepartmentsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments_pb.ts:448](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L448)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`DepartmentsList`](DepartmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsList`](DepartmentsList.md)

#### Defined in

[src/departments_pb.ts:436](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L436)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`DepartmentsList`](DepartmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsList`](DepartmentsList.md)

#### Defined in

[src/departments_pb.ts:440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L440)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`DepartmentsList`](DepartmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsList`](DepartmentsList.md)

#### Defined in

[src/departments_pb.ts:444](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L444)
