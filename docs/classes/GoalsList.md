[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalsList

# Class: GoalsList

Describes the message consisting of the list of goals

**`Generated`**

from message Genesis.GoalsList

## Hierarchy

- `Message`<[`GoalsList`](GoalsList.md)\>

  ↳ **`GoalsList`**

## Table of contents

### Constructors

- [constructor](GoalsList.md#constructor)

### Properties

- [list](GoalsList.md#list)
- [fields](GoalsList.md#fields)
- [runtime](GoalsList.md#runtime)
- [typeName](GoalsList.md#typename)

### Methods

- [clone](GoalsList.md#clone)
- [equals](GoalsList.md#equals)
- [fromBinary](GoalsList.md#frombinary)
- [fromJson](GoalsList.md#fromjson)
- [fromJsonString](GoalsList.md#fromjsonstring)
- [getType](GoalsList.md#gettype)
- [toBinary](GoalsList.md#tobinary)
- [toJSON](GoalsList.md#tojson)
- [toJson](GoalsList.md#tojson-1)
- [toJsonString](GoalsList.md#tojsonstring)
- [equals](GoalsList.md#equals-1)
- [fromBinary](GoalsList.md#frombinary-1)
- [fromJson](GoalsList.md#fromjson-1)
- [fromJsonString](GoalsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalsList`](GoalsList.md)\> |

#### Overrides

Message&lt;GoalsList\&gt;.constructor

#### Defined in

[src/goals_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L915)

## Properties

### list

• **list**: [`Goal`](Goal.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Goal list = 1;

#### Defined in

[src/goals_pb.ts:913](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L913)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:922](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L922)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L920)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalsList"``

#### Defined in

[src/goals_pb.ts:921](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L921)

## Methods

### clone

▸ **clone**(): [`GoalsList`](GoalsList.md)

Create a deep copy.

#### Returns

[`GoalsList`](GoalsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsList`](GoalsList.md) \| `PlainMessage`<[`GoalsList`](GoalsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsList`](GoalsList.md)

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

[`GoalsList`](GoalsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsList`](GoalsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsList`](GoalsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsList`](GoalsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsList`](GoalsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalsList`](GoalsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalsList`](GoalsList.md)\>

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
| `a` | `undefined` \| [`GoalsList`](GoalsList.md) \| `PlainMessage`<[`GoalsList`](GoalsList.md)\> |
| `b` | `undefined` \| [`GoalsList`](GoalsList.md) \| `PlainMessage`<[`GoalsList`](GoalsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:938](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L938)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalsList`](GoalsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalsList`](GoalsList.md)

#### Defined in

[src/goals_pb.ts:926](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L926)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalsList`](GoalsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsList`](GoalsList.md)

#### Defined in

[src/goals_pb.ts:930](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L930)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalsList`](GoalsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsList`](GoalsList.md)

#### Defined in

[src/goals_pb.ts:934](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L934)
