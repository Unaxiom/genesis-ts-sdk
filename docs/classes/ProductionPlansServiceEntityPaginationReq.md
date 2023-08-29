[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceEntityPaginationReq

# Class: ProductionPlansServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.ProductionPlansServiceEntityPaginationReq

## Hierarchy

- `Message`<[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)\>

  ↳ **`ProductionPlansServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceEntityPaginationReq.md#constructor)

### Properties

- [count](ProductionPlansServiceEntityPaginationReq.md#count)
- [entityUuid](ProductionPlansServiceEntityPaginationReq.md#entityuuid)
- [isActive](ProductionPlansServiceEntityPaginationReq.md#isactive)
- [offset](ProductionPlansServiceEntityPaginationReq.md#offset)
- [sortKey](ProductionPlansServiceEntityPaginationReq.md#sortkey)
- [sortOrder](ProductionPlansServiceEntityPaginationReq.md#sortorder)
- [fields](ProductionPlansServiceEntityPaginationReq.md#fields)
- [runtime](ProductionPlansServiceEntityPaginationReq.md#runtime)
- [typeName](ProductionPlansServiceEntityPaginationReq.md#typename)

### Methods

- [clone](ProductionPlansServiceEntityPaginationReq.md#clone)
- [equals](ProductionPlansServiceEntityPaginationReq.md#equals)
- [fromBinary](ProductionPlansServiceEntityPaginationReq.md#frombinary)
- [fromJson](ProductionPlansServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](ProductionPlansServiceEntityPaginationReq.md#fromjsonstring)
- [getType](ProductionPlansServiceEntityPaginationReq.md#gettype)
- [toBinary](ProductionPlansServiceEntityPaginationReq.md#tobinary)
- [toJSON](ProductionPlansServiceEntityPaginationReq.md#tojson)
- [toJson](ProductionPlansServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](ProductionPlansServiceEntityPaginationReq.md#tojsonstring)
- [equals](ProductionPlansServiceEntityPaginationReq.md#equals-1)
- [fromBinary](ProductionPlansServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](ProductionPlansServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;ProductionPlansServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:1249](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1249)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_plans_pb.ts:1219](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1219)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/production_plans_pb.ts:1247](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1247)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/production_plans_pb.ts:1212](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1212)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/production_plans_pb.ts:1226](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1226)

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_SORT_KEY`](../enums/PRODUCTION_PLAN_SORT_KEY.md) = `PRODUCTION_PLAN_SORT_KEY.PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PRODUCTION_PLAN_SORT_KEY sort_key = 5;

#### Defined in

[src/production_plans_pb.ts:1240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1240)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_plans_pb.ts:1233](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1233)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:1256](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1256)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:1254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1254)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServiceEntityPaginationReq"``

#### Defined in

[src/production_plans_pb.ts:1255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1255)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

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

[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:1277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1277)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Defined in

[src/production_plans_pb.ts:1265](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1265)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Defined in

[src/production_plans_pb.ts:1269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1269)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceEntityPaginationReq`](ProductionPlansServiceEntityPaginationReq.md)

#### Defined in

[src/production_plans_pb.ts:1273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1273)
