[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceSearchAllReq

# Class: ShiftsGroupsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.ShiftsGroupsServiceSearchAllReq

## Hierarchy

- `Message`<[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)\>

  ↳ **`ShiftsGroupsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceSearchAllReq.md#constructor)

### Properties

- [count](ShiftsGroupsServiceSearchAllReq.md#count)
- [entityUuid](ShiftsGroupsServiceSearchAllReq.md#entityuuid)
- [isActive](ShiftsGroupsServiceSearchAllReq.md#isactive)
- [offset](ShiftsGroupsServiceSearchAllReq.md#offset)
- [searchKey](ShiftsGroupsServiceSearchAllReq.md#searchkey)
- [sortKey](ShiftsGroupsServiceSearchAllReq.md#sortkey)
- [sortOrder](ShiftsGroupsServiceSearchAllReq.md#sortorder)
- [status](ShiftsGroupsServiceSearchAllReq.md#status)
- [fields](ShiftsGroupsServiceSearchAllReq.md#fields)
- [runtime](ShiftsGroupsServiceSearchAllReq.md#runtime)
- [typeName](ShiftsGroupsServiceSearchAllReq.md#typename)

### Methods

- [clone](ShiftsGroupsServiceSearchAllReq.md#clone)
- [equals](ShiftsGroupsServiceSearchAllReq.md#equals)
- [fromBinary](ShiftsGroupsServiceSearchAllReq.md#frombinary)
- [fromJson](ShiftsGroupsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceSearchAllReq.md#fromjsonstring)
- [getType](ShiftsGroupsServiceSearchAllReq.md#gettype)
- [toBinary](ShiftsGroupsServiceSearchAllReq.md#tobinary)
- [toJSON](ShiftsGroupsServiceSearchAllReq.md#tojson)
- [toJson](ShiftsGroupsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceSearchAllReq.md#tojsonstring)
- [equals](ShiftsGroupsServiceSearchAllReq.md#equals-1)
- [fromBinary](ShiftsGroupsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ShiftsGroupsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/shifts_groups_pb.ts:1204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1204)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts_groups_pb.ts:1160](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1160)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/shifts_groups_pb.ts:1188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1188)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shifts_groups_pb.ts:1153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1153)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shifts_groups_pb.ts:1167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1167)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/shifts_groups_pb.ts:1202](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1202)

___

### sortKey

• **sortKey**: [`SHIFT_GROUP_SORT_KEY`](../enums/SHIFT_GROUP_SORT_KEY.md) = `SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts_groups_pb.ts:1181](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1181)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/shifts_groups_pb.ts:1174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1174)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/shifts_groups_pb.ts:1195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1195)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups_pb.ts:1211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1211)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups_pb.ts:1209](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1209)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsGroupsServiceSearchAllReq"``

#### Defined in

[src/shifts_groups_pb.ts:1210](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1210)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

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

[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups_pb.ts:1234](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1234)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Defined in

[src/shifts_groups_pb.ts:1222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1222)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Defined in

[src/shifts_groups_pb.ts:1226](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1226)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceSearchAllReq`](ShiftsGroupsServiceSearchAllReq.md)

#### Defined in

[src/shifts_groups_pb.ts:1230](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L1230)
