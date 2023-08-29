[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceMultipleItemsSingleton

# Class: PurchasesIndentsServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a purchase indent

**`Generated`**

from message Genesis.PurchasesIndentsServiceMultipleItemsSingleton

## Hierarchy

- `Message`<[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)\>

  ↳ **`PurchasesIndentsServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceMultipleItemsSingleton.md#constructor)

### Properties

- [deliveryDate](PurchasesIndentsServiceMultipleItemsSingleton.md#deliverydate)
- [familyId](PurchasesIndentsServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](PurchasesIndentsServiceMultipleItemsSingleton.md#internalquantity)
- [specifications](PurchasesIndentsServiceMultipleItemsSingleton.md#specifications)
- [fields](PurchasesIndentsServiceMultipleItemsSingleton.md#fields)
- [runtime](PurchasesIndentsServiceMultipleItemsSingleton.md#runtime)
- [typeName](PurchasesIndentsServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](PurchasesIndentsServiceMultipleItemsSingleton.md#clone)
- [equals](PurchasesIndentsServiceMultipleItemsSingleton.md#equals)
- [fromBinary](PurchasesIndentsServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](PurchasesIndentsServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](PurchasesIndentsServiceMultipleItemsSingleton.md#gettype)
- [toBinary](PurchasesIndentsServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](PurchasesIndentsServiceMultipleItemsSingleton.md#tojson)
- [toJson](PurchasesIndentsServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](PurchasesIndentsServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](PurchasesIndentsServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceMultipleItemsSingleton**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)\> |

#### Overrides

Message&lt;PurchasesIndentsServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:563](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L563)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/purchases_indents_pb.ts:554](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L554)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/purchases_indents_pb.ts:540](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L540)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/purchases_indents_pb.ts:547](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L547)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/purchases_indents_pb.ts:561](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L561)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:570](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L570)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:568](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L568)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsServiceMultipleItemsSingleton"``

#### Defined in

[src/purchases_indents_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L569)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md) \| `PlainMessage`<[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

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

[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md) \| `PlainMessage`<[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md) \| `PlainMessage`<[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:589](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L589)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Defined in

[src/purchases_indents_pb.ts:577](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L577)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Defined in

[src/purchases_indents_pb.ts:581](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L581)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)

#### Defined in

[src/purchases_indents_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L585)
