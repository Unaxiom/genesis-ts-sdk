[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServicePaginationReq

# Class: ProductionPlansServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.ProductionPlansServicePaginationReq

## Hierarchy

- `Message`<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\>

  ↳ **`ProductionPlansServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServicePaginationReq.md#constructor)

### Properties

- [count](ProductionPlansServicePaginationReq.md#count)
- [isActive](ProductionPlansServicePaginationReq.md#isactive)
- [offset](ProductionPlansServicePaginationReq.md#offset)
- [sortKey](ProductionPlansServicePaginationReq.md#sortkey)
- [sortOrder](ProductionPlansServicePaginationReq.md#sortorder)
- [status](ProductionPlansServicePaginationReq.md#status)
- [fields](ProductionPlansServicePaginationReq.md#fields)
- [runtime](ProductionPlansServicePaginationReq.md#runtime)
- [typeName](ProductionPlansServicePaginationReq.md#typename)

### Methods

- [clone](ProductionPlansServicePaginationReq.md#clone)
- [equals](ProductionPlansServicePaginationReq.md#equals)
- [fromBinary](ProductionPlansServicePaginationReq.md#frombinary)
- [fromJson](ProductionPlansServicePaginationReq.md#fromjson)
- [fromJsonString](ProductionPlansServicePaginationReq.md#fromjsonstring)
- [getType](ProductionPlansServicePaginationReq.md#gettype)
- [toBinary](ProductionPlansServicePaginationReq.md#tobinary)
- [toJSON](ProductionPlansServicePaginationReq.md#tojson)
- [toJson](ProductionPlansServicePaginationReq.md#tojson-1)
- [toJsonString](ProductionPlansServicePaginationReq.md#tojsonstring)
- [equals](ProductionPlansServicePaginationReq.md#equals-1)
- [fromBinary](ProductionPlansServicePaginationReq.md#frombinary-1)
- [fromJson](ProductionPlansServicePaginationReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\> |

#### Overrides

Message&lt;ProductionPlansServicePaginationReq\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:1101](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1101)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_plans_pb.ts:1071](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1071)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/production_plans_pb.ts:1064](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1064)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/production_plans_pb.ts:1078](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1078)

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_SORT_KEY`](../enums/PRODUCTION_PLAN_SORT_KEY.md) = `PRODUCTION_PLAN_SORT_KEY.PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PRODUCTION_PLAN_SORT_KEY sort_key = 5;

#### Defined in

[src/production_plans_pb.ts:1092](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1092)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_plans_pb.ts:1085](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1085)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this production plan

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/production_plans_pb.ts:1099](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1099)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:1108](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1108)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:1106](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1106)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServicePaginationReq"``

#### Defined in

[src/production_plans_pb.ts:1107](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1107)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md) \| `PlainMessage`<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

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

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md) \| `PlainMessage`<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md) \| `PlainMessage`<[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:1129](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1129)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Defined in

[src/production_plans_pb.ts:1117](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1117)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Defined in

[src/production_plans_pb.ts:1121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1121)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationReq`](ProductionPlansServicePaginationReq.md)

#### Defined in

[src/production_plans_pb.ts:1125](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1125)
