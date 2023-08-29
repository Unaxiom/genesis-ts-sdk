[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceEntityPaginationReq

# Class: ShiftsGroupsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.ShiftsGroupsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)\>

  ↳ **`ShiftsGroupsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](ShiftsGroupsServiceEntityPaginationReq.md#count)
- [entityUuid](ShiftsGroupsServiceEntityPaginationReq.md#entityuuid)
- [isActive](ShiftsGroupsServiceEntityPaginationReq.md#isactive)
- [offset](ShiftsGroupsServiceEntityPaginationReq.md#offset)
- [sortKey](ShiftsGroupsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](ShiftsGroupsServiceEntityPaginationReq.md#sortorder)
- [fields](ShiftsGroupsServiceEntityPaginationReq.md#fields)
- [runtime](ShiftsGroupsServiceEntityPaginationReq.md#runtime)
- [typeName](ShiftsGroupsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](ShiftsGroupsServiceEntityPaginationReq.md#clone)
- [equals](ShiftsGroupsServiceEntityPaginationReq.md#equals)
- [fromBinary](ShiftsGroupsServiceEntityPaginationReq.md#frombinary)
- [fromJson](ShiftsGroupsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](ShiftsGroupsServiceEntityPaginationReq.md#gettype)
- [toBinary](ShiftsGroupsServiceEntityPaginationReq.md#tobinary)
- [toJSON](ShiftsGroupsServiceEntityPaginationReq.md#tojson)
- [toJson](ShiftsGroupsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceEntityPaginationReq.md#tojsonstring)
- [equals](ShiftsGroupsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](ShiftsGroupsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;ShiftsGroupsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/shifts_groups_pb.ts:938](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L938)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts_groups_pb.ts:908](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L908)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/shifts_groups_pb.ts:936](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L936)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shifts_groups_pb.ts:901](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L901)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shifts_groups_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L915)

___

### sortKey

• **sortKey**: [`SHIFT_GROUP_SORT_KEY`](../enums/SHIFT_GROUP_SORT_KEY.md) = `SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SHIFT_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts_groups_pb.ts:929](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L929)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/shifts_groups_pb.ts:922](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L922)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups_pb.ts:945](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L945)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L943)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsGroupsServiceEntityPaginationReq"``

#### Defined in

[src/shifts_groups_pb.ts:944](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L944)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

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

[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups_pb.ts:966](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L966)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/shifts_groups_pb.ts:954](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L954)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/shifts_groups_pb.ts:958](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L958)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceEntityPaginationReq`](ShiftsGroupsServiceEntityPaginationReq.md)

#### Defined in

[src/shifts_groups_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_groups_pb.ts#L962)
