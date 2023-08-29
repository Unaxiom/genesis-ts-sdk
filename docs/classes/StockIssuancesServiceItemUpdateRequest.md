[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceItemUpdateRequest

# Class: StockIssuancesServiceItemUpdateRequest

Describes the parameters required to update an item in a stock issuance

**`Generated`**

from message Genesis.StockIssuancesServiceItemUpdateRequest

## Hierarchy

- `Message`<[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)\>

  ↳ **`StockIssuancesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceItemUpdateRequest.md#constructor)

### Properties

- [id](StockIssuancesServiceItemUpdateRequest.md#id)
- [internalQuantity](StockIssuancesServiceItemUpdateRequest.md#internalquantity)
- [itemHash](StockIssuancesServiceItemUpdateRequest.md#itemhash)
- [userComment](StockIssuancesServiceItemUpdateRequest.md#usercomment)
- [fields](StockIssuancesServiceItemUpdateRequest.md#fields)
- [runtime](StockIssuancesServiceItemUpdateRequest.md#runtime)
- [typeName](StockIssuancesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](StockIssuancesServiceItemUpdateRequest.md#clone)
- [equals](StockIssuancesServiceItemUpdateRequest.md#equals)
- [fromBinary](StockIssuancesServiceItemUpdateRequest.md#frombinary)
- [fromJson](StockIssuancesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](StockIssuancesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](StockIssuancesServiceItemUpdateRequest.md#gettype)
- [toBinary](StockIssuancesServiceItemUpdateRequest.md#tobinary)
- [toJSON](StockIssuancesServiceItemUpdateRequest.md#tojson)
- [toJson](StockIssuancesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](StockIssuancesServiceItemUpdateRequest.md#tojsonstring)
- [equals](StockIssuancesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](StockIssuancesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](StockIssuancesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;StockIssuancesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:571](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L571)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/stock_issuances_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L555)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/stock_issuances_pb.ts:562](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L562)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

[src/stock_issuances_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L569)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/stock_issuances_pb.ts:548](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L548)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L578)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L576)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesServiceItemUpdateRequest"``

#### Defined in

[src/stock_issuances_pb.ts:577](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L577)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

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

[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:597](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L597)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L585)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:589](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L589)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceItemUpdateRequest`](StockIssuancesServiceItemUpdateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:593](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L593)
