[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceSearchAllReq

# Class: WorkOrdersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.WorkOrdersServiceSearchAllReq

## Hierarchy

- `Message`<[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)\>

  ↳ **`WorkOrdersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceSearchAllReq.md#constructor)

### Properties

- [count](WorkOrdersServiceSearchAllReq.md#count)
- [entityUuid](WorkOrdersServiceSearchAllReq.md#entityuuid)
- [isActive](WorkOrdersServiceSearchAllReq.md#isactive)
- [locationId](WorkOrdersServiceSearchAllReq.md#locationid)
- [offset](WorkOrdersServiceSearchAllReq.md#offset)
- [refFrom](WorkOrdersServiceSearchAllReq.md#reffrom)
- [refId](WorkOrdersServiceSearchAllReq.md#refid)
- [searchKey](WorkOrdersServiceSearchAllReq.md#searchkey)
- [sortKey](WorkOrdersServiceSearchAllReq.md#sortkey)
- [sortOrder](WorkOrdersServiceSearchAllReq.md#sortorder)
- [status](WorkOrdersServiceSearchAllReq.md#status)
- [fields](WorkOrdersServiceSearchAllReq.md#fields)
- [runtime](WorkOrdersServiceSearchAllReq.md#runtime)
- [typeName](WorkOrdersServiceSearchAllReq.md#typename)

### Methods

- [clone](WorkOrdersServiceSearchAllReq.md#clone)
- [equals](WorkOrdersServiceSearchAllReq.md#equals)
- [fromBinary](WorkOrdersServiceSearchAllReq.md#frombinary)
- [fromJson](WorkOrdersServiceSearchAllReq.md#fromjson)
- [fromJsonString](WorkOrdersServiceSearchAllReq.md#fromjsonstring)
- [getType](WorkOrdersServiceSearchAllReq.md#gettype)
- [toBinary](WorkOrdersServiceSearchAllReq.md#tobinary)
- [toJSON](WorkOrdersServiceSearchAllReq.md#tojson)
- [toJson](WorkOrdersServiceSearchAllReq.md#tojson-1)
- [toJsonString](WorkOrdersServiceSearchAllReq.md#tojsonstring)
- [equals](WorkOrdersServiceSearchAllReq.md#equals-1)
- [fromBinary](WorkOrdersServiceSearchAllReq.md#frombinary-1)
- [fromJson](WorkOrdersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;WorkOrdersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:1448](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1448)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/work_orders_pb.ts:1383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1383)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/work_orders_pb.ts:1411](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1411)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/work_orders_pb.ts:1376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1376)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 24;

#### Defined in

[src/work_orders_pb.ts:1446](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1446)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/work_orders_pb.ts:1390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1390)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/work_orders_pb.ts:1432](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1432)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/work_orders_pb.ts:1439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1439)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/work_orders_pb.ts:1425](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1425)

___

### sortKey

• **sortKey**: [`WORK_ORDER_SORT_KEY`](../enums/WORK_ORDER_SORT_KEY.md) = `WORK_ORDER_SORT_KEY.WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/work_orders_pb.ts:1404](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1404)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/work_orders_pb.ts:1397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1397)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/work_orders_pb.ts:1418](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1418)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:1455](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1455)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:1453](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1453)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrdersServiceSearchAllReq"``

#### Defined in

[src/work_orders_pb.ts:1454](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1454)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md) \| `PlainMessage`<[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

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

[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md) \| `PlainMessage`<[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md) \| `PlainMessage`<[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:1481](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1481)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/work_orders_pb.ts:1469](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1469)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/work_orders_pb.ts:1473](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1473)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceSearchAllReq`](WorkOrdersServiceSearchAllReq.md)

#### Defined in

[src/work_orders_pb.ts:1477](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L1477)
