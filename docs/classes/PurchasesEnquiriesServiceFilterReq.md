[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceFilterReq

# Class: PurchasesEnquiriesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.PurchasesEnquiriesServiceFilterReq

## Hierarchy

- `Message`<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

  ↳ **`PurchasesEnquiriesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesEnquiriesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesEnquiriesServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesEnquiriesServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesEnquiriesServiceFilterReq.md#approverroleid)
- [completedOnEnd](PurchasesEnquiriesServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesEnquiriesServiceFilterReq.md#completedonstart)
- [count](PurchasesEnquiriesServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesEnquiriesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesEnquiriesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](PurchasesEnquiriesServiceFilterReq.md#entityuuid)
- [finalRefNumber](PurchasesEnquiriesServiceFilterReq.md#finalrefnumber)
- [isActive](PurchasesEnquiriesServiceFilterReq.md#isactive)
- [offset](PurchasesEnquiriesServiceFilterReq.md#offset)
- [priority](PurchasesEnquiriesServiceFilterReq.md#priority)
- [referenceId](PurchasesEnquiriesServiceFilterReq.md#referenceid)
- [sortKey](PurchasesEnquiriesServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesEnquiriesServiceFilterReq.md#sortorder)
- [status](PurchasesEnquiriesServiceFilterReq.md#status)
- [fields](PurchasesEnquiriesServiceFilterReq.md#fields)
- [runtime](PurchasesEnquiriesServiceFilterReq.md#runtime)
- [typeName](PurchasesEnquiriesServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceFilterReq.md#clone)
- [equals](PurchasesEnquiriesServiceFilterReq.md#equals)
- [fromBinary](PurchasesEnquiriesServiceFilterReq.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceFilterReq.md#gettype)
- [toBinary](PurchasesEnquiriesServiceFilterReq.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceFilterReq.md#tojson)
- [toJson](PurchasesEnquiriesServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceFilterReq.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

#### Overrides

Message&lt;PurchasesEnquiriesServiceFilterReq\&gt;.constructor

#### Defined in

[src/purchases_enquiries_pb.ts:1227](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1227)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/purchases_enquiries_pb.ts:1183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1183)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/purchases_enquiries_pb.ts:1176](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1176)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/purchases_enquiries_pb.ts:1169](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1169)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/purchases_enquiries_pb.ts:1190](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1190)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/purchases_enquiries_pb.ts:1204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1204)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/purchases_enquiries_pb.ts:1197](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1197)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_enquiries_pb.ts:1113](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1113)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/purchases_enquiries_pb.ts:1148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1148)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/purchases_enquiries_pb.ts:1141](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1141)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/purchases_enquiries_pb.ts:1155](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1155)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/purchases_enquiries_pb.ts:1218](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1218)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_enquiries_pb.ts:1106](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1106)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_enquiries_pb.ts:1120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1120)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

[src/purchases_enquiries_pb.ts:1225](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1225)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/purchases_enquiries_pb.ts:1211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1211)

___

### sortKey

• **sortKey**: [`PURCHASE_ENQUIRY_SORT_KEY`](../enums/PURCHASE_ENQUIRY_SORT_KEY.md) = `PURCHASE_ENQUIRY_SORT_KEY.PURCHASE_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_enquiries_pb.ts:1134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1134)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_enquiries_pb.ts:1127](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1127)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this purchase enquiry

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/purchases_enquiries_pb.ts:1162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1162)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries_pb.ts:1234](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1234)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries_pb.ts:1232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1232)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesEnquiriesServiceFilterReq"``

#### Defined in

[src/purchases_enquiries_pb.ts:1233](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1233)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

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

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries_pb.ts:1267](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1267)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:1255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1255)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:1259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1259)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

[src/purchases_enquiries_pb.ts:1263](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L1263)
