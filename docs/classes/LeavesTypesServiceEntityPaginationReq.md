[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServiceEntityPaginationReq

# Class: LeavesTypesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.LeavesTypesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)\>

  ↳ **`LeavesTypesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](LeavesTypesServiceEntityPaginationReq.md#count)
- [entityUuid](LeavesTypesServiceEntityPaginationReq.md#entityuuid)
- [isActive](LeavesTypesServiceEntityPaginationReq.md#isactive)
- [offset](LeavesTypesServiceEntityPaginationReq.md#offset)
- [sortKey](LeavesTypesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](LeavesTypesServiceEntityPaginationReq.md#sortorder)
- [fields](LeavesTypesServiceEntityPaginationReq.md#fields)
- [runtime](LeavesTypesServiceEntityPaginationReq.md#runtime)
- [typeName](LeavesTypesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](LeavesTypesServiceEntityPaginationReq.md#clone)
- [equals](LeavesTypesServiceEntityPaginationReq.md#equals)
- [fromBinary](LeavesTypesServiceEntityPaginationReq.md#frombinary)
- [fromJson](LeavesTypesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](LeavesTypesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](LeavesTypesServiceEntityPaginationReq.md#gettype)
- [toBinary](LeavesTypesServiceEntityPaginationReq.md#tobinary)
- [toJSON](LeavesTypesServiceEntityPaginationReq.md#tojson)
- [toJson](LeavesTypesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](LeavesTypesServiceEntityPaginationReq.md#tojsonstring)
- [equals](LeavesTypesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](LeavesTypesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](LeavesTypesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](LeavesTypesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;LeavesTypesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/leaves_types_pb.ts:618](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L618)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_types_pb.ts:588](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L588)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/leaves_types_pb.ts:616](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L616)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/leaves_types_pb.ts:581](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L581)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/leaves_types_pb.ts:595](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L595)

___

### sortKey

• **sortKey**: [`LEAVE_TYPE_SORT_KEY`](../enums/LEAVE_TYPE_SORT_KEY.md) = `LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_types_pb.ts:609](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L609)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_types_pb.ts:602](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L602)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types_pb.ts:625](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L625)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types_pb.ts:623](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L623)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesTypesServiceEntityPaginationReq"``

#### Defined in

[src/leaves_types_pb.ts:624](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L624)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

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

[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types_pb.ts:646](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L646)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_types_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L634)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_types_pb.ts:638](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L638)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceEntityPaginationReq`](LeavesTypesServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_types_pb.ts:642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L642)
