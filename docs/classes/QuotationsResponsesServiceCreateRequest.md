[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceCreateRequest

# Class: QuotationsResponsesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.QuotationsResponsesServiceCreateRequest

## Hierarchy

- `Message`<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\>

  ↳ **`QuotationsResponsesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceCreateRequest.md#constructor)

### Properties

- [currencyId](QuotationsResponsesServiceCreateRequest.md#currencyid)
- [description](QuotationsResponsesServiceCreateRequest.md#description)
- [entityUuid](QuotationsResponsesServiceCreateRequest.md#entityuuid)
- [formData](QuotationsResponsesServiceCreateRequest.md#formdata)
- [quotationRequestId](QuotationsResponsesServiceCreateRequest.md#quotationrequestid)
- [refFrom](QuotationsResponsesServiceCreateRequest.md#reffrom)
- [refId](QuotationsResponsesServiceCreateRequest.md#refid)
- [referenceId](QuotationsResponsesServiceCreateRequest.md#referenceid)
- [userComment](QuotationsResponsesServiceCreateRequest.md#usercomment)
- [vaultFolderId](QuotationsResponsesServiceCreateRequest.md#vaultfolderid)
- [fields](QuotationsResponsesServiceCreateRequest.md#fields)
- [runtime](QuotationsResponsesServiceCreateRequest.md#runtime)
- [typeName](QuotationsResponsesServiceCreateRequest.md#typename)

### Methods

- [clone](QuotationsResponsesServiceCreateRequest.md#clone)
- [equals](QuotationsResponsesServiceCreateRequest.md#equals)
- [fromBinary](QuotationsResponsesServiceCreateRequest.md#frombinary)
- [fromJson](QuotationsResponsesServiceCreateRequest.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceCreateRequest.md#fromjsonstring)
- [getType](QuotationsResponsesServiceCreateRequest.md#gettype)
- [toBinary](QuotationsResponsesServiceCreateRequest.md#tobinary)
- [toJSON](QuotationsResponsesServiceCreateRequest.md#tojson)
- [toJson](QuotationsResponsesServiceCreateRequest.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceCreateRequest.md#tojsonstring)
- [equals](QuotationsResponsesServiceCreateRequest.md#equals-1)
- [fromBinary](QuotationsResponsesServiceCreateRequest.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;QuotationsResponsesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:230](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L230)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: int64 currency_id = 15;

#### Defined in

[src/quotations_responses_pb.ts:214](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L214)

___

### description

• **description**: `string` = `""`

The description of the quotation response

**`Generated`**

from field: string description = 16;

#### Defined in

[src/quotations_responses_pb.ts:221](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L221)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/quotations_responses_pb.ts:165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L165)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/quotations_responses_pb.ts:228](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L228)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

The associated quotation request

**`Generated`**

from field: int64 quotation_request_id = 12;

#### Defined in

[src/quotations_responses_pb.ts:193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L193)

___

### refFrom

• **refFrom**: `string` = `""`

The associated party type

**`Generated`**

from field: string ref_from = 13;

#### Defined in

[src/quotations_responses_pb.ts:200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L200)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated party ID

**`Generated`**

from field: int64 ref_id = 14;

#### Defined in

[src/quotations_responses_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L207)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation response

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/quotations_responses_pb.ts:186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L186)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/quotations_responses_pb.ts:172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L172)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_responses_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L179)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:237](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L237)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:235](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L235)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsResponsesServiceCreateRequest"``

#### Defined in

[src/quotations_responses_pb.ts:236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L236)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

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

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md) \| `PlainMessage`<[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:262](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L262)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:250](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L250)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L254)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCreateRequest`](QuotationsResponsesServiceCreateRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:258](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L258)
