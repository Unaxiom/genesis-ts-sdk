[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceSearchAllReq

# Class: ClientsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.ClientsServiceSearchAllReq

## Hierarchy

- `Message`<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\>

  ↳ **`ClientsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ClientsServiceSearchAllReq.md#constructor)

### Properties

- [count](ClientsServiceSearchAllReq.md#count)
- [entityUuid](ClientsServiceSearchAllReq.md#entityuuid)
- [isActive](ClientsServiceSearchAllReq.md#isactive)
- [offset](ClientsServiceSearchAllReq.md#offset)
- [searchKey](ClientsServiceSearchAllReq.md#searchkey)
- [sortKey](ClientsServiceSearchAllReq.md#sortkey)
- [sortOrder](ClientsServiceSearchAllReq.md#sortorder)
- [status](ClientsServiceSearchAllReq.md#status)
- [fields](ClientsServiceSearchAllReq.md#fields)
- [runtime](ClientsServiceSearchAllReq.md#runtime)
- [typeName](ClientsServiceSearchAllReq.md#typename)

### Methods

- [clone](ClientsServiceSearchAllReq.md#clone)
- [equals](ClientsServiceSearchAllReq.md#equals)
- [fromBinary](ClientsServiceSearchAllReq.md#frombinary)
- [fromJson](ClientsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ClientsServiceSearchAllReq.md#fromjsonstring)
- [getType](ClientsServiceSearchAllReq.md#gettype)
- [toBinary](ClientsServiceSearchAllReq.md#tobinary)
- [toJSON](ClientsServiceSearchAllReq.md#tojson)
- [toJson](ClientsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ClientsServiceSearchAllReq.md#tojsonstring)
- [equals](ClientsServiceSearchAllReq.md#equals-1)
- [fromBinary](ClientsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ClientsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ClientsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ClientsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/clients_pb.ts:933](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L933)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/clients_pb.ts:889](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L889)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/clients_pb.ts:917](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L917)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/clients_pb.ts:882](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L882)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/clients_pb.ts:896](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L896)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/clients_pb.ts:931](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L931)

___

### sortKey

• **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md) = `CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

[src/clients_pb.ts:910](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L910)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/clients_pb.ts:903](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L903)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/clients_pb.ts:924](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L924)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients_pb.ts:940](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L940)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients_pb.ts:938](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L938)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ClientsServiceSearchAllReq"``

#### Defined in

[src/clients_pb.ts:939](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L939)

## Methods

### clone

▸ **clone**(): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md) \| `PlainMessage`<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

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

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md) \| `PlainMessage`<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md) \| `PlainMessage`<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients_pb.ts:963](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L963)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Defined in

[src/clients_pb.ts:951](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L951)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Defined in

[src/clients_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L955)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Defined in

[src/clients_pb.ts:959](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L959)
