[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchaseEnquiry

# Class: PurchaseEnquiry

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.PurchaseEnquiry

## Hierarchy

- `Message`<[`PurchaseEnquiry`](PurchaseEnquiry.md)\>

  ↳ **`PurchaseEnquiry`**

## Table of contents

### Constructors

- [constructor](PurchaseEnquiry.md#constructor)

### Properties

- [approvalMetadata](PurchaseEnquiry.md#approvalmetadata)
- [completedOn](PurchaseEnquiry.md#completedon)
- [description](PurchaseEnquiry.md#description)
- [entityUuid](PurchaseEnquiry.md#entityuuid)
- [finalRefNumber](PurchaseEnquiry.md#finalrefnumber)
- [formData](PurchaseEnquiry.md#formdata)
- [list](PurchaseEnquiry.md#list)
- [logs](PurchaseEnquiry.md#logs)
- [metadata](PurchaseEnquiry.md#metadata)
- [priority](PurchaseEnquiry.md#priority)
- [referenceId](PurchaseEnquiry.md#referenceid)
- [status](PurchaseEnquiry.md#status)
- [vaultFolderId](PurchaseEnquiry.md#vaultfolderid)
- [fields](PurchaseEnquiry.md#fields)
- [runtime](PurchaseEnquiry.md#runtime)
- [typeName](PurchaseEnquiry.md#typename)

### Methods

- [clone](PurchaseEnquiry.md#clone)
- [equals](PurchaseEnquiry.md#equals)
- [fromBinary](PurchaseEnquiry.md#frombinary)
- [fromJson](PurchaseEnquiry.md#fromjson)
- [fromJsonString](PurchaseEnquiry.md#fromjsonstring)
- [getType](PurchaseEnquiry.md#gettype)
- [toBinary](PurchaseEnquiry.md#tobinary)
- [toJSON](PurchaseEnquiry.md#tojson)
- [toJson](PurchaseEnquiry.md#tojson-1)
- [toJsonString](PurchaseEnquiry.md#tojsonstring)
- [equals](PurchaseEnquiry.md#equals-1)
- [fromBinary](PurchaseEnquiry.md#frombinary-1)
- [fromJson](PurchaseEnquiry.md#fromjson-1)
- [fromJsonString](PurchaseEnquiry.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseEnquiry**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchaseEnquiry`](PurchaseEnquiry.md)\> |

#### Overrides

Message&lt;PurchaseEnquiry\&gt;.constructor

#### Defined in

[src/purchases_enquiries_pb.ts:388](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L388)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_enquiries_pb.ts:316](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L316)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this purchase enquiry was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/purchases_enquiries_pb.ts:337](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L337)

___

### description

• **description**: `string` = `""`

The description of the purchase enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/purchases_enquiries_pb.ts:372](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L372)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_enquiries_pb.ts:302](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L302)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/purchases_enquiries_pb.ts:358](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L358)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/purchases_enquiries_pb.ts:386](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L386)

___

### list

• **list**: [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)[] = `[]`

The list of associated purchase enquiry items

**`Generated`**

from field: repeated Genesis.PurchaseEnquiryItem list = 20;

#### Defined in

[src/purchases_enquiries_pb.ts:379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L379)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this purchase enquiry

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/purchases_enquiries_pb.ts:330](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L330)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase enquiry

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_enquiries_pb.ts:309](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L309)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/purchases_enquiries_pb.ts:365](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L365)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_enquiries_pb.ts:351](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L351)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this purchase enquiry

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/purchases_enquiries_pb.ts:323](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L323)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/purchases_enquiries_pb.ts:344](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L344)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries_pb.ts:395](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L395)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries_pb.ts:393](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L393)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchaseEnquiry"``

#### Defined in

[src/purchases_enquiries_pb.ts:394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L394)

## Methods

### clone

▸ **clone**(): [`PurchaseEnquiry`](PurchaseEnquiry.md)

Create a deep copy.

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseEnquiry`](PurchaseEnquiry.md) \| `PlainMessage`<[`PurchaseEnquiry`](PurchaseEnquiry.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

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

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchaseEnquiry`](PurchaseEnquiry.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchaseEnquiry`](PurchaseEnquiry.md)\>

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
| `a` | `undefined` \| [`PurchaseEnquiry`](PurchaseEnquiry.md) \| `PlainMessage`<[`PurchaseEnquiry`](PurchaseEnquiry.md)\> |
| `b` | `undefined` \| [`PurchaseEnquiry`](PurchaseEnquiry.md) \| `PlainMessage`<[`PurchaseEnquiry`](PurchaseEnquiry.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries_pb.ts:423](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L423)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Defined in

[src/purchases_enquiries_pb.ts:411](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L411)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Defined in

[src/purchases_enquiries_pb.ts:415](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L415)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Defined in

[src/purchases_enquiries_pb.ts:419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L419)
