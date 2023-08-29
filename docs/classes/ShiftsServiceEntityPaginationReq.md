[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceEntityPaginationReq

# Class: ShiftsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.ShiftsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)\>

  ↳ **`ShiftsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](ShiftsServiceEntityPaginationReq.md#count)
- [entityUuid](ShiftsServiceEntityPaginationReq.md#entityuuid)
- [isActive](ShiftsServiceEntityPaginationReq.md#isactive)
- [offset](ShiftsServiceEntityPaginationReq.md#offset)
- [sortKey](ShiftsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](ShiftsServiceEntityPaginationReq.md#sortorder)
- [fields](ShiftsServiceEntityPaginationReq.md#fields)
- [runtime](ShiftsServiceEntityPaginationReq.md#runtime)
- [typeName](ShiftsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](ShiftsServiceEntityPaginationReq.md#clone)
- [equals](ShiftsServiceEntityPaginationReq.md#equals)
- [fromBinary](ShiftsServiceEntityPaginationReq.md#frombinary)
- [fromJson](ShiftsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](ShiftsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](ShiftsServiceEntityPaginationReq.md#gettype)
- [toBinary](ShiftsServiceEntityPaginationReq.md#tobinary)
- [toJSON](ShiftsServiceEntityPaginationReq.md#tojson)
- [toJson](ShiftsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](ShiftsServiceEntityPaginationReq.md#tojsonstring)
- [equals](ShiftsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](ShiftsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](ShiftsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](ShiftsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;ShiftsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/shifts_pb.ts:730](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L730)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts_pb.ts:700](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L700)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/shifts_pb.ts:728](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L728)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shifts_pb.ts:693](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L693)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shifts_pb.ts:707](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L707)

___

### sortKey

• **sortKey**: [`SHIFT_SORT_KEY`](../enums/SHIFT_SORT_KEY.md) = `SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SHIFT_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts_pb.ts:721](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L721)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/shifts_pb.ts:714](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L714)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_pb.ts:737](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L737)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_pb.ts:735](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L735)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsServiceEntityPaginationReq"``

#### Defined in

[src/shifts_pb.ts:736](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L736)

## Methods

### clone

▸ **clone**(): [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

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

[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L758)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Defined in

[src/shifts_pb.ts:746](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L746)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Defined in

[src/shifts_pb.ts:750](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L750)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceEntityPaginationReq`](ShiftsServiceEntityPaginationReq.md)

#### Defined in

[src/shifts_pb.ts:754](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L754)
