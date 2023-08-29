[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ClientsServicePaginationResponse

# Class: ClientsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.ClientsServicePaginationResponse

## Hierarchy

- `Message`<[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)\>

  ↳ **`ClientsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ClientsServicePaginationResponse.md#constructor)

### Properties

- [count](ClientsServicePaginationResponse.md#count)
- [offset](ClientsServicePaginationResponse.md#offset)
- [payload](ClientsServicePaginationResponse.md#payload)
- [total](ClientsServicePaginationResponse.md#total)
- [fields](ClientsServicePaginationResponse.md#fields)
- [runtime](ClientsServicePaginationResponse.md#runtime)
- [typeName](ClientsServicePaginationResponse.md#typename)

### Methods

- [clone](ClientsServicePaginationResponse.md#clone)
- [equals](ClientsServicePaginationResponse.md#equals)
- [fromBinary](ClientsServicePaginationResponse.md#frombinary)
- [fromJson](ClientsServicePaginationResponse.md#fromjson)
- [fromJsonString](ClientsServicePaginationResponse.md#fromjsonstring)
- [getType](ClientsServicePaginationResponse.md#gettype)
- [toBinary](ClientsServicePaginationResponse.md#tobinary)
- [toJSON](ClientsServicePaginationResponse.md#tojson)
- [toJson](ClientsServicePaginationResponse.md#tojson-1)
- [toJsonString](ClientsServicePaginationResponse.md#tojsonstring)
- [equals](ClientsServicePaginationResponse.md#equals-1)
- [fromBinary](ClientsServicePaginationResponse.md#frombinary-1)
- [fromJson](ClientsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ClientsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;ClientsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/clients_pb.ts:587](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L587)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/clients_pb.ts:564](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L564)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/clients_pb.ts:571](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L571)

___

### payload

• **payload**: [`Client`](Client.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Client payload = 4;

#### Defined in

[src/clients_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L585)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/clients_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L578)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients_pb.ts:594](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L594)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients_pb.ts:592](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L592)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ClientsServicePaginationResponse"``

#### Defined in

[src/clients_pb.ts:593](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L593)

## Methods

### clone

▸ **clone**(): [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md) \| `PlainMessage`<[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

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

[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md) \| `PlainMessage`<[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md) \| `PlainMessage`<[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients_pb.ts:613](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L613)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Defined in

[src/clients_pb.ts:601](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L601)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Defined in

[src/clients_pb.ts:605](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L605)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationResponse`](ClientsServicePaginationResponse.md)

#### Defined in

[src/clients_pb.ts:609](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L609)
