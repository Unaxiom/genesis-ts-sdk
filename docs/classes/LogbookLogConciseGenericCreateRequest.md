[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LogbookLogConciseGenericCreateRequest

# Class: LogbookLogConciseGenericCreateRequest

Describes the parameters that are required to create a generic lifecycle log entry

**`Generated`**

from message Genesis.LogbookLogConciseGenericCreateRequest

## Hierarchy

- `Message`<[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)\>

  ↳ **`LogbookLogConciseGenericCreateRequest`**

## Table of contents

### Constructors

- [constructor](LogbookLogConciseGenericCreateRequest.md#constructor)

### Properties

- [appComment](LogbookLogConciseGenericCreateRequest.md#appcomment)
- [operation](LogbookLogConciseGenericCreateRequest.md#operation)
- [refUuid](LogbookLogConciseGenericCreateRequest.md#refuuid)
- [timestamp](LogbookLogConciseGenericCreateRequest.md#timestamp)
- [userComment](LogbookLogConciseGenericCreateRequest.md#usercomment)
- [username](LogbookLogConciseGenericCreateRequest.md#username)
- [fields](LogbookLogConciseGenericCreateRequest.md#fields)
- [runtime](LogbookLogConciseGenericCreateRequest.md#runtime)
- [typeName](LogbookLogConciseGenericCreateRequest.md#typename)

### Methods

- [clone](LogbookLogConciseGenericCreateRequest.md#clone)
- [equals](LogbookLogConciseGenericCreateRequest.md#equals)
- [fromBinary](LogbookLogConciseGenericCreateRequest.md#frombinary)
- [fromJson](LogbookLogConciseGenericCreateRequest.md#fromjson)
- [fromJsonString](LogbookLogConciseGenericCreateRequest.md#fromjsonstring)
- [getType](LogbookLogConciseGenericCreateRequest.md#gettype)
- [toBinary](LogbookLogConciseGenericCreateRequest.md#tobinary)
- [toJSON](LogbookLogConciseGenericCreateRequest.md#tojson)
- [toJson](LogbookLogConciseGenericCreateRequest.md#tojson-1)
- [toJsonString](LogbookLogConciseGenericCreateRequest.md#tojsonstring)
- [equals](LogbookLogConciseGenericCreateRequest.md#equals-1)
- [fromBinary](LogbookLogConciseGenericCreateRequest.md#frombinary-1)
- [fromJson](LogbookLogConciseGenericCreateRequest.md#fromjson-1)
- [fromJsonString](LogbookLogConciseGenericCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LogbookLogConciseGenericCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)\> |

#### Overrides

Message&lt;LogbookLogConciseGenericCreateRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:1697](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1697)

## Properties

### appComment

• **appComment**: `string` = `""`

The comment generated by the application

**`Generated`**

from field: string app_comment = 13;

#### Defined in

[src/base_pb.ts:1688](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1688)

___

### operation

• **operation**: `string` = `""`

The operation that was performed

**`Generated`**

from field: string operation = 11;

#### Defined in

[src/base_pb.ts:1674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1674)

___

### refUuid

• **refUuid**: `Uint8Array`

The UUID of the resource

**`Generated`**

from field: bytes ref_uuid = 10;

#### Defined in

[src/base_pb.ts:1667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1667)

___

### timestamp

• **timestamp**: `bigint` = `protoInt64.zero`

Stores the timestamp of when this resource was created

**`Generated`**

from field: int64 timestamp = 3;

#### Defined in

[src/base_pb.ts:1660](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1660)

___

### userComment

• **userComment**: `string` = `""`

The comment entered by the user

**`Generated`**

from field: string user_comment = 14;

#### Defined in

[src/base_pb.ts:1695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1695)

___

### username

• **username**: `string` = `""`

The username of the user who performed this operation

**`Generated`**

from field: string username = 12;

#### Defined in

[src/base_pb.ts:1681](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1681)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1704](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1704)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1702](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1702)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LogbookLogConciseGenericCreateRequest"``

#### Defined in

[src/base_pb.ts:1703](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1703)

## Methods

### clone

▸ **clone**(): [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

Create a deep copy.

#### Returns

[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md) \| `PlainMessage`<[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

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

[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)\>

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
| `a` | `undefined` \| [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md) \| `PlainMessage`<[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)\> |
| `b` | `undefined` \| [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md) \| `PlainMessage`<[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1725](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1725)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Defined in

[src/base_pb.ts:1713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1713)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Defined in

[src/base_pb.ts:1717](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1717)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookLogConciseGenericCreateRequest`](LogbookLogConciseGenericCreateRequest.md)

#### Defined in

[src/base_pb.ts:1721](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L1721)
