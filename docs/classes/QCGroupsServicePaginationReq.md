[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServicePaginationReq

# Class: QCGroupsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.QCGroupsServicePaginationReq

## Hierarchy

- `Message`<[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)\>

  ↳ **`QCGroupsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServicePaginationReq.md#constructor)

### Properties

- [count](QCGroupsServicePaginationReq.md#count)
- [isActive](QCGroupsServicePaginationReq.md#isactive)
- [offset](QCGroupsServicePaginationReq.md#offset)
- [sortKey](QCGroupsServicePaginationReq.md#sortkey)
- [sortOrder](QCGroupsServicePaginationReq.md#sortorder)
- [status](QCGroupsServicePaginationReq.md#status)
- [fields](QCGroupsServicePaginationReq.md#fields)
- [runtime](QCGroupsServicePaginationReq.md#runtime)
- [typeName](QCGroupsServicePaginationReq.md#typename)

### Methods

- [clone](QCGroupsServicePaginationReq.md#clone)
- [equals](QCGroupsServicePaginationReq.md#equals)
- [fromBinary](QCGroupsServicePaginationReq.md#frombinary)
- [fromJson](QCGroupsServicePaginationReq.md#fromjson)
- [fromJsonString](QCGroupsServicePaginationReq.md#fromjsonstring)
- [getType](QCGroupsServicePaginationReq.md#gettype)
- [toBinary](QCGroupsServicePaginationReq.md#tobinary)
- [toJSON](QCGroupsServicePaginationReq.md#tojson)
- [toJson](QCGroupsServicePaginationReq.md#tojson-1)
- [toJsonString](QCGroupsServicePaginationReq.md#tojsonstring)
- [equals](QCGroupsServicePaginationReq.md#equals-1)
- [fromBinary](QCGroupsServicePaginationReq.md#frombinary-1)
- [fromJson](QCGroupsServicePaginationReq.md#fromjson-1)
- [fromJsonString](QCGroupsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)\> |

#### Overrides

Message&lt;QCGroupsServicePaginationReq\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:1036](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1036)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_groups_pb.ts:1006](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1006)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/qc_groups_pb.ts:999](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L999)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/qc_groups_pb.ts:1013](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1013)

___

### sortKey

• **sortKey**: [`QC_GROUP_SORT_KEY`](../enums/QC_GROUP_SORT_KEY.md) = `QC_GROUP_SORT_KEY.QC_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QC_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_groups_pb.ts:1027](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1027)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_groups_pb.ts:1020](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1020)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this qc group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/qc_groups_pb.ts:1034](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1034)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:1043](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1043)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:1041](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1041)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroupsServicePaginationReq"``

#### Defined in

[src/qc_groups_pb.ts:1042](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1042)

## Methods

### clone

▸ **clone**(): [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md) \| `PlainMessage`<[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

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

[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md) \| `PlainMessage`<[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md) \| `PlainMessage`<[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:1064](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1064)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Defined in

[src/qc_groups_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1052)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Defined in

[src/qc_groups_pb.ts:1056](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1056)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationReq`](QCGroupsServicePaginationReq.md)

#### Defined in

[src/qc_groups_pb.ts:1060](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1060)
