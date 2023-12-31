[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServicePaginationResponse

# Class: LeavesRequestsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.LeavesRequestsServicePaginationResponse

## Hierarchy

- `Message`<[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)\>

  ↳ **`LeavesRequestsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServicePaginationResponse.md#constructor)

### Properties

- [count](LeavesRequestsServicePaginationResponse.md#count)
- [offset](LeavesRequestsServicePaginationResponse.md#offset)
- [payload](LeavesRequestsServicePaginationResponse.md#payload)
- [total](LeavesRequestsServicePaginationResponse.md#total)
- [fields](LeavesRequestsServicePaginationResponse.md#fields)
- [runtime](LeavesRequestsServicePaginationResponse.md#runtime)
- [typeName](LeavesRequestsServicePaginationResponse.md#typename)

### Methods

- [clone](LeavesRequestsServicePaginationResponse.md#clone)
- [equals](LeavesRequestsServicePaginationResponse.md#equals)
- [fromBinary](LeavesRequestsServicePaginationResponse.md#frombinary)
- [fromJson](LeavesRequestsServicePaginationResponse.md#fromjson)
- [fromJsonString](LeavesRequestsServicePaginationResponse.md#fromjsonstring)
- [getType](LeavesRequestsServicePaginationResponse.md#gettype)
- [toBinary](LeavesRequestsServicePaginationResponse.md#tobinary)
- [toJSON](LeavesRequestsServicePaginationResponse.md#tojson)
- [toJson](LeavesRequestsServicePaginationResponse.md#tojson-1)
- [toJsonString](LeavesRequestsServicePaginationResponse.md#tojsonstring)
- [equals](LeavesRequestsServicePaginationResponse.md#equals-1)
- [fromBinary](LeavesRequestsServicePaginationResponse.md#frombinary-1)
- [fromJson](LeavesRequestsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](LeavesRequestsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;LeavesRequestsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/leaves_requests_pb.ts:667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L667)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/leaves_requests_pb.ts:644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L644)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/leaves_requests_pb.ts:651](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L651)

___

### payload

• **payload**: [`LeaveRequest`](LeaveRequest.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.LeaveRequest payload = 4;

#### Defined in

[src/leaves_requests_pb.ts:665](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L665)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/leaves_requests_pb.ts:658](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L658)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L674)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests_pb.ts:672](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L672)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesRequestsServicePaginationResponse"``

#### Defined in

[src/leaves_requests_pb.ts:673](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L673)

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md) \| `PlainMessage`<[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

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

[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md) \| `PlainMessage`<[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md) \| `PlainMessage`<[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests_pb.ts:693](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L693)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Defined in

[src/leaves_requests_pb.ts:681](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L681)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Defined in

[src/leaves_requests_pb.ts:685](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L685)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServicePaginationResponse`](LeavesRequestsServicePaginationResponse.md)

#### Defined in

[src/leaves_requests_pb.ts:689](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L689)
