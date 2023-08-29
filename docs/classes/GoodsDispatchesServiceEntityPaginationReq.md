[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceEntityPaginationReq

# Class: GoodsDispatchesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.GoodsDispatchesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)\>

  ↳ **`GoodsDispatchesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](GoodsDispatchesServiceEntityPaginationReq.md#count)
- [entityUuid](GoodsDispatchesServiceEntityPaginationReq.md#entityuuid)
- [isActive](GoodsDispatchesServiceEntityPaginationReq.md#isactive)
- [offset](GoodsDispatchesServiceEntityPaginationReq.md#offset)
- [sortKey](GoodsDispatchesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](GoodsDispatchesServiceEntityPaginationReq.md#sortorder)
- [fields](GoodsDispatchesServiceEntityPaginationReq.md#fields)
- [runtime](GoodsDispatchesServiceEntityPaginationReq.md#runtime)
- [typeName](GoodsDispatchesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](GoodsDispatchesServiceEntityPaginationReq.md#clone)
- [equals](GoodsDispatchesServiceEntityPaginationReq.md#equals)
- [fromBinary](GoodsDispatchesServiceEntityPaginationReq.md#frombinary)
- [fromJson](GoodsDispatchesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](GoodsDispatchesServiceEntityPaginationReq.md#gettype)
- [toBinary](GoodsDispatchesServiceEntityPaginationReq.md#tobinary)
- [toJSON](GoodsDispatchesServiceEntityPaginationReq.md#tojson)
- [toJson](GoodsDispatchesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceEntityPaginationReq.md#tojsonstring)
- [equals](GoodsDispatchesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](GoodsDispatchesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;GoodsDispatchesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:1254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1254)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_dispatches_pb.ts:1224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1224)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/goods_dispatches_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1252)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goods_dispatches_pb.ts:1217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1217)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goods_dispatches_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1231)

___

### sortKey

• **sortKey**: [`GOODS_DISPATCH_SORT_KEY`](../enums/GOODS_DISPATCH_SORT_KEY.md) = `GOODS_DISPATCH_SORT_KEY.GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOODS_DISPATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1245)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_dispatches_pb.ts:1238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1238)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:1261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1261)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:1259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1259)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesServiceEntityPaginationReq"``

#### Defined in

[src/goods_dispatches_pb.ts:1260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1260)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

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

[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:1282](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1282)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1270](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1270)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1274](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1274)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceEntityPaginationReq`](GoodsDispatchesServiceEntityPaginationReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1278](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1278)
