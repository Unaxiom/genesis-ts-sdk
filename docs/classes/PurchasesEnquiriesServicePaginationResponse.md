[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServicePaginationResponse

# Class: PurchasesEnquiriesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.PurchasesEnquiriesServicePaginationResponse

## Hierarchy

- `Message`<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\>

  ↳ **`PurchasesEnquiriesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServicePaginationResponse.md#constructor)

### Properties

- [count](PurchasesEnquiriesServicePaginationResponse.md#count)
- [offset](PurchasesEnquiriesServicePaginationResponse.md#offset)
- [payload](PurchasesEnquiriesServicePaginationResponse.md#payload)
- [total](PurchasesEnquiriesServicePaginationResponse.md#total)
- [fields](PurchasesEnquiriesServicePaginationResponse.md#fields)
- [runtime](PurchasesEnquiriesServicePaginationResponse.md#runtime)
- [typeName](PurchasesEnquiriesServicePaginationResponse.md#typename)

### Methods

- [clone](PurchasesEnquiriesServicePaginationResponse.md#clone)
- [equals](PurchasesEnquiriesServicePaginationResponse.md#equals)
- [fromBinary](PurchasesEnquiriesServicePaginationResponse.md#frombinary)
- [fromJson](PurchasesEnquiriesServicePaginationResponse.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServicePaginationResponse.md#fromjsonstring)
- [getType](PurchasesEnquiriesServicePaginationResponse.md#gettype)
- [toBinary](PurchasesEnquiriesServicePaginationResponse.md#tobinary)
- [toJSON](PurchasesEnquiriesServicePaginationResponse.md#tojson)
- [toJson](PurchasesEnquiriesServicePaginationResponse.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServicePaginationResponse.md#tojsonstring)
- [equals](PurchasesEnquiriesServicePaginationResponse.md#equals-1)
- [fromBinary](PurchasesEnquiriesServicePaginationResponse.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;PurchasesEnquiriesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/purchases_enquiries_pb.ts:981](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L981)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/purchases_enquiries_pb.ts:958](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L958)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/purchases_enquiries_pb.ts:965](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L965)

___

### payload

• **payload**: [`PurchaseEnquiry`](PurchaseEnquiry.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.PurchaseEnquiry payload = 4;

#### Defined in

[src/purchases_enquiries_pb.ts:979](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L979)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/purchases_enquiries_pb.ts:972](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L972)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries_pb.ts:988](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L988)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries_pb.ts:986](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L986)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesEnquiriesServicePaginationResponse"``

#### Defined in

[src/purchases_enquiries_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L987)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md) \| `PlainMessage`<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

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

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md) \| `PlainMessage`<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md) \| `PlainMessage`<[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries_pb.ts:1007](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1007)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/purchases_enquiries_pb.ts:995](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L995)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/purchases_enquiries_pb.ts:999](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L999)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationResponse`](PurchasesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/purchases_enquiries_pb.ts:1003](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1003)
