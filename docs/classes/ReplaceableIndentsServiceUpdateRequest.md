[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceUpdateRequest

# Class: ReplaceableIndentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.ReplaceableIndentsServiceUpdateRequest

## Hierarchy

- `Message`<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\>

  ↳ **`ReplaceableIndentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceUpdateRequest.md#constructor)

### Properties

- [description](ReplaceableIndentsServiceUpdateRequest.md#description)
- [formData](ReplaceableIndentsServiceUpdateRequest.md#formdata)
- [id](ReplaceableIndentsServiceUpdateRequest.md#id)
- [notifyUsers](ReplaceableIndentsServiceUpdateRequest.md#notifyusers)
- [referenceId](ReplaceableIndentsServiceUpdateRequest.md#referenceid)
- [supervisor](ReplaceableIndentsServiceUpdateRequest.md#supervisor)
- [userComment](ReplaceableIndentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ReplaceableIndentsServiceUpdateRequest.md#vaultfolderid)
- [fields](ReplaceableIndentsServiceUpdateRequest.md#fields)
- [runtime](ReplaceableIndentsServiceUpdateRequest.md#runtime)
- [typeName](ReplaceableIndentsServiceUpdateRequest.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceUpdateRequest.md#clone)
- [equals](ReplaceableIndentsServiceUpdateRequest.md#equals)
- [fromBinary](ReplaceableIndentsServiceUpdateRequest.md#frombinary)
- [fromJson](ReplaceableIndentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceUpdateRequest.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceUpdateRequest.md#gettype)
- [toBinary](ReplaceableIndentsServiceUpdateRequest.md#tobinary)
- [toJSON](ReplaceableIndentsServiceUpdateRequest.md#tojson)
- [toJson](ReplaceableIndentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceUpdateRequest.md#tojsonstring)
- [equals](ReplaceableIndentsServiceUpdateRequest.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:279](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L279)

## Properties

### description

• **description**: `string` = `""`

The description of the replaceable indent

**`Generated`**

from field: string description = 16;

#### Defined in

[src/replaceable_indents_pb.ts:270](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L270)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/replaceable_indents_pb.ts:277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L277)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/replaceable_indents_pb.ts:235](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L235)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/replaceable_indents_pb.ts:242](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L242)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the replaceable indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/replaceable_indents_pb.ts:256](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L256)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 13;

#### Defined in

[src/replaceable_indents_pb.ts:263](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L263)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/replaceable_indents_pb.ts:228](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L228)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/replaceable_indents_pb.ts:249](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L249)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:286](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L286)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L284)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServiceUpdateRequest"``

#### Defined in

[src/replaceable_indents_pb.ts:285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L285)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

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

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:309](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L309)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L297)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:301](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L301)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:305](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L305)
