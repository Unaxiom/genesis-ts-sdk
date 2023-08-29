[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceSearchAllReq

# Class: QuotationsRequestsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.QuotationsRequestsServiceSearchAllReq

## Hierarchy

- `Message`<[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)\>

  ↳ **`QuotationsRequestsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceSearchAllReq.md#constructor)

### Properties

- [count](QuotationsRequestsServiceSearchAllReq.md#count)
- [entityUuid](QuotationsRequestsServiceSearchAllReq.md#entityuuid)
- [isActive](QuotationsRequestsServiceSearchAllReq.md#isactive)
- [offset](QuotationsRequestsServiceSearchAllReq.md#offset)
- [searchKey](QuotationsRequestsServiceSearchAllReq.md#searchkey)
- [sortKey](QuotationsRequestsServiceSearchAllReq.md#sortkey)
- [sortOrder](QuotationsRequestsServiceSearchAllReq.md#sortorder)
- [status](QuotationsRequestsServiceSearchAllReq.md#status)
- [fields](QuotationsRequestsServiceSearchAllReq.md#fields)
- [runtime](QuotationsRequestsServiceSearchAllReq.md#runtime)
- [typeName](QuotationsRequestsServiceSearchAllReq.md#typename)

### Methods

- [clone](QuotationsRequestsServiceSearchAllReq.md#clone)
- [equals](QuotationsRequestsServiceSearchAllReq.md#equals)
- [fromBinary](QuotationsRequestsServiceSearchAllReq.md#frombinary)
- [fromJson](QuotationsRequestsServiceSearchAllReq.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceSearchAllReq.md#fromjsonstring)
- [getType](QuotationsRequestsServiceSearchAllReq.md#gettype)
- [toBinary](QuotationsRequestsServiceSearchAllReq.md#tobinary)
- [toJSON](QuotationsRequestsServiceSearchAllReq.md#tojson)
- [toJson](QuotationsRequestsServiceSearchAllReq.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceSearchAllReq.md#tojsonstring)
- [equals](QuotationsRequestsServiceSearchAllReq.md#equals-1)
- [fromBinary](QuotationsRequestsServiceSearchAllReq.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:1553](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1553)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/quotations_requests_pb.ts:1509](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1509)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/quotations_requests_pb.ts:1537](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1537)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/quotations_requests_pb.ts:1502](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1502)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/quotations_requests_pb.ts:1516](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1516)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/quotations_requests_pb.ts:1551](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1551)

___

### sortKey

• **sortKey**: [`QUOTATION_REQUEST_SORT_KEY`](../enums/QUOTATION_REQUEST_SORT_KEY.md) = `QUOTATION_REQUEST_SORT_KEY.QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QUOTATION_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_requests_pb.ts:1530](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1530)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_requests_pb.ts:1523](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1523)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/quotations_requests_pb.ts:1544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1544)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:1560](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1560)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:1558](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1558)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServiceSearchAllReq"``

#### Defined in

[src/quotations_requests_pb.ts:1559](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1559)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

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

[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:1583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1583)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1571](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1571)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1575](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1575)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceSearchAllReq`](QuotationsRequestsServiceSearchAllReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1579](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1579)
