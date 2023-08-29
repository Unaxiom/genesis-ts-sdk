[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServicePaginationResponse

# Class: StockIssuancesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.StockIssuancesServicePaginationResponse

## Hierarchy

- `Message`<[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)\>

  ↳ **`StockIssuancesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServicePaginationResponse.md#constructor)

### Properties

- [count](StockIssuancesServicePaginationResponse.md#count)
- [offset](StockIssuancesServicePaginationResponse.md#offset)
- [payload](StockIssuancesServicePaginationResponse.md#payload)
- [total](StockIssuancesServicePaginationResponse.md#total)
- [fields](StockIssuancesServicePaginationResponse.md#fields)
- [runtime](StockIssuancesServicePaginationResponse.md#runtime)
- [typeName](StockIssuancesServicePaginationResponse.md#typename)

### Methods

- [clone](StockIssuancesServicePaginationResponse.md#clone)
- [equals](StockIssuancesServicePaginationResponse.md#equals)
- [fromBinary](StockIssuancesServicePaginationResponse.md#frombinary)
- [fromJson](StockIssuancesServicePaginationResponse.md#fromjson)
- [fromJsonString](StockIssuancesServicePaginationResponse.md#fromjsonstring)
- [getType](StockIssuancesServicePaginationResponse.md#gettype)
- [toBinary](StockIssuancesServicePaginationResponse.md#tobinary)
- [toJSON](StockIssuancesServicePaginationResponse.md#tojson)
- [toJson](StockIssuancesServicePaginationResponse.md#tojson-1)
- [toJsonString](StockIssuancesServicePaginationResponse.md#tojsonstring)
- [equals](StockIssuancesServicePaginationResponse.md#equals-1)
- [fromBinary](StockIssuancesServicePaginationResponse.md#frombinary-1)
- [fromJson](StockIssuancesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](StockIssuancesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;StockIssuancesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:1067](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1067)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/stock_issuances_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1044)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/stock_issuances_pb.ts:1051](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1051)

___

### payload

• **payload**: [`StockIssuance`](StockIssuance.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.StockIssuance payload = 4;

#### Defined in

[src/stock_issuances_pb.ts:1065](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1065)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/stock_issuances_pb.ts:1058](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1058)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:1074](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1074)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:1072](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1072)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesServicePaginationResponse"``

#### Defined in

[src/stock_issuances_pb.ts:1073](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1073)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md) \| `PlainMessage`<[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

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

[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md) \| `PlainMessage`<[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md) \| `PlainMessage`<[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:1093](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1093)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Defined in

[src/stock_issuances_pb.ts:1081](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1081)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Defined in

[src/stock_issuances_pb.ts:1085](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1085)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServicePaginationResponse`](StockIssuancesServicePaginationResponse.md)

#### Defined in

[src/stock_issuances_pb.ts:1089](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1089)
