[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceEntityPaginationReq

# Class: QuotationsResponsesServiceEntityPaginationReq

Describes a pagination response to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.QuotationsResponsesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)\>

  ↳ **`QuotationsResponsesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](QuotationsResponsesServiceEntityPaginationReq.md#count)
- [entityUuid](QuotationsResponsesServiceEntityPaginationReq.md#entityuuid)
- [isActive](QuotationsResponsesServiceEntityPaginationReq.md#isactive)
- [offset](QuotationsResponsesServiceEntityPaginationReq.md#offset)
- [sortKey](QuotationsResponsesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](QuotationsResponsesServiceEntityPaginationReq.md#sortorder)
- [fields](QuotationsResponsesServiceEntityPaginationReq.md#fields)
- [runtime](QuotationsResponsesServiceEntityPaginationReq.md#runtime)
- [typeName](QuotationsResponsesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](QuotationsResponsesServiceEntityPaginationReq.md#clone)
- [equals](QuotationsResponsesServiceEntityPaginationReq.md#equals)
- [fromBinary](QuotationsResponsesServiceEntityPaginationReq.md#frombinary)
- [fromJson](QuotationsResponsesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](QuotationsResponsesServiceEntityPaginationReq.md#gettype)
- [toBinary](QuotationsResponsesServiceEntityPaginationReq.md#tobinary)
- [toJSON](QuotationsResponsesServiceEntityPaginationReq.md#tojson)
- [toJson](QuotationsResponsesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceEntityPaginationReq.md#tojsonstring)
- [equals](QuotationsResponsesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](QuotationsResponsesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;QuotationsResponsesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:1320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1320)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/quotations_responses_pb.ts:1290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1290)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/quotations_responses_pb.ts:1318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1318)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/quotations_responses_pb.ts:1283](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1283)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/quotations_responses_pb.ts:1297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1297)

___

### sortKey

• **sortKey**: [`QUOTATION_RESPONSE_SORT_KEY`](../enums/QUOTATION_RESPONSE_SORT_KEY.md) = `QUOTATION_RESPONSE_SORT_KEY.QUOTATION_RESPONSE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QUOTATION_RESPONSE_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_responses_pb.ts:1311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1311)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_responses_pb.ts:1304](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1304)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:1327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1327)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:1325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1325)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsResponsesServiceEntityPaginationReq"``

#### Defined in

[src/quotations_responses_pb.ts:1326](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1326)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md) \| `PlainMessage`<[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

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

[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md) \| `PlainMessage`<[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md) \| `PlainMessage`<[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:1348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1348)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Defined in

[src/quotations_responses_pb.ts:1336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1336)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Defined in

[src/quotations_responses_pb.ts:1340](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1340)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceEntityPaginationReq`](QuotationsResponsesServiceEntityPaginationReq.md)

#### Defined in

[src/quotations_responses_pb.ts:1344](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1344)
