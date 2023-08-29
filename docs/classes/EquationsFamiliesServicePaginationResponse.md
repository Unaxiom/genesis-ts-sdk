[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServicePaginationResponse

# Class: EquationsFamiliesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.EquationsFamiliesServicePaginationResponse

## Hierarchy

- `Message`<[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)\>

  ↳ **`EquationsFamiliesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServicePaginationResponse.md#constructor)

### Properties

- [count](EquationsFamiliesServicePaginationResponse.md#count)
- [offset](EquationsFamiliesServicePaginationResponse.md#offset)
- [payload](EquationsFamiliesServicePaginationResponse.md#payload)
- [total](EquationsFamiliesServicePaginationResponse.md#total)
- [fields](EquationsFamiliesServicePaginationResponse.md#fields)
- [runtime](EquationsFamiliesServicePaginationResponse.md#runtime)
- [typeName](EquationsFamiliesServicePaginationResponse.md#typename)

### Methods

- [clone](EquationsFamiliesServicePaginationResponse.md#clone)
- [equals](EquationsFamiliesServicePaginationResponse.md#equals)
- [fromBinary](EquationsFamiliesServicePaginationResponse.md#frombinary)
- [fromJson](EquationsFamiliesServicePaginationResponse.md#fromjson)
- [fromJsonString](EquationsFamiliesServicePaginationResponse.md#fromjsonstring)
- [getType](EquationsFamiliesServicePaginationResponse.md#gettype)
- [toBinary](EquationsFamiliesServicePaginationResponse.md#tobinary)
- [toJSON](EquationsFamiliesServicePaginationResponse.md#tojson)
- [toJson](EquationsFamiliesServicePaginationResponse.md#tojson-1)
- [toJsonString](EquationsFamiliesServicePaginationResponse.md#tojsonstring)
- [equals](EquationsFamiliesServicePaginationResponse.md#equals-1)
- [fromBinary](EquationsFamiliesServicePaginationResponse.md#frombinary-1)
- [fromJson](EquationsFamiliesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;EquationsFamiliesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/equations_families_pb.ts:908](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L908)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/equations_families_pb.ts:885](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L885)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/equations_families_pb.ts:892](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L892)

___

### payload

• **payload**: [`EquationFamily`](EquationFamily.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.EquationFamily payload = 4;

#### Defined in

[src/equations_families_pb.ts:906](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L906)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/equations_families_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L899)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L915)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families_pb.ts:913](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L913)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsFamiliesServicePaginationResponse"``

#### Defined in

[src/equations_families_pb.ts:914](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L914)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md) \| `PlainMessage`<[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

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

[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md) \| `PlainMessage`<[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md) \| `PlainMessage`<[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families_pb.ts:934](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L934)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Defined in

[src/equations_families_pb.ts:922](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L922)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Defined in

[src/equations_families_pb.ts:926](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L926)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServicePaginationResponse`](EquationsFamiliesServicePaginationResponse.md)

#### Defined in

[src/equations_families_pb.ts:930](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L930)
