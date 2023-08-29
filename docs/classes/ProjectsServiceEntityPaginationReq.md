[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceEntityPaginationReq

# Class: ProjectsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.ProjectsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)\>

  ↳ **`ProjectsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](ProjectsServiceEntityPaginationReq.md#count)
- [entityUuid](ProjectsServiceEntityPaginationReq.md#entityuuid)
- [isActive](ProjectsServiceEntityPaginationReq.md#isactive)
- [offset](ProjectsServiceEntityPaginationReq.md#offset)
- [sortKey](ProjectsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](ProjectsServiceEntityPaginationReq.md#sortorder)
- [fields](ProjectsServiceEntityPaginationReq.md#fields)
- [runtime](ProjectsServiceEntityPaginationReq.md#runtime)
- [typeName](ProjectsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](ProjectsServiceEntityPaginationReq.md#clone)
- [equals](ProjectsServiceEntityPaginationReq.md#equals)
- [fromBinary](ProjectsServiceEntityPaginationReq.md#frombinary)
- [fromJson](ProjectsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](ProjectsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](ProjectsServiceEntityPaginationReq.md#gettype)
- [toBinary](ProjectsServiceEntityPaginationReq.md#tobinary)
- [toJSON](ProjectsServiceEntityPaginationReq.md#tojson)
- [toJson](ProjectsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](ProjectsServiceEntityPaginationReq.md#tojsonstring)
- [equals](ProjectsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](ProjectsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](ProjectsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](ProjectsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;ProjectsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/projects_pb.ts:651](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L651)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/projects_pb.ts:621](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L621)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/projects_pb.ts:649](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L649)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/projects_pb.ts:614](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L614)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/projects_pb.ts:628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L628)

___

### sortKey

• **sortKey**: [`PROJECT_SORT_KEY`](../enums/PROJECT_SORT_KEY.md) = `PROJECT_SORT_KEY.PROJECT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PROJECT_SORT_KEY sort_key = 5;

#### Defined in

[src/projects_pb.ts:642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L642)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/projects_pb.ts:635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L635)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects_pb.ts:658](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L658)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects_pb.ts:656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L656)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProjectsServiceEntityPaginationReq"``

#### Defined in

[src/projects_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L657)

## Methods

### clone

▸ **clone**(): [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

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

[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md) \| `PlainMessage`<[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects_pb.ts:679](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L679)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Defined in

[src/projects_pb.ts:667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L667)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Defined in

[src/projects_pb.ts:671](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L671)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceEntityPaginationReq`](ProjectsServiceEntityPaginationReq.md)

#### Defined in

[src/projects_pb.ts:675](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L675)
