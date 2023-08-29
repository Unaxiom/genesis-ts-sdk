[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServicePaginationResponse

# Class: QuotationsResponsesServicePaginationResponse

Describes the response to a pagination response

**`Generated`**

from message Genesis.QuotationsResponsesServicePaginationResponse

## Hierarchy

- `Message`<[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)\>

  ↳ **`QuotationsResponsesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServicePaginationResponse.md#constructor)

### Properties

- [count](QuotationsResponsesServicePaginationResponse.md#count)
- [offset](QuotationsResponsesServicePaginationResponse.md#offset)
- [payload](QuotationsResponsesServicePaginationResponse.md#payload)
- [total](QuotationsResponsesServicePaginationResponse.md#total)
- [fields](QuotationsResponsesServicePaginationResponse.md#fields)
- [runtime](QuotationsResponsesServicePaginationResponse.md#runtime)
- [typeName](QuotationsResponsesServicePaginationResponse.md#typename)

### Methods

- [clone](QuotationsResponsesServicePaginationResponse.md#clone)
- [equals](QuotationsResponsesServicePaginationResponse.md#equals)
- [fromBinary](QuotationsResponsesServicePaginationResponse.md#frombinary)
- [fromJson](QuotationsResponsesServicePaginationResponse.md#fromjson)
- [fromJsonString](QuotationsResponsesServicePaginationResponse.md#fromjsonstring)
- [getType](QuotationsResponsesServicePaginationResponse.md#gettype)
- [toBinary](QuotationsResponsesServicePaginationResponse.md#tobinary)
- [toJSON](QuotationsResponsesServicePaginationResponse.md#tojson)
- [toJson](QuotationsResponsesServicePaginationResponse.md#tojson-1)
- [toJsonString](QuotationsResponsesServicePaginationResponse.md#tojsonstring)
- [equals](QuotationsResponsesServicePaginationResponse.md#equals-1)
- [fromBinary](QuotationsResponsesServicePaginationResponse.md#frombinary-1)
- [fromJson](QuotationsResponsesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;QuotationsResponsesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:1240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1240)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/quotations_responses_pb.ts:1217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1217)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination response

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/quotations_responses_pb.ts:1224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1224)

___

### payload

• **payload**: [`QuotationResponse`](QuotationResponse.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.QuotationResponse payload = 4;

#### Defined in

[src/quotations_responses_pb.ts:1238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1238)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/quotations_responses_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1231)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:1247](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1247)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1245)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsResponsesServicePaginationResponse"``

#### Defined in

[src/quotations_responses_pb.ts:1246](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1246)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md) \| `PlainMessage`<[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

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

[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md) \| `PlainMessage`<[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md) \| `PlainMessage`<[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:1266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1266)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Defined in

[src/quotations_responses_pb.ts:1254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1254)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Defined in

[src/quotations_responses_pb.ts:1258](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1258)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServicePaginationResponse`](QuotationsResponsesServicePaginationResponse.md)

#### Defined in

[src/quotations_responses_pb.ts:1262](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1262)
