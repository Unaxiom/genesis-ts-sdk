[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceEntityPaginationReq

# Class: ReplaceableIndentsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.ReplaceableIndentsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)\>

  ↳ **`ReplaceableIndentsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](ReplaceableIndentsServiceEntityPaginationReq.md#count)
- [entityUuid](ReplaceableIndentsServiceEntityPaginationReq.md#entityuuid)
- [isActive](ReplaceableIndentsServiceEntityPaginationReq.md#isactive)
- [offset](ReplaceableIndentsServiceEntityPaginationReq.md#offset)
- [sortKey](ReplaceableIndentsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](ReplaceableIndentsServiceEntityPaginationReq.md#sortorder)
- [fields](ReplaceableIndentsServiceEntityPaginationReq.md#fields)
- [runtime](ReplaceableIndentsServiceEntityPaginationReq.md#runtime)
- [typeName](ReplaceableIndentsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceEntityPaginationReq.md#clone)
- [equals](ReplaceableIndentsServiceEntityPaginationReq.md#equals)
- [fromBinary](ReplaceableIndentsServiceEntityPaginationReq.md#frombinary)
- [fromJson](ReplaceableIndentsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceEntityPaginationReq.md#gettype)
- [toBinary](ReplaceableIndentsServiceEntityPaginationReq.md#tobinary)
- [toJSON](ReplaceableIndentsServiceEntityPaginationReq.md#tojson)
- [toJson](ReplaceableIndentsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceEntityPaginationReq.md#tojsonstring)
- [equals](ReplaceableIndentsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:1137](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1137)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/replaceable_indents_pb.ts:1107](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1107)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/replaceable_indents_pb.ts:1135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1135)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/replaceable_indents_pb.ts:1100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1100)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/replaceable_indents_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1114)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_SORT_KEY`](../enums/REPLACEABLE_INDENT_SORT_KEY.md) = `REPLACEABLE_INDENT_SORT_KEY.REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents_pb.ts:1128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1128)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/replaceable_indents_pb.ts:1121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1121)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:1144](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1144)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:1142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1142)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServiceEntityPaginationReq"``

#### Defined in

[src/replaceable_indents_pb.ts:1143](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1143)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

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

[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1165)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1153)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1157](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1157)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceEntityPaginationReq`](ReplaceableIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1161](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1161)
