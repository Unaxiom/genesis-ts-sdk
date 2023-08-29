[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UsersServiceSearchAllReq

# Class: UsersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.UsersServiceSearchAllReq

## Hierarchy

- `Message`<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

  ↳ **`UsersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceSearchAllReq.md#constructor)

### Properties

- [count](UsersServiceSearchAllReq.md#count)
- [entityUuid](UsersServiceSearchAllReq.md#entityuuid)
- [isActive](UsersServiceSearchAllReq.md#isactive)
- [offset](UsersServiceSearchAllReq.md#offset)
- [searchKey](UsersServiceSearchAllReq.md#searchkey)
- [sortKey](UsersServiceSearchAllReq.md#sortkey)
- [sortOrder](UsersServiceSearchAllReq.md#sortorder)
- [status](UsersServiceSearchAllReq.md#status)
- [fields](UsersServiceSearchAllReq.md#fields)
- [runtime](UsersServiceSearchAllReq.md#runtime)
- [typeName](UsersServiceSearchAllReq.md#typename)

### Methods

- [clone](UsersServiceSearchAllReq.md#clone)
- [equals](UsersServiceSearchAllReq.md#equals)
- [fromBinary](UsersServiceSearchAllReq.md#frombinary)
- [fromJson](UsersServiceSearchAllReq.md#fromjson)
- [fromJsonString](UsersServiceSearchAllReq.md#fromjsonstring)
- [getType](UsersServiceSearchAllReq.md#gettype)
- [toBinary](UsersServiceSearchAllReq.md#tobinary)
- [toJSON](UsersServiceSearchAllReq.md#tojson)
- [toJson](UsersServiceSearchAllReq.md#tojson-1)
- [toJsonString](UsersServiceSearchAllReq.md#tojsonstring)
- [equals](UsersServiceSearchAllReq.md#equals-1)
- [fromBinary](UsersServiceSearchAllReq.md#frombinary-1)
- [fromJson](UsersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](UsersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;UsersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/users_pb.ts:1607](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1607)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/users_pb.ts:1563](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1563)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/users_pb.ts:1591](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1591)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/users_pb.ts:1556](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1556)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/users_pb.ts:1570](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1570)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/users_pb.ts:1605](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1605)

___

### sortKey

• **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md) = `USER_SORT_KEY.USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.USER_SORT_KEY sort_key = 5;

#### Defined in

[src/users_pb.ts:1584](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1584)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/users_pb.ts:1577](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1577)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/users_pb.ts:1598](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1598)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:1614](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1614)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:1612](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1612)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UsersServiceSearchAllReq"``

#### Defined in

[src/users_pb.ts:1613](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1613)

## Methods

### clone

▸ **clone**(): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

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

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:1637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1637)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

[src/users_pb.ts:1625](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1625)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

[src/users_pb.ts:1629](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1629)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

[src/users_pb.ts:1633](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1633)
