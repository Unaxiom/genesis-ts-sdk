[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockReturnItemHistoryRequest

# Class: StockReturnItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.StockReturnItemHistoryRequest

## Hierarchy

- `Message`<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\>

  ↳ **`StockReturnItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnItemHistoryRequest.md#constructor)

### Properties

- [familyId](StockReturnItemHistoryRequest.md#familyid)
- [stockReturnId](StockReturnItemHistoryRequest.md#stockreturnid)
- [fields](StockReturnItemHistoryRequest.md#fields)
- [runtime](StockReturnItemHistoryRequest.md#runtime)
- [typeName](StockReturnItemHistoryRequest.md#typename)

### Methods

- [clone](StockReturnItemHistoryRequest.md#clone)
- [equals](StockReturnItemHistoryRequest.md#equals)
- [fromBinary](StockReturnItemHistoryRequest.md#frombinary)
- [fromJson](StockReturnItemHistoryRequest.md#fromjson)
- [fromJsonString](StockReturnItemHistoryRequest.md#fromjsonstring)
- [getType](StockReturnItemHistoryRequest.md#gettype)
- [toBinary](StockReturnItemHistoryRequest.md#tobinary)
- [toJSON](StockReturnItemHistoryRequest.md#tojson)
- [toJson](StockReturnItemHistoryRequest.md#tojson-1)
- [toJsonString](StockReturnItemHistoryRequest.md#tojsonstring)
- [equals](StockReturnItemHistoryRequest.md#equals-1)
- [fromBinary](StockReturnItemHistoryRequest.md#frombinary-1)
- [fromJson](StockReturnItemHistoryRequest.md#fromjson-1)
- [fromJsonString](StockReturnItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\> |

#### Overrides

Message&lt;StockReturnItemHistoryRequest\&gt;.constructor

#### Defined in

[src/stock_returns_pb.ts:779](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L779)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/stock_returns_pb.ts:777](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L777)

___

### stockReturnId

• **stockReturnId**: `bigint` = `protoInt64.zero`

Stores the stock return ID

**`Generated`**

from field: int64 stock_return_id = 10;

#### Defined in

[src/stock_returns_pb.ts:770](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L770)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns_pb.ts:786](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L786)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns_pb.ts:784](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L784)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockReturnItemHistoryRequest"``

#### Defined in

[src/stock_returns_pb.ts:785](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L785)

## Methods

### clone

▸ **clone**(): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md) \| `PlainMessage`<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

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

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md) \| `PlainMessage`<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md) \| `PlainMessage`<[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns_pb.ts:803](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L803)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Defined in

[src/stock_returns_pb.ts:791](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L791)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Defined in

[src/stock_returns_pb.ts:795](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L795)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemHistoryRequest`](StockReturnItemHistoryRequest.md)

#### Defined in

[src/stock_returns_pb.ts:799](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L799)
