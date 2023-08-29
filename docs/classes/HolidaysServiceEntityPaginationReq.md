[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceEntityPaginationReq

# Class: HolidaysServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.HolidaysServiceEntityPaginationReq

## Hierarchy

- `Message`<[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)\>

  ↳ **`HolidaysServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceEntityPaginationReq.md#constructor)

### Properties

- [count](HolidaysServiceEntityPaginationReq.md#count)
- [entityUuid](HolidaysServiceEntityPaginationReq.md#entityuuid)
- [isActive](HolidaysServiceEntityPaginationReq.md#isactive)
- [offset](HolidaysServiceEntityPaginationReq.md#offset)
- [sortKey](HolidaysServiceEntityPaginationReq.md#sortkey)
- [sortOrder](HolidaysServiceEntityPaginationReq.md#sortorder)
- [fields](HolidaysServiceEntityPaginationReq.md#fields)
- [runtime](HolidaysServiceEntityPaginationReq.md#runtime)
- [typeName](HolidaysServiceEntityPaginationReq.md#typename)

### Methods

- [clone](HolidaysServiceEntityPaginationReq.md#clone)
- [equals](HolidaysServiceEntityPaginationReq.md#equals)
- [fromBinary](HolidaysServiceEntityPaginationReq.md#frombinary)
- [fromJson](HolidaysServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](HolidaysServiceEntityPaginationReq.md#fromjsonstring)
- [getType](HolidaysServiceEntityPaginationReq.md#gettype)
- [toBinary](HolidaysServiceEntityPaginationReq.md#tobinary)
- [toJSON](HolidaysServiceEntityPaginationReq.md#tojson)
- [toJson](HolidaysServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](HolidaysServiceEntityPaginationReq.md#tojsonstring)
- [equals](HolidaysServiceEntityPaginationReq.md#equals-1)
- [fromBinary](HolidaysServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](HolidaysServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](HolidaysServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;HolidaysServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:978](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L978)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/holidays_pb.ts:948](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L948)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/holidays_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L976)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/holidays_pb.ts:941](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L941)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/holidays_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L955)

___

### sortKey

• **sortKey**: [`HOLIDAY_SORT_KEY`](../enums/HOLIDAY_SORT_KEY.md) = `HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.HOLIDAY_SORT_KEY sort_key = 5;

#### Defined in

[src/holidays_pb.ts:969](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L969)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/holidays_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L962)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:985](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L985)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:983](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L983)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysServiceEntityPaginationReq"``

#### Defined in

[src/holidays_pb.ts:984](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L984)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md) \| `PlainMessage`<[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

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

[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md) \| `PlainMessage`<[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md) \| `PlainMessage`<[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:1006](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1006)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Defined in

[src/holidays_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L994)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Defined in

[src/holidays_pb.ts:998](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L998)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceEntityPaginationReq`](HolidaysServiceEntityPaginationReq.md)

#### Defined in

[src/holidays_pb.ts:1002](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1002)
