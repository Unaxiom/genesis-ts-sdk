[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceItemCreateRequest

# Class: StockIssuancesServiceItemCreateRequest

Describes the parameters required to add an item to a stock issuance

**`Generated`**

from message Genesis.StockIssuancesServiceItemCreateRequest

## Hierarchy

- `Message`<[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)\>

  ↳ **`StockIssuancesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](StockIssuancesServiceItemCreateRequest.md#familyid)
- [internalQuantity](StockIssuancesServiceItemCreateRequest.md#internalquantity)
- [itemHash](StockIssuancesServiceItemCreateRequest.md#itemhash)
- [stockIssuanceId](StockIssuancesServiceItemCreateRequest.md#stockissuanceid)
- [userComment](StockIssuancesServiceItemCreateRequest.md#usercomment)
- [fields](StockIssuancesServiceItemCreateRequest.md#fields)
- [runtime](StockIssuancesServiceItemCreateRequest.md#runtime)
- [typeName](StockIssuancesServiceItemCreateRequest.md#typename)

### Methods

- [clone](StockIssuancesServiceItemCreateRequest.md#clone)
- [equals](StockIssuancesServiceItemCreateRequest.md#equals)
- [fromBinary](StockIssuancesServiceItemCreateRequest.md#frombinary)
- [fromJson](StockIssuancesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](StockIssuancesServiceItemCreateRequest.md#fromjsonstring)
- [getType](StockIssuancesServiceItemCreateRequest.md#gettype)
- [toBinary](StockIssuancesServiceItemCreateRequest.md#tobinary)
- [toJSON](StockIssuancesServiceItemCreateRequest.md#tojson)
- [toJson](StockIssuancesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](StockIssuancesServiceItemCreateRequest.md#tojsonstring)
- [equals](StockIssuancesServiceItemCreateRequest.md#equals-1)
- [fromBinary](StockIssuancesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](StockIssuancesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;StockIssuancesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L504)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/stock_issuances_pb.ts:488](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L488)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/stock_issuances_pb.ts:495](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L495)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

[src/stock_issuances_pb.ts:502](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L502)

___

### stockIssuanceId

• **stockIssuanceId**: `bigint` = `protoInt64.zero`

Stores the stock issuance ID

**`Generated`**

from field: int64 stock_issuance_id = 10;

#### Defined in

[src/stock_issuances_pb.ts:481](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L481)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/stock_issuances_pb.ts:474](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L474)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:511](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L511)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:509](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L509)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesServiceItemCreateRequest"``

#### Defined in

[src/stock_issuances_pb.ts:510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L510)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

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

[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:531](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L531)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:519](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L519)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:523](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L523)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemCreateRequest`](StockIssuancesServiceItemCreateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:527](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L527)
