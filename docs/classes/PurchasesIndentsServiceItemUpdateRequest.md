[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceItemUpdateRequest

# Class: PurchasesIndentsServiceItemUpdateRequest

Describes the parameters required to update an item in a purchase indent

**`Generated`**

from message Genesis.PurchasesIndentsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\>

  ↳ **`PurchasesIndentsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](PurchasesIndentsServiceItemUpdateRequest.md#deliverydate)
- [id](PurchasesIndentsServiceItemUpdateRequest.md#id)
- [internalQuantity](PurchasesIndentsServiceItemUpdateRequest.md#internalquantity)
- [specifications](PurchasesIndentsServiceItemUpdateRequest.md#specifications)
- [userComment](PurchasesIndentsServiceItemUpdateRequest.md#usercomment)
- [fields](PurchasesIndentsServiceItemUpdateRequest.md#fields)
- [runtime](PurchasesIndentsServiceItemUpdateRequest.md#runtime)
- [typeName](PurchasesIndentsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](PurchasesIndentsServiceItemUpdateRequest.md#clone)
- [equals](PurchasesIndentsServiceItemUpdateRequest.md#equals)
- [fromBinary](PurchasesIndentsServiceItemUpdateRequest.md#frombinary)
- [fromJson](PurchasesIndentsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](PurchasesIndentsServiceItemUpdateRequest.md#gettype)
- [toBinary](PurchasesIndentsServiceItemUpdateRequest.md#tobinary)
- [toJSON](PurchasesIndentsServiceItemUpdateRequest.md#tojson)
- [toJson](PurchasesIndentsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceItemUpdateRequest.md#tojsonstring)
- [equals](PurchasesIndentsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](PurchasesIndentsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;PurchasesIndentsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:694](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L694)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/purchases_indents_pb.ts:685](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L685)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/purchases_indents_pb.ts:671](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L671)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/purchases_indents_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L678)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/purchases_indents_pb.ts:692](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L692)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_indents_pb.ts:664](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L664)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:701](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L701)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L699)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsServiceItemUpdateRequest"``

#### Defined in

[src/purchases_indents_pb.ts:700](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L700)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

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

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:721](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L721)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L709)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L713)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:717](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L717)
