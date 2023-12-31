[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServicePaginationResponse

# Class: ReplaceableIndentsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.ReplaceableIndentsServicePaginationResponse

## Hierarchy

- `Message`<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\>

  ↳ **`ReplaceableIndentsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServicePaginationResponse.md#constructor)

### Properties

- [count](ReplaceableIndentsServicePaginationResponse.md#count)
- [offset](ReplaceableIndentsServicePaginationResponse.md#offset)
- [payload](ReplaceableIndentsServicePaginationResponse.md#payload)
- [total](ReplaceableIndentsServicePaginationResponse.md#total)
- [fields](ReplaceableIndentsServicePaginationResponse.md#fields)
- [runtime](ReplaceableIndentsServicePaginationResponse.md#runtime)
- [typeName](ReplaceableIndentsServicePaginationResponse.md#typename)

### Methods

- [clone](ReplaceableIndentsServicePaginationResponse.md#clone)
- [equals](ReplaceableIndentsServicePaginationResponse.md#equals)
- [fromBinary](ReplaceableIndentsServicePaginationResponse.md#frombinary)
- [fromJson](ReplaceableIndentsServicePaginationResponse.md#fromjson)
- [fromJsonString](ReplaceableIndentsServicePaginationResponse.md#fromjsonstring)
- [getType](ReplaceableIndentsServicePaginationResponse.md#gettype)
- [toBinary](ReplaceableIndentsServicePaginationResponse.md#tobinary)
- [toJSON](ReplaceableIndentsServicePaginationResponse.md#tojson)
- [toJson](ReplaceableIndentsServicePaginationResponse.md#tojson-1)
- [toJsonString](ReplaceableIndentsServicePaginationResponse.md#tojsonstring)
- [equals](ReplaceableIndentsServicePaginationResponse.md#equals-1)
- [fromBinary](ReplaceableIndentsServicePaginationResponse.md#frombinary-1)
- [fromJson](ReplaceableIndentsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:1057](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1057)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/replaceable_indents_pb.ts:1034](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1034)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/replaceable_indents_pb.ts:1041](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1041)

___

### payload

• **payload**: [`ReplaceableIndent`](ReplaceableIndent.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.ReplaceableIndent payload = 4;

#### Defined in

[src/replaceable_indents_pb.ts:1055](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1055)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/replaceable_indents_pb.ts:1048](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1048)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:1064](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1064)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:1062](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1062)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServicePaginationResponse"``

#### Defined in

[src/replaceable_indents_pb.ts:1063](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1063)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md) \| `PlainMessage`<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

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

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md) \| `PlainMessage`<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md) \| `PlainMessage`<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:1083](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1083)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Defined in

[src/replaceable_indents_pb.ts:1071](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1071)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Defined in

[src/replaceable_indents_pb.ts:1075](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1075)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Defined in

[src/replaceable_indents_pb.ts:1079](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1079)
