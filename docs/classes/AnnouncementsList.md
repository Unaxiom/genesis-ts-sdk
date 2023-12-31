[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsList

# Class: AnnouncementsList

Describes the message consisting of the list of records

**`Generated`**

from message Genesis.AnnouncementsList

## Hierarchy

- `Message`<[`AnnouncementsList`](AnnouncementsList.md)\>

  ↳ **`AnnouncementsList`**

## Table of contents

### Constructors

- [constructor](AnnouncementsList.md#constructor)

### Properties

- [list](AnnouncementsList.md#list)
- [fields](AnnouncementsList.md#fields)
- [runtime](AnnouncementsList.md#runtime)
- [typeName](AnnouncementsList.md#typename)

### Methods

- [clone](AnnouncementsList.md#clone)
- [equals](AnnouncementsList.md#equals)
- [fromBinary](AnnouncementsList.md#frombinary)
- [fromJson](AnnouncementsList.md#fromjson)
- [fromJsonString](AnnouncementsList.md#fromjsonstring)
- [getType](AnnouncementsList.md#gettype)
- [toBinary](AnnouncementsList.md#tobinary)
- [toJSON](AnnouncementsList.md#tojson)
- [toJson](AnnouncementsList.md#tojson-1)
- [toJsonString](AnnouncementsList.md#tojsonstring)
- [equals](AnnouncementsList.md#equals-1)
- [fromBinary](AnnouncementsList.md#frombinary-1)
- [fromJson](AnnouncementsList.md#fromjson-1)
- [fromJsonString](AnnouncementsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AnnouncementsList`](AnnouncementsList.md)\> |

#### Overrides

Message&lt;AnnouncementsList\&gt;.constructor

#### Defined in

[src/announcements_pb.ts:433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L433)

## Properties

### list

• **list**: [`Announcement`](Announcement.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.Announcement list = 1;

#### Defined in

[src/announcements_pb.ts:431](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L431)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements_pb.ts:440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L440)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements_pb.ts:438](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L438)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AnnouncementsList"``

#### Defined in

[src/announcements_pb.ts:439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L439)

## Methods

### clone

▸ **clone**(): [`AnnouncementsList`](AnnouncementsList.md)

Create a deep copy.

#### Returns

[`AnnouncementsList`](AnnouncementsList.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsList`](AnnouncementsList.md) \| `PlainMessage`<[`AnnouncementsList`](AnnouncementsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsList`](AnnouncementsList.md)

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

[`AnnouncementsList`](AnnouncementsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsList`](AnnouncementsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsList`](AnnouncementsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsList`](AnnouncementsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsList`](AnnouncementsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AnnouncementsList`](AnnouncementsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AnnouncementsList`](AnnouncementsList.md)\>

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
| `a` | `undefined` \| [`AnnouncementsList`](AnnouncementsList.md) \| `PlainMessage`<[`AnnouncementsList`](AnnouncementsList.md)\> |
| `b` | `undefined` \| [`AnnouncementsList`](AnnouncementsList.md) \| `PlainMessage`<[`AnnouncementsList`](AnnouncementsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements_pb.ts:456](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L456)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AnnouncementsList`](AnnouncementsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsList`](AnnouncementsList.md)

#### Defined in

[src/announcements_pb.ts:444](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L444)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AnnouncementsList`](AnnouncementsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsList`](AnnouncementsList.md)

#### Defined in

[src/announcements_pb.ts:448](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L448)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsList`](AnnouncementsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsList`](AnnouncementsList.md)

#### Defined in

[src/announcements_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L452)
