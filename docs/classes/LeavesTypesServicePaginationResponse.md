[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServicePaginationResponse

# Class: LeavesTypesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.LeavesTypesServicePaginationResponse

## Hierarchy

- `Message`<[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)\>

  ↳ **`LeavesTypesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServicePaginationResponse.md#constructor)

### Properties

- [count](LeavesTypesServicePaginationResponse.md#count)
- [offset](LeavesTypesServicePaginationResponse.md#offset)
- [payload](LeavesTypesServicePaginationResponse.md#payload)
- [total](LeavesTypesServicePaginationResponse.md#total)
- [fields](LeavesTypesServicePaginationResponse.md#fields)
- [runtime](LeavesTypesServicePaginationResponse.md#runtime)
- [typeName](LeavesTypesServicePaginationResponse.md#typename)

### Methods

- [clone](LeavesTypesServicePaginationResponse.md#clone)
- [equals](LeavesTypesServicePaginationResponse.md#equals)
- [fromBinary](LeavesTypesServicePaginationResponse.md#frombinary)
- [fromJson](LeavesTypesServicePaginationResponse.md#fromjson)
- [fromJsonString](LeavesTypesServicePaginationResponse.md#fromjsonstring)
- [getType](LeavesTypesServicePaginationResponse.md#gettype)
- [toBinary](LeavesTypesServicePaginationResponse.md#tobinary)
- [toJSON](LeavesTypesServicePaginationResponse.md#tojson)
- [toJson](LeavesTypesServicePaginationResponse.md#tojson-1)
- [toJsonString](LeavesTypesServicePaginationResponse.md#tojsonstring)
- [equals](LeavesTypesServicePaginationResponse.md#equals-1)
- [fromBinary](LeavesTypesServicePaginationResponse.md#frombinary-1)
- [fromJson](LeavesTypesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](LeavesTypesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;LeavesTypesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/leaves_types_pb.ts:538](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L538)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/leaves_types_pb.ts:515](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L515)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/leaves_types_pb.ts:522](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L522)

___

### payload

• **payload**: [`LeaveType`](LeaveType.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.LeaveType payload = 4;

#### Defined in

[src/leaves_types_pb.ts:536](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L536)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/leaves_types_pb.ts:529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L529)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types_pb.ts:545](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L545)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types_pb.ts:543](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L543)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesTypesServicePaginationResponse"``

#### Defined in

[src/leaves_types_pb.ts:544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L544)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md) \| `PlainMessage`<[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

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

[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md) \| `PlainMessage`<[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md) \| `PlainMessage`<[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types_pb.ts:564](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L564)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Defined in

[src/leaves_types_pb.ts:552](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L552)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Defined in

[src/leaves_types_pb.ts:556](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L556)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServicePaginationResponse`](LeavesTypesServicePaginationResponse.md)

#### Defined in

[src/leaves_types_pb.ts:560](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L560)
