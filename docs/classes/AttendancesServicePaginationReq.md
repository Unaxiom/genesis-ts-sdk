[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesServicePaginationReq

# Class: AttendancesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.AttendancesServicePaginationReq

## Hierarchy

- `Message`<[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)\>

  ↳ **`AttendancesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](AttendancesServicePaginationReq.md#constructor)

### Properties

- [count](AttendancesServicePaginationReq.md#count)
- [isActive](AttendancesServicePaginationReq.md#isactive)
- [offset](AttendancesServicePaginationReq.md#offset)
- [sortKey](AttendancesServicePaginationReq.md#sortkey)
- [sortOrder](AttendancesServicePaginationReq.md#sortorder)
- [status](AttendancesServicePaginationReq.md#status)
- [fields](AttendancesServicePaginationReq.md#fields)
- [runtime](AttendancesServicePaginationReq.md#runtime)
- [typeName](AttendancesServicePaginationReq.md#typename)

### Methods

- [clone](AttendancesServicePaginationReq.md#clone)
- [equals](AttendancesServicePaginationReq.md#equals)
- [fromBinary](AttendancesServicePaginationReq.md#frombinary)
- [fromJson](AttendancesServicePaginationReq.md#fromjson)
- [fromJsonString](AttendancesServicePaginationReq.md#fromjsonstring)
- [getType](AttendancesServicePaginationReq.md#gettype)
- [toBinary](AttendancesServicePaginationReq.md#tobinary)
- [toJSON](AttendancesServicePaginationReq.md#tojson)
- [toJson](AttendancesServicePaginationReq.md#tojson-1)
- [toJsonString](AttendancesServicePaginationReq.md#tojsonstring)
- [equals](AttendancesServicePaginationReq.md#equals-1)
- [fromBinary](AttendancesServicePaginationReq.md#frombinary-1)
- [fromJson](AttendancesServicePaginationReq.md#fromjson-1)
- [fromJsonString](AttendancesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)\> |

#### Overrides

Message&lt;AttendancesServicePaginationReq\&gt;.constructor

#### Defined in

[src/attendances_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L727)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/attendances_pb.ts:697](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L697)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/attendances_pb.ts:690](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L690)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/attendances_pb.ts:704](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L704)

___

### sortKey

• **sortKey**: [`ATTENDANCE_SORT_KEY`](../enums/ATTENDANCE_SORT_KEY.md) = `ATTENDANCE_SORT_KEY.ATTENDANCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ATTENDANCE_SORT_KEY sort_key = 5;

#### Defined in

[src/attendances_pb.ts:718](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L718)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/attendances_pb.ts:711](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L711)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this attendance

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/attendances_pb.ts:725](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L725)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_pb.ts:734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L734)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_pb.ts:732](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L732)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesServicePaginationReq"``

#### Defined in

[src/attendances_pb.ts:733](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L733)

## Methods

### clone

▸ **clone**(): [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md) \| `PlainMessage`<[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

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

[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md) \| `PlainMessage`<[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md) \| `PlainMessage`<[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_pb.ts:755](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L755)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Defined in

[src/attendances_pb.ts:743](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L743)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Defined in

[src/attendances_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L747)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesServicePaginationReq`](AttendancesServicePaginationReq.md)

#### Defined in

[src/attendances_pb.ts:751](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_pb.ts#L751)
