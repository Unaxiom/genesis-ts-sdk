[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceEntityPaginationReq

# Class: SalesEnquiriesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.SalesEnquiriesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)\>

  ↳ **`SalesEnquiriesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](SalesEnquiriesServiceEntityPaginationReq.md#count)
- [entityUuid](SalesEnquiriesServiceEntityPaginationReq.md#entityuuid)
- [isActive](SalesEnquiriesServiceEntityPaginationReq.md#isactive)
- [offset](SalesEnquiriesServiceEntityPaginationReq.md#offset)
- [sortKey](SalesEnquiriesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](SalesEnquiriesServiceEntityPaginationReq.md#sortorder)
- [fields](SalesEnquiriesServiceEntityPaginationReq.md#fields)
- [runtime](SalesEnquiriesServiceEntityPaginationReq.md#runtime)
- [typeName](SalesEnquiriesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](SalesEnquiriesServiceEntityPaginationReq.md#clone)
- [equals](SalesEnquiriesServiceEntityPaginationReq.md#equals)
- [fromBinary](SalesEnquiriesServiceEntityPaginationReq.md#frombinary)
- [fromJson](SalesEnquiriesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](SalesEnquiriesServiceEntityPaginationReq.md#gettype)
- [toBinary](SalesEnquiriesServiceEntityPaginationReq.md#tobinary)
- [toJSON](SalesEnquiriesServiceEntityPaginationReq.md#tojson)
- [toJson](SalesEnquiriesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceEntityPaginationReq.md#tojsonstring)
- [equals](SalesEnquiriesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](SalesEnquiriesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;SalesEnquiriesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:1325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1325)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_enquiries_pb.ts:1295](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1295)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/sales_enquiries_pb.ts:1323](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1323)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_enquiries_pb.ts:1288](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1288)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_enquiries_pb.ts:1302](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1302)

___

### sortKey

• **sortKey**: [`SALES_ENQUIRY_SORT_KEY`](../enums/SALES_ENQUIRY_SORT_KEY.md) = `SALES_ENQUIRY_SORT_KEY.SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALES_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries_pb.ts:1316](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1316)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_enquiries_pb.ts:1309](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1309)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:1332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1332)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:1330](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1330)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesServiceEntityPaginationReq"``

#### Defined in

[src/sales_enquiries_pb.ts:1331](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1331)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

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

[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:1353](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1353)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1341)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1345](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1345)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceEntityPaginationReq`](SalesEnquiriesServiceEntityPaginationReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1349](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1349)
