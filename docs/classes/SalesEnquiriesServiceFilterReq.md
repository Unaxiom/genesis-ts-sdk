[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceFilterReq

# Class: SalesEnquiriesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.SalesEnquiriesServiceFilterReq

## Hierarchy

- `Message`<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

  ↳ **`SalesEnquiriesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesEnquiriesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesEnquiriesServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesEnquiriesServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesEnquiriesServiceFilterReq.md#approverroleid)
- [buyerClientId](SalesEnquiriesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesEnquiriesServiceFilterReq.md#completedonend)
- [completedOnStart](SalesEnquiriesServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesEnquiriesServiceFilterReq.md#consigneeclientid)
- [count](SalesEnquiriesServiceFilterReq.md#count)
- [creationTimestampEnd](SalesEnquiriesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesEnquiriesServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesEnquiriesServiceFilterReq.md#currencyid)
- [entityUuid](SalesEnquiriesServiceFilterReq.md#entityuuid)
- [finalRefNumber](SalesEnquiriesServiceFilterReq.md#finalrefnumber)
- [isActive](SalesEnquiriesServiceFilterReq.md#isactive)
- [offset](SalesEnquiriesServiceFilterReq.md#offset)
- [priority](SalesEnquiriesServiceFilterReq.md#priority)
- [referenceId](SalesEnquiriesServiceFilterReq.md#referenceid)
- [sortKey](SalesEnquiriesServiceFilterReq.md#sortkey)
- [sortOrder](SalesEnquiriesServiceFilterReq.md#sortorder)
- [status](SalesEnquiriesServiceFilterReq.md#status)
- [fields](SalesEnquiriesServiceFilterReq.md#fields)
- [runtime](SalesEnquiriesServiceFilterReq.md#runtime)
- [typeName](SalesEnquiriesServiceFilterReq.md#typename)

### Methods

- [clone](SalesEnquiriesServiceFilterReq.md#clone)
- [equals](SalesEnquiriesServiceFilterReq.md#equals)
- [fromBinary](SalesEnquiriesServiceFilterReq.md#frombinary)
- [fromJson](SalesEnquiriesServiceFilterReq.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceFilterReq.md#fromjsonstring)
- [getType](SalesEnquiriesServiceFilterReq.md#gettype)
- [toBinary](SalesEnquiriesServiceFilterReq.md#tobinary)
- [toJSON](SalesEnquiriesServiceFilterReq.md#tojson)
- [toJson](SalesEnquiriesServiceFilterReq.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceFilterReq.md#tojsonstring)
- [equals](SalesEnquiriesServiceFilterReq.md#equals-1)
- [fromBinary](SalesEnquiriesServiceFilterReq.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

#### Overrides

Message&lt;SalesEnquiriesServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:1512](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1512)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/sales_enquiries_pb.ts:1447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1447)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/sales_enquiries_pb.ts:1440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1440)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/sales_enquiries_pb.ts:1433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1433)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/sales_enquiries_pb.ts:1454](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1454)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: int64 buyer_client_id = 23;

#### Defined in

[src/sales_enquiries_pb.ts:1496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1496)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/sales_enquiries_pb.ts:1468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1468)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/sales_enquiries_pb.ts:1461](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1461)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: int64 consignee_client_id = 22;

#### Defined in

[src/sales_enquiries_pb.ts:1489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1489)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_enquiries_pb.ts:1377](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1377)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/sales_enquiries_pb.ts:1412](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1412)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/sales_enquiries_pb.ts:1405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1405)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: int64 currency_id = 25;

#### Defined in

[src/sales_enquiries_pb.ts:1510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1510)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_enquiries_pb.ts:1419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1419)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_enquiries_pb.ts:1482](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1482)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_enquiries_pb.ts:1370](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1370)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_enquiries_pb.ts:1384](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1384)

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

[src/sales_enquiries_pb.ts:1503](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1503)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales enquiry

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_enquiries_pb.ts:1475](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1475)

___

### sortKey

• **sortKey**: [`SALES_ENQUIRY_SORT_KEY`](../enums/SALES_ENQUIRY_SORT_KEY.md) = `SALES_ENQUIRY_SORT_KEY.SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALES_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries_pb.ts:1398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1398)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_enquiries_pb.ts:1391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1391)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this sales enquiry

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_enquiries_pb.ts:1426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1426)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:1519](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1519)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:1517](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1517)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesServiceFilterReq"``

#### Defined in

[src/sales_enquiries_pb.ts:1518](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1518)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

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

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:1555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1555)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1543](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1543)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1547](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1547)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries_pb.ts:1551](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1551)
