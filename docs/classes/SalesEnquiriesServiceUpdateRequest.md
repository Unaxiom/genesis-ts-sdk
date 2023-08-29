[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceUpdateRequest

# Class: SalesEnquiriesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.SalesEnquiriesServiceUpdateRequest

## Hierarchy

- `Message`<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\>

  ↳ **`SalesEnquiriesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceUpdateRequest.md#constructor)

### Properties

- [buyerClientId](SalesEnquiriesServiceUpdateRequest.md#buyerclientid)
- [consigneeClientId](SalesEnquiriesServiceUpdateRequest.md#consigneeclientid)
- [currencyId](SalesEnquiriesServiceUpdateRequest.md#currencyid)
- [description](SalesEnquiriesServiceUpdateRequest.md#description)
- [formData](SalesEnquiriesServiceUpdateRequest.md#formdata)
- [id](SalesEnquiriesServiceUpdateRequest.md#id)
- [miscellaneousCost](SalesEnquiriesServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SalesEnquiriesServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SalesEnquiriesServiceUpdateRequest.md#overalldiscount)
- [priority](SalesEnquiriesServiceUpdateRequest.md#priority)
- [referenceId](SalesEnquiriesServiceUpdateRequest.md#referenceid)
- [roundOff](SalesEnquiriesServiceUpdateRequest.md#roundoff)
- [userComment](SalesEnquiriesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesEnquiriesServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesEnquiriesServiceUpdateRequest.md#fields)
- [runtime](SalesEnquiriesServiceUpdateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceUpdateRequest.md#clone)
- [equals](SalesEnquiriesServiceUpdateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceUpdateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceUpdateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceUpdateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceUpdateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceUpdateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;SalesEnquiriesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:361](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L361)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: int64 buyer_client_id = 13;

#### Defined in

[src/sales_enquiries_pb.ts:310](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L310)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: int64 consignee_client_id = 12;

#### Defined in

[src/sales_enquiries_pb.ts:303](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L303)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: int64 currency_id = 15;

#### Defined in

[src/sales_enquiries_pb.ts:324](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L324)

___

### description

• **description**: `string` = `""`

The description of the sales enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/sales_enquiries_pb.ts:331](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L331)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_enquiries_pb.ts:359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L359)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/sales_enquiries_pb.ts:275](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L275)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

The miscellaneous cost (in cents)

**`Generated`**

from field: int64 miscellaneous_cost = 17;

#### Defined in

[src/sales_enquiries_pb.ts:338](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L338)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/sales_enquiries_pb.ts:282](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L282)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The overall discount (in cents)

**`Generated`**

from field: int64 overall_discount = 18;

#### Defined in

[src/sales_enquiries_pb.ts:345](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L345)

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/sales_enquiries_pb.ts:317](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L317)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_enquiries_pb.ts:296](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L296)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off amount (in cents) (both positive and negative values are allowed)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_enquiries_pb.ts:352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L352)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_enquiries_pb.ts:268](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L268)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/sales_enquiries_pb.ts:289](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L289)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:368](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L368)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:366](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L366)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesServiceUpdateRequest"``

#### Defined in

[src/sales_enquiries_pb.ts:367](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L367)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

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

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L397)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L385)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:389](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L389)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceUpdateRequest`](SalesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:393](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L393)
