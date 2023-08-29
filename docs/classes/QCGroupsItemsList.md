[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroupsItemsList

# Class: QCGroupsItemsList

Describes the message consisting of the list of qc group params

**`Generated`**

from message Genesis.QCGroupsItemsList

## Hierarchy

- `Message`<[`QCGroupsItemsList`](QCGroupsItemsList.md)\>

  ↳ **`QCGroupsItemsList`**

## Table of contents

### Constructors

- [constructor](QCGroupsItemsList.md#constructor)

### Properties

- [list](QCGroupsItemsList.md#list)
- [fields](QCGroupsItemsList.md#fields)
- [runtime](QCGroupsItemsList.md#runtime)
- [typeName](QCGroupsItemsList.md#typename)

### Methods

- [clone](QCGroupsItemsList.md#clone)
- [equals](QCGroupsItemsList.md#equals)
- [fromBinary](QCGroupsItemsList.md#frombinary)
- [fromJson](QCGroupsItemsList.md#fromjson)
- [fromJsonString](QCGroupsItemsList.md#fromjsonstring)
- [getType](QCGroupsItemsList.md#gettype)
- [toBinary](QCGroupsItemsList.md#tobinary)
- [toJSON](QCGroupsItemsList.md#tojson)
- [toJson](QCGroupsItemsList.md#tojson-1)
- [toJsonString](QCGroupsItemsList.md#tojsonstring)
- [equals](QCGroupsItemsList.md#equals-1)
- [fromBinary](QCGroupsItemsList.md#frombinary-1)
- [fromJson](QCGroupsItemsList.md#fromjson-1)
- [fromJsonString](QCGroupsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroupsItemsList`](QCGroupsItemsList.md)\> |

#### Overrides

Message&lt;QCGroupsItemsList\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:909](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L909)

## Properties

### list

• **list**: [`QCGroupItem`](QCGroupItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.QCGroupItem list = 1;

#### Defined in

[src/qc_groups_pb.ts:907](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L907)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:916](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L916)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:914](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L914)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroupsItemsList"``

#### Defined in

[src/qc_groups_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L915)

## Methods

### clone

▸ **clone**(): [`QCGroupsItemsList`](QCGroupsItemsList.md)

Create a deep copy.

#### Returns

[`QCGroupsItemsList`](QCGroupsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsItemsList`](QCGroupsItemsList.md) \| `PlainMessage`<[`QCGroupsItemsList`](QCGroupsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsItemsList`](QCGroupsItemsList.md)

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

[`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsItemsList`](QCGroupsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsItemsList`](QCGroupsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroupsItemsList`](QCGroupsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroupsItemsList`](QCGroupsItemsList.md)\>

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
| `a` | `undefined` \| [`QCGroupsItemsList`](QCGroupsItemsList.md) \| `PlainMessage`<[`QCGroupsItemsList`](QCGroupsItemsList.md)\> |
| `b` | `undefined` \| [`QCGroupsItemsList`](QCGroupsItemsList.md) \| `PlainMessage`<[`QCGroupsItemsList`](QCGroupsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:932](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L932)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Defined in

[src/qc_groups_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L920)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Defined in

[src/qc_groups_pb.ts:924](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L924)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsItemsList`](QCGroupsItemsList.md)

#### Defined in

[src/qc_groups_pb.ts:928](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L928)
