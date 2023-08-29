[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceEntityPaginationReq

# Class: AssetIndentsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.AssetIndentsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)\>

  ↳ **`AssetIndentsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](AssetIndentsServiceEntityPaginationReq.md#count)
- [entityUuid](AssetIndentsServiceEntityPaginationReq.md#entityuuid)
- [isActive](AssetIndentsServiceEntityPaginationReq.md#isactive)
- [offset](AssetIndentsServiceEntityPaginationReq.md#offset)
- [sortKey](AssetIndentsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](AssetIndentsServiceEntityPaginationReq.md#sortorder)
- [fields](AssetIndentsServiceEntityPaginationReq.md#fields)
- [runtime](AssetIndentsServiceEntityPaginationReq.md#runtime)
- [typeName](AssetIndentsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](AssetIndentsServiceEntityPaginationReq.md#clone)
- [equals](AssetIndentsServiceEntityPaginationReq.md#equals)
- [fromBinary](AssetIndentsServiceEntityPaginationReq.md#frombinary)
- [fromJson](AssetIndentsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](AssetIndentsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](AssetIndentsServiceEntityPaginationReq.md#gettype)
- [toBinary](AssetIndentsServiceEntityPaginationReq.md#tobinary)
- [toJSON](AssetIndentsServiceEntityPaginationReq.md#tojson)
- [toJson](AssetIndentsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](AssetIndentsServiceEntityPaginationReq.md#tojsonstring)
- [equals](AssetIndentsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](AssetIndentsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](AssetIndentsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;AssetIndentsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/asset_indents_pb.ts:1047](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1047)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/asset_indents_pb.ts:1017](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1017)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/asset_indents_pb.ts:1045](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1045)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/asset_indents_pb.ts:1010](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1010)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/asset_indents_pb.ts:1024](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1024)

___

### sortKey

• **sortKey**: [`ASSET_INDENT_SORT_KEY`](../enums/ASSET_INDENT_SORT_KEY.md) = `ASSET_INDENT_SORT_KEY.ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ASSET_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/asset_indents_pb.ts:1038](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1038)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/asset_indents_pb.ts:1031](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1031)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents_pb.ts:1054](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1054)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1052)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssetIndentsServiceEntityPaginationReq"``

#### Defined in

[src/asset_indents_pb.ts:1053](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1053)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

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

[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents_pb.ts:1075](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1075)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/asset_indents_pb.ts:1063](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1063)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/asset_indents_pb.ts:1067](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1067)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceEntityPaginationReq`](AssetIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/asset_indents_pb.ts:1071](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1071)
