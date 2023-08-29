[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceSearchAllReq

# Class: HolidaysServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.HolidaysServiceSearchAllReq

## Hierarchy

- `Message`<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\>

  ↳ **`HolidaysServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceSearchAllReq.md#constructor)

### Properties

- [count](HolidaysServiceSearchAllReq.md#count)
- [entityUuid](HolidaysServiceSearchAllReq.md#entityuuid)
- [isActive](HolidaysServiceSearchAllReq.md#isactive)
- [offset](HolidaysServiceSearchAllReq.md#offset)
- [searchKey](HolidaysServiceSearchAllReq.md#searchkey)
- [sortKey](HolidaysServiceSearchAllReq.md#sortkey)
- [sortOrder](HolidaysServiceSearchAllReq.md#sortorder)
- [status](HolidaysServiceSearchAllReq.md#status)
- [fields](HolidaysServiceSearchAllReq.md#fields)
- [runtime](HolidaysServiceSearchAllReq.md#runtime)
- [typeName](HolidaysServiceSearchAllReq.md#typename)

### Methods

- [clone](HolidaysServiceSearchAllReq.md#clone)
- [equals](HolidaysServiceSearchAllReq.md#equals)
- [fromBinary](HolidaysServiceSearchAllReq.md#frombinary)
- [fromJson](HolidaysServiceSearchAllReq.md#fromjson)
- [fromJsonString](HolidaysServiceSearchAllReq.md#fromjsonstring)
- [getType](HolidaysServiceSearchAllReq.md#gettype)
- [toBinary](HolidaysServiceSearchAllReq.md#tobinary)
- [toJSON](HolidaysServiceSearchAllReq.md#tojson)
- [toJson](HolidaysServiceSearchAllReq.md#tojson-1)
- [toJsonString](HolidaysServiceSearchAllReq.md#tojsonstring)
- [equals](HolidaysServiceSearchAllReq.md#equals-1)
- [fromBinary](HolidaysServiceSearchAllReq.md#frombinary-1)
- [fromJson](HolidaysServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](HolidaysServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;HolidaysServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:1276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1276)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/holidays_pb.ts:1232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1232)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/holidays_pb.ts:1260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1260)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/holidays_pb.ts:1225](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1225)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/holidays_pb.ts:1239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1239)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/holidays_pb.ts:1274](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1274)

___

### sortKey

• **sortKey**: [`HOLIDAY_SORT_KEY`](../enums/HOLIDAY_SORT_KEY.md) = `HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.HOLIDAY_SORT_KEY sort_key = 5;

#### Defined in

[src/holidays_pb.ts:1253](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1253)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/holidays_pb.ts:1246](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1246)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/holidays_pb.ts:1267](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1267)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:1283](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1283)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:1281](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1281)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysServiceSearchAllReq"``

#### Defined in

[src/holidays_pb.ts:1282](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1282)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md) \| `PlainMessage`<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

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

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md) \| `PlainMessage`<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md) \| `PlainMessage`<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:1306](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1306)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Defined in

[src/holidays_pb.ts:1294](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1294)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Defined in

[src/holidays_pb.ts:1298](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1298)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Defined in

[src/holidays_pb.ts:1302](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L1302)
