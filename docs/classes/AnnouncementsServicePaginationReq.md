[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServicePaginationReq

# Class: AnnouncementsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.AnnouncementsServicePaginationReq

## Hierarchy

- `Message`<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\>

  ↳ **`AnnouncementsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServicePaginationReq.md#constructor)

### Properties

- [count](AnnouncementsServicePaginationReq.md#count)
- [isActive](AnnouncementsServicePaginationReq.md#isactive)
- [offset](AnnouncementsServicePaginationReq.md#offset)
- [sortKey](AnnouncementsServicePaginationReq.md#sortkey)
- [sortOrder](AnnouncementsServicePaginationReq.md#sortorder)
- [status](AnnouncementsServicePaginationReq.md#status)
- [fields](AnnouncementsServicePaginationReq.md#fields)
- [runtime](AnnouncementsServicePaginationReq.md#runtime)
- [typeName](AnnouncementsServicePaginationReq.md#typename)

### Methods

- [clone](AnnouncementsServicePaginationReq.md#clone)
- [equals](AnnouncementsServicePaginationReq.md#equals)
- [fromBinary](AnnouncementsServicePaginationReq.md#frombinary)
- [fromJson](AnnouncementsServicePaginationReq.md#fromjson)
- [fromJsonString](AnnouncementsServicePaginationReq.md#fromjsonstring)
- [getType](AnnouncementsServicePaginationReq.md#gettype)
- [toBinary](AnnouncementsServicePaginationReq.md#tobinary)
- [toJSON](AnnouncementsServicePaginationReq.md#tojson)
- [toJson](AnnouncementsServicePaginationReq.md#tojson-1)
- [toJsonString](AnnouncementsServicePaginationReq.md#tojsonstring)
- [equals](AnnouncementsServicePaginationReq.md#equals-1)
- [fromBinary](AnnouncementsServicePaginationReq.md#frombinary-1)
- [fromJson](AnnouncementsServicePaginationReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\> |

#### Overrides

Message&lt;AnnouncementsServicePaginationReq\&gt;.constructor

#### Defined in

[src/announcements_pb.ts:510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L510)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/announcements_pb.ts:480](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L480)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/announcements_pb.ts:473](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L473)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/announcements_pb.ts:487](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L487)

___

### sortKey

• **sortKey**: [`ANNOUNCEMENT_SORT_KEY`](../enums/ANNOUNCEMENT_SORT_KEY.md) = `ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ANNOUNCEMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/announcements_pb.ts:501](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L501)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/announcements_pb.ts:494](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L494)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this announcement

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/announcements_pb.ts:508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L508)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements_pb.ts:517](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L517)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements_pb.ts:515](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L515)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AnnouncementsServicePaginationReq"``

#### Defined in

[src/announcements_pb.ts:516](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L516)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md) \| `PlainMessage`<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

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

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md) \| `PlainMessage`<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md) \| `PlainMessage`<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements_pb.ts:538](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L538)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Defined in

[src/announcements_pb.ts:526](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L526)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Defined in

[src/announcements_pb.ts:530](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L530)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Defined in

[src/announcements_pb.ts:534](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L534)
