[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServicePaginationReq

# Class: ReplaceableIndentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.ReplaceableIndentsServicePaginationReq

## Hierarchy

- `Message`<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\>

  ↳ **`ReplaceableIndentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServicePaginationReq.md#constructor)

### Properties

- [count](ReplaceableIndentsServicePaginationReq.md#count)
- [isActive](ReplaceableIndentsServicePaginationReq.md#isactive)
- [offset](ReplaceableIndentsServicePaginationReq.md#offset)
- [sortKey](ReplaceableIndentsServicePaginationReq.md#sortkey)
- [sortOrder](ReplaceableIndentsServicePaginationReq.md#sortorder)
- [status](ReplaceableIndentsServicePaginationReq.md#status)
- [fields](ReplaceableIndentsServicePaginationReq.md#fields)
- [runtime](ReplaceableIndentsServicePaginationReq.md#runtime)
- [typeName](ReplaceableIndentsServicePaginationReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServicePaginationReq.md#clone)
- [equals](ReplaceableIndentsServicePaginationReq.md#equals)
- [fromBinary](ReplaceableIndentsServicePaginationReq.md#frombinary)
- [fromJson](ReplaceableIndentsServicePaginationReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServicePaginationReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServicePaginationReq.md#gettype)
- [toBinary](ReplaceableIndentsServicePaginationReq.md#tobinary)
- [toJSON](ReplaceableIndentsServicePaginationReq.md#tojson)
- [toJson](ReplaceableIndentsServicePaginationReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServicePaginationReq.md#tojsonstring)
- [equals](ReplaceableIndentsServicePaginationReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServicePaginationReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:989](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L989)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/replaceable_indents_pb.ts:959](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L959)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/replaceable_indents_pb.ts:952](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L952)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/replaceable_indents_pb.ts:966](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L966)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_SORT_KEY`](../enums/REPLACEABLE_INDENT_SORT_KEY.md) = `REPLACEABLE_INDENT_SORT_KEY.REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents_pb.ts:980](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L980)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/replaceable_indents_pb.ts:973](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L973)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this replaceable indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/replaceable_indents_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L987)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:996](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L996)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L994)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServicePaginationReq"``

#### Defined in

[src/replaceable_indents_pb.ts:995](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L995)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md) \| `PlainMessage`<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

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

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md) \| `PlainMessage`<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md) \| `PlainMessage`<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:1017](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1017)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1005](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1005)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1009](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1009)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1013](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1013)
