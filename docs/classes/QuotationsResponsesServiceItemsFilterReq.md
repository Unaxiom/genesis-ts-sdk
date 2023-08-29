[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceItemsFilterReq

# Class: QuotationsResponsesServiceItemsFilterReq

Describes the request payload to filter quotation response items

**`Generated`**

from message Genesis.QuotationsResponsesServiceItemsFilterReq

## Hierarchy

- `Message`<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\>

  ↳ **`QuotationsResponsesServiceItemsFilterReq`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceItemsFilterReq.md#constructor)

### Properties

- [approvedByUserId](QuotationsResponsesServiceItemsFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QuotationsResponsesServiceItemsFilterReq.md#approvedonend)
- [approvedOnStart](QuotationsResponsesServiceItemsFilterReq.md#approvedonstart)
- [approverRoleId](QuotationsResponsesServiceItemsFilterReq.md#approverroleid)
- [count](QuotationsResponsesServiceItemsFilterReq.md#count)
- [creationTimestampEnd](QuotationsResponsesServiceItemsFilterReq.md#creationtimestampend)
- [creationTimestampStart](QuotationsResponsesServiceItemsFilterReq.md#creationtimestampstart)
- [entityUuid](QuotationsResponsesServiceItemsFilterReq.md#entityuuid)
- [hsnSacCode](QuotationsResponsesServiceItemsFilterReq.md#hsnsaccode)
- [isActive](QuotationsResponsesServiceItemsFilterReq.md#isactive)
- [name](QuotationsResponsesServiceItemsFilterReq.md#name)
- [offset](QuotationsResponsesServiceItemsFilterReq.md#offset)
- [quotationRequestItemId](QuotationsResponsesServiceItemsFilterReq.md#quotationrequestitemid)
- [quotationResponseId](QuotationsResponsesServiceItemsFilterReq.md#quotationresponseid)
- [sortKey](QuotationsResponsesServiceItemsFilterReq.md#sortkey)
- [sortOrder](QuotationsResponsesServiceItemsFilterReq.md#sortorder)
- [taxGroupId](QuotationsResponsesServiceItemsFilterReq.md#taxgroupid)
- [uomId](QuotationsResponsesServiceItemsFilterReq.md#uomid)
- [vendorUomId](QuotationsResponsesServiceItemsFilterReq.md#vendoruomid)
- [fields](QuotationsResponsesServiceItemsFilterReq.md#fields)
- [runtime](QuotationsResponsesServiceItemsFilterReq.md#runtime)
- [typeName](QuotationsResponsesServiceItemsFilterReq.md#typename)

### Methods

- [clone](QuotationsResponsesServiceItemsFilterReq.md#clone)
- [equals](QuotationsResponsesServiceItemsFilterReq.md#equals)
- [fromBinary](QuotationsResponsesServiceItemsFilterReq.md#frombinary)
- [fromJson](QuotationsResponsesServiceItemsFilterReq.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceItemsFilterReq.md#fromjsonstring)
- [getType](QuotationsResponsesServiceItemsFilterReq.md#gettype)
- [toBinary](QuotationsResponsesServiceItemsFilterReq.md#tobinary)
- [toJSON](QuotationsResponsesServiceItemsFilterReq.md#tojson)
- [toJson](QuotationsResponsesServiceItemsFilterReq.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceItemsFilterReq.md#tojsonstring)
- [equals](QuotationsResponsesServiceItemsFilterReq.md#equals-1)
- [fromBinary](QuotationsResponsesServiceItemsFilterReq.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceItemsFilterReq.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceItemsFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceItemsFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\> |

#### Overrides

Message&lt;QuotationsResponsesServiceItemsFilterReq\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:1785](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1785)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/quotations_responses_pb.ts:1727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1727)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/quotations_responses_pb.ts:1720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1720)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/quotations_responses_pb.ts:1713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1713)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/quotations_responses_pb.ts:1734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1734)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/quotations_responses_pb.ts:1664](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1664)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/quotations_responses_pb.ts:1699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1699)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/quotations_responses_pb.ts:1692](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1692)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/quotations_responses_pb.ts:1706](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1706)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 23;

#### Defined in

[src/quotations_responses_pb.ts:1762](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1762)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/quotations_responses_pb.ts:1657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1657)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 22;

#### Defined in

[src/quotations_responses_pb.ts:1755](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1755)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/quotations_responses_pb.ts:1671](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1671)

___

### quotationRequestItemId

• **quotationRequestItemId**: `bigint` = `protoInt64.zero`

Stores the corresponding item ID of the item from the quotation request

**`Generated`**

from field: int64 quotation_request_item_id = 21;

#### Defined in

[src/quotations_responses_pb.ts:1748](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1748)

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: int64 quotation_response_id = 20;

#### Defined in

[src/quotations_responses_pb.ts:1741](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1741)

___

### sortKey

• **sortKey**: [`QUOTATION_RESPONSE_ITEM_SORT_KEY`](../enums/QUOTATION_RESPONSE_ITEM_SORT_KEY.md) = `QUOTATION_RESPONSE_ITEM_SORT_KEY.QUOTATION_RESPONSE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QUOTATION_RESPONSE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_responses_pb.ts:1685](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1685)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_responses_pb.ts:1678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1678)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID

**`Generated`**

from field: int64 tax_group_id = 29;

#### Defined in

[src/quotations_responses_pb.ts:1783](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1783)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The internal unit of material

**`Generated`**

from field: int64 uom_id = 24;

#### Defined in

[src/quotations_responses_pb.ts:1769](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1769)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The vendor's unit of material

**`Generated`**

from field: int64 vendor_uom_id = 26;

#### Defined in

[src/quotations_responses_pb.ts:1776](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1776)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:1792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1792)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:1790](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1790)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsResponsesServiceItemsFilterReq"``

#### Defined in

[src/quotations_responses_pb.ts:1791](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1791)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

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

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:1826](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1826)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Defined in

[src/quotations_responses_pb.ts:1814](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1814)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Defined in

[src/quotations_responses_pb.ts:1818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1818)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Defined in

[src/quotations_responses_pb.ts:1822](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1822)
