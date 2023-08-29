[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceUpdateRequest

# Class: AssetIndentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.AssetIndentsServiceUpdateRequest

## Hierarchy

- `Message`<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\>

  ↳ **`AssetIndentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceUpdateRequest.md#constructor)

### Properties

- [formData](AssetIndentsServiceUpdateRequest.md#formdata)
- [id](AssetIndentsServiceUpdateRequest.md#id)
- [notifyUsers](AssetIndentsServiceUpdateRequest.md#notifyusers)
- [projectId](AssetIndentsServiceUpdateRequest.md#projectid)
- [referenceId](AssetIndentsServiceUpdateRequest.md#referenceid)
- [userComment](AssetIndentsServiceUpdateRequest.md#usercomment)
- [userId](AssetIndentsServiceUpdateRequest.md#userid)
- [vaultFolderId](AssetIndentsServiceUpdateRequest.md#vaultfolderid)
- [fields](AssetIndentsServiceUpdateRequest.md#fields)
- [runtime](AssetIndentsServiceUpdateRequest.md#runtime)
- [typeName](AssetIndentsServiceUpdateRequest.md#typename)

### Methods

- [clone](AssetIndentsServiceUpdateRequest.md#clone)
- [equals](AssetIndentsServiceUpdateRequest.md#equals)
- [fromBinary](AssetIndentsServiceUpdateRequest.md#frombinary)
- [fromJson](AssetIndentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](AssetIndentsServiceUpdateRequest.md#fromjsonstring)
- [getType](AssetIndentsServiceUpdateRequest.md#gettype)
- [toBinary](AssetIndentsServiceUpdateRequest.md#tobinary)
- [toJSON](AssetIndentsServiceUpdateRequest.md#tojson)
- [toJson](AssetIndentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](AssetIndentsServiceUpdateRequest.md#tojsonstring)
- [equals](AssetIndentsServiceUpdateRequest.md#equals-1)
- [fromBinary](AssetIndentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](AssetIndentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;AssetIndentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/asset_indents_pb.ts:263](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L263)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/asset_indents_pb.ts:261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L261)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/asset_indents_pb.ts:219](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L219)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/asset_indents_pb.ts:226](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L226)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 8;

#### Defined in

[src/asset_indents_pb.ts:233](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L233)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the asset indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/asset_indents_pb.ts:247](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L247)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/asset_indents_pb.ts:212](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L212)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: int64 user_id = 15;

#### Defined in

[src/asset_indents_pb.ts:254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L254)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/asset_indents_pb.ts:240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L240)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents_pb.ts:270](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L270)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents_pb.ts:268](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L268)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssetIndentsServiceUpdateRequest"``

#### Defined in

[src/asset_indents_pb.ts:269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L269)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

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

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md) \| `PlainMessage`<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents_pb.ts:293](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L293)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Defined in

[src/asset_indents_pb.ts:281](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L281)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Defined in

[src/asset_indents_pb.ts:285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L285)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Defined in

[src/asset_indents_pb.ts:289](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L289)
