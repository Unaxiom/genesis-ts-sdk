[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ClientsServicePaginationReq

# Class: ClientsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.ClientsServicePaginationReq

## Hierarchy

- `Message`<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

  ↳ **`ClientsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ClientsServicePaginationReq.md#constructor)

### Properties

- [count](ClientsServicePaginationReq.md#count)
- [isActive](ClientsServicePaginationReq.md#isactive)
- [offset](ClientsServicePaginationReq.md#offset)
- [sortKey](ClientsServicePaginationReq.md#sortkey)
- [sortOrder](ClientsServicePaginationReq.md#sortorder)
- [status](ClientsServicePaginationReq.md#status)
- [fields](ClientsServicePaginationReq.md#fields)
- [runtime](ClientsServicePaginationReq.md#runtime)
- [typeName](ClientsServicePaginationReq.md#typename)

### Methods

- [clone](ClientsServicePaginationReq.md#clone)
- [equals](ClientsServicePaginationReq.md#equals)
- [fromBinary](ClientsServicePaginationReq.md#frombinary)
- [fromJson](ClientsServicePaginationReq.md#fromjson)
- [fromJsonString](ClientsServicePaginationReq.md#fromjsonstring)
- [getType](ClientsServicePaginationReq.md#gettype)
- [toBinary](ClientsServicePaginationReq.md#tobinary)
- [toJSON](ClientsServicePaginationReq.md#tojson)
- [toJson](ClientsServicePaginationReq.md#tojson-1)
- [toJsonString](ClientsServicePaginationReq.md#tojsonstring)
- [equals](ClientsServicePaginationReq.md#equals-1)
- [fromBinary](ClientsServicePaginationReq.md#frombinary-1)
- [fromJson](ClientsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ClientsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

#### Overrides

Message&lt;ClientsServicePaginationReq\&gt;.constructor

#### Defined in

[src/clients_pb.ts:519](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L519)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/clients_pb.ts:489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L489)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/clients_pb.ts:482](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L482)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/clients_pb.ts:496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L496)

___

### sortKey

• **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md) = `CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

[src/clients_pb.ts:510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L510)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/clients_pb.ts:503](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L503)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this client

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/clients_pb.ts:517](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L517)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients_pb.ts:526](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L526)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients_pb.ts:524](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L524)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ClientsServicePaginationReq"``

#### Defined in

[src/clients_pb.ts:525](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L525)

## Methods

### clone

▸ **clone**(): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

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

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients_pb.ts:547](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L547)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

[src/clients_pb.ts:535](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L535)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

[src/clients_pb.ts:539](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L539)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

[src/clients_pb.ts:543](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L543)
