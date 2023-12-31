[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceUpdateRequest

# Class: DepartmentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.DepartmentsServiceUpdateRequest

## Hierarchy

- `Message`<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\>

  ↳ **`DepartmentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceUpdateRequest.md#constructor)

### Properties

- [code](DepartmentsServiceUpdateRequest.md#code)
- [description](DepartmentsServiceUpdateRequest.md#description)
- [headUserId](DepartmentsServiceUpdateRequest.md#headuserid)
- [id](DepartmentsServiceUpdateRequest.md#id)
- [name](DepartmentsServiceUpdateRequest.md#name)
- [notifyUsers](DepartmentsServiceUpdateRequest.md#notifyusers)
- [userComment](DepartmentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](DepartmentsServiceUpdateRequest.md#vaultfolderid)
- [fields](DepartmentsServiceUpdateRequest.md#fields)
- [runtime](DepartmentsServiceUpdateRequest.md#runtime)
- [typeName](DepartmentsServiceUpdateRequest.md#typename)

### Methods

- [clone](DepartmentsServiceUpdateRequest.md#clone)
- [equals](DepartmentsServiceUpdateRequest.md#equals)
- [fromBinary](DepartmentsServiceUpdateRequest.md#frombinary)
- [fromJson](DepartmentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](DepartmentsServiceUpdateRequest.md#fromjsonstring)
- [getType](DepartmentsServiceUpdateRequest.md#gettype)
- [toBinary](DepartmentsServiceUpdateRequest.md#tobinary)
- [toJSON](DepartmentsServiceUpdateRequest.md#tojson)
- [toJson](DepartmentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](DepartmentsServiceUpdateRequest.md#tojsonstring)
- [equals](DepartmentsServiceUpdateRequest.md#equals-1)
- [fromBinary](DepartmentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](DepartmentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](DepartmentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;DepartmentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/departments_pb.ts:254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L254)

## Properties

### code

• **code**: `string` = `""`

The code of the department

**`Generated`**

from field: string code = 11;

#### Defined in

[src/departments_pb.ts:238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L238)

___

### description

• **description**: `string` = `""`

The description of the department

**`Generated`**

from field: string description = 13;

#### Defined in

[src/departments_pb.ts:252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L252)

___

### headUserId

• **headUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is the department head of this department

**`Generated`**

from field: int64 head_user_id = 12;

#### Defined in

[src/departments_pb.ts:245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L245)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/departments_pb.ts:210](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L210)

___

### name

• **name**: `string` = `""`

The name of the department

**`Generated`**

from field: string name = 10;

#### Defined in

[src/departments_pb.ts:231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L231)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/departments_pb.ts:217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L217)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/departments_pb.ts:203](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L203)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/departments_pb.ts:224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L224)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments_pb.ts:261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L261)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments_pb.ts:259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L259)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.DepartmentsServiceUpdateRequest"``

#### Defined in

[src/departments_pb.ts:260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L260)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md) \| `PlainMessage`<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

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

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md) \| `PlainMessage`<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md) \| `PlainMessage`<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments_pb.ts:284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L284)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Defined in

[src/departments_pb.ts:272](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L272)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Defined in

[src/departments_pb.ts:276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L276)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Defined in

[src/departments_pb.ts:280](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L280)
