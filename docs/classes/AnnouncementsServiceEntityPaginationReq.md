[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceEntityPaginationReq

# Class: AnnouncementsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.AnnouncementsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)\>

  ↳ **`AnnouncementsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](AnnouncementsServiceEntityPaginationReq.md#count)
- [entityUuid](AnnouncementsServiceEntityPaginationReq.md#entityuuid)
- [isActive](AnnouncementsServiceEntityPaginationReq.md#isactive)
- [offset](AnnouncementsServiceEntityPaginationReq.md#offset)
- [sortKey](AnnouncementsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](AnnouncementsServiceEntityPaginationReq.md#sortorder)
- [fields](AnnouncementsServiceEntityPaginationReq.md#fields)
- [runtime](AnnouncementsServiceEntityPaginationReq.md#runtime)
- [typeName](AnnouncementsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](AnnouncementsServiceEntityPaginationReq.md#clone)
- [equals](AnnouncementsServiceEntityPaginationReq.md#equals)
- [fromBinary](AnnouncementsServiceEntityPaginationReq.md#frombinary)
- [fromJson](AnnouncementsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](AnnouncementsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](AnnouncementsServiceEntityPaginationReq.md#gettype)
- [toBinary](AnnouncementsServiceEntityPaginationReq.md#tobinary)
- [toJSON](AnnouncementsServiceEntityPaginationReq.md#tojson)
- [toJson](AnnouncementsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](AnnouncementsServiceEntityPaginationReq.md#tojsonstring)
- [equals](AnnouncementsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](AnnouncementsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](AnnouncementsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;AnnouncementsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/announcements_pb.ts:658](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L658)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/announcements_pb.ts:628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L628)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/announcements_pb.ts:656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L656)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/announcements_pb.ts:621](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L621)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/announcements_pb.ts:635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L635)

___

### sortKey

• **sortKey**: [`ANNOUNCEMENT_SORT_KEY`](../enums/ANNOUNCEMENT_SORT_KEY.md) = `ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ANNOUNCEMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/announcements_pb.ts:649](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L649)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/announcements_pb.ts:642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L642)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements_pb.ts:665](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L665)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements_pb.ts:663](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L663)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AnnouncementsServiceEntityPaginationReq"``

#### Defined in

[src/announcements_pb.ts:664](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L664)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

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

[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L686)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Defined in

[src/announcements_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L674)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Defined in

[src/announcements_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L678)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceEntityPaginationReq`](AnnouncementsServiceEntityPaginationReq.md)

#### Defined in

[src/announcements_pb.ts:682](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/announcements_pb.ts#L682)
