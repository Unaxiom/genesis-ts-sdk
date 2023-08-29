[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProjectsServicePaginationResponse

# Class: ProjectsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.ProjectsServicePaginationResponse

## Hierarchy

- `Message`<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\>

  ↳ **`ProjectsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ProjectsServicePaginationResponse.md#constructor)

### Properties

- [count](ProjectsServicePaginationResponse.md#count)
- [offset](ProjectsServicePaginationResponse.md#offset)
- [payload](ProjectsServicePaginationResponse.md#payload)
- [total](ProjectsServicePaginationResponse.md#total)
- [fields](ProjectsServicePaginationResponse.md#fields)
- [runtime](ProjectsServicePaginationResponse.md#runtime)
- [typeName](ProjectsServicePaginationResponse.md#typename)

### Methods

- [clone](ProjectsServicePaginationResponse.md#clone)
- [equals](ProjectsServicePaginationResponse.md#equals)
- [fromBinary](ProjectsServicePaginationResponse.md#frombinary)
- [fromJson](ProjectsServicePaginationResponse.md#fromjson)
- [fromJsonString](ProjectsServicePaginationResponse.md#fromjsonstring)
- [getType](ProjectsServicePaginationResponse.md#gettype)
- [toBinary](ProjectsServicePaginationResponse.md#tobinary)
- [toJSON](ProjectsServicePaginationResponse.md#tojson)
- [toJson](ProjectsServicePaginationResponse.md#tojson-1)
- [toJsonString](ProjectsServicePaginationResponse.md#tojsonstring)
- [equals](ProjectsServicePaginationResponse.md#equals-1)
- [fromBinary](ProjectsServicePaginationResponse.md#frombinary-1)
- [fromJson](ProjectsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ProjectsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;ProjectsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/projects_pb.ts:571](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L571)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/projects_pb.ts:548](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L548)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/projects_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L555)

___

### payload

• **payload**: [`Project`](Project.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Project payload = 4;

#### Defined in

[src/projects_pb.ts:569](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L569)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/projects_pb.ts:562](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L562)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L578)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects_pb.ts:576](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L576)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProjectsServicePaginationResponse"``

#### Defined in

[src/projects_pb.ts:577](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L577)

## Methods

### clone

▸ **clone**(): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md) \| `PlainMessage`<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

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

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md) \| `PlainMessage`<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md) \| `PlainMessage`<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects_pb.ts:597](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L597)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Defined in

[src/projects_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L585)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Defined in

[src/projects_pb.ts:589](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L589)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Defined in

[src/projects_pb.ts:593](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L593)
