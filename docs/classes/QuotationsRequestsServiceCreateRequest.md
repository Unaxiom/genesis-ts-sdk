[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceCreateRequest

# Class: QuotationsRequestsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.QuotationsRequestsServiceCreateRequest

## Hierarchy

- `Message`<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

  ↳ **`QuotationsRequestsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceCreateRequest.md#constructor)

### Properties

- [currencyId](QuotationsRequestsServiceCreateRequest.md#currencyid)
- [description](QuotationsRequestsServiceCreateRequest.md#description)
- [entityUuid](QuotationsRequestsServiceCreateRequest.md#entityuuid)
- [formData](QuotationsRequestsServiceCreateRequest.md#formdata)
- [lastDate](QuotationsRequestsServiceCreateRequest.md#lastdate)
- [priority](QuotationsRequestsServiceCreateRequest.md#priority)
- [purchaseEnquiryId](QuotationsRequestsServiceCreateRequest.md#purchaseenquiryid)
- [referenceId](QuotationsRequestsServiceCreateRequest.md#referenceid)
- [renewalPeriod](QuotationsRequestsServiceCreateRequest.md#renewalperiod)
- [userComment](QuotationsRequestsServiceCreateRequest.md#usercomment)
- [vaultFolderId](QuotationsRequestsServiceCreateRequest.md#vaultfolderid)
- [fields](QuotationsRequestsServiceCreateRequest.md#fields)
- [runtime](QuotationsRequestsServiceCreateRequest.md#runtime)
- [typeName](QuotationsRequestsServiceCreateRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceCreateRequest.md#clone)
- [equals](QuotationsRequestsServiceCreateRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceCreateRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceCreateRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceCreateRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceCreateRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceCreateRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceCreateRequest.md#tojson)
- [toJson](QuotationsRequestsServiceCreateRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceCreateRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceCreateRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceCreateRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L186)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: int64 currency_id = 14;

#### Defined in

[src/quotations_requests_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L156)

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

[src/quotations_requests_pb.ts:177](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L177)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/quotations_requests_pb.ts:114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L114)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/quotations_requests_pb.ts:184](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L184)

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

[src/quotations_requests_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L149)

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

[src/quotations_requests_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L170)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: int64 purchase_enquiry_id = 12;

#### Defined in

[src/quotations_requests_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L142)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation request

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/quotations_requests_pb.ts:135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L135)

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: int64 renewal_period = 15;

#### Defined in

[src/quotations_requests_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L163)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/quotations_requests_pb.ts:121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L121)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_requests_pb.ts:128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L128)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L193)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L191)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServiceCreateRequest"``

#### Defined in

[src/quotations_requests_pb.ts:192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L192)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

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

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:219](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L219)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L207)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L211)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:215](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L215)
