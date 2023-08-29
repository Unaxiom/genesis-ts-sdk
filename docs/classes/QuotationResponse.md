[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationResponse

# Class: QuotationResponse

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.QuotationResponse

## Hierarchy

- `Message`<[`QuotationResponse`](QuotationResponse.md)\>

  ↳ **`QuotationResponse`**

## Table of contents

### Constructors

- [constructor](QuotationResponse.md#constructor)

### Properties

- [approvalMetadata](QuotationResponse.md#approvalmetadata)
- [completedOn](QuotationResponse.md#completedon)
- [currencyId](QuotationResponse.md#currencyid)
- [description](QuotationResponse.md#description)
- [entityUuid](QuotationResponse.md#entityuuid)
- [finalRefNumber](QuotationResponse.md#finalrefnumber)
- [formData](QuotationResponse.md#formdata)
- [list](QuotationResponse.md#list)
- [logs](QuotationResponse.md#logs)
- [metadata](QuotationResponse.md#metadata)
- [quotationRequestId](QuotationResponse.md#quotationrequestid)
- [refFrom](QuotationResponse.md#reffrom)
- [refId](QuotationResponse.md#refid)
- [referenceId](QuotationResponse.md#referenceid)
- [status](QuotationResponse.md#status)
- [vaultFolderId](QuotationResponse.md#vaultfolderid)
- [fields](QuotationResponse.md#fields)
- [runtime](QuotationResponse.md#runtime)
- [typeName](QuotationResponse.md#typename)

### Methods

- [clone](QuotationResponse.md#clone)
- [equals](QuotationResponse.md#equals)
- [fromBinary](QuotationResponse.md#frombinary)
- [fromJson](QuotationResponse.md#fromjson)
- [fromJsonString](QuotationResponse.md#fromjsonstring)
- [getType](QuotationResponse.md#gettype)
- [toBinary](QuotationResponse.md#tobinary)
- [toJSON](QuotationResponse.md#tojson)
- [toJson](QuotationResponse.md#tojson-1)
- [toJsonString](QuotationResponse.md#tojsonstring)
- [equals](QuotationResponse.md#equals-1)
- [fromBinary](QuotationResponse.md#frombinary-1)
- [fromJson](QuotationResponse.md#fromjson-1)
- [fromJsonString](QuotationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationResponse`](QuotationResponse.md)\> |

#### Overrides

Message&lt;QuotationResponse\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:484](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L484)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/quotations_responses_pb.ts:391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L391)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this quotation response was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/quotations_responses_pb.ts:412](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L412)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: int64 currency_id = 15;

#### Defined in

[src/quotations_responses_pb.ts:461](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L461)

___

### description

• **description**: `string` = `""`

The description of the quotation response

**`Generated`**

from field: string description = 16;

#### Defined in

[src/quotations_responses_pb.ts:468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L468)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/quotations_responses_pb.ts:377](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L377)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/quotations_responses_pb.ts:433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L433)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/quotations_responses_pb.ts:482](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L482)

___

### list

• **list**: [`QuotationResponseItem`](QuotationResponseItem.md)[] = `[]`

The list of associated quotation response items

**`Generated`**

from field: repeated Genesis.QuotationResponseItem list = 20;

#### Defined in

[src/quotations_responses_pb.ts:475](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L475)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this quotation response

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/quotations_responses_pb.ts:405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L405)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this quotation response

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/quotations_responses_pb.ts:384](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L384)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

The associated quotation request

**`Generated`**

from field: int64 quotation_request_id = 12;

#### Defined in

[src/quotations_responses_pb.ts:440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L440)

___

### refFrom

• **refFrom**: `string` = `""`

The associated party type

**`Generated`**

from field: string ref_from = 13;

#### Defined in

[src/quotations_responses_pb.ts:447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L447)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated party ID

**`Generated`**

from field: int64 ref_id = 14;

#### Defined in

[src/quotations_responses_pb.ts:454](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L454)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation response

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/quotations_responses_pb.ts:426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L426)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this quotation response

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/quotations_responses_pb.ts:398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L398)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_responses_pb.ts:419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L419)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:491](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L491)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L489)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationResponse"``

#### Defined in

[src/quotations_responses_pb.ts:490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L490)

## Methods

### clone

▸ **clone**(): [`QuotationResponse`](QuotationResponse.md)

Create a deep copy.

#### Returns

[`QuotationResponse`](QuotationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationResponse`](QuotationResponse.md) \| `PlainMessage`<[`QuotationResponse`](QuotationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationResponse`](QuotationResponse.md)

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

[`QuotationResponse`](QuotationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationResponse`](QuotationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationResponse`](QuotationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationResponse`](QuotationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationResponse`](QuotationResponse.md)\>

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
| `a` | `undefined` \| [`QuotationResponse`](QuotationResponse.md) \| `PlainMessage`<[`QuotationResponse`](QuotationResponse.md)\> |
| `b` | `undefined` \| [`QuotationResponse`](QuotationResponse.md) \| `PlainMessage`<[`QuotationResponse`](QuotationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:522](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L522)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationResponse`](QuotationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Defined in

[src/quotations_responses_pb.ts:510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L510)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationResponse`](QuotationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Defined in

[src/quotations_responses_pb.ts:514](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L514)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationResponse`](QuotationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Defined in

[src/quotations_responses_pb.ts:518](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L518)
