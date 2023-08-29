[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServicePaginationReq

# Class: PurchasesEnquiriesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.PurchasesEnquiriesServicePaginationReq

## Hierarchy

- `Message`<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\>

  ↳ **`PurchasesEnquiriesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServicePaginationReq.md#constructor)

### Properties

- [count](PurchasesEnquiriesServicePaginationReq.md#count)
- [isActive](PurchasesEnquiriesServicePaginationReq.md#isactive)
- [offset](PurchasesEnquiriesServicePaginationReq.md#offset)
- [sortKey](PurchasesEnquiriesServicePaginationReq.md#sortkey)
- [sortOrder](PurchasesEnquiriesServicePaginationReq.md#sortorder)
- [status](PurchasesEnquiriesServicePaginationReq.md#status)
- [fields](PurchasesEnquiriesServicePaginationReq.md#fields)
- [runtime](PurchasesEnquiriesServicePaginationReq.md#runtime)
- [typeName](PurchasesEnquiriesServicePaginationReq.md#typename)

### Methods

- [clone](PurchasesEnquiriesServicePaginationReq.md#clone)
- [equals](PurchasesEnquiriesServicePaginationReq.md#equals)
- [fromBinary](PurchasesEnquiriesServicePaginationReq.md#frombinary)
- [fromJson](PurchasesEnquiriesServicePaginationReq.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServicePaginationReq.md#fromjsonstring)
- [getType](PurchasesEnquiriesServicePaginationReq.md#gettype)
- [toBinary](PurchasesEnquiriesServicePaginationReq.md#tobinary)
- [toJSON](PurchasesEnquiriesServicePaginationReq.md#tojson)
- [toJson](PurchasesEnquiriesServicePaginationReq.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServicePaginationReq.md#tojsonstring)
- [equals](PurchasesEnquiriesServicePaginationReq.md#equals-1)
- [fromBinary](PurchasesEnquiriesServicePaginationReq.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServicePaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\> |

#### Overrides

Message&lt;PurchasesEnquiriesServicePaginationReq\&gt;.constructor

#### Defined in

[src/purchases_enquiries_pb.ts:913](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L913)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_enquiries_pb.ts:883](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L883)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_enquiries_pb.ts:876](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L876)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_enquiries_pb.ts:890](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L890)

___

### sortKey

• **sortKey**: [`PURCHASE_ENQUIRY_SORT_KEY`](../enums/PURCHASE_ENQUIRY_SORT_KEY.md) = `PURCHASE_ENQUIRY_SORT_KEY.PURCHASE_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_enquiries_pb.ts:904](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L904)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_enquiries_pb.ts:897](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L897)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this purchase enquiry

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/purchases_enquiries_pb.ts:911](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L911)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L920)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries_pb.ts:918](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L918)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesEnquiriesServicePaginationReq"``

#### Defined in

[src/purchases_enquiries_pb.ts:919](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L919)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

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

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries_pb.ts:941](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L941)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:929](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L929)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:933](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L933)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:937](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L937)
