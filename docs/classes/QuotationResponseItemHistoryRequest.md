[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationResponseItemHistoryRequest

# Class: QuotationResponseItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.QuotationResponseItemHistoryRequest

## Hierarchy

- `Message`<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\>

  ↳ **`QuotationResponseItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](QuotationResponseItemHistoryRequest.md#constructor)

### Properties

- [name](QuotationResponseItemHistoryRequest.md#name)
- [quotationResponseId](QuotationResponseItemHistoryRequest.md#quotationresponseid)
- [fields](QuotationResponseItemHistoryRequest.md#fields)
- [runtime](QuotationResponseItemHistoryRequest.md#runtime)
- [typeName](QuotationResponseItemHistoryRequest.md#typename)

### Methods

- [clone](QuotationResponseItemHistoryRequest.md#clone)
- [equals](QuotationResponseItemHistoryRequest.md#equals)
- [fromBinary](QuotationResponseItemHistoryRequest.md#frombinary)
- [fromJson](QuotationResponseItemHistoryRequest.md#fromjson)
- [fromJsonString](QuotationResponseItemHistoryRequest.md#fromjsonstring)
- [getType](QuotationResponseItemHistoryRequest.md#gettype)
- [toBinary](QuotationResponseItemHistoryRequest.md#tobinary)
- [toJSON](QuotationResponseItemHistoryRequest.md#tojson)
- [toJson](QuotationResponseItemHistoryRequest.md#tojson-1)
- [toJsonString](QuotationResponseItemHistoryRequest.md#tojsonstring)
- [equals](QuotationResponseItemHistoryRequest.md#equals-1)
- [fromBinary](QuotationResponseItemHistoryRequest.md#frombinary-1)
- [fromJson](QuotationResponseItemHistoryRequest.md#fromjson-1)
- [fromJsonString](QuotationResponseItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationResponseItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\> |

#### Overrides

Message&lt;QuotationResponseItemHistoryRequest\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:1094](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1094)

## Properties

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/quotations_responses_pb.ts:1092](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1092)

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: int64 quotation_response_id = 10;

#### Defined in

[src/quotations_responses_pb.ts:1085](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1085)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:1101](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1101)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:1099](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1099)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationResponseItemHistoryRequest"``

#### Defined in

[src/quotations_responses_pb.ts:1100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1100)

## Methods

### clone

▸ **clone**(): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md) \| `PlainMessage`<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

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

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md) \| `PlainMessage`<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md) \| `PlainMessage`<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:1118](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1118)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:1106](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1106)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:1110](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1110)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Defined in

[src/quotations_responses_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1114)
