[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceItemCreateRequest

# Class: PurchasesIndentsServiceItemCreateRequest

Describes the parameters required to add an item to a purchase indent

**`Generated`**

from message Genesis.PurchasesIndentsServiceItemCreateRequest

## Hierarchy

- `Message`<[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)\>

  ↳ **`PurchasesIndentsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceItemCreateRequest.md#constructor)

### Properties

- [deliveryDate](PurchasesIndentsServiceItemCreateRequest.md#deliverydate)
- [familyId](PurchasesIndentsServiceItemCreateRequest.md#familyid)
- [internalQuantity](PurchasesIndentsServiceItemCreateRequest.md#internalquantity)
- [purchaseIndentId](PurchasesIndentsServiceItemCreateRequest.md#purchaseindentid)
- [specifications](PurchasesIndentsServiceItemCreateRequest.md#specifications)
- [userComment](PurchasesIndentsServiceItemCreateRequest.md#usercomment)
- [fields](PurchasesIndentsServiceItemCreateRequest.md#fields)
- [runtime](PurchasesIndentsServiceItemCreateRequest.md#runtime)
- [typeName](PurchasesIndentsServiceItemCreateRequest.md#typename)

### Methods

- [clone](PurchasesIndentsServiceItemCreateRequest.md#clone)
- [equals](PurchasesIndentsServiceItemCreateRequest.md#equals)
- [fromBinary](PurchasesIndentsServiceItemCreateRequest.md#frombinary)
- [fromJson](PurchasesIndentsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceItemCreateRequest.md#fromjsonstring)
- [getType](PurchasesIndentsServiceItemCreateRequest.md#gettype)
- [toBinary](PurchasesIndentsServiceItemCreateRequest.md#tobinary)
- [toJSON](PurchasesIndentsServiceItemCreateRequest.md#tojson)
- [toJson](PurchasesIndentsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceItemCreateRequest.md#tojsonstring)
- [equals](PurchasesIndentsServiceItemCreateRequest.md#equals-1)
- [fromBinary](PurchasesIndentsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;PurchasesIndentsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:495](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L495)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/purchases_indents_pb.ts:486](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L486)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/purchases_indents_pb.ts:472](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L472)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/purchases_indents_pb.ts:479](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L479)

___

### purchaseIndentId

• **purchaseIndentId**: `bigint` = `protoInt64.zero`

Stores the purchase indent ID

**`Generated`**

from field: int64 purchase_indent_id = 10;

#### Defined in

[src/purchases_indents_pb.ts:465](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L465)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/purchases_indents_pb.ts:493](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L493)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_indents_pb.ts:458](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L458)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:502](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L502)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:500](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L500)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsServiceItemCreateRequest"``

#### Defined in

[src/purchases_indents_pb.ts:501](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L501)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

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

[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:523](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L523)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:511](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L511)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:515](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L515)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemCreateRequest`](PurchasesIndentsServiceItemCreateRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:519](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L519)
