[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceSearchAllReq

# Class: AttendancesAmendmentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.AttendancesAmendmentsServiceSearchAllReq

## Hierarchy

- `Message`<[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)\>

  ↳ **`AttendancesAmendmentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceSearchAllReq.md#constructor)

### Properties

- [count](AttendancesAmendmentsServiceSearchAllReq.md#count)
- [entityUuid](AttendancesAmendmentsServiceSearchAllReq.md#entityuuid)
- [isActive](AttendancesAmendmentsServiceSearchAllReq.md#isactive)
- [offset](AttendancesAmendmentsServiceSearchAllReq.md#offset)
- [searchKey](AttendancesAmendmentsServiceSearchAllReq.md#searchkey)
- [sortKey](AttendancesAmendmentsServiceSearchAllReq.md#sortkey)
- [sortOrder](AttendancesAmendmentsServiceSearchAllReq.md#sortorder)
- [status](AttendancesAmendmentsServiceSearchAllReq.md#status)
- [userId](AttendancesAmendmentsServiceSearchAllReq.md#userid)
- [fields](AttendancesAmendmentsServiceSearchAllReq.md#fields)
- [runtime](AttendancesAmendmentsServiceSearchAllReq.md#runtime)
- [typeName](AttendancesAmendmentsServiceSearchAllReq.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceSearchAllReq.md#clone)
- [equals](AttendancesAmendmentsServiceSearchAllReq.md#equals)
- [fromBinary](AttendancesAmendmentsServiceSearchAllReq.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceSearchAllReq.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceSearchAllReq.md#gettype)
- [toBinary](AttendancesAmendmentsServiceSearchAllReq.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceSearchAllReq.md#tojson)
- [toJson](AttendancesAmendmentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceSearchAllReq.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceSearchAllReq.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;AttendancesAmendmentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/attendances_amendments_pb.ts:1116](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1116)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/attendances_amendments_pb.ts:1065](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1065)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/attendances_amendments_pb.ts:1093](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1093)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/attendances_amendments_pb.ts:1058](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1058)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/attendances_amendments_pb.ts:1072](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1072)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/attendances_amendments_pb.ts:1107](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1107)

___

### sortKey

• **sortKey**: [`ATTENDANCE_AMENDMENT_SORT_KEY`](../enums/ATTENDANCE_AMENDMENT_SORT_KEY.md) = `ATTENDANCE_AMENDMENT_SORT_KEY.ATTENDANCE_AMENDMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/attendances_amendments_pb.ts:1086](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1086)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/attendances_amendments_pb.ts:1079](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1079)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/attendances_amendments_pb.ts:1100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1100)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for attendance amendment

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/attendances_amendments_pb.ts:1114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1114)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments_pb.ts:1123](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1123)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments_pb.ts:1121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1121)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesAmendmentsServiceSearchAllReq"``

#### Defined in

[src/attendances_amendments_pb.ts:1122](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1122)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

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

[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments_pb.ts:1147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1147)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:1135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1135)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:1139](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1139)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceSearchAllReq`](AttendancesAmendmentsServiceSearchAllReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:1143](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L1143)
