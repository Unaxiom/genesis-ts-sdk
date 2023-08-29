[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceItemUpdateRequest

# Class: SalesReturnsServiceItemUpdateRequest

Describes the parameters required to update an item in a sales return

**`Generated`**

from message Genesis.SalesReturnsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\>

  ↳ **`SalesReturnsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceItemUpdateRequest.md#constructor)

### Properties

- [clientQuantity](SalesReturnsServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](SalesReturnsServiceItemUpdateRequest.md#clientuomid)
- [id](SalesReturnsServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesReturnsServiceItemUpdateRequest.md#internalquantity)
- [itemHash](SalesReturnsServiceItemUpdateRequest.md#itemhash)
- [userComment](SalesReturnsServiceItemUpdateRequest.md#usercomment)
- [fields](SalesReturnsServiceItemUpdateRequest.md#fields)
- [runtime](SalesReturnsServiceItemUpdateRequest.md#runtime)
- [typeName](SalesReturnsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesReturnsServiceItemUpdateRequest.md#clone)
- [equals](SalesReturnsServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesReturnsServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesReturnsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesReturnsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesReturnsServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesReturnsServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesReturnsServiceItemUpdateRequest.md#tojson)
- [toJson](SalesReturnsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesReturnsServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesReturnsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesReturnsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesReturnsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;SalesReturnsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L578)

## Properties

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: int64 client_quantity = 15;

#### Defined in

[src/sales_returns_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L576)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: int64 client_uom_id = 14;

#### Defined in

[src/sales_returns_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L569)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/sales_returns_pb.ts:548](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L548)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 13;

#### Defined in

[src/sales_returns_pb.ts:562](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L562)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/sales_returns_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L555)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_returns_pb.ts:541](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L541)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L585)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L583)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnsServiceItemUpdateRequest"``

#### Defined in

[src/sales_returns_pb.ts:584](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L584)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

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

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:606](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L606)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_returns_pb.ts:594](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L594)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_returns_pb.ts:598](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L598)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_returns_pb.ts:602](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L602)
