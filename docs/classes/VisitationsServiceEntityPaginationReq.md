[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceEntityPaginationReq

# Class: VisitationsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.VisitationsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)\>

  ↳ **`VisitationsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](VisitationsServiceEntityPaginationReq.md#count)
- [entityUuid](VisitationsServiceEntityPaginationReq.md#entityuuid)
- [isActive](VisitationsServiceEntityPaginationReq.md#isactive)
- [offset](VisitationsServiceEntityPaginationReq.md#offset)
- [sortKey](VisitationsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](VisitationsServiceEntityPaginationReq.md#sortorder)
- [fields](VisitationsServiceEntityPaginationReq.md#fields)
- [runtime](VisitationsServiceEntityPaginationReq.md#runtime)
- [typeName](VisitationsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](VisitationsServiceEntityPaginationReq.md#clone)
- [equals](VisitationsServiceEntityPaginationReq.md#equals)
- [fromBinary](VisitationsServiceEntityPaginationReq.md#frombinary)
- [fromJson](VisitationsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](VisitationsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](VisitationsServiceEntityPaginationReq.md#gettype)
- [toBinary](VisitationsServiceEntityPaginationReq.md#tobinary)
- [toJSON](VisitationsServiceEntityPaginationReq.md#tojson)
- [toJson](VisitationsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](VisitationsServiceEntityPaginationReq.md#tojsonstring)
- [equals](VisitationsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](VisitationsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](VisitationsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](VisitationsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;VisitationsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/visitations_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L915)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/visitations_pb.ts:885](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L885)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/visitations_pb.ts:913](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L913)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/visitations_pb.ts:878](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L878)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/visitations_pb.ts:892](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L892)

___

### sortKey

• **sortKey**: [`VISITATION_SORT_KEY`](../enums/VISITATION_SORT_KEY.md) = `VISITATION_SORT_KEY.VISITATION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.VISITATION_SORT_KEY sort_key = 5;

#### Defined in

[src/visitations_pb.ts:906](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L906)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/visitations_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L899)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations_pb.ts:922](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L922)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L920)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.VisitationsServiceEntityPaginationReq"``

#### Defined in

[src/visitations_pb.ts:921](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L921)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md) \| `PlainMessage`<[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

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

[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md) \| `PlainMessage`<[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md) \| `PlainMessage`<[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L943)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Defined in

[src/visitations_pb.ts:931](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L931)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Defined in

[src/visitations_pb.ts:935](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L935)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceEntityPaginationReq`](VisitationsServiceEntityPaginationReq.md)

#### Defined in

[src/visitations_pb.ts:939](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L939)
