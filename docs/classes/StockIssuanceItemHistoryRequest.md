[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuanceItemHistoryRequest

# Class: StockIssuanceItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.StockIssuanceItemHistoryRequest

## Hierarchy

- `Message`<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\>

  ↳ **`StockIssuanceItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuanceItemHistoryRequest.md#constructor)

### Properties

- [familyId](StockIssuanceItemHistoryRequest.md#familyid)
- [stockIssuanceId](StockIssuanceItemHistoryRequest.md#stockissuanceid)
- [fields](StockIssuanceItemHistoryRequest.md#fields)
- [runtime](StockIssuanceItemHistoryRequest.md#runtime)
- [typeName](StockIssuanceItemHistoryRequest.md#typename)

### Methods

- [clone](StockIssuanceItemHistoryRequest.md#clone)
- [equals](StockIssuanceItemHistoryRequest.md#equals)
- [fromBinary](StockIssuanceItemHistoryRequest.md#frombinary)
- [fromJson](StockIssuanceItemHistoryRequest.md#fromjson)
- [fromJsonString](StockIssuanceItemHistoryRequest.md#fromjsonstring)
- [getType](StockIssuanceItemHistoryRequest.md#gettype)
- [toBinary](StockIssuanceItemHistoryRequest.md#tobinary)
- [toJSON](StockIssuanceItemHistoryRequest.md#tojson)
- [toJson](StockIssuanceItemHistoryRequest.md#tojson-1)
- [toJsonString](StockIssuanceItemHistoryRequest.md#tojsonstring)
- [equals](StockIssuanceItemHistoryRequest.md#equals-1)
- [fromBinary](StockIssuanceItemHistoryRequest.md#frombinary-1)
- [fromJson](StockIssuanceItemHistoryRequest.md#fromjson-1)
- [fromJsonString](StockIssuanceItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuanceItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\> |

#### Overrides

Message&lt;StockIssuanceItemHistoryRequest\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:813](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L813)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/stock_issuances_pb.ts:811](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L811)

___

### stockIssuanceId

• **stockIssuanceId**: `bigint` = `protoInt64.zero`

Stores the stock issuance ID

**`Generated`**

from field: int64 stock_issuance_id = 10;

#### Defined in

[src/stock_issuances_pb.ts:804](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L804)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:820](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L820)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L818)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuanceItemHistoryRequest"``

#### Defined in

[src/stock_issuances_pb.ts:819](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L819)

## Methods

### clone

▸ **clone**(): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md) \| `PlainMessage`<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

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

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md) \| `PlainMessage`<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md) \| `PlainMessage`<[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L837)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:825](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L825)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:829](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L829)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemHistoryRequest`](StockIssuanceItemHistoryRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:833](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L833)
