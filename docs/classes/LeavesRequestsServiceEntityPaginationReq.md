[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServiceEntityPaginationReq

# Class: LeavesRequestsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.LeavesRequestsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)\>

  ↳ **`LeavesRequestsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](LeavesRequestsServiceEntityPaginationReq.md#count)
- [entityUuid](LeavesRequestsServiceEntityPaginationReq.md#entityuuid)
- [isActive](LeavesRequestsServiceEntityPaginationReq.md#isactive)
- [offset](LeavesRequestsServiceEntityPaginationReq.md#offset)
- [sortKey](LeavesRequestsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](LeavesRequestsServiceEntityPaginationReq.md#sortorder)
- [fields](LeavesRequestsServiceEntityPaginationReq.md#fields)
- [runtime](LeavesRequestsServiceEntityPaginationReq.md#runtime)
- [typeName](LeavesRequestsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](LeavesRequestsServiceEntityPaginationReq.md#clone)
- [equals](LeavesRequestsServiceEntityPaginationReq.md#equals)
- [fromBinary](LeavesRequestsServiceEntityPaginationReq.md#frombinary)
- [fromJson](LeavesRequestsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](LeavesRequestsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](LeavesRequestsServiceEntityPaginationReq.md#gettype)
- [toBinary](LeavesRequestsServiceEntityPaginationReq.md#tobinary)
- [toJSON](LeavesRequestsServiceEntityPaginationReq.md#tojson)
- [toJson](LeavesRequestsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](LeavesRequestsServiceEntityPaginationReq.md#tojsonstring)
- [equals](LeavesRequestsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](LeavesRequestsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](LeavesRequestsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](LeavesRequestsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;LeavesRequestsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/leaves_requests_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L747)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_requests_pb.ts:717](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L717)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/leaves_requests_pb.ts:745](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L745)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/leaves_requests_pb.ts:710](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L710)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/leaves_requests_pb.ts:724](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L724)

___

### sortKey

• **sortKey**: [`LEAVE_REQUEST_SORT_KEY`](../enums/LEAVE_REQUEST_SORT_KEY.md) = `LEAVE_REQUEST_SORT_KEY.LEAVE_REQUEST_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.LEAVE_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_requests_pb.ts:738](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L738)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_requests_pb.ts:731](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L731)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests_pb.ts:754](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L754)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests_pb.ts:752](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L752)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesRequestsServiceEntityPaginationReq"``

#### Defined in

[src/leaves_requests_pb.ts:753](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L753)

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

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

[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md) \| `PlainMessage`<[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests_pb.ts:775](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L775)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_requests_pb.ts:763](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L763)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_requests_pb.ts:767](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L767)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceEntityPaginationReq`](LeavesRequestsServiceEntityPaginationReq.md)

#### Defined in

[src/leaves_requests_pb.ts:771](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_requests_pb.ts#L771)
