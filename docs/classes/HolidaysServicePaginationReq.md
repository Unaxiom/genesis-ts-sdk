[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysServicePaginationReq

# Class: HolidaysServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.HolidaysServicePaginationReq

## Hierarchy

- `Message`<[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)\>

  ↳ **`HolidaysServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](HolidaysServicePaginationReq.md#constructor)

### Properties

- [count](HolidaysServicePaginationReq.md#count)
- [isActive](HolidaysServicePaginationReq.md#isactive)
- [offset](HolidaysServicePaginationReq.md#offset)
- [sortKey](HolidaysServicePaginationReq.md#sortkey)
- [sortOrder](HolidaysServicePaginationReq.md#sortorder)
- [status](HolidaysServicePaginationReq.md#status)
- [fields](HolidaysServicePaginationReq.md#fields)
- [runtime](HolidaysServicePaginationReq.md#runtime)
- [typeName](HolidaysServicePaginationReq.md#typename)

### Methods

- [clone](HolidaysServicePaginationReq.md#clone)
- [equals](HolidaysServicePaginationReq.md#equals)
- [fromBinary](HolidaysServicePaginationReq.md#frombinary)
- [fromJson](HolidaysServicePaginationReq.md#fromjson)
- [fromJsonString](HolidaysServicePaginationReq.md#fromjsonstring)
- [getType](HolidaysServicePaginationReq.md#gettype)
- [toBinary](HolidaysServicePaginationReq.md#tobinary)
- [toJSON](HolidaysServicePaginationReq.md#tojson)
- [toJson](HolidaysServicePaginationReq.md#tojson-1)
- [toJsonString](HolidaysServicePaginationReq.md#tojsonstring)
- [equals](HolidaysServicePaginationReq.md#equals-1)
- [fromBinary](HolidaysServicePaginationReq.md#frombinary-1)
- [fromJson](HolidaysServicePaginationReq.md#fromjson-1)
- [fromJsonString](HolidaysServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)\> |

#### Overrides

Message&lt;HolidaysServicePaginationReq\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:830](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L830)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/holidays_pb.ts:800](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L800)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/holidays_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L793)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/holidays_pb.ts:807](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L807)

___

### sortKey

• **sortKey**: [`HOLIDAY_SORT_KEY`](../enums/HOLIDAY_SORT_KEY.md) = `HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.HOLIDAY_SORT_KEY sort_key = 5;

#### Defined in

[src/holidays_pb.ts:821](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L821)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/holidays_pb.ts:814](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L814)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/holidays_pb.ts:828](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L828)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L837)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L835)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysServicePaginationReq"``

#### Defined in

[src/holidays_pb.ts:836](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L836)

## Methods

### clone

▸ **clone**(): [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

Create a deep copy.

#### Returns

[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md) \| `PlainMessage`<[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

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

[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md) \| `PlainMessage`<[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)\> |
| `b` | `undefined` \| [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md) \| `PlainMessage`<[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:858](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L858)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Defined in

[src/holidays_pb.ts:846](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L846)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Defined in

[src/holidays_pb.ts:850](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L850)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServicePaginationReq`](HolidaysServicePaginationReq.md)

#### Defined in

[src/holidays_pb.ts:854](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L854)
