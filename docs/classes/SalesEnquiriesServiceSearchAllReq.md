[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceSearchAllReq

# Class: SalesEnquiriesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.SalesEnquiriesServiceSearchAllReq

## Hierarchy

- `Message`<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\>

  ↳ **`SalesEnquiriesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceSearchAllReq.md#constructor)

### Properties

- [buyerClientId](SalesEnquiriesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](SalesEnquiriesServiceSearchAllReq.md#consigneeclientid)
- [count](SalesEnquiriesServiceSearchAllReq.md#count)
- [entityUuid](SalesEnquiriesServiceSearchAllReq.md#entityuuid)
- [isActive](SalesEnquiriesServiceSearchAllReq.md#isactive)
- [offset](SalesEnquiriesServiceSearchAllReq.md#offset)
- [searchKey](SalesEnquiriesServiceSearchAllReq.md#searchkey)
- [sortKey](SalesEnquiriesServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesEnquiriesServiceSearchAllReq.md#sortorder)
- [status](SalesEnquiriesServiceSearchAllReq.md#status)
- [fields](SalesEnquiriesServiceSearchAllReq.md#fields)
- [runtime](SalesEnquiriesServiceSearchAllReq.md#runtime)
- [typeName](SalesEnquiriesServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesEnquiriesServiceSearchAllReq.md#clone)
- [equals](SalesEnquiriesServiceSearchAllReq.md#equals)
- [fromBinary](SalesEnquiriesServiceSearchAllReq.md#frombinary)
- [fromJson](SalesEnquiriesServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesEnquiriesServiceSearchAllReq.md#gettype)
- [toBinary](SalesEnquiriesServiceSearchAllReq.md#tobinary)
- [toJSON](SalesEnquiriesServiceSearchAllReq.md#tojson)
- [toJson](SalesEnquiriesServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceSearchAllReq.md#tojsonstring)
- [equals](SalesEnquiriesServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesEnquiriesServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;SalesEnquiriesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:1637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1637)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: int64 buyer_client_id = 23;

#### Defined in

[src/sales_enquiries_pb.ts:1635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1635)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: int64 consignee_client_id = 22;

#### Defined in

[src/sales_enquiries_pb.ts:1628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1628)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_enquiries_pb.ts:1579](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1579)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/sales_enquiries_pb.ts:1607](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1607)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_enquiries_pb.ts:1572](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1572)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_enquiries_pb.ts:1586](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1586)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/sales_enquiries_pb.ts:1621](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1621)

___

### sortKey

• **sortKey**: [`SALES_ENQUIRY_SORT_KEY`](../enums/SALES_ENQUIRY_SORT_KEY.md) = `SALES_ENQUIRY_SORT_KEY.SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALES_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries_pb.ts:1600](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1600)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_enquiries_pb.ts:1593](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1593)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_enquiries_pb.ts:1614](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1614)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:1644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1644)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:1642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1642)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesServiceSearchAllReq"``

#### Defined in

[src/sales_enquiries_pb.ts:1643](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1643)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

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

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:1669](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1669)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1657)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1661)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1665](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1665)
