[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsList

# Class: QuotationsRequestsList

Describes the message consisting of the list of quotations requests

**`Generated`**

from message Genesis.QuotationsRequestsList

## Hierarchy

- `Message`<[`QuotationsRequestsList`](QuotationsRequestsList.md)\>

  ↳ **`QuotationsRequestsList`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsList.md#constructor)

### Properties

- [list](QuotationsRequestsList.md#list)
- [fields](QuotationsRequestsList.md#fields)
- [runtime](QuotationsRequestsList.md#runtime)
- [typeName](QuotationsRequestsList.md#typename)

### Methods

- [clone](QuotationsRequestsList.md#clone)
- [equals](QuotationsRequestsList.md#equals)
- [fromBinary](QuotationsRequestsList.md#frombinary)
- [fromJson](QuotationsRequestsList.md#fromjson)
- [fromJsonString](QuotationsRequestsList.md#fromjsonstring)
- [getType](QuotationsRequestsList.md#gettype)
- [toBinary](QuotationsRequestsList.md#tobinary)
- [toJSON](QuotationsRequestsList.md#tojson)
- [toJson](QuotationsRequestsList.md#tojson-1)
- [toJsonString](QuotationsRequestsList.md#tojsonstring)
- [equals](QuotationsRequestsList.md#equals-1)
- [fromBinary](QuotationsRequestsList.md#frombinary-1)
- [fromJson](QuotationsRequestsList.md#fromjson-1)
- [fromJsonString](QuotationsRequestsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsList`](QuotationsRequestsList.md)\> |

#### Overrides

Message&lt;QuotationsRequestsList\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:954](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L954)

## Properties

### list

• **list**: [`QuotationRequest`](QuotationRequest.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.QuotationRequest list = 1;

#### Defined in

[src/quotations_requests_pb.ts:952](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L952)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:961](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L961)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:959](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L959)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsList"``

#### Defined in

[src/quotations_requests_pb.ts:960](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L960)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsList`](QuotationsRequestsList.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsList`](QuotationsRequestsList.md) \| `PlainMessage`<[`QuotationsRequestsList`](QuotationsRequestsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

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

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsList`](QuotationsRequestsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsList`](QuotationsRequestsList.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsList`](QuotationsRequestsList.md) \| `PlainMessage`<[`QuotationsRequestsList`](QuotationsRequestsList.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsList`](QuotationsRequestsList.md) \| `PlainMessage`<[`QuotationsRequestsList`](QuotationsRequestsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:977](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L977)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Defined in

[src/quotations_requests_pb.ts:965](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L965)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Defined in

[src/quotations_requests_pb.ts:969](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L969)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Defined in

[src/quotations_requests_pb.ts:973](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L973)
