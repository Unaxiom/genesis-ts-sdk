[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceFilterReq

# Class: StockIssuancesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.StockIssuancesServiceFilterReq

## Hierarchy

- `Message`<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\>

  ↳ **`StockIssuancesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StockIssuancesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StockIssuancesServiceFilterReq.md#approvedonend)
- [approvedOnStart](StockIssuancesServiceFilterReq.md#approvedonstart)
- [approverRoleId](StockIssuancesServiceFilterReq.md#approverroleid)
- [completedOnEnd](StockIssuancesServiceFilterReq.md#completedonend)
- [completedOnStart](StockIssuancesServiceFilterReq.md#completedonstart)
- [count](StockIssuancesServiceFilterReq.md#count)
- [creationTimestampEnd](StockIssuancesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StockIssuancesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StockIssuancesServiceFilterReq.md#entityuuid)
- [finalRefNumber](StockIssuancesServiceFilterReq.md#finalrefnumber)
- [isActive](StockIssuancesServiceFilterReq.md#isactive)
- [offset](StockIssuancesServiceFilterReq.md#offset)
- [refFrom](StockIssuancesServiceFilterReq.md#reffrom)
- [refId](StockIssuancesServiceFilterReq.md#refid)
- [referenceId](StockIssuancesServiceFilterReq.md#referenceid)
- [sortKey](StockIssuancesServiceFilterReq.md#sortkey)
- [sortOrder](StockIssuancesServiceFilterReq.md#sortorder)
- [status](StockIssuancesServiceFilterReq.md#status)
- [fields](StockIssuancesServiceFilterReq.md#fields)
- [runtime](StockIssuancesServiceFilterReq.md#runtime)
- [typeName](StockIssuancesServiceFilterReq.md#typename)

### Methods

- [clone](StockIssuancesServiceFilterReq.md#clone)
- [equals](StockIssuancesServiceFilterReq.md#equals)
- [fromBinary](StockIssuancesServiceFilterReq.md#frombinary)
- [fromJson](StockIssuancesServiceFilterReq.md#fromjson)
- [fromJsonString](StockIssuancesServiceFilterReq.md#fromjsonstring)
- [getType](StockIssuancesServiceFilterReq.md#gettype)
- [toBinary](StockIssuancesServiceFilterReq.md#tobinary)
- [toJSON](StockIssuancesServiceFilterReq.md#tojson)
- [toJson](StockIssuancesServiceFilterReq.md#tojson-1)
- [toJsonString](StockIssuancesServiceFilterReq.md#tojsonstring)
- [equals](StockIssuancesServiceFilterReq.md#equals-1)
- [fromBinary](StockIssuancesServiceFilterReq.md#frombinary-1)
- [fromJson](StockIssuancesServiceFilterReq.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\> |

#### Overrides

Message&lt;StockIssuancesServiceFilterReq\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:1320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1320)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/stock_issuances_pb.ts:1269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1269)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/stock_issuances_pb.ts:1262](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1262)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/stock_issuances_pb.ts:1255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1255)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/stock_issuances_pb.ts:1276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1276)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/stock_issuances_pb.ts:1290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1290)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/stock_issuances_pb.ts:1283](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1283)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/stock_issuances_pb.ts:1199](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1199)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/stock_issuances_pb.ts:1234](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1234)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/stock_issuances_pb.ts:1227](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1227)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/stock_issuances_pb.ts:1241](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1241)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/stock_issuances_pb.ts:1304](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1304)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/stock_issuances_pb.ts:1192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1192)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/stock_issuances_pb.ts:1206](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1206)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/stock_issuances_pb.ts:1311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1311)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/stock_issuances_pb.ts:1318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1318)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock issuance

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/stock_issuances_pb.ts:1297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1297)

___

### sortKey

• **sortKey**: [`STOCK_ISSUANCE_SORT_KEY`](../enums/STOCK_ISSUANCE_SORT_KEY.md) = `STOCK_ISSUANCE_SORT_KEY.STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.STOCK_ISSUANCE_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_issuances_pb.ts:1220](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1220)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/stock_issuances_pb.ts:1213](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1213)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this stock issuance

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/stock_issuances_pb.ts:1248](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1248)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:1327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1327)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:1325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1325)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesServiceFilterReq"``

#### Defined in

[src/stock_issuances_pb.ts:1326](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1326)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md) \| `PlainMessage`<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

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

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md) \| `PlainMessage`<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md) \| `PlainMessage`<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:1361](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1361)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1349](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1349)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1353](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1353)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Defined in

[src/stock_issuances_pb.ts:1357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L1357)
