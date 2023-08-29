[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceItemCreateRequest

# Class: QuotationsResponsesServiceItemCreateRequest

Describes the parameters required to add an item to a quotation response

**`Generated`**

from message Genesis.QuotationsResponsesServiceItemCreateRequest

## Hierarchy

- `Message`<[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)\>

  ↳ **`QuotationsResponsesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceItemCreateRequest.md#constructor)

### Properties

- [deliveryTimeInDays](QuotationsResponsesServiceItemCreateRequest.md#deliverytimeindays)
- [hsnSacCode](QuotationsResponsesServiceItemCreateRequest.md#hsnsaccode)
- [internalQuantity](QuotationsResponsesServiceItemCreateRequest.md#internalquantity)
- [name](QuotationsResponsesServiceItemCreateRequest.md#name)
- [quotationRequestItemId](QuotationsResponsesServiceItemCreateRequest.md#quotationrequestitemid)
- [quotationResponseId](QuotationsResponsesServiceItemCreateRequest.md#quotationresponseid)
- [specifications](QuotationsResponsesServiceItemCreateRequest.md#specifications)
- [taxGroupId](QuotationsResponsesServiceItemCreateRequest.md#taxgroupid)
- [uomId](QuotationsResponsesServiceItemCreateRequest.md#uomid)
- [userComment](QuotationsResponsesServiceItemCreateRequest.md#usercomment)
- [vaultFolderId](QuotationsResponsesServiceItemCreateRequest.md#vaultfolderid)
- [vendorQuantity](QuotationsResponsesServiceItemCreateRequest.md#vendorquantity)
- [vendorUnitPrice](QuotationsResponsesServiceItemCreateRequest.md#vendorunitprice)
- [vendorUomId](QuotationsResponsesServiceItemCreateRequest.md#vendoruomid)
- [fields](QuotationsResponsesServiceItemCreateRequest.md#fields)
- [runtime](QuotationsResponsesServiceItemCreateRequest.md#runtime)
- [typeName](QuotationsResponsesServiceItemCreateRequest.md#typename)

### Methods

- [clone](QuotationsResponsesServiceItemCreateRequest.md#clone)
- [equals](QuotationsResponsesServiceItemCreateRequest.md#equals)
- [fromBinary](QuotationsResponsesServiceItemCreateRequest.md#frombinary)
- [fromJson](QuotationsResponsesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceItemCreateRequest.md#fromjsonstring)
- [getType](QuotationsResponsesServiceItemCreateRequest.md#gettype)
- [toBinary](QuotationsResponsesServiceItemCreateRequest.md#tobinary)
- [toJSON](QuotationsResponsesServiceItemCreateRequest.md#tojson)
- [toJson](QuotationsResponsesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceItemCreateRequest.md#tojsonstring)
- [equals](QuotationsResponsesServiceItemCreateRequest.md#equals-1)
- [fromBinary](QuotationsResponsesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;QuotationsResponsesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:632](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L632)

## Properties

### deliveryTimeInDays

• **deliveryTimeInDays**: `bigint` = `protoInt64.zero`

The delivery time in days (in cents)

**`Generated`**

from field: int64 delivery_time_in_days = 20;

#### Defined in

[src/quotations_responses_pb.ts:623](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L623)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 13;

#### Defined in

[src/quotations_responses_pb.ts:574](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L574)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The internal quantity offered (in cents)

**`Generated`**

from field: int64 internal_quantity = 15;

#### Defined in

[src/quotations_responses_pb.ts:588](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L588)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 12;

#### Defined in

[src/quotations_responses_pb.ts:567](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L567)

___

### quotationRequestItemId

• **quotationRequestItemId**: `bigint` = `protoInt64.zero`

Stores the corresponding item ID of the item from the quotation request

**`Generated`**

from field: int64 quotation_request_item_id = 11;

#### Defined in

[src/quotations_responses_pb.ts:560](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L560)

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: int64 quotation_response_id = 10;

#### Defined in

[src/quotations_responses_pb.ts:553](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L553)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/quotations_responses_pb.ts:630](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L630)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID

**`Generated`**

from field: int64 tax_group_id = 19;

#### Defined in

[src/quotations_responses_pb.ts:616](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L616)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The internal unit of material

**`Generated`**

from field: int64 uom_id = 14;

#### Defined in

[src/quotations_responses_pb.ts:581](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L581)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/quotations_responses_pb.ts:539](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L539)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_responses_pb.ts:546](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L546)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

The quantity offered in vendor's unit of material (in cents)

**`Generated`**

from field: int64 vendor_quantity = 17;

#### Defined in

[src/quotations_responses_pb.ts:602](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L602)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price per vendor's unit of material

**`Generated`**

from field: int64 vendor_unit_price = 18;

#### Defined in

[src/quotations_responses_pb.ts:609](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L609)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The vendor's unit of material

**`Generated`**

from field: int64 vendor_uom_id = 16;

#### Defined in

[src/quotations_responses_pb.ts:595](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L595)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:639](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L639)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L637)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsResponsesServiceItemCreateRequest"``

#### Defined in

[src/quotations_responses_pb.ts:638](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L638)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

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

[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:668](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L668)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L656)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:660](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L660)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemCreateRequest`](QuotationsResponsesServiceItemCreateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:664](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L664)
