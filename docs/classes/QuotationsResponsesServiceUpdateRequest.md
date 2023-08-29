[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceUpdateRequest

# Class: QuotationsResponsesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.QuotationsResponsesServiceUpdateRequest

## Hierarchy

- `Message`<[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)\>

  ↳ **`QuotationsResponsesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceUpdateRequest.md#constructor)

### Properties

- [currencyId](QuotationsResponsesServiceUpdateRequest.md#currencyid)
- [description](QuotationsResponsesServiceUpdateRequest.md#description)
- [formData](QuotationsResponsesServiceUpdateRequest.md#formdata)
- [id](QuotationsResponsesServiceUpdateRequest.md#id)
- [notifyUsers](QuotationsResponsesServiceUpdateRequest.md#notifyusers)
- [referenceId](QuotationsResponsesServiceUpdateRequest.md#referenceid)
- [userComment](QuotationsResponsesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](QuotationsResponsesServiceUpdateRequest.md#vaultfolderid)
- [fields](QuotationsResponsesServiceUpdateRequest.md#fields)
- [runtime](QuotationsResponsesServiceUpdateRequest.md#runtime)
- [typeName](QuotationsResponsesServiceUpdateRequest.md#typename)

### Methods

- [clone](QuotationsResponsesServiceUpdateRequest.md#clone)
- [equals](QuotationsResponsesServiceUpdateRequest.md#equals)
- [fromBinary](QuotationsResponsesServiceUpdateRequest.md#frombinary)
- [fromJson](QuotationsResponsesServiceUpdateRequest.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceUpdateRequest.md#fromjsonstring)
- [getType](QuotationsResponsesServiceUpdateRequest.md#gettype)
- [toBinary](QuotationsResponsesServiceUpdateRequest.md#tobinary)
- [toJSON](QuotationsResponsesServiceUpdateRequest.md#tojson)
- [toJson](QuotationsResponsesServiceUpdateRequest.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceUpdateRequest.md#tojsonstring)
- [equals](QuotationsResponsesServiceUpdateRequest.md#equals-1)
- [fromBinary](QuotationsResponsesServiceUpdateRequest.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;QuotationsResponsesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:330](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L330)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: int64 currency_id = 15;

#### Defined in

[src/quotations_responses_pb.ts:314](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L314)

___

### description

• **description**: `string` = `""`

The description of the quotation response

**`Generated`**

from field: string description = 16;

#### Defined in

[src/quotations_responses_pb.ts:321](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L321)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/quotations_responses_pb.ts:328](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L328)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/quotations_responses_pb.ts:286](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L286)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/quotations_responses_pb.ts:293](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L293)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation response

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/quotations_responses_pb.ts:307](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L307)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/quotations_responses_pb.ts:279](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L279)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_responses_pb.ts:300](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L300)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:337](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L337)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:335](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L335)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsResponsesServiceUpdateRequest"``

#### Defined in

[src/quotations_responses_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L336)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

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

[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:360](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L360)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L348)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L352)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceUpdateRequest`](QuotationsResponsesServiceUpdateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:356](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L356)
