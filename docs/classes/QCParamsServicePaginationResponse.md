[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCParamsServicePaginationResponse

# Class: QCParamsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.QCParamsServicePaginationResponse

## Hierarchy

- `Message`<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\>

  ↳ **`QCParamsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QCParamsServicePaginationResponse.md#constructor)

### Properties

- [count](QCParamsServicePaginationResponse.md#count)
- [offset](QCParamsServicePaginationResponse.md#offset)
- [payload](QCParamsServicePaginationResponse.md#payload)
- [total](QCParamsServicePaginationResponse.md#total)
- [fields](QCParamsServicePaginationResponse.md#fields)
- [runtime](QCParamsServicePaginationResponse.md#runtime)
- [typeName](QCParamsServicePaginationResponse.md#typename)

### Methods

- [clone](QCParamsServicePaginationResponse.md#clone)
- [equals](QCParamsServicePaginationResponse.md#equals)
- [fromBinary](QCParamsServicePaginationResponse.md#frombinary)
- [fromJson](QCParamsServicePaginationResponse.md#fromjson)
- [fromJsonString](QCParamsServicePaginationResponse.md#fromjsonstring)
- [getType](QCParamsServicePaginationResponse.md#gettype)
- [toBinary](QCParamsServicePaginationResponse.md#tobinary)
- [toJSON](QCParamsServicePaginationResponse.md#tojson)
- [toJson](QCParamsServicePaginationResponse.md#tojson-1)
- [toJsonString](QCParamsServicePaginationResponse.md#tojsonstring)
- [equals](QCParamsServicePaginationResponse.md#equals-1)
- [fromBinary](QCParamsServicePaginationResponse.md#frombinary-1)
- [fromJson](QCParamsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QCParamsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;QCParamsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/qc_params_pb.ts:514](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L514)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/qc_params_pb.ts:491](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L491)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/qc_params_pb.ts:498](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L498)

___

### payload

• **payload**: [`QCParam`](QCParam.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.QCParam payload = 4;

#### Defined in

[src/qc_params_pb.ts:512](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L512)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/qc_params_pb.ts:505](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L505)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params_pb.ts:521](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L521)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params_pb.ts:519](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L519)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCParamsServicePaginationResponse"``

#### Defined in

[src/qc_params_pb.ts:520](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L520)

## Methods

### clone

▸ **clone**(): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md) \| `PlainMessage`<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

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

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md) \| `PlainMessage`<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md) \| `PlainMessage`<[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params_pb.ts:540](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L540)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Defined in

[src/qc_params_pb.ts:528](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L528)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Defined in

[src/qc_params_pb.ts:532](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L532)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationResponse`](QCParamsServicePaginationResponse.md)

#### Defined in

[src/qc_params_pb.ts:536](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L536)
