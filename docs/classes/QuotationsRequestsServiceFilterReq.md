[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceFilterReq

# Class: QuotationsRequestsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.QuotationsRequestsServiceFilterReq

## Hierarchy

- `Message`<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\>

  ↳ **`QuotationsRequestsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QuotationsRequestsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QuotationsRequestsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QuotationsRequestsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QuotationsRequestsServiceFilterReq.md#approverroleid)
- [completedOnEnd](QuotationsRequestsServiceFilterReq.md#completedonend)
- [completedOnStart](QuotationsRequestsServiceFilterReq.md#completedonstart)
- [count](QuotationsRequestsServiceFilterReq.md#count)
- [creationTimestampEnd](QuotationsRequestsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QuotationsRequestsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QuotationsRequestsServiceFilterReq.md#entityuuid)
- [finalRefNumber](QuotationsRequestsServiceFilterReq.md#finalrefnumber)
- [isActive](QuotationsRequestsServiceFilterReq.md#isactive)
- [offset](QuotationsRequestsServiceFilterReq.md#offset)
- [priority](QuotationsRequestsServiceFilterReq.md#priority)
- [purchaseEnquiryId](QuotationsRequestsServiceFilterReq.md#purchaseenquiryid)
- [referenceId](QuotationsRequestsServiceFilterReq.md#referenceid)
- [sortKey](QuotationsRequestsServiceFilterReq.md#sortkey)
- [sortOrder](QuotationsRequestsServiceFilterReq.md#sortorder)
- [status](QuotationsRequestsServiceFilterReq.md#status)
- [fields](QuotationsRequestsServiceFilterReq.md#fields)
- [runtime](QuotationsRequestsServiceFilterReq.md#runtime)
- [typeName](QuotationsRequestsServiceFilterReq.md#typename)

### Methods

- [clone](QuotationsRequestsServiceFilterReq.md#clone)
- [equals](QuotationsRequestsServiceFilterReq.md#equals)
- [fromBinary](QuotationsRequestsServiceFilterReq.md#frombinary)
- [fromJson](QuotationsRequestsServiceFilterReq.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceFilterReq.md#fromjsonstring)
- [getType](QuotationsRequestsServiceFilterReq.md#gettype)
- [toBinary](QuotationsRequestsServiceFilterReq.md#tobinary)
- [toJSON](QuotationsRequestsServiceFilterReq.md#tojson)
- [toJson](QuotationsRequestsServiceFilterReq.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceFilterReq.md#tojsonstring)
- [equals](QuotationsRequestsServiceFilterReq.md#equals-1)
- [fromBinary](QuotationsRequestsServiceFilterReq.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServiceFilterReq\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:1444](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1444)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/quotations_requests_pb.ts:1393](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1393)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/quotations_requests_pb.ts:1386](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1386)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/quotations_requests_pb.ts:1379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1379)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/quotations_requests_pb.ts:1400](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1400)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/quotations_requests_pb.ts:1414](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1414)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/quotations_requests_pb.ts:1407](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1407)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/quotations_requests_pb.ts:1323](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1323)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/quotations_requests_pb.ts:1358](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1358)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/quotations_requests_pb.ts:1351](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1351)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/quotations_requests_pb.ts:1365](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1365)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/quotations_requests_pb.ts:1428](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1428)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/quotations_requests_pb.ts:1316](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1316)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/quotations_requests_pb.ts:1330](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1330)

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

[src/quotations_requests_pb.ts:1442](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1442)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: int64 purchase_enquiry_id = 22;

#### Defined in

[src/quotations_requests_pb.ts:1435](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1435)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation request

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/quotations_requests_pb.ts:1421](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1421)

___

### sortKey

• **sortKey**: [`QUOTATION_REQUEST_SORT_KEY`](../enums/QUOTATION_REQUEST_SORT_KEY.md) = `QUOTATION_REQUEST_SORT_KEY.QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QUOTATION_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_requests_pb.ts:1344](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1344)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_requests_pb.ts:1337](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1337)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this quotation request

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/quotations_requests_pb.ts:1372](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1372)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:1451](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1451)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:1449](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1449)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServiceFilterReq"``

#### Defined in

[src/quotations_requests_pb.ts:1450](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1450)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

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

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md) \| `PlainMessage`<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:1485](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1485)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1473](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1473)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1477](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1477)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Defined in

[src/quotations_requests_pb.ts:1481](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L1481)
