[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceSearchAllReq

# Class: QCGroupsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.QCGroupsServiceSearchAllReq

## Hierarchy

- `Message`<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\>

  ↳ **`QCGroupsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceSearchAllReq.md#constructor)

### Properties

- [count](QCGroupsServiceSearchAllReq.md#count)
- [entityUuid](QCGroupsServiceSearchAllReq.md#entityuuid)
- [isActive](QCGroupsServiceSearchAllReq.md#isactive)
- [offset](QCGroupsServiceSearchAllReq.md#offset)
- [searchKey](QCGroupsServiceSearchAllReq.md#searchkey)
- [sortKey](QCGroupsServiceSearchAllReq.md#sortkey)
- [sortOrder](QCGroupsServiceSearchAllReq.md#sortorder)
- [status](QCGroupsServiceSearchAllReq.md#status)
- [fields](QCGroupsServiceSearchAllReq.md#fields)
- [runtime](QCGroupsServiceSearchAllReq.md#runtime)
- [typeName](QCGroupsServiceSearchAllReq.md#typename)

### Methods

- [clone](QCGroupsServiceSearchAllReq.md#clone)
- [equals](QCGroupsServiceSearchAllReq.md#equals)
- [fromBinary](QCGroupsServiceSearchAllReq.md#frombinary)
- [fromJson](QCGroupsServiceSearchAllReq.md#fromjson)
- [fromJsonString](QCGroupsServiceSearchAllReq.md#fromjsonstring)
- [getType](QCGroupsServiceSearchAllReq.md#gettype)
- [toBinary](QCGroupsServiceSearchAllReq.md#tobinary)
- [toJSON](QCGroupsServiceSearchAllReq.md#tojson)
- [toJson](QCGroupsServiceSearchAllReq.md#tojson-1)
- [toJsonString](QCGroupsServiceSearchAllReq.md#tojsonstring)
- [equals](QCGroupsServiceSearchAllReq.md#equals-1)
- [fromBinary](QCGroupsServiceSearchAllReq.md#frombinary-1)
- [fromJson](QCGroupsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](QCGroupsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;QCGroupsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:1442](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1442)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_groups_pb.ts:1398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1398)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/qc_groups_pb.ts:1426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1426)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/qc_groups_pb.ts:1391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1391)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/qc_groups_pb.ts:1405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1405)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/qc_groups_pb.ts:1440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1440)

___

### sortKey

• **sortKey**: [`QC_GROUP_SORT_KEY`](../enums/QC_GROUP_SORT_KEY.md) = `QC_GROUP_SORT_KEY.QC_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QC_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_groups_pb.ts:1419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1419)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_groups_pb.ts:1412](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1412)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/qc_groups_pb.ts:1433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1433)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:1449](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1449)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:1447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1447)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroupsServiceSearchAllReq"``

#### Defined in

[src/qc_groups_pb.ts:1448](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1448)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

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

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:1472](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1472)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Defined in

[src/qc_groups_pb.ts:1460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1460)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Defined in

[src/qc_groups_pb.ts:1464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1464)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Defined in

[src/qc_groups_pb.ts:1468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1468)
