[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServicePaginationResponse

# Class: StockReturnsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.StockReturnsServicePaginationResponse

## Hierarchy

- `Message`<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\>

  ↳ **`StockReturnsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](StockReturnsServicePaginationResponse.md#constructor)

### Properties

- [count](StockReturnsServicePaginationResponse.md#count)
- [offset](StockReturnsServicePaginationResponse.md#offset)
- [payload](StockReturnsServicePaginationResponse.md#payload)
- [total](StockReturnsServicePaginationResponse.md#total)
- [fields](StockReturnsServicePaginationResponse.md#fields)
- [runtime](StockReturnsServicePaginationResponse.md#runtime)
- [typeName](StockReturnsServicePaginationResponse.md#typename)

### Methods

- [clone](StockReturnsServicePaginationResponse.md#clone)
- [equals](StockReturnsServicePaginationResponse.md#equals)
- [fromBinary](StockReturnsServicePaginationResponse.md#frombinary)
- [fromJson](StockReturnsServicePaginationResponse.md#fromjson)
- [fromJsonString](StockReturnsServicePaginationResponse.md#fromjsonstring)
- [getType](StockReturnsServicePaginationResponse.md#gettype)
- [toBinary](StockReturnsServicePaginationResponse.md#tobinary)
- [toJSON](StockReturnsServicePaginationResponse.md#tojson)
- [toJson](StockReturnsServicePaginationResponse.md#tojson-1)
- [toJsonString](StockReturnsServicePaginationResponse.md#tojsonstring)
- [equals](StockReturnsServicePaginationResponse.md#equals-1)
- [fromBinary](StockReturnsServicePaginationResponse.md#frombinary-1)
- [fromJson](StockReturnsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](StockReturnsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;StockReturnsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/stock_returns_pb.ts:1033](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1033)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/stock_returns_pb.ts:1010](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1010)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/stock_returns_pb.ts:1017](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1017)

___

### payload

• **payload**: [`StockReturn`](StockReturn.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.StockReturn payload = 4;

#### Defined in

[src/stock_returns_pb.ts:1031](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1031)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/stock_returns_pb.ts:1024](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1024)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1040)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns_pb.ts:1038](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1038)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockReturnsServicePaginationResponse"``

#### Defined in

[src/stock_returns_pb.ts:1039](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1039)

## Methods

### clone

▸ **clone**(): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md) \| `PlainMessage`<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

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

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md) \| `PlainMessage`<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md) \| `PlainMessage`<[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns_pb.ts:1059](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1059)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Defined in

[src/stock_returns_pb.ts:1047](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1047)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Defined in

[src/stock_returns_pb.ts:1051](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1051)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServicePaginationResponse`](StockReturnsServicePaginationResponse.md)

#### Defined in

[src/stock_returns_pb.ts:1055](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L1055)
