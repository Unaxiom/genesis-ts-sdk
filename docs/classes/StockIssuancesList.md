[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesList

# Class: StockIssuancesList

Describes the message consisting of the list of stock issuances

**`Generated`**

from message Genesis.StockIssuancesList

## Hierarchy

- `Message`<[`StockIssuancesList`](StockIssuancesList.md)\>

  ↳ **`StockIssuancesList`**

## Table of contents

### Constructors

- [constructor](StockIssuancesList.md#constructor)

### Properties

- [list](StockIssuancesList.md#list)
- [fields](StockIssuancesList.md#fields)
- [runtime](StockIssuancesList.md#runtime)
- [typeName](StockIssuancesList.md#typename)

### Methods

- [clone](StockIssuancesList.md#clone)
- [equals](StockIssuancesList.md#equals)
- [fromBinary](StockIssuancesList.md#frombinary)
- [fromJson](StockIssuancesList.md#fromjson)
- [fromJsonString](StockIssuancesList.md#fromjsonstring)
- [getType](StockIssuancesList.md#gettype)
- [toBinary](StockIssuancesList.md#tobinary)
- [toJSON](StockIssuancesList.md#tojson)
- [toJson](StockIssuancesList.md#tojson-1)
- [toJsonString](StockIssuancesList.md#tojsonstring)
- [equals](StockIssuancesList.md#equals-1)
- [fromBinary](StockIssuancesList.md#frombinary-1)
- [fromJson](StockIssuancesList.md#fromjson-1)
- [fromJsonString](StockIssuancesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesList`](StockIssuancesList.md)\> |

#### Overrides

Message&lt;StockIssuancesList\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:722](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L722)

## Properties

### list

• **list**: [`StockIssuance`](StockIssuance.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.StockIssuance list = 1;

#### Defined in

[src/stock_issuances_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L720)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:729](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L729)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L727)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesList"``

#### Defined in

[src/stock_issuances_pb.ts:728](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L728)

## Methods

### clone

▸ **clone**(): [`StockIssuancesList`](StockIssuancesList.md)

Create a deep copy.

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesList`](StockIssuancesList.md) \| `PlainMessage`<[`StockIssuancesList`](StockIssuancesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

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

[`StockIssuancesList`](StockIssuancesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesList`](StockIssuancesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesList`](StockIssuancesList.md)\>

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
| `a` | `undefined` \| [`StockIssuancesList`](StockIssuancesList.md) \| `PlainMessage`<[`StockIssuancesList`](StockIssuancesList.md)\> |
| `b` | `undefined` \| [`StockIssuancesList`](StockIssuancesList.md) \| `PlainMessage`<[`StockIssuancesList`](StockIssuancesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:745](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L745)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Defined in

[src/stock_issuances_pb.ts:733](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L733)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Defined in

[src/stock_issuances_pb.ts:737](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L737)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesList`](StockIssuancesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesList`](StockIssuancesList.md)

#### Defined in

[src/stock_issuances_pb.ts:741](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L741)
