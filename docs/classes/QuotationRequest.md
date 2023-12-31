[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationRequest

# Class: QuotationRequest

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.QuotationRequest

## Hierarchy

- `Message`<[`QuotationRequest`](QuotationRequest.md)\>

  ↳ **`QuotationRequest`**

## Table of contents

### Constructors

- [constructor](QuotationRequest.md#constructor)

### Properties

- [approvalMetadata](QuotationRequest.md#approvalmetadata)
- [completedOn](QuotationRequest.md#completedon)
- [currencyId](QuotationRequest.md#currencyid)
- [description](QuotationRequest.md#description)
- [entityUuid](QuotationRequest.md#entityuuid)
- [finalRefNumber](QuotationRequest.md#finalrefnumber)
- [formData](QuotationRequest.md#formdata)
- [lastDate](QuotationRequest.md#lastdate)
- [list](QuotationRequest.md#list)
- [logs](QuotationRequest.md#logs)
- [metadata](QuotationRequest.md#metadata)
- [priority](QuotationRequest.md#priority)
- [purchaseEnquiryId](QuotationRequest.md#purchaseenquiryid)
- [referenceId](QuotationRequest.md#referenceid)
- [renewalPeriod](QuotationRequest.md#renewalperiod)
- [status](QuotationRequest.md#status)
- [vaultFolderId](QuotationRequest.md#vaultfolderid)
- [fields](QuotationRequest.md#fields)
- [runtime](QuotationRequest.md#runtime)
- [typeName](QuotationRequest.md#typename)

### Methods

- [clone](QuotationRequest.md#clone)
- [equals](QuotationRequest.md#equals)
- [fromBinary](QuotationRequest.md#frombinary)
- [fromJson](QuotationRequest.md#fromjson)
- [fromJsonString](QuotationRequest.md#fromjsonstring)
- [getType](QuotationRequest.md#gettype)
- [toBinary](QuotationRequest.md#tobinary)
- [toJSON](QuotationRequest.md#tojson)
- [toJson](QuotationRequest.md#tojson-1)
- [toJsonString](QuotationRequest.md#tojsonstring)
- [equals](QuotationRequest.md#equals-1)
- [fromBinary](QuotationRequest.md#frombinary-1)
- [fromJson](QuotationRequest.md#fromjson-1)
- [fromJsonString](QuotationRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationRequest`](QuotationRequest.md)\> |

#### Overrides

Message&lt;QuotationRequest\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:522](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L522)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/quotations_requests_pb.ts:422](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L422)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this quotation request was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/quotations_requests_pb.ts:443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L443)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: int64 currency_id = 14;

#### Defined in

[src/quotations_requests_pb.ts:485](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L485)

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

[src/quotations_requests_pb.ts:506](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L506)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/quotations_requests_pb.ts:408](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L408)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/quotations_requests_pb.ts:464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L464)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/quotations_requests_pb.ts:520](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L520)

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

[src/quotations_requests_pb.ts:478](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L478)

___

### list

• **list**: [`QuotationRequestItem`](QuotationRequestItem.md)[] = `[]`

The list of associated quotation request items

**`Generated`**

from field: repeated Genesis.QuotationRequestItem list = 20;

#### Defined in

[src/quotations_requests_pb.ts:513](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L513)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this quotation request

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/quotations_requests_pb.ts:436](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L436)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this quotation request

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/quotations_requests_pb.ts:415](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L415)

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

[src/quotations_requests_pb.ts:499](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L499)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: int64 purchase_enquiry_id = 12;

#### Defined in

[src/quotations_requests_pb.ts:471](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L471)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation request

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/quotations_requests_pb.ts:457](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L457)

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: int64 renewal_period = 15;

#### Defined in

[src/quotations_requests_pb.ts:492](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L492)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this quotation request

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/quotations_requests_pb.ts:429](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L429)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_requests_pb.ts:450](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L450)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L529)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:527](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L527)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationRequest"``

#### Defined in

[src/quotations_requests_pb.ts:528](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L528)

## Methods

### clone

▸ **clone**(): [`QuotationRequest`](QuotationRequest.md)

Create a deep copy.

#### Returns

[`QuotationRequest`](QuotationRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`<[`QuotationRequest`](QuotationRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationRequest`](QuotationRequest.md)

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

[`QuotationRequest`](QuotationRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationRequest`](QuotationRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationRequest`](QuotationRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationRequest`](QuotationRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationRequest`](QuotationRequest.md)\>

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
| `a` | `undefined` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`<[`QuotationRequest`](QuotationRequest.md)\> |
| `b` | `undefined` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`<[`QuotationRequest`](QuotationRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:561](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L561)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:549](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L549)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:553](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L553)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:557](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L557)
