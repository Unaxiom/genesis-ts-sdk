[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServicePaginationReq

# Class: QuotationsRequestsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.QuotationsRequestsServicePaginationReq

## Hierarchy

- `Message`<[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)\>

  ↳ **`QuotationsRequestsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServicePaginationReq.md#constructor)

### Properties

- [count](QuotationsRequestsServicePaginationReq.md#count)
- [isActive](QuotationsRequestsServicePaginationReq.md#isactive)
- [offset](QuotationsRequestsServicePaginationReq.md#offset)
- [sortKey](QuotationsRequestsServicePaginationReq.md#sortkey)
- [sortOrder](QuotationsRequestsServicePaginationReq.md#sortorder)
- [status](QuotationsRequestsServicePaginationReq.md#status)
- [fields](QuotationsRequestsServicePaginationReq.md#fields)
- [runtime](QuotationsRequestsServicePaginationReq.md#runtime)
- [typeName](QuotationsRequestsServicePaginationReq.md#typename)

### Methods

- [clone](QuotationsRequestsServicePaginationReq.md#clone)
- [equals](QuotationsRequestsServicePaginationReq.md#equals)
- [fromBinary](QuotationsRequestsServicePaginationReq.md#frombinary)
- [fromJson](QuotationsRequestsServicePaginationReq.md#fromjson)
- [fromJsonString](QuotationsRequestsServicePaginationReq.md#fromjsonstring)
- [getType](QuotationsRequestsServicePaginationReq.md#gettype)
- [toBinary](QuotationsRequestsServicePaginationReq.md#tobinary)
- [toJSON](QuotationsRequestsServicePaginationReq.md#tojson)
- [toJson](QuotationsRequestsServicePaginationReq.md#tojson-1)
- [toJsonString](QuotationsRequestsServicePaginationReq.md#tojsonstring)
- [equals](QuotationsRequestsServicePaginationReq.md#equals-1)
- [fromBinary](QuotationsRequestsServicePaginationReq.md#frombinary-1)
- [fromJson](QuotationsRequestsServicePaginationReq.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServicePaginationReq\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:1123](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1123)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/quotations_requests_pb.ts:1093](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1093)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/quotations_requests_pb.ts:1086](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1086)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/quotations_requests_pb.ts:1100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1100)

___

### sortKey

• **sortKey**: [`QUOTATION_REQUEST_SORT_KEY`](../enums/QUOTATION_REQUEST_SORT_KEY.md) = `QUOTATION_REQUEST_SORT_KEY.QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QUOTATION_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_requests_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1114)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_requests_pb.ts:1107](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1107)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this quotation request

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/quotations_requests_pb.ts:1121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1121)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:1130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1130)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:1128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1128)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServicePaginationReq"``

#### Defined in

[src/quotations_requests_pb.ts:1129](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1129)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md) \| `PlainMessage`<[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

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

[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md) \| `PlainMessage`<[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md) \| `PlainMessage`<[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:1151](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1151)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1139](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1139)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1143](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1143)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginationReq`](QuotationsRequestsServicePaginationReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1147)
