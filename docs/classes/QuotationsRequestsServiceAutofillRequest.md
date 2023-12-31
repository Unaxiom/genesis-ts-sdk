[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceAutofillRequest

# Class: QuotationsRequestsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Genesis.QuotationsRequestsServiceAutofillRequest

## Hierarchy

- `Message`<[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)\>

  ↳ **`QuotationsRequestsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceAutofillRequest.md#constructor)

### Properties

- [id](QuotationsRequestsServiceAutofillRequest.md#id)
- [userComment](QuotationsRequestsServiceAutofillRequest.md#usercomment)
- [fields](QuotationsRequestsServiceAutofillRequest.md#fields)
- [runtime](QuotationsRequestsServiceAutofillRequest.md#runtime)
- [typeName](QuotationsRequestsServiceAutofillRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceAutofillRequest.md#clone)
- [equals](QuotationsRequestsServiceAutofillRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceAutofillRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceAutofillRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceAutofillRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceAutofillRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceAutofillRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceAutofillRequest.md#tojson)
- [toJson](QuotationsRequestsServiceAutofillRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceAutofillRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceAutofillRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceAutofillRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceAutofillRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:367](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L367)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/quotations_requests_pb.ts:365](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L365)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/quotations_requests_pb.ts:358](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L358)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:374](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L374)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:372](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L372)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServiceAutofillRequest"``

#### Defined in

[src/quotations_requests_pb.ts:373](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L373)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

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

[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L391)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L379)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L383)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceAutofillRequest`](QuotationsRequestsServiceAutofillRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:387](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L387)
