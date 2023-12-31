[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationResponseItem

# Class: QuotationResponseItem

Describes the parameters that constitute an item associated to a quotation response

**`Generated`**

from message Genesis.QuotationResponseItem

## Hierarchy

- `Message`<[`QuotationResponseItem`](QuotationResponseItem.md)\>

  ↳ **`QuotationResponseItem`**

## Table of contents

### Constructors

- [constructor](QuotationResponseItem.md#constructor)

### Properties

- [approvalMetadata](QuotationResponseItem.md#approvalmetadata)
- [deliveryTimeInDays](QuotationResponseItem.md#deliverytimeindays)
- [entityUuid](QuotationResponseItem.md#entityuuid)
- [hsnSacCode](QuotationResponseItem.md#hsnsaccode)
- [internalQuantity](QuotationResponseItem.md#internalquantity)
- [metadata](QuotationResponseItem.md#metadata)
- [name](QuotationResponseItem.md#name)
- [needApproval](QuotationResponseItem.md#needapproval)
- [quotationRequestItemId](QuotationResponseItem.md#quotationrequestitemid)
- [quotationResponseId](QuotationResponseItem.md#quotationresponseid)
- [specifications](QuotationResponseItem.md#specifications)
- [taxGroupId](QuotationResponseItem.md#taxgroupid)
- [uomId](QuotationResponseItem.md#uomid)
- [userComment](QuotationResponseItem.md#usercomment)
- [vaultFolderId](QuotationResponseItem.md#vaultfolderid)
- [vendorQuantity](QuotationResponseItem.md#vendorquantity)
- [vendorUnitPrice](QuotationResponseItem.md#vendorunitprice)
- [vendorUomId](QuotationResponseItem.md#vendoruomid)
- [fields](QuotationResponseItem.md#fields)
- [runtime](QuotationResponseItem.md#runtime)
- [typeName](QuotationResponseItem.md#typename)

### Methods

- [clone](QuotationResponseItem.md#clone)
- [equals](QuotationResponseItem.md#equals)
- [fromBinary](QuotationResponseItem.md#frombinary)
- [fromJson](QuotationResponseItem.md#fromjson)
- [fromJsonString](QuotationResponseItem.md#fromjsonstring)
- [getType](QuotationResponseItem.md#gettype)
- [toBinary](QuotationResponseItem.md#tobinary)
- [toJSON](QuotationResponseItem.md#tojson)
- [toJson](QuotationResponseItem.md#tojson-1)
- [toJsonString](QuotationResponseItem.md#tojsonstring)
- [equals](QuotationResponseItem.md#equals-1)
- [fromBinary](QuotationResponseItem.md#frombinary-1)
- [fromJson](QuotationResponseItem.md#fromjson-1)
- [fromJsonString](QuotationResponseItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationResponseItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationResponseItem`](QuotationResponseItem.md)\> |

#### Overrides

Message&lt;QuotationResponseItem\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:944](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L944)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/quotations_responses_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L837)

___

### deliveryTimeInDays

• **deliveryTimeInDays**: `bigint` = `protoInt64.zero`

The delivery time in days (in cents)

**`Generated`**

from field: int64 delivery_time_in_days = 20;

#### Defined in

[src/quotations_responses_pb.ts:935](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L935)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/quotations_responses_pb.ts:823](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L823)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 13;

#### Defined in

[src/quotations_responses_pb.ts:886](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L886)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The internal quantity offered (in cents)

**`Generated`**

from field: int64 internal_quantity = 15;

#### Defined in

[src/quotations_responses_pb.ts:900](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L900)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this quotation response

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/quotations_responses_pb.ts:830](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L830)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 12;

#### Defined in

[src/quotations_responses_pb.ts:879](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L879)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/quotations_responses_pb.ts:844](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L844)

___

### quotationRequestItemId

• **quotationRequestItemId**: `bigint` = `protoInt64.zero`

Stores the corresponding item ID of the item from the quotation request

**`Generated`**

from field: int64 quotation_request_item_id = 11;

#### Defined in

[src/quotations_responses_pb.ts:872](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L872)

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: int64 quotation_response_id = 10;

#### Defined in

[src/quotations_responses_pb.ts:865](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L865)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/quotations_responses_pb.ts:942](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L942)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID

**`Generated`**

from field: int64 tax_group_id = 19;

#### Defined in

[src/quotations_responses_pb.ts:928](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L928)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The internal unit of material

**`Generated`**

from field: int64 uom_id = 14;

#### Defined in

[src/quotations_responses_pb.ts:893](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L893)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/quotations_responses_pb.ts:851](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L851)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_responses_pb.ts:858](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L858)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

The quantity offered in vendor's unit of material (in cents)

**`Generated`**

from field: int64 vendor_quantity = 17;

#### Defined in

[src/quotations_responses_pb.ts:914](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L914)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price per vendor's unit of material

**`Generated`**

from field: int64 vendor_unit_price = 18;

#### Defined in

[src/quotations_responses_pb.ts:921](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L921)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The vendor's unit of material

**`Generated`**

from field: int64 vendor_uom_id = 16;

#### Defined in

[src/quotations_responses_pb.ts:907](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L907)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:951](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L951)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:949](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L949)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationResponseItem"``

#### Defined in

[src/quotations_responses_pb.ts:950](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L950)

## Methods

### clone

▸ **clone**(): [`QuotationResponseItem`](QuotationResponseItem.md)

Create a deep copy.

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationResponseItem`](QuotationResponseItem.md) \| `PlainMessage`<[`QuotationResponseItem`](QuotationResponseItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

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

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationResponseItem`](QuotationResponseItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationResponseItem`](QuotationResponseItem.md)\>

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
| `a` | `undefined` \| [`QuotationResponseItem`](QuotationResponseItem.md) \| `PlainMessage`<[`QuotationResponseItem`](QuotationResponseItem.md)\> |
| `b` | `undefined` \| [`QuotationResponseItem`](QuotationResponseItem.md) \| `PlainMessage`<[`QuotationResponseItem`](QuotationResponseItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:984](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L984)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Defined in

[src/quotations_responses_pb.ts:972](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L972)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Defined in

[src/quotations_responses_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L976)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationResponseItem`](QuotationResponseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItem`](QuotationResponseItem.md)

#### Defined in

[src/quotations_responses_pb.ts:980](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L980)
