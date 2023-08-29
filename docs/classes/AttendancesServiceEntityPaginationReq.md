[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesServiceEntityPaginationReq

# Class: AttendancesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.AttendancesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)\>

  ↳ **`AttendancesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](AttendancesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](AttendancesServiceEntityPaginationReq.md#count)
- [entityUuid](AttendancesServiceEntityPaginationReq.md#entityuuid)
- [isActive](AttendancesServiceEntityPaginationReq.md#isactive)
- [offset](AttendancesServiceEntityPaginationReq.md#offset)
- [sortKey](AttendancesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](AttendancesServiceEntityPaginationReq.md#sortorder)
- [fields](AttendancesServiceEntityPaginationReq.md#fields)
- [runtime](AttendancesServiceEntityPaginationReq.md#runtime)
- [typeName](AttendancesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](AttendancesServiceEntityPaginationReq.md#clone)
- [equals](AttendancesServiceEntityPaginationReq.md#equals)
- [fromBinary](AttendancesServiceEntityPaginationReq.md#frombinary)
- [fromJson](AttendancesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](AttendancesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](AttendancesServiceEntityPaginationReq.md#gettype)
- [toBinary](AttendancesServiceEntityPaginationReq.md#tobinary)
- [toJSON](AttendancesServiceEntityPaginationReq.md#tojson)
- [toJson](AttendancesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](AttendancesServiceEntityPaginationReq.md#tojsonstring)
- [equals](AttendancesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](AttendancesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](AttendancesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](AttendancesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;AttendancesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/attendances_pb.ts:875](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L875)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/attendances_pb.ts:845](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L845)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/attendances_pb.ts:873](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L873)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/attendances_pb.ts:838](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L838)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/attendances_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L852)

___

### sortKey

• **sortKey**: [`ATTENDANCE_SORT_KEY`](../enums/ATTENDANCE_SORT_KEY.md) = `ATTENDANCE_SORT_KEY.ATTENDANCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ATTENDANCE_SORT_KEY sort_key = 5;

#### Defined in

[src/attendances_pb.ts:866](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L866)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/attendances_pb.ts:859](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L859)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_pb.ts:882](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L882)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_pb.ts:880](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L880)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesServiceEntityPaginationReq"``

#### Defined in

[src/attendances_pb.ts:881](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L881)

## Methods

### clone

▸ **clone**(): [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md) \| `PlainMessage`<[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

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

[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md) \| `PlainMessage`<[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md) \| `PlainMessage`<[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_pb.ts:903](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L903)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Defined in

[src/attendances_pb.ts:891](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L891)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Defined in

[src/attendances_pb.ts:895](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L895)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceEntityPaginationReq`](AttendancesServiceEntityPaginationReq.md)

#### Defined in

[src/attendances_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L899)
