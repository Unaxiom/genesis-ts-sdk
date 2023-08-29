[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ApprovalMetadata

# Class: ApprovalMetadata

Describes the approval metadata of each resource

**`Generated`**

from message Genesis.ApprovalMetadata

## Hierarchy

- `Message`<[`ApprovalMetadata`](ApprovalMetadata.md)\>

  ↳ **`ApprovalMetadata`**

## Table of contents

### Constructors

- [constructor](ApprovalMetadata.md#constructor)

### Properties

- [approvedByUserId](ApprovalMetadata.md#approvedbyuserid)
- [approvedOn](ApprovalMetadata.md#approvedon)
- [approverRoleId](ApprovalMetadata.md#approverroleid)
- [fields](ApprovalMetadata.md#fields)
- [runtime](ApprovalMetadata.md#runtime)
- [typeName](ApprovalMetadata.md#typename)

### Methods

- [clone](ApprovalMetadata.md#clone)
- [equals](ApprovalMetadata.md#equals)
- [fromBinary](ApprovalMetadata.md#frombinary)
- [fromJson](ApprovalMetadata.md#fromjson)
- [fromJsonString](ApprovalMetadata.md#fromjsonstring)
- [getType](ApprovalMetadata.md#gettype)
- [toBinary](ApprovalMetadata.md#tobinary)
- [toJSON](ApprovalMetadata.md#tojson)
- [toJson](ApprovalMetadata.md#tojson-1)
- [toJsonString](ApprovalMetadata.md#tojsonstring)
- [equals](ApprovalMetadata.md#equals-1)
- [fromBinary](ApprovalMetadata.md#frombinary-1)
- [fromJson](ApprovalMetadata.md#fromjson-1)
- [fromJsonString](ApprovalMetadata.md#fromjsonstring-1)

## Constructors

### constructor

• **new ApprovalMetadata**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ApprovalMetadata`](ApprovalMetadata.md)\> |

#### Overrides

Message&lt;ApprovalMetadata\&gt;.constructor

#### Defined in

[src/base_pb.ts:774](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L774)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

Stores the ID of the user who approved this resource

**`Generated`**

from field: int64 approved_by_user_id = 2;

#### Defined in

[src/base_pb.ts:765](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L765)

___

### approvedOn

• **approvedOn**: `bigint` = `protoInt64.zero`

Stores the UNIX timestamp of when a resource was approved

**`Generated`**

from field: int64 approved_on = 1;

#### Defined in

[src/base_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L758)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

Stores the Role ID of the user who approved this resource at the time of approval. This needs to be stored, as the user's role is fluid

**`Generated`**

from field: int64 approver_role_id = 3;

#### Defined in

[src/base_pb.ts:772](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L772)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:781](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L781)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:779](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L779)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ApprovalMetadata"``

#### Defined in

[src/base_pb.ts:780](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L780)

## Methods

### clone

▸ **clone**(): [`ApprovalMetadata`](ApprovalMetadata.md)

Create a deep copy.

#### Returns

[`ApprovalMetadata`](ApprovalMetadata.md)

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
| `other` | `undefined` \| ``null`` \| [`ApprovalMetadata`](ApprovalMetadata.md) \| `PlainMessage`<[`ApprovalMetadata`](ApprovalMetadata.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ApprovalMetadata`](ApprovalMetadata.md)

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

[`ApprovalMetadata`](ApprovalMetadata.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ApprovalMetadata`](ApprovalMetadata.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ApprovalMetadata`](ApprovalMetadata.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ApprovalMetadata`](ApprovalMetadata.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ApprovalMetadata`](ApprovalMetadata.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ApprovalMetadata`](ApprovalMetadata.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ApprovalMetadata`](ApprovalMetadata.md)\>

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
| `a` | `undefined` \| [`ApprovalMetadata`](ApprovalMetadata.md) \| `PlainMessage`<[`ApprovalMetadata`](ApprovalMetadata.md)\> |
| `b` | `undefined` \| [`ApprovalMetadata`](ApprovalMetadata.md) \| `PlainMessage`<[`ApprovalMetadata`](ApprovalMetadata.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:799](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L799)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ApprovalMetadata`](ApprovalMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ApprovalMetadata`](ApprovalMetadata.md)

#### Defined in

[src/base_pb.ts:787](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L787)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ApprovalMetadata`](ApprovalMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ApprovalMetadata`](ApprovalMetadata.md)

#### Defined in

[src/base_pb.ts:791](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L791)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ApprovalMetadata`](ApprovalMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ApprovalMetadata`](ApprovalMetadata.md)

#### Defined in

[src/base_pb.ts:795](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L795)
