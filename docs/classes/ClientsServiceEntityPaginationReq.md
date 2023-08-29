[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceEntityPaginationReq

# Class: ClientsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.ClientsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)\>

  ↳ **`ClientsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](ClientsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](ClientsServiceEntityPaginationReq.md#count)
- [entityUuid](ClientsServiceEntityPaginationReq.md#entityuuid)
- [isActive](ClientsServiceEntityPaginationReq.md#isactive)
- [offset](ClientsServiceEntityPaginationReq.md#offset)
- [sortKey](ClientsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](ClientsServiceEntityPaginationReq.md#sortorder)
- [fields](ClientsServiceEntityPaginationReq.md#fields)
- [runtime](ClientsServiceEntityPaginationReq.md#runtime)
- [typeName](ClientsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](ClientsServiceEntityPaginationReq.md#clone)
- [equals](ClientsServiceEntityPaginationReq.md#equals)
- [fromBinary](ClientsServiceEntityPaginationReq.md#frombinary)
- [fromJson](ClientsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](ClientsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](ClientsServiceEntityPaginationReq.md#gettype)
- [toBinary](ClientsServiceEntityPaginationReq.md#tobinary)
- [toJSON](ClientsServiceEntityPaginationReq.md#tojson)
- [toJson](ClientsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](ClientsServiceEntityPaginationReq.md#tojsonstring)
- [equals](ClientsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](ClientsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](ClientsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](ClientsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;ClientsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/clients_pb.ts:667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L667)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/clients_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L637)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/clients_pb.ts:665](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L665)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/clients_pb.ts:630](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L630)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/clients_pb.ts:644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L644)

___

### sortKey

• **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md) = `CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

[src/clients_pb.ts:658](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L658)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/clients_pb.ts:651](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L651)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L674)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients_pb.ts:672](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L672)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ClientsServiceEntityPaginationReq"``

#### Defined in

[src/clients_pb.ts:673](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L673)

## Methods

### clone

▸ **clone**(): [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

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

[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients_pb.ts:695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L695)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Defined in

[src/clients_pb.ts:683](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L683)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Defined in

[src/clients_pb.ts:687](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L687)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceEntityPaginationReq`](ClientsServiceEntityPaginationReq.md)

#### Defined in

[src/clients_pb.ts:691](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L691)
