[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceEntityPaginationReq

# Class: AttendancesAmendmentsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.AttendancesAmendmentsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)\>

  ↳ **`AttendancesAmendmentsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](AttendancesAmendmentsServiceEntityPaginationReq.md#count)
- [entityUuid](AttendancesAmendmentsServiceEntityPaginationReq.md#entityuuid)
- [isActive](AttendancesAmendmentsServiceEntityPaginationReq.md#isactive)
- [offset](AttendancesAmendmentsServiceEntityPaginationReq.md#offset)
- [sortKey](AttendancesAmendmentsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](AttendancesAmendmentsServiceEntityPaginationReq.md#sortorder)
- [fields](AttendancesAmendmentsServiceEntityPaginationReq.md#fields)
- [runtime](AttendancesAmendmentsServiceEntityPaginationReq.md#runtime)
- [typeName](AttendancesAmendmentsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceEntityPaginationReq.md#clone)
- [equals](AttendancesAmendmentsServiceEntityPaginationReq.md#equals)
- [fromBinary](AttendancesAmendmentsServiceEntityPaginationReq.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceEntityPaginationReq.md#gettype)
- [toBinary](AttendancesAmendmentsServiceEntityPaginationReq.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceEntityPaginationReq.md#tojson)
- [toJson](AttendancesAmendmentsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceEntityPaginationReq.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;AttendancesAmendmentsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/attendances_amendments_pb.ts:763](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L763)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/attendances_amendments_pb.ts:733](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L733)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/attendances_amendments_pb.ts:761](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L761)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/attendances_amendments_pb.ts:726](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L726)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/attendances_amendments_pb.ts:740](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L740)

___

### sortKey

• **sortKey**: [`ATTENDANCE_AMENDMENT_SORT_KEY`](../enums/ATTENDANCE_AMENDMENT_SORT_KEY.md) = `ATTENDANCE_AMENDMENT_SORT_KEY.ATTENDANCE_AMENDMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/attendances_amendments_pb.ts:754](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L754)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/attendances_amendments_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L747)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments_pb.ts:770](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L770)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments_pb.ts:768](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L768)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesAmendmentsServiceEntityPaginationReq"``

#### Defined in

[src/attendances_amendments_pb.ts:769](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L769)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

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

[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments_pb.ts:791](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L791)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:779](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L779)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:783](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L783)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceEntityPaginationReq`](AttendancesAmendmentsServiceEntityPaginationReq.md)

#### Defined in

[src/attendances_amendments_pb.ts:787](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L787)
