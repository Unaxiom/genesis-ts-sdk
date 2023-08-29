[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceEntityPaginationReq

# Class: QCGroupsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.QCGroupsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)\>

  ↳ **`QCGroupsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](QCGroupsServiceEntityPaginationReq.md#count)
- [entityUuid](QCGroupsServiceEntityPaginationReq.md#entityuuid)
- [isActive](QCGroupsServiceEntityPaginationReq.md#isactive)
- [offset](QCGroupsServiceEntityPaginationReq.md#offset)
- [sortKey](QCGroupsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](QCGroupsServiceEntityPaginationReq.md#sortorder)
- [fields](QCGroupsServiceEntityPaginationReq.md#fields)
- [runtime](QCGroupsServiceEntityPaginationReq.md#runtime)
- [typeName](QCGroupsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](QCGroupsServiceEntityPaginationReq.md#clone)
- [equals](QCGroupsServiceEntityPaginationReq.md#equals)
- [fromBinary](QCGroupsServiceEntityPaginationReq.md#frombinary)
- [fromJson](QCGroupsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](QCGroupsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](QCGroupsServiceEntityPaginationReq.md#gettype)
- [toBinary](QCGroupsServiceEntityPaginationReq.md#tobinary)
- [toJSON](QCGroupsServiceEntityPaginationReq.md#tojson)
- [toJson](QCGroupsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](QCGroupsServiceEntityPaginationReq.md#tojsonstring)
- [equals](QCGroupsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](QCGroupsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](QCGroupsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](QCGroupsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;QCGroupsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:1184](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1184)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_groups_pb.ts:1154](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1154)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/qc_groups_pb.ts:1182](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1182)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/qc_groups_pb.ts:1147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1147)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/qc_groups_pb.ts:1161](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1161)

___

### sortKey

• **sortKey**: [`QC_GROUP_SORT_KEY`](../enums/QC_GROUP_SORT_KEY.md) = `QC_GROUP_SORT_KEY.QC_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QC_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_groups_pb.ts:1175](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1175)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_groups_pb.ts:1168](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1168)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:1191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1191)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:1189](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1189)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroupsServiceEntityPaginationReq"``

#### Defined in

[src/qc_groups_pb.ts:1190](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1190)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

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

[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:1212](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1212)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/qc_groups_pb.ts:1200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1200)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/qc_groups_pb.ts:1204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1204)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceEntityPaginationReq`](QCGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/qc_groups_pb.ts:1208](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1208)
