[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServiceItemCreateRequest

# Class: StockReturnsServiceItemCreateRequest

Describes the parameters required to add an item to a stock return

**`Generated`**

from message Genesis.StockReturnsServiceItemCreateRequest

## Hierarchy

- `Message`<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\>

  ↳ **`StockReturnsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](StockReturnsServiceItemCreateRequest.md#familyid)
- [internalQuantity](StockReturnsServiceItemCreateRequest.md#internalquantity)
- [itemHash](StockReturnsServiceItemCreateRequest.md#itemhash)
- [remainingDimensions](StockReturnsServiceItemCreateRequest.md#remainingdimensions)
- [stockReturnId](StockReturnsServiceItemCreateRequest.md#stockreturnid)
- [userComment](StockReturnsServiceItemCreateRequest.md#usercomment)
- [fields](StockReturnsServiceItemCreateRequest.md#fields)
- [runtime](StockReturnsServiceItemCreateRequest.md#runtime)
- [typeName](StockReturnsServiceItemCreateRequest.md#typename)

### Methods

- [clone](StockReturnsServiceItemCreateRequest.md#clone)
- [equals](StockReturnsServiceItemCreateRequest.md#equals)
- [fromBinary](StockReturnsServiceItemCreateRequest.md#frombinary)
- [fromJson](StockReturnsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](StockReturnsServiceItemCreateRequest.md#fromjsonstring)
- [getType](StockReturnsServiceItemCreateRequest.md#gettype)
- [toBinary](StockReturnsServiceItemCreateRequest.md#tobinary)
- [toJSON](StockReturnsServiceItemCreateRequest.md#tojson)
- [toJson](StockReturnsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](StockReturnsServiceItemCreateRequest.md#tojsonstring)
- [equals](StockReturnsServiceItemCreateRequest.md#equals-1)
- [fromBinary](StockReturnsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](StockReturnsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](StockReturnsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;StockReturnsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/stock_returns_pb.ts:453](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L453)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/stock_returns_pb.ts:430](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L430)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/stock_returns_pb.ts:437](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L437)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

[src/stock_returns_pb.ts:444](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L444)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

The remaining dimensions of the item (if applicable)

**`Generated`**

from field: string remaining_dimensions = 14;

#### Defined in

[src/stock_returns_pb.ts:451](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L451)

___

### stockReturnId

• **stockReturnId**: `bigint` = `protoInt64.zero`

Stores the stock return ID

**`Generated`**

from field: int64 stock_return_id = 10;

#### Defined in

[src/stock_returns_pb.ts:423](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L423)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/stock_returns_pb.ts:416](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L416)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns_pb.ts:460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L460)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns_pb.ts:458](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L458)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockReturnsServiceItemCreateRequest"``

#### Defined in

[src/stock_returns_pb.ts:459](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L459)

## Methods

### clone

▸ **clone**(): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md) \| `PlainMessage`<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

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

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md) \| `PlainMessage`<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md) \| `PlainMessage`<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns_pb.ts:481](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L481)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Defined in

[src/stock_returns_pb.ts:469](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L469)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Defined in

[src/stock_returns_pb.ts:473](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L473)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Defined in

[src/stock_returns_pb.ts:477](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L477)
