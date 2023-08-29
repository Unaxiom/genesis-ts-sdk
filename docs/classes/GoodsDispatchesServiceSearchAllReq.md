[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceSearchAllReq

# Class: GoodsDispatchesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.GoodsDispatchesServiceSearchAllReq

## Hierarchy

- `Message`<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

  ↳ **`GoodsDispatchesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](GoodsDispatchesServiceSearchAllReq.md#billingstatus)
- [count](GoodsDispatchesServiceSearchAllReq.md#count)
- [entityUuid](GoodsDispatchesServiceSearchAllReq.md#entityuuid)
- [isActive](GoodsDispatchesServiceSearchAllReq.md#isactive)
- [offset](GoodsDispatchesServiceSearchAllReq.md#offset)
- [refFrom](GoodsDispatchesServiceSearchAllReq.md#reffrom)
- [refId](GoodsDispatchesServiceSearchAllReq.md#refid)
- [searchKey](GoodsDispatchesServiceSearchAllReq.md#searchkey)
- [sortKey](GoodsDispatchesServiceSearchAllReq.md#sortkey)
- [sortOrder](GoodsDispatchesServiceSearchAllReq.md#sortorder)
- [status](GoodsDispatchesServiceSearchAllReq.md#status)
- [fields](GoodsDispatchesServiceSearchAllReq.md#fields)
- [runtime](GoodsDispatchesServiceSearchAllReq.md#runtime)
- [typeName](GoodsDispatchesServiceSearchAllReq.md#typename)

### Methods

- [clone](GoodsDispatchesServiceSearchAllReq.md#clone)
- [equals](GoodsDispatchesServiceSearchAllReq.md#equals)
- [fromBinary](GoodsDispatchesServiceSearchAllReq.md#frombinary)
- [fromJson](GoodsDispatchesServiceSearchAllReq.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceSearchAllReq.md#fromjsonstring)
- [getType](GoodsDispatchesServiceSearchAllReq.md#gettype)
- [toBinary](GoodsDispatchesServiceSearchAllReq.md#tobinary)
- [toJSON](GoodsDispatchesServiceSearchAllReq.md#tojson)
- [toJson](GoodsDispatchesServiceSearchAllReq.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceSearchAllReq.md#tojsonstring)
- [equals](GoodsDispatchesServiceSearchAllReq.md#equals-1)
- [fromBinary](GoodsDispatchesServiceSearchAllReq.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;GoodsDispatchesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:1565](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1565)

## Properties

### billingStatus

• **billingStatus**: [`GOODS_DISPATCH_BILLING_STATUS`](../enums/GOODS_DISPATCH_BILLING_STATUS.md) = `GOODS_DISPATCH_BILLING_STATUS.GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods dispatch bill

**`Generated`**

from field: Genesis.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_dispatches_pb.ts:1563](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1563)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_dispatches_pb.ts:1500](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1500)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/goods_dispatches_pb.ts:1528](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1528)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/goods_dispatches_pb.ts:1493](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1493)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/goods_dispatches_pb.ts:1507](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1507)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/goods_dispatches_pb.ts:1549](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1549)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/goods_dispatches_pb.ts:1556](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1556)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/goods_dispatches_pb.ts:1542](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1542)

___

### sortKey

• **sortKey**: [`GOODS_DISPATCH_SORT_KEY`](../enums/GOODS_DISPATCH_SORT_KEY.md) = `GOODS_DISPATCH_SORT_KEY.GOODS_DISPATCH_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.GOODS_DISPATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches_pb.ts:1521](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1521)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_dispatches_pb.ts:1514](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1514)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/goods_dispatches_pb.ts:1535](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1535)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:1572](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1572)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:1570](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1570)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesServiceSearchAllReq"``

#### Defined in

[src/goods_dispatches_pb.ts:1571](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1571)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

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

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:1598](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1598)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1586](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1586)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1590](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1590)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches_pb.ts:1594](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1594)
