[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceFilterReq

# Class: PurchasesIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.PurchasesIndentsServiceFilterReq

## Hierarchy

- `Message`<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\>

  ↳ **`PurchasesIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](PurchasesIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesIndentsServiceFilterReq.md#completedonstart)
- [consigneeLocationId](PurchasesIndentsServiceFilterReq.md#consigneelocationid)
- [count](PurchasesIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesIndentsServiceFilterReq.md#creationtimestampstart)
- [deliveryDateEnd](PurchasesIndentsServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](PurchasesIndentsServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](PurchasesIndentsServiceFilterReq.md#deliverydatestart)
- [entityUuid](PurchasesIndentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](PurchasesIndentsServiceFilterReq.md#finalrefnumber)
- [isActive](PurchasesIndentsServiceFilterReq.md#isactive)
- [offset](PurchasesIndentsServiceFilterReq.md#offset)
- [referenceId](PurchasesIndentsServiceFilterReq.md#referenceid)
- [sortKey](PurchasesIndentsServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesIndentsServiceFilterReq.md#sortorder)
- [status](PurchasesIndentsServiceFilterReq.md#status)
- [fields](PurchasesIndentsServiceFilterReq.md#fields)
- [runtime](PurchasesIndentsServiceFilterReq.md#runtime)
- [typeName](PurchasesIndentsServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesIndentsServiceFilterReq.md#clone)
- [equals](PurchasesIndentsServiceFilterReq.md#equals)
- [fromBinary](PurchasesIndentsServiceFilterReq.md#frombinary)
- [fromJson](PurchasesIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesIndentsServiceFilterReq.md#gettype)
- [toBinary](PurchasesIndentsServiceFilterReq.md#tobinary)
- [toJSON](PurchasesIndentsServiceFilterReq.md#tojson)
- [toJson](PurchasesIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceFilterReq.md#tojsonstring)
- [equals](PurchasesIndentsServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\> |

#### Overrides

Message&lt;PurchasesIndentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:1408](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1408)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/purchases_indents_pb.ts:1343](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1343)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/purchases_indents_pb.ts:1336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1336)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/purchases_indents_pb.ts:1329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1329)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/purchases_indents_pb.ts:1350](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1350)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/purchases_indents_pb.ts:1364](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1364)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/purchases_indents_pb.ts:1357](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1357)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 consignee_location_id = 22;

#### Defined in

[src/purchases_indents_pb.ts:1406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1406)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_indents_pb.ts:1273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1273)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/purchases_indents_pb.ts:1308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1308)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/purchases_indents_pb.ts:1301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1301)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

[src/purchases_indents_pb.ts:1385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1385)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

[src/purchases_indents_pb.ts:1371](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1371)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

[src/purchases_indents_pb.ts:1378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1378)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/purchases_indents_pb.ts:1315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1315)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/purchases_indents_pb.ts:1399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1399)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_indents_pb.ts:1266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1266)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_indents_pb.ts:1280](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1280)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase indent

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/purchases_indents_pb.ts:1392](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1392)

___

### sortKey

• **sortKey**: [`PURCHASE_INDENT_SORT_KEY`](../enums/PURCHASE_INDENT_SORT_KEY.md) = `PURCHASE_INDENT_SORT_KEY.PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_indents_pb.ts:1294](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1294)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_indents_pb.ts:1287](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1287)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this purchase indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/purchases_indents_pb.ts:1322](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1322)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:1415](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1415)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:1413](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1413)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsServiceFilterReq"``

#### Defined in

[src/purchases_indents_pb.ts:1414](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1414)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

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

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:1451](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1451)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1439)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1443)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1447)
