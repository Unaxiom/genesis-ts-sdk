[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServicePaginationResponse

# Class: SalesEnquiriesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.SalesEnquiriesServicePaginationResponse

## Hierarchy

- `Message`<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\>

  ↳ **`SalesEnquiriesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServicePaginationResponse.md#constructor)

### Properties

- [count](SalesEnquiriesServicePaginationResponse.md#count)
- [offset](SalesEnquiriesServicePaginationResponse.md#offset)
- [payload](SalesEnquiriesServicePaginationResponse.md#payload)
- [total](SalesEnquiriesServicePaginationResponse.md#total)
- [fields](SalesEnquiriesServicePaginationResponse.md#fields)
- [runtime](SalesEnquiriesServicePaginationResponse.md#runtime)
- [typeName](SalesEnquiriesServicePaginationResponse.md#typename)

### Methods

- [clone](SalesEnquiriesServicePaginationResponse.md#clone)
- [equals](SalesEnquiriesServicePaginationResponse.md#equals)
- [fromBinary](SalesEnquiriesServicePaginationResponse.md#frombinary)
- [fromJson](SalesEnquiriesServicePaginationResponse.md#fromjson)
- [fromJsonString](SalesEnquiriesServicePaginationResponse.md#fromjsonstring)
- [getType](SalesEnquiriesServicePaginationResponse.md#gettype)
- [toBinary](SalesEnquiriesServicePaginationResponse.md#tobinary)
- [toJSON](SalesEnquiriesServicePaginationResponse.md#tojson)
- [toJson](SalesEnquiriesServicePaginationResponse.md#tojson-1)
- [toJsonString](SalesEnquiriesServicePaginationResponse.md#tojsonstring)
- [equals](SalesEnquiriesServicePaginationResponse.md#equals-1)
- [fromBinary](SalesEnquiriesServicePaginationResponse.md#frombinary-1)
- [fromJson](SalesEnquiriesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;SalesEnquiriesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1245)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/sales_enquiries_pb.ts:1222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1222)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/sales_enquiries_pb.ts:1229](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1229)

___

### payload

• **payload**: [`SalesEnquiry`](SalesEnquiry.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.SalesEnquiry payload = 4;

#### Defined in

[src/sales_enquiries_pb.ts:1243](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1243)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/sales_enquiries_pb.ts:1236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1236)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1252)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:1250](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1250)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesServicePaginationResponse"``

#### Defined in

[src/sales_enquiries_pb.ts:1251](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1251)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md) \| `PlainMessage`<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

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

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md) \| `PlainMessage`<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md) \| `PlainMessage`<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:1271](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1271)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/sales_enquiries_pb.ts:1259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1259)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/sales_enquiries_pb.ts:1263](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1263)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Defined in

[src/sales_enquiries_pb.ts:1267](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1267)
