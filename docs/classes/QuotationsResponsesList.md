[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesList

# Class: QuotationsResponsesList

Describes the message consisting of the list of quotations responses

**`Generated`**

from message Genesis.QuotationsResponsesList

## Hierarchy

- `Message`<[`QuotationsResponsesList`](QuotationsResponsesList.md)\>

  ↳ **`QuotationsResponsesList`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesList.md#constructor)

### Properties

- [list](QuotationsResponsesList.md#list)
- [fields](QuotationsResponsesList.md#fields)
- [runtime](QuotationsResponsesList.md#runtime)
- [typeName](QuotationsResponsesList.md#typename)

### Methods

- [clone](QuotationsResponsesList.md#clone)
- [equals](QuotationsResponsesList.md#equals)
- [fromBinary](QuotationsResponsesList.md#frombinary)
- [fromJson](QuotationsResponsesList.md#fromjson)
- [fromJsonString](QuotationsResponsesList.md#fromjsonstring)
- [getType](QuotationsResponsesList.md#gettype)
- [toBinary](QuotationsResponsesList.md#tobinary)
- [toJSON](QuotationsResponsesList.md#tojson)
- [toJson](QuotationsResponsesList.md#tojson-1)
- [toJsonString](QuotationsResponsesList.md#tojsonstring)
- [equals](QuotationsResponsesList.md#equals-1)
- [fromBinary](QuotationsResponsesList.md#frombinary-1)
- [fromJson](QuotationsResponsesList.md#fromjson-1)
- [fromJsonString](QuotationsResponsesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsResponsesList`](QuotationsResponsesList.md)\> |

#### Overrides

Message&lt;QuotationsResponsesList\&gt;.constructor

#### Defined in

[src/quotations_responses_pb.ts:1003](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1003)

## Properties

### list

• **list**: [`QuotationResponse`](QuotationResponse.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.QuotationResponse list = 1;

#### Defined in

[src/quotations_responses_pb.ts:1001](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1001)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses_pb.ts:1010](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1010)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses_pb.ts:1008](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1008)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsResponsesList"``

#### Defined in

[src/quotations_responses_pb.ts:1009](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1009)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesList`](QuotationsResponsesList.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesList`](QuotationsResponsesList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesList`](QuotationsResponsesList.md) \| `PlainMessage`<[`QuotationsResponsesList`](QuotationsResponsesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesList`](QuotationsResponsesList.md)

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

[`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesList`](QuotationsResponsesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesList`](QuotationsResponsesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsResponsesList`](QuotationsResponsesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsResponsesList`](QuotationsResponsesList.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesList`](QuotationsResponsesList.md) \| `PlainMessage`<[`QuotationsResponsesList`](QuotationsResponsesList.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesList`](QuotationsResponsesList.md) \| `PlainMessage`<[`QuotationsResponsesList`](QuotationsResponsesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses_pb.ts:1026](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1026)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Defined in

[src/quotations_responses_pb.ts:1014](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1014)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Defined in

[src/quotations_responses_pb.ts:1018](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1018)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesList`](QuotationsResponsesList.md)

#### Defined in

[src/quotations_responses_pb.ts:1022](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_responses_pb.ts#L1022)
