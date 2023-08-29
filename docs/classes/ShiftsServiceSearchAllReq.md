[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceSearchAllReq

# Class: ShiftsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.ShiftsServiceSearchAllReq

## Hierarchy

- `Message`<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\>

  ↳ **`ShiftsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceSearchAllReq.md#constructor)

### Properties

- [count](ShiftsServiceSearchAllReq.md#count)
- [entityUuid](ShiftsServiceSearchAllReq.md#entityuuid)
- [isActive](ShiftsServiceSearchAllReq.md#isactive)
- [offset](ShiftsServiceSearchAllReq.md#offset)
- [searchKey](ShiftsServiceSearchAllReq.md#searchkey)
- [sortKey](ShiftsServiceSearchAllReq.md#sortkey)
- [sortOrder](ShiftsServiceSearchAllReq.md#sortorder)
- [status](ShiftsServiceSearchAllReq.md#status)
- [fields](ShiftsServiceSearchAllReq.md#fields)
- [runtime](ShiftsServiceSearchAllReq.md#runtime)
- [typeName](ShiftsServiceSearchAllReq.md#typename)

### Methods

- [clone](ShiftsServiceSearchAllReq.md#clone)
- [equals](ShiftsServiceSearchAllReq.md#equals)
- [fromBinary](ShiftsServiceSearchAllReq.md#frombinary)
- [fromJson](ShiftsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ShiftsServiceSearchAllReq.md#fromjsonstring)
- [getType](ShiftsServiceSearchAllReq.md#gettype)
- [toBinary](ShiftsServiceSearchAllReq.md#tobinary)
- [toJSON](ShiftsServiceSearchAllReq.md#tojson)
- [toJson](ShiftsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ShiftsServiceSearchAllReq.md#tojsonstring)
- [equals](ShiftsServiceSearchAllReq.md#equals-1)
- [fromBinary](ShiftsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ShiftsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ShiftsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ShiftsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/shifts_pb.ts:996](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L996)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts_pb.ts:952](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L952)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/shifts_pb.ts:980](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L980)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shifts_pb.ts:945](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L945)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shifts_pb.ts:959](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L959)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/shifts_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L994)

___

### sortKey

• **sortKey**: [`SHIFT_SORT_KEY`](../enums/SHIFT_SORT_KEY.md) = `SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SHIFT_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts_pb.ts:973](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L973)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/shifts_pb.ts:966](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L966)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/shifts_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L987)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_pb.ts:1003](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L1003)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_pb.ts:1001](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L1001)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsServiceSearchAllReq"``

#### Defined in

[src/shifts_pb.ts:1002](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L1002)

## Methods

### clone

▸ **clone**(): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md) \| `PlainMessage`<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

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

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md) \| `PlainMessage`<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md) \| `PlainMessage`<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_pb.ts:1026](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L1026)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Defined in

[src/shifts_pb.ts:1014](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L1014)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Defined in

[src/shifts_pb.ts:1018](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L1018)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Defined in

[src/shifts_pb.ts:1022](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L1022)
