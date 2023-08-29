[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssociatePaginationResp

# Class: AssociatePaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message Genesis.AssociatePaginationResp

## Hierarchy

- `Message`<[`AssociatePaginationResp`](AssociatePaginationResp.md)\>

  ↳ **`AssociatePaginationResp`**

## Table of contents

### Constructors

- [constructor](AssociatePaginationResp.md#constructor)

### Properties

- [count](AssociatePaginationResp.md#count)
- [offset](AssociatePaginationResp.md#offset)
- [payload](AssociatePaginationResp.md#payload)
- [total](AssociatePaginationResp.md#total)
- [fields](AssociatePaginationResp.md#fields)
- [runtime](AssociatePaginationResp.md#runtime)
- [typeName](AssociatePaginationResp.md#typename)

### Methods

- [clone](AssociatePaginationResp.md#clone)
- [equals](AssociatePaginationResp.md#equals)
- [fromBinary](AssociatePaginationResp.md#frombinary)
- [fromJson](AssociatePaginationResp.md#fromjson)
- [fromJsonString](AssociatePaginationResp.md#fromjsonstring)
- [getType](AssociatePaginationResp.md#gettype)
- [toBinary](AssociatePaginationResp.md#tobinary)
- [toJSON](AssociatePaginationResp.md#tojson)
- [toJson](AssociatePaginationResp.md#tojson-1)
- [toJsonString](AssociatePaginationResp.md#tojsonstring)
- [equals](AssociatePaginationResp.md#equals-1)
- [fromBinary](AssociatePaginationResp.md#frombinary-1)
- [fromJson](AssociatePaginationResp.md#fromjson-1)
- [fromJsonString](AssociatePaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatePaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssociatePaginationResp`](AssociatePaginationResp.md)\> |

#### Overrides

Message&lt;AssociatePaginationResp\&gt;.constructor

#### Defined in

[src/associates_pb.ts:375](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L375)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/associates_pb.ts:352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L352)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/associates_pb.ts:359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L359)

___

### payload

• **payload**: [`Associate`](Associate.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Associate payload = 4;

#### Defined in

[src/associates_pb.ts:373](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L373)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/associates_pb.ts:366](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L366)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates_pb.ts:382](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L382)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates_pb.ts:380](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L380)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssociatePaginationResp"``

#### Defined in

[src/associates_pb.ts:381](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L381)

## Methods

### clone

▸ **clone**(): [`AssociatePaginationResp`](AssociatePaginationResp.md)

Create a deep copy.

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatePaginationResp`](AssociatePaginationResp.md) \| `PlainMessage`<[`AssociatePaginationResp`](AssociatePaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

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

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssociatePaginationResp`](AssociatePaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssociatePaginationResp`](AssociatePaginationResp.md)\>

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
| `a` | `undefined` \| [`AssociatePaginationResp`](AssociatePaginationResp.md) \| `PlainMessage`<[`AssociatePaginationResp`](AssociatePaginationResp.md)\> |
| `b` | `undefined` \| [`AssociatePaginationResp`](AssociatePaginationResp.md) \| `PlainMessage`<[`AssociatePaginationResp`](AssociatePaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates_pb.ts:401](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L401)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Defined in

[src/associates_pb.ts:389](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L389)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Defined in

[src/associates_pb.ts:393](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L393)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatePaginationResp`](AssociatePaginationResp.md)

#### Defined in

[src/associates_pb.ts:397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L397)
