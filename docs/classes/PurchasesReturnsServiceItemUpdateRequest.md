[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceItemUpdateRequest

# Class: PurchasesReturnsServiceItemUpdateRequest

Describes the parameters required to update an item in a purchase return

**`Generated`**

from message Genesis.PurchasesReturnsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)\>

  ↳ **`PurchasesReturnsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](PurchasesReturnsServiceItemUpdateRequest.md#id)
- [internalQuantity](PurchasesReturnsServiceItemUpdateRequest.md#internalquantity)
- [itemHash](PurchasesReturnsServiceItemUpdateRequest.md#itemhash)
- [userComment](PurchasesReturnsServiceItemUpdateRequest.md#usercomment)
- [vendorQuantity](PurchasesReturnsServiceItemUpdateRequest.md#vendorquantity)
- [vendorUomId](PurchasesReturnsServiceItemUpdateRequest.md#vendoruomid)
- [fields](PurchasesReturnsServiceItemUpdateRequest.md#fields)
- [runtime](PurchasesReturnsServiceItemUpdateRequest.md#runtime)
- [typeName](PurchasesReturnsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](PurchasesReturnsServiceItemUpdateRequest.md#clone)
- [equals](PurchasesReturnsServiceItemUpdateRequest.md#equals)
- [fromBinary](PurchasesReturnsServiceItemUpdateRequest.md#frombinary)
- [fromJson](PurchasesReturnsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](PurchasesReturnsServiceItemUpdateRequest.md#gettype)
- [toBinary](PurchasesReturnsServiceItemUpdateRequest.md#tobinary)
- [toJSON](PurchasesReturnsServiceItemUpdateRequest.md#tojson)
- [toJson](PurchasesReturnsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceItemUpdateRequest.md#tojsonstring)
- [equals](PurchasesReturnsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](PurchasesReturnsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;PurchasesReturnsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/purchases_returns_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L578)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/purchases_returns_pb.ts:548](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L548)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 13;

#### Defined in

[src/purchases_returns_pb.ts:562](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L562)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/purchases_returns_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L555)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_returns_pb.ts:541](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L541)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in vendor's unit of material

**`Generated`**

from field: int64 vendor_quantity = 15;

#### Defined in

[src/purchases_returns_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L576)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: int64 vendor_uom_id = 14;

#### Defined in

[src/purchases_returns_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L569)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L585)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L583)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesReturnsServiceItemUpdateRequest"``

#### Defined in

[src/purchases_returns_pb.ts:584](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L584)

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`<[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

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

[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`<[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`<[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns_pb.ts:606](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L606)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_returns_pb.ts:594](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L594)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_returns_pb.ts:598](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L598)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceItemUpdateRequest`](PurchasesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_returns_pb.ts:602](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L602)
