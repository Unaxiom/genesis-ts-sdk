[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServicePaginationReq

# Class: EquationsWorkOrdersServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.EquationsWorkOrdersServicePaginationReq

## Hierarchy

- `Message`<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\>

  ↳ **`EquationsWorkOrdersServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServicePaginationReq.md#constructor)

### Properties

- [count](EquationsWorkOrdersServicePaginationReq.md#count)
- [isActive](EquationsWorkOrdersServicePaginationReq.md#isactive)
- [offset](EquationsWorkOrdersServicePaginationReq.md#offset)
- [sortKey](EquationsWorkOrdersServicePaginationReq.md#sortkey)
- [sortOrder](EquationsWorkOrdersServicePaginationReq.md#sortorder)
- [status](EquationsWorkOrdersServicePaginationReq.md#status)
- [fields](EquationsWorkOrdersServicePaginationReq.md#fields)
- [runtime](EquationsWorkOrdersServicePaginationReq.md#runtime)
- [typeName](EquationsWorkOrdersServicePaginationReq.md#typename)

### Methods

- [clone](EquationsWorkOrdersServicePaginationReq.md#clone)
- [equals](EquationsWorkOrdersServicePaginationReq.md#equals)
- [fromBinary](EquationsWorkOrdersServicePaginationReq.md#frombinary)
- [fromJson](EquationsWorkOrdersServicePaginationReq.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServicePaginationReq.md#fromjsonstring)
- [getType](EquationsWorkOrdersServicePaginationReq.md#gettype)
- [toBinary](EquationsWorkOrdersServicePaginationReq.md#tobinary)
- [toJSON](EquationsWorkOrdersServicePaginationReq.md#tojson)
- [toJson](EquationsWorkOrdersServicePaginationReq.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServicePaginationReq.md#tojsonstring)
- [equals](EquationsWorkOrdersServicePaginationReq.md#equals-1)
- [fromBinary](EquationsWorkOrdersServicePaginationReq.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServicePaginationReq.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\> |

#### Overrides

Message&lt;EquationsWorkOrdersServicePaginationReq\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:840](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L840)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_work_orders_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L810)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/equations_work_orders_pb.ts:803](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L803)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/equations_work_orders_pb.ts:817](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L817)

___

### sortKey

• **sortKey**: [`EQUATION_WORK_ORDER_SORT_KEY`](../enums/EQUATION_WORK_ORDER_SORT_KEY.md) = `EQUATION_WORK_ORDER_SORT_KEY.EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_work_orders_pb.ts:831](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L831)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/equations_work_orders_pb.ts:824](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L824)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this equation work order

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/equations_work_orders_pb.ts:838](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L838)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:847](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L847)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:845](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L845)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsWorkOrdersServicePaginationReq"``

#### Defined in

[src/equations_work_orders_pb.ts:846](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L846)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

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

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:868](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L868)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:856](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L856)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:860](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L860)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationReq`](EquationsWorkOrdersServicePaginationReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:864](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L864)
