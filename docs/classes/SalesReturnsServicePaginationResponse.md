[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServicePaginationResponse

# Class: SalesReturnsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.SalesReturnsServicePaginationResponse

## Hierarchy

- `Message`<[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)\>

  ↳ **`SalesReturnsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServicePaginationResponse.md#constructor)

### Properties

- [count](SalesReturnsServicePaginationResponse.md#count)
- [offset](SalesReturnsServicePaginationResponse.md#offset)
- [payload](SalesReturnsServicePaginationResponse.md#payload)
- [total](SalesReturnsServicePaginationResponse.md#total)
- [fields](SalesReturnsServicePaginationResponse.md#fields)
- [runtime](SalesReturnsServicePaginationResponse.md#runtime)
- [typeName](SalesReturnsServicePaginationResponse.md#typename)

### Methods

- [clone](SalesReturnsServicePaginationResponse.md#clone)
- [equals](SalesReturnsServicePaginationResponse.md#equals)
- [fromBinary](SalesReturnsServicePaginationResponse.md#frombinary)
- [fromJson](SalesReturnsServicePaginationResponse.md#fromjson)
- [fromJsonString](SalesReturnsServicePaginationResponse.md#fromjsonstring)
- [getType](SalesReturnsServicePaginationResponse.md#gettype)
- [toBinary](SalesReturnsServicePaginationResponse.md#tobinary)
- [toJSON](SalesReturnsServicePaginationResponse.md#tojson)
- [toJson](SalesReturnsServicePaginationResponse.md#tojson-1)
- [toJsonString](SalesReturnsServicePaginationResponse.md#tojsonstring)
- [equals](SalesReturnsServicePaginationResponse.md#equals-1)
- [fromBinary](SalesReturnsServicePaginationResponse.md#frombinary-1)
- [fromJson](SalesReturnsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](SalesReturnsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;SalesReturnsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:1092](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1092)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/sales_returns_pb.ts:1069](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1069)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/sales_returns_pb.ts:1076](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1076)

___

### payload

• **payload**: [`SalesReturn`](SalesReturn.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.SalesReturn payload = 4;

#### Defined in

[src/sales_returns_pb.ts:1090](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1090)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/sales_returns_pb.ts:1083](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1083)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:1099](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1099)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:1097](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1097)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnsServicePaginationResponse"``

#### Defined in

[src/sales_returns_pb.ts:1098](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1098)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md) \| `PlainMessage`<[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

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

[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md) \| `PlainMessage`<[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md) \| `PlainMessage`<[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:1118](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1118)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Defined in

[src/sales_returns_pb.ts:1106](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1106)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Defined in

[src/sales_returns_pb.ts:1110](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1110)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginationResponse`](SalesReturnsServicePaginationResponse.md)

#### Defined in

[src/sales_returns_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1114)
