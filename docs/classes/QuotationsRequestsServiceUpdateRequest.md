[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceUpdateRequest

# Class: QuotationsRequestsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.QuotationsRequestsServiceUpdateRequest

## Hierarchy

- `Message`<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\>

  ↳ **`QuotationsRequestsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceUpdateRequest.md#constructor)

### Properties

- [currencyId](QuotationsRequestsServiceUpdateRequest.md#currencyid)
- [description](QuotationsRequestsServiceUpdateRequest.md#description)
- [formData](QuotationsRequestsServiceUpdateRequest.md#formdata)
- [id](QuotationsRequestsServiceUpdateRequest.md#id)
- [lastDate](QuotationsRequestsServiceUpdateRequest.md#lastdate)
- [notifyUsers](QuotationsRequestsServiceUpdateRequest.md#notifyusers)
- [priority](QuotationsRequestsServiceUpdateRequest.md#priority)
- [referenceId](QuotationsRequestsServiceUpdateRequest.md#referenceid)
- [renewalPeriod](QuotationsRequestsServiceUpdateRequest.md#renewalperiod)
- [userComment](QuotationsRequestsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](QuotationsRequestsServiceUpdateRequest.md#vaultfolderid)
- [fields](QuotationsRequestsServiceUpdateRequest.md#fields)
- [runtime](QuotationsRequestsServiceUpdateRequest.md#runtime)
- [typeName](QuotationsRequestsServiceUpdateRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceUpdateRequest.md#clone)
- [equals](QuotationsRequestsServiceUpdateRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceUpdateRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceUpdateRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceUpdateRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceUpdateRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceUpdateRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceUpdateRequest.md#tojson)
- [toJson](QuotationsRequestsServiceUpdateRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceUpdateRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceUpdateRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceUpdateRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:308](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L308)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: int64 currency_id = 14;

#### Defined in

[src/quotations_requests_pb.ts:278](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L278)

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

[src/quotations_requests_pb.ts:299](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L299)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/quotations_requests_pb.ts:306](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L306)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/quotations_requests_pb.ts:243](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L243)

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

[src/quotations_requests_pb.ts:271](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L271)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/quotations_requests_pb.ts:250](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L250)

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

[src/quotations_requests_pb.ts:292](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L292)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation request

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/quotations_requests_pb.ts:264](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L264)

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: int64 renewal_period = 15;

#### Defined in

[src/quotations_requests_pb.ts:285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L285)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/quotations_requests_pb.ts:236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L236)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_requests_pb.ts:257](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L257)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:315](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L315)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L313)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServiceUpdateRequest"``

#### Defined in

[src/quotations_requests_pb.ts:314](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L314)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

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

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L341)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:329](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L329)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:333](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L333)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceUpdateRequest`](QuotationsRequestsServiceUpdateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:337](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L337)
