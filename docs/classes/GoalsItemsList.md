[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalsItemsList

# Class: GoalsItemsList

Describes the message consisting of the list of goal items

**`Generated`**

from message Genesis.GoalsItemsList

## Hierarchy

- `Message`<[`GoalsItemsList`](GoalsItemsList.md)\>

  ↳ **`GoalsItemsList`**

## Table of contents

### Constructors

- [constructor](GoalsItemsList.md#constructor)

### Properties

- [list](GoalsItemsList.md#list)
- [fields](GoalsItemsList.md#fields)
- [runtime](GoalsItemsList.md#runtime)
- [typeName](GoalsItemsList.md#typename)

### Methods

- [clone](GoalsItemsList.md#clone)
- [equals](GoalsItemsList.md#equals)
- [fromBinary](GoalsItemsList.md#frombinary)
- [fromJson](GoalsItemsList.md#fromjson)
- [fromJsonString](GoalsItemsList.md#fromjsonstring)
- [getType](GoalsItemsList.md#gettype)
- [toBinary](GoalsItemsList.md#tobinary)
- [toJSON](GoalsItemsList.md#tojson)
- [toJson](GoalsItemsList.md#tojson-1)
- [toJsonString](GoalsItemsList.md#tojsonstring)
- [equals](GoalsItemsList.md#equals-1)
- [fromBinary](GoalsItemsList.md#frombinary-1)
- [fromJson](GoalsItemsList.md#fromjson-1)
- [fromJsonString](GoalsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalsItemsList`](GoalsItemsList.md)\> |

#### Overrides

Message&lt;GoalsItemsList\&gt;.constructor

#### Defined in

[src/goals_pb.ts:957](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L957)

## Properties

### list

• **list**: [`GoalItem`](GoalItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.GoalItem list = 1;

#### Defined in

[src/goals_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L955)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:964](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L964)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L962)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalsItemsList"``

#### Defined in

[src/goals_pb.ts:963](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L963)

## Methods

### clone

▸ **clone**(): [`GoalsItemsList`](GoalsItemsList.md)

Create a deep copy.

#### Returns

[`GoalsItemsList`](GoalsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsItemsList`](GoalsItemsList.md) \| `PlainMessage`<[`GoalsItemsList`](GoalsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsItemsList`](GoalsItemsList.md)

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

[`GoalsItemsList`](GoalsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsItemsList`](GoalsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsItemsList`](GoalsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsItemsList`](GoalsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsItemsList`](GoalsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalsItemsList`](GoalsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalsItemsList`](GoalsItemsList.md)\>

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
| `a` | `undefined` \| [`GoalsItemsList`](GoalsItemsList.md) \| `PlainMessage`<[`GoalsItemsList`](GoalsItemsList.md)\> |
| `b` | `undefined` \| [`GoalsItemsList`](GoalsItemsList.md) \| `PlainMessage`<[`GoalsItemsList`](GoalsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:980](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L980)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalsItemsList`](GoalsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalsItemsList`](GoalsItemsList.md)

#### Defined in

[src/goals_pb.ts:968](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L968)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalsItemsList`](GoalsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsItemsList`](GoalsItemsList.md)

#### Defined in

[src/goals_pb.ts:972](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L972)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalsItemsList`](GoalsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsItemsList`](GoalsItemsList.md)

#### Defined in

[src/goals_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L976)
