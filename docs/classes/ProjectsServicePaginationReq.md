[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProjectsServicePaginationReq

# Class: ProjectsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.ProjectsServicePaginationReq

## Hierarchy

- `Message`<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\>

  ↳ **`ProjectsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ProjectsServicePaginationReq.md#constructor)

### Properties

- [count](ProjectsServicePaginationReq.md#count)
- [isActive](ProjectsServicePaginationReq.md#isactive)
- [offset](ProjectsServicePaginationReq.md#offset)
- [sortKey](ProjectsServicePaginationReq.md#sortkey)
- [sortOrder](ProjectsServicePaginationReq.md#sortorder)
- [status](ProjectsServicePaginationReq.md#status)
- [fields](ProjectsServicePaginationReq.md#fields)
- [runtime](ProjectsServicePaginationReq.md#runtime)
- [typeName](ProjectsServicePaginationReq.md#typename)

### Methods

- [clone](ProjectsServicePaginationReq.md#clone)
- [equals](ProjectsServicePaginationReq.md#equals)
- [fromBinary](ProjectsServicePaginationReq.md#frombinary)
- [fromJson](ProjectsServicePaginationReq.md#fromjson)
- [fromJsonString](ProjectsServicePaginationReq.md#fromjsonstring)
- [getType](ProjectsServicePaginationReq.md#gettype)
- [toBinary](ProjectsServicePaginationReq.md#tobinary)
- [toJSON](ProjectsServicePaginationReq.md#tojson)
- [toJson](ProjectsServicePaginationReq.md#tojson-1)
- [toJsonString](ProjectsServicePaginationReq.md#tojsonstring)
- [equals](ProjectsServicePaginationReq.md#equals-1)
- [fromBinary](ProjectsServicePaginationReq.md#frombinary-1)
- [fromJson](ProjectsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ProjectsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\> |

#### Overrides

Message&lt;ProjectsServicePaginationReq\&gt;.constructor

#### Defined in

[src/projects_pb.ts:503](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L503)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/projects_pb.ts:473](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L473)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/projects_pb.ts:466](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L466)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/projects_pb.ts:480](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L480)

___

### sortKey

• **sortKey**: [`PROJECT_SORT_KEY`](../enums/PROJECT_SORT_KEY.md) = `PROJECT_SORT_KEY.PROJECT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PROJECT_SORT_KEY sort_key = 5;

#### Defined in

[src/projects_pb.ts:494](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L494)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/projects_pb.ts:487](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L487)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this project

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/projects_pb.ts:501](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L501)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects_pb.ts:510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L510)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects_pb.ts:508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L508)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProjectsServicePaginationReq"``

#### Defined in

[src/projects_pb.ts:509](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L509)

## Methods

### clone

▸ **clone**(): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md) \| `PlainMessage`<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

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

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md) \| `PlainMessage`<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md) \| `PlainMessage`<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects_pb.ts:531](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L531)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Defined in

[src/projects_pb.ts:519](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L519)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Defined in

[src/projects_pb.ts:523](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L523)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Defined in

[src/projects_pb.ts:527](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L527)
