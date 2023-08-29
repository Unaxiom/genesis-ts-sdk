[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServicePaginationResponse

# Class: AnnouncementsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.AnnouncementsServicePaginationResponse

## Hierarchy

- `Message`<[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)\>

  ↳ **`AnnouncementsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServicePaginationResponse.md#constructor)

### Properties

- [count](AnnouncementsServicePaginationResponse.md#count)
- [offset](AnnouncementsServicePaginationResponse.md#offset)
- [payload](AnnouncementsServicePaginationResponse.md#payload)
- [total](AnnouncementsServicePaginationResponse.md#total)
- [fields](AnnouncementsServicePaginationResponse.md#fields)
- [runtime](AnnouncementsServicePaginationResponse.md#runtime)
- [typeName](AnnouncementsServicePaginationResponse.md#typename)

### Methods

- [clone](AnnouncementsServicePaginationResponse.md#clone)
- [equals](AnnouncementsServicePaginationResponse.md#equals)
- [fromBinary](AnnouncementsServicePaginationResponse.md#frombinary)
- [fromJson](AnnouncementsServicePaginationResponse.md#fromjson)
- [fromJsonString](AnnouncementsServicePaginationResponse.md#fromjsonstring)
- [getType](AnnouncementsServicePaginationResponse.md#gettype)
- [toBinary](AnnouncementsServicePaginationResponse.md#tobinary)
- [toJSON](AnnouncementsServicePaginationResponse.md#tojson)
- [toJson](AnnouncementsServicePaginationResponse.md#tojson-1)
- [toJsonString](AnnouncementsServicePaginationResponse.md#tojsonstring)
- [equals](AnnouncementsServicePaginationResponse.md#equals-1)
- [fromBinary](AnnouncementsServicePaginationResponse.md#frombinary-1)
- [fromJson](AnnouncementsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](AnnouncementsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;AnnouncementsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/announcements_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L578)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/announcements_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L555)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/announcements_pb.ts:562](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L562)

___

### payload

• **payload**: [`Announcement`](Announcement.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Announcement payload = 4;

#### Defined in

[src/announcements_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L576)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/announcements_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L569)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L585)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L583)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AnnouncementsServicePaginationResponse"``

#### Defined in

[src/announcements_pb.ts:584](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L584)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md) \| `PlainMessage`<[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

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

[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md) \| `PlainMessage`<[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md) \| `PlainMessage`<[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements_pb.ts:604](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L604)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Defined in

[src/announcements_pb.ts:592](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L592)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Defined in

[src/announcements_pb.ts:596](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L596)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationResponse`](AnnouncementsServicePaginationResponse.md)

#### Defined in

[src/announcements_pb.ts:600](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L600)
