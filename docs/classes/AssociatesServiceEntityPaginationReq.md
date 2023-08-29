[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceEntityPaginationReq

# Class: AssociatesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.AssociatesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)\>

  ↳ **`AssociatesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](AssociatesServiceEntityPaginationReq.md#count)
- [entityUuid](AssociatesServiceEntityPaginationReq.md#entityuuid)
- [isActive](AssociatesServiceEntityPaginationReq.md#isactive)
- [offset](AssociatesServiceEntityPaginationReq.md#offset)
- [sortKey](AssociatesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](AssociatesServiceEntityPaginationReq.md#sortorder)
- [fields](AssociatesServiceEntityPaginationReq.md#fields)
- [runtime](AssociatesServiceEntityPaginationReq.md#runtime)
- [typeName](AssociatesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](AssociatesServiceEntityPaginationReq.md#clone)
- [equals](AssociatesServiceEntityPaginationReq.md#equals)
- [fromBinary](AssociatesServiceEntityPaginationReq.md#frombinary)
- [fromJson](AssociatesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](AssociatesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](AssociatesServiceEntityPaginationReq.md#gettype)
- [toBinary](AssociatesServiceEntityPaginationReq.md#tobinary)
- [toJSON](AssociatesServiceEntityPaginationReq.md#tojson)
- [toJson](AssociatesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](AssociatesServiceEntityPaginationReq.md#tojsonstring)
- [equals](AssociatesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](AssociatesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](AssociatesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](AssociatesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;AssociatesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/associates_pb.ts:893](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L893)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/associates_pb.ts:863](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L863)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter associates

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/associates_pb.ts:891](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L891)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/associates_pb.ts:856](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L856)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/associates_pb.ts:870](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L870)

___

### sortKey

• **sortKey**: [`ASSOCIATE_SORT_KEY`](../enums/ASSOCIATE_SORT_KEY.md) = `ASSOCIATE_SORT_KEY.ASSOCIATE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ASSOCIATE_SORT_KEY sort_key = 5;

#### Defined in

[src/associates_pb.ts:884](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L884)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/associates_pb.ts:877](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L877)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates_pb.ts:900](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L900)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates_pb.ts:898](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L898)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssociatesServiceEntityPaginationReq"``

#### Defined in

[src/associates_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L899)

## Methods

### clone

▸ **clone**(): [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md) \| `PlainMessage`<[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

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

[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md) \| `PlainMessage`<[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md) \| `PlainMessage`<[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates_pb.ts:921](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L921)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Defined in

[src/associates_pb.ts:909](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L909)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Defined in

[src/associates_pb.ts:913](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L913)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceEntityPaginationReq`](AssociatesServiceEntityPaginationReq.md)

#### Defined in

[src/associates_pb.ts:917](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L917)
