[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceSearchAllReq

# Class: ProductionPlansServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.ProductionPlansServiceSearchAllReq

## Hierarchy

- `Message`<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\>

  ↳ **`ProductionPlansServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceSearchAllReq.md#constructor)

### Properties

- [count](ProductionPlansServiceSearchAllReq.md#count)
- [entityUuid](ProductionPlansServiceSearchAllReq.md#entityuuid)
- [isActive](ProductionPlansServiceSearchAllReq.md#isactive)
- [locationId](ProductionPlansServiceSearchAllReq.md#locationid)
- [offset](ProductionPlansServiceSearchAllReq.md#offset)
- [refFrom](ProductionPlansServiceSearchAllReq.md#reffrom)
- [refId](ProductionPlansServiceSearchAllReq.md#refid)
- [searchKey](ProductionPlansServiceSearchAllReq.md#searchkey)
- [sortKey](ProductionPlansServiceSearchAllReq.md#sortkey)
- [sortOrder](ProductionPlansServiceSearchAllReq.md#sortorder)
- [status](ProductionPlansServiceSearchAllReq.md#status)
- [supervisor](ProductionPlansServiceSearchAllReq.md#supervisor)
- [fields](ProductionPlansServiceSearchAllReq.md#fields)
- [runtime](ProductionPlansServiceSearchAllReq.md#runtime)
- [typeName](ProductionPlansServiceSearchAllReq.md#typename)

### Methods

- [clone](ProductionPlansServiceSearchAllReq.md#clone)
- [equals](ProductionPlansServiceSearchAllReq.md#equals)
- [fromBinary](ProductionPlansServiceSearchAllReq.md#frombinary)
- [fromJson](ProductionPlansServiceSearchAllReq.md#fromjson)
- [fromJsonString](ProductionPlansServiceSearchAllReq.md#fromjsonstring)
- [getType](ProductionPlansServiceSearchAllReq.md#gettype)
- [toBinary](ProductionPlansServiceSearchAllReq.md#tobinary)
- [toJSON](ProductionPlansServiceSearchAllReq.md#tojson)
- [toJson](ProductionPlansServiceSearchAllReq.md#tojson-1)
- [toJsonString](ProductionPlansServiceSearchAllReq.md#tojsonstring)
- [equals](ProductionPlansServiceSearchAllReq.md#equals-1)
- [fromBinary](ProductionPlansServiceSearchAllReq.md#frombinary-1)
- [fromJson](ProductionPlansServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ProductionPlansServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:1647](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1647)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_plans_pb.ts:1575](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1575)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/production_plans_pb.ts:1603](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1603)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/production_plans_pb.ts:1568](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1568)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 24;

#### Defined in

[src/production_plans_pb.ts:1638](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1638)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/production_plans_pb.ts:1582](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1582)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/production_plans_pb.ts:1624](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1624)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/production_plans_pb.ts:1631](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1631)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/production_plans_pb.ts:1617](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1617)

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_SORT_KEY`](../enums/PRODUCTION_PLAN_SORT_KEY.md) = `PRODUCTION_PLAN_SORT_KEY.PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PRODUCTION_PLAN_SORT_KEY sort_key = 5;

#### Defined in

[src/production_plans_pb.ts:1596](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1596)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_plans_pb.ts:1589](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1589)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/production_plans_pb.ts:1610](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1610)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_plans_pb.ts:1645](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1645)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:1654](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1654)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:1652](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1652)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServiceSearchAllReq"``

#### Defined in

[src/production_plans_pb.ts:1653](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1653)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md) \| `PlainMessage`<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

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

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md) \| `PlainMessage`<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md) \| `PlainMessage`<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:1681](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1681)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Defined in

[src/production_plans_pb.ts:1669](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1669)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Defined in

[src/production_plans_pb.ts:1673](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1673)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Defined in

[src/production_plans_pb.ts:1677](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1677)
