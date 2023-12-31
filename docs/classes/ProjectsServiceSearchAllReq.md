[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceSearchAllReq

# Class: ProjectsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.ProjectsServiceSearchAllReq

## Hierarchy

- `Message`<[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)\>

  ↳ **`ProjectsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceSearchAllReq.md#constructor)

### Properties

- [clientId](ProjectsServiceSearchAllReq.md#clientid)
- [count](ProjectsServiceSearchAllReq.md#count)
- [entityUuid](ProjectsServiceSearchAllReq.md#entityuuid)
- [isActive](ProjectsServiceSearchAllReq.md#isactive)
- [offset](ProjectsServiceSearchAllReq.md#offset)
- [searchKey](ProjectsServiceSearchAllReq.md#searchkey)
- [sortKey](ProjectsServiceSearchAllReq.md#sortkey)
- [sortOrder](ProjectsServiceSearchAllReq.md#sortorder)
- [status](ProjectsServiceSearchAllReq.md#status)
- [fields](ProjectsServiceSearchAllReq.md#fields)
- [runtime](ProjectsServiceSearchAllReq.md#runtime)
- [typeName](ProjectsServiceSearchAllReq.md#typename)

### Methods

- [clone](ProjectsServiceSearchAllReq.md#clone)
- [equals](ProjectsServiceSearchAllReq.md#equals)
- [fromBinary](ProjectsServiceSearchAllReq.md#frombinary)
- [fromJson](ProjectsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ProjectsServiceSearchAllReq.md#fromjsonstring)
- [getType](ProjectsServiceSearchAllReq.md#gettype)
- [toBinary](ProjectsServiceSearchAllReq.md#tobinary)
- [toJSON](ProjectsServiceSearchAllReq.md#tojson)
- [toJson](ProjectsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ProjectsServiceSearchAllReq.md#tojsonstring)
- [equals](ProjectsServiceSearchAllReq.md#equals-1)
- [fromBinary](ProjectsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ProjectsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ProjectsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ProjectsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/projects_pb.ts:932](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L932)

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client. Returns all record if it is set to -1. 0 is a valid filter too.

**`Generated`**

from field: int64 client_id = 21;

#### Defined in

[src/projects_pb.ts:930](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L930)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/projects_pb.ts:881](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L881)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/projects_pb.ts:909](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L909)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/projects_pb.ts:874](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L874)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/projects_pb.ts:888](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L888)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/projects_pb.ts:923](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L923)

___

### sortKey

• **sortKey**: [`PROJECT_SORT_KEY`](../enums/PROJECT_SORT_KEY.md) = `PROJECT_SORT_KEY.PROJECT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PROJECT_SORT_KEY sort_key = 5;

#### Defined in

[src/projects_pb.ts:902](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L902)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/projects_pb.ts:895](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L895)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/projects_pb.ts:916](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L916)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects_pb.ts:939](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L939)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects_pb.ts:937](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L937)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProjectsServiceSearchAllReq"``

#### Defined in

[src/projects_pb.ts:938](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L938)

## Methods

### clone

▸ **clone**(): [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md) \| `PlainMessage`<[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

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

[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md) \| `PlainMessage`<[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md) \| `PlainMessage`<[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects_pb.ts:963](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L963)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Defined in

[src/projects_pb.ts:951](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L951)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Defined in

[src/projects_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L955)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceSearchAllReq`](ProjectsServiceSearchAllReq.md)

#### Defined in

[src/projects_pb.ts:959](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L959)
