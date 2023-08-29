[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockReturnsList

# Class: StockReturnsList

Describes the message consisting of the list of stock returns

**`Generated`**

from message Genesis.StockReturnsList

## Hierarchy

- `Message`<[`StockReturnsList`](StockReturnsList.md)\>

  ↳ **`StockReturnsList`**

## Table of contents

### Constructors

- [constructor](StockReturnsList.md#constructor)

### Properties

- [list](StockReturnsList.md#list)
- [fields](StockReturnsList.md#fields)
- [runtime](StockReturnsList.md#runtime)
- [typeName](StockReturnsList.md#typename)

### Methods

- [clone](StockReturnsList.md#clone)
- [equals](StockReturnsList.md#equals)
- [fromBinary](StockReturnsList.md#frombinary)
- [fromJson](StockReturnsList.md#fromjson)
- [fromJsonString](StockReturnsList.md#fromjsonstring)
- [getType](StockReturnsList.md#gettype)
- [toBinary](StockReturnsList.md#tobinary)
- [toJSON](StockReturnsList.md#tojson)
- [toJson](StockReturnsList.md#tojson-1)
- [toJsonString](StockReturnsList.md#tojsonstring)
- [equals](StockReturnsList.md#equals-1)
- [fromBinary](StockReturnsList.md#frombinary-1)
- [fromJson](StockReturnsList.md#fromjson-1)
- [fromJsonString](StockReturnsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockReturnsList`](StockReturnsList.md)\> |

#### Overrides

Message&lt;StockReturnsList\&gt;.constructor

#### Defined in

[src/stock_returns_pb.ts:688](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L688)

## Properties

### list

• **list**: [`StockReturn`](StockReturn.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.StockReturn list = 1;

#### Defined in

[src/stock_returns_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L686)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns_pb.ts:695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L695)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns_pb.ts:693](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L693)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockReturnsList"``

#### Defined in

[src/stock_returns_pb.ts:694](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L694)

## Methods

### clone

▸ **clone**(): [`StockReturnsList`](StockReturnsList.md)

Create a deep copy.

#### Returns

[`StockReturnsList`](StockReturnsList.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsList`](StockReturnsList.md) \| `PlainMessage`<[`StockReturnsList`](StockReturnsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsList`](StockReturnsList.md)

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

[`StockReturnsList`](StockReturnsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsList`](StockReturnsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsList`](StockReturnsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockReturnsList`](StockReturnsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockReturnsList`](StockReturnsList.md)\>

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
| `a` | `undefined` \| [`StockReturnsList`](StockReturnsList.md) \| `PlainMessage`<[`StockReturnsList`](StockReturnsList.md)\> |
| `b` | `undefined` \| [`StockReturnsList`](StockReturnsList.md) \| `PlainMessage`<[`StockReturnsList`](StockReturnsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns_pb.ts:711](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L711)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockReturnsList`](StockReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Defined in

[src/stock_returns_pb.ts:699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L699)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockReturnsList`](StockReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Defined in

[src/stock_returns_pb.ts:703](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L703)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockReturnsList`](StockReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsList`](StockReturnsList.md)

#### Defined in

[src/stock_returns_pb.ts:707](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L707)