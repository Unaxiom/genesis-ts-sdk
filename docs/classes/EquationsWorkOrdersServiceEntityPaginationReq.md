[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceEntityPaginationReq

# Class: EquationsWorkOrdersServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.EquationsWorkOrdersServiceEntityPaginationReq

## Hierarchy

- `Message`<[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)\>

  ↳ **`EquationsWorkOrdersServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceEntityPaginationReq.md#constructor)

### Properties

- [count](EquationsWorkOrdersServiceEntityPaginationReq.md#count)
- [entityUuid](EquationsWorkOrdersServiceEntityPaginationReq.md#entityuuid)
- [isActive](EquationsWorkOrdersServiceEntityPaginationReq.md#isactive)
- [offset](EquationsWorkOrdersServiceEntityPaginationReq.md#offset)
- [sortKey](EquationsWorkOrdersServiceEntityPaginationReq.md#sortkey)
- [sortOrder](EquationsWorkOrdersServiceEntityPaginationReq.md#sortorder)
- [fields](EquationsWorkOrdersServiceEntityPaginationReq.md#fields)
- [runtime](EquationsWorkOrdersServiceEntityPaginationReq.md#runtime)
- [typeName](EquationsWorkOrdersServiceEntityPaginationReq.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceEntityPaginationReq.md#clone)
- [equals](EquationsWorkOrdersServiceEntityPaginationReq.md#equals)
- [fromBinary](EquationsWorkOrdersServiceEntityPaginationReq.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceEntityPaginationReq.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceEntityPaginationReq.md#gettype)
- [toBinary](EquationsWorkOrdersServiceEntityPaginationReq.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceEntityPaginationReq.md#tojson)
- [toJson](EquationsWorkOrdersServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceEntityPaginationReq.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceEntityPaginationReq.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;EquationsWorkOrdersServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:988](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L988)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_work_orders_pb.ts:958](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L958)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/equations_work_orders_pb.ts:986](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L986)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/equations_work_orders_pb.ts:951](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L951)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/equations_work_orders_pb.ts:965](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L965)

___

### sortKey

• **sortKey**: [`EQUATION_WORK_ORDER_SORT_KEY`](../enums/EQUATION_WORK_ORDER_SORT_KEY.md) = `EQUATION_WORK_ORDER_SORT_KEY.EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_work_orders_pb.ts:979](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L979)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/equations_work_orders_pb.ts:972](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L972)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:995](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L995)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:993](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L993)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsWorkOrdersServiceEntityPaginationReq"``

#### Defined in

[src/equations_work_orders_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L994)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

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

[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:1016](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1016)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1004](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1004)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1008](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1008)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceEntityPaginationReq`](EquationsWorkOrdersServiceEntityPaginationReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1012](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1012)
