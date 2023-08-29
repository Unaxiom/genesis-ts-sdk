[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceFilterReq

# Class: GoodsDispatchesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.GoodsDispatchesServiceFilterReq

## Hierarchy

- `Message`<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\>

  ↳ **`GoodsDispatchesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](GoodsDispatchesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](GoodsDispatchesServiceFilterReq.md#approvedonend)
- [approvedOnStart](GoodsDispatchesServiceFilterReq.md#approvedonstart)
- [approverRoleId](GoodsDispatchesServiceFilterReq.md#approverroleid)
- [billingStatus](GoodsDispatchesServiceFilterReq.md#billingstatus)
- [completedOnEnd](GoodsDispatchesServiceFilterReq.md#completedonend)
- [completedOnStart](GoodsDispatchesServiceFilterReq.md#completedonstart)
- [count](GoodsDispatchesServiceFilterReq.md#count)
- [creationTimestampEnd](GoodsDispatchesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](GoodsDispatchesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](GoodsDispatchesServiceFilterReq.md#entityuuid)
- [finalRefNumber](GoodsDispatchesServiceFilterReq.md#finalrefnumber)
- [isActive](GoodsDispatchesServiceFilterReq.md#isactive)
- [offset](GoodsDispatchesServiceFilterReq.md#offset)
- [refFrom](GoodsDispatchesServiceFilterReq.md#reffrom)
- [refId](GoodsDispatchesServiceFilterReq.md#refid)
- [referenceId](GoodsDispatchesServiceFilterReq.md#referenceid)
- [sortKey](GoodsDispatchesServiceFilterReq.md#sortkey)
- [sortOrder](GoodsDispatchesServiceFilterReq.md#sortorder)
- [status](GoodsDispatchesServiceFilterReq.md#status)
- [fields](GoodsDispatchesServiceFilterReq.md#fields)
- [runtime](GoodsDispatchesServiceFilterReq.md#runtime)
- [typeName](GoodsDispatchesServiceFilterReq.md#typename)

### Methods

- [clone](GoodsDispatchesServiceFilterReq.md#clone)
- [equals](GoodsDispatchesServiceFilterReq.md#equals)
- [fromBinary](GoodsDispatchesServiceFilterReq.md#frombinary)
- [fromJson](GoodsDispatchesServiceFilterReq.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceFilterReq.md#fromjsonstring)
- [getType](GoodsDispatchesServiceFilterReq.md#gettype)
- [toBinary](GoodsDispatchesServiceFilterReq.md#tobinary)
- [toJSON](GoodsDispatchesServiceFilterReq.md#tojson)
- [toJson](GoodsDispatchesServiceFilterReq.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceFilterReq.md#tojsonstring)
- [equals](GoodsDispatchesServiceFilterReq.md#equals-1)
- [fromBinary](GoodsDispatchesServiceFilterReq.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceFilterReq.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\> |

#### Overrides

Message&lt;GoodsDispatchesServiceFilterReq\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:1434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1434)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/goods_dispatches_pb.ts:1376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1376)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/goods_dispatches_pb.ts:1369](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1369)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/goods_dispatches_pb.ts:1362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1362)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/goods_dispatches_pb.ts:1383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1383)

___

### billingStatus

• **billingStatus**: [`GOODS_DISPATCH_BILLING_STATUS`](../enums/GOODS_DISPATCH_BILLING_STATUS.md) = `GOODS_DISPATCH_BILLING_STATUS.GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods dispatch bill

**`Generated`**

from field: Genesis.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_dispatches_pb.ts:1432](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1432)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/goods_dispatches_pb.ts:1397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1397)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/goods_dispatches_pb.ts:1390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1390)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_dispatches_pb.ts:1306](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1306)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/goods_dispatches_pb.ts:1341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1341)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/goods_dispatches_pb.ts:1334](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1334)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/goods_dispatches_pb.ts:1348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1348)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/goods_dispatches_pb.ts:1411](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1411)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goods_dispatches_pb.ts:1299](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1299)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goods_dispatches_pb.ts:1313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1313)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/goods_dispatches_pb.ts:1418](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1418)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/goods_dispatches_pb.ts:1425](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1425)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goods dispatch

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/goods_dispatches_pb.ts:1404](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1404)

___

### sortKey

• **sortKey**: [`GOODS_DISPATCH_SORT_KEY`](../enums/GOODS_DISPATCH_SORT_KEY.md) = `GOODS_DISPATCH_SORT_KEY.GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOODS_DISPATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches_pb.ts:1327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1327)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_dispatches_pb.ts:1320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1320)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this goods dispatch

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/goods_dispatches_pb.ts:1355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1355)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:1441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1441)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:1439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1439)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesServiceFilterReq"``

#### Defined in

[src/goods_dispatches_pb.ts:1440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1440)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

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

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:1476](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1476)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1464)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1468)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceFilterReq`](GoodsDispatchesServiceFilterReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1472](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1472)
