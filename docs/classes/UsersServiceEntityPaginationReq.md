[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UsersServiceEntityPaginationReq

# Class: UsersServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.UsersServiceEntityPaginationReq

## Hierarchy

- `Message`<[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)\>

  ↳ **`UsersServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceEntityPaginationReq.md#constructor)

### Properties

- [count](UsersServiceEntityPaginationReq.md#count)
- [entityUuid](UsersServiceEntityPaginationReq.md#entityuuid)
- [isActive](UsersServiceEntityPaginationReq.md#isactive)
- [offset](UsersServiceEntityPaginationReq.md#offset)
- [sortKey](UsersServiceEntityPaginationReq.md#sortkey)
- [sortOrder](UsersServiceEntityPaginationReq.md#sortorder)
- [fields](UsersServiceEntityPaginationReq.md#fields)
- [runtime](UsersServiceEntityPaginationReq.md#runtime)
- [typeName](UsersServiceEntityPaginationReq.md#typename)

### Methods

- [clone](UsersServiceEntityPaginationReq.md#clone)
- [equals](UsersServiceEntityPaginationReq.md#equals)
- [fromBinary](UsersServiceEntityPaginationReq.md#frombinary)
- [fromJson](UsersServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](UsersServiceEntityPaginationReq.md#fromjsonstring)
- [getType](UsersServiceEntityPaginationReq.md#gettype)
- [toBinary](UsersServiceEntityPaginationReq.md#tobinary)
- [toJSON](UsersServiceEntityPaginationReq.md#tojson)
- [toJson](UsersServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](UsersServiceEntityPaginationReq.md#tojsonstring)
- [equals](UsersServiceEntityPaginationReq.md#equals-1)
- [fromBinary](UsersServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](UsersServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](UsersServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;UsersServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/users_pb.ts:1261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1261)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/users_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1231)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/users_pb.ts:1259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1259)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/users_pb.ts:1224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1224)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/users_pb.ts:1238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1238)

___

### sortKey

• **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md) = `USER_SORT_KEY.USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.USER_SORT_KEY sort_key = 5;

#### Defined in

[src/users_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1252)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/users_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1245)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:1268](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1268)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:1266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1266)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UsersServiceEntityPaginationReq"``

#### Defined in

[src/users_pb.ts:1267](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1267)

## Methods

### clone

▸ **clone**(): [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md) \| `PlainMessage`<[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

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

[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md) \| `PlainMessage`<[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md) \| `PlainMessage`<[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:1289](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1289)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Defined in

[src/users_pb.ts:1277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1277)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Defined in

[src/users_pb.ts:1281](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1281)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceEntityPaginationReq`](UsersServiceEntityPaginationReq.md)

#### Defined in

[src/users_pb.ts:1285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L1285)
