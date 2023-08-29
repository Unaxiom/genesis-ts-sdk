[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AbsencesServicePaginationResponse

# Class: AbsencesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.AbsencesServicePaginationResponse

## Hierarchy

- `Message`<[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)\>

  ↳ **`AbsencesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](AbsencesServicePaginationResponse.md#constructor)

### Properties

- [count](AbsencesServicePaginationResponse.md#count)
- [offset](AbsencesServicePaginationResponse.md#offset)
- [payload](AbsencesServicePaginationResponse.md#payload)
- [total](AbsencesServicePaginationResponse.md#total)
- [fields](AbsencesServicePaginationResponse.md#fields)
- [runtime](AbsencesServicePaginationResponse.md#runtime)
- [typeName](AbsencesServicePaginationResponse.md#typename)

### Methods

- [clone](AbsencesServicePaginationResponse.md#clone)
- [equals](AbsencesServicePaginationResponse.md#equals)
- [fromBinary](AbsencesServicePaginationResponse.md#frombinary)
- [fromJson](AbsencesServicePaginationResponse.md#fromjson)
- [fromJsonString](AbsencesServicePaginationResponse.md#fromjsonstring)
- [getType](AbsencesServicePaginationResponse.md#gettype)
- [toBinary](AbsencesServicePaginationResponse.md#tobinary)
- [toJSON](AbsencesServicePaginationResponse.md#tojson)
- [toJson](AbsencesServicePaginationResponse.md#tojson-1)
- [toJsonString](AbsencesServicePaginationResponse.md#tojsonstring)
- [equals](AbsencesServicePaginationResponse.md#equals-1)
- [fromBinary](AbsencesServicePaginationResponse.md#frombinary-1)
- [fromJson](AbsencesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](AbsencesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;AbsencesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/absences_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L709)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/absences_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L686)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/absences_pb.ts:693](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L693)

___

### payload

• **payload**: [`Absence`](Absence.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Absence payload = 4;

#### Defined in

[src/absences_pb.ts:707](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L707)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/absences_pb.ts:700](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L700)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences_pb.ts:716](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L716)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences_pb.ts:714](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L714)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AbsencesServicePaginationResponse"``

#### Defined in

[src/absences_pb.ts:715](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L715)

## Methods

### clone

▸ **clone**(): [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md) \| `PlainMessage`<[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

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

[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md) \| `PlainMessage`<[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md) \| `PlainMessage`<[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences_pb.ts:735](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L735)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Defined in

[src/absences_pb.ts:723](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L723)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Defined in

[src/absences_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L727)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServicePaginationResponse`](AbsencesServicePaginationResponse.md)

#### Defined in

[src/absences_pb.ts:731](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L731)
