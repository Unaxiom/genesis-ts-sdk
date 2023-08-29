[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceEntityPaginationReq

# Class: DepartmentsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.DepartmentsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)\>

  ↳ **`DepartmentsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](DepartmentsServiceEntityPaginationReq.md#count)
- [entityUuid](DepartmentsServiceEntityPaginationReq.md#entityuuid)
- [isActive](DepartmentsServiceEntityPaginationReq.md#isactive)
- [offset](DepartmentsServiceEntityPaginationReq.md#offset)
- [sortKey](DepartmentsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](DepartmentsServiceEntityPaginationReq.md#sortorder)
- [fields](DepartmentsServiceEntityPaginationReq.md#fields)
- [runtime](DepartmentsServiceEntityPaginationReq.md#runtime)
- [typeName](DepartmentsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](DepartmentsServiceEntityPaginationReq.md#clone)
- [equals](DepartmentsServiceEntityPaginationReq.md#equals)
- [fromBinary](DepartmentsServiceEntityPaginationReq.md#frombinary)
- [fromJson](DepartmentsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](DepartmentsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](DepartmentsServiceEntityPaginationReq.md#gettype)
- [toBinary](DepartmentsServiceEntityPaginationReq.md#tobinary)
- [toJSON](DepartmentsServiceEntityPaginationReq.md#tojson)
- [toJson](DepartmentsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](DepartmentsServiceEntityPaginationReq.md#tojsonstring)
- [equals](DepartmentsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](DepartmentsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](DepartmentsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](DepartmentsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;DepartmentsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/departments_pb.ts:650](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L650)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/departments_pb.ts:620](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L620)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/departments_pb.ts:648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L648)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/departments_pb.ts:613](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L613)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/departments_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L627)

___

### sortKey

• **sortKey**: [`DEPARTMENT_SORT_KEY`](../enums/DEPARTMENT_SORT_KEY.md) = `DEPARTMENT_SORT_KEY.DEPARTMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/departments_pb.ts:641](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L641)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/departments_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L634)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L657)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments_pb.ts:655](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L655)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.DepartmentsServiceEntityPaginationReq"``

#### Defined in

[src/departments_pb.ts:656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L656)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

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

[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L678)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Defined in

[src/departments_pb.ts:666](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L666)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Defined in

[src/departments_pb.ts:670](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L670)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceEntityPaginationReq`](DepartmentsServiceEntityPaginationReq.md)

#### Defined in

[src/departments_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L674)
