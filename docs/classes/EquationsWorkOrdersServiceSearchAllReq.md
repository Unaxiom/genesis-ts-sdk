[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceSearchAllReq

# Class: EquationsWorkOrdersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.EquationsWorkOrdersServiceSearchAllReq

## Hierarchy

- `Message`<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\>

  ↳ **`EquationsWorkOrdersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceSearchAllReq.md#constructor)

### Properties

- [count](EquationsWorkOrdersServiceSearchAllReq.md#count)
- [entityUuid](EquationsWorkOrdersServiceSearchAllReq.md#entityuuid)
- [isActive](EquationsWorkOrdersServiceSearchAllReq.md#isactive)
- [offset](EquationsWorkOrdersServiceSearchAllReq.md#offset)
- [searchKey](EquationsWorkOrdersServiceSearchAllReq.md#searchkey)
- [sortKey](EquationsWorkOrdersServiceSearchAllReq.md#sortkey)
- [sortOrder](EquationsWorkOrdersServiceSearchAllReq.md#sortorder)
- [status](EquationsWorkOrdersServiceSearchAllReq.md#status)
- [fields](EquationsWorkOrdersServiceSearchAllReq.md#fields)
- [runtime](EquationsWorkOrdersServiceSearchAllReq.md#runtime)
- [typeName](EquationsWorkOrdersServiceSearchAllReq.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceSearchAllReq.md#clone)
- [equals](EquationsWorkOrdersServiceSearchAllReq.md#equals)
- [fromBinary](EquationsWorkOrdersServiceSearchAllReq.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceSearchAllReq.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceSearchAllReq.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceSearchAllReq.md#gettype)
- [toBinary](EquationsWorkOrdersServiceSearchAllReq.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceSearchAllReq.md#tojson)
- [toJson](EquationsWorkOrdersServiceSearchAllReq.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceSearchAllReq.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceSearchAllReq.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceSearchAllReq.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;EquationsWorkOrdersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:1254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1254)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_work_orders_pb.ts:1210](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1210)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/equations_work_orders_pb.ts:1238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1238)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/equations_work_orders_pb.ts:1203](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1203)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/equations_work_orders_pb.ts:1217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1217)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/equations_work_orders_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1252)

___

### sortKey

• **sortKey**: [`EQUATION_WORK_ORDER_SORT_KEY`](../enums/EQUATION_WORK_ORDER_SORT_KEY.md) = `EQUATION_WORK_ORDER_SORT_KEY.EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_work_orders_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1231)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/equations_work_orders_pb.ts:1224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1224)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/equations_work_orders_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1245)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:1261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1261)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:1259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1259)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsWorkOrdersServiceSearchAllReq"``

#### Defined in

[src/equations_work_orders_pb.ts:1260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1260)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

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

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:1284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1284)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1272](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1272)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1276)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceSearchAllReq`](EquationsWorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1280](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1280)
