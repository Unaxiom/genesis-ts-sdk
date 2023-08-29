[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TeamsServicePaginationResponse

# Class: TeamsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.TeamsServicePaginationResponse

## Hierarchy

- `Message`<[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)\>

  ↳ **`TeamsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](TeamsServicePaginationResponse.md#constructor)

### Properties

- [count](TeamsServicePaginationResponse.md#count)
- [offset](TeamsServicePaginationResponse.md#offset)
- [payload](TeamsServicePaginationResponse.md#payload)
- [total](TeamsServicePaginationResponse.md#total)
- [fields](TeamsServicePaginationResponse.md#fields)
- [runtime](TeamsServicePaginationResponse.md#runtime)
- [typeName](TeamsServicePaginationResponse.md#typename)

### Methods

- [clone](TeamsServicePaginationResponse.md#clone)
- [equals](TeamsServicePaginationResponse.md#equals)
- [fromBinary](TeamsServicePaginationResponse.md#frombinary)
- [fromJson](TeamsServicePaginationResponse.md#fromjson)
- [fromJsonString](TeamsServicePaginationResponse.md#fromjsonstring)
- [getType](TeamsServicePaginationResponse.md#gettype)
- [toBinary](TeamsServicePaginationResponse.md#tobinary)
- [toJSON](TeamsServicePaginationResponse.md#tojson)
- [toJson](TeamsServicePaginationResponse.md#tojson-1)
- [toJsonString](TeamsServicePaginationResponse.md#tojsonstring)
- [equals](TeamsServicePaginationResponse.md#equals-1)
- [fromBinary](TeamsServicePaginationResponse.md#frombinary-1)
- [fromJson](TeamsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](TeamsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;TeamsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/teams_pb.ts:868](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L868)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/teams_pb.ts:845](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L845)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/teams_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L852)

___

### payload

• **payload**: [`Team`](Team.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Team payload = 4;

#### Defined in

[src/teams_pb.ts:866](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L866)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/teams_pb.ts:859](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L859)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams_pb.ts:875](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L875)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams_pb.ts:873](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L873)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.TeamsServicePaginationResponse"``

#### Defined in

[src/teams_pb.ts:874](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L874)

## Methods

### clone

▸ **clone**(): [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md) \| `PlainMessage`<[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

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

[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md) \| `PlainMessage`<[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md) \| `PlainMessage`<[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams_pb.ts:894](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L894)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Defined in

[src/teams_pb.ts:882](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L882)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Defined in

[src/teams_pb.ts:886](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L886)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginationResponse`](TeamsServicePaginationResponse.md)

#### Defined in

[src/teams_pb.ts:890](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/teams_pb.ts#L890)
