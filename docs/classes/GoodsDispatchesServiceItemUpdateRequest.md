[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceItemUpdateRequest

# Class: GoodsDispatchesServiceItemUpdateRequest

Describes the parameters required to update an item in a goods dispatch

**`Generated`**

from message Genesis.GoodsDispatchesServiceItemUpdateRequest

## Hierarchy

- `Message`<[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)\>

  ↳ **`GoodsDispatchesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](GoodsDispatchesServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](GoodsDispatchesServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](GoodsDispatchesServiceItemUpdateRequest.md#clientuomid)
- [id](GoodsDispatchesServiceItemUpdateRequest.md#id)
- [internalQuantity](GoodsDispatchesServiceItemUpdateRequest.md#internalquantity)
- [itemHash](GoodsDispatchesServiceItemUpdateRequest.md#itemhash)
- [userComment](GoodsDispatchesServiceItemUpdateRequest.md#usercomment)
- [fields](GoodsDispatchesServiceItemUpdateRequest.md#fields)
- [runtime](GoodsDispatchesServiceItemUpdateRequest.md#runtime)
- [typeName](GoodsDispatchesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceItemUpdateRequest.md#clone)
- [equals](GoodsDispatchesServiceItemUpdateRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceItemUpdateRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceItemUpdateRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceItemUpdateRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceItemUpdateRequest.md#tojson)
- [toJson](GoodsDispatchesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceItemUpdateRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;GoodsDispatchesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:651](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L651)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/goods_dispatches_pb.ts:649](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L649)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: int64 client_quantity = 15;

#### Defined in

[src/goods_dispatches_pb.ts:642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L642)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: int64 client_uom_id = 14;

#### Defined in

[src/goods_dispatches_pb.ts:635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L635)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/goods_dispatches_pb.ts:614](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L614)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 13;

#### Defined in

[src/goods_dispatches_pb.ts:628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L628)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/goods_dispatches_pb.ts:621](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L621)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_dispatches_pb.ts:607](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L607)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:658](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L658)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L656)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesServiceItemUpdateRequest"``

#### Defined in

[src/goods_dispatches_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L657)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

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

[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:680](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L680)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:668](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L668)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:672](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L672)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemUpdateRequest`](GoodsDispatchesServiceItemUpdateRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:676](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L676)
