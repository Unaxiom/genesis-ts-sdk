[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesItemsList

# Class: PurchasesEnquiriesItemsList

Describes the message consisting of the list of purchase enquiry items

**`Generated`**

from message Genesis.PurchasesEnquiriesItemsList

## Hierarchy

- `Message`<[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)\>

  ↳ **`PurchasesEnquiriesItemsList`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesItemsList.md#constructor)

### Properties

- [list](PurchasesEnquiriesItemsList.md#list)
- [fields](PurchasesEnquiriesItemsList.md#fields)
- [runtime](PurchasesEnquiriesItemsList.md#runtime)
- [typeName](PurchasesEnquiriesItemsList.md#typename)

### Methods

- [clone](PurchasesEnquiriesItemsList.md#clone)
- [equals](PurchasesEnquiriesItemsList.md#equals)
- [fromBinary](PurchasesEnquiriesItemsList.md#frombinary)
- [fromJson](PurchasesEnquiriesItemsList.md#fromjson)
- [fromJsonString](PurchasesEnquiriesItemsList.md#fromjsonstring)
- [getType](PurchasesEnquiriesItemsList.md#gettype)
- [toBinary](PurchasesEnquiriesItemsList.md#tobinary)
- [toJSON](PurchasesEnquiriesItemsList.md#tojson)
- [toJson](PurchasesEnquiriesItemsList.md#tojson-1)
- [toJsonString](PurchasesEnquiriesItemsList.md#tojsonstring)
- [equals](PurchasesEnquiriesItemsList.md#equals-1)
- [fromBinary](PurchasesEnquiriesItemsList.md#frombinary-1)
- [fromJson](PurchasesEnquiriesItemsList.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)\> |

#### Overrides

Message&lt;PurchasesEnquiriesItemsList\&gt;.constructor

#### Defined in

[src/purchases_enquiries_pb.ts:786](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L786)

## Properties

### list

• **list**: [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.PurchaseEnquiryItem list = 1;

#### Defined in

[src/purchases_enquiries_pb.ts:784](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L784)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L793)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries_pb.ts:791](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L791)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesEnquiriesItemsList"``

#### Defined in

[src/purchases_enquiries_pb.ts:792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L792)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md) \| `PlainMessage`<[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

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

[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md) \| `PlainMessage`<[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md) \| `PlainMessage`<[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries_pb.ts:809](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L809)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Defined in

[src/purchases_enquiries_pb.ts:797](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L797)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Defined in

[src/purchases_enquiries_pb.ts:801](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L801)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesItemsList`](PurchasesEnquiriesItemsList.md)

#### Defined in

[src/purchases_enquiries_pb.ts:805](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L805)
