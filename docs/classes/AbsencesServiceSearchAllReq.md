[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceSearchAllReq

# Class: AbsencesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.AbsencesServiceSearchAllReq

## Hierarchy

- `Message`<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\>

  ↳ **`AbsencesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceSearchAllReq.md#constructor)

### Properties

- [count](AbsencesServiceSearchAllReq.md#count)
- [entityUuid](AbsencesServiceSearchAllReq.md#entityuuid)
- [isActive](AbsencesServiceSearchAllReq.md#isactive)
- [offset](AbsencesServiceSearchAllReq.md#offset)
- [searchKey](AbsencesServiceSearchAllReq.md#searchkey)
- [sortKey](AbsencesServiceSearchAllReq.md#sortkey)
- [sortOrder](AbsencesServiceSearchAllReq.md#sortorder)
- [status](AbsencesServiceSearchAllReq.md#status)
- [userId](AbsencesServiceSearchAllReq.md#userid)
- [fields](AbsencesServiceSearchAllReq.md#fields)
- [runtime](AbsencesServiceSearchAllReq.md#runtime)
- [typeName](AbsencesServiceSearchAllReq.md#typename)

### Methods

- [clone](AbsencesServiceSearchAllReq.md#clone)
- [equals](AbsencesServiceSearchAllReq.md#equals)
- [fromBinary](AbsencesServiceSearchAllReq.md#frombinary)
- [fromJson](AbsencesServiceSearchAllReq.md#fromjson)
- [fromJsonString](AbsencesServiceSearchAllReq.md#fromjsonstring)
- [getType](AbsencesServiceSearchAllReq.md#gettype)
- [toBinary](AbsencesServiceSearchAllReq.md#tobinary)
- [toJSON](AbsencesServiceSearchAllReq.md#tojson)
- [toJson](AbsencesServiceSearchAllReq.md#tojson-1)
- [toJsonString](AbsencesServiceSearchAllReq.md#tojsonstring)
- [equals](AbsencesServiceSearchAllReq.md#equals-1)
- [fromBinary](AbsencesServiceSearchAllReq.md#frombinary-1)
- [fromJson](AbsencesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AbsencesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;AbsencesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/absences_pb.ts:1134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1134)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/absences_pb.ts:1083](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1083)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/absences_pb.ts:1111](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1111)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/absences_pb.ts:1076](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1076)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/absences_pb.ts:1090](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1090)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/absences_pb.ts:1125](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1125)

___

### sortKey

• **sortKey**: [`ABSENCE_SORT_KEY`](../enums/ABSENCE_SORT_KEY.md) = `ABSENCE_SORT_KEY.ABSENCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ABSENCE_SORT_KEY sort_key = 5;

#### Defined in

[src/absences_pb.ts:1104](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1104)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/absences_pb.ts:1097](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1097)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/absences_pb.ts:1118](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1118)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has been marked as absent

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/absences_pb.ts:1132](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1132)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences_pb.ts:1141](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1141)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences_pb.ts:1139](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1139)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AbsencesServiceSearchAllReq"``

#### Defined in

[src/absences_pb.ts:1140](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1140)

## Methods

### clone

▸ **clone**(): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md) \| `PlainMessage`<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

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

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md) \| `PlainMessage`<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md) \| `PlainMessage`<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1165)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Defined in

[src/absences_pb.ts:1153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1153)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Defined in

[src/absences_pb.ts:1157](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1157)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Defined in

[src/absences_pb.ts:1161](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L1161)
