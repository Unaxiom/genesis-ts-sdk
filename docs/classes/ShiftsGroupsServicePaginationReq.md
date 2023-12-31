[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServicePaginationReq

# Class: ShiftsGroupsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.ShiftsGroupsServicePaginationReq

## Hierarchy

- `Message`<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\>

  ↳ **`ShiftsGroupsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServicePaginationReq.md#constructor)

### Properties

- [count](ShiftsGroupsServicePaginationReq.md#count)
- [isActive](ShiftsGroupsServicePaginationReq.md#isactive)
- [offset](ShiftsGroupsServicePaginationReq.md#offset)
- [sortKey](ShiftsGroupsServicePaginationReq.md#sortkey)
- [sortOrder](ShiftsGroupsServicePaginationReq.md#sortorder)
- [status](ShiftsGroupsServicePaginationReq.md#status)
- [fields](ShiftsGroupsServicePaginationReq.md#fields)
- [runtime](ShiftsGroupsServicePaginationReq.md#runtime)
- [typeName](ShiftsGroupsServicePaginationReq.md#typename)

### Methods

- [clone](ShiftsGroupsServicePaginationReq.md#clone)
- [equals](ShiftsGroupsServicePaginationReq.md#equals)
- [fromBinary](ShiftsGroupsServicePaginationReq.md#frombinary)
- [fromJson](ShiftsGroupsServicePaginationReq.md#fromjson)
- [fromJsonString](ShiftsGroupsServicePaginationReq.md#fromjsonstring)
- [getType](ShiftsGroupsServicePaginationReq.md#gettype)
- [toBinary](ShiftsGroupsServicePaginationReq.md#tobinary)
- [toJSON](ShiftsGroupsServicePaginationReq.md#tojson)
- [toJson](ShiftsGroupsServicePaginationReq.md#tojson-1)
- [toJsonString](ShiftsGroupsServicePaginationReq.md#tojsonstring)
- [equals](ShiftsGroupsServicePaginationReq.md#equals-1)
- [fromBinary](ShiftsGroupsServicePaginationReq.md#frombinary-1)
- [fromJson](ShiftsGroupsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\> |

#### Overrides

Message&lt;ShiftsGroupsServicePaginationReq\&gt;.constructor

#### Defined in

[src/shifts_groups_pb.ts:790](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L790)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts_groups_pb.ts:760](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L760)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shifts_groups_pb.ts:753](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L753)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shifts_groups_pb.ts:767](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L767)

___

### sortKey

• **sortKey**: [`SHIFT_GROUP_SORT_KEY`](../enums/SHIFT_GROUP_SORT_KEY.md) = `SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts_groups_pb.ts:781](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L781)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/shifts_groups_pb.ts:774](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L774)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/shifts_groups_pb.ts:788](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L788)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups_pb.ts:797](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L797)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups_pb.ts:795](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L795)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsGroupsServicePaginationReq"``

#### Defined in

[src/shifts_groups_pb.ts:796](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L796)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md) \| `PlainMessage`<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

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

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md) \| `PlainMessage`<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md) \| `PlainMessage`<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups_pb.ts:818](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L818)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Defined in

[src/shifts_groups_pb.ts:806](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L806)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Defined in

[src/shifts_groups_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L810)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Defined in

[src/shifts_groups_pb.ts:814](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L814)
