[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationRequestItem

# Class: QuotationRequestItem

Describes the parameters that constitute an item associated to a quotation request

**`Generated`**

from message Genesis.QuotationRequestItem

## Hierarchy

- `Message`<[`QuotationRequestItem`](QuotationRequestItem.md)\>

  ↳ **`QuotationRequestItem`**

## Table of contents

### Constructors

- [constructor](QuotationRequestItem.md#constructor)

### Properties

- [approvalMetadata](QuotationRequestItem.md#approvalmetadata)
- [baselinePrice](QuotationRequestItem.md#baselineprice)
- [deliveryDate](QuotationRequestItem.md#deliverydate)
- [entityUuid](QuotationRequestItem.md#entityuuid)
- [hsnSacCode](QuotationRequestItem.md#hsnsaccode)
- [metadata](QuotationRequestItem.md#metadata)
- [name](QuotationRequestItem.md#name)
- [needApproval](QuotationRequestItem.md#needapproval)
- [quantity](QuotationRequestItem.md#quantity)
- [quotationRequestId](QuotationRequestItem.md#quotationrequestid)
- [specifications](QuotationRequestItem.md#specifications)
- [uomId](QuotationRequestItem.md#uomid)
- [userComment](QuotationRequestItem.md#usercomment)
- [vaultFolderId](QuotationRequestItem.md#vaultfolderid)
- [fields](QuotationRequestItem.md#fields)
- [runtime](QuotationRequestItem.md#runtime)
- [typeName](QuotationRequestItem.md#typename)

### Methods

- [clone](QuotationRequestItem.md#clone)
- [equals](QuotationRequestItem.md#equals)
- [fromBinary](QuotationRequestItem.md#frombinary)
- [fromJson](QuotationRequestItem.md#fromjson)
- [fromJsonString](QuotationRequestItem.md#fromjsonstring)
- [getType](QuotationRequestItem.md#gettype)
- [toBinary](QuotationRequestItem.md#tobinary)
- [toJSON](QuotationRequestItem.md#tojson)
- [toJson](QuotationRequestItem.md#tojson-1)
- [toJsonString](QuotationRequestItem.md#tojsonstring)
- [equals](QuotationRequestItem.md#equals-1)
- [fromBinary](QuotationRequestItem.md#frombinary-1)
- [fromJson](QuotationRequestItem.md#fromjson-1)
- [fromJsonString](QuotationRequestItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationRequestItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationRequestItem`](QuotationRequestItem.md)\> |

#### Overrides

Message&lt;QuotationRequestItem\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L899)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/quotations_requests_pb.ts:820](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L820)

___

### baselinePrice

• **baselinePrice**: `bigint` = `protoInt64.zero`

The min price (in cents)

**`Generated`**

from field: int64 baseline_price = 13;

#### Defined in

[src/quotations_requests_pb.ts:869](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L869)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

[src/quotations_requests_pb.ts:890](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L890)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/quotations_requests_pb.ts:806](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L806)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 12;

#### Defined in

[src/quotations_requests_pb.ts:862](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L862)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this quotation request

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/quotations_requests_pb.ts:813](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L813)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/quotations_requests_pb.ts:855](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L855)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/quotations_requests_pb.ts:827](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L827)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity required (in cents)

**`Generated`**

from field: int64 quantity = 14;

#### Defined in

[src/quotations_requests_pb.ts:876](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L876)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

Stores the quotation request ID

**`Generated`**

from field: int64 quotation_request_id = 10;

#### Defined in

[src/quotations_requests_pb.ts:848](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L848)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

[src/quotations_requests_pb.ts:897](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L897)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: int64 uom_id = 15;

#### Defined in

[src/quotations_requests_pb.ts:883](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L883)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/quotations_requests_pb.ts:834](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L834)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_requests_pb.ts:841](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L841)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:906](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L906)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:904](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L904)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationRequestItem"``

#### Defined in

[src/quotations_requests_pb.ts:905](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L905)

## Methods

### clone

▸ **clone**(): [`QuotationRequestItem`](QuotationRequestItem.md)

Create a deep copy.

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationRequestItem`](QuotationRequestItem.md) \| `PlainMessage`<[`QuotationRequestItem`](QuotationRequestItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

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

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationRequestItem`](QuotationRequestItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationRequestItem`](QuotationRequestItem.md)\>

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
| `a` | `undefined` \| [`QuotationRequestItem`](QuotationRequestItem.md) \| `PlainMessage`<[`QuotationRequestItem`](QuotationRequestItem.md)\> |
| `b` | `undefined` \| [`QuotationRequestItem`](QuotationRequestItem.md) \| `PlainMessage`<[`QuotationRequestItem`](QuotationRequestItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:935](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L935)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Defined in

[src/quotations_requests_pb.ts:923](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L923)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Defined in

[src/quotations_requests_pb.ts:927](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L927)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationRequestItem`](QuotationRequestItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItem`](QuotationRequestItem.md)

#### Defined in

[src/quotations_requests_pb.ts:931](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L931)
