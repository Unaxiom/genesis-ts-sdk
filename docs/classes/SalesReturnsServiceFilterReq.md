[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceFilterReq

# Class: SalesReturnsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.SalesReturnsServiceFilterReq

## Hierarchy

- `Message`<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\>

  ↳ **`SalesReturnsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesReturnsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesReturnsServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesReturnsServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesReturnsServiceFilterReq.md#approverroleid)
- [billingStatus](SalesReturnsServiceFilterReq.md#billingstatus)
- [completedOnEnd](SalesReturnsServiceFilterReq.md#completedonend)
- [completedOnStart](SalesReturnsServiceFilterReq.md#completedonstart)
- [count](SalesReturnsServiceFilterReq.md#count)
- [creationTimestampEnd](SalesReturnsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesReturnsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](SalesReturnsServiceFilterReq.md#entityuuid)
- [finalRefNumber](SalesReturnsServiceFilterReq.md#finalrefnumber)
- [isActive](SalesReturnsServiceFilterReq.md#isactive)
- [offset](SalesReturnsServiceFilterReq.md#offset)
- [refFrom](SalesReturnsServiceFilterReq.md#reffrom)
- [refId](SalesReturnsServiceFilterReq.md#refid)
- [referenceId](SalesReturnsServiceFilterReq.md#referenceid)
- [sortKey](SalesReturnsServiceFilterReq.md#sortkey)
- [sortOrder](SalesReturnsServiceFilterReq.md#sortorder)
- [status](SalesReturnsServiceFilterReq.md#status)
- [fields](SalesReturnsServiceFilterReq.md#fields)
- [runtime](SalesReturnsServiceFilterReq.md#runtime)
- [typeName](SalesReturnsServiceFilterReq.md#typename)

### Methods

- [clone](SalesReturnsServiceFilterReq.md#clone)
- [equals](SalesReturnsServiceFilterReq.md#equals)
- [fromBinary](SalesReturnsServiceFilterReq.md#frombinary)
- [fromJson](SalesReturnsServiceFilterReq.md#fromjson)
- [fromJsonString](SalesReturnsServiceFilterReq.md#fromjsonstring)
- [getType](SalesReturnsServiceFilterReq.md#gettype)
- [toBinary](SalesReturnsServiceFilterReq.md#tobinary)
- [toJSON](SalesReturnsServiceFilterReq.md#tojson)
- [toJson](SalesReturnsServiceFilterReq.md#tojson-1)
- [toJsonString](SalesReturnsServiceFilterReq.md#tojsonstring)
- [equals](SalesReturnsServiceFilterReq.md#equals-1)
- [fromBinary](SalesReturnsServiceFilterReq.md#frombinary-1)
- [fromJson](SalesReturnsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\> |

#### Overrides

Message&lt;SalesReturnsServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:1352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1352)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/sales_returns_pb.ts:1294](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1294)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/sales_returns_pb.ts:1287](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1287)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/sales_returns_pb.ts:1280](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1280)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/sales_returns_pb.ts:1301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1301)

___

### billingStatus

• **billingStatus**: [`SALES_RETURN_BILLING_STATUS`](../enums/SALES_RETURN_BILLING_STATUS.md) = `SALES_RETURN_BILLING_STATUS.SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the sales return bill

**`Generated`**

from field: Genesis.SALES_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

[src/sales_returns_pb.ts:1350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1350)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/sales_returns_pb.ts:1315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1315)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/sales_returns_pb.ts:1308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1308)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_returns_pb.ts:1224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1224)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/sales_returns_pb.ts:1259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1259)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/sales_returns_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1252)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_returns_pb.ts:1266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1266)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_returns_pb.ts:1329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1329)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_returns_pb.ts:1217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1217)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_returns_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1231)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/sales_returns_pb.ts:1336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1336)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/sales_returns_pb.ts:1343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1343)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales return

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_returns_pb.ts:1322](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1322)

___

### sortKey

• **sortKey**: [`SALES_RETURN_SORT_KEY`](../enums/SALES_RETURN_SORT_KEY.md) = `SALES_RETURN_SORT_KEY.SALES_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALES_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_returns_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1245)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_returns_pb.ts:1238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1238)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this sales return

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_returns_pb.ts:1273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1273)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:1359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1359)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:1357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1357)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnsServiceFilterReq"``

#### Defined in

[src/sales_returns_pb.ts:1358](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1358)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md) \| `PlainMessage`<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

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

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md) \| `PlainMessage`<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md) \| `PlainMessage`<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:1394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1394)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Defined in

[src/sales_returns_pb.ts:1382](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1382)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Defined in

[src/sales_returns_pb.ts:1386](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1386)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Defined in

[src/sales_returns_pb.ts:1390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1390)
