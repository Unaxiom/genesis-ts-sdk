[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceEntityPaginationReq

# Class: PurchasesEnquiriesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.PurchasesEnquiriesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)\>

  ↳ **`PurchasesEnquiriesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](PurchasesEnquiriesServiceEntityPaginationReq.md#count)
- [entityUuid](PurchasesEnquiriesServiceEntityPaginationReq.md#entityuuid)
- [isActive](PurchasesEnquiriesServiceEntityPaginationReq.md#isactive)
- [offset](PurchasesEnquiriesServiceEntityPaginationReq.md#offset)
- [sortKey](PurchasesEnquiriesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](PurchasesEnquiriesServiceEntityPaginationReq.md#sortorder)
- [fields](PurchasesEnquiriesServiceEntityPaginationReq.md#fields)
- [runtime](PurchasesEnquiriesServiceEntityPaginationReq.md#runtime)
- [typeName](PurchasesEnquiriesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceEntityPaginationReq.md#clone)
- [equals](PurchasesEnquiriesServiceEntityPaginationReq.md#equals)
- [fromBinary](PurchasesEnquiriesServiceEntityPaginationReq.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceEntityPaginationReq.md#gettype)
- [toBinary](PurchasesEnquiriesServiceEntityPaginationReq.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceEntityPaginationReq.md#tojson)
- [toJson](PurchasesEnquiriesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceEntityPaginationReq.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;PurchasesEnquiriesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/purchases_enquiries_pb.ts:1061](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1061)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_enquiries_pb.ts:1031](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1031)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/purchases_enquiries_pb.ts:1059](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1059)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_enquiries_pb.ts:1024](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1024)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_enquiries_pb.ts:1038](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1038)

___

### sortKey

• **sortKey**: [`PURCHASE_ENQUIRY_SORT_KEY`](../enums/PURCHASE_ENQUIRY_SORT_KEY.md) = `PURCHASE_ENQUIRY_SORT_KEY.PURCHASE_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_enquiries_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1052)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_enquiries_pb.ts:1045](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1045)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries_pb.ts:1068](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1068)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries_pb.ts:1066](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1066)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesEnquiriesServiceEntityPaginationReq"``

#### Defined in

[src/purchases_enquiries_pb.ts:1067](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1067)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

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

[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries_pb.ts:1089](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1089)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:1077](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1077)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:1081](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1081)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceEntityPaginationReq`](PurchasesEnquiriesServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:1085](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1085)
