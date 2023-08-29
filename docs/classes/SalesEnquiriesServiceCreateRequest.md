[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceCreateRequest

# Class: SalesEnquiriesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.SalesEnquiriesServiceCreateRequest

## Hierarchy

- `Message`<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

  ↳ **`SalesEnquiriesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceCreateRequest.md#constructor)

### Properties

- [buyerClientId](SalesEnquiriesServiceCreateRequest.md#buyerclientid)
- [consigneeClientId](SalesEnquiriesServiceCreateRequest.md#consigneeclientid)
- [currencyId](SalesEnquiriesServiceCreateRequest.md#currencyid)
- [description](SalesEnquiriesServiceCreateRequest.md#description)
- [entityUuid](SalesEnquiriesServiceCreateRequest.md#entityuuid)
- [formData](SalesEnquiriesServiceCreateRequest.md#formdata)
- [miscellaneousCost](SalesEnquiriesServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SalesEnquiriesServiceCreateRequest.md#overalldiscount)
- [priority](SalesEnquiriesServiceCreateRequest.md#priority)
- [referenceId](SalesEnquiriesServiceCreateRequest.md#referenceid)
- [roundOff](SalesEnquiriesServiceCreateRequest.md#roundoff)
- [userComment](SalesEnquiriesServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesEnquiriesServiceCreateRequest.md#vaultfolderid)
- [fields](SalesEnquiriesServiceCreateRequest.md#fields)
- [runtime](SalesEnquiriesServiceCreateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceCreateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceCreateRequest.md#clone)
- [equals](SalesEnquiriesServiceCreateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceCreateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceCreateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceCreateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceCreateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceCreateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceCreateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceCreateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;SalesEnquiriesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:216](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L216)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: int64 buyer_client_id = 13;

#### Defined in

[src/sales_enquiries_pb.ts:165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L165)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: int64 consignee_client_id = 12;

#### Defined in

[src/sales_enquiries_pb.ts:158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L158)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: int64 currency_id = 15;

#### Defined in

[src/sales_enquiries_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L179)

___

### description

• **description**: `string` = `""`

The description of the sales enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/sales_enquiries_pb.ts:186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L186)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_enquiries_pb.ts:130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L130)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_enquiries_pb.ts:214](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L214)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

The miscellaneous cost (in cents)

**`Generated`**

from field: int64 miscellaneous_cost = 17;

#### Defined in

[src/sales_enquiries_pb.ts:193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L193)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The overall discount (in cents)

**`Generated`**

from field: int64 overall_discount = 18;

#### Defined in

[src/sales_enquiries_pb.ts:200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L200)

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/sales_enquiries_pb.ts:172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L172)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_enquiries_pb.ts:151](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L151)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off amount (in cents) (both positive and negative values are allowed)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_enquiries_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L207)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/sales_enquiries_pb.ts:137](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L137)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/sales_enquiries_pb.ts:144](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L144)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:223](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L223)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:221](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L221)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesServiceCreateRequest"``

#### Defined in

[src/sales_enquiries_pb.ts:222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L222)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

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

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:251](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L251)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L239)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:243](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L243)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:247](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L247)
