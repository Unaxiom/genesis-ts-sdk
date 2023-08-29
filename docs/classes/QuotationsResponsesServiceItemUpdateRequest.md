[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceItemUpdateRequest

# Class: QuotationsResponsesServiceItemUpdateRequest

Describes the parameters required to update an item in a quotation response

**`Generated`**

from message Genesis.QuotationsResponsesServiceItemUpdateRequest

## Hierarchy

- `Message`<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\>

  ↳ **`QuotationsResponsesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryTimeInDays](QuotationsResponsesServiceItemUpdateRequest.md#deliverytimeindays)
- [hsnSacCode](QuotationsResponsesServiceItemUpdateRequest.md#hsnsaccode)
- [id](QuotationsResponsesServiceItemUpdateRequest.md#id)
- [internalQuantity](QuotationsResponsesServiceItemUpdateRequest.md#internalquantity)
- [name](QuotationsResponsesServiceItemUpdateRequest.md#name)
- [specifications](QuotationsResponsesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](QuotationsResponsesServiceItemUpdateRequest.md#taxgroupid)
- [uomId](QuotationsResponsesServiceItemUpdateRequest.md#uomid)
- [userComment](QuotationsResponsesServiceItemUpdateRequest.md#usercomment)
- [vaultFolderId](QuotationsResponsesServiceItemUpdateRequest.md#vaultfolderid)
- [vendorQuantity](QuotationsResponsesServiceItemUpdateRequest.md#vendorquantity)
- [vendorUnitPrice](QuotationsResponsesServiceItemUpdateRequest.md#vendorunitprice)
- [vendorUomId](QuotationsResponsesServiceItemUpdateRequest.md#vendoruomid)
- [fields](QuotationsResponsesServiceItemUpdateRequest.md#fields)
- [runtime](QuotationsResponsesServiceItemUpdateRequest.md#runtime)
- [typeName](QuotationsResponsesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](QuotationsResponsesServiceItemUpdateRequest.md#clone)
- [equals](QuotationsResponsesServiceItemUpdateRequest.md#equals)
- [fromBinary](QuotationsResponsesServiceItemUpdateRequest.md#frombinary)
- [fromJson](QuotationsResponsesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](QuotationsResponsesServiceItemUpdateRequest.md#gettype)
- [toBinary](QuotationsResponsesServiceItemUpdateRequest.md#tobinary)
- [toJSON](QuotationsResponsesServiceItemUpdateRequest.md#tojson)
- [toJson](QuotationsResponsesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceItemUpdateRequest.md#tojsonstring)
- [equals](QuotationsResponsesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](QuotationsResponsesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;QuotationsResponsesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:771](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L771)

## Properties

### deliveryTimeInDays

• **deliveryTimeInDays**: `bigint` = `protoInt64.zero`

The delivery time in days (in cents)

**`Generated`**

from field: int64 delivery_time_in_days = 20;

#### Defined in

[src/quotations_responses_pb.ts:762](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L762)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 13;

#### Defined in

[src/quotations_responses_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L713)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/quotations_responses_pb.ts:692](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L692)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The internal quantity offered (in cents)

**`Generated`**

from field: int64 internal_quantity = 15;

#### Defined in

[src/quotations_responses_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L727)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 12;

#### Defined in

[src/quotations_responses_pb.ts:706](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L706)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/quotations_responses_pb.ts:769](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L769)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID

**`Generated`**

from field: int64 tax_group_id = 19;

#### Defined in

[src/quotations_responses_pb.ts:755](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L755)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The internal unit of material

**`Generated`**

from field: int64 uom_id = 14;

#### Defined in

[src/quotations_responses_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L720)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/quotations_responses_pb.ts:685](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L685)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_responses_pb.ts:699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L699)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

The quantity offered in vendor's unit of material (in cents)

**`Generated`**

from field: int64 vendor_quantity = 17;

#### Defined in

[src/quotations_responses_pb.ts:741](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L741)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price per vendor's unit of material

**`Generated`**

from field: int64 vendor_unit_price = 18;

#### Defined in

[src/quotations_responses_pb.ts:748](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L748)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The vendor's unit of material

**`Generated`**

from field: int64 vendor_uom_id = 16;

#### Defined in

[src/quotations_responses_pb.ts:734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L734)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:778](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L778)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:776](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L776)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsResponsesServiceItemUpdateRequest"``

#### Defined in

[src/quotations_responses_pb.ts:777](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L777)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

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

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:806](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L806)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:794](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L794)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:798](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L798)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:802](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L802)
