[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceEntityPaginationReq

# Class: QuotationsRequestsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.QuotationsRequestsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)\>

  ↳ **`QuotationsRequestsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](QuotationsRequestsServiceEntityPaginationReq.md#count)
- [entityUuid](QuotationsRequestsServiceEntityPaginationReq.md#entityuuid)
- [isActive](QuotationsRequestsServiceEntityPaginationReq.md#isactive)
- [offset](QuotationsRequestsServiceEntityPaginationReq.md#offset)
- [sortKey](QuotationsRequestsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](QuotationsRequestsServiceEntityPaginationReq.md#sortorder)
- [fields](QuotationsRequestsServiceEntityPaginationReq.md#fields)
- [runtime](QuotationsRequestsServiceEntityPaginationReq.md#runtime)
- [typeName](QuotationsRequestsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](QuotationsRequestsServiceEntityPaginationReq.md#clone)
- [equals](QuotationsRequestsServiceEntityPaginationReq.md#equals)
- [fromBinary](QuotationsRequestsServiceEntityPaginationReq.md#frombinary)
- [fromJson](QuotationsRequestsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](QuotationsRequestsServiceEntityPaginationReq.md#gettype)
- [toBinary](QuotationsRequestsServiceEntityPaginationReq.md#tobinary)
- [toJSON](QuotationsRequestsServiceEntityPaginationReq.md#tojson)
- [toJson](QuotationsRequestsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceEntityPaginationReq.md#tojsonstring)
- [equals](QuotationsRequestsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](QuotationsRequestsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:1271](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1271)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/quotations_requests_pb.ts:1241](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1241)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/quotations_requests_pb.ts:1269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1269)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/quotations_requests_pb.ts:1234](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1234)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/quotations_requests_pb.ts:1248](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1248)

___

### sortKey

• **sortKey**: [`QUOTATION_REQUEST_SORT_KEY`](../enums/QUOTATION_REQUEST_SORT_KEY.md) = `QUOTATION_REQUEST_SORT_KEY.QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QUOTATION_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_requests_pb.ts:1262](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1262)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_requests_pb.ts:1255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1255)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:1278](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1278)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:1276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1276)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServiceEntityPaginationReq"``

#### Defined in

[src/quotations_requests_pb.ts:1277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1277)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

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

[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:1299](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1299)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1287](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1287)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1291](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1291)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceEntityPaginationReq`](QuotationsRequestsServiceEntityPaginationReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1295](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1295)
