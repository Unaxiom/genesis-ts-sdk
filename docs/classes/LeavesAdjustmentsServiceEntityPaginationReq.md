[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceEntityPaginationReq

# Class: LeavesAdjustmentsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.LeavesAdjustmentsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)\>

  ↳ **`LeavesAdjustmentsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](LeavesAdjustmentsServiceEntityPaginationReq.md#count)
- [entityUuid](LeavesAdjustmentsServiceEntityPaginationReq.md#entityuuid)
- [isActive](LeavesAdjustmentsServiceEntityPaginationReq.md#isactive)
- [offset](LeavesAdjustmentsServiceEntityPaginationReq.md#offset)
- [sortKey](LeavesAdjustmentsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](LeavesAdjustmentsServiceEntityPaginationReq.md#sortorder)
- [fields](LeavesAdjustmentsServiceEntityPaginationReq.md#fields)
- [runtime](LeavesAdjustmentsServiceEntityPaginationReq.md#runtime)
- [typeName](LeavesAdjustmentsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceEntityPaginationReq.md#clone)
- [equals](LeavesAdjustmentsServiceEntityPaginationReq.md#equals)
- [fromBinary](LeavesAdjustmentsServiceEntityPaginationReq.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceEntityPaginationReq.md#gettype)
- [toBinary](LeavesAdjustmentsServiceEntityPaginationReq.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceEntityPaginationReq.md#tojson)
- [toJson](LeavesAdjustmentsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceEntityPaginationReq.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L994)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:964](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L964)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/leaves_adjustments_pb.ts:992](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L992)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:957](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L957)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/leaves_adjustments_pb.ts:971](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L971)

___

### sortKey

• **sortKey**: [`LEAVE_ADJUSTMENT_SORT_KEY`](../enums/LEAVE_ADJUSTMENT_SORT_KEY.md) = `LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_adjustments_pb.ts:985](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L985)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_adjustments_pb.ts:978](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L978)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:1001](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1001)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:999](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L999)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsServiceEntityPaginationReq"``

#### Defined in

[src/leaves_adjustments_pb.ts:1000](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1000)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

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

[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:1022](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1022)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:1010](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1010)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:1014](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1014)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceEntityPaginationReq`](LeavesAdjustmentsServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_adjustments_pb.ts:1018](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L1018)
