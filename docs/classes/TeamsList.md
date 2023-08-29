[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamsList

# Class: TeamsList

Describes the message consisting of the list of teams

**`Generated`**

from message Genesis.TeamsList

## Hierarchy

- `Message`<[`TeamsList`](TeamsList.md)\>

  ↳ **`TeamsList`**

## Table of contents

### Constructors

- [constructor](TeamsList.md#constructor)

### Properties

- [list](TeamsList.md#list)
- [fields](TeamsList.md#fields)
- [runtime](TeamsList.md#runtime)
- [typeName](TeamsList.md#typename)

### Methods

- [clone](TeamsList.md#clone)
- [equals](TeamsList.md#equals)
- [fromBinary](TeamsList.md#frombinary)
- [fromJson](TeamsList.md#fromjson)
- [fromJsonString](TeamsList.md#fromjsonstring)
- [getType](TeamsList.md#gettype)
- [toBinary](TeamsList.md#tobinary)
- [toJSON](TeamsList.md#tojson)
- [toJson](TeamsList.md#tojson-1)
- [toJsonString](TeamsList.md#tojsonstring)
- [equals](TeamsList.md#equals-1)
- [fromBinary](TeamsList.md#frombinary-1)
- [fromJson](TeamsList.md#fromjson-1)
- [fromJsonString](TeamsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamsList`](TeamsList.md)\> |

#### Overrides

Message&lt;TeamsList\&gt;.constructor

#### Defined in

[src/teams_pb.ts:631](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L631)

## Properties

### list

• **list**: [`Team`](Team.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Team list = 1;

#### Defined in

[src/teams_pb.ts:629](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L629)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:638](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L638)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:636](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L636)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamsList"``

#### Defined in

[src/teams_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L637)

## Methods

### clone

▸ **clone**(): [`TeamsList`](TeamsList.md)

Create a deep copy.

#### Returns

[`TeamsList`](TeamsList.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsList`](TeamsList.md) \| `PlainMessage`<[`TeamsList`](TeamsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsList`](TeamsList.md)

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

[`TeamsList`](TeamsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsList`](TeamsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsList`](TeamsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsList`](TeamsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsList`](TeamsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamsList`](TeamsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamsList`](TeamsList.md)\>

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
| `a` | `undefined` \| [`TeamsList`](TeamsList.md) \| `PlainMessage`<[`TeamsList`](TeamsList.md)\> |
| `b` | `undefined` \| [`TeamsList`](TeamsList.md) \| `PlainMessage`<[`TeamsList`](TeamsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:654](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L654)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamsList`](TeamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamsList`](TeamsList.md)

#### Defined in

[src/teams_pb.ts:642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L642)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamsList`](TeamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsList`](TeamsList.md)

#### Defined in

[src/teams_pb.ts:646](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L646)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamsList`](TeamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsList`](TeamsList.md)

#### Defined in

[src/teams_pb.ts:650](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L650)
