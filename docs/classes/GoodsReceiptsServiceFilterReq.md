[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceFilterReq

# Class: GoodsReceiptsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.GoodsReceiptsServiceFilterReq

## Hierarchy

- `Message`<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\>

  ↳ **`GoodsReceiptsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](GoodsReceiptsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](GoodsReceiptsServiceFilterReq.md#approvedonend)
- [approvedOnStart](GoodsReceiptsServiceFilterReq.md#approvedonstart)
- [approverRoleId](GoodsReceiptsServiceFilterReq.md#approverroleid)
- [billingStatus](GoodsReceiptsServiceFilterReq.md#billingstatus)
- [completedOnEnd](GoodsReceiptsServiceFilterReq.md#completedonend)
- [completedOnStart](GoodsReceiptsServiceFilterReq.md#completedonstart)
- [count](GoodsReceiptsServiceFilterReq.md#count)
- [creationTimestampEnd](GoodsReceiptsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](GoodsReceiptsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](GoodsReceiptsServiceFilterReq.md#entityuuid)
- [finalRefNumber](GoodsReceiptsServiceFilterReq.md#finalrefnumber)
- [isActive](GoodsReceiptsServiceFilterReq.md#isactive)
- [offset](GoodsReceiptsServiceFilterReq.md#offset)
- [refFrom](GoodsReceiptsServiceFilterReq.md#reffrom)
- [refId](GoodsReceiptsServiceFilterReq.md#refid)
- [referenceId](GoodsReceiptsServiceFilterReq.md#referenceid)
- [sortKey](GoodsReceiptsServiceFilterReq.md#sortkey)
- [sortOrder](GoodsReceiptsServiceFilterReq.md#sortorder)
- [status](GoodsReceiptsServiceFilterReq.md#status)
- [vendorBillDateEnd](GoodsReceiptsServiceFilterReq.md#vendorbilldateend)
- [vendorBillDateStart](GoodsReceiptsServiceFilterReq.md#vendorbilldatestart)
- [vendorBillNo](GoodsReceiptsServiceFilterReq.md#vendorbillno)
- [fields](GoodsReceiptsServiceFilterReq.md#fields)
- [runtime](GoodsReceiptsServiceFilterReq.md#runtime)
- [typeName](GoodsReceiptsServiceFilterReq.md#typename)

### Methods

- [clone](GoodsReceiptsServiceFilterReq.md#clone)
- [equals](GoodsReceiptsServiceFilterReq.md#equals)
- [fromBinary](GoodsReceiptsServiceFilterReq.md#frombinary)
- [fromJson](GoodsReceiptsServiceFilterReq.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceFilterReq.md#fromjsonstring)
- [getType](GoodsReceiptsServiceFilterReq.md#gettype)
- [toBinary](GoodsReceiptsServiceFilterReq.md#tobinary)
- [toJSON](GoodsReceiptsServiceFilterReq.md#tojson)
- [toJson](GoodsReceiptsServiceFilterReq.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceFilterReq.md#tojsonstring)
- [equals](GoodsReceiptsServiceFilterReq.md#equals-1)
- [fromBinary](GoodsReceiptsServiceFilterReq.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceFilterReq.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServiceFilterReq\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:1463](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1463)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/goods_receipts_pb.ts:1384](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1384)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/goods_receipts_pb.ts:1377](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1377)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/goods_receipts_pb.ts:1370](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1370)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/goods_receipts_pb.ts:1391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1391)

___

### billingStatus

• **billingStatus**: [`GOODS_RECEIPT_BILLING_STATUS`](../enums/GOODS_RECEIPT_BILLING_STATUS.md) = `GOODS_RECEIPT_BILLING_STATUS.GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods receipt bill

**`Generated`**

from field: Genesis.GOODS_RECEIPT_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_receipts_pb.ts:1461](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1461)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/goods_receipts_pb.ts:1405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1405)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/goods_receipts_pb.ts:1398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1398)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_receipts_pb.ts:1314](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1314)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/goods_receipts_pb.ts:1349](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1349)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/goods_receipts_pb.ts:1342](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1342)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/goods_receipts_pb.ts:1356](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1356)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/goods_receipts_pb.ts:1419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1419)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goods_receipts_pb.ts:1307](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1307)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goods_receipts_pb.ts:1321](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1321)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/goods_receipts_pb.ts:1426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1426)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/goods_receipts_pb.ts:1433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1433)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goods receipt

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/goods_receipts_pb.ts:1412](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1412)

___

### sortKey

• **sortKey**: [`GOODS_RECEIPT_SORT_KEY`](../enums/GOODS_RECEIPT_SORT_KEY.md) = `GOODS_RECEIPT_SORT_KEY.GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOODS_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_receipts_pb.ts:1335](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1335)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_receipts_pb.ts:1328](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1328)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this goods receipt

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/goods_receipts_pb.ts:1363](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1363)

___

### vendorBillDateEnd

• **vendorBillDateEnd**: `string` = `""`

The end date of vendor bills

**`Generated`**

from field: string vendor_bill_date_end = 26;

#### Defined in

[src/goods_receipts_pb.ts:1454](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1454)

___

### vendorBillDateStart

• **vendorBillDateStart**: `string` = `""`

The start date of vendor bills

**`Generated`**

from field: string vendor_bill_date_start = 25;

#### Defined in

[src/goods_receipts_pb.ts:1447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1447)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 24;

#### Defined in

[src/goods_receipts_pb.ts:1440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1440)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:1470](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1470)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:1468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1468)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServiceFilterReq"``

#### Defined in

[src/goods_receipts_pb.ts:1469](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1469)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

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

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md) \| `PlainMessage`<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:1508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1508)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1496)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1500](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1500)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Defined in

[src/goods_receipts_pb.ts:1504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1504)
