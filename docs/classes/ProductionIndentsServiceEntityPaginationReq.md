[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceEntityPaginationReq

# Class: ProductionIndentsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.ProductionIndentsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)\>

  ↳ **`ProductionIndentsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](ProductionIndentsServiceEntityPaginationReq.md#count)
- [entityUuid](ProductionIndentsServiceEntityPaginationReq.md#entityuuid)
- [isActive](ProductionIndentsServiceEntityPaginationReq.md#isactive)
- [offset](ProductionIndentsServiceEntityPaginationReq.md#offset)
- [sortKey](ProductionIndentsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](ProductionIndentsServiceEntityPaginationReq.md#sortorder)
- [fields](ProductionIndentsServiceEntityPaginationReq.md#fields)
- [runtime](ProductionIndentsServiceEntityPaginationReq.md#runtime)
- [typeName](ProductionIndentsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](ProductionIndentsServiceEntityPaginationReq.md#clone)
- [equals](ProductionIndentsServiceEntityPaginationReq.md#equals)
- [fromBinary](ProductionIndentsServiceEntityPaginationReq.md#frombinary)
- [fromJson](ProductionIndentsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](ProductionIndentsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](ProductionIndentsServiceEntityPaginationReq.md#gettype)
- [toBinary](ProductionIndentsServiceEntityPaginationReq.md#tobinary)
- [toJSON](ProductionIndentsServiceEntityPaginationReq.md#tojson)
- [toJson](ProductionIndentsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](ProductionIndentsServiceEntityPaginationReq.md#tojsonstring)
- [equals](ProductionIndentsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](ProductionIndentsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](ProductionIndentsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;ProductionIndentsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:1145](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1145)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_indents_pb.ts:1115](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1115)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/production_indents_pb.ts:1143](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1143)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/production_indents_pb.ts:1108](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1108)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/production_indents_pb.ts:1122](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1122)

___

### sortKey

• **sortKey**: [`PRODUCTION_INDENT_SORT_KEY`](../enums/PRODUCTION_INDENT_SORT_KEY.md) = `PRODUCTION_INDENT_SORT_KEY.PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PRODUCTION_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/production_indents_pb.ts:1136](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1136)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_indents_pb.ts:1129](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1129)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:1152](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1152)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:1150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1150)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsServiceEntityPaginationReq"``

#### Defined in

[src/production_indents_pb.ts:1151](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1151)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

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

[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:1173](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1173)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/production_indents_pb.ts:1161](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1161)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/production_indents_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1165)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceEntityPaginationReq`](ProductionIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/production_indents_pb.ts:1169](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1169)
